/* eslint-disable no-undef */
const login = require('../lib/login');

const user = {
  user_email: 'jue07023@cndps.com',
  password: 'Jue07023'
};

const loginSuccessfullyMsg = RegExp('Login successfully');

test('test login API', (done) => {
  login.login(user)
    .then((response) => {
      expect(loginSuccessfullyMsg.test(JSON.stringify(response))).toBe(true);
      done();
    });
});
