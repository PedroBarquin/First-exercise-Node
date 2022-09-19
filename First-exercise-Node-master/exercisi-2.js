// Nivell 1: Exercisi 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

sumaNoms = (nom1, nom2) => {
    return `${nom1} ${nom2}`;
}
console.log(sumaNoms('Pedro', 'Barquin'))


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
        console.log(`El nomm és: ${this.name}`);
    }

}
module.exports.sumaNoms = sumaNoms;
module.exports.Persona = Persona;