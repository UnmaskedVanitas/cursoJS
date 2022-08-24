//respuesta 3.1
//const ele = document.getElementById("ele1")
//    
//    function pintar(div) {
//      div.style.backgroundColor = 'yellow'
//    }
//    ele.addEventListener("click", function() {
//      pintar(ele);
//    });





//respuesta 3.2
const ele = document.querySelector('#ele1')

pintar = function (color = 'green') {
    ele.style.backgroundColor = color
}

pintar()

ele.addEventListener('click', () => {
    ele.style.backgroundColor = 'yellow'
})