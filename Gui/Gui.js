function Gui(){
    this.buttonList = [];
    this.textList = [];

    this.buttonTouchStarted = function(id){}
    this.buttonTouchEnded = function(id){}
    this.shouldDraw = function(){}

    this.draw = function(){
        if(!this.shouldDraw()){
            return;
        }

        for(var i=0;i<this.buttonList.length;i++){
            this.buttonList[i].update();
            this.buttonList[i].draw();
        }
        for(var i=0;i<this.textList.length;i++){
            this.textList[i].update();
            this.textList[i].draw();
        }
    }

    this.addButton = function(id, x, y, w, h, text){
        var button = new GuiButton(id, x, y, w, h, text);
        this.buttonList.push( button );
        return button;
    }

    this.addText = function(id, x, y, fill, stroke, size, message, isCentered){
        var text = new GuiText(id, x, y, fill, stroke, size, message, isCentered);
        this.textList.push( text );
        return text;
    }

    this.touchStarted = function(){
        for(var i=0;i<this.buttonList.length;i++){
            if(mouseX > this.buttonList[i].x && mouseX < this.buttonList[i].x + this.buttonList[i].w // X
                    && mouseY > this.buttonList[i].y && mouseY < this.buttonList[i].y + this.buttonList[i].h){ // Y
                this.buttonList[i].pressed = true;
                this.buttonTouchStarted(this.buttonList[i].id);
            }
        }
    }

    this.touchEnded = function(){
        for(var i=0;i<this.buttonList.length;i++){
            if(mouseX > this.buttonList[i].x && mouseX < this.buttonList[i].x + this.buttonList[i].w // X
                    && mouseY > this.buttonList[i].y && mouseY < this.buttonList[i].y + this.buttonList[i].h){ // Y
                this.buttonTouchEnded(this.buttonList[i].id);
            }
            this.buttonList[i].pressed = false;
        }
    }
}
