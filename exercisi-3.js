

 // Exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
 // Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

 // O bé

 const resolve1 = (res) => {
     return console.log(`Hello I am ${res}`)
 }
    const reject1 = (rej) => {
     return console.log(`Hello I am ${rej}`)
 }
 const realFunction = () => {
     resolve1("res");
     reject1("rej")
 }
 realFunction('resolve1', 'reject1');

 // O bé

 const funcioUna = new Promise((res,reject) => {
     if(res){
         console.log(`I am res, my res is ${res}`);
     } else if (reject){
         reject(new Error('Error'));
         console.log(`${reject} is my reject`);
     }
 })
 // Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre
 // (que s'imprimirà per consola) en funció del paràmetre rebut.

const invocada = (n) => console.log(`Ara estic invocant, ${n}`);
 funcioDos = (name, callback) => {
     const nom = `${name}`;
     callback(nom)
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
 // Ex. N.2.2 Crea una altra arrow function getSalary() similar a l'anterior
 // que rebi com a paràmetre un objecte employee i retorni el seu salari.

 const getEmployee = (id) => {
     return new Promise((resolve, reject) => {
         const employeeFound = employees.find(e => e.id === id);
         if (employeeFound !== null) {
             resolve(`El nom de la id ${id} és ${employeeFound.name}`);
         } else {
             reject(onmessageerror(`Error`));
         }
     })
 }

 const getSalary = (id) => {
     return new Promise((resolve, reject) => {
         const salary = salaries.find(e => e.id === id);
         if(salary !== null){
             resolve(`El salari de la id ${id} és ${salary.salary}`);
         }
         else {
             reject(onmessageerror(`Rejected ${id}`))
         }
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

console.log(getBoth(3));
 //getBoth(3).then(val => console.log(val.name, val.salary));

/*

callback(getEmployee(id), getSalary(id))
     [callback.name, callback.salary]
     .then((() => {
         console.log(`És diu ${getEmployee(id)} i el seu salari és ${getSalary(id)}`);
     }));


 return new Promise((resolve,reject) => {
         let employee1 = getEmployee(id);
         let salary1 = getSalary(id);
         resolve(employee1, salary1);
         if(true){
             let combinedResult = {name: employee1.name, salary: salary1.salary};
             resolve(combinedResult);
             console.log(\`El nom és ${combinedResult.name} i el salari és ${combinedResult.salary} \`)
         } else {
             reject(onmessageerror(\`Rejected ${id}\`))
         }
     })

employee
    .then(getEmployee(1))
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err.message);
    })
 console.log(getEmployee(1));
  for(i = 0; i < employees.id.length ; i++){
         if(employees.id === salaries.id){
             return this.employees
         }
     } return new Promise(() => {})*/