const request = require("request");

const loginFshare = async (csrfCode) => {
    try {
        let options = {
            method: 'POST',
            url: 'https://www.fshare.vn/site/login',
            headers: {
                'cache-control': 'no-cache',
                Connection: 'keep-alive',
                'content-length': '201',
                'accept-encoding': 'gzip, deflate',
                cookie: 'fshare-app=8mta33m75nqtk0rbongeq07u6q',
                Host: 'www.fshare.vn',
                'Postman-Token': '4fc16cc2-c4eb-480e-8798-056f41c7634a,09b47fc1-ddbf-495f-a270-a33adadc4fed',
                'Cache-Control': 'no-cache',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.13.0',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
                '_csrf-app': csrfCode,
                'LoginForm[email]': '',
                'LoginForm[password]': '',
                'LoginForm[rememberMe]': '0'
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log(body);
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    loginFshare: loginFshare,
};