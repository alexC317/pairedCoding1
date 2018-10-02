// operators, arrays, conditionals, data types, functions, constructor functions
// Rumble in the Squared Circle
// Created by Kevin Yeung and Alex Cepeda, 10/1/2018

//Creates a square object
var squa = {
  x: 100, //sets the x-coordinate
  y: 200, //sets the y-coordinate
  speedX: 3, //sets the speed of the x-coordinate
  speedY: 3, //sets the speed of the y-coordinate
  sze: 50, //sets the size of the square
  rad: 25, //sets the size of the radius of the square
  r: 255, //sets the red value of the color
  b: 255, //blue value
  g: 255 //green value
}

//Creates a circle object
var circ = {
  x: squa.x, //sets the x-coordinate of the circle
  y: squa.y, //sets the y-coordinate of the circle
  speedX: squa.speedX, //sets the speed of the x-coordinate
  speedY: squa.speedY, //sets the speed of the x-coordinate
  sze: squa.sze, //sets the size of the circle
  rad: (squa.sze / 2), //sets the radius
  r: 0, //sets the red value of the color
  b: 0, //blue value
  g: 0 //green value
}

var canvasX = 600; //sets the width of the canvas
var canvasY = 400; //sets the height of the canvas
var isCircle = false; //sets the initial value of isCircle

//draws a square onto the canvas
function createSquare() {
  fill(squa.r, squa.b, squa.g); //sets the color
  rectMode(CENTER); //changes the way it's drawn to more akin to a circle
  rect(squa.x, squa.y, squa.sze, squa.sze); //creates the rectangle using the object's attributes

  squa.x += squa.speedX; //updates the x-coordinate with the speed
  squa.y -= squa.speedY; //updates the y-coordinate with the speed

  circ.x = squa.x; //matches the circle's x-value with the rectangle's
  circ.y = squa.y; //matches the circle's x-value with the rectangle's

  //if statements to decide if the edge of the rectangle touches the edge of the canvas
  if ((squa.x + squa.rad) > width || (squa.x - squa.rad) < 0) {
    squa.speedX *= -1; //reverses direction
    isCircle = true; //changes isCircle to true so it can change shape
  }

  if ((squa.y + squa.rad) > height || (squa.y - squa.rad) < 0) {
    squa.speedY *= -1; //reverses direction
    isCircle = true; //changes isCircle to true so it can change shape
  }
}

//draws a circle onto the canvas
function createCircle() {
  fill(circ.r, circ.b, circ.g); //sets the color
  ellipse(circ.x, circ.y, circ.sze, circ.sze); //draws the circle

  circ.x += circ.speedX; //updates the x-coordinate with the speed
  circ.y -= circ.speedY; //updates the y-coordinate with the speed

  squa.x = circ.x; //sets the square's x-coordinate with the circle's
  squa.y = circ.y; //sets the square's y-coordinate with the circle's

  //if statements to decide if the edge of the circle touches the edge of the canvaas
  if ((circ.x + circ.rad) > width || (circ.x - circ.rad) < 0) {
    circ.speedX *= -1; //reverses direction
    isCircle = false; //sets isCircle to false
  }

  if ((circ.y + circ.rad) > height || (circ.y - circ.rad) < 0) {
    circ.speedY *= -1; //reverse direction
    isCircle = false; //sets isCircle to false
  }
}

function setup() {
  createCanvas(canvasX, canvasY); //creates the canvas
}

function draw() {
  background(125); //sets the background

  if (!isCircle) { //if isCircle is false 
    createSquare(); //creates a circle
  } else { //if isCircle is true
    createCircle(); //create a circle
  }
}