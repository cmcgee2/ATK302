var myState = 0;
var timer = 5;

function setup() {
  // put setup code here
  createCanvas(1600, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  background('blue');
}

function draw() {
  // put drawing code here

  fill('black');
  rect(width / 2, height / 2, 150, 400);

  switch(myState) {
  case 0:
  timer++;
  if(timer > 200){
  timer = 0;
  myState = 1;
}
    fill('red');
    ellipse(width/2,height/2-110, 100, 100);
    break;
  case 1:
  timer++;
  if(timer > 200){
  timer = 0;
  myState = 2;
}
    fill('yellow');
    ellipse(width/2,height/2, 100, 100);
    break;
  case 2:
  timer++;
  if(timer > 200){
  timer = 0;
  myState = 0;
}
    fill('green');
    ellipse(width/2,height/2+110,100,100);
    break;




  }
}
