function drawGraphLines(reso, originX, originY){
  textAlign(CENTER);
  textSize(12);
  stroke(200);
  strokeWeight(1);
  //positive x axis
  for(var i=50;i<windowWidth/2;i+=50){
    line(i,-windowHeight/2,i,windowHeight/2);
    text(i, i, 12);
  }
  //negative x axis
  for(var i=-50;i>-windowWidth/2;i-=50){
    line(i,-windowHeight/2,i,windowHeight/2);
    text(i, i, 12);
  }
  //negative y xaxis
  for(var j=50;j<windowHeight/2;j+=50){
    line(-windowWidth/2,j,windowWidth/2,j);
    textAlign(RIGHT);
    text(j, 0, j+6);
  }
  //positive y axis
  for(var j=-50;j>-windowHeight/2;j-=50){
    line(-windowWidth/2,j,windowWidth/2,j);
    textAlign(RIGHT);
    text(j, 0, j+6);
  }
  stroke(100);
  //xaxis
  line(0,-windowHeight/2,0,windowHeight/2);
  text(0, 0, 12);
  //y axis
  line(-windowWidth/2,0,windowWidth/2,0);
}
