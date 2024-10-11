# clase-01

# BITÁCORA Miercoles 09 de octubre del 2024.

## PRUEBA CON MOVIMIENTO CON CÁMARA DE UN CUERPO

https://editor.p5js.org/montoyamoraga/sketches/Fy6d1rew6


![Vídeo de prueba] (./Cony.mp4)


![Imagen de prueba] (./Reproductor multimedia 09-10-2024 11_04_03.png)

## CÓDIGO:
```
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
  video = createCapture(VIDEO, 640, 480);
  video.hide();
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  regressor = featureExtractor.regression(video, videoReady);
  setupButtons();
  rectMode(CENTER);
}

function draw() {
  image(images[currentImage], 0, 0, width, height);
  image(video, 0 * width / 4, 0 * height / 4, width / 4, height / 4);
  noStroke();
  fill(255, 0, 0, 100);
  currentImage = constrain(floor((1 - slider.value()) * nImages), 0, nImages - 1);
}

function modelReady() {
  select('#modelStatus').html('Model loaded!');
}

function videoReady() {
  select('#videoStatus').html('Video ready!');
}

function predict() {
  allowedToPredict = true;
  regressor.predict(gotResults);
}

function stopPredicting() {
  allowedToPredict = false;
}

function setupButtons() {
  slider = select('#slider');
  select('#addSample').mousePressed(function() {
    regressor.addImage(slider.value());
    select('#amountOfSamples').html(samples++);
  });

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

  select('#buttonPredict').mousePressed(predict);
  select('#buttonStopPredict').mousePressed(stopPredicting);

  saveBtn = select('#save');
  saveBtn.mousePressed(function() {
    regressor.save();
  });

  loadBtn = select('#load');
  loadBtn.changed(function() {
    regressor.load(loadBtn.elt.files, function() {
      select('#modelStatus').html('Custom Model Loaded!');
    });
  });
}

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

## Referentes visules vistos en clase:

* Gene Kogan <https://genekogan.com/>
* Andreas Refsgaard <https://www.andreasrefsgaard.dk/>
*

## Sitios de apoyo:

* https://teachablemachine.withgoogle.com/train?action=onboardOpen&id=DFBbSTvtpy4
* https://freesound.org/home/login/

# IDEA DE TRABAJO

TRABAJO EN CONJUNTO CON CATALINA CONCHA

Al pestañear frases caen de los ojos, como si literalmente el sujeto hablara con la mirada. Sería bueno si, al pestañear, las frases fueran diferentes según la expresión facial que tenga la persona.

v


Simplificar a algo más simple como que con solo pestañear caigan las palabras de un escrito especifico. Como referencia la obra de Andreas Refsgaard "Words from another mouth"
https://netlitteratur.dk/ordfraenandensmund/

links de pruebas o borradores:

* https://editor.p5js.org/ConstanzaPS111/sketches/CFKuYgswu





