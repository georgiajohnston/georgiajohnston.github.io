console.log("main js is called");

var objectSet = [];

var rectOne = new Rectangle(150, 50, 600, 700, colArray[2][1]);
objectSet.push(rectOne);

var objectOne = new ControlObject(canvas);
objectSet.push(objectOne);

function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    

    window.requestAnimationFrame(animate);
}
animate();
