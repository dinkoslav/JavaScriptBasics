function toTheStars(arr){
    var firstSystem = arr[0].split(" ");
    var secondSystem = arr[1].split(" ");
    var thirtSystem = arr[2].split(" ");
    var position = arr[3].split(" ");
    for(var pos in position){
        position[pos] = parseFloat(position[pos]);
    }
    var moves = parseInt(arr[4]);

    for(var move = 0; move <= moves; move++){
        if(isInSys(position[0],position[1],parseFloat(firstSystem[1]), parseFloat(firstSystem[2]))){
            console.log(firstSystem[0].toLowerCase());
        }
        else if(isInSys(position[0],position[1],parseFloat(secondSystem[1]), parseFloat(secondSystem[2]))){
            console.log(secondSystem[0].toLowerCase());
        }
        else if(isInSys(position[0],position[1],parseFloat(thirtSystem[1]), parseFloat(thirtSystem[2]))){
            console.log(thirtSystem[0].toLowerCase());
        }
        else{
            console.log("space");
        }
        position[1]++;
    }


    function isInSys(ShipX, ShipY, SysX, SysY) {
        if(ShipX >= SysX-1 && ShipX <= SysX+1 && ShipY <= SysY+1 && ShipY >= SysY-1){
            return true;
        }
    }
}

toTheStars(['Sirius 3 7',
            'Alpha-Centauri 7 5',
            'Gamma-Cygni 10 10',
            '8 1',
            '6']);

toTheStars(['Terra-Nova 16 2',
            'Perseus 2.6 4.8',
            'Virgo 1.6 7',
            '2 5',
            '4']);