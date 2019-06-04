console.log("control js is called");

class ControlObject {
    constructor(canvas){
        this.objectSet = []
        //an empty list is made to keep rectangle on screen
        //this will be cleared when i click the reset button
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;

        this.w = 0;
        this.h = 0;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
        }

        mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;

        console.log("mouse down")
        }

        mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        console.log("mouse move") 
        }


        mUp(e){
        console.log("mouse up")
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
}