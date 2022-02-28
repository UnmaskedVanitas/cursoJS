//let id01 = 0.6;
//let id02 = 1;
//let id03 = 1.6;
//let id04 = 1.7;
//let id05 = 1.8;
//let id06 = 2.9;
//let id07 = 2.9;
//let dinero = prompt("Ingrese la cantidad de dinero");

//if (dinero >= id06 && id07 )
//    {document.write("Potecito de helado con confites: 2.9 USD||")
//    document.write("Pote de 1/4KG: 2.9 USD||")
 //   document.write(dinero - id07 + " USD de vuelto.")
//    }
//    else if (dinero < id06 && dinero >= id05 )
//    {document.write("Bombon helado marca helardo: 1.8 USD||")
//    document.write(dinero - id05 + " USD de vuelto.")
//    }
//    else if (dinero < id05 && dinero >= id04)
//    {document.write("Bombon helado marca heladovich: 1.7 USD||")
//    document.write(dinero - id04 + " USD de vuelto.")
//    }
//    else if (dinero < id04 && dinero >= id03)
//    {document.write("Bombon helado marca heladix: 1.6 USD||")
//    document.write(dinero - id03 + " USD de vuelto.")
 //   }
//    else if (dinero < id03 && dinero >= id02)
//    {document.write("Palito de helado de crema: 1 USD||")
//    document.write(dinero - id02 + " USD de vuelto.")
//    }
//    else if (dinero < id02 && dinero >= id01)
//    {document.write("Palito de helado de agua: 0.6 USD||")
//    document.write(dinero - id01 + " USD de vuelto.")
 //   }
 //   else 
 //   (document.write("no tiene dinero suficiente."))

 let helados = { 
    "Palito de helado de agua":0.6,
    "Palito de helado de crema":1.0,
    "Bombón helado marca heladix":1.6,
    "Bombón helado marca heladovich":1.7,
    "Bombón helado marca helardo":1.8,
    "Potecito de helado con confites":2.9,
    "Pote de 1/4 de kg":2.9 
};

let dinero = prompt("Ingrese la cantidad de dinero");
let masCaro; /* Ésta variable se declara afuera para que se vaya sobreescribiendo.
Si la declarara adentro del loop for, se borraría, porque es un contexto diferente. */


/* Encontrar el precio del helado más caro que se puede comprar 
dentro del objeto helados
solo buscando en los valores de el objeto (se descartan las llaves). */
for(const [, valor] of Object.entries(helados)) /* Object.entries devuelve un objeto nuevo
                                    por cada par llave - valor; o sea al final
                                    el for va objeto por objeto
                                    (primero palito de helado de agua despues
                                     de crema, despues bombón etc). */
{
if(dinero >= valor) /* La condicional que usaste.  */
{
masCaro = valor; /* Recuerda que al hacer variable = valor se va sobreescribiendo
            por cada vuelta del ciclo padre for. */
}       
}

let texto = []; /* Creamos un array para almacenar LOS textos a imprimir. */

/* Encontrar todos los helados que tengan el valor del más caro que se pudo comprar ;
recorrer el objeto devolviendo la llave y el valor. */
for(const [llave ,valor] of Object.entries(helados))
{
if(valor == masCaro)
{
/* E ir poniéndolos en un arreglo aparte, en forma de texto listo para mostrar */
/* toFixed(1) hace que se muestren los números con 1 decimal, si fuera
toFixed(2) se mostarían con 2 decimales. */
texto.push(llave + " : " + 'US$' +valor.toFixed(1) + "<br>");
}
}

/* Recorrer el arreglo con los textos e ir imprimiéndolos uno por uno. */
for(const i of texto)
{
document.write(i);
}

/* Imprimir el vuelto con máximo 1 decimal. */
document.write("El vuelto es: " + "US$"+(dinero - masCaro).toFixed(1));

