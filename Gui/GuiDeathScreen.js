
GuiDeathScreen.prototype = new Gui();
GuiDeathScreen.prototype.constructor = GuiDeathScreen;
function GuiDeathScreen(){
    var respawnButton = this.addButton(1, width/2-100, height/2 + 20, 200, 50, "Restart!");
    //var gameOverText = this.addText(2, width/3, height/3, {r:255, g:255, b:255}, null 32, true,)
    var gameOverText = this.addText(2, width/2, height/2, {r:255, g:255, b:255}, null, 32, true, function(){
        return "End of the game - Score : " + pipePassedCounter;
        s3.play();
    //oldpipescore = pipeBestScore;

    });

    this.buttonTouchEnded = function(id){
        if(id == respawnButton.id){
            vogel.respawn();
        }
    }

    this.shouldDraw = function(){
        return playerDied;
    }
}
