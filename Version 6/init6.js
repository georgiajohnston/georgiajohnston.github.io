var myScale = 0;

function setupCanvas(canvas) {
  //the pixel ratio, it defaults back to one
  var dpr = window.devicePixelRatio || 1;
  myScale=dpr;
  //the size of the canvas is measured in css panells 
  var rect = canvas.getBoundingClientRect();
  //the pixel dementions in css
  //the pixel ratio sizes
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  //dpr operations
  ctx.scale(dpr, dpr);
  return ctx;
}
//basic drawing without functions

//the line is the same size as what will appear on the page
var ctx = setupCanvas(document.querySelector('#myCanvas'));
canvas = document.querySelector('#myCanvas');
const width = canvas.width/myScale;
const height = canvas.height/myScale;

//include a function which defines the canvas and scale in terms of pixel ratio
var colArray=[
  [
  "rgba(255,58,58,0.3)","rgba(255,150,30,0.3)","rgba(255,207,66,0.3)",
  "rgba(110,198,58,0.3)","rgba(91,255,187,0.3)","rgba(91,227,255,0.3)",
  "rgba(126,114,255,0.3)","rgba(172,114,255,0.3)","rgba(250,114,255,0.3)",
  "rgba(255,114,187,0.3)","rgba(255,255,255,1)"
  ],[
    "rgba(255,58,58,0.6)","rgba(255,150,30,0.6)","rgba(255,207,66,0.6)",
    "rgba(110,198,58,0.6)","rgba(91,255,187,0.6)","rgba(91,227,255,0.6)",
    "rgba(126,114,255,0.6)","rgba(172,114,255,0.6)","rgba(250,114,255,0.6)",
    "rgba(255,114,187,0.6)","rgba(0,0,0,0.2)"
     ],[
      "rgba(255,58,58,1)","rgba(255,150,30,1)","rgba(255,207,66,1)",
      "rgba(110,198,58,1)","rgba(91,255,187,1)","rgba(91,227,255,1)",
      "rgba(126,114,255,1)","rgba(172,114,255,1)","rgba(250,114,255,1)",
      "rgba(255,114,187,1)","rgba(0,0,0,0.4)"
      ]

  ]
