var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);
   let d = select('.div-block');
    d.position(20,20);
  
  gui = new Gui();
  let gui_setup = new dat.GUI();
  
  gui_setup.add(gui,'spikes',4,9).step(1);
  gui_setup.add(gui, 'wid', 1,100).step(10);
  gui_setup.add(gui, 'wid2',1,100).step(10);
  gui_setup.add(gui, 'text', '');
  gui_setup.add(gui, 'speed', 1,24).step(1);
  gui_setup.add(gui, 'text_size',12,90).step(4);
  gui_setup.addColor(gui, 'textColor');
  gui_setup.addColor(gui, 'starColor');
  
  fill(255);
}

function draw() {
  background(225);
  frameRate(gui.speed);
  
  for (var x=random(3); x<=width; x+=random(400)){
  for (var y=random(3); y<=height; y+=random(400)){
    star(x, y, gui.wid,gui.wid2,gui.spikes);
  }}
  
  fill(gui.textColor);
  
  text(gui.text,windowWidth/2,windowHeight/2);
  textAlign(CENTER);
  textSize(gui.text_size);
  fill(gui.starColor);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mousePressed(){
  redraw();
}

function Gui(){
  this.spikes=5;
  this.wid=20;
  this.wid2=10;
  this.text='hello world';
  this.speed=7;
  this.text_size=16;
  this.textColor=('#fc0050');
  this.starColor=('#ffb1e9');
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}