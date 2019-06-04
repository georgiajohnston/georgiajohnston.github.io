//console.log("object js called");

// class Rectangle takes x, y, w, h (integers), color as rgba string(colArray)
class Rectangle{
    constructor(x, y, w, h, c1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = c1;
    }


    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}   

// class ellipse (x, y, radiusX, radiusY, rotation, startAngle, endAngle, colour)
class Ellipse{
    constructor(xS, yS, xM, yM, c1){
        this.xC = (xS + xM)/2; // centre x
        this.yC = (yS + yM)/2; // centre y
        this.radiusX = Math.abs( (xM - xS)/2 ); //Math.abs is to make the values always positive
        this.radiusY = Math.abs( (yM - yS)/2 );
        this.rotation = 0;
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.fill = c1;
    }

    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.ellipse(this.xC, this.yC, this.radiusX, this.radiusY, this.rotation, 
                this.startAngle, this.endAngle);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}
/*
class Line{
    constructor(xS,yS,xM,yM,c1){

    }
}
ctx.strokeStyle = "rgb(255,0,0)";
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(0,200);
ctx.lineTo(750,200);
ctx.stroke();
*/