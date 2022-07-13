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