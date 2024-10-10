// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

// the link to your model provided by Teachable Machine export panel
const URL = "./my_model/";
let model, webcam, ctx, labelContainer, maxPredictions;

// variables de clases
let numeroArriba;
let numeroAbajo;
let numeroIzquierda;
let numeroDerecha;


function paraArriba() {
  background(255, 0, 0);
  console.log("paraArriba");
}

function paraAbajo() {
  background(255, 255, 0);
  console.log("paraAbajo");
}

function paraIzquierda() {
  background(255, 0, 255);
  console.log("paraIzquierda");
}

function paraDerecha() {
  background(0, 255, 0);
  console.log("paraDerecha");
}


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
  const canvasWebcam = document.getElementById("canvasWebcam");
  canvasWebcam.width = size;
  canvasWebcam.height = size;
  ctx = canvasWebcam.getContext("2d");
  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < maxPredictions; i++) {
    // and class labels
    labelContainer.appendChild(document.createElement("div"));
  }
}

async function loopWebcam(timestamp) {
  webcam.update(); // update the webcam frame
  await predict();
  window.requestAnimationFrame(loopWebcam);
}

async function predict() {
  // Prediction #1: run input through posenet
  // estimatePose can take in an image, video or canvas html element
  const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
  // Prediction 2: run input through teachable machine classification model
  const prediction = await model.predict(posenetOutput);

  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction =
      prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      numeroArriba = prediction[0].probability.toFixed(2);
      numeroAbajo = prediction[1].probability.toFixed(2);
      numeroIzquierda = prediction[2].probability.toFixed(2);
      numeroDerecha = prediction[3].probability.toFixed(2);
    labelContainer.childNodes[i].innerHTML = classPrediction;

    if(numeroArriba > 0.5) {
      paraArriba();
    }
    else if (numeroAbajo > 0.5) {
      paraAbajo();
    }
    else if (numeroIzquierda > 0.5) {
      paraIzquierda();
    }
    else if (numeroDerecha > 0.5) {
      paraDerecha();
    }
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
function setup() {
  createCanvas(windowWidth, windowHeight);
  posicionX = 100;
  posicionY = 100;
  velocidad = 5;
  direccion = 5;
  anchoX = 50;
  anchoY = 50;
  
  console.log("ancho:  " + windowWidth)
  console.log("altura:  " + windowHeight)
}

function draw() {
  background(50, 100, 100);
  ellipse(posicionX, posicionY, anchoX, anchoY);
  
  posicionX = posicionX + direccion;
  //posicionY = posicionY + direccion;
  
  console.log(posicionX);
  
  // cuando llegue al final del lienzo hacer que vuelva a aparecer
  //if(posicionX > 373){
  //posicionX = 0;
    
  if (posicionX > width - anchoX/2) {
  direccion = -5;
  }
  else if (posicionX < 0 + anchoX/2) {
    direccion = 5
  }
  
  //console.log(posicionY);
  //if (posicionY > height - anchoY/2) {
   // direccion = -5;
  //}
    
  
}
