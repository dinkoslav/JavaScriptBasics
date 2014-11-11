/**
 * Created by Imakandy on 10.11.2014 г..
 */
function findPalindromes(str){
    var elements = str.split(" ");
    for(i=0; i<elements.length;i++){
        var clean = elements[i].toLowerCase().split(".").join("");
        var clean = clean.toLowerCase().split(",").join("");
        var reverse = clean.toLowerCase().split("").reverse().join("");
        if(clean == reverse){
            console.log(clean);
        }
    }
}

findPalindromes('There is a man, his name was Bob.');