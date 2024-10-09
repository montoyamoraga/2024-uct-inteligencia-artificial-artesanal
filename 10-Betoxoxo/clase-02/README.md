# clase-02

## p5js cara y manos code

https://editor.p5js.org/Betoxoxo/sketches/74Ik4J1dv


## pagina

https://editor.p5js.org/Betoxoxo/full/74Ik4J1dv


Se utilizo la base de ml5 para detectar rostro y se le fue agregando los comandos para que detecte rostro y manos a la vez

``````` javascript

let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };
let handPose;
let hands = [];

function preload() {
  // Load the faceMesh model
  faceMesh = ml5.faceMesh(options);
  handPose = ml5.handPose()
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);
  handPose.detectStart(video, cuandoDetectoManos);
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Draw all the tracked face points
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    for (let j = 0; j < face.keypoints.length; j++) {
      let keypoint = face.keypoints[j];
      fill(200, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 5);
    }
  }
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      square(keypoint.x, keypoint.y, 10);
    }
  }
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}
function cuandoDetectoManos(results) {
  // save the output to the hands variable
  hands = results;

}

``````
