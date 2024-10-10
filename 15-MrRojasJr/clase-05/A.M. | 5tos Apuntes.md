## De cabeza al proyecto de Workshop

1. Se entrenó al Teachable Machine con 20 muestras de voz de las 10 palabras escogidas, 10 de Manuel y 10 de Wladimir además de muestras de "sonido ambiental"/"ruido de fondo".
2. Se archivó la database del modelo de detección de voz a <https://drive.google.com/drive/folders/1Z90fIn10uSFln-Rqe0ag_P77J_ZiGo9A> y se extrajo el código en p5.js (que es el que vamos a utilizar)

El proyecto será llamado "FAADmily Feud" que es una parodia al programa estado unidense de televisión Family Feud con Steve Harvey como presentador icónico (o que desde 2021 Chile adoptó en su propio formato llamado Qué dice Chile) en donde quienes se encuentren con el proyecto competirán por adivinar "¿Cuales son las diez palabras más usadas en la FAAD?". A cada palabra se le atribuirá un emoji, el cual "lloverá" sobre la pantalla una vez sea correctamente nombrada. Las palabras serán:

 - Croquis | 📝  📝 📝
 - Color | 🎨 🎨 🎨
 - Forma | 💠 💠 💠
 - Taller | 🗑️ 🗑️ 🗑️
 - Expresión | 🤸‍♀️  🤸‍♀️ 🤸‍♀️
 - Bitácora | 📔 📔 📔
 - Entrega | ⚒️ ⚒️⚒️
 - Concepto | 🖌️  🖌️ 🖌️
 - Trasnoche | 💤 💤 💤
 - Desvelo | 😴 😴 😴

Dentro de lo que son las líneas de código y todo lo que es programación, evitamos el uso de tildes o virguililla (lo que posee la ñ). Esto ya que los lenguaje de programación trabajan en conjunto en lenguaje Inglés. Además el uso de mayúsculas también serán para casos muy concretos, pues la mayúscula significa una separación de una orden a la de otra (incluso si estamos hablando de una misma palabra o conjunto de palabras), los espacios también se deben limitar a escribirUnMismoTextoJunto en donde las mayúsculas crean una separación que funciona como "espacio" (solo aplica para casos como el anteriormente expuesto)

3. A continuación, el código en formato p5.js

   ```javascript
<div>Teachable Machine Audio Model - p5.js and ml5.js</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
<script type="text/javascript">
  // Global variable to store the classifier
let classifier;

// Label
let label = 'listening...';

// Teachable Machine model URL:
let soundModel = './my_model/';


function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
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
</script>
   ```


