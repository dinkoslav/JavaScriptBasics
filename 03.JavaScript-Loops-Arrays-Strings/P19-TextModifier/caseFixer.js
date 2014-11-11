/**
 * Created by Imakandy on 11.11.2014 г..
 */
function fixCasing(str){
    var mixcase = str.match(/<mixcase>\w+(\W)?\w+<\/mixcase>/g);
    var upcase = str.match(/<upcase>\w+(\W)?\w+<\/upcase>/g);
    var lowcase = str.match(/<lowcase>\w+(\W)?\w+<\/lowcase>/g);
    var mixcaseText = [];
    var upcaseText = [];
    var lowcaseText = [];
    var finalText = str;

    for(var element in upcase){
        var text = upcase[element].slice(8, upcase[element].indexOf("<\/upcase>"));
        upcaseText.push(text.toUpperCase());
    }
    for(var element in lowcase){
        var text = lowcase[element].slice(9, lowcase[element].indexOf("<\/lowcase>"));
        lowcaseText.push(text.toLowerCase());
    }
    for(var element in mixcase){
        var text = mixcase[element].slice(9, mixcase[element].indexOf("<\/mixcase>"));
        var mixText = "";
        for(var letter in text){
            if(Math.floor((Math.random() * 2) + 1) == 1){
                mixText = mixText + text[letter].toUpperCase();
            }
            else{
                mixText = mixText + text[letter].toLowerCase();
            }
        }
        mixcaseText.push(mixText);
    }
    for(i = 0; i<mixcase.length; i++){
        var temp = finalText.slice(0,finalText.indexOf(mixcase[i])).concat(mixcaseText[i]).concat(finalText.slice(finalText.indexOf(mixcase[i])+(mixcase[i].length)));
        finalText = temp;
    }
    for(i = 0; i<upcase.length; i++){
        var temp = finalText.slice(0,finalText.indexOf(upcase[i])).concat(upcaseText[i]).concat(finalText.slice(finalText.indexOf(upcase[i])+(upcase[i].length)));
        finalText = temp;
    }
    for(i = 0; i<lowcase.length; i++){
        var temp = finalText.slice(0,finalText.indexOf(lowcase[i])).concat(lowcaseText[i]).concat(finalText.slice(finalText.indexOf(lowcase[i])+(lowcase[i].length)));
        finalText = temp;
    }
    console.log(finalText);

}

fixCasing("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.");