let txtSize = 20;

function convertAngleToRadian(angle) {
    return (angle * Math.PI) / 180;
}

class Ball{
    constructor(x,y,r=30){
        this.x = x;
        this.y = y;
        this.r = r;
        this.col = color('#FFFF19');
        this.angle = 0; //TODO: calculate from vx vy then remove
        this.vx = 0;
        this.vy = 0;
    }

    setName(name){
        this.name = name;
    }

    init(init_data){
        this.m = init_data.mass;
        this.angle = init_data.angle; //TODO: calculate from vx vy then remove
        this.vx = this.calculateVx(init_data.velocity, init_data.angle);
        this.vy = this.calculateVy(init_data.velocity, init_data.angle);
    }

    calculateVx(velocity, angle) {
        return  velocity * Math.cos(convertAngleToRadian(angle));
    }
    calculateVy(velocity, angle) {
        return  velocity * Math.sin(convertAngleToRadian(angle));
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

    contactAngle(other) {
      let dx = this.x - other.x;
      let dy = this.y - other.y;
      return Math.atan(dy/dx)
    }

    setNewAngles() {
      this.vx = this.new_vx;
      this.vy = this.new_vy;
    }

    //http://williamecraver.wixsite.com/elastic-equations
    collide(other) {
      let v1 = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
      let v2 = Math.sqrt(other.vx*other.vx + other.vy*other.vy);
      let a1 = this.angle * Math.PI/180; //TODO: calculate from vx vy
      let a2 = other.angle * Math.PI/180; //TODO: calculate from vx vy
      let ca = this.contactAngle(other);
      let m1 = this.m;
      let m2 = other.m;

      let n = v1*Math.cos(a1 - ca)*(m1-m2) + 2 * m2 * v2 * Math.cos(a2 - ca);
      let d = m1 + m2;


      this.new_vx = n * Math.cos(ca) / d + v1 * Math.sin(a1 - ca) * Math.sin(ca);
      this.new_vy = n * Math.sin(ca) / d + v1 * Math.sin(a1 - ca) * Math.cos(ca);
    }

    isOutOfCanvas(cvnWidth, cvnHeight){
        return this.isOutOfBoardEdge(this.x , cvnWidth) || this.isOutOfBoardEdge(this.y , cvnHeight);
    }

    isOutOfBoardEdge(pos, boardEdgeSize) {
        return pos + this.r >= boardEdgeSize || pos - this.r <= 0;
    }

    bounceFromBoardEdge(cvnWidth, cvnHeight){
        if(this.isOutOfBoardEdge(this.x, cvnWidth)){
            this.angle = 180 - this.angle;
            this.updateAfterBounceFromEdge(this.angle);
        }
        if(this.isOutOfBoardEdge(this.y , cvnHeight)){
            this.angle = 360 - this.angle;
            this.updateAfterBounceFromEdge(this.angle);
        }
    }

    updateAfterBounceFromEdge(resultedAngle) {
        let velocity = Math.sqrt(Math.pow(this.vx,2) + Math.pow(this.vy,2));
        this.new_vx = this.calculateVx(velocity, resultedAngle);
        this.new_vy = this.calculateVy(velocity, resultedAngle);
    }

    move() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

    static incrementAndGetName(){
        if (!this.latestId) {
            this.latestId = 1;
        }else{
            this.latestId++;
        }
        return String.fromCharCode(64 + this.latestId);
    }
    static resetNameIncrementor(){
        this.latestId = 0;
    }
}