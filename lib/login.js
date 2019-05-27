const rp = require('request-promise');

const loginFshare = async (CSRFandHeaders) => {
    try {
        let options = {
            method: 'POST',
            url: 'https://www.fshare.vn/site/login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                cookie: CSRFandHeaders[1]['set-cookie'],
                'origin': 'https://www.fshare.vn',
                'referer': 'https://www.fshare.vn/site/login',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3800.0 Mobile Safari/537.36',
                'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
                'cache-control': 'max-age=0'
            },
            form: {
                '_csrf-app': CSRFandHeaders[0],
                'LoginForm[email]': 'jue07023@cndps.com',
                'LoginForm[password]': 'Jue07023',
                'LoginForm[rememberMe]': '0'
            }
        };

        const response = await rp(options);
        return CSRFandHeaders;
    } catch (error) {
        console.log(error);
        return CSRFandHeaders;
    }
};

module.exports = {
    loginFshare: loginFshare,
};