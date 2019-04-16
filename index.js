#!/usr/bin/env node 

//con esto de arriba identifico que voy a trabajar con node
//  const mdLinks = require('./md-links');// para el require no es necesario poner la extencion .js 
//  console.log(mdLinks.suma(2,2));
//  console.log(mdLinks.multi(2,2));


// esto es para leer 
//const fs = require('fs');
// fs.readFile('aqui va la ruta donde quiero ver mi archivo', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// const fs = require('fs');
// fs.readFile('./README.md','utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const fs = require('fs');
const  markdownLinkExtractor = require('markdown-link-extractor');

var markdown = fs.readFileSync('./README.md').toString();

var links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
    console.log(link);
});
