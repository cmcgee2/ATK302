var myState = 0;
var timer = 40;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('brown');
  textFont("Amatic SC", 60);


  switch (myState) {
    case 0:
      timer++;
      if (timer >= 40) {
        timer = 0;
        myState = 1;
      }
      background('brown');
      text("What does a baby computer call his father?", 100, 200,40);
      //  click = 1;
      break;

    case 1:
      background('brown');
      text("DATA!!", 200, 400);
      //    click = 2;
      switch (myState) {
        case 0:
          timer++;
          if (timer > 200) {
            timer = 0;
            myState = 0;
          }
          break;

      }
  }
}
