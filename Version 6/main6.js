var objectSet = []; // emty the list

var objectOne = new control_draw(canvas);
objectSet.push(objectOne);

var rectangle = new Button("Rectangle", 20, 50, 100, 100, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Rectangle, colArray[2][10]);
var ellipse = new Button("Ellipse", 20, 170, 100, 100, colArray[2][10], colArray[2][10], colArray[0][10], colArray[1][10], canvas, Ellipse, colArray[2][10]);
objectSet.push(rectangle,ellipse);

var swatchOne = new Swatch(800, 50, 100, 100, colArray[2][0], colArray[1][0], colArray[2][0], canvas, objectOne);
var swatchTwo = new Swatch(800, 170, 100, 100, colArray[2][1], colArray[1][1], colArray[2][1], canvas, objectOne)
var swatchThree = new Swatch(800, 290, 100, 100, colArray[2][2], colArray[1][2], colArray[2][2], canvas, objectOne)
var swatchFour = new Swatch(800, 410, 100, 100, colArray[2][3], colArray[1][3], colArray[2][3], canvas, objectOne)
var swatchFive = new Swatch(800, 530, 100, 100, colArray[2][4], colArray[1][4], colArray[2][4], canvas, objectOne)
var swatchSix = new Swatch(800, 650, 100, 100, colArray[2][5], colArray[1][5], colArray[2][5], canvas, objectOne)
objectSet.push(swatchOne,swatchTwo,swatchThree,swatchFour,swatchFive,swatchSix);

function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }

    window.requestAnimationFrame(animate);
}
animate();