console.log("main js is called");

var objectSet = [];

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
