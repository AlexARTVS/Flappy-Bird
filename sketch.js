var vogel;
var pipes;
var nextPipeX;
var guis;
var playerDied;
var pipePassedCounter;
var bg;
var gimg;
var dimg;
var pipeBestScore = 0;
var newpipescore = 0;
//IMAGINI
var pipeimg1;
var pipeimg2;
var pipeendimg1;
var pipeendimg2;
var bird;
var bup;
var bdown;

//SUNETE
var s1;
var s2;
var s3;

function preload() {
    soundFormats('mp3', 'ogg');
    pipeimg1 = loadImage("images/tube1.png");
    pipeimg2 = loadImage("images/tube2.png");
    pipeendimg1 = loadImage("images/tube1end.png");
    pipeendimg2 = loadImage("images/tube2end.png");
    bird = loadImage("images/1.png");
    dimg = loadImage("images/Death.png");
    bup = loadImage("images/2.png");
    bdown = loadImage("images/3.png");
    s1 = loadSound("sounds/UpSound.mp3");
    s2 = loadSound("sounds/PassSound.mp3");
    s3 = loadSound("sounds/DeathSound.mp3");
    bg = loadImage("images/bg.png");
    gimg = loadImage("images/ground.png");
}

//Constants
var pipeWidth = 100;
var pipeDistance = 300;
var pipeAmount;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    pipeAmount = Math.ceil( width/(pipeWidth+pipeDistance) );

    vogel = new Vogel();
    makeSetup();
}

function makeSetup(){
    nextPipeX = vogel.x + 1500;
    playerDied = false;
    pipePassedCounter = 0;
    newpipescore = 0;

    pipes = [];
    guis = [];
    guis.push( new GuiDeathScreen() );
    guis.push( new GuiHud() );

    for(var i=0;i<pipeAmount;i++){
        pipes[i] = new Pipe( nextPipeX );
        nextPipeX += pipeWidth + pipeDistance;
    }

    fill(0);
    stroke(0);
}

function draw() {
    background(bg);
    image(gimg, window.innerWidth/2000, window.innerHeight/1.1, gimg.width*6);

    vogel.draw();

    for(var i=0;i<pipes.length;i++){
        if(pipes[i]){
            pipes[i].draw();
        }
    }

    drawGuis();

    if(playerDied){
        //image(dimg, window.innerWidth/2.5, window.innerHeight/2.5, img.width, img.height);
        stroke(0,0,0);
        fill(0,0,0);
        return;
    }

    vogel.update();
    for(var i=0;i<pipes.length;i++){
        if(pipes[i]){
            pipes[i].update();
            if(pipes[i].x+pipes[i].w < 0){
                pipes[i] = null;
                pipes.push( new Pipe( pipes[pipes.length-1].x+pipeWidth+pipeDistance ) );
            }
        }
    }
}


function drawGuis(){
    for(var i=0;i<guis.length;i++){
        guis[i].draw();
    }
}


function touchStarted(){
    vogel.jump();

    for(var i=0;i<guis.length;i++){
        guis[i].touchStarted();
    }
}
function touchEnded(){
    for(var i=0;i<guis.length;i++){
        guis[i].touchEnded();
    }
}

// BUG FIX: Touch should not get detected twice.
function mouseClicked(){
    return false;
}
