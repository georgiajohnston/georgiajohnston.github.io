// starts out with an empty list when the user enters the program
var objectSet = []; // emty the list

var objectOne = new control_draw(canvas);
objectSet.push(objectOne);

// text, x, y, w, h, stroke, fill, textC, over, canvas
var rectangle = new Button("Rectangle", 30, 40, 75, 75, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Rectangle, colArray[2][10]);
var ellipse = new Button("Ellipse", 30, 125, 75, 75, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Ellipse, colArray[2][10]);
var circle = new Button("Circle", 30, 210, 75, 75, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Circle, colArray[2][10]);
var square = new Button("Square", 30, 295, 75, 75, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Square, colArray[2][10]);
var diamond = new Button("Diamond", 30, 380, 75, 75, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Diamond, colArray[2][10]);
var rotate = new Button("Rotate", 30, 465, 75, 75, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Rotate, colArray[2][10]);
var brush = new Button("Brush", 30, 550, 75, 75, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Brush, colArray[2][10]);
var line = new Button("Line", 30, 635, 75, 75, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Line, colArray[2][10]);
var Undo = new Button("Undo", 30, 720, 35, 35, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Rectangle, colArray[2][10]);
var Reset = new Button("Reset", 70, 720, 35, 35, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Rectangle, colArray[2][10]);
objectSet.push(rectangle,ellipse,circle,line,brush,square,diamond,rotate, Undo, Reset);

for(var i = 0; i < 3; i ++ ){ // loop that creates the colour swatches on the screen
    for(var j = 0 ; j < 11; j++ ){ 
    var tempswatch =  new Swatch(800 + 60*i, 80 + 60*j, 50, 50, colArray[0][10], colArray[i][j], colArray[1][10], canvas);
    objectSet.push(tempswatch);
    }
}

// text, x, y, w, h, width, radius, rotate, stroke, fill, textC, over, canvas
var brush1 = new width_Button("S", 110, 550, 20, 20, 0, 5, colArray[0][10], colArray[0][10], colArray[2][10], colArray[2][10], canvas);
var brush2 = new width_Button("M", 110, 575, 20, 20, 0, 10, colArray[0][10], colArray[0][10], colArray[2][10], colArray[2][10], canvas);
var brush3 = new width_Button("L", 110, 600, 20, 20, 0, 20, colArray[0][10], colArray[0][10], colArray[2][10], colArray[2][10], canvas);
objectSet.push(brush1,brush2,brush3);

// text, x, y, w, h, width, radius, rotate, stroke, fill, textC, over, canvas
var line1 = new width_Button("S", 110, 635, 20, 20, 2, 0, colArray[0][10], colArray[0][10], colArray[2][10], colArray[2][10], canvas);
var line2 = new width_Button("M", 110, 660, 20, 20, 5, 0, colArray[0][10], colArray[0][10], colArray[2][10], colArray[2][10], canvas);
var line3 = new width_Button("L", 110, 685, 20, 20, 10, 0, colArray[0][10], colArray[0][10], colArray[2][10], colArray[2][10], canvas);
objectSet.push(line1, line2, line3);

function animate(){ // consistently updating the objectset
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    

    window.requestAnimationFrame(animate);
}
animate();