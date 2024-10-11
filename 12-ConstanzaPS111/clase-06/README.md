# clase-06

## BITÁCORA CLASE jueves 10 de octubre, del 2024

PRUEBAS DE FUNCIONAMIENTO:
* https://teachablemachine.withgoogle.com/models/[...]
  
PROPUESTA FINAL...

# PROSAGIOS

* https://editor.p5js.org/ConstanzaPS111/sketches/Yvid6zDlW
* https://editor.p5js.org/ConstanzaPS111/full/Yvid6zDlW

Nuestro proyecto se titula “PROSAGIOS” el cual es una combinación de las palabras “presagios” y “programación” debido a que el proyecto, en efecto, está trabajado con este sistema de programación. De esa forma, a través de una cámara web, el sujeto frente a esta verá una frase en la parte superior de su proyección y deforma aleatoria uno de los 23 presagios saldrá escogido.


¿Cómo funciona?


El sujeto debe mantener su mano cerrada en un puño frente a la cámara, lo que permite que los presagios corran de forma aleatoria, y para escoger una de estas variables solo deberá abrir su mano en una palma, de forma que al quitarla su presagio escogido se deslizará hacia el área posterior derecho, desapareciendo del plano. Para volver a intentarlo solo deberá a repetir las indicaciones.

## CÓDIGO


```
//instrucciones para el uso del algoritmo

// El sujeto debe mantener su mano cerrada en un puño frente a la cámara, lo que permite que los presagios corran de forma aleatoria, y para escoger una de estas variables solo deberá abrir su mano en una palma, de forma que al quitarla su presagio escogido se deslizará hacia el área posterior derecho, desapareciendo del plano. Para volver a intentarlo solo deberá a repetir las indicaciones. 

let resultadoAnterior = "";
let resultadoActual = "";
let numeroResultados = 0;
let umbral = 50;

let posXInicial;
let posXActual;

let posYInicial;
let posYActual;

let fraseActual = 0;

let frases = [
  "Tendrás buena fortuna ",
  "Cuidado por donde pisas... ",
  "¡Recibirás una buena noticia! ",
  "...Suerte para la próxima",
  "Todo saldrá bien ",
  "Es buen momento para darte un gusto ",
  "Busca tiempo a solas... lo necesitarás",
  "Quizás esa no sea la elección correcta ",
  "No te presiones tanto",
  "Hay alguien que te necesita ",
  "Debes esforzarte más en ese proyecto",
  "Hay limitaciones que debes dejar atrás",
  "Tendrás conflictos con una persona especial...\n escucha lo que tenga que decir ",
  "Es un buen momento para mandar ese CV",
  "Deja de hacer compras compulsivas...\n tu billetera lo agradecerá" ,
  "Ten cuidado con tu salud estos días" ,
  "Amiga date cuenta" ,
  "Tendrás que enfrentar a la desaprobación de un ser cercano" ,
  "Un viaje planeado podría cancelarse" ,
  "Revisa detenidamente tu correo...\n hay un mensaje que necesitas ver",
  "Una vieja herida emocional podría resurgir",
  "Los conocimientos previos traerán nuevas oportunidades",
  "No procastines o lo lamentarás más tarde"
];

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = "./my_model/";

// Video
let video;
// let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  createCanvas(500, 350);

  frameRate(20);

  posXInicial = width / 2;
  posXActual = posXInicial;

  posYInicial = (30 * height) / 100;
  posYActual = posYInicial;

  // Create the video
  video = createCapture(VIDEO);
  video.size(500, 350);
  video.hide();

  // flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  // image(flippedVideo, 0, 0);
  image(video, 0, 0);

  // Draw the label
  // con color blanco
  fill(255);
  // con tamano 16
  textSize(18);
  // con alineamiento al centro
  textAlign(CENTER);
  // poner la frase en la pantalla
  text(frases[fraseActual], posXActual, posYActual);
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.classify(video, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;

  // grabar en resultado anterior, el actual porque estoy refrescando
  resultadoAnterior = resultadoActual;

  resultadoActual = label;
  
  console.log(resultadoActual);

  // si el resultado actual es igual al anterior
  if (resultadoActual == resultadoAnterior) {
    numeroResultados = numeroResultados + 1;
  }
  // en otro caso
  else {
    numeroResultados = 0;
  }

  if (numeroResultados > umbral && resultadoActual == "puno") {
    // sube la frase en 1
    fraseActual = fraseActual + 1;
    // cuando llegues al final, vuelve al principio y da la vuelta
    fraseActual = fraseActual % frases.length;

    posXActual = posXInicial;
    posYActual = posYInicial;
  } else if (numeroResultados > umbral && resultadoActual == "palma") {
    posXActual = posXInicial;
    posYActual = posYInicial;
  } else if (numeroResultados > umbral && resultadoActual == "cara") {
    posXActual = posXActual + 1;
    posYActual = posYActual + 1;
  } else {
  
  }

  // Classify again!
  classifyVideo();
}

```
