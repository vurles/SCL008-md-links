const fs = require('fs');
const fetch = require ('node-fetch');

const  markdownLinkExtractor = require('markdown-link-extractor');
const command = process.argv[2]

//const markdown = fs.readFileSync(command).toString();ya no va porque es sincona y eso esta en el pasado

//declaro mi funcion que va a leer archivos
const readingFiles = (files, type) => {
    //retorno una promesa con los parementros resolve(ejectuta si todo es ta 'bien') y reject(se ejecuta en caso de error)
    return new Promise((resolve, reject) => {
        //llamo a mi dependencia fs y le paso el metodo de node readFile con mis parametro de de archivo,tipo Y el callback 
        fs.readFile(files,type,(error,content) =>{
            if (error){
                reject(error)
            }else{
                resolve(content)
            }
        });
    });
}

//llamo a mi funcion
readingFiles(command,'utf-8')// aqui paso el archivo para leer de forma trucha 
    .then(res => {
        const links = markdownLinkExtractor(res);
        links.forEach(function (element) {
            fetch(element).then((res)=>{
                console.log('El estado para '.green + res.url + ' se encuentra '.green + res.status + ' ' + res.statusText);
        
            })
            .catch(error => {
                console.log(error.message)
            })
        });
    })


// .then(res =>{
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// });
//heee mi primera promesaaaaa :) 




module.exports.readingFiles = readingFiles;
//