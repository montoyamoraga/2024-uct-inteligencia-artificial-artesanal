# clase-02

## Programación en P5 101

* - CÓDIGO DE ANIMACIÓN -

// POR MrRojasJr
// FECHA: 08 de Octubre, 2024
// CONTEXTO: Workshop FAAD [BETA]

// Cualquier línea que esté escrita en JavaScript con // significa que es un "comentario" 

// En caso de crear un código que por ABC motivo no funciona, una mejor opción a borrar es usar // y tenerlo como referencia

//El uso de mayúsculas separa comandos, debe de usarse en casos  muy específicos o importantes. No se DEBE empezar con mayúsculas.

//Declarar una variable es: let ___; y solo puede hacerse una vez por nombre

// En programación el signo = no es "es igual a..." sinó que "la variable que está a la izquierda vale lo que está a la derecha"

//Puedes reemplazar valores numéricos con comandos (ver ejemplo de ellipse(posicionX, 375, 50, 50) ) 

## Código aplicado (JavaScript)

let posicionX;

let posicionY;

let velocidad;

let direccion;

let ancho; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  posicionX = 500;
  posicionY = 100;
  velocidad = 10;
  direccion = 1;
  ancho = 50;
  
  console.log("ancho: " + displayWidth);
  console.log("altura. " + displayHeight);

}


// Antes era ellipse(X, X, X, X) 

function draw() {
  background(241, 141, 14);
  ellipse(posicionX, posicionY, ancho, 50);
  
  posicionY = posicionY + direccion * velocidad;
 
  
  //console.log(posicionX);
  
  if (posicionY > height - ancho/2) {
  direccion = -1;
  }
  else if (posicionY < 0 - ancho/2){
    direccion = 1
  }
    
  
}


## Fin Código (JavaScript)

* El código debería de crear un Canva con una circunferencia (elípse) en movimiento.
* background usa el código de color RGB.
* Símbolos {, }  dan un comienzo y un final a una línea de código.
* Símbolo ; se aplica al final de cada comando.
* comando "console.log" abre la lectura de la consola, que explica de manera detallada lo programado.
* Símbolo // aplica para "generar notas" dentro del código. Esto ya que // le dice al lenguaje de programación que "lo siguiente no existe/no lo tomes en cuenta".
* NO BORRES EL CÓDIGO, lo mejor que puedes hacer es "reciclarlo" usando // y que el comando en deshuso sirva como referencia.
* comando let da propiedad a palabras/comandos.
* Los valores no son solo números, pueden asignársele otros comandos (como los hechos con let)
* Sufijo .png/.jpg etc. son el tipo de programa o lectura que dicho sujeto tiene.
* 
* Si el código es abierto, puedes copiar y pegar a conveniencia.
* Si el código pareciera "raro"/"malo" pero funciona, no toques el código.

![Ejemplo!]
