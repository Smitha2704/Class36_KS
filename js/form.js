class Form{
    constructor(){

    }

    display(){
        // Title, inputbox, button, greeting

        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(620,0);

        var input = createInput("Name");
        var button = createButton("Play");

        input.position(610, 150);
        button.position(850,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            var greeting = createElement('h3');
            greeting.html("Hello "+name);
            greeting.position(610, 150)
        })


    }
}