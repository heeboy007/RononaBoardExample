const axios = require('axios');
const cheerio = require('cheerio');

const vm = require('vm');

async function main() {
	const resp = await axios.get(
		'https://yjiq150.github.io/coronaboard-crawling-sample/dom-with-script'
	);
	
	const $ = cheerio.load(resp.data);
	const extractedCode = $('script').first().html();
	
	//일단 보안 관련한 부분은 여기서 좀 더 연구할 필요가 있을듯?
	const context = {};
	vm.createContext(context);
	vm.runInContext(extractedCode, context);
	
	console.log(context.dataExample.content);
}

main();