const {getSource, getCSRF} = require('./common');

// Get code CSRF from url
getSource('https://fshare.vn')
	.then(getCSRF)
	.then(console.log)
	.catch(console.error.bind(console));
