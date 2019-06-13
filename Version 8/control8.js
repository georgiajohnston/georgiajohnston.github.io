class control_draw{
    constructor(canvas){
            // set objectset to an empty list, so everything will be gone when i press reset
            this.objectSet = [];

            //console.log("test object constructor");

            this.xMouse = 0;
            this.yMouse = 0;
            this.xMouseStart = 0;
            this.yMouseStart = 0;


            this.mouseDown = false;

            // Rectangle canvas co-ordinates 
            this.x = 150;
            this.y = 50;
            this.w = 600;
            this.h = 700;
            this.dx = 0;
            this.dy = 0;
            this.stroke = "rgba(250,250,250)";
            //this.fill = colArray[2][0];

            this.r = 0;

            this.rectBound = false;

            this.element = canvas;

            this.element.addEventListener('mousedown', this.mDown.bind(this));
            this.element.addEventListener('mousemove', this.mMove.bind(this));
            this.element.addEventListener('mouseup', this.mUp.bind(this));   
        }

        mDown(e){
            this.xMouseStart = e.offsetX;
            this.yMouseStart = e.offsetY;
            if(this.rectBound == true){
                    this.mouseDown = true;
        }
        //console.log(Button.selectedShape); // knowing which of the buttons is selected

        }

        mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
            //console.log("mouse move event") 
            if(this.mouseDown == true && this.rectBound == true){
                this.r = width_Button.selectedWidth;
                if(Button.selectedShape == "Brush"){
                    var temp3 = new Brush(this.xMouse, this.yMouse, this.r, Swatch.selectedColour);
                    this.objectSet.push(temp3);
                }
        }
        }

        //colArray here changes colours of the rectangle 
        mUp(e){
            if(this.mouseDown == true && this.rectBound == true){
                this.dw = width_Button.selectedWidth;
            if (Button.selectedShape == "Rectangle"){
                var tempO = new Rectangle(this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                this.objectSet.push(tempO);
            }else if(Button.selectedShape == "Ellipse"){
                var temp = new Ellipse(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Swatch.selectedColour);
                this.objectSet.push(temp); 
            }else if(Button.selectedShape == "Circle"){
                var temp1 = new Circle(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, Swatch.selectedColour);
                this.objectSet.push(temp1);
            }else if(Button.selectedShape == "Line"){
                var temp2 = new Line(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, this.dw, Swatch.selectedColour);
                this.objectSet.push(temp2);
            }else if(Button.selectedShape == "Square"){
                var temp3 = new Square( this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                this.objectSet.push(temp3);
            }else if(Button.selectedShape == "Diamond"){
                var temp4 = new Diamond( this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                this.objectSet.push(temp4);
            }else if (Button.selectedShape == "Rotate"){
                var temp5 = new Rotate(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                this.objectSet.push(temp5);
                }
            }
        
        if (Button.selectedShape == "Reset"){
            this.objectSet = []; // clearing the object set
            Button.selected = "";
        } 

        // making an undo button
        if (Button.selectedShape == "Undo"){
            this.objectSet.pop(); // pop the last thing that was drawn on the screen
            Button.selected = "";
        }
      
                this.mouseDown = false;

        }

        update(){
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.w, this.h); // this rect is for boundary
            //ctx.ellipse(this.x, this.y, this.Rx, this.Ry, this.r, this.Sa, this.Ea); // test ellispe
            ctx.fillStyle = "rgba(245,245,245)"; //colour
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = 5;
            ctx.fill();
            ctx.stroke();
    

            for(var i = 0; i < this.objectSet.length; i++){
                this.objectSet[i].update();
                //console.log('object set updated');
            }

            this.dx = this.xMouse - this.xMouseStart;
            this.dy = this.yMouse - this.yMouseStart;
            //give permission to draw the guide rectangle
            if(this.mouseDown == true && this.rectBound == true){
                 // this draws the rectangle (guide)
                //console.log("draw");
                this.draw();
                }
            
        }

        // this draws the rectangle (guide)
        draw(){

            if(Button.selectedShape == "Line" || Button.selectedShape == "Rectangle" || Button.selectedShape == "Ellipse" || Button.selectedShape == "Circle"){
                this.drawRect(this.xMouseStart, this.yMouseStart, this.dx, this.dy, colArray[2][4]);
            }
        }

        // this finction is to drag a rectangle out 
        drawRect(x,y,w,h){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 1;
            ctx.strokeStyle = colArray[2][10]; // defining what colour the stroke is when we are drawing the rectangle
            ctx.stroke();
        }

        // this function is to create the boundary rectangle box
        drawBoundaryRect(x,y,w,h,col){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 1;
            ctx.fillStyle = col; //determines the colour of the fill of the dragging rectangle 
            ctx.fill();
        }
    
        // this is checking boundary
        boundsCheck(xMouse, yMouse, x, y, w, h){ 
            if(xMouse > x && xMouse < x + w && yMouse > y && yMouse < y+ h){
                return true;
            }else{
                return false;
            }
        }
            
    
}