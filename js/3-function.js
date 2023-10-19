/* Las funciones son procedimientos, un conjunto de sentencias o pasos que realizarán una tarea o cálculo con ciertos valores.
   Tenemos dos tipo de funciones en js, function Declaration y function Expression 
   el nombre reservado de function y parametros que recibira esa function */

function miFuncion() { // Función declarativa
    return 3; 
}
miFuncion(); // Llamada de la función


var miFuncion = function(a,b) {  // Función expresiva (también conocidas como funciones anónimas)
    return a + b;
}
miFuncion(); // Llamada de la variable de la función


/* ============================= */


function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);  // template strings (Plantillas de cadena de texto)
}


function suma(a,b) {  /* está funcion recibe 2 parámetros, que se convierten en un placeholder de valores que se pueden 
                            utilizar dentro de la función.*/
    var resultado = a + b; 
}

// Return, cómo regresamos un valor con una function. 



function suma(a,b) {
    var resultado =  a + b; 
    return resultado;
}

function suma(a,b) {
    return a + b; 
}

suma(20, 30); 