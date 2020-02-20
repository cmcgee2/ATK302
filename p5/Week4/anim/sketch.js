var x = 0;
function setup() {
  // put setup code here
  createCanvas(800 , 800);
}

function draw() {
  // put drawing code here
  background('blue');
  push();
  translate(x , 0);
  macpan();
  pop();

  x = x + 5;
  if (x > width){
    x = -200;
  }
}




function macpan() {
  arc(330, 129, 180, 180, 1, radians(320), PIE); // pacman-hero


  c = color(255);
  fill(c);
  circle(300, 60, 16); // white of eye

  c = color(0);
  fill(c);
  circle(300, 60, 5); //black pupil

  c = color(255);
  fill(c);
  circle(295, 90, 25); // white of eye

  c = color(0)
  fill(c);
  circle(295, 90, 9); //black pupil

  c = color(255);
  fill(c);
  circle(380, 60, 30); // white of eye

  c = color(0)
  fill(c);
  circle(380, 60, 11); //black pupil

  c = color(255);
  fill(c);
  circle(330, 60, 20); // white of eye

  c = color(0)
  fill(c);
  circle(330, 60, 11); //black pupil

  c = color(255);
  fill(c);
  circle(333, 87, 30); // white of eye

  c = color(0)
  fill(c);
  circle(333, 87, 10); //black pupil

  c = color(255);
  fill(c);
  circle(350, 45, 25); // white of eye

  c = color(0)
  fill(c);
  circle(350, 45, 10); //black pupil
}
