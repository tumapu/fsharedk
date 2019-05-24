const got = require('got');
const cheerio = require('cheerio')

// Get source HTML from url
const getSource = async (url) => {
	try {
		const response = await got(url);
		return response.body;
	} catch (error) {
		return error.response.body;
	}
};

// Get code CSRF from source Fshare
const getCSRF = async (sourceFshare) => {
	try {
		let $ = cheerio.load(sourceFshare);
		const csrfCode = await $("meta[name='csrf-token']").attr("content");
		return csrfCode;
	} catch (error) {
		return error;
	}
}

module.exports = {
	getSource: getSource,
	getCSRF: getCSRF,
	// getCodeCSRF: getCodeCSRF
};