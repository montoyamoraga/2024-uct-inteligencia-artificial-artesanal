# clase-06
CIRUGIA AL MODELO

mejorando la funcionabilidad

´´´ javacript

  // Global variable to store the classifier
let classifier;

// Label
let label = 'escuchando...';

// Teachable Machine model URL:
let soundModel = './my_model/';


function preload() {
  // Load the model
  // classifier = ml5.soundClassifier(soundModel + 'model.json');
  classifier = ml5.soundClassifier('https://raw.githubusercontent.com/montoyamoraga/2024-uct-inteligencia-artificial-artesanal/refs/heads/main/15-MrRojasJr/clase-05/my_model/model.json');
  
}

function setup() {
  createCanvas(320, 240);
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  background(0);
  // Draw the label in the canvas
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height / 2);
}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
}
´´´
