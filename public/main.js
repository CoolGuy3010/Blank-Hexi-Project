let thingsToLoad = [];

let g = hexi(500, 500, setup, thingsToLoad, load);
g.fps = 30;
g.border = "2px white";
g.backgroundColor = 0x000000;
g.scaleToWindow();
g.start();

function load(){
  g.loadingBar();
}

function setup() {
  g.state = play;
}

function play(){
 
}
