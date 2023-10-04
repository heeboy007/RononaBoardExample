const axios = require('axios');
const cheerio = require('cheerio');

async function main() {
	const resp = await axios.get(
		'https://yjiq150.github.io/coronaboard-crawling-sample/example-data.json'
	);
	
	console.log(resp.data.content);
}

main();