// a = [1,2,3,4,5,6]
// a.push('hola')
// console.log(a)

// ----------------------------------
// const superHeroes= [
//     'Ironman',
//     'Superman',
//     'Hawkeye'
// ]

// superHeroes.push('Goku')
// alert(superHeroes)
// superHeroes.unshift('vegeta')
// alert()
// ----------------------------------

// const listaDeInvitados = document.querySelector("#invitados")
//  const invitadoInput = document.querySelector("#nuevoInvitado")
//  const btnAgregar = document.querySelector("#agregarInvitado")
//  const invitados = []
//  btnAgregar.addEventListener("click", () => {
//  /* Agregamos el invitado al arreglo */
//  const nombreInvitado = invitadoInput.value
//  invitados.push(nombreInvitado)
//  invitadoInput.value = ""
//  /* Actualizamos la información en el HTML */
//  let html = ""
//  for (let invitado of invitados) {
//  html += `<li>${invitado}</li>`;
//  }
//  listaDeInvitados.innerHTML = html;
//  })

// ------------------------------------------

// const input = document.querySelector('input')
//         const btn = document.querySelector('button')
//         const tareas = []

//         btn.addEventListener('click', () => {
//             const tarea = input.value
//             tareas.push(tarea)
//             input.value = ''
//             let html = ''
//             for (const tarea of tareas) {
//                 html += `<li>${tarea}</li>`
//             }
//             tareas.innerHTML = html
//         })
// ------------------------------------
const servicios = [
    {id: 1, nombre: 'agua'},
    {id: 2, nombre: 'electricidad'},
    {id: 3, nombre: 'gas'},
    {id: 4, nombre: 'internet'},
    {id: 5, nombre: 'cable'},
]
const ulServicios = document.querySelector('.servicios')

function renderServicios() {
    let html = ''
    for (const service of servicios) {
        html += `<li> ${servicio.nombre} <button onclick="borrar(${servicio.id})">BORRAR<button></li>`
                            }
    ulServicios.innerHTML = html
}
function borrar(id) {
    const index = servicios.findIndex((servicio) => servicio.id == id)
    servicios.splice(index, 1)
    renderServicios()
}

renderServicios()


