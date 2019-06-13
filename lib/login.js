const rp = require('request-promise');

const loginFshare = async (user) => {
    try {
        const options = {
            method: 'POST',
            url: 'https://api.fshare.vn/api/user/login',
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3800.0 Mobile Safari/537.36',
            },
            body: {
                'user_email': user.user_email,
                'password': user.password,
                'app_key': 'L2S7R6ZMagggC5wWkQhX2+aDi467PPuftWUMRFSn'
            },
            json: true,
            resolveWithFullResponse: true
        };

        const response = await rp(options);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};

const downloadFile = async (response) => {
    try {
        const options = {
            method: 'POST',
            url: 'https://api.fshare.vn/api/session/download',
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3800.0 Mobile Safari/537.36',
                'Cookie': response.headers['set-cookie'],
            },
            body: {
                'token': response.body.token,
                'url': 'https://www.fshare.vn/file/THONZRLCP7K1'
            },
            json: true
        };

        const data = await rp(options);
        const link = data['location']
        return link;
    } catch (error) {
        console.log(error);
        return error;
    }
}
const user = {
    user_email: 'jue07023@cndps.com',
    password: 'Jue07023'
}
loginFshare(user)
    .then(downloadFile)
    .then(console.log)

module.exports = {
    loginFshare: loginFshare,
};