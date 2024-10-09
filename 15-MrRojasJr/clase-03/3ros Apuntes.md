# clase-03

## Referentes

* Gene Kogan. Ingeniero en máquinas transformado en artista. <https://genekogan.com>
* Rafael Lozano-Hemmer. Artista, posee la visión de que la I.A. "solo debe ser utilizada por artistas" (La I.A. engrupe, no es exacta, pese a ser también proveniente de una computadora)
* Andreas Refsgaard. de su página se ve su portfolio. De sus obras está "ml4a", colección de textos que enseña "Machine learning for artists"<https://www.andreasrefsgaard.dk>
* School of Machines. Escuela de Berlín
* OpenFrameworks, lenguaje de programación para instalaciones visuales de "alta complejidad" pero potente.
* YoLo V2, modelo de detección de objetos.


## Código de "entrenamiento de red neuronal para regresión" - Generar cambios en una imagen en base a lo que ve - Proceso de actualizar código de Andreas Refsgaard en ml5.js 
Extraído de "Mr Beast regression" <https://ml5-fellowship-2020.github.io/examples/>

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

Pasamos a la versión HTML del código.
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

2024, el código no funciona y es debido a ésta línea (HTML):

```html
<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js" type="text/javascript"></script>
```

Si bien ésta línea descarga la versión más actualizada de ml5.js, este software es del 2020 cuando la biblioteca ml5.js estaba en sus versiones 0.x.x, ahora en 2024 está en 1.x.x.

para cambiar esto se reemplaza la línea anterior por la siguiente (En HTML):

```html
<script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js"></script>
```
El otro cambio que se hizo es que aquí en Temuco estamos trabajando con celulares, y cuando corremos el código, no vemos la captura de video. Entonces modificamos la línea de código que hace el video y modificamos su ubicación (En JavaSscript):

```javascript
image(video, 3 * width / 4, 3 * height / 4, width / 4, height / 4);
```

Y se modifica por ésta (Lo que hace es cambiar el ángulo de la cámara para que se ajuste mejor a la página):
```javascript
image(video, 0 * width / 4, 0 * height / 4, width / 4, height / 4);
```

[Captura demostración Código + aplicación](Captura1.png)


## Anotaciones

* GPU hacen calculos el triple de rápidos que una CPU. la 1ra es dedicada a aspectos gráficos. la CPU hoy en día fue la que se utiliza para la creación de la I.A.. Hoy en día se están haciendo las TPU, exclusivas para I.A., si la CPU trabaja 1 a 2 números a la vez, la GPU 3 a 4 y la TPU muchos más. Hablamos de tensores, que son conjuntos de datos.

* TensorFlow, extraído de

La idea es un identificador de emociones faciales, y que en base a eso se genere...
