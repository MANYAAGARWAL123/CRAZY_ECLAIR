function setup() {
  createCanvas(300, 300,WEBGL);
}

let radiusx=40,radiusy=80, radiusz=100;

function draw() {
  orbitControl();
  background (182, 252, 3);
  ellipsoid(40,80,100);
}