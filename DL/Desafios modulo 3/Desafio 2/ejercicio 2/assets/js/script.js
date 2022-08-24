let canti1 = document.querySelector("#canti1");
let canti2 = document.querySelector("#canti2");
let canti3 = document.querySelector("#canti3");
let resultado = document.querySelector("#sumatoria");


function suma(){
    let total = (Number(canti1.value)) + (Number(canti2.value)) + (Number(canti3.value));
    resultado.innerHTML = sumatoria
if (total ==10){
    resultado.innerHTML = "Llevas lo maximo";
}else if (total > 10){
    resultado.innerHTML = "Llevas demasiados stickers"
}else if (total < 10){
    resultado.innerHTML = "Puedes llevar mas stickers"
}

}