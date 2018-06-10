class Ball{
    constructor(x,y,r,m){
        this.x = x;
        this.y = y;
        this.r = r;
        this.m = m;
        this.col = color('#FFFF19');
    }

    setColor(col){
        this.col = col;
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(this.col);
        ellipse(this.x, this.y, this.r * 2);
    }
}