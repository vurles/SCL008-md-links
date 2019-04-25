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
readingFiles('./README.md','utf-8')// aqui paso el archivo para leer de forma trucha 
.then(res =>{
    console.log(res)
})
.catch(err => {
    console.log(err)
});





// const links = markdownLinkExtractor(readingFiles);

// links.forEach(function (link) {
//     fetch(link).then((res)=>{
//         console.log(res.url + ' ' + res.status + ' ' + res.statusText);

//     })
//     .catch(error => {
//         console.log(error.message)
//     })
// });

// module.exports.links = links;
//