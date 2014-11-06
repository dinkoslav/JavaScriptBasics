/**
 * Created by Imakandy on 6.11.2014 г.. !!! 5-9+158/9*12596-1
 */
function evaluation(){
    var inputString = document.getElementById("inputText");
    var cleanString = inputString.value.replace(/[A-Za-z]/, "");
    var outputNum = eval(cleanString);
    document.getElementById('outputText').innerHTML = outputNum;
}