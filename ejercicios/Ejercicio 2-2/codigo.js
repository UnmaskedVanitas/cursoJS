let dia = 0
let diasA = 0
let Nclases = prompt("Ingrese numero de clases")

alert("Ingrese un 1 si el alumno esta presente, ingrese un 2 si el alumno esta ausente.")

while (dia < Nclases) {
    let input = prompt(`Dia ${dia + 1}`)
    if (input === "1") {
        dia++
        diasA++
    } else if (input === "2") {
        dia++
    } else {
        alert("Respuesta no permitida: Ingrese un 1 si el alumnso asistio, ingrese un 2 si el alumno no asistio")
    }
}
let maxAus = dia / 10 // dias que puede faltar sin reprobar
let ausencias = dia - diasA // numero de dias que falto
if (ausencias < maxAus) {
    document.write(`el alumno aprobo asistiendo a ${diasA} de ${dia} dias de clase`)
} else {
    document.write(`el alumno reprobo asistiendo a ${diasA} de ${dia} dias de clase.`)
}
