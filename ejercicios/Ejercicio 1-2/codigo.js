let dinero = prompt('Dinero:')
const precioBoleto = prompt('Precio de cada boleto:')
let numBoletos = 0

// numBoletos = Math.floor(dinero / precioBoleto)

// if (numBoletos > 3){
//     numBoletos = 3
// }
// resto = dinero - (precioBoleto * numBoletos)
// if (numBoletos === 0){
//     document.write('no tienes dinero suficiente.')
// } else {
//     document.write(`pudiste comprar ${numBoletos} y te sobro ${resto} `)
// }
let total = 0
for (let i = 0; dinero >= precioBoleto; i++) {
    numBoletos++
    total = total + precioBoleto
    dinero = dinero - precioBoleto
    if (numBoletos === 3) {
        break
    }
}
document.write(`te alcanza para ${numBoletos} boletos de loteria y tu vuelto es ${dinero} usd`)
