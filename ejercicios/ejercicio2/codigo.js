const invitadosMax = 5
let gratisFlag = false

for (let i = 0; i < invitadosMax; i++) {
    let hora = prompt("hora?")
    let nombre = prompt("nombre?")
    let edad = prompt("edad?")



    if (edad >= 18 && hora >= 0 && hora < 7) {

        if (gratisFlag == false && hora >= 2) {
            document.write(`${nombre}` + `, la entrada es gratis!</br>`)
            gratisFlag = true

        } else {
            document.write(`${nombre}` + ", puedes entrar, previo pago.</br>")
        }
    } else {
        document.write(`${nombre}` + ", no cumples los requisitos para entrar.</br>")
    }

}


alert(`lo siento, la cantidad maxima que puede entrar es ${invitadosMax}`)