class control_draw{
    constructor(canvas){
            this.objectSet = []; // set objectset to an empty list, so everything will be gone when i press reset


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
                    // to know which button is selected use: console.log(Button.selectedShape);
                    }
            }

        mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
            if(this.mouseDown == true && this.rectBound == true){
                this.r = width_Button.selectedRadius;
                if(Button.selectedShape == "Brush"){
                    var tempbrush = new Brush(this.xMouse, this.yMouse, this.r, Swatch.selectedColour);
                    this.objectSet.push(tempbrush);
                    }
                }
            }

        mUp(e){ // colArray here changes colours of the rectangle 
            if(this.mouseDown == true && this.rectBound == true){
                this.dw = width_Button.selectedWidth;
            if (Button.selectedShape == "Rectangle"){
                var temprect = new Rectangle(this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                this.objectSet.push(temprect);
            }else if(Button.selectedShape == "Ellipse"){
                var tempellipse = new Ellipse(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Swatch.selectedColour);
                this.objectSet.push(tempellipse); 
            }else if(Button.selectedShape == "Circle"){
                var tempcirc = new Circle(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, Swatch.selectedColour);
                this.objectSet.push(tempcirc);
            }else if(Button.selectedShape == "Line"){
                var templine = new Line(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, this.dw, Swatch.selectedColour);
                this.objectSet.push(templine);
            }else if(Button.selectedShape == "Square"){
                var tempsquare = new Square( this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                this.objectSet.push(tempsquare);
            }else if(Button.selectedShape == "Diamond"){
                var tempdiamond = new Diamond( this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                this.objectSet.push(tempdiamond);
            }else if (Button.selectedShape == "Rotate"){
                var temprotate = new Rotate(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                this.objectSet.push(temprotate);
                }
            }
        
        if (Button.selectedShape == "Reset"){ // making a reset button
            this.objectSet = []; // clearing the object set
            Button.selected = "";
            } 

        if (Button.selectedShape == "Undo"){ // making an undo button
            this.objectSet.pop(); // pop - removes the last thing placed in the object set/most recent object
            Button.selected = "";
            }
      
            this.mouseDown = false;
            }

        update(){
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.w, this.h); // this rect is for boundary
            ctx.fillStyle = "rgba(245,245,245)"; // colour
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = 5;
            ctx.fill();
            ctx.stroke();
    

            for(var i = 0; i < this.objectSet.length; i++){
                this.objectSet[i].update();
            }

            this.dx = this.xMouse - this.xMouseStart;
            this.dy = this.yMouse - this.yMouseStart;
            if(this.mouseDown == true && this.rectBound == true){ // give permission to draw the guide rectangle
                this.draw(); // this draws the rectangle (guide) outline for the user so they know where the shape will be drawn
                }
            
        }

        draw(){ // this draws the rectangle (guide)
        if(Button.selectedShape == "Line" || Button.selectedShape == "Rectangle" || Button.selectedShape == "Ellipse" || Button.selectedShape == "Circle" || Button.selectedShape == "Square" || Button.selectedShape == "Diamond" || Button.selectedShape == "Rectangle" || Button.selectedShape == "Rotate"){
            this.drawRect(this.xMouseStart, this.yMouseStart, this.dx, this.dy, colArray[2][10]);
            }
        }

        drawRect(x,y,w,h){  // this finction is to drag a rectangle out 
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 1;
            ctx.strokeStyle = colArray[2][10]; // defining what colour the stroke is when we are drawing the rectangle
            ctx.stroke();
        }

        drawBoundaryRect(x,y,w,h,col){ // this function is to create the boundary rectangle box
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 1;
            ctx.fillStyle = col; // determines the colour of the fill of the dragging rectangle 
            ctx.fill();
        }
    
        boundsCheck(xMouse, yMouse, x, y, w, h){ // this is checking boundary
            if(xMouse > x && xMouse < x + w && yMouse > y && yMouse < y+ h){
                return true;
            }else{
                return false;
            }
        }
            
    
}