/**
 * Created by Imakandy on 7.11.2014 г..
 */
function revealTriangles(input){
    var inputDup = input.slice();
    function setCharAt(str,index) {
        return str.substr(0,index) + '*' + str.substr(index+1);
    }
    if(input.length == 1){
        console.log(input);
    }
    else{
        for(row = input.length-1; row >=1; row--){
            for(charNum = 0; charNum <= input[row].length-3; charNum++){
                if(input[row].charAt(charNum) == input[row].charAt(charNum+1) && input[row].charAt(charNum+1) == input[row].charAt(charNum+2)){
                    if((charNum+1) <= input[row-1].length-1){
                        if(input[row].charAt(charNum) == input[row-1].charAt(charNum+1)){
                            inputDup[row] = setCharAt(inputDup[row],charNum);
                            inputDup[row] = setCharAt(inputDup[row],charNum+1);
                            inputDup[row] = setCharAt(inputDup[row],charNum+2);
                            inputDup[row-1] = setCharAt(inputDup[row-1],charNum+1);
                        }
                    }
                }
            }
        }
    }
    for(i=0; i<inputDup.length; i++){
        console.log(inputDup[i]);
    }
}

revealTriangles(['dffdsgyefg','ffffeyeee','jbfffays','dagfffdsss','dfdfa','dadaaadddf','sdaaaaa','daaaaaaasf']);




