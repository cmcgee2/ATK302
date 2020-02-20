var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('white');

push();
  translate(y , 0);


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
  pop();
 ;
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
