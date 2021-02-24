#!/usr/bin/env node
'use strict';

const path = require('path');
const baseURL = process.env.BASE_URL;
const command = path.basename(process.argv[1]);
const { URL } = require('url');
const usage = `${command} <input>

Provided the path to a schema module (e.g. src/User.js), ${command}
will write the formatted JSON schema to stdout.
`;

function isAbsoluteUrl(url) {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``);
	}

	// Don't match Windows paths `c:\`
	if (/^[a-zA-Z]:\\/.test(url)) {
		return false;
	}

	// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
	// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
	return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
};

function fail(message) {
	process.stderr.write(message);
	process.exit(1);
}

function resolveRefs(jsonObj, input) {
	if (jsonObj !== null && typeof jsonObj == "object") {
		Object.entries(jsonObj).forEach(([key, value]) => {
			// key is either an array index or object key
			if (key == "$ref") {
				if (!isAbsoluteUrl(value))
					jsonObj[key] = new URL(path.relative(path.join(__dirname, "./src"), path.resolve(path.dirname(input), value)), baseURL)
			}
			resolveRefs(value, input);
		});
	}
	else {
		// jsonObj is a number or string
	}
}

if (require.main === module) {
	if (!process.argv[2]) {
		fail(usage);
	}
	const input = path.resolve(process.argv[2]);
	let json;
	try {
		json = require(input);
	} catch (err) {
		fail(`Failed to import ${input}: ${err.message}\n`);
	}
	const schema = Object.assign(
		{
			$schema: 'http://json-schema.org/draft-07/schema#',
			$id: new URL(path.relative(path.join(__dirname, "./src"), input).replace(".js", ".json"), baseURL)
		},
		json
	);
	resolveRefs(schema, input);
	process.stdout.write(JSON.stringify(schema, null, 2) + '\n');
}
