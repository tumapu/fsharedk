const got = require('got');


(async () => {
    try {
        got.post('https://jsonplaceholder.typicode.com/posts', {
            json: true,
            form: true,
            body: {
                title: 'foo',
                body: 'bar',
            },
        });
        console.log(response.body);
        //=> '<!doctype html> ...'
    } catch (error) {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    }
})();