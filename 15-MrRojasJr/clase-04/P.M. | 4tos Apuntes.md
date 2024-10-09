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

