

 // Exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
 // Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

 const funcioUna = new Promise((resolve,reject) => {
     if(true){
         resolve(`I am resolved`);
     } else if (reject){
         reject(new Error('Error'));
         console.log(`I was rejected :(`);
     }
 })

 // Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre
 // (que s'imprimirà per consola) en funció del paràmetre rebut.

const invocada = (n) => {return `Te llamas ${n}`}
    // Testeo console.log(`Ara estic invocant, ${n}`);
 funcioDos = (name, callback) => {
     return callback(name);
 }
 funcioDos('Rebo un param', invocada)

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
         if (employeeFound !== undefined) {
             resolve(employeeFound);
         } else {
             reject(onmessageerror(`Error`));
         }
     })
 }

 // Ex. N.2.2 Crea una altra arrow function getSalary() similar a l'anterior
 // que rebi com a paràmetre un objecte employee i retorni el seu salari.


 const getSalary = (id) => {
     return new Promise((resolve, reject) => {
         const salary = salaries.find(e => e.id === id);
         salary !== undefined
             ? resolve(salary)
             :  reject(onmessageerror(`Rejected ${id}`));
     })
 }

 console.log(getEmployee(1));
 console.log(getSalary(1));
 const getBoth = (id) =>
     {
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
     };

 module.exports.getEmployee = getEmployee;
 module.exports.getSalary = getSalary;
 module.exports.salaries = salaries;
 module.exports.employees = employees;
console.log(getBoth(3));