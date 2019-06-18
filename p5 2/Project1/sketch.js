// for() loop Projects

//  Getting more out of For Loop

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB);
    // smooth();
}

function draw(){
    noFill();
    strokeWeight(.25);
    stroke(255, 100);

    for (i = 0;i < 200; i+=1) {
    //   ellipse(100 + i*3, 100 + i*2, 100+i*3, 100-i);
      ellipse(width/2 + i, height/2-i, 100+i*5, 100-i*5);
    }
}