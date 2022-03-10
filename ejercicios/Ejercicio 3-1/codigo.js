
class Celular {
    constructor(
color,peso,tamaño,rdc,ram
) {
        this.color = color
        this.peso = peso
        this.tamaño = tamaño
        this.resolucionDeCamara = rdc
        this.ram = ram
        this.encendido = false
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert('celular prendido')
            this.encendido = true
        } else {
            alert('celular apagado')
            this.encendido = false
        }
    }
    reiniciar() {
        if(this.encendido == true) {
            alert('reiniciando celular')

        } else {
            alert('ek celular esta apagado')
        }
    }
    tomarFotos() {
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }
    grabarVideo() {
        alert(`grabando video en: ${this.resolucionDePantalla}`)
    }
    mobileInfo() {
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.ram}</b></br>
        `
    }
}

class CelularAltaGama {
    constructor(
        color,peso,tamaño,rdc,ram
) {
        }
    }
celular1 = new Celular(
'rojo','150g','5 pulgadas','HD','1GB'
)
celular2 = new Celular(
'negro','155g','5.4 pulgadas','full HD','2GB'
)
celular3 = new Celular(
'blanco','15046g','5.9','full HD','2GB'
)


// celular1 = new celulares('rojo','150g',"5'",'full HD','2GB')
// celular1.presionarBotonEncendido()
// celular1.tomarFoto()
// celular1.grabarVideo()
// celular1.reiniciar()
// celular1.presionarBotonEncendido

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>`)