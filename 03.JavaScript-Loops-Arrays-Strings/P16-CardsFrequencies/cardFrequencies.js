/**
 * Created by Imakandy on 11.11.2014 г..
 */
function findCardFrequency(str){
    var elements = str.match(/[A-Z0-9]+/g);
    var tokens = {};
    var order = [];
    for(var i in elements){
        var temp = elements[i];
        if(!tokens[temp]){
            tokens[temp] = 1;
            order.push(temp);
        }
        else{
            tokens[temp] += 1;
        }
    }
    for(var key in order){
        var result = Math.round((tokens[order[key]]*100)/elements.length*100)/100;
        console.log(order[key]+ " -> " + result + "%");
    }
}

//findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
//findCardFrequency('10♣ 10♥');