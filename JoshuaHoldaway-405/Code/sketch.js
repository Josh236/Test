

//Setup of variables

let a = 0;
let posX;
let posY;

let r;
let g;
let b;
let size
let angle;

function setup(){
  createCanvas(594, 841);
  posX = random(-width/2, width/2);
  posY = random(-width/2, width/2);
  angle = random(0.01, 0.1);
  r = random(255);
  g = random(255);
  b = random(255);
  size = random(10, 70);
  //frameRate(5);
}

function draw(){
  //background(160);
  //circleMotion(posX, posY, a);

  //var
  //var x1 = random(15,60);
  //var sizey = ra

  //Accumulate an additional amount to the angle
  angle += 0.1;


  //Get the sin and cos value from the angle
  let sinValueX = sin(angle);
  let sinValueY = cos(angle);

  //Map the sin and cos output range from -1,1 to position values
  let x = map(sinValueX, -1, 1, 1, width-50);
  let y = map(sinValueY, -1, 1, 0, width-50);

  //let x1 = map(sinValueX, -1, 2, 0, width-50);
  //let y1 = map(sinValueY, -2, 1, 0, width-50);


  if (sinValueX>=0.9999){
    posX = random(-width/2, width/2);
    posY = random(-width/2, width/2);
    r = random(255);
    g = random(255);
    b = random(255);
    size = random(200);
  }
//drawing of ellipse
  noStroke();
  fill(r,g,b);
  ellipse(x + posX, y + posY, size, size);
//ellipse(25+x1, 25+y1, size, size);

}
