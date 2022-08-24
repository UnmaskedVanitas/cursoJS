function Clave() {
    opcion1 = document.querySelector('#opcion1').value
    opcion2 = document.querySelector('#opcion2').value
    opcion3 = document.querySelector('#opcion3').value
    resultado = document.querySelector('#resultado')

    if( (opcion1 + opcion2 + opcion3) == 911 ) {
        resultado.innerHTML = 'Password 1 correcto'
    }else if((opcion1 + opcion2 + opcion3) == 714 ) {
        resultado.innerHTML = 'Password 2 correcto'
        
    }
    else{
        resultado.innerHTML = 'Password incorrecto'
        

    }
}

