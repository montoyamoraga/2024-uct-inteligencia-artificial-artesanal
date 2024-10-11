# clase-07
let video;
let button1, button2, button3, button4, button5, button6;
let showText1 = false;
let showText2 = false;
let showText3 = false;
let showText4 = false;
let showText5 = false;
let showText6 = false; // Variable para controlar la visibilidad del texto

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = "./my_model/";

// To store the classification
let label = "";
let confidence = 0;

let constraints = {
  video: {
    facingMode: "environment",
  },
  audio: false,
};

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Crear un lienzo que ocupa toda la pantalla

  button1 = createButton("Acertijo1"); // Crear el botón
  button1.position(width / 5 - 60, height / 10 - 20); // Posición del botón
  button1.mousePressed(toggleText1); // Asignar la función al presionar el botón

  button2 = createButton("Acertijo2"); // Crear el botón
  button2.position(width / 2 - 60, height / 10 - 20); // Posición del botón
  button2.mousePressed(toggleText2); // Asignar la función al presionar el botón

  button3 = createButton("Acertijo3"); // Crear el botón
  button3.position(width / 5 - 60, height / 6 - 20); // Posición del botón
  button3.mousePressed(toggleText3); // Asignar la función al presionar el botón

  button4 = createButton("Acertijo4"); // Crear el botón
  button4.position(width / 2 - 60, height / 6 - 20); // Posición del botón
  button4.mousePressed(toggleText4); // Asignar la función al presionar el botón

  button5 = createButton("Acertijo5"); // Crear el botón
  button5.position(width / 5 - 60, height / 4.2 - 20); // Posición del botón
  button5.mousePressed(toggleText5); // Asignar la función al presionar el botón

  button6 = createButton("Acertijo6"); // Crear el botón
  button6.position(width / 2 - 60, height / 4.2 - 20); // Posición del botón
  button6.mousePressed(toggleText6); // Asignar la función al presionar el botón

  video = createCapture(constraints);
  video.size(108, 196);
  video.hide();

  classifyVideo();
}

function draw() {
  background(44, 165, 250); // Fondo azul

  image(video, width - video.width - 20, 20); // Espacio de 20 píxeles del borde

  if (showText1) {
    // Si showText es verdadero, dibuja el texto
    fill(255); // Color del texto
    textSize(10); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text(
      "En la entrada del campus, un refugio se asoma,\n" +
        "donde la luz y la sombra en silencio se toman,\n" +
        "un santuario de paz, que eleva el alma.\n" +
        " \n" +
        "En su trasera, orificios que dan al cielo,\n" +
        "ventanas susurrantes, llenas de anhelo,\n" +
        "un juego de luces que danza en su piel,\n" +
        "cada rayo de sol, un mensaje de fe.\n" +
        " \n" +
        "Allí, donde se unen el tiempo y el espacio,\n" +
        "los corazones se encuentran, dejando su lazo,\n" +
        "un lugar de reflexión, de encuentros divinos,\n" +
        "donde los sueños florecen en caminos genuinos.",
      width / 3,
      height / 4 + 40
    );
  }
  if (showText2) {
    // Si showText es verdadero, dibuja el texto
    fill(255); // Color del texto
    textSize(10); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text(
      "En un rincón donde el viento susurra,\n" +
        "entre altos muros, su paz se asegura,\n" +
        "una figura de gracia y ternura,\n" +
        "que a las aguas nunca mira, su postura.\n" +
        " \n" +
        "En el centro del campo, rodeada de prisa,\n" +
        "busca la madre, sin más improvisa,\n" +
        "de espaldas al lago, su amor te da vida,\n" +
        "en medio del caos, su luz es tu guía.\n" +
        " \n" +
        "Camina despacio, con fe y sin miedo\n" +
        "y hallarás la estatua, tu fiel, tu credo.\n" +
        "Escucha el silencio, y deja que hable,\n" +
        "pues su abrazo eterno, siempre te abraze.",
      width / 3,
      height / 4 + 40
    );
  }

  if (showText3) {
    fill(255); // Color del texto
    textSize(10); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text(
      "Busca el punto dorado, donde el cielo se rinde,\n" +
        "y el agua se hace espejo, donde el misterio anide.\n" +
        "No mires solo adelante, el pasado te guiará,\n" +
        "en un giro sutil, lo que anhelas hallarás.\n" +
        " \n" +
        "Un susurro de tierra,\n" +
        "sus árboles murmuran historias del viento,\n" +
        "mientras las aves tejen cantos en el tiempo,\n" +
        "un refugio de calma, un rincón de ensueño,\n" +
        "donde el alma se baña en su propio diseño.",
      width / 3,
      height / 4 + 40
    );
  }

  if (showText4) {
    fill(255); // Color del texto
    textSize(10); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text(
      "Entre sombras de árboles y susurros de agua,\n" +
        "una plataforma se asoma, escondida en su danza,\n" +
        "de madera oscura, como secretos guardados,\n" +
        "teje caminos de rampa y escaleras soñadas.\n" +
        " \n" +
        "Un laberinto pequeño, un refugio del viento,\n" +
        "donde la luz se filtra, pintando el momento,\n" +
        "cada escalón, un suspiro, cada giro, un hallazgo,\n" +
        "un rincón de calma, un rincón de abrazo.\n" +
        " \n" +
        "Frente a la laguna, espejo de cielos,\n" +
        "las olas murmuran cuentos de anhelos,\n" +
        "y desde su altura, la vista se despliega,\n" +
        "un vasto horizonte donde el alma se entrega.\n" +
        " \n" +
        "Aquí, en este refugio, la naturaleza canta,\n" +
        "el tiempo se detiene, la vida se levanta,\n" +
        "un pequeño paraíso, un rincón escondido,\n" +
        "donde el corazón encuentra su sentido.",
      width / 3,
      height / 4 + 40
    );
  }

  if (showText5) {
    fill(255); // Color del texto
    textSize(10); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text(
      "Las paredes de barro, suaves como la tierra,\n" +
        "guardan ecos de ancestros, susurros de viento,\n" +
        "mientras el sol, dorado, acaricia su tejado,\n" +
        "y las sombras juegan, danzando en el momento.\n" +
        " \n" +
        "Aislada, apartada, entre edificios y sueños,\n" +
        "esta se erige, un refugio del pasado,\n" +
        "un canto a la memoria, a la raíz y la vida,\n" +
        "un recordatorio suave de lo que ha perdurado.\n" +
        " \n" +
        "Aquí, en su soledad, florece la historia,\n" +
        "un rincón de la tierra, un latido profundo,\n" +
        "donde la cultura vive, entre el saber y el fuego,\n" +
        "y la esencia mapuche se entrelaza en el mundo.",
      width / 3,
      height / 4 + 40
    );
  }

  if (showText6) {
    fill(255); // Color del texto
    textSize(10); // Tamaño del texto
    textAlign(CENTER); // Alinear el texto al centro

    // Texto en versos
    text(
      "En el susurro del viento universitario,\n" +
        "donde el sol dibuja sombras en la tierra,\n" +
        "busca un rincón de cuerpos en movimiento,\n" +
        "entre risas, gritos y el eco del juego.\n" +
        " \n" +
        "Más allá del estacionamiento,\n" +
        "donde el ruido se disipa en la calma,\n" +
        "una pista espera, con brazos de acero,\n" +
        "un refugio de fuerza, donde el cuerpo se eleva.",
      width / 3,
      height / 4 + 40
    );
  }
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.classify(video, gotResult);
}

