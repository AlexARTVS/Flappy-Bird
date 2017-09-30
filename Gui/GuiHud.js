GuiHud.prototype = new Gui();
GuiHud.prototype.constructor = GuiHud;
function GuiHud(){
    //this.addText = function(id, x, y, fill, stroke, size, message, isCentered){
    var pipePassedText = this.addText(1, 5, 20, {r:255, g:255, b:255}, {r:0, g:0, b:0}, 20, false, function(){
        return "Score:" + pipePassedCounter + "      " + "Best Score:" + pipeBestScore;
    });

    this.shouldDraw = function(){ return true; }
}
