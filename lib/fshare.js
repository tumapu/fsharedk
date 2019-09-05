const {
    getSource,
    getCSRF
} = require('./common');

const {
    loginFshare,
    downloadFile
} = require('./login');

const user = {
    user_email: 'jue07023@cndps.com',
    password: 'Jue07023'
}

const downloadURL = async () =>  {
    let response = await loginFshare(user);
    let url = await downloadFile(response, 'https://www.fshare.vn/file/THONZRLCP7K1');
    console.log(url);
}

downloadURL();

module.exports = {
    loginFshare,
    downloadFile
}