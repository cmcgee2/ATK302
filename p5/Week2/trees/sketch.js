function setup() {
  createCanvas(720, 400,);

}

function draw() {
  background(139, 181, 146);

  stroke(102);
  line(0, 156, 720, 156);

  fill(247, 245, 121);
  ellipse(630, 44, 92, 92);

  fill(96, 140, 86);
  triangle(30, 150, 58, 20, 80, 150);

    fill(102);
    rect(50, 150, 7, 23);

  fill(96, 140, 86);
  triangle(390, 204, 326, 30, 266, 204);
    fill(102);
    rect(326, 206, 7, 23);

  fill(96, 140, 86);
  triangle(457, 140, 495, 14, 535, 140);
    fill(102);
    rect(494, 140, 7, 23);

  fill(96, 140, 86);
  triangle(164, 280, 210, 94, 246, 280);

      fill(102);
      rect(203, 279, 7, 23);


fill(0);
  textSize(70);
  text(mouseX + ","+ mouseY, 300, 300);
}
