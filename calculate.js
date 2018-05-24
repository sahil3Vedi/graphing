var input;

function graph(clearance){
  if (clearance == true){
    strokeWeight(5);
    stroke(0,243,50);
    for(var i =-windowWidth/2; i<windowWidth/2; i++){
      point(-i,input*i);
    }
    let computed = input + "*x";
    document.getElementById('computed').innerHTML = computed;
  }
}

function calculate(){
  input = document.getElementById('inputBox').value;
  clearance = true;
}
