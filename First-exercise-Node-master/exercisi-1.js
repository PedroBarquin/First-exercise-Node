
// Exercici 1: Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la

const showName = (name) => {
    return `${name}`
}
console.log(showName('Pepito'));

/* Previ:
function showName(name) {
    console.log(name);
*/


// Exercici 2: Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals,

function showLiterals(name, surname){
    var nameIntroduced = name;
    var surnameIntroduced = surname;
    console.log(`Your name is ${nameIntroduced} and your surname is ${surnameIntroduced}`);
}

function returnValue(value){
    console.log(value.raw[0]);
}

// Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola.
// Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

function iterative(){
    var emptyArray = new Array(10);
    for(i = 0; i < emptyArray.length; i++){
        emptyArray[i] = new Array(10).fill(getFunct());
    }
}
function getFunct() {
    return
        for(i = 0; i < 10; i++){
            [i] = i;
           console.log(i);
        }

}
// Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

module.exports.showName = showName;
module.exports.showLiterals = showLiterals;
module.exports.returnValue = returnValue;
module.exports.iterative = iterative;
module.exports.getFunct = getFunct;
