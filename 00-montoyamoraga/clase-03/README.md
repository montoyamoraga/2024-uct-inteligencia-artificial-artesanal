# clase-03

miércoles 09 octubre 2024

09am-01pm

## artistas

* gene kogan <https://genekogan.com/>
* andreas refsgaard <https://www.andreasrefsgaard.dk/>

## proceso de actualizar un ejemplo de Andreas Refsgaard

encontramos el artículo en Medium.com de Andreas Refsgaard en su residencia de ml5.js disponible en <https://medium.com/processing-foundation/from-simple-to-advanced-ml5-js-70d6730b360b>

fuimos a la galería de ejemplos disponible en <https://ml5-fellowship-2020.github.io/examples/>

elegimos el ejemplo Mr Bean Regression disponible en <https://editor.p5js.org/AndreasRef/sketches/4K_YGuMik>

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

ahora está el archivo index.html que es la web

```html
<html>
<head>
  <meta charset="UTF-8">
  <title>Image Regression using Feature Extraction with MobileNet. Built with p5.js</title>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js"></script>
  <script src="https://unpkg.com/ml5@latest/dist/ml5.min.js" type="text/javascript"></script>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
  <h3>Train a Neural Network to do regression</h3>
  <div id="videoContainer"></div>
  <h6><span id="modelStatus">Loading base model...</span> | <span id="videoStatus">Loading video...</span></h6>
  <p>
    <input type="range" name="slider" id="slider" min="0.01" max="1.0" step="0.01" value="0.5">
  </p>
  <br>
  <p>
    <button id="addSample">Add Sample</button>
    <p><span id="amountOfSamples">0</span> Sample Images</p>
  </p>

  <br/>
  <p><button id="train">Train</button><span id="loss"></span></p>
  <p>
    <button id="buttonPredict">Start predicting!</button>
    <button id="buttonStopPredict">Stop predicting!</button><br>
  </p>
  
  <button id="save">Save</button> 
  <label for="avatar">Load Model:</label>
  <input type="file" id="load" multiple/>
  <br>
  <script src="sketch.js"></script>
</body>

</html>

```

este software hoy en 2024 no funciona así tal cual, por esta línea

```html
<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js" type="text/javascript"></script>
```

esta línea descarga la versión más actualizada de ml5.js, pero este software es del 2020 cuando la biblioteca ml5.js estaba en sus versiones 0.x.x, ahora en 2024 está en 1.x.x.

para cambiar esto, reemplazamos esta línea, por esta

```html
<script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js"></script>
```

el otro cambio es que hicimos, es que aquí en Temuco estamos trabajando con celulares, y cuando corremos el código, no vemos la captura de video, entonces modificamos la línea de código que hace el video.

```javascript
image(video, 3 * width / 4, 3 * height / 4, width / 4, height / 4);
```

y la cambiamos por esta

```javascript
image(video, 0 * width / 4, 0 * height / 4, width / 4, height / 4);
```

para entrenar este algoritmo, usé imágenes, de mí, de mi botella, y de mi mano tapando la cámara.

![foto de mi](./capturaPantalla.jpg)

