# clase-00

BITÁCORA Martes, 08 de octubre del 2024

## Primeras pruebas de programación y movimiento.

* https://editor.p5js.org/ConstanzaPS111/sketches/SISKs2dh4
* https://editor.p5js.org/ConstanzaPS111/sketches/teLzQwwZN

PROGRAMAS VISTOS EN CLASE
* p5.js
* ml5.js
* wekinator
* processing
* tensorflow
* google colab
* teachable machine

## PROGRAMAS ÚTILIZADOS

* https://p5js.org/es/reference/
* https://htmlcolorcodes.com/es/
* https://ml5js.org/
* p5.js
* ml5.js


## EXPLICACIÓN PARA ENTENDER EL FUNCIONAMIENTO
```

// codigo que explica variables
// y movimiento de una elipse
// por montoyamoraga
// 2024 octubre 08
// workshop faad uct

// declarar una variable
// se usa la palabra let
// cada variable necesita nombres distintos

// creacion de variables
let posicionX;
let velocidadX;
let direccion;
let ancho;

// setup() ocurre una vez, al principio
function setup() {
  // crear lienzo
  createCanvas(windowWidth, windowHeight);

  // inicializar variables
  posicionX = 100;
  velocidadX = 5.0;
  direccion = 1;
  ancho = 100;
  
}

function draw() {
  // pintar fondo de color rojo
  background(0, 255, 0);

  // dibujar una elipse en una posicion
  ellipse(posicionX, 200, ancho, 100);
  
  // actualizar posicion
  posicionX = posicionX + direccion * velocidadX;
  
  // si la elipse esta en el borde derecho  
  if (posicionX > width - ancho/2) {
    // invertir la direccion
    direccion = -1;
  }
  // en otro caso
  // si la elipse esta en el borde izquierdo
  else if (posicionX < 0 + ancho/2) {
    // invertir la direccion
    direccion = 1;
  }
  
}
