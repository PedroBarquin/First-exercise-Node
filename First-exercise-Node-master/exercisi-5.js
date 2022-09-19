

// N1 Ex.1. Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');

writeToFile = (path, text) => {
    fs.writeFile(`${path}`, text, (err) => {
        if (err)throw err;
        console.log(`File with path ${path} and ${text} was created`)
    })
}

console.log(writeToFile('test.txt','test'));

// Created Output.txt && test.txt as tests

// N1 Ex.2. Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
// Abans tenía path i era dinàmica, ara mateix no.
// const readFile = (path) => {
//     fs.readFile(`${path}`, 'utf8', (err, data) => {
//         if (err) {
//             throw err
//         }
//         console.log(data);
//     })
// }

readFile = () => {
    fs.readFile(`./test.txt`, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`The data inside is ${data.toString()}`);
    })
}
console.log(readFile('test.txt'));

// Reads "test"

// N1 Ex.3. Crea una funció que comprimeixi el fitxer del nivell 1.
// Step 1: npm install compressing
const { createReadStream, createWriteStream } = require("fs");
const { createGzip } = require("zlib");

const compressFile = (filePath) => {
       const stream = createReadStream(filePath);
       stream
         .pipe(createGzip())
         .pipe(createWriteStream(`${filePath}.gz`))
         .on("finish", () =>
            console.log(`Successfully compressed the file at ${filePath}`)
         );
 };
compressFile("./test.txt");

/* Before (reject) not using gzip
let compressing = require('compression');
const compressFile = (path, finalPath) => {
    compressing.zip.compressFile(`${path}`, `${finalPath}`, () => {
    if (err) {
        throw err
    }
    ;
    console.log(data);
    })
}
console.log(compressFile('Output.txt', 'destination.zip'));
*/





