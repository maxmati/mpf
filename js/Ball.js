let txtSize = 20;

class Ball{
    constructor(x,y,m,r=30){
        this.x = x;
        this.y = y;
        this.r = r;
        this.m = m;
        this.col = color('#FFFF19');
    }

    setName(name){
        this.name = name;
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

    intersects(other) {
        let distanceBetweenBalls = dist(this.x, this.y, other.x, other.y);
        return (distanceBetweenBalls < this.r + other.r);
    }

    isOutOfCanvas(cvnWidth, cvnHeight){
        return this.isOutOfBorder(this.x , cvnWidth) || this.isOutOfBorder(this.y , cvnHeight);
    }

    isOutOfBorder(pos, borderSize) {
        return pos + this.r >= borderSize || pos - this.r <= 0;
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