/**
 * Created by Imakandy on 11.11.2014 г..
 */
function stringMatrixRotation(arr){
    var totalRotation = arr[0].slice(7,arr[0].length-1);
    var rotation = totalRotation % 360;
    var longestWordChars = 0;
    var sameLengthWords = [];
    for(var i = 1; i< arr.length; i++){
        if(arr[i].length > longestWordChars){
            longestWordChars = arr[i].length;
        }
    }
    for(var i = 1; i< arr.length; i++){
        if(arr[i].length < longestWordChars){
            var temp = longestWordChars - arr[i].length;
            var word = arr[i];
            for( var j = 0; j < temp; j++){
                word = word.concat(" ");
            }
            sameLengthWords.push(word);
        }
        else{
            sameLengthWords.push(arr[i]);
        }
    }
    if(rotation == "0"){
        for(var i in sameLengthWords){
            console.log(sameLengthWords[i]);
        }
    }
    if(rotation == "180"){
        for(var i = sameLengthWords.length-1; i >=0 ; i-- ){
            var reverse = sameLengthWords[i].split("").reverse().join("");
            console.log(reverse);
        }
    }
    if(rotation == "90"){
        for(var i = 0; i < longestWordChars ; i++ ){
            var temp = "";
            for(var j = 0; j < sameLengthWords.length ; j++ ){
                temp = temp.concat(sameLengthWords[j].substring(i,i+1));
            }
            var reverse = temp.split("").reverse().join("");
            console.log(reverse);
        }
    }
    if(rotation == "270"){
        for(var i = 0; i < longestWordChars ; i++ ){
            var temp = "";
            for(var j = 0; j < sameLengthWords.length ; j++ ){
                var reverse = sameLengthWords[j].split("").reverse().join("");
                temp = temp.concat(reverse.substring(i,i+1));
            }
            console.log(temp);
        }
    }
}

//stringMatrixRotation(['Rotate(90)','hello','softuni','exam']);
//stringMatrixRotation(['Rotate(180)','hello','softuni','exam']);
stringMatrixRotation(['Rotate(270)','hello','softuni','exam']);
//stringMatrixRotation(['Rotate(720)','js','exam']);
//stringMatrixRotation(['Rotate(810)','js','exam']);
//stringMatrixRotation(['Rotate(0)','js','exam']);