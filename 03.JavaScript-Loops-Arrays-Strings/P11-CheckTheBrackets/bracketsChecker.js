/**
 * Created by Imakandy on 10.11.2014 г..
 */
function checkBrackets(str){
    var elements = str.split(" ");
    var leftBracket = 0;
    var rightBracket = 0;
    for(i=0; i<elements.length; i++){
        if(elements[i] === '('){
            leftBracket++;
        }
        else if(elements[i] === ')' && rightBracket<leftBracket){
            rightBracket++;
        }
        else if(elements[i] === ')' && rightBracket>=leftBracket){
            return console.log('incorrect');
        }
    }
    if(leftBracket == rightBracket){
        console.log('correct');
    }
    else{
        console.log('incorrect');
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets(') ( a + b ');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');