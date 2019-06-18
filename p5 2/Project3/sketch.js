// for() loop Projects

// Rotate() function with random element


var r = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    smooth();
    noStroke();
}

function draw(){
    background(random(255),random(255),random(255));
    fill(random(255),random(255),random(255));
    translate(width/2, height/2);
    rotate(r);
    var circle_size = random(100);
    ellipse(100 + r, 10, circle_size, circle_size);
    r = r + 0.5;
}