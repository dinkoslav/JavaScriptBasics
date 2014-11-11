/**
 * Created by Imakandy on 11.11.2014 г..
 */
function replaceATag(str){
    var text = str.slice(str.indexOf("<a "),str.indexOf("</a>")+4);
    var res = text.slice(0,text.indexOf("<a ")).concat("[URL ").concat(text.slice(text.indexOf("<a ")+3));
    var fixed = res.slice(0,res.indexOf("</a>")).concat("[/URL]").concat(res.slice(res.indexOf("</a>")+4));
    var newFixed = fixed.slice(0,fixed.indexOf(">")).concat("]").concat(fixed.slice(fixed.indexOf(">")+1));
    var finalText = str.slice(0,str.indexOf("<a ")).concat(newFixed).concat(str.slice(str.indexOf("</a>")+4));
    console.log(finalText);
}

replaceATag('<ul> \n <li> \n  <a href=http://softuni.bg>SoftUni</a> \n </li> \n</ul>');