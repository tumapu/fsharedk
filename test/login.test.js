/* eslint-disable no-undef */
const login = require('../lib/login');

const user = {
  user_email: process.env.FSHARE_EMAIL,
  password: process.env.FSHARE_PASSWORD
};

const loginSuccessfullyMsg = RegExp('Login successfully');

test('test login API', (done) => {
  login.login(user)
    .then((response) => {
      expect(loginSuccessfullyMsg.test(JSON.stringify(response))).toBe(true);
      done();
    });
});
