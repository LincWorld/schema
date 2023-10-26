const path = require("node:path");
const fs = require("node:fs/promises");
const showdown = require("showdown");
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
	await fs.stat(process.env.NODE_ENV != "production" ? './docs/openapi/index.html' : './file/never/found').catch(async () => {
		const res = await fetch("https://api.github.com/repos/swagger-api/swagger-ui/releases/latest", {
			headers: {
				...(process.env.GITHUB_TOKEN && { 'Authorization': 'Bearer ' + process.env.GITHUB_TOKEN })
			}
		});
		const res_1 = await res.json();
		const tag = res_1.tag_name;
		return await recursiveDownload({
			author: "swagger-api",
			repo: "swagger-ui",
			targetdir: "dist",
			outdir: "docs/openapi",
			branch: tag
		});
	}).then(() => {
		console.log("Swagger Downloaded Successfully");
	})
}
const main = async () => {
	await generator.generateFromFile('./schemas/asyncapi.json');
	await downloadSwagger();
	await Promise.all([
		fs.readFile("./docs/openapi/swagger-initializer.js", "utf8").then((content) => {
			content = content.replace(/petstore\.swagger\.io\/v2\/swagger\.json/m, "schema.linc.world/openapi.json");
			content = content.replace(/  layout:/m, "  queryConfigEnabled: true,\n  showCommonExtensions:true,\n  docExpansion:\"none\",\n  layout:");
			fs.writeFile("./docs/openapi/swagger-initializer.js", content);
		}),
		fs.readFile("./docs/openapi/index.html", "utf8").then((content) => {
			content = content.replaceAll(/<link rel="icon".*/gm, "");
			content = content.replace(/  <\/head>/gm, '    <link rel="icon" href="/favicon.svg">\n  </head>');
			fs.writeFile("./docs/openapi/index.html", content);
		}),
		fs.readFile("./docs/asyncapi/index.html", "utf8").then((content) => {
			content = content.replaceAll(/<link rel="icon".*/gm, "");
			content = content.replace(/  <\/head>/gm, '    <link rel="icon" href="/favicon.svg">\n  </head>');
			fs.writeFile("./docs/asyncapi/index.html", content);
		}),
		fs.readFile("./README.md", "utf8").then((content) => {
			const html = new showdown.Converter({ completeHTMLDocument: true }).makeHtml(content);
			fs.writeFile("./docs/index.html", html);
		}),
	])
	await fs.copyFile("./schemas/asyncapi.json", "./docs/asyncapi.json");
	await fs.copyFile("./schemas/openapi.json", "./docs/openapi.json");
	await fs.writeFile("./docs/CNAME", "schema.linc.world");
}

main();
