const path = require("node:path");
const fs = require("node:fs/promises");
const Generator = require("@asyncapi/generator");
const { recursiveDownload } = require('gh-retrieve');
const generator = new Generator('@asyncapi/html-template', path.resolve(__dirname, 'docs/asyncapi'), {

	forceWrite: true,
	templateParams: {
		sidebarOrganization: "byTagsNoRoot",
		// baseHref: "",
		// singleFile: true,
	}
});


const downloadSwagger = async () => {
	await fs.stat('./docs/openapi/index.html').then((stat) => {
		if (stat.isFile) {
			console.log("Swagger already downloaded");
			return;
		}
		return fetch("https://api.github.com/repos/swagger-api/swagger-ui/releases/latest").then((res) =>
			res.json()
		).then((res) => res.tag_name).then((tag) => {
			return recursiveDownload({
				author: "swagger-api", //repository owner
				repo: "swagger-ui", //repository name
				targetdir: "dist", //target directory to download
				outdir: "docs/openapi", //directory to download in,
				branch: tag
			})
		})
	}).then(() => {
		console.log("Swagger Downloaded Successfully");
		Promise.all([
			fs.readFile("./docs/openapi/swagger-initializer.js", "utf8").then((content) => {
				content = content.replace(/petstore\.swagger\.io\/v2\/swagger\.json/m, "schema.linc.world/openapi.json");
				fs.writeFile("./docs/openapi/swagger-initializer.js", content);
			}),
		])
	})
}
const main = async () => {
	await downloadSwagger();
	await generator.generateFromFile('./schemas/asyncapi.json');
	await fs.copyFile("./schemas/asyncapi.json", "./docs/asyncapi.json");
	await fs.copyFile("./schemas/openapi.json", "./docs/openapi.json");
	await fs.writeFile("./docs/index.html", "");
}

main();
