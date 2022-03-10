
// class CelularAltaGama {
//     constructor(color,peso,tamaño,rdc,ram,rdce)
//     this.resolucionDeCamaraExtra = rdce
// }
// grabarVideoLento() {
//     alert('Estas grabando en camara lenta')
// }
// reconocimientoFacial() {
//     alert('Vamos a inciar un reconocimiento facial')
// }
// infoAltaGama() {
//     return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`
// }
// celular1 = new CelularAltaGama('rojo','130g',)

class App {
    constructor(descargas,puntuacion,peso) {
        this.descargas = descargas
        this.puntuacion = puntuacion
        this.peso = peso
        this.iniciada = false
        this.instalada = false
    }
    abrir() {
        if (this.iniciada == false) {
            this.iniciada = true
            alert('app iniciada')
        }
    }
    cerrar() {
        if (this.iniciada == true) {
            this.iniciada = false
            alert('app cerrada')
        }
    }
    isntalar() {
        if (this.instalada == false) {
            this.instalada = true
            alert('app instalada')
        }
    }
    desinstalar() {
        if (this.instalada == true) {
            this.instalada = false
            alert('app desinstalada')
        }
    }
}