const {
    getSource,
    getCSRF
} = require('./common');

const {
    loginFshare
} = require('./login');

// Get code CSRF from url
getSource('https://fshare.vn')
    .then(getCSRF)
    .then(loginFshare)
    .then(console.log)
    .catch(console.error.bind(console));