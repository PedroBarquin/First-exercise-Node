// Nivell 1: Exercisi 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.


// Correcció ? :

console.log(((value1,value2) => {value1 + value2})(4,8))


// Nivell 2: Exercisi 1: Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

creaObj = (valor) => {
    return { valor: valor}
}

// Nivell 2: Exercisi 2: Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Persona{
    constructor(nom){
        this.nom = nom;
    }
    dirNom(){
        return console.log(`El nom és: ${this.nom}`);
    }

}

const nomTest = new Persona('Juanito');
nomTest.dirNom();

// Nivell 3: Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

class Coche {
    constructor(coche){
        this.coche = coche;
    }
    cocheModelo(){
        console.log(`El coche es un ${this.coche}`)
    }
}

nuevoCoche = (modelo) => {
    let cocheNuevo = Object.create(Coche.prototype);
    cocheNuevo.coche = modelo
    return cocheNuevo
}

let ford = nuevoCoche('Ford');
let tesla = nuevoCoche('Tesla');

ford.cocheModelo();
tesla.cocheModelo();
