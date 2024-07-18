let myXPos = 100;
let myYPos = 100;
let marioImage;



function preload() {
    marioImage = loadImage("https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png");
}

function setup() {
    createCanvas(500, 500);
    noStroke();
 
 
    rectMode(CENTER); // p5 use x,y for rect to refer to middle of rectangle not its left corner.
 }
 
 
 function draw() {
    background(0, 20);

    fill(255, 0, 0);
    image(marioImage, myXPos, myYPos, 50, 50);

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {  // built in function + https://www.toptal.com/developers/keycode
        myXPos -= 3;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {  // built in function + https://www.toptal.com/developers/keycode
        myXPos += 3;              // or can do if key === w { y -=1; }
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {  // built in function + https://www.toptal.com/developers/keycode
        myYPos -= 3;
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {  // built in function + https://www.toptal.com/developers/keycode
        myYPos += 3;
    }

 }
 