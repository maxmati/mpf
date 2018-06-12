let cnv;
let cnvWidth = 700;
let cnvHeight = 700;
let balls = [];
let lines = [];

let backgroundColor;

function setup() {
    cnv = createCanvas(cnvWidth, cnvHeight);  // Size must be the first statement
    cnv.parent('canvas-holder');
    cnv.mousePressed(clickOnCanvas);

    frameRate(30);

    backgroundColor = color('#0B6623');

    textSize(txtSize);
}

var collided = false;
function draw() {
    background(backgroundColor);

    if(balls.length === 2){
        if(balls[0].intersects(balls[1])) {

            if(!collided) {
              balls[0].collide(balls[1]);
              balls[1].collide(balls[0]);

              balls[0].setNewAngles();
              balls[1].setNewAngles();
            }
            collided = true;
        } else {
          collided = false;
        }
    }
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        if(balls[i].isOutOfCanvas(cnvWidth,cnvHeight)){
            balls[i].bounceFromBoardEdge(cnvWidth,cnvHeight);
        }
        balls[i].show();
    }

    for (let i = 0; i < lines.length; i++) {
        lines[i].show();
    }

}

function clickOnCanvas() {
    if(balls.length===2){
        return;
    }
    let ball = new Ball(mouseX, mouseY);
    if(ball.isOutOfCanvas(width,height)){
        alert("You cannot place a ball in this place. It is not within simulation place.");
        return;
    }
    for (let i = 0; i < balls.length; i++) {
        if(ball.intersects(balls[i])){
            alert("You cannot place a ball in this place. It overlaps other ball.");
            return;
        }
    }
    if(balls.length < 2){
        ball.setName(Ball.incrementAndGetName());
        let angle = balls.length === 0 ? getAAngle() : getBAngle();
        balls.push(ball);
        lines.push(new Line(mouseX, mouseY, angle));
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

function clearAllLines(){
  lines = [];
}