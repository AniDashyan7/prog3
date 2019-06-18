// Lesson 1

// Introduction to Processing

// // creating random horizontal lines

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(12);
// }

// function draw() {
//   background(0);
//   var lineY = random(height);
//   // using a for loop to create multiple lines

// for (i = 0; i <10; i++) {
//   strokeWeight(random(400));
//   stroke(random(200),random(50,150));
//   line(0,lineY, width,lineY);
//   }
// }

// function mousePressed() {
// noLoop();
// }

// function mouseReleased() {
// loop();
// }

// Lesson 2

// Bonus Challange 1


// var x = 0;
// var y = 0;
// var add = 100;

// function setup(){
//   createCanvas(windowWidth,windowHeight);
// }

// function draw(){
  
// strokeWeight(50);
// strokeCap(SQUARE);
// line(width/2,y,width,y);

// for(var i = 0; i < 6;i++){
//   line(width/2,y+add*i,width,y+add*i);
// }

// line(width/2,height/2,width/2,height);  

// for(var i = 0; i < 11;i++){
//   line(width/2+add*i,height/2,width/2+add*i,height);
// }


// line(x,y,width/2,height);

// for(var i = 1; i < 11;i++){
//   line(x,y-add*i,width/2,height-add*i);
// }

// line(-width,height,width/2,height/2); 

// }

var drop = [];

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(100);
}