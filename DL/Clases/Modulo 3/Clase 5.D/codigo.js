const inputTarea = document.querySelector('#input-tarea')
const boton = document.querySelector('#btn-agregar')
const total = document.querySelector('#total')
const realizadas = document.querySelector('#realizadas')
const listaTareas = document.querySelector('#lista-tareas')
const arregloTareas = []

function agregarTarea(tarea) {
    if(inputTarea.value != '') {
        // alert(tarea)
        const nuevaTarea = {
            id: Date.now(),
            nombreTarea: tarea.value,
            realizado: false
        }
        arregloTareas.push(nuevaTarea)
        tarea.value= ''
        // arregloTareas.forEach(tarea, () => {
        //     console.log(tarea)
        }
    
    else{
        alert('no se puede guardar, tarea vacia')
    }
}

boton.addEventListener('click', () =>  {
    agregarTarea(inputTarea)
})