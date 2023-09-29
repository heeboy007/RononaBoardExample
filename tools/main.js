
const SheetApiClientFactory = require('./sheet_api_client_factory');
const SheetDownloader = require('./sheet_downloader');

async function main(){
	try{
		const sheetApiClient = await SheetApiClientFactory.create();
		const downloader = new SheetDownloader(sheetApiClient);
		
		const spreadSheetId = '1z2d4gBO8JSI8SEotnHDKdcq8EQ9X4O5fWPxeUCAqW1c';
		
		const notice = await downloader.downloadToJson(
			spreadSheetId,
			'notice',
			'downloaded/notice.json',
		);
		
		console.log(notice);
		
		const countryInfo = await downloader.downloadToJson(
			spreadSheetId,
			'countryInfo',
			'downloaded/countryInfo.json',
		);
		
		console.log(countryInfo);
	} catch (e) {
		console.error(e);
	}
}

main();