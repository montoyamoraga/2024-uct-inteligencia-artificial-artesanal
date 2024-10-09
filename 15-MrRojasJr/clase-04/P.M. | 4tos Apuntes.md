## De camino al proyecto de Workshop

* 1ras ideas
  * Comité de belleza - Aesthetic. En base a las prendas de las personas, generar una "medida estandarizada" respecto de qué tan aesthetic o qué tan estétitca es 
aquella prenda.

  * Comité de desfile. En base a las poses de la persona, generar un "Puntaje" de "estilo de pose"/"modelaje" de la persona. Otra opción es que en vez de puntaje 
diga un tipo de "corriente" de estilo (físicocultismo, moda, dragg, ballet, militar, etc.)

  * Identificador de emociones faciales, y que en base a eso se genere deformaciones en el ambiente, ya sea color, forma. Pueden ser Alegría, Enojo y sorpresa y 
en base a aquello generar la reacción.

  * Identificador de emociones faciales que al detectar una emoción, refleje en el rostro de la persona la emoción contraria.

* Acortando las ideas pt. 1:

  * Identificador de bostezo. Dependiendo de qué tan grande y extenso sea el bostezo (apertura de la boca) se generen reacciones en el fondo. Puede ser: 
Temblor de cámara/pantalla.

  * Identificador de estiramiento  - Estirómetro. Dependiendo de qué tan grande y extenso sea el acto de estirar de la persona frente a la cámara, se van 
generando ruidos que simulen las crepitaciones óseas.
 
* Acortando las ideas pt. 2:
  * Generador de color y forma con voz. En base a las palabras/letras que se escuchen, se van generando elementos de colores y formas distintas que aparecen 
en la cámara y van desapareciendo de manera gradual. Una suerte de lienzo en blanco que se va creando en base a lo que uno dice.
  * Termostato de ruido. En base a la cantidad de ruido que el micrófono del dispositivo identifique, la pantalla se va llenando de formas o letras, quizá 
que transcriba el ruido y segun el ruido se genere cierta forma o letra en específico.

## Idea final

* Identificador de palabras ¿Puedes identificar cuales son las 10 palabras más frecuentes a nivel de facultad?.

Para eso entrenaremos una I.A. que, en base a las 10 palabras genere una "recompensa" visual o sonora a quién intente adivinar cualquiera de las 10 palabras ya predefinidas.


## Apuntes

Teachable Machine permite darte el código en .JavaScript y usarlo en ml5, pero éste viene con "errores", pues posee líneas de comando </script> que encierran lenguaje HTML. éste lenguaja HTML debería de ir en el índice de "index.html" y el resto corresponde a "sketch.js"

Para implantar dicho código en p5.js se realiza lo anterior y se hace la "modificación" enseñada previamente (Apuntes de clase-03 A.M. | 3ros Apuntes.md) para utilizar la versión anterior de ml5.

## Desarrollando el proyecto

Ya con la idea concretada, se usó Teachable Machine con su opción de captura de audio para generar muestras de audio de las 10 palabras a utilizar y ruido de fondo/ambiental.

Para las voces se utilizaron las voces de Wladimir y mías además de otras generadas por I.A., las de nosotros con distintos  tonos, acentos y expresiones para tener más opciones de pronunciación.

Una vez entrenado el modelo de Teachable Machine se extrajo su código en formato JavaScript y pj5.js

A continuación el código en JavaScript

```javascript
<div>Teachable Machine Audio Model</div>
<button type="button" onclick="init()">Start</button>
<div id="label-container"></div>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/speech-commands@0.4.0/dist/speech-commands.min.js"></script>

<script type="text/javascript">
    // more documentation available at
    // https://github.com/tensorflow/tfjs-models/tree/master/speech-commands

    // the link to your model provided by Teachable Machine export panel
    const URL = "./my_model/";

    async function createModel() {
        const checkpointURL = URL + "model.json"; // model topology
        const metadataURL = URL + "metadata.json"; // model metadata

        const recognizer = speechCommands.create(
            "BROWSER_FFT", // fourier transform type, not useful to change
            undefined, // speech commands vocabulary feature, not useful for your models
            checkpointURL,
            metadataURL);

        // check that model and metadata are loaded via HTTPS requests.
        await recognizer.ensureModelLoaded();

        return recognizer;
    }

    async function init() {
        const recognizer = await createModel();
        const classLabels = recognizer.wordLabels(); // get class labels
        const labelContainer = document.getElementById("label-container");
        for (let i = 0; i < classLabels.length; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }

        // listen() takes two arguments:
        // 1. A callback function that is invoked anytime a word is recognized.
        // 2. A configuration object with adjustable fields
        recognizer.listen(result => {
            const scores = result.scores; // probability of prediction for each class
            // render the probability scores per class
            for (let i = 0; i < classLabels.length; i++) {
                const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
                labelContainer.childNodes[i].innerHTML = classPrediction;
            }
        }, {
            includeSpectrogram: true, // in case listen should return result.spectrogram
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
        });

        // Stop the recognition in 5 seconds.
        // setTimeout(() => recognizer.stopListening(), 5000);
    }
</script>


```

y en p5.js

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

