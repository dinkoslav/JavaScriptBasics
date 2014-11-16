function tetris(){
    //define table array
    var tableOutside = {};
    var tableInside = {};
    for (var i = 0; i < 4; i++) {
        tableOutside[i] = new Array(10);
    }
    for (var i = 0; i < 15; i++) {
        tableInside[i] = new Array(10);
    }
    var figures = ['I', 'S', 'Z', 'O', 'L', 'J', 'T'];


    var currentForm = randomFigure();
    placeOutside(currentForm);

    function placeOutside(Figure){
            var rowOutside = 4;
            var colOutside = 4;
            switch (Figure){
                case 'I':
                    for (var i = 0; i < 4; i++) {
                        var rowPos = "up-outside-"+(rowOutside-i);
                        document.getElementById(rowPos.toString()).children[colOutside].style.backgroundColor = "red";
                    };
                    break;
                case 'S':
                    var rowPos = ("up-outside-"+(rowOutside));
                    document.getElementById(("up-outside-"+(rowOutside)).toString()).children[colOutside].style.backgroundColor = "blue";
                    document.getElementById(("up-outside-"+(rowOutside)).toString()).children[colOutside-1].style.backgroundColor = "blue";
                    document.getElementById(("up-outside-"+(rowOutside-1)).toString()).children[colOutside].style.backgroundColor = "blue";
                    document.getElementById(("up-outside-"+(rowOutside-1)).toString()).children[colOutside+1].style.backgroundColor = "blue";
                    break;
                case 'Z':
                    document.getElementById(("up-outside-"+(rowOutside)).toString()).children[colOutside].style.backgroundColor = "green";
                    document.getElementById(("up-outside-"+(rowOutside)).toString()).children[colOutside+1].style.backgroundColor = "green";
                    document.getElementById(("up-outside-"+(rowOutside-1)).toString()).children[colOutside].style.backgroundColor = "green";
                    document.getElementById(("up-outside-"+(rowOutside-1)).toString()).children[colOutside-1].style.backgroundColor = "green";
                    break;
                case 'O':
                    document.getElementById(("up-outside-"+(rowOutside)).toString()).children[colOutside].style.backgroundColor = "yellow";
                    document.getElementById(("up-outside-"+(rowOutside)).toString()).children[colOutside+1].style.backgroundColor = "yellow";
                    document.getElementById(("up-outside-"+(rowOutside-1)).toString()).children[colOutside].style.backgroundColor = "yellow";
                    document.getElementById(("up-outside-"+(rowOutside-1)).toString()).children[colOutside+1].style.backgroundColor = "yellow";
                    break;
                case 'L':
                    document.getElementById(("up-outside-"+(rowOutside)).toString()).children[colOutside].style.backgroundColor = "purple";
                    document.getElementById(("up-outside-"+(rowOutside)).toString()).children[colOutside+1].style.backgroundColor = "purple";
                    document.getElementById(("up-outside-"+(rowOutside-1)).toString()).children[colOutside].style.backgroundColor = "purple";
                    document.getElementById(("up-outside-"+(rowOutside-2)).toString()).children[colOutside].style.backgroundColor = "purple";
                    break;
                case 'J':
                    document.getElementById(("up-outside-"+(rowOutside)).toString()).children[colOutside].style.backgroundColor = "cyan";
                    document.getElementById(("up-outside-"+(rowOutside)).toString()).children[colOutside-1].style.backgroundColor = "cyan";
                    document.getElementById(("up-outside-"+(rowOutside-1)).toString()).children[colOutside].style.backgroundColor = "cyan";
                    document.getElementById(("up-outside-"+(rowOutside-2)).toString()).children[colOutside].style.backgroundColor = "cyan";
                    break;
                case 'T':
                    document.getElementById(("up-outside-"+(rowOutside)).toString()).children[colOutside].style.backgroundColor = "brown";
                    document.getElementById(("up-outside-"+(rowOutside-1)).toString()).children[colOutside-1].style.backgroundColor = "brown";
                    document.getElementById(("up-outside-"+(rowOutside-1)).toString()).children[colOutside].style.backgroundColor = "brown";
                    document.getElementById(("up-outside-"+(rowOutside-1)).toString()).children[colOutside+1].style.backgroundColor = "brown";
                    break;
                default:
                    for (var i = 0; i < 4; i++) {
                        var rowPos = "up-outside-"+(rowOutside-i);
                        document.getElementById(rowPos.toString()).children[colOutside].style.backgroundColor = "red";
                    };
                    break;
            }
    }
    function randomFigure(){
        return figures[Math.round(Math.random()*6)];
    }
}