function setup() {
  createCanvas(windowWidth, windowHeight);
  background(253, 251, 212);
//Horizontal rectangles across entire window
  // Horizontal rectangle 1
    push();
    fill(160, 236, 208, 200);
    stroke(160, 236, 208, 200);
    rect(0, 0, windowWidth,100);
    pop();
  // Horizontal rectangle 2
    push();
    fill(148, 221, 188,200);
    stroke(148, 221, 188, 200);
    rect(0, 120, windowWidth,100);
    pop();
  // Horizontal rectangle 3
    push();
    fill(136, 187, 146, 200);
    stroke(136, 187, 146, 200);
    rect(0, 240, windowWidth,100);
    pop();
  // Horizontal rectangle 4
    push();
    fill(123, 136, 107, 200);
    stroke(123, 136, 107, 200);
    rect(0, 360, windowWidth,100);
    pop();
  //Horizontal rectangle 5
    push();
    fill(113, 73, 85, 200);
    stroke(113, 73, 85, 200);
    rect(0, 480, windowWidth,100);
    pop();
  // Horizontal rectangle 6
    push();
    fill(123, 136, 107, 200);
    stroke(123, 136, 107, 200);
    rect(0, 600, windowWidth,100);
    pop();
  //Horizontal rectangle 7
  push();
  fill(136, 187, 146, 200);
  stroke(136, 187, 146, 200);
  rect(0, 720, windowWidth,100);
  pop();
  //Horizontal rectangle 8
  push();
  fill(148, 221, 188, 200);
  stroke(148, 221, 188, 200);
  rect(0, 840, windowWidth,100);
  pop();
//Vertical rectangles from top left  
  //Vertical rectangle 1
    push();
    fill(160, 236, 208, 200);
    stroke(160, 236, 208, 200);
    rect(0, 0, 100,windowHeight);
    pop();
  //Vertical rectangle 2
    push();
    rotate(6.1)
    fill(148, 221, 188,200);
    stroke(148, 221, 188,200);
    rect(50, 0, 100,windowHeight*2);
    pop();
  // Vertical rectangle 3
    push();
    rotate(5.9)
    fill(136, 187, 146, 200);
    stroke(136, 187, 146, 200);
    rect(100, 0, 100,windowHeight*2);
    pop();
  // Vertical rectangle 4
    push();
    rotate(5.7)
    fill(123, 136, 107, 200);
    stroke(123, 136, 107, 200);
    rect(150, 0, 100,windowHeight*2);
    pop();
  //Vertical rectangle 5
    push();
    rotate(5.5)
    fill(113, 73, 85, 200);
    stroke(113, 73, 85,200);
    rect(200, 0, 100,windowHeight*2);
    pop()
  //Circle
    fill(253, 251, 212, 220);
    stroke(253, 251, 212, 220); 
    ellipse(950, 200, 400, 400, 100)

  }
