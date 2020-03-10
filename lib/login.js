const rp = require('request-promise');

const loginFshare = async (user) => {
  try {
    const options = {
      method: 'POST',
      url: 'https://api.fshare.vn/api/user/login',
      body: JSON.stringify({
        user_email: user.user_email,
        password: user.password,
        app_key: 'L2S7R6ZMagggC5wWkQhX2+aDi467PPuftWUMRFSn'
      })
    };

    const response = await rp(options);
    return response;
  }
  catch (error) {
    if (error.statusCode === 403) return error.error;
    return error;
  }
};

const downloadFile = async (response, url) => {
  try {
    const options = {
      method: 'POST',
      url: 'https://api.fshare.vn/api/session/download',
      body: JSON.stringify({
        token: response.body.token,
        url
      }),
      json: true
    };

    const data = await rp(options);
    const link = data.location;
    return link;
  }
  catch (error) {
    return error;
  }
};

module.exports = {
  loginFshare,
  downloadFile
};
