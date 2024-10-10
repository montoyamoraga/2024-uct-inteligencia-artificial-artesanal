// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

// the link to your model provided by Teachable Machine export panel
const URL = "./my_model/";
let model, webcam, ctx, labelContainer, maxPredictions;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // Note: the pose library adds a tmPose object to your window (window.tmPose)
    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const size = 200;
    const flip = true; // whether to flip the webcam
    webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loopWebcam);

    // append/get elements to the DOM
    const canvas = document.getElementById("canvas");
    canvas.width = size; canvas.height = size;
    ctx = canvas.getContext("2d");
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loopWebcam(timestamp) {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loopWebcam);
}

let probabilidadCerca = 0.0;
let probabilidadSentado = 0.0;
let probabilidadCaminando = 0.0;

// logica de variables
let estaCerca = false;
let estaSentado = false;
let estaCaminando = false;

async function predict() {
    // Prediction #1: run input through posenet
    // estimatePose can take in an image, video or canvas html element
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    // Prediction 2: run input through teachable machine classification model
    const prediction = await model.predict(posenetOutput);

    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        if (prediction[i].className == "cerca") {
            probabilidadCerca = prediction[i].probability;
        }
        if (prediction[i].className == "sentadoReal") {
            probabilidadSentado = prediction[i].probability;
        }
        if (prediction[i].className == "caminandoo") {
            probabilidadCaminando = prediction[i].probability;
        }

        if (probabilidadCerca > 0.8) {
            estaCerca = true;
        }
        if (probabilidadCerca < 0.8) {
            estaCerca = false;
        }
        if (probabilidadSentado > 0.8) {
            estaSentado = true;
        }
        if (probabilidadSentado < 0.8) {
            estaSentado = false;
        }

        if (probabilidadCaminando > 0.8) {
            estaCaminando = true;
        }
        if (probabilidadCaminando < 0.8) {
            estaCaminando = false;
        }
      

        labelContainer.childNodes[i].innerHTML = classPrediction;
    }

    // finally draw the poses
    drawPose(pose);
}

function drawPose(pose) {
    if (webcam.canvas) {
        ctx.drawImage(webcam.canvas, 0, 0);
        // draw the keypoints and skeleton
        if (pose) {
            const minPartConfidence = 0.5;
            tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
            tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
        }
    }
}

// creditos codigo original de Jeff Thompson https://www.youtube.com/watch?v=exrH7tvt3f4

let video;
let listOfColors = ["#1c77c3", "#39a9db", "#40bcd8", "#f39237", "#d63230", "#540d6e", "#ee4266", "#ffd23f","#f3fcf0", "#19647E",];

let tasaDeReproduccion = 60;
// TODO: afinar este parametro
let parametroDiametro = 40.0;



function setup() {
  // createCanvas(1050, 750);
  // lienzo a la mitad del tamano original
  createCanvas(525, 375);
  frameRate(tasaDeReproduccion);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  grid = new CircleGrid();
}

function draw() {
  // pinta el fondo negro, valor 0
  // con 50 de transparencia
  background(0, 50);
  
  // muestra la grilla de circulitos
  if (estaCerca) {
    background(0, 255, 0);
  }
  else if (estaSentado) {
    background(0, 0, 255);
  }
  else if (estaCaminando) {
    grid.display();
  }
  else {
    background(255, 0, 0);
  }

 
}


class CircleClass {
  constructor(px, py, s) {
    this.positionX = px;
    this.positionY = py;
    this.size = s;
    this.c = listOfColors[int(random(0, listOfColors.length))];
  }

  display() {
    circle(this.positionX, this.positionY, this.size);
    
    if (this.size > 15) {
      noStroke();
      fill(this.c);
    } else {
      noFill();
      strokeWeight(1);
      stroke(this.c);
    }
  }
}

class CircleGrid {
  constructor() {
    this.gridSize = 30
    this.circles = [];

    for (let y = 0; y < video.height; y += this.gridSize) {
      let row = [];
      for (let x = 0; x < video.width; x += this.gridSize) {
        let index = (y * video.width + x) * 4;
        let r = video.pixels[index];
        let dia = map(r, 0, 255, this.gridSize, 2);
        row.push(
          new CircleClass(x + this.gridSize / 
                          2, y + this.gridSize / 2, dia)
        );
      }
      this.circles.push(row);
    }
  }

  display() {
    video.loadPixels();
    
    //change circle size depending on brightness of pixel
    for (let i = 0; i < this.circles.length; i++) {
      for (let j = 0; j < this.circles[0].length; j++) {
        let index = (i * this.gridSize * video.width + 
                     j * this.gridSize) * 4;
        let r = video.pixels[index];
        let dia = map(r, 0, 255, parametroDiametro, 0);
        this.circles[i][j].size = dia;
        this.circles[i][j].display();
      }
    }

     
