const https = require('https');
const fs = require('fs');

copyFromWeb(
	'https://openeocloud.vito.be/openeo/1.0.0/processes',
	'.vuepress/public/assets/processes.json'
);
// ToDo: Update OpenAPI to be Platform specific
copyFromWeb(
	'https://raw.githubusercontent.com/Open-EO/openeo-api/1.1.0/openapi.yaml',
	'.vuepress/public/assets/openapi.yaml'
);

// https://api.github.com/repos/Open-EO/openeo.org/git/trees/master?recursive=true

function copyFromWeb(from, to) {
	var file = fs.createWriteStream(to);
	https.get(from, response => {
		response.pipe(file);
		file.on('finish', () => {
			file.close();
			console.log("Downloaded file " + from + " and saved to " + to);
		});
	}).on('error', (err) => { 
		fs.unlink(to);
		console.warn("Downloading file " + from + "failed:", err);
	});
}