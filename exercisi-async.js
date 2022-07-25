//- Exercici 1
// Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari,
// usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

const ex3 = require('./exercisi-3');
const getBoth = async (id) => {
                let employeeName = ex3.getEmployee(id).then((res) => {return res});
                let employeeSalary = ex3.getSalary(id).then((res) => {return res});
                const result1 = await employeeName;
                const result2 = await employeeSalary;
                console.log(`${result1.name} is paid ${result2.salary}`)
};
getBoth(1);