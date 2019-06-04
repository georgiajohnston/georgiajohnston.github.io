//console.log("control js is called");

class ControlObject {
    constructor(canvas){
        this.objectSet = []
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.selectedColour = "rgb(210,200,250)"

        this.w = 0;
        this.h = 0;

        //drawing canvas dimentions
        this.rectX = 150;
        this.rectY = 50;
        this.rectW = 600;
        this.rectH = 700;

        this.mouseDown = false;
        this.inBounds = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
        }

        mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        if(this.inBounds == true){
            this.mouseDown = true;
            }
        }

        mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.inBounds = this.boundsCheck(this.xMouse, this.yMouse, this.rectX, this.rectY, this.rectW, this.rectH);
        }


        mUp(e){
        var RectOne = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, this.selectedColour);
        if(this.mouseDown == true && this.inBounds == true){
            this.objectSet.push(RectOne);
            }
        this.mouseDown = false;
        }

        update(){
            //this is the buttons target (if I want to colour the background rect too)
            ctx.beginPath();
            ctx.rect(this.rectX,this.rectY,this.rectW,this.rectH);
            ctx.fillStyle = colArray[2][1];
            ctx.fill();
        
            for (var i=0; i<this.objectSet.length; i++){
                this.objectSet[i].update();
            }
      
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        //permission to draw the guide rectangle
            if(this.mouseDown == true && this.inBounds == true){
                this.draw();
                }
        }

        draw(){
            //this draws the guide rectangle
            this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);
            }

        drawRect(x,y,w,h){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 1;
            ctx.strokeStyle = colArray[2][4];
            ctx.stroke();
        }

            boundsCheck(xM,yM,x,y,w,h){
                if(xM > x && xM < x + w && yM > y && yM < y + h){
                    return true;
                }else{
                    return false;
                }
            }

    setColour(c){
        this.selectedColour = c;
    }
}