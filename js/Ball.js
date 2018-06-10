let txtSize = 24;

class Ball{
    constructor(x,y,r,m){
        this.x = x;
        this.y = y;
        this.r = r;
        this.m = m;
        this.col = color('#FFFF19');
        this.name = Ball.incrementAndGetName();
    }

    setColor(col){
        this.col = col;
    }

    show() {
        stroke(0); //border color set to black
        strokeWeight(2);
        fill(this.col);
        ellipse(this.x, this.y, this.r * 2);
        textAlign(CENTER);
        fill(0);
        text(this.name,this.x ,this.y + txtSize/4);
    }

    static incrementAndGetName(){
        if (!this.latestId) {
            this.latestId = 1;
        }else{
            this.latestId++;
        }
        return String.fromCharCode(64 + this.latestId);
    }
}