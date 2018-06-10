let cnv;
let cnvWidth = 700;
let cnvHeight = 700;
let balls = [];

let backgroundColor;

function setup() {
    cnv = createCanvas(cnvWidth, cnvHeight);  // Size must be the first statement
    cnv.parent('canvas-holder');
    frameRate(30);

    backgroundColor = color('#0B6623');

    textSize(txtSize);
}

function draw() {
    background(backgroundColor);

    for (let i = 0; i < balls.length; i++) {
        // bubbles[i].move();
        balls[i].show();
    }

}

function mousePressed() {
    let ball = new Ball(mouseX, mouseY,50);
    for (let i = 0; i < balls.length; i++) {
        if(ball.intersects(balls[i])){
            alert("You cannot place a ball in this place. It overlaps other ball");
            return;
        }
    }
    if(balls.length < 2){
        ball.setName(Ball.incrementAndGetName());
        balls.push(ball);
    }
}