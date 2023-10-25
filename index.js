const path = require("node:path");
const fs = require("node:fs/promises");
const Generator = require("@asyncapi/generator");
const {recursiveDownload} = require('gh-retrieve');
const generator = new Generator('@asyncapi/html-template', path.resolve(__dirname, 'dist/asyncapi'), {

	forceWrite: true,
	templateParams: {
		sidebarOrganization: "byTagsNoRoot",
		// baseHref: "",
		// singleFile: true,
	}
});


const downloadSwagger = async () => {
	await fetch("https://api.github.com/repos/swagger-api/swagger-ui/releases/latest").then((res)=>
		res.json()
	).then((res)=>res.tag_name).then((tag)=>{
		return recursiveDownload({
			author: "swagger-api", //repository owner
			repo: "swagger-ui", //repository name
			targetdir: "dist", //target directory to download
			outdir: "dist/openapi", //directory to download in,
			branch: tag
		 })
	}).then(()=>{
		console.log("Swagger Downloaded Successfully");
		Promise.all([
			fs.readFile("./dist/openapi/swagger-initializer.js", "utf8").then((content)=>{
				content.replace("https://petstore.swagger.io/v2/swagger.json","https://schema.linc.world/openapi.json");
				fs.writeFile("./dist/openapi/swagger-initializer.js", content);
			}),
		])
	})
}
const main = async () => {
	await downloadSwagger();
	await generator.generateFromFile('./schemas/asyncapi.json');
	await fs.copyFile("./schemas/asyncapi.json","./dist/asyncapi.json");
	await fs.copyFile("./schemas/openapi.json","./dist/openapi.json");
	await fs.writeFile("./dist/index.html","");
}

main();
// https://github.com/swagger-api/swagger-ui/tree/v5.9.1/dist
