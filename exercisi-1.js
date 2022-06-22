
// Exercici 1: Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la
showName(name){
    console.log(name);
}

// Exercici 2: Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals,

showLiterals(name, surname){
    var nameIntroduced = name;
    var surnameIntroduced = surname;
    console.log(`Your name is ${nameIntroduced} and your surname is ${surnameIntroduced}`);
}

returnValue(value){
    console.log(value.raw[0]);
}

iterative(){
    var filledArray = new Array(10);
    var emptyArray = [];
    for(i = 0; i < 10; i++){
        filledArray[filledArray.length] = i;
        emptyArray[emptyArray.length] = getFunct(i);
    }
}

getFunct(val){
    return function() {return console.log(val);};
}
   //module.exports = Exercisi1;
}