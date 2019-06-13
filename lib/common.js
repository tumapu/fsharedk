const cheerio = require('cheerio')
const rp = require('request-promise');

// Get source HTML from url
const getSource = async (url) => {
	try {
		let options = {
			uri: url,
			resolveWithFullResponse: true,
		};
		const response = await rp(options);
		// console.log('HEADERS: ' + response.headers['set-cookie']);
		return response.body;
	} catch (error) {
		return error;
	}
};

// // Get code CSRF from source Fshare
// const getCSRF = async (responseFshare) => {
// 	try {
// 		let $ = cheerio.load(responseFshare.body);
// 		const csrfCode = await $("meta[name='csrf-token']").attr("content");
// 		const CSRFandHeaders = [];
// 		CSRFandHeaders[0] = csrfCode.substring(0, csrfCode.length - 2); // Remove 2 last char is '=='
// 		CSRFandHeaders[1] = responseFshare.headers;
// 		return CSRFandHeaders;

// 	} catch (error) {
// 		return error;
// 	}
// }

// getSource('https://fshare.vn').then(console.log)

module.exports = {
	getSource: getSource,
	// getCSRF: getCSRF,
};