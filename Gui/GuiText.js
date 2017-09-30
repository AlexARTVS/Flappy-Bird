function GuiText(id, x, y, fillColor, strokeColor, size, isCentered, getMessage){
    this.id = id;
    this.x = x;
    this.y = y;
    this.fill = fillColor;
    this.stroke = strokeColor ? strokeColor : fillColor;
    this.size = size;
    this.align = isCentered ? CENTER : LEFT;
    this.getMessage = getMessage;


    this.update = function(){
    }
    this.draw = function(){
        push();
        stroke(this.stroke.r, this.stroke.g, this.stroke.b);
        fill(this.fill.r, this.fill.g, this.fill.b);
        textAlign(this.align);
        textSize(this.size);
        text(this.getMessage(), this.x, this.y);
        pop();
    }
}
