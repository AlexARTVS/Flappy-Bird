function Vogel(){
    this.x = 50;
    this.y = 100;
    this.radius = 25;

    this.ySpd = 0;

    this.update = function(){
        this.ySpd += 0.3;
        if(this.y < this.radius && this.ySpd <= 0){
            this.ySpd = 0;
            return;
        }
        this.y += this.ySpd;

        if(this.y+this.radius > window.innerHeight/1.1){
            playerDied = true;
            s3.play();
        }
    }

    this.draw = function(){
        //image(bird, this.x-30, this.y-30, this.radius*3, this.radius*3);
        if(this.ySpd >= -10 && this.ySpd <= 10)
        {
            image(bird, this.x-30, this.y-30, this.radius*3, this.radius*3);
            //s1.play(0,0,0,0,0);
            //s1.pause();
        }
        if(this.ySpd <= -10)
        {
            image(bup, this.x-30, this.y-30, this.radius*3, this.radius*3);
         //   s1.play();
        }
        if(this.ySpd > 10)
        {
            image(bdown, this.x-30, this.y-30, this.radius*3, this.radius*3);
            //s1.stop();
        }
    }


    this.respawn = function(){
        if(playerDied){
            this.y = 200;
            this.ySpd = 0;

            makeSetup();
        }
    }
    this.jump = function(){
        if(this.ySpd > 0){
            this.ySpd = -5;
            s1.play();
        } else {
            this.ySpd -= 5;
        }
    }
}
