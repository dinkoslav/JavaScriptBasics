/**
 * Created by Imakandy on 10.11.2014 г..
 */
function findMostFreqWord(str){
    var elements = str.match(/\S+/g);
    var arr = {};
    var bigValue = 0;
    for(i=0; i<elements.length ; i++){
        var word = elements[i].toLowerCase();
        var word = word.split(",").join("");
        var word = word.split(".").join("");
        if(!arr[word]){
            arr[word] = 1;
        }
        else{
            arr[word] += 1;
        }
    }
    for(var key in arr){
        if(arr[key] > bigValue){
            bigValue = arr[key];
        }
    }
    for(var key in arr){
        if(arr[key] == bigValue){
            console.log(key + " -> " + bigValue + " times");
        }
    }


}

//findMostFreqWord('in the middle of the night');
//findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');