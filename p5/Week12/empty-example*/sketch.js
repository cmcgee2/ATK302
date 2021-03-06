  var cars = [];
  var frogPos;

  function setup() {
    createCanvas(800, 800);

    for (var i = 0; i < 20; i++) {
      cars.push(new Car());
    }

    frogPos = createVector(400, height - 100);
}

  function draw() {
    background('lightblue');

    for (var i = 0; i < cars.length; i++) {
      cars[i].display();
      cars[i].drive();
      if (cars[i].pos.dist(frogPos) < 50) {
        cars.splice(i, 0);
      }
    }
    // frog
    fill('green');
    ellipse(frogPos.x, frogPos.y, 50, 50);


  }
  checkForKeys();
  function checkForKeys() {
    if (keyisDown(LEFT_ARROW)) frogPos.x -= 5;
    if (keyisDown(RIGHT_ARROW)) frogPos.x += 5;
    if (keyisDown(UP_ARROW)) frogPos.y -= 5;
    if (keyisDown(DOWN_ARROW)) frogPos.y += 5;
  }

  function Car() {

    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    this.display = function() {
      fill(this.r, this.g, this.b)
      rect(this.pos.x, this.pos.y, 30, 30);
    }

    this.drive = function() {
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
  }
