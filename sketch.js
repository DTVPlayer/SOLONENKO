function setup() {
  createCanvas(600, 600);
}
function draw() {

  background(133, 157, 255);
  
  fill("black");
  stroke("white");
  strokeWeight(20);  
  circle(550, 50, 100);
  fill("purple");
  noStroke(1);
  circle(233, 25, 55);
  fill('black');
  stroke('black');
  triangle(400, 300, 300, 200, 400, 400);
  strokeWeight(1);  
  fill("grey");
  rect(0, 200, 600, 400);
  textSize(30);
  text("😂", 100, 200);
}
