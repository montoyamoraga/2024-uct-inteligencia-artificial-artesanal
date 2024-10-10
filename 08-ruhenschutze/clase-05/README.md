# clase-05
 cosas que añadir a la app.
calistenia
 En el susurro del viento universitario,
donde el sol dibuja sombras en la tierra,
busca un rincón de cuerpos en movimiento,
entre risas, gritos y el eco del juego.
Más allá del estacionamiento,
donde el ruido se disipa en la calma,
una pista espera, con brazos de acero,
un refugio de fuerza, donde el cuerpo se eleva.

isla
Busca el punto dorado, donde el cielo se rinde,
y el agua se hace espejo, donde el misterio anide.
No mires solo adelante, el pasado te guiará,
en un giro sutil, lo que anhelas hallarás.

Un susurro de tierra, 
sus árboles murmuran historias del viento,
mientras las aves tejen cantos en el tiempo,
un refugio de calma, un rincón de ensueño,
donde el alma se baña en su propio diseño.

capilla
Sigue el camino de piedras doradas,
donde el sol juega entre hojas calladas.
No mires solo adelante, busca en tu andar,
que la luz de la fe te invita a llegar.

ruka
Las paredes de barro, suaves como la tierra,
guardan ecos de ancestros, susurros de viento,
mientras el sol, dorado, acaricia su tejado,
y las sombras juegan, danzando en el momento.

Aislada, apartada, entre edificios y sueños,
esta se erige, un refugio del pasado,
un canto a la memoria, a la raíz y la vida,
un recordatorio suave de lo que ha perdurado.

Aquí, en su soledad, florece la historia,
un rincón de la tierra, un latido profundo,
donde la cultura vive, entre el saber y el fuego,
y la esencia mapuche se entrelaza en el mundo.

virgen
En un rincón donde el viento susurra,
entre altos muros, su paz se asegura,
una figura de gracia y ternura,
que a las aguas nunca mira, su postura.

En el centro del campo, rodeada de prisa,
busca la madre, sin más improvisa,
de espaldas al lago, su amor te da vida,
en medio del caos, su luz es tu guía.

Camina despacio, con fe y sin miedo,
y hallarás la estatua, tu fiel, tu credo.
Escucha el silencio, y deja que hable,
pues su abrazo eterno, siempre te abraze.

mirador
Entre sombras de árboles y susurros de agua,
una plataforma se asoma, escondida en su danza,
de madera oscura, como secretos guardados,
teje caminos de rampa y escaleras soñadas.

Un laberinto pequeño, un refugio del viento,
donde la luz se filtra, pintando el momento,
cada escalón, un suspiro, cada giro, un hallazgo,
un rincón de calma, un rincón de abrazo.

Frente a la laguna, espejo de cielos,
las olas murmuran cuentos de anhelos,
y desde su altura, la vista se despliega,
un vasto horizonte donde el alma se entrega.

Aquí, en este refugio, la naturaleza canta,
el tiempo se detiene, la vida se levanta,
un pequeño paraíso, un rincón escondido,
donde el corazón encuentra su sentido.

idea1cod

```
let button;
let showText = false; // Variable para controlar la visibilidad del texto

function setup() {
  createCanvas(windowWidth, windowHeight); // Crear un lienzo que ocupa toda la pantalla
  button = createButton('Acertijo 1'); // Crear el botón
  button.position(width / 5 - 60, height / 7 - 20); // Posición del botón
  button.mousePressed(toggleText); // Asignar la función al presionar el botón
}

function draw() {
  background(0, 175, 250); // Fondo azul
  
  if (showText) { // Si showText es verdadero, dibuja el texto
    fill(255); // Color del texto
    textSize(24); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro
  text('Sigue el camino de piedras doradas,\n'
         + 'donde el sol juega entre hojas calladas.\n'
         + 'No mires solo adelante, busca en tu andar,\n'
         + 'que la luz de la fe te invita a llegar.', 
         width / 3, height / 7 + 40);
  }
}

function toggleText() {
  showText = !showText; // Cambiar el estado de showText
}
```
save 2
```
let button1, button2, button3;
let showText1 = false;
let showText2 = false;
let showText3 = false;// Variable para controlar la visibilidad del texto

function setup() {
  createCanvas(windowWidth, windowHeight); // Crear un lienzo que ocupa toda la pantalla
  button1= createButton('Acertijo1'); // Crear el botón
  button1.position(width / 6 - 60, height / 3 - 20); // Posición del botón
  button1.mousePressed(toggleText1); // Asignar la función al presionar el botón
  
  button2= createButton('Acertijo2'); // Crear el botón
  button2.position(width / 6 - 60, height / 5 - 20); // Posición del botón
  button2.mousePressed(toggleText2); // Asignar la función al presionar el botón
  
  button3= createButton('Acertijo3'); // Crear el botón
  button3.position(width / 6 - 60, height / 7 - 20); // Posición del botón
  button3.mousePressed(toggleText3); // Asignar la función al presionar el botón
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
}

  function toggleText1() {
  showText1 = !showText1; // Cambia la visibilidad del texto 1
  showText2 = false;
  showText3 = false;// Oculta el texto 2 si el 1 se muestra
}

function toggleText2() {
  showText2 = !showText2; // Cambia la visibilidad del texto 2
  showText1 = false;
  showText3 = false;// Oculta el texto 1 si el 2 se muestra
}

function toggleText3() {
  showText3 = !showText3; // Cambia la visibilidad del texto 2
  showText2 = false;
  showText1 = false;// Oculta el texto 1 si el 2 se muestra
}
```
save con todos los botones+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
  button1.position(width / 6 - 60, height / 3 - 20); // Posición del botón
  button1.mousePressed(toggleText1); // Asignar la función al presionar el botón
  
  button2= createButton('Acertijo2'); // Crear el botón
  button2.position(width / 6 - 60, height / 5 - 20); // Posición del botón
  button2.mousePressed(toggleText2); // Asignar la función al presionar el botón
  
  button3= createButton('Acertijo3'); // Crear el botón
  button3.position(width / 6 - 60, height / 7 - 20); // Posición del botón
  button3.mousePressed(toggleText3); // Asignar la función al presionar el botón
  
  button4= createButton('Acertijo4'); // Crear el botón
  button4.position(width / 6 - 60, height / 9 - 20); // Posición del botón
  button4.mousePressed(toggleText4); // Asignar la función al presionar el botón
  
  button5= createButton('Acertijo5'); // Crear el botón
  button5.position(width / 6 - 60, height / 11 - 20); // Posición del botón
  button5.mousePressed(toggleText5); // Asignar la función al presionar el botón
  
  button6= createButton('Acertijo6'); // Crear el botón
  button6.position(width / 6 - 60, height / 13 - 20); // Posición del botón
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
    text('¡Hola,asfasfsdf versos!\n'
         + 'texto6n suspiro,\n'
         + 'cada palabra es un abrazo hacia la vida.', 
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
