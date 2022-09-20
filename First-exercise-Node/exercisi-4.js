//- Exercici 1
// Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari,
// usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(e => e.id === id);
        salary 
            ? resolve(`El salari de l'empleat és ${salary} .`)
            :  reject(onmessageerror(`Rejected ${id}`));
    })
}

async function getBoth(id){
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(id);
        console.log(`${employee} ${salary}`)
    }catch(error){
        console.log(`Error in function getBoth`)
    }
}
getBoth(1);

// - Exercici 2
// Crea una nova funció asíncrona que cridi a una altra que retorni
// una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

function slowPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`I am resolved after two seconds`);
            }, 2000);
    });
}
async function asyncFunc() {
    try{
        const res = await slowPromise();
        console.log(res);
    } catch(error){
        console.log(`Error in function asyncFunc`)
    }
  
}
asyncFunc();