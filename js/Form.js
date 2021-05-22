class Form{

    constructor(){

    }

    display(){

        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(530,0);

        var input = createInput("Name");
        input.position(550, 200);

        var button = createButton("Play");
        button.position(600, 300);

        var greeting = createElement('h2');


        button.mousePressed(function(){

            input.hide();
            button.hide();

            var name = input.value();

            playerCount+=1;
            player.updateCount(playerCount);

            player.update(name);

            greeting.html("Welcome "+ name);
            greeting.position(550, 200);

        })
    }
}