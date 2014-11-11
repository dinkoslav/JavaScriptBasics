/**
 * Created by Imakandy on 11.11.2014 г..
 */
function extractContent(str){
    var elements = str.match(/>\w+</g);
    var newStr;
    for(var element in elements){
        var temp = elements[element].match(/\w+/g)
        if(newStr == undefined){
            var newStr = temp;
        }
        else{
            var newStr = newStr + temp;
        }
    }

    console.log(newStr);
}

extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>");