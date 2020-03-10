const rp = require('request-promise');

// Get source HTML from url
const getSource = async (url) => {
  try {
    const options = {
      uri: url,
      resolveWithFullResponse: true
    };
    const response = await rp(options);
    // console.log('HEADERS: ' + response.headers['set-cookie']);
    return response.body;
  }
  catch (error) {
    return error;
  }
};

module.exports = {
  getSource
};
