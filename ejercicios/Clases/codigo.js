
// class animal {
//     constructor(especie,edad,color) {
//         this.especie = especie
//         this.edad = edad
//         this.color = color
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
//     }
//     // const verInfo = ()=>{           >>>>>> las funciones flechas no pueden ser utilizadas dentro de una clase
//     //     document.write(this.info)
//     verInfo() {
//         document.write(`${this.info}<br>`)
//     }
//     }


// const perro = new animal('perro',5,'verde')
// const gato = new animal('gato',2,'negro')
// const pajaro = new animal('pajaro',1,'amarillo')

// // document.write(perro.info + '<br>')   mal hecho, se hace asi >>>> document.write(${perro.info}<br>)

// perro.verInfo()
// gato.verInfo()
// pajaro.verInfo()

// -------------------------------------------------------------------------------------------------------
// Conceptos de la POO

// class animal {
//     constructor(especie,edad,color) { // abstraccion, resumido
//         this.especie = especie
//         this.edad = edad
//         this.color = color
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
//     }
//     // const verInfo = ()=>{           >>>>>> las funciones flechas no pueden ser utilizadas dentro de una clase
//     //     document.write(this.info)
//     verInfo() {
//         document.write(`${this.info}<br>`)
//     }
//     ladrar() {                                      // Polimorfismo
//         if (this.especie == 'perro') {
//             document.write('Waw! <br>')
//         } else {
//             document.write(`no puede ladrar, ya que es un ${this.especie}<br>`)
//         }
//     }
//     }


// const perro = new animal('perro',5,'verde')
// const gato = new animal('gato',2,'negro')
// const pajaro = new animal('pajaro',1,'amarillo')

// // document.write(perro.info + '<br>')   mal hecho, se hace asi >>>> document.write(${perro.info}<br>)

// perro.ladrar()
// gato.ladrar()
// pajaro.ladrar()
//-------------------------------------------------------------------------------------------------------

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
