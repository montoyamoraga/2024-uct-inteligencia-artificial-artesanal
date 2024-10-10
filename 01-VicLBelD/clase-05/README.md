# clase-05

## codigo 

```javascript
// Classifier Variable
let classifier;
// Model URL
let imageModelURL = "./my_model/";


//  img.position(0, -10);

// video
let video;
// To store the classification
let label = "cargando...";

let imagenCafes;
let imagenVerdes;

let textoResultado = null;


let textoCafes = "el cafe me recuerda a esto";
let textoVerdes = "el verde me recuerda a esto";
let textoOtros = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
  // imagenCafe = loadImage("cafes.jpg");
  // imagenVerde = loadImage("verdes.jpg");
}

function setup() {
  createCanvas(320, 240);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  
  imagenCafes = createImg('cafes.jpg', "cafes");
  
  imagenVerdes = createImg('verdes.jpg', "verdes");
  
  imagenCafes.hide();
  imagenVerdes.hide();
  
  textoResultado = document.getElementById("textoResultado");

  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(video, 0, 0);

  // Draw the label
  // fill(255);
  // textSize(16);
  //textAlign(CENTER);
  // text(label, width / 2, height/10);
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
  
  if (label == "cafes") {  
    textoResultado.innerHTML = textoCafes;
  imagenCafes.show();
  imagenVerdes.hide();
  } else if (label == "verdes") {
    textoResultado.innerHTML = textoVerdes;
     imagenCafes.hide();
  imagenVerdes.show();
  } else {
  //  textoResultado.innerHTML = textoOtros;
  //    imagenCafes.hide();
  //imagenVerdes.hide();
  }
  
  // Classifiy again!
  classifyVideo();
}
```
