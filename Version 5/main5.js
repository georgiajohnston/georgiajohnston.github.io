var objectSet = [];

var objectOne = new ControlObject(canvas);
objectSet.push(objectOne);

var swatchOne = new Swatch(25, 50, 100, 100, colArray[2][6], colArray[1][6], colArray[2][6], canvas, objectOne);
var swatchTwo = new Swatch(25, 170, 100, 100, colArray[2][3], colArray[1][3], colArray[2][3], canvas, objectOne)
var swatchThree = new Swatch(25, 290, 100, 100, colArray[2][0], colArray[1][0], colArray[2][0], canvas, objectOne)
var swatchFour = new Swatch(25, 410, 100, 100, colArray[2][7], colArray[1][7], colArray[2][7], canvas, objectOne)
var swatchFive = new Swatch(25, 530, 100, 100, colArray[2][8], colArray[1][8], colArray[2][8], canvas, objectOne)
var swatchSix = new Swatch(25, 650, 100, 100, colArray[2][1], colArray[1][1], colArray[2][1], canvas, objectOne)
objectSet.push(swatchOne,swatchTwo,swatchThree,swatchFour,swatchFive,swatchSix);

function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    

    window.requestAnimationFrame(animate);
}
animate();
