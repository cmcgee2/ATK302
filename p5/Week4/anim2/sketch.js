var x = 0;

function setup() {
  createCanvas(900, 900);
  // put setup code here
}

  function draw() {
    // put drawing code here
    background(200, 32, 123);
    push();
      ellipse(x, 100, 100, 100);
    translate(x, 0);
    pop();

    x = x + 10;

    if (x > width) {
      x = -200
    }


}
