import {getEmployee} from "./exercisi-3";
import {getSalary} from './exercisi-3';

//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

describe('sumar,restar-mult,div', () => {
    it('should return true if operation is completed', () => {
        const result = sum(10,5)
        expect(result).toBe(15)
    })
    it('should return false if value is missing'), () => {
        const result = sum(5)
        expect(result).toBe(false)
    }

})
// Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.
// Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).
// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.