const common = require('../lib/common');

test('test getSource', (done) => {
    common.getSource('https://gist.githubusercontent.com/f97/f79730c387cb6bb279b115423ce53ad6/raw/bda7fb8209cf85c85d3d6319d6bd6815f74084e1/empaty')
        .then(data => {
            expect(data).toBe('test api');
            done();
        });
});


// test('test getCSRF', (done) => {
//     sourceExpamle = `<!DOCTYPE html>
//     <html lang="vi">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="csrf-token" content="Tt5fLT3et4D7uI9608DqNO5z_5aR_30gQ503ecQVpfQtuA4fBOnc16v5_gnqsdxNoTGrw-KqLU0s8nsRoFD1hw==">
//     </head>
//     <body class="mdc-typography">
//     </body>
//     </html>`
//     common.getCSRF(sourceExpamle)
//     .then(data => {
//         expect(data).toBe('Tt5fLT3et4D7uI9608DqNO5z_5aR_30gQ503ecQVpfQtuA4fBOnc16v5_gnqsdxNoTGrw-KqLU0s8nsRoFD1hw');
//         done();
//     });
// })