function toggleText1() {
  showText1 = !showText1; // Cambia la visibilidad del texto 1
  showText2 = false;
  showText3 = false;
  showText4 = false;
  showText5 = false;
  showText6 = false; // Oculta el texto 2 si el 1 se muestra
}

function toggleText2() {
  showText2 = !showText2; // Cambia la visibilidad del texto 2
  showText1 = false;
  showText3 = false;
  showText4 = false;
  showText5 = false;
  showText6 = false; // Oculta el texto 1 si el 2 se muestra
}

function toggleText3() {
  showText3 = !showText3; // Cambia la visibilidad del texto 3
  showText2 = false;
  showText1 = false;
  showText4 = false;
  showText5 = false;
  showText6 = false;
}

function toggleText4() {
  showText4 = !showText4;
  showText1 = false;
  showText2 = false;
  showText3 = false;
  showText5 = false;
  showText6 = false;
}

function toggleText5() {
  showText5 = !showText5;
  showText1 = false;
  showText2 = false;
  showText3 = false;
  showText4 = false;
  showText6 = false;
}

function toggleText6() {
  showText6 = !showText6; // Cambia la visibilidad del texto 1
  showText2 = false;
  showText3 = false;
  showText4 = false;
  showText5 = false;
  showText1 = false; // Oculta el texto 2 si el 1 se muestra
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
  confidence = results[0].confidence; // Guardar la confianza

  // Verificar cada acertijo y ocultar el botón correspondiente
  if (confidence >= 0.999) {
    switch (label) {
      case "capilla":
        button1.hide();
        break;
      case "virgen":
        button2.hide();
        break;
      case "isla":
        button3.hide();
        break;
      case "mirador":
        button4.hide();
        break;
      case "ruka":
        button5.hide();
        break;
      case "calistenia":
        button6.hide();
        break;
    }
  }
  
  // Classifiy again!
  classifyVideo();
  console.log(label);
}
![foto de mi](./imaged41.png)
![foto de mi](./imaged410.png)
![foto de mi](./imaged42.png)
![foto de mi](./imaged43.png)
![foto de mi](./imaged44.png)
![foto de mi](./imaged45.png)
![foto de mi](./imaged46.png)
![foto de mi](./imaged47.png)
![foto de mi](./imaged48.png)
![foto de mi](./imaged49.png)
![PXL_20241011_141911521](https://github.com/user-attachments/assets/ae64bf65-c428-4a81-bded-5e722fb4c8a2)
![PXL_20241011_141914905](https://github.com/user-attachments/assets/c7cc3c63-b945-4227-9070-c955acf73df7)
![PXL_20241011_141921271](https://github.com/user-attachments/assets/c1a57eea-0169-44e2-9645-1476979bd890)
![PXL_20241011_141925841](https://github.com/user-attachments/assets/2fd564da-267b-4b72-9f5f-a8eb4bc1f509)
![PXL_20241011_141955574](https://github.com/user-attachments/assets/91661c6d-941c-4255-aa83-80fc8176e009)
![PXL_20241011_141957573](https://github.com/user-attachments/assets/51c6c5ef-f68a-4756-a4c4-87440f95908d)
![PXL_20241011_142002362](https://github.com/user-attachments/assets/974af454-928d-4dc6-89f2-36e2358f9c32)
![PXL_20241011_141952380](https://github.com/user-attachments/assets/fc2b8aac-179f-42e1-b928-725576ee9bcd)
![PXL_20241011_142005382](https://github.com/user-attachments/assets/bafc18fa-c549-4bd8-8170-80228e51664f)
