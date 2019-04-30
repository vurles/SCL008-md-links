const mdLinks = require('../md-links');

describe('readingFiles',() => {
    it('Deberia retornar True para leer un archivo con una ruta absoluta',() => {
        expect(mdLinks.readingFiles('https://docs.npmjs.com/misc/scripts')).resolves.toBe(true)
    })
})
// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });
