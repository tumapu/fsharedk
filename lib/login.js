const rp = require('request-promise');

const login = async (user) => {
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
    return JSON.parse(response);
  }
  catch (error) {
    if (error.statusCode === 403) return error.error;
    return error;
  }
};

const download = async (token, sessionID, url, pass) => {
  try {
    const payload = {
      'token': token,
      'url': url
    };
    
    if(pass)
      payload.password = pass;
    
    const options = {
      method: 'POST',
      url: 'https://api.fshare.vn/api/session/download',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `session_id=${sessionID}`
      },
      body: JSON.stringify(payload)
    };

    const response = await rp(options);
    return JSON.parse(response);
  }
  catch (error) {
    return error;
  }
};

module.exports = {
  login,
  download
};
