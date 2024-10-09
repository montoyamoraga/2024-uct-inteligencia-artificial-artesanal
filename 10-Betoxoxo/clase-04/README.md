# clase-04

# Inicio de proyecto junto a @LucasSandoval21 

Idea general, grafica que representa y/o cambia dependiendo de lo que se le muestre en camara

 ## pagina p5js

 https://editor.p5js.org/Betoxoxo/sketches/gT00fgM-L

 ## codigo
 ``````````javascript

cnv = [];

function setup() {
  cnvSize = min(windowWidth, windowHeight);
  createCanvas(cnvSize, cnvSize);
  colorMode(HSB, 360, 100, 100);
  startColor = random(360);
  count = 0;
  s = random(80, 100);
  b = random(80, 100);
  blocks = new Group();
  blocks.visible = false;
  walls = new Group();
  walls.collider = "static";
  boundary = new walls.Sprite(width / 2, height, width, 2);
  boundary = new walls.Sprite(0, height / 2, 2, height);
  boundary = new walls.Sprite(width, height / 2, 2, height);
  //comment scenes in and out
  scene1(); //falling blocks
  //scene2(); //spinning blocks
}

function replaceSprite(){
  cnv[count] = createGraphics(wid,hgt);
  cnv[count].rectMode(CENTER);
  cnv[count].colorMode(HSB,360,100,100);
  getColor();
  cnv[count].fill(h,s,b);
  if (shapeType<1){
  cnv[count].rect(wid/2,hgt/2,wid,hgt);
  } else if (shapeType<2){
  cnv[count].circle(wid/2,wid/2,wid);
  }
  cnv[count].canvas.getContext("2d").clip();
  patterns();
  count++;
}

function draw() {
  background(150);
  for(z=0;z<blocks.length;z++){
    push();
    translate(blocks[z].x,blocks[z].y);
    rotate(blocks[z].rotation);
    image(cnv[z],-blocks[z].w/2,-blocks[z].h/2);
    pop();
  }
}

function getColor() {
  range = 120;
  h = startColor + (floor(random(5)) * range) / 5;
  if (h > 360) {
    h -= 360;
  }
}

function scene2() {
  //spinning blocks
  boundary = new walls.Sprite(width / 2, 0, width, 2);
  wid = width *0.035;
  hgt = wid *1.7;
  shapeType = 0.5;
  for (i = 0; i < 20; i++) {
    sprite = new blocks.Sprite(
      random(width * 0.3, width * 0.7),
      random(height * 0.3, height * 0.7),
      wid,
    hgt
    );
    if (random(2) < 1) {
      dir = 1;
    } else {
      dir = -1;
    }
    sprite.rotationSpeed = 15 * dir;
    getColor();
    sprite.color = color(h, s, b);
    replaceSprite();
  }
}

function scene1() {
  //falling blocks
  world.gravity.y = 8;
  wid = width *0.035;
  hgt = wid *1.7;
  shapeType = 0.5;
  for (i = 0; i < 100; i++) {
    sprite = new blocks.Sprite(
      random(width * 1.4, width * 0.3),
      random(-height * 5.5, height * 0.2),
      wid,hgt
    );
    getColor();
    sprite.color = color(h, s, b);
        replaceSprite();
  }
  boundary = new walls.Sprite(width * 0.80, height * 0.3, width * 0.45, 10);
  boundary.rotation = -30;
  getColor();
  boundary.color = color(h, s, b);
  
  boundary = new walls.Sprite(width * 0.20, height * 0.3, width * 0.45, 10);
  boundary.rotation = 30;
  getColor();
  boundary.color = color(h, s, b);
  
  boundary = new walls.Sprite(width * 0.60, height * 0.7, width * 0.45, 10);
  boundary.rotation = -45;
  getColor();
  boundary.color = color(h, s, b);
}

let dotSpace, intSpace, dotSize, dotDetail, alfvary9;

function patterns() {
  diam = wid;
  pType = random(3);
  midSize = (cnv[count].width + cnv[count].height) / 2;
  maxSize = max(cnv[count].width, cnv[count].height);

  cnv[count].push();
  cnv[count].translate(cnv[count].width / 2, cnv[count].height / 2);
  cnv[count].rotate(random(PI));
  cnv[count].strokeWeight(1);
  dotSpace = round(width * random(0.05, 0.09));
  intSpace = round(width * random(0.005, 0.09));
  dotSize = round(width * random(0.0125, 0.018));
  dotDetail = round(random(4));
  size = ((width * random(0.4, 0.55)) / 1000) * midSize;
  if (pType < 1) {
    petals();
  } else if (pType < 2) {
    diamonds();
  } else if (pType < 3) {
    simpleCircle();  
  }
  cnv[count].pop();
}

function simpleCircle(){
  getColor();
  cnv[count].fill(h,s,b);
  cnv[count].circle(0,0, midSize*0.5);
}

