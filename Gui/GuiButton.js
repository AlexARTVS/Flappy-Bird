function GuiButton(id, x, y, w, h, message){
    this.x = x;
    this.y = y;

    this.w = w;
    this.h = h;

    this.message = message;

    this.pressed = false;

    this.update = function(){
    }

    this.draw = function(){
        push();
        if(this.pressed){
            stroke(0, 0, 255);
        } else {
            stroke(0);
        }
        fill(255)
        strokeWeight(2);
        rect(this.x, this.y, this.w, this.h);

        stroke(0);
        fill(0);
        textSize(32);
        textAlign(CENTER);
        text(this.message, this.x+this.w/2, this.y+this.h-this.h/5);
        pop();
    }
}
