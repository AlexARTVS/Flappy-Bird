


function Pipe(x){
    this.dividerPosition = random(150, window.innerHeight-150);
    this.dividerHeight = 150;

    this.w = pipeWidth;
    this.x = x;

    this.y1 = 0;
    this.h1 = this.dividerPosition - this.dividerHeight/2;

    this.y2 = this.dividerPosition + this.dividerHeight/2;
    this.h2 = window.innerHeight/1.1 - this.y2;

    //if(this.h2 > (window.innerHeight/1.1) - 60) { this.h2 = window.innerHeight/1.1 - 80; }

    this.alreadyPassed = false;

    this.update = function(){
        this.checkCollision();
        this.checkPassed();

        this.x -= 2;
    }

    this.draw = function(){
        image(pipeimg1, this.x, this.y1, this.w, this.h1);
        image(pipeimg2, this.x, this.y2, this.w, this.h2);
        image(pipeendimg1, this.x-5, this.y2, this.w+10);
        image(pipeendimg2, this.x-5, this.h1, this.w+10);
        //rect(this.x, this.y1, this.w, this.h1);
        //rect(this.x, this.y2, this.w, this.h2);
    }


    this.checkCollision = function(){
        //p5.prototype.collideRectCircle = function (rx, ry, rw, rh, cx, cy, diameter) {
        var collision1 = collideRectCircle(this.x, this.y1+15, this.w, this.h1, vogel.x, vogel.y, vogel.radius*3);
        var collision2 = collideRectCircle(this.x, this.y2+15, this.w, this.h2, vogel.x, vogel.y, vogel.radius*3);

        if(collision1 || collision2){
            playerDied = true;
            s3.play();
        }
    }

    this.checkPassed = function(){
        if(this.x + this.w < vogel.x){
            if(!this.alreadyPassed){
                pipePassedCounter++;
                newpipescore++;
                if(newpipescore > pipeBestScore) { pipeBestScore = newpipescore; }
                this.alreadyPassed = true;
                s2.play();
            }
        }
    }
}
