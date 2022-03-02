const num1 = Number(prompt('ingrese el primer numero:'))

const num2 = Number(prompt('ingrese el segundo numero:'))
// console.log(typeof num2) verificando que sean strings convertidos a number
const operacion = Number(prompt('ingrese la operacion deseada:. \n 1- Suma. \n 2- Resta. \n 3- Multiplicacion. \n 4- Division.'))

const operaciones = {
    1: (num1, num2) => num1 + num2, // suma
    2: (num1, num2) => num1 - num2, // resta
    3: (num1, num2) => num1 * num2, // multi
    4: (num1, num2) => num1 / num2  // div
}

if (operacion in operaciones) {
    document.write(`el resultado es ${operaciones[operacion](num1, num2)}`)
} else {
    document.write('no ingresaste una opcion de operacion correcta.')
}
