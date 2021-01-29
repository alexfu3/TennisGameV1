class Game {
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })

    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player = new Player();

            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }

        player1 = createSprite(displayWidth/2,displayHeight-900);
        player1.addAnimation("playerUp",playerUp);
        player2 = createSprite(displayWidth/2, displayHeight-300);
        player2.addAnimation("playerDown",playerDown);
        //player = [player1,player2];
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            background("orange");
           image(bgImage,0,0,displayWidth,displayHeight);

            for(var plr in allPlayers){
                 var index = 0;
                var x = 200;
                var y = 500;
                index = index + 1;

              //  allPlayers[index-1].x = x;
              //  allPlayers[index-1].y = y;

                if(index === player.index){
                    stroke(10);
                    fill("red");
                    ellipse(x,y,60,60);
                    allPlayers[index-1].shapeColor = "red";
                    camera.position.y = displayWidth/2;
                    camera.position.x = allPlayers[index-1].x;
                }
            }
         }
        if(keyDown(LEFT_ARROW) && player.index!==null){
            player.x = player.x-10;
            player.update();
        }
        if(keyDown(RIGHT_ARROW) && player.index!==null){
            player.x = player.x+10;
            player.update();
        }
        drawSprites();
    }
}
