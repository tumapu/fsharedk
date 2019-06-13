const login = require('../lib/login');

const user = {
    user_email: 'jue07023@cndps.com',
    password: 'Jue07023'
}

const loginSuccessfullyMsg = /Login successfully/;

test('test login API', (done) => {
    login.loginFshare(user)
        .then(response => {
            expect(loginSuccessfullyMsg.test(JSON.stringify(response.body))).toBe(true);
            done();
        });
});