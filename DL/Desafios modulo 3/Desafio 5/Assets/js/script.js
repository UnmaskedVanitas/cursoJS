const inputTarea = document.querySelector("#tareaInput")
const totalTareas = document.querySelector("#totalTareas")
const tareasRealizadas = document.querySelector("#tareasRealizadas")
const btnAgregar = document.querySelector("#btnAgregar")
const tablaTareas = document.querySelector("#tareas")

const listaTareas = [
    { id: 1, descripcion: "Lavarse los dientes", estado: false },
    { id: 2, descripcion: "Bañarse", estado: false },
    { id: 3, descripcion: "Tomar desatuno", estado: false }
]
let idTarea = listaTareas.length

btnAgregar.addEventListener("click", () => {
    const nuevaTarea = inputTarea.value
    if (nuevaTarea == "") {
        alert("Por favor agregar una tarea")
        return
    }
    idTarea++
    listaTareas.push({ id: idTarea, descripcion: nuevaTarea, estado: false })
    inputTarea.value = ""
    resumenTareas()
})
function eliminarTarea(id) {
    console.log(id)
    const index = listaTareas.findIndex(tarea => tarea.id == id)
    listaTareas.splice(index, 1)
    resumenTareas()
}

function cambioEstatus(id) {
    console.log(id)
    const index = listaTareas.findIndex(tarea => tarea.id == id)
    listaTareas[index].estado = !listaTareas[index].estado
    resumenTareas()
}

function resumenTareas() {
    let html = ""
    for (let tarea of listaTareas) {
        if (tarea.estado == false) {
            html += `<tr>
                        <th>${tarea.id}</th>
                        <td>${tarea.descripcion}</td>
                        <td ><button type="button"  onclick="cambioEstatus(${tarea.id})"><strong>NO</strong></button></td>
                        <td ><button type="button"  onclick="eliminarTarea(${tarea.id})"><strong>X</strong></button></td>
                    </tr>`

        } else {
            html += `<tr>
                        <th>${tarea.id}</th>
                        <td style="text-decoration: line-through">${tarea.descripcion}</td>
                        <td ><button type="button"  onclick="cambioEstatus(${tarea.id})"><strong>SI</strong></button></td>
                        <td ><button type="button"  onclick="eliminarTarea(${tarea.id})"><strong>X</strong></button></td>
                    </tr>`
        }
    }
    tablaTareas.innerHTML = html
    totalTareas.innerHTML = listaTareas.length
    tareasRealizada()
}

function tareasRealizada() {
    const tareaLista = true
    const tareasFiltradas = listaTareas.filter((tarea) => tarea.estado === tareaLista);
    tareasRealizadas.innerHTML = tareasFiltradas.length
}


resumenTareas()