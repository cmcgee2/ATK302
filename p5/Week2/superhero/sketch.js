function setup() {
  createCanvas(720, 400);
  background(255);

}

function draw() {
  noStroke()

  background(195, 237, 247);
  from = color(255, 0, 3, 0.2 * 255);
  to = color(33, 0, 255, 0.2 * 255);
  c1 = lerpColor(from, to, 0.33);
  c2 = lerpColor(from, to, 0.66);
  for (let i = 0; i < 15; i++) {
    fill(from);
    circle(
      random(40, 202), random(height),
      random(-40, 120), random(height),
      random(40, 266), random(height)
    );


    fill(c2);

    circle(
      random(50, 760), random(height),
      random(50, 70), random(height),
      random(50, 760), random(height),
      random(50, 76), random(height));
  }
  frameRate(2);

  let c = color(255, 204, 0); // Define color 'c'
  fill(c);
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


  c = color(0);
  fill(c);
  rect(0, 300, 700, 155);
  //these are the buildings
  rect(30, 270, 55, 55); //building 1
  rect(300, 270, 55, 165); //building 3
  rect(400, 170, 125, 150); //building 4
  rect(90, 170, 95, 150); //building 2
  rect(550, 190, 100, 150); //bilding 5

  //these are the windows inside the buildings
  c = color(255);
  fill(c);
  square(100, 190, 19);
  square(130, 190, 19);
  square(160, 190, 19);
  square(100, 220, 19);
  square(130, 220, 19);
  square(160, 220, 19);
  square(100, 250, 19);
  square(160, 250, 19);
  rect(130, 250, 25, 50); // this is the door on building 2
  c = color(0);
  fill(c);
  circle(133, 275, 6); // this the door knob on building 2
}
