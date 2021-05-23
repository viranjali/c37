class Form{

    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
    }

    hide(){

        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){

        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(530,0);

        this.input.position(550, 200);
        this.button.position(600, 300);

        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount+=1;
            player.index = playerCount;
            player.updateCount(player.index);
            player.update();

            this.greeting.html("Welcome "+ player.name);
            this.greeting.position(550, 200);

        })
    }
}