function petals() {
  cnv[count].noStroke();

  getColor();
  cnv[count].fill(h, s, b - 60);

  intSpace2 = intSpace * 0.7;
  dotSize2 = dotSize * 0.7;
  dotSpace2 = dotSpace * 0.7;
  for (x9 = -maxSize * 0.61; x9 < maxSize * 0.61; x9 += dotSpace2) {
    for (y9 = -maxSize * 0.61; y9 < maxSize * 0.61; y9 += dotSpace2) {
      for (i9 = 0; i9 < 8; i9++) {
        cnv[count].push();
        cnv[count].translate(x9, y9);
        cnv[count].rotate(i9 * PI * 0.25);
        cnv[count].beginShape();
        cnv[count].curveVertex(intSpace2 + dotSize2, 0);
        cnv[count].curveVertex(intSpace2 + dotSize2, 0);
        cnv[count].curveVertex(intSpace2 + dotSize2 * 0.25, -dotSize2 * 0.25);
        cnv[count].curveVertex(intSpace2, 0);
        cnv[count].curveVertex(intSpace2 + dotSize2 * 0.25, +dotSize2 * 0.25);
        cnv[count].curveVertex(intSpace2 + dotSize2, 0);
        cnv[count].curveVertex(intSpace2 + dotSize2, 0);
        cnv[count].endShape();
        cnv[count].pop();
      }
    }
  }
  if (-maxSize * 0.61 + dotSpace2 * 0.5 < maxSize * 0.61) {
    for (
      x9 = -maxSize * 0.61 + dotSpace2 * 0.5;
      x9 < maxSize * 0.61;
      x9 += dotSpace2
    ) {
      for (
        y9 = -maxSize * 0.61 + dotSpace2 * 0.5;
        y9 < maxSize * 0.61;
        y9 += dotSpace2
      ) {
        for (i9 = 0; i9 < 8; i9++) {
          cnv[count].push();
          cnv[count].translate(x9, y9);
          cnv[count].rotate(i9 * PI * 0.25);
          cnv[count].beginShape();
          cnv[count].curveVertex(intSpace2 + dotSize2, 0);
          cnv[count].curveVertex(intSpace2 + dotSize2, 0);
          cnv[count].curveVertex(intSpace2 + dotSize2 * 0.25, -dotSize2 * 0.25);
          cnv[count].curveVertex(intSpace2, 0);
          cnv[count].curveVertex(intSpace2 + dotSize2 * 0.25, +dotSize2 * 0.25);
          cnv[count].curveVertex(intSpace2 + dotSize2, 0);
          cnv[count].curveVertex(intSpace2 + dotSize2, 0);
          cnv[count].endShape();
          cnv[count].pop();
        }
      }
    }
  }
}

function diamonds() {
  cnv[count].noStroke();
  dotSpace = dotSpace - width * 0.02;

  getColor();
  cnv[count].fill(h, s, b - 50);
  tri1 = width * random(0.025, 0.035);
  tri2 = width * random(0.0025, 0.0035);
  tri3 = width * random(0.008, 0.012);
  for (x9 = -maxSize * 0.61; x9 < maxSize * 0.61; x9 += dotSpace) {
    for (y9 = -maxSize * 0.61; y9 < maxSize * 0.61; y9 += dotSpace) {
      cnv[count].triangle(
        x9,
        y9 - tri1,
        x9 - tri2,
        y9 - tri3,
        x9 + tri2,
        y9 - tri3
      );
      cnv[count].triangle(
        x9,
        y9 + tri1,
        x9 - tri2,
        y9 + tri3,
        x9 + tri2,
        y9 + tri3
      );
      cnv[count].triangle(
        x9 - tri1,
        y9,
        x9 - tri3,
        y9 - tri2,
        x9 - tri3,
        y9 + tri2
      );
      cnv[count].triangle(
        x9 + tri1,
        y9,
        x9 + tri3,
        y9 - tri2,
        x9 + tri3,
        y9 + tri2
      );
    }
  }
  for (
    x9 = -maxSize * 0.61 + dotSpace / 2;
    x9 < maxSize * 0.61;
    x9 += dotSpace
  ) {
    for (
      y9 = -maxSize * 0.61 + dotSpace / 2;
      y9 < maxSize * 0.61;
      y9 += dotSpace
    ) {
      cnv[count].triangle(
        x9,
        y9 - tri1,
        x9 - tri2,
        y9 - tri3,
        x9 + tri2,
        y9 - tri3
      );
      cnv[count].triangle(
        x9,
        y9 + tri1,
        x9 - tri2,
        y9 + tri3,
        x9 + tri2,
        y9 + tri3
      );
      cnv[count].triangle(
        x9 - tri1,
        y9,
        x9 - tri3,
        y9 - tri2,
        x9 - tri3,
        y9 + tri2
      );
      cnv[count].triangle(
        x9 + tri1,
        y9,
        x9 + tri3,
        y9 - tri2,
        x9 + tri3,
        y9 + tri2
      );
    }
  }
}

``````````
