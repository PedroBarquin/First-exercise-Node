

 // Exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
 // Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

 const funcioUna = (boolean) => {
    return new Promise((resolve,reject) => {
            boolean ? resolve(`El valor era veritat, s'ha resolt la promise`) : reject(`Error: no s'ha pogut resoldre, el valor era false`)
        }) 
    };

 funcioUna(true)
 .then((res) => {
     console.log(res);
 })
 .catch((rej) => {
    console.log(rej)
 })

 // Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre
 // (que s'imprimirà per consola) en funció del paràmetre rebut.

const invocada = (n) => {if(typeof n == "string"){ return 'sóc string'} else { return 'no sóc string'}}
    // Testeo console.log(`Ara estic invocant, ${n}`);
 funcioDos = (name, callback) => {
     return callback(name);
 }
 console.log(funcioDos('test', invocada))

//Ex N.2.1 Donats els objectes employees i salaries, crea una arrow function getEmployee()
 // que retorni una Promise efectuant la cerca en l'objecte pel seu id.


 let employees = [{
     id: 1,
     name: 'Linux Torvalds'
 }, {
     id: 2,
     name: 'Bill Gates'
 },{
     id: 3,
     name: 'Jeff Bezos'
 }];

 let salaries = [{
     id: 1,
     salary: 4000
 }, {
     id: 2,
     salary: 1000
 }, {
     id: 3,
     salary: 2000
 }];


 const getEmployee = (id) => {
     return new Promise((resolve, reject) => {
         const employeeFound = employees.find(e => e.id === id);
         employeeFound ? resolve(`L'empleat és ${employeeFound}`) : reject(`Error, no s'ha trobat employeeFound ${id}`)
     })
 }

 getEmployee(1)
    .then((res) => {
        console.log(`getEmployee torna ${res}`);
    })
    .catch((err) => {
        console.log(`getEmployee error ${err}`)
    })

 // Ex. N.2.2 Crea una altra arrow function getSalary() similar a l'anterior
 // que rebi com a paràmetre un objecte employee i retorni el seu salari.


 const getSalary = (id) => {
     return new Promise((resolve, reject) => {
         const salary = salaries.find(e => e.id === id);
         salary 
             ? resolve(`El salari de l'empleat és ${salary}`)
             :  reject(onmessageerror(`Rejected ${id}`));
     })
 }
 getSalary(1)
    .then((res) => {
        console.log(`getSalary torna ${res}`);
    })
    .catch((err) => {
        console.log(`getSalary error ${err}`);
    })
   
    // Ex. N.2.3 Invoca la primera funció getEmployee() i després getSalary() 
    // niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.
    
    getSalaryBoth = (id) => {
        getEmployee(id)
        .then((res) => {
            getSalary(id)
            .then((res1) => {
                console.log(`El empleat és ${res} i el salari és ${res1}`)
            })
        })
    }

/* Previous reject 
 const getBoth = (id) => {
         return new Promise ((resolve, reject) => {
                 if (id !== null) {
                     let employeeName = getEmployee(id);
                     let employeeSalary = getSalary(id);
                     resolve(employeeName, employeeSalary);
                 } else {
                    reject(onmessageerror(`La ${id} és null`));
                 }
             }
         )
     }; */


 module.exports.getEmployee = getEmployee;
 module.exports.getSalary = getSalary;
 module.exports.salaries = salaries;
 module.exports.employees = employees;