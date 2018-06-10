let cnv;
let cnvWidth = 700;
let cnvHeight = 700;
let ball_1;
let ball_2;

let backgroundColor;

function setup() {
    cnv = createCanvas(cnvWidth, cnvHeight);  // Size must be the first statement
    cnv.parent('canvas-holder');
    frameRate(30);

    backgroundColor = color('#0B6623');

    ball_1 = new Ball(350,350,50,50);
}

function draw() {
    background(backgroundColor);

    ball_1.show();
    // ball_2.show();
}