let color = ''
const pintar = (element) => {
    document.getElementById(element.target.id).style.backgroundColor = color
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        color = 'purple'
    } else if (event.key === 's') {
        color = 'red'
    } else if (event.key === 'd') {
        color = '#orange'
    } else if (event.key === 'f') {
        color = 'yellow'
    }
})

document.addEventListener('click', pintar)
