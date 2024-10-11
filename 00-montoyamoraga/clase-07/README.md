# clase-07

viernes 07 octubre 2024

09am-12pm

entregas

estudiantes:

- @VicLBelD
- @Krishna-burgos
- @unagatuna
- @Catalina555yul
- @Pablo123-alt
- @pazdurann
- @ruhenschutze
- @Andyxxxxxx
- @Betoxoxo
- @ConstanzaPS111
- @MrRojasJr
- @WLADY12
- @LucasSandoval21

## grupo-01

### integrantes

- @unagatuna
- @Andyxxxxxx

### tecnologías usadas

- ml5.js
- p5.js
- Teachable Machine

### entradas y salidas de la obra

la entrada es la webcam de un laptop, que alimenta a un algoritmo que detecta poses.

nuestro algoritmo detecta 3 poses:

- sentado
- cerca
- caminando

cuando cada una de las poses es detectada, la salida de la obra es mostrar una visual 2D interactiva distinta hecha con p5.js por otros artistas, citada en la bibliografía.

## grupo-02

- @VicLBelD

## grupo-03

integrantes:

- @ruhenschutze
- @Pablo123-alt

tecnologías usadas:

- ml5.js
- p5.js
- Teachable Machine
- ChatGPT

entradas y salidas de la obra:

la entrada es la webcam de un teléfono móvil, que alimenta a un algoritmo que detecta imágenes.

este algoritmo fue entrenada con alrededor de 100 imágenes distintas, por cada una de las 6 categorías que identifica:

- calistenia
- virgen
- capilla
- isla
- ruca
- mirador

el usuario se le presenta una interfaz con botones, cada uno de los botones te da un acertijo textual, y te invita a descifrarlo para que apuntes la cámara en el campus de UCT, y encuentres ese lugar.

### registro

### bibliografía

- ChatGPT fue usado para la generación de acertijos y códigos de HTML que programamos.

## grupo-04

integrantes:

- @Catalina555yul
- @ConstanzaPS111

tecnologías usadas:

- ml5.js
- p5.js
- Teachable Machine

entradas y salidas de la obra:

la entrada es la webcam de un computador, que alimenta a un algoritmo que detecta imágenes.

este algoritmo fue entrenada para reconocer 3 categorías, cada una alimentada por una base de datos que hicimos de 120 imágenes. las categorías son:

- cara
- puño
- palma

el usuario se sienta frente al computador, y cuando detecta la categoría puño, hay un texto superpuesto en la webcam que itera sobre una lista de presagios que escribimos.

si el algoritmo detecta la palma, se selecciona una de los presagios.

cuando el algoritmo detecta tu rostro, el texto cae y desaparece de la pantalla.

registro del montaje:

bibliografía:

- textos presagios fueron de factura propia

## grupo-05

nombre del proyecto:

FAADmily Says

integrantes:

- @MrRojasJr
- @WLADY12

tecnologías usadas:

- ml5.js
- p5.js
- Teachable Machine

entradas y salidas de la obra:

la entrada es el micrófono de un computador, que alimenta a un algoritmo de reconocimiento de audio, que fue entrenado con Teachable Machine.

el algoritmo detecta 10 categorías y ruido de fondo:

- ruido de fondo
- croquis
- color
- forma
- taller
- expresión
- bitácora
- entrega
- concepto
- trasnoche
- desvelo

la base de datos la hicimos con 20 muestras de audio por cada una de las categorías.

este modelo lo exportamos y lo integramos a una app hecha con p5.js y ml5.js.

el algoritmo siempre está escuchando la entrada de audio, y clasificando, y cuando detecta una de las categorías, te celebra tu logro de haber encontrado una de las palabras.

registro del montaje:

bibliografía:

- inspirado por el programa Family Feud.
