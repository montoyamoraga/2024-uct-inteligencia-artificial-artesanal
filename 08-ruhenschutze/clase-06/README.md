# clase-06
save de pablo
```
let button1, button2, button3, button4,button5,button6;
let showText1 = false;
let showText2 = false;
let showText3 = false;
let showText4 = false;
let showText5 = false;
let showText6 = false;// Variable para controlar la visibilidad del texto

function setup() {
  createCanvas(windowWidth, windowHeight); // Crear un lienzo que ocupa toda la pantalla
  button1= createButton('Acertijo1'); // Crear el botón
  button1.position(width / 30 - 60, height / 5 - 20); // Posición del botón
  button1.mousePressed(toggleText1); // Asignar la función al presionar el botón
  
  button2= createButton('Acertijo2'); // Crear el botón
  button2.position(width / 6 - 60, height / 3 - 20); // Posición del botón
  button2.mousePressed(toggleText2); // Asignar la función al presionar el botón
  
  button3= createButton('Acertijo3'); // Crear el botón
  button3.position(width / 30 - 60, height / 9 - 20); // Posición del botón
  button3.mousePressed(toggleText3); // Asignar la función al presionar el botón
  
  button4= createButton('Acertijo4'); // Crear el botón
  button4.position(width / 6 - 60, height / 9 - 20); // Posición del botón
  button4.mousePressed(toggleText4); // Asignar la función al presionar el botón
  
  button5= createButton('Acertijo5'); // Crear el botón
  button5.position(width / 6 - 60, height / 11 - 20); // Posición del botón
  button5.mousePressed(toggleText5); // Asignar la función al presionar el botón
  
  button6= createButton('Acertijo6'); // Crear el botón
  button6.position(width / 6 - 60, height / 10 - 20); // Posición del botón
  button6.mousePressed(toggleText6); // Asignar la función al presionar el botón
}

function draw() {
  background(0, 0, 255); // Fondo azul
  
  if (showText1) { // Si showText es verdadero, dibuja el texto
    fill(255); // Color del texto
    textSize(24); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('¡Hola, este es el texto\n'
         + 'desplegado en versos!\n'
         + 'Cada línea es un suspiro,\n'
         + 'cada palabra un abrazo.', 
         width / 3, height / 4 + 40);
 }
   if (showText2) { // Si showText es verdadero, dibuja el texto
    fill(255); // Color del texto
    textSize(24); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('¡Hola,asfasfsdf versos!\n'
         + 'Cada línea es un suspiro,\n'
         + 'cada palabra un abrazo.', 
         width / 3, height / 4 + 40);
 }
  
   if (showText3) { 
    fill(255); // Color del texto
    textSize(24); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('¡Hola,asfasfsdf versos!\n'
         + 'Cada lísdgddfdnddsgdea es un suspiro,\n'
         + 'cada palabra un abrazo.', 
         width / 3, height / 4 + 40);
 }
  
   if (showText4) { 
    fill(255); // Color del texto
    textSize(24); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('¡Hola,asfasfsdf versos!\n'
         + 'Cada camino es un suspiro,\n'
         + 'cada palabra es un abrazo hacia la vida.', 
         width / 3, height / 4 + 40);
 }
  
  if (showText5) { 
    fill(255); // Color del texto
    textSize(24); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('¡Hola,asfasfsdf versos!\n'
         + 'texto5 es un suspiro,\n'
         + 'cada palabra es un abrazo hacia la vida.', 
         width / 3, height / 4 + 40);
 }
  
  if (showText6) { 
    fill(255); // Color del texto
    textSize(24); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('En el susurro del viento universitario,\n'
         + 'donde el sol dibuja sombras en la tierra,\n'
         + 'busca un rincón de cuerpos en movimiento,\n'
         + 'entre risas, gritos y el eco del juego.\n'
         + 'Más allá del estacionamiento,\n'
         + 'donde el ruido se disipa en la calma,\n'
         + 'una pista espera, con brazos de acero,\n'
         + 'un refugio de fuerza, donde el cuerpo se eleva.',
         width / 3, height / 4 + 40);
 }
}  

  function toggleText1() {
  showText1 = !showText1; // Cambia la visibilidad del texto 1
  showText2 = false;
  showText3 = false;
  showText4 = false;
  showText5 = false;
  showText6 = false;// Oculta el texto 2 si el 1 se muestra
}

function toggleText2() {
  showText2 = !showText2; // Cambia la visibilidad del texto 2
  showText1 = false;
  showText3 = false;
  showText4 = false;
  showText5 = false;
  showText6 = false;// Oculta el texto 1 si el 2 se muestra
}

function toggleText3() {
  showText3 = !showText3; // Cambia la visibilidad del texto 3
  showText2 = false;
  showText1 = false;
  showText4 = false;
  showText5 = false;
  showText6 = false;
}
  
function toggleText4() {
  showText4 = !showText4;
  showText1 = false;
  showText2 = false;
  showText3 = false;
  showText5 = false;
  showText6 = false;
}  

function toggleText5() {
  showText5 = !showText5;
  showText1 = false;
  showText2 = false;
  showText3 = false;
  showText4 = false;
  showText6 = false;
}  

function toggleText6() {
  showText6 = !showText6; // Cambia la visibilidad del texto 1
  showText2 = false;
  showText3 = false;
  showText4 = false;
  showText5 = false;
  showText1 = false;// Oculta el texto 2 si el 1 se muestra
}
```
