function reverseWordsInString(str){
    var elements = str.split(" ");
    var reversed = [];
    for(var i = 0; i < elements.length; i++){
        var reverse = elements[i].split("").reverse().join("");
        reversed.push(reverse);
    }
    var reversedStr = reversed.join(" ");
    console.log(reversedStr);
}

reverseWordsInString("Hello, how are you.");
reverseWordsInString("Life is pretty good, isn’t it?");