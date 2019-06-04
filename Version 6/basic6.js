class Swatch{
    constructor(x, y, w, h, stroke, fill, over, canvas){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
        this.over = over;

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        this.insideShape = false;
        this.click = false;

        this.element = canvas;
        this.element.addEventListener('click', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mClick(e){
        if(this.insideShape == true){
            Swatch.selected = this;
            Swatch.selectedColour = this.fill;
        }
}

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //check if in the boundary 
        this.insideShape = this.rectBounds(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);

        if(this.insideShape == true){
            this.stroke = "rgb(230,230,230)";
        }
        
        else{
            this.stroke = "rgb(250,250,250)";
        }
    }

    update(){
        this.draw();
        }

    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = this.stroke;
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 10;
        ctx.fill();
        ctx.stroke();
    }
    
    rectBounds(xM, yM, x, y, w, h){ 
    //edit the values
    if(xM > x && xM < x + w && yM > y && yM < y + h){
        return true;
    }else{
        return false;
        }
    }  
}
Swatch.selected = "";
Swatch.selectedColour = "";