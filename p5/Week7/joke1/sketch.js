var click = 0;


function setup() {
  createCanvas(1400, 1000);


  // put setup code here
}

function draw() {
  // put drawing code here
  background('brown');
  textFont("Amatic SC", 60);
//  text("knock, knock.....", 400, 100);

  switch (click) {

    case 0:
      background('brown');
      text("knock, knock.....", 400, 100);
    //  click = 1;
      break;

    case 1:
      background('brown');
      text("who's there.....", 400, 100);
  //    click = 2;
      break;

    case 2:
      background('brown');
      text("banana....", 100, 100);
  //    click = 3;
      break;

    case 3:
      background('brown');
      text("banana who?", 100, 100);
  //    click = 4;
      break;

    case 4:
      background('brown');
      text("oops, I'd tell you but i gotta split", 100, 100);
  //    click = 0;
      break;


  }
}

function mouseReleased() {
  click = click + 1;
  if (click > 4) {
    click = 0;
  }
}
