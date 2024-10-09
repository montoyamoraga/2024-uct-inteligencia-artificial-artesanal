# clase-02

apuntes- Reconocimiento facial, el programa reconoce un rostro de los tres, solo reconoce el que esta mas cerca
/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates face tracking on an image through ml5.faceMesh.
 */

let faceMesh;
let img;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

function preload() {
  // Load the image to be detected
  img = loadImage("4e4cc157d0635a793d1ba1eb2b8471cb.jpg");
  // Load the faceMesh model
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);
  // Draw the image
  image(img, 0, 0);
  // Detect faces in an image
  faceMesh.detect(img, gotFaces);
}

function draw() {

Circulo-
// codigo que explica variables
// por viclbeld
// 08 octubre 24
// workshop 2024

let posicionX;

let velocidadX;

let direccion;

let ancho;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posicionX = 100;
  velocidadX = 10;
  direccion = 1;
  ancho = 100;
  console.log("ancho: " + windowWidth); console.log("altura: " + windowHeight);
  
}

function draw() {
  background(90, 0, 75);
  ellipse(posicionX, 200, ancho, 100);
  posicionX  =  posicionX  + direccion * velocidadX; 
  
  
  //console.log("altura" + displayWidth);
  
 // if(posicionX > 300) {
  //  posicionX = -30;
//}
  if (posicionX > width - ancho/2) {
