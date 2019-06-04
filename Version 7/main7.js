// basic code for animate loop
//console.log("main js called");

var objectSet = []; // emty the list

var objectOne = new control_draw(canvas);
objectSet.push(objectOne);

var rectangle = new Button("Rectangle", 20, 50, 100, 100, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Rectangle, colArray[2][10]);
var ellipse = new Button("Ellipse", 20, 170, 100, 100, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Ellipse, colArray[2][10]);
//var line = new Button("Line", 20, 290, 100, 100, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Line, colArray[2][10]);
var Undo = new Button("Undo", 20, 530, 100, 100, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Rectangle, colArray[2][10]);
var Reset = new Button("Reset", 20, 650, 100, 100, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Rectangle, colArray[2][10]);
objectSet.push(rectangle,ellipse, Undo, Reset);

var c1 = new Swatch(800,80,50,50,colArray[0][10],colArray[2][0],colArray[0][0],canvas); var c2 = new Swatch(860,80,50,50,colArray[0][10],colArray[1][0],colArray[0][0],canvas); var c3 = new Swatch(920,80,50,50,colArray[0][10],colArray[0][0],colArray[0][0],canvas); 
var c4 = new Swatch(800,140,50,50,colArray[0][10],colArray[2][1],colArray[0][1],canvas); var c5 = new Swatch(860,140,50,50,colArray[0][10],colArray[1][1],colArray[0][1],canvas); var c6 = new Swatch(920,140,50,50,colArray[0][10],colArray[0][1],colArray[0][1],canvas);
var c7 = new Swatch(800,200,50,50,colArray[0][10],colArray[2][2],colArray[0][2],canvas); var c8 = new Swatch(860,200,50,50,colArray[0][10],colArray[1][2],colArray[0][2],canvas); var c9 = new Swatch(920,200,50,50,colArray[0][10],colArray[0][2],colArray[0][2],canvas);
var c10 = new Swatch(800,260,50,50,colArray[0][10],colArray[2][3],colArray[0][3],canvas); var c11 = new Swatch(860,260,50,50,colArray[0][10],colArray[1][3],colArray[0][3],canvas); var c12 = new Swatch(920,260,50,50,colArray[0][10],colArray[0][3],colArray[0][3],canvas);
var c13 = new Swatch(800,320,50,50,colArray[0][10],colArray[2][4],colArray[0][4],canvas); var c14 = new Swatch(860,320,50,50,colArray[0][10],colArray[1][4],colArray[0][4],canvas); var c15 = new Swatch(920,320,50,50,colArray[0][10],colArray[0][4],colArray[0][4],canvas);
var c16 = new Swatch(800,380,50,50,colArray[0][10],colArray[2][5],colArray[0][5],canvas); var c17 = new Swatch(860,380,50,50,colArray[0][10],colArray[1][5],colArray[0][5],canvas); var c18 = new Swatch(920,380,50,50,colArray[0][10],colArray[0][5],colArray[0][5],canvas);
var c19 = new Swatch(800,440,50,50,colArray[0][10],colArray[2][6],colArray[0][6],canvas); var c20 = new Swatch(860,440,50,50,colArray[0][10],colArray[1][6],colArray[0][6],canvas); var c21 = new Swatch(920,440,50,50,colArray[0][10],colArray[0][6],colArray[0][6],canvas);
var c22 = new Swatch(800,500,50,50,colArray[0][10],colArray[2][7],colArray[0][7],canvas); var c23 = new Swatch(860,500,50,50,colArray[0][10],colArray[1][7],colArray[0][7],canvas); var c24 = new Swatch(920,500,50,50,colArray[0][10],colArray[0][7],colArray[0][7],canvas);
var c25 = new Swatch(800,560,50,50,colArray[0][10],colArray[2][8],colArray[0][8],canvas); var c26 = new Swatch(860,560,50,50,colArray[0][10],colArray[1][8],colArray[0][8],canvas); var c27 = new Swatch(920,560,50,50,colArray[0][10],colArray[0][8],colArray[0][8],canvas);
var c28 = new Swatch(800,620,50,50,colArray[0][10],colArray[2][9],colArray[0][9],canvas); var c29 = new Swatch(860,620,50,50,colArray[0][10],colArray[1][9],colArray[0][9],canvas); var c30 = new Swatch(920,620,50,50,colArray[0][10],colArray[0][9],colArray[0][9],canvas);
var c31 = new Swatch(800,680,50,50,colArray[0][10],colArray[2][10],colArray[0][10],canvas); var c32 = new Swatch(860,680,50,50,colArray[0][10],colArray[1][10],colArray[0][10],canvas); var c33 = new Swatch(920,680,50,50,colArray[0][10],colArray[0][10],colArray[0][10],canvas);

objectSet.push(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30,c31,c32,c33);


function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }

    window.requestAnimationFrame(animate);
}
animate();