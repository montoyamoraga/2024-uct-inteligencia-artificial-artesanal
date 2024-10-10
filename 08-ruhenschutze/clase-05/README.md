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

```js
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
```js
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
save antes de poner lo de las fotos
```js
let video;
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
  button1.position(width / 10 - 60, height / 10 - 20); // Posición del botón
  button1.mousePressed(toggleText1); // Asignar la función al presionar el botón
  
  button2= createButton('Acertijo2'); // Crear el botón
  button2.position(width / 3.3 - 60, height / 10 - 20); // Posición del botón
  button2.mousePressed(toggleText2); // Asignar la función al presionar el botón
  
  button3= createButton('Acertijo3'); // Crear el botón
  button3.position(width / 2 - 60, height / 10 - 20); // Posición del botón
  button3.mousePressed(toggleText3); // Asignar la función al presionar el botón
  
  button4= createButton('Acertijo4'); // Crear el botón
  button4.position(width / 10 - 60, height / 6 - 20); // Posición del botón
  button4.mousePressed(toggleText4); // Asignar la función al presionar el botón
  
  button5= createButton('Acertijo5'); // Crear el botón
  button5.position(width / 3.3 - 60, height / 6 - 20); // Posición del botón
  button5.mousePressed(toggleText5); // Asignar la función al presionar el botón
  
  button6= createButton('Acertijo6'); // Crear el botón
  button6.position(width / 2 - 60, height / 6 - 20); // Posición del botón
  button6.mousePressed(toggleText6); // Asignar la función al presionar el botón
  
    let constraints = {
    video: {
      facingMode: "environment"
    },
    audio: false
  };
  
  video = createCapture(constraints);
  video.size(108, 196);
  video.hide();
}

function draw() {
  background(0, 0, 255); // Fondo azul
  
   image(video, width - video.width - 20, 20); // Espacio de 20 píxeles del borde
  
  if (showText1) { // Si showText es verdadero, dibuja el texto
    fill(255); // Color del texto
    textSize(20); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('En la entrada del campus, un refugio se asoma,\n'
         + 'donde la luz y la sombra en silencio se toman,\n'
         + 'un santuario de paz, que eleva el alma.\n'
         + ' \n'
         + 'En su trasera, orificios que dan al cielo,\n'
         + 'ventanas susurrantes, llenas de anhelo,\n'
         + 'un juego de luces que danza en su piel,\n'
         + 'cada rayo de sol, un mensaje de fe.\n'
         + ' \n'
         + 'Allí, donde se unen el tiempo y el espacio,\n'
         + 'los corazones se encuentran, dejando su lazo,\n'
         + 'un lugar de reflexión, de encuentros divinos,\n'
         + 'donde los sueños florecen en caminos genuinos.', 
         width / 3, height / 4 + 40);
 }
   if (showText2) { // Si showText es verdadero, dibuja el texto
    fill(255); // Color del texto
    textSize(20); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('En un rincón donde el viento susurra,\n'
         + 'entre altos muros, su paz se asegura,\n'
         + 'una figura de gracia y ternura,\n'
         + 'que a las aguas nunca mira, su postura.\n'
         + ' \n'
         + 'En el centro del campo, rodeada de prisa,\n'
         + 'busca la madre, sin más improvisa,\n'
         + 'de espaldas al lago, su amor te da vida,\n'
         + 'en medio del caos, su luz es tu guía.\n'
         + ' \n'
         + 'Camina despacio, con fe y sin miedo\n'
         + 'y hallarás la estatua, tu fiel, tu credo.\n'
         + 'Escucha el silencio, y deja que hable,\n'
         + 'pues su abrazo eterno, siempre te abraze.', 
         width / 3, height / 4 + 40);
 }
  
   if (showText3) { 
    fill(255); // Color del texto
    textSize(20); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('Busca el punto dorado, donde el cielo se rinde,\n'
         + 'y el agua se hace espejo, donde el misterio anide.\n'
         + 'No mires solo adelante, el pasado te guiará,\n'
         + 'en un giro sutil, lo que anhelas hallarás.\n'
         + ' \n'
         + 'Un susurro de tierra,\n'
         + 'sus árboles murmuran historias del viento,\n'
         + 'mientras las aves tejen cantos en el tiempo,\n'
         + 'un refugio de calma, un rincón de ensueño,\n'
         + 'donde el alma se baña en su propio diseño.', 
         width / 3, height / 4 + 40);
 }
  
   if (showText4) { 
    fill(255); // Color del texto
    textSize(20); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('Entre sombras de árboles y susurros de agua,\n'
         + 'una plataforma se asoma, escondida en su danza,\n'
         + 'de madera oscura, como secretos guardados,\n'
         + 'teje caminos de rampa y escaleras soñadas.\n'
         + ' \n'
         + 'Un laberinto pequeño, un refugio del viento,\n'
         + 'donde la luz se filtra, pintando el momento,\n'
         + 'cada escalón, un suspiro, cada giro, un hallazgo,\n'
         + 'un rincón de calma, un rincón de abrazo.\n'
         + ' \n'
         + 'Frente a la laguna, espejo de cielos,\n'
         + 'las olas murmuran cuentos de anhelos,\n'
         + 'y desde su altura, la vista se despliega,\n'
         + 'un vasto horizonte donde el alma se entrega.\n'
         + ' \n'
         + 'Aquí, en este refugio, la naturaleza canta,\n'
         + 'el tiempo se detiene, la vida se levanta,\n'
         + 'un pequeño paraíso, un rincón escondido,\n'
         + 'donde el corazón encuentra su sentido.', 
         width / 3, height / 4 + 40);
 }
  
  if (showText5) { 
    fill(255); // Color del texto
    textSize(20); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('Las paredes de barro, suaves como la tierra,\n'
         + 'guardan ecos de ancestros, susurros de viento,\n'
         + 'mientras el sol, dorado, acaricia su tejado,\n'
         + 'y las sombras juegan, danzando en el momento.\n'
         + ' \n'
         + 'Aislada, apartada, entre edificios y sueños,\n'
         + 'esta se erige, un refugio del pasado,\n'
         + 'un canto a la memoria, a la raíz y la vida,\n'
         + 'un recordatorio suave de lo que ha perdurado.\n'
         + ' \n'
         + 'Aquí, en su soledad, florece la historia,\n'
         + 'un rincón de la tierra, un latido profundo,\n'
         + 'donde la cultura vive, entre el saber y el fuego,\n'
         + 'y la esencia mapuche se entrelaza en el mundo.',
         width / 3, height / 4 + 40);
 }
  
  if (showText6) { 
    fill(255); // Color del texto
    textSize(20); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text('En el susurro del viento universitario,\n'
         + 'donde el sol dibuja sombras en la tierra,\n'
         + 'busca un rincón de cuerpos en movimiento,\n'
         + 'entre risas, gritos y el eco del juego.\n'
         + ' \n'
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
