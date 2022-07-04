
// Exercici 1: Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la
function showName(name) {
    console.log(name);
}

// Exercici 2: Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals,

function showLiterals(name, surname){
    var nameIntroduced = name;
    var surnameIntroduced = surname;
    console.log(`Your name is ${nameIntroduced} and your surname is ${surnameIntroduced}`);
}

function returnValue(value){
    console.log(value.raw[0]);
}

function iterative(){
    //var filledArray = new Array(10);
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
module.exports.showName = showName;
module.exports.showLiterals = showLiterals;
module.exports.returnValue = returnValue;
module.exports.iterative = iterative;
module.exports.getFunct = getFunct;
