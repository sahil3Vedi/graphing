var reso = 1; //default resolution of the graph
var originX = 0; //default origins
var originY = 0; //default origins
var clearance = false;


function setup() {
  graphingCanvas=createCanvas(windowWidth,windowHeight);
  graphingCanvas.style('top','auto');
  graphingCanvas.style('z-index','-1000');
  graphingCanvas.style('position','fixed');
  graphingCanvas.style('bottom','0px');
}

function draw() {
  background(255);
  translate(windowWidth/2,windowHeight/2)
  drawGraphLines(reso,originX,originY);
  graph(clearance);



  //displaying FrameRate
  strokeWeight(0);
  stroke(0);
  textAlign(LEFT);
  text('FrameRate: '+ Math.floor(frameRate()), (windowWidth/2)-200, 270);
  text('\u00A9 Sahil Trivedi 2018', (windowWidth/2)-200, 285 );
}
