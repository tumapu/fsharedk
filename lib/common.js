const got = require('got');

// Get source HTML from home page fshare
const getHome = async () => {
	try {
		const response = await got('https://sindresorhus.com');
		console.log(response.body);
	} catch (error) {
		console.log(error.response.body);
	}
};


module.exports = {
    getHome: getHome
};