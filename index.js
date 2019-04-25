#!/usr/bin/env node 

//con esto de arriba identifico que voy a trabajar con node
  const mdLinks = require('./md-links');// para el require no es necesario poner la extencion .js 

//   mdLinks("./README.md")
//     .then(links => {
//       // => [{ href, text, file }]
//     })
//     .catch(console.error);
  
//   mdLinks('./README.md', { validate: true })
//     .then(links => {
//       // => [{ href, text, file, status, ok }]
//     })
//     .catch(console.error);
  
//   mdLinks("./some/dir")
//     .then(links => {
//       // => [{ href, text, file }]
//     })
//     .catch(console.error);