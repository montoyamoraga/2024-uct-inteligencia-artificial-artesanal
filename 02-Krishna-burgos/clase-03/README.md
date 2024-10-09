# clase-03
## Anotaciones
* ## Gene Kogan
  
* Trabaja con codigos en el arte
* Arpillera mirror, (2019) por Aarón Montoya, filtro y algoritmo
* Transferencia de estilo
* Material plastico y apropiarse
* Obra gene y andreas
* Algoritmo con webcam que es capaz de encontrar instrumentos y realizar los sonidos a través del dibujo
* School of machines, diversos cursos
* Gran parte de la insdustria sigue usando openframeworks
* 
* ## Andreas Refsgaard
* colección de memes
* An algorithm watching a movie trailer
* YOLO es un algoritmo, es capaz de detectar
* Libro, ml4a, desde 2016 siendo escrito
* como hacer transfeencias de estilo, como hacer desde un boceto a una imagen
  * ml5.js version nueva, para artistas
  * p5.js es una manera de decir processing
  * 
    ## páginas web
    * <https://medium.com/processing-foundation/from-simple-to-advanced-ml5-js-70d6730b360b>
    * <https://genekogan.com/>
    * <https://editor.p5js.org/AndreasRef/sketches/4K_YGuMik>
    

## Proceso de actualizar un ejemplo de Andreas Refsgaard
* Artículo en medium.com de Andreas Refsgaard en su residencia de ml5.js disponible en <https://medium.com/processing-foundation/from-simple-to-advanced-ml5-js-70d6730b360b>

  * Galería de ejemplos en <https://ml5-fellowship-2020.github.io/examples/>
 
  * Ejemplo de Mr. Bean en <https://editor.p5js.org/AndreasRef/sketches/4K_YGuMik>

     ```javascript

/*
Mr Bean regression

The example lets you train a regression model with our webcam and use it to control Mr Bean! 

Built with regression model from ml5js and p5js

Created by Andreas Refsgaard 2020

Original idea by @heynthn at CIID Summer School 2017: 
https://www.instagram.com/p/BXDrDCblRvL/

Original video source: https://www.youtube.com/watch?v=HCfrKGrjI2g
*/

let featureExtractor;
let regressor;
let video;
let loss;
let slider;
let samples = 0;

let lerpedResult = 0.5;
let allowedToPredict = true;

let images = [];
let nImages = 44;

let currentImage = 0;

function preload() {
  for (let i = 0; i < nImages; i++) {
    images[i] = loadImage("frame_" + i + "_delay-0.2s.jpg");
    images[i].resize(640, 480);
  }
}

function setup() {
  createCanvas(640, 480);
  // Create a video element
  video = createCapture(VIDEO, 640, 480);
  video.hide();
  // Extract the features from MobileNet
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  // Create a new regressor using those features and give the video we want to use
  regressor = featureExtractor.regression(video, videoReady);
  // Create the UI buttons
  setupButtons();
  rectMode(CENTER);
}

function draw() {
  image(images[currentImage], 0, 0, width, height);
  image(video, 3 * width / 4, 3 * height / 4, width / 4, height / 4);
  noStroke();
  fill(255, 0, 0, 100);
  currentImage = constrain(floor((1 - slider.value()) * nImages), 0, nImages - 1);
}

// A function to be called when the model has been loaded
function modelReady() {
  select('#modelStatus').html('Model loaded!');
}

// A function to be called when the video has loaded
function videoReady() {
  select('#videoStatus').html('Video ready!');
}

// Classify the current frame.
function predict() {
  allowedToPredict = true;
  regressor.predict(gotResults);
}

function stopPredicting() {
  allowedToPredict = false;
}

// A util function to create UI buttons
function setupButtons() {
  slider = select('#slider');
  select('#addSample').mousePressed(function() {
    regressor.addImage(slider.value());
    select('#amountOfSamples').html(samples++);
  });

  // Train Button
  select('#train').mousePressed(function() {
    regressor.train(function(lossValue) {
      if (lossValue) {
        loss = lossValue;
        select('#loss').html('Loss: ' + loss);
      } else {
        select('#loss').html('Done Training! Final Loss: ' + loss);
      }
    });
  });

  // Predict Button
  select('#buttonPredict').mousePressed(predict);
  select('#buttonStopPredict').mousePressed(stopPredicting);

  // Save model
  saveBtn = select('#save');
  saveBtn.mousePressed(function() {
    regressor.save();
  });

  // Load model
  loadBtn = select('#load');
  loadBtn.changed(function() {
    regressor.load(loadBtn.elt.files, function() {
      select('#modelStatus').html('Custom Model Loaded!');
    });
  });
}

// Show the results
function gotResults(err, result) {
  if (err) {
    console.error(err);
  }
  if (result && result.value && allowedToPredict) {
    lerpedResult = lerp(lerpedResult, result.value, 0.15);
    slider.value(lerpedResult);
    predict();
  }
}
```

