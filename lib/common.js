const cheerio = require('cheerio')
const request = require("request");
const rp = require('request-promise');

// Get source HTML from url
const getSource = async (url) => {
	try {
		const response = await rp.get(url);
		return response;
	} catch (error) {
		return error;
	}
};

// Get code CSRF from source Fshare
const getCSRF = async (sourceFshare) => {
	try {
		let $ = cheerio.load(sourceFshare);
		const csrfCode = await $("meta[name='csrf-token']").attr("content");
		// Remove '==' character
		return csrfCode.substring(0, csrfCode.length - 2);
	} catch (error) {
		return error;
	}
}

getSource('https://google.com');

module.exports = {
	getSource: getSource,
	getCSRF: getCSRF,
};