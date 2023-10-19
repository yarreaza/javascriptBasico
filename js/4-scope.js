/* Scope es igual a, donde buscar por cosas (estás cosas son las variables), el Scope es el alcance que tienen las variables, 
depende de donde las declaremos y las mandamos llamar si tendremos acceso a ellas o no.*/
// Tenemos dos tipos de Scope, Scope Global y Scope Local.


// Ejemplo de lo que es un Scope Global
var miNombre = "Yelitza"; 
function nombre() {
    miNombre = "Yelitza";
    return miNombre;
}
nombre();
console.log(miNombre);


/* Ejemplo de lo que es un Scope Local, el Scope local pasa al momento de crear una funcion, 
esto genera un ámbito diferente al global, al cual no se podrá tener acceso desde el ámbito global */
var miNombre = "Yelitza"
function nombre() {
    var miApellido = "Arreaza"; 
    return miNombre + " " + miApellido 
}
nombre();
console.log(miNombre);
console.log(miApellido);


// ============================================================================================
// ======================================Ejemplos==============================================
// ============================================================================================


// Ejemplo 1, cómo con una funcion podemos vambiar el valor de la variable global
var miNombre = "Yelitza"
function nombre(usuario) {
    miNombre = usuario;
    console.log(miNombre); 
}
nombre("Yelitza");
console.log(`Hola ${miNombre}, cómo estás?`);


// Ejemplo 2, cómo podemos evitar reescribir el valor de una variable gracias al scope,
var miNombre = "Yelitza"
function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre); 
}
nombre("Yelitza");
console.log(`Hola ${miNombre}, cómo estás?`);


// Ejemplo 3, cómo si creamos un scope local, y mandamos llamar la variable fuera de la funcion, nos puede crear un problema. 
function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre); 
}
nombre("Yelitza");
console.log(`Hola ${miNombre}, cómo estás?`);



