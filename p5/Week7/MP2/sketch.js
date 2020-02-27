var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background('brown');
      textFont("Amatic SC", 60);
      text("THIS IS SNACKTON", 200, 300);



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



  break;


  case 1:
    background('green');
  text("he is a hungry monster", 200, 300);

  let P = color(255, 204, 0);
  fill(P);
  arc(330, 129, 180, 180, 1, radians(320), PIE); // pacman-hero


  P = color(255);
  fill(P);
  circle(300, 60, 16); // white of eye

  P = color(0);
  fill(P);
  circle(300, 60, 5); //black pupil

  P = color(255);
  fill(P);
  circle(295, 90, 25); // white of eye

  P = color(0)
  fill(P);
  circle(295, 90, 9); //black pupil

  P = color(255);
  fill(P);
  circle(380, 60, 30); // white of eye

  P = color(0)
  fill(P);
  circle(380, 60, 11); //black pupil

  P = color(255);
  fill(P);
  circle(330, 60, 20); // white of eye

  P = color(0)
  fill(P);
  circle(330, 60, 11); //black pupil

  P = color(255);
  fill(P);
  circle(333, 87, 30); // white of eye

  P = color(0)
  fill(P);
  circle(333, 87, 10); //black pupil

  P = color(255);
  fill(P);
  circle(350, 45, 25); // white of eye

  P = color(0)
  fill(P);
  circle(350, 45, 10); //black pupil


  break;

  case 2:
    background('red');
  text("so he ate   and   ate    and    ate", 200, 300);


    let d = color(255, 204, 0); // Define color 'c'
    fill(d);
    arc(330, 129, 180, 180, 1, radians(320), PIE); // pacman-hero


    d = color(255);
    fill(d);
    circle(300, 60, 16); // white of eye

    d = color(0);
    fill(d);
    circle(300, 60, 5); //black pupil

    d = color(255);
    fill(d);
    circle(295, 90, 25); // white of eye

    d = color(0)
    fill(d);
    circle(295, 90, 9); //black pupil

    d = color(255);
    fill(d);
    circle(380, 60, 30); // white of eye

    d = color(0)
    fill(d);
    circle(380, 60, 11); //black pupil

    d = color(255);
    fill(d);
    circle(330, 60, 20); // white of eye

    d = color(0)
    fill(d);
    circle(330, 60, 11); //black pupil

    d = color(255);
    fill(d);
    circle(333, 87, 30); // white of eye

    d = color(0)
    fill(d);
    circle(333, 87, 10); //black pupil

    d = color(255);
    fill(d);
    circle(350, 45, 25); // white of eye

    d = color(0)
    fill(d);
    circle(350, 45, 10); //black pupil


  break;

  case 3:
    background('blue');
  text("he ate so much THAT.....", 200, 300);



    let e = color(255, 204, 0); // Define color 'c'
    fill(e);
    arc(330, 129, 180, 180, 1, radians(320), PIE); // pacman-hero


    e = color(255);
    fill(e);
    circle(300, 60, 16); // white of eye

    e = color(0);
    fill(e);
    circle(300, 60, 5); //black pupil

    e = color(255);
    fill(e);
    circle(295, 90, 25); // white of eye

    e = color(0)
    fill(e);
    circle(295, 90, 9); //black pupil

    e = color(255);
    fill(e);
    circle(380, 60, 30); // white of eye

    e = color(0)
    fill(e);
    circle(380, 60, 11); //black pupil

    e = color(255);
    fill(e);
    circle(330, 60, 20); // white of eye

    e = color(0)
    fill(e);
    circle(330, 60, 11); //black pupil

    e = color(255);
    fill(e);
    circle(333, 87, 30); // white of eye

    e = color(0)
    fill(e);
    circle(333, 87, 10); //black pupil

    e = color(255);
    fill(e);
    circle(350, 45, 25); // white of eye

    e = color(0)
    fill(e);
    circle(350, 45, 10); //black pupil


  break;

  case 4:
    background('white');
  text("HE EXPLODED!!!!", 200, 300,100);



  break;

}

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 4) {
    myState = 0;
  }
}
