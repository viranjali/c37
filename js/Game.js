class Game{
constructor(){

}


getState(){

    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState = data.val();
    })
}

update(state){

    database.ref('/').update({
        gameState: state
    });
}

start(){

    if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }

}

play(){

    form.hide();;
    textSize(30);
    text("Game Start", 200, 150);

    Player.getPlayerInfo();

    if(allPlayers !== undefined){

        var y = 160;
        for(var plr in allPlayers){

            if(plr === "player"+player.index){
                fill("red");
            }
            else{
               fill("black");
            }

            y= y + 50;

        textSize(25);
        text(allPlayers[plr].name + ":"+ allPlayers[plr].distance, 200, y)


        }


    }

    if(keyIsDown(UP_ARROW) && player.index !== null){

        player.distance+=10;
        player.update();
    }


}

}