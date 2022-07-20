// Part 1: const names = ['John', 'Pepe'];

//const greet = names.map(name => `Hello ${name}`);
//console.log(greet);

//function greeting(name){
//console.log(`Hello ${name}`)
//}
//greeting('John');

let greeting = name => console.log(`Hello ${name}!`);
const userInfo = (firstName, lastName, callback) => {
    const fullName = `${firstName} ${lastName}`
    callback(fullName);
 }
 userInfo('John', 'Doe', greeting);

let greeting2 = name => console.log(`${name}`);
const userPepito = (firstName, callback) => {
    const pepito = `${firstName}`
    callback(pepito);
}
userPepito('Pepito', greeting2);

const addToCalendar1 = meetingDetails => {
    return new Promise((resolve,reject) => {
        const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
        resolve(calendar);
    })
}

 const addToCalendar = meetingDetails => {
         const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
        return Promise.resolve(calendar);

 }

meeting
    .then(addToCalendar)
 .then(res => {
    console.log('Meeting scheduled');
    console.log(res);
     // resolve data
 })
 .catch( err => {
     console.log(err.message);
 })

const promise1 = Promise.resolve('Promise 1');
const promise2 = new Promise((res,rej) => {
    setTimeout(() => {
        res('Promise 2 complete');
    }, 2000);
})

Promise.all([promise1,promise2]).then(res => console.log(res));

function* generatorFunc(){
    let data = getData();
    yield data;
    console.log(data);
}

async function myMeeting(){
    try {
        const meetingDetails = await meeting;
        const message = await addToCalendar(meetingDetails);
        console.log(message);
    } catch(err){
        console.log(err.message);
    }
}
myMeeting();


// Ej 3.2. apuntes sucios
// Ó
/*const invocada = (n) => {return `Te llamas ${n}`};
const funcioDos = (name, callback) =>{
    new Promise((resolve, reject) => {
        const result = callback(name);
        resolve (result);
    })
        .then(res => {
            console.log(res);
        })

}*/


/* Libro Node
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})*/



// Apuntes sucios Ej 3 parte 3 creo resolución en realidad es obj + {...values, ...values}
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