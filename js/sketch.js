let cnv;
let cnvWidth = 700;
let cnvHeight = 700;


function setup() {
    cnv = createCanvas(cnvWidth, cnvHeight);  // Size must be the first statement
    cnv.parent('canvas-holder');

    stroke(255);     // Set line drawing color to white
    frameRate(30);
}

function draw() {
    background(0);
}