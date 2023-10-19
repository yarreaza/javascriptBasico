/*En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true 
si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.

Input

solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])

Output

true
false*/

export function solution(arraySecreto) {
    var typeDateElement = typeof arraySecreto[0];
    typeDateElement == "number" ? true : false;  
}

solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])

//============================
//======== Caso 1=============
//============================
estudiantes = ["Nico", "Zule"];
deathCount=0;
nuevo = "Santi";
/* Entrada ----> */ solution(["Nico", "Zule"], 0, "Santi")
/* Salida -----> */ ["Nico", "Zule", "Santi"]

//============================
//======== Caso 2=============
//============================
estudiantes = ["Juan", "Juanita", "Daniela"];
deathCount=1;
nuevo = "Julian";
/* Entrada ----> */ solution(["Juan", "Juanita", "Daniela"], 1, "Julian") 
/* Salida -----> */ ["Juan", "Juanita", "Julian"] 

//============================
//======== Caso 3=============
//============================
estudiantes = ["Nath", "Luisa", "Noru"];
deathCount=2;
nuevo = "Cami";
/* Entrada ----> */ solution(["Nath", "Luisa", "Noru"], 2, "Cami")
/* Salida -----> */ ["Nath", "Cami"]

// Solución:
function solution(estudiantes, deathCount, nuevo){    
    if (deathCount===0) {    
       estudiantes.push(nuevo);    
        return estudiantes; 
    }else { if (deathCount>0){
        for (i=deathCount; i>0; i--){ 
           estudiantes.pop(estudiantes[estudiantes.length-1]);             
        }
        estudiantes.push(nuevo); 
        return estudiantes;        
    } 
    }
}
solution(["Nico", "Zule"], 0, "Santi");
solution(["Juan", "Juanita", "Daniela"], 1, "Julian");
solution(["Nath", "Luisa", "Noru"], 2, "Cami");

//=============================================================================
//==== Función constructora que va a ser el template de mis nuevos objetos ====
//=============================================================================
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
//==============================================================================
//====== Creación de un nuevo objeto a partir de la función constructora=========
//===============================================================================

var autoNuevo = new auto("Tesla", "Model 3", 2020); // hemos generad un objeto nuevo a partir del template
autoNuevo;
// auto {marca: 'Tesla', modelo: 'Model 3', annio: 2020}

/* new crea una nueva instancia de la función constructora, y 
una instancia consiste en crear un objeto que deriva de otro objeto*/

//========================================

// Prueba 1
var car = { 
    color: "red",
    brand: "Kia",
  }
  
  // Prueba 2
  var car = { 
    color: "gray",
    brand: "Chevrolet",
    licensePlate: "AAA111"
  }
  
  // Prueba 
  var car = { 
    licensePlate: "RGB255"
  }
  
  function solution(car) {
    if (car.licensePlate === null || car.licensePlate === undefined) {
      car.licensePlate = false;
    }
    else {
      car.licensePlate = true;
    }
    return car;
  }
  
  solution(car);
  
  
  // ==========================================================================
  // Ejercicio N.º 2:   Generar una función constructora y hacer un ciclo para 
  // generar una lista de 30 carros que se vayan construyendo solos  
  // ==========================================================================
  
  // 1. Creamos una función constructora
  function carro(marca, modelo, annio){
    carro.marca = marca;
    carro.modelo = modelo;
    carro.annio = annio;
  }

  var listaDeCarros = [];

  for (i=0; i<30; i++){
    /* 2. Creamos tres arrays y lo llenamos de valores según corresponda */
    var marcas = ["Toyota", "Honda", "Ford", "Chevrolet", "Volkswagen"];
    var modelos = ["Sedán", "SUV", "Deportivo", "Camioneta"];
    var annios = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010"];

    /* 3. Seleccionaremos valores aleatorios de la lista, en cada vuelta 
          del ciclo cada propiedad va obtener un valor aleatorio */
    var valorMarcaRandom = marcas[Math.floor(Math.random() * marcas.length)];
    var valorModeloRandom = modelos[Math.floor(Math.random() * modelos.length)];
    var valorAnnioRandom = annios[Math.floor(Math.random() * annios.length)];

    // 4. Creamos un nueva objeto Carro para luego agregarlo al array 
    var nuevoCarro = new carro(valorMarcaRandom, valorModeloRandom, valorAnnioRandom);

    // 5. creamos un array para almacenar las propiedades de los 10 carros
        listaDeCarros.push(nuevoCarro);
  }
   // 6. Creamos un objeto para contener las propiedades de los 10 carros
  var objetoCarros = {
    carro: listaDeCarros
  }

  console.log(objetoCarros);

  //===================================================================
  //==================Ejercicios con Métodos de Array==================
  //===================================================================

  var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libroi", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audífonos", costo: 1700}
  ]

// Método some, some solo va a devolver un valor booleano, true si cimple la condición o false en caso contrario
var articuloBarato = articulos.some(function(articulo){
  return articulo.costo <= 700;
})
articuloBarato;

  /* Método forEach(), NO regresa un array solo hara un filtrado 
  sobre el array original y devolverá una serie de valores */

  articulos.forEach(function(articulo){
    console.log(articulo.nombre);
  })

  // Método find(), igualmente genera un nuevo array, no modifica el original
  var encuentraArticulo = articulos.find(function (articulo){
    return articulo.nombre === "Laptop";
  })
  encuentraArticulo;

 // Método map(), genera un nuevo array
  var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
  })

  // Método filter(), agrega en articulosFiltrados aquellos artículos que cumplan con la condición
  var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <=500;
  })

  
/* Método push() El método .push() nos permite agregar uno o más elementos al final 
de un array. A continuación veremos un ejemplo aplicado con un array que contiene números: */
  let arrayNum = [1,2,3,4,5];
  function nuevoNum(){
    arrayNum.push(6,7);
    console.log(arrayNum);
  }
  nuevoNum();

//  Método shift(), el método shift() elimina el primer elemento del array y lo retorna.
//  Este método modifica la longitud del array.

let arrayInicial1 = [1,2,3,4,5];
let elementoEliminado1 = arrayInicial1.shift();
console.log(arrayInicial1);

// El Método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

let arrayInicial = [1,2,3,4,5];
let elementoEliminado = arrayInicial.pop();
console.log(arrayInicial);


//=============================================================
//=========================Ejercicios==========================
//=============================================================

/* En este desafío debes ayudarnos a arreglar la función solution.

Esta recibe un array cars y debería retornar el array filtrado únicamente con los objetos que tengan la propiedad licensePlate.

Pero no está funcionando.

La función solo devuelve un objeto con el primer elemento que cumple los requisitos, no estamos recibiendo los demás elementos del array que también deberían pasar el filtro.

¿Nos ayudas? ¿Cómo solucionarías el error?*/

//Input

const carros = [
  {
    color: 'red',
    brand: 'Kia',
  },
  {
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  },
  {
    licensePlate: 'RGB255',
  },
];

solution(cars);

// Output

[
  {
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  },
  {
    licensePlate: 'RGB255',
  },
]

//Solución:

const cars = [
  {
    color: 'red',
    brand: 'Kia',
  },
  {
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  },
  {
    licensePlate: 'RGB255',
  },
];

function solution(cars) {
  return cars.filter(function(car) {
    if (car.licensePlate) {
      return true;
    } else {
      return false;
    }
  });
}

const filteredCars = solution(cars); // Llama la función con el arreglo "cars"
console.log(filteredCars);