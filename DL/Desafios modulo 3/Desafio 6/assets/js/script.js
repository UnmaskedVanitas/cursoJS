const montoIngresado = document.querySelector ("#montoIngresado")
const selector = document.querySelector("#selector")
const btnResultado = document.querySelector("#btnResultado")
const total = document.querySelector("#total")
const grafico = document.querySelector("#grafico")
let resultado
let datos

function init(){
    document.getElementById('selector-wrapper').innerHTML = generarSelect(await getCurrency())
}

function generarSelect(objeto){
    let template
    template ="<select id='selector'>"

    for(const item in objeto){
        template += '<option value=${item}>${item}</option>'
    }
    template += `</select>`
}

async function getCurrency(){
    let data
    try{
        const res = await fetch('https://mindicador.cl/api/')
        data = await res.json()
        }
        catch(err){
            llenarLabel(err)
    }
        return data
}

    function llenarLabel(valor){
    const span = document.getElementById('total')
    span.innerHTML = valor

}

async function select(selector){
    const res = await getCurrency()
        if(selector.value == "UF") resultado = res.uf.valor
        else if(selector.value == "Dolar") resultado = res.dolar.valor
        else resultado = res.euro.valor
}

function calculo(){
    const texto = document.getElementById('montoIngresado').value
    const numero = parseInt(texto)
    const r = parseInt(numero / resultado)
        if(r == 0 || r == null || r== undefined || isNaN(r))
        return llenarLabel('error')
    console.log(r)
    llenarLabel(r)
}

let miCanvas = document.getElementById('miGrafica').getContext('2d')
var chart = new Chart(miCanvas,{
    type:'line',
    data:{
        datasets:[
            {

            }
        ]
    }
})

const config = {
    type: tipoGrafico,
    data: {
        datasets: [
            {
                label: titulo,
                backgroundColor:
                    colorDeLinea,
            }
        ]
    }
}
return config
