// N1 Ex.1. Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');

const writeToFile = (path, text) => {
    fs.writeFile(`${path}`, text, (err) => {
        if (err)throw err;
    })
}

console.log(writeToFile('test.txt','test'));

// Created Output.txt && test.txt as tests

// N1 Ex.2. Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

const readFile = (path) => {
    fs.readFile(`${path}`, 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        ;
        console.log(data);
    })
}
console.log(readFile('Output.txt'));
// Reads "test"

// N1 Ex.3. Crea una funció que comprimeixi el fitxer del nivell 1.
// Step 1: npm install compressing
const compressing = require('compressing');
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





