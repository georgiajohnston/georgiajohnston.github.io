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
        //this draws the rectangle using below parameters
        this.draw();
        }

    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
        }
}   

// class ellipse
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
        ctx.ellipse(this.xC, this.yC, this.radiusX, this.radiusY, this.rotation, this.startAngle, this.endAngle);
        ctx.fillStyle = this.fill;
        ctx.fill();
        }
}

// class circle
class Circle{
    constructor(xS, yS, xM, yM, c1){
        this.xC = (xS + xM)/2; // centre x
        this.yC = (yS + yM)/2; // centre y
        this.radiusX = Math.abs( (xM - xS)/2 ); //Math.abs is to make the values always positive
        this.radiusY = Math.abs( (yM - yS)/2 );
        this.r = 0;
        //this ensures that the circle created will be perfectly round by having an even radius
        if(this.radiusX <this.radiusY){
            this.r = this.radiusX;
        
        }else{
            this.r = this.radiusY
            };
                this.fill = c1;
                }

    update(){
        this.draw();
        }

    draw(){
        ctx.beginPath();
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
        }
}

class Line{
    constructor(xS, yS, xM, yM, dw, sCol){
        //Variables required for line
        this.xS = xS;
        this.yS = yS;
        this.xM = xM;
        this.yM = yM;
        this.dw = dw;
        this.fill = sCol;
        }

    update(){
        //drawing line
        this.draw()
        }

    draw(){
        //line function
        ctx.strokeStyle = this.fill;
        ctx.lineWidth = this.dw;
        ctx.lineCap = "round";
        ctx.beginPath();
        //this draws the line from the starting point, to the end point where the mouse was moved to 
        ctx.moveTo(this.xS, this.yS);
        ctx.lineTo(this.xM, this.yM);
        ctx.stroke();
        }
}

// bursh(x, y, r)
class Brush{
    constructor(xM, yM, r, c1){
        this.xC = xM; // centre x
        this.yC = yM; // centre y
        this.r = r;
        this.fill = c1;
        }

    update(){ 
        this.draw();
        }

    draw(){
        ctx.beginPath();
        //this draws multiple circles, creating a new one every time the mouse moves creating a brush shape
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
        }
}

// class Square
class Square{
    constructor(xS, yS, w, h, c1){
        this.xC = xS + w/2;
        this.yC = yS + h/2;
        this.s = (w + h)/2;
        this.ang = 45;
        this.fill = c1;
        }
    
    update(){
        // drawing out a square
        this.draw();
        }
    
    draw(){
        ctx.save()
        ctx.translate(this.xC, this.yC);
    
        ctx.beginPath();
        //this ensures that the rectangle created will be perfectly symmetrical
        ctx.rect(0 - this.s/2, 0 - this.s/2, this.s, this.s);
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.restore();
        }
}

class Diamond{
    constructor(xS, yS, dw, dh, c1){
        this.xC = xS + dw/2
        this.yC = yS + dh/2;
        this.s = ( dw + dh )/2;
        this.ang = 45;
        this.fill = c1;
        }
    
    update(){
        this.draw();
        }
    
    draw(){
        ctx.save()
        ctx.translate(this.xC, this.yC);
        ctx.rotate(this.ang*Math.PI/180);
    
        ctx.beginPath();
        //this ensures that the diamond will follow the outline of the users mouse activity
        ctx.rect(0 - this.s/2, 0 - this.s/2, this.s, this.s);
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.restore();
        }
}

class Rotate{
    constructor(xM, yM, xS, yS, w, h, c1){
        this.xC = (xS + xM)/2;
        this.yC = (yS + yM)/2;
        this.w = w;
        this.h = h;
        this.fill = c1;
        this.degrees = 0;
        }


    update(){
        this.degrees += 1;
        // drawing rectangle
        this.draw();
        }

    draw(){
        ctx.save();
        //this ensures that the rectangle will rotate around the central point of the object
        ctx.translate(this.xC, this.yC);
        ctx.rotate(this.degrees*Math.PI/180);
        ctx.beginPath();
        ctx.rect(-this.w/2 ,  -this.h/2, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.restore();
        }
}