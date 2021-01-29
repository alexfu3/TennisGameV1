class Form{
    constructor(){
        this.input = createInput("").attribute('placeholder','Enter your name');
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.reset = createButton("Reset");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    
    display(){
        var title = createElement('h2')
        title.html("Tennis Game")
        title.position(displayWidth/2-70, 0);
        
        this.input.position(displayWidth/2-70,displayHeight/2-300);
        this.button.position(displayWidth/2,displayHeight/2-250);
        this.reset.position(displayWidth-120,20);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        });

        // this.reset.mousePressed(()=>{
        //     player.updateCount(0);
        //     game.update(0);
        //     Player.updateCarsAtEnd(0);

        //     database.ref('/').update({
        //         players: null
        //       })
        // })
    }
}