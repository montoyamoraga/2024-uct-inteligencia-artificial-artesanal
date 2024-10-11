## Desarrollando el código

Trabajando en p5.js <https://editor.p5js.org/MrRojasJr/sketches/A0_yurC3y>

Mostramos un primer boceto de la interfaz: <https://editor.p5js.org/MrRojasJr/full/A0_yurC3y>

Posterior a eso queríamos aplicar un texto estático a modo de "introducción" al caso y un fondo. Si bien se cargó exitosamente la imagen al editor web de p5.js e intentó colocar fondo usando códigos como...

```javascript
let bg;
let y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('assets/moonwalk.jpg');
  createCanvas(720, 400);
}

function draw() {
  background(bg);

  stroke(226, 204, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;
  }
}

```
...Ésto colocaba la imagen dentro de la página, se sobreponía en todo el resto del trabajo.
Se agregó texto y se alineó de manera manual.

Una vez recibimos ayuda y guía del profesor Aaron Montoya, nos arregló el problema del fondo o background y ajustó el texto.

Los cambios que hizo fue agregar una variable o "let" y que en resumen fueron mucho más sencillo que las líneas de código antes intendadas:

```javascript
function draw() {
  //background(0);
  

    image(imagenFondo, 0, 0,width, height);

function preload() {
  imagenFondo = loadImage('fondo.jpeg');


function draw() {
  //background(0);
  

    image(imagenFondo, 0, 0,width, height);
````
Además ayudó a corregir el reajuste de texto, que si bien estaba hecho de manera manual usando valores numéricos, el profesor usó comandos directos con el alto y el ancho, además de multiplicaciones y divisiones del espacio que ajustaba de manera automática la posición del texto:

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  //background(0);
  

    image(imagenFondo, 0, 0,width, height);
  
  
  
  // Draw the label in the canvas
  fill(255);
  textSize(37);
  textAlign(CENTER, CENTER);
  if (label != "Ruido de fondo") {
    text("🎉 TÚ SI LE SABES!! 🎉", width / 2, 40 * height / 100);
    text(label, width / 2, 50 * height / 100);
  } else {
    text("escuchando...", width / 2, height / 2);
  }
  

  text(
    "¿Puedes adivinar cuáles son las 10 palabras más usadas en la FAAD?",
    width/2,
    10*height/70
  );
  
  text(
  "Creado por Mrs. R&S [Manuel Rojas y Wladimir Saldivia], junto al profesor Aaron Montoya. Workshop FAAD UCT 2024",
    textSize(13),
  textAlign(BOTTOM, CENTER)
  
  );
}

```
la versión (CASI) final está aquí <https://editor.p5js.org/MrRojasJr/sketches/nCyT-inWX>


## Refinando detalles

Realizamos modificaciones para ajustar la resolución del background, pues la imagen de fondo tiene un espacio hecho para el encabezado de texto "¿puedes adivinar cuales son las 10 palabras más usadas en la FAAD?" y con el apoyo del profesor encargado si bien el fondo quedó colocado, éste se veía "aplastado", simplemente agregamos a la línea de código el valor height:

```javascript
function draw() {
  //background(0);
  

    image(imagenFondo, 0, 0,width, height);
  

```
Finalmente, estamos viendo cómo colocar nuestra "firma" y autoría dentro del código, probablemente será un pequeño detalle que ajustaremos en el último día del Workshop, listos ya para la isntalación.
