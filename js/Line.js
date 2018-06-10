function dashedLine(x1, y1, x2, y2, l, g) {
  var pc = dist(x1, y1, x2, y2) / 100;
  var pcCount = 1;
  var lPercent = gPercent = 0;
  var currentPos = 0;
  var xx1 = yy1 = xx2 = yy2 = 0;

  while (int(pcCount * pc) < l) {
    pcCount++
  }
  lPercent = pcCount;
  pcCount = 1;
  while (int(pcCount * pc) < g) {
    pcCount++
  }
  gPercent = pcCount;

  lPercent = lPercent / 100;
  gPercent = gPercent / 100;
  while (currentPos < 1) {
    xx1 = lerp(x1, x2, currentPos);
    yy1 = lerp(y1, y2, currentPos);
    xx2 = lerp(x1, x2, currentPos + lPercent);
    yy2 = lerp(y1, y2, currentPos + lPercent);
    if (x1 > x2) {
      if (xx2 < x2) {
        xx2 = x2;
      }
    }
    if (x1 < x2) {
      if (xx2 > x2) {
        xx2 = x2;
      }
    }
    if (y1 > y2) {
      if (yy2 < y2) {
        yy2 = y2;
      }
    }
    if (y1 < y2) {
      if (yy2 > y2) {
        yy2 = y2;
      }
    }

    line(xx1, yy1, xx2, yy2);
    currentPos = currentPos + lPercent + gPercent;
  }
}


class Line {
  constructor(x,y,angle, length = 1000) {
    this.x1 = x;
    this.y1 = y;
    this.length = length;
    this.setAngle(angle)
  }

  setAngle(angle) {
    this.angle = angle;
    this.x2 = this.x1 + Math.cos((this.angle*Math.PI) / 180) * this.length;
    this.y2 = this.y1 + Math.sin((this.angle*Math.PI) / 180) * this.length;
  }

  show() {
    stroke(0); //border color set to black
    strokeWeight(2);

    dashedLine(this.x1, this.y1, this.x2, this.y2, 5, 30);

  }
}