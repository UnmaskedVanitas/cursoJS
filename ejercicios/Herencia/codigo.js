//HERENCIA

class Animal {
    constructor(especie,edad,color) { // abstraccion
        this.especie = especie
        this.edad = edad
        this.color = color
        this.info = `Soy ${this.especie}, tengo ${this.edad} a\u00f1os y soy de color ${this.color}`
    }
    verInfo() {
        document.write(`${this.info}<br>`)
    }
}

class Perro extends Animal {            // Herencia
    constructor(
especie,edad,color,raza
) {
        super(especie,edad,color)
        this.raza = raza
    }
    ladrar() {
        alert('waw!')
    }
}


const perro = new Perro(
'perro',5,'verde','doberman'
)
const gato = new Animal('gato',2,'negro')
const pajaro = new Animal('pajaro',1,'amarillo')

perro.verInfo()
gato.verInfo()
pajaro.verInfo()
