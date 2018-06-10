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
        balls[i].move();
        balls[i].show();
    }

}

function mousePressed() {
    if(balls.length===2){
        return;
    }
    let ball = new Ball(mouseX, mouseY);
    for (let i = 0; i < balls.length; i++) {
        if(ball.intersects(balls[i]) || ball.isOutOfCanvas(width,height)){
            alert("You cannot place a ball in this place. It overlaps other ball or is not within simulation place.");
            return;
        }
    }
    if(balls.length < 2){
        ball.setName(Ball.incrementAndGetName());
        balls.push(ball);
    }
}

function initializeAllBalls(input_data) {
    balls[0].init(input_data.a);
    balls[1].init(input_data.b);
}
function clearAllBalls(){
    balls = [];
    Ball.resetNameIncrementor()
}