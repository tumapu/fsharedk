const {
    getSource,
    getCSRF
} = require('./common');

const {
    loginFshare
} = require('./login');
const rp = require('request-promise');

// Get code CSRF from url
getSource('https://fshare.vn')
    .then(getCSRF)
    .then(loginFshare)
    // .then(console.log)
    .then((CSRFandHeaders) => {
        let options = {
            uri: 'https://www.fshare.vn/file/manager',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                cookie: CSRFandHeaders[1]['set-cookie'],
                'origin': 'https://www.fshare.vn',
                'referer': 'https://www.fshare.vn/site/login',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3800.0 Mobile Safari/537.36',
            },
            // resolveWithFullResponse: true,
        };
        rp(options).then(console.log);
    })
    .catch(console.error.bind(console));