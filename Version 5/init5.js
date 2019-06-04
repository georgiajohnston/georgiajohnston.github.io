//console.log("init js is called")

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
  "rgba(229, 120, 120, 1)","rgba(0, 0, 0, 0.50)","rgba(156, 57, 57, 1)",
  "rgba(74, 154, 225, 1)","rgba(71, 121, 165, 1)","rgba(103, 134, 161, 1)",
  "rgba(226, 162, 35, 1)","rgba(132, 174, 140, 1)","rgba(132, 124, 167, 1)"
  ],[
    "rgba(229, 120, 120, 0.66)","rgba(0, 0, 0, 0.25)","rgba(156, 57, 57, 0.66)",
    "rgba(74, 154, 225, 0.66)","rgba(71, 121, 165, 0.66)","rgba(103, 134, 161, 0.66)",
    "rgba(226, 162, 35, 0.66)","rgba(132, 174, 140, 0.66)","rgba(132, 124, 167, 0.66)"
     ],[
    "rgba(229, 120, 120, 0.33)","rgba(0, 0, 0, 0.05)","rgba(156, 57, 57, 0.33)",
    "rgba(74, 154, 225, 0.33)","rgba(71, 121, 165, 0.33)","rgba(103, 134, 161, 0.33)",
    "rgba(226, 162, 35, 0.33)","rgba(132, 174, 140, 0.33)","rgba(132, 124, 167, 0.33)"
      ]

  ]
