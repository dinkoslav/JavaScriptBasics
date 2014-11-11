/**
 * Created by Imakandy on 11.11.2014 г..
 */
function doubleRakiyaNumbers(arr){
    var start = parseInt(arr[0]);
    var end = parseInt(arr[1]);
    console.log('<ul>');
    for(var i=start; i <= end;i++){
        if( i>9 && rakiyaNum(i.toString())){
            console.log("<li><span class='rakiya'>" + i + "</span><a href=\"view.php?id=" + i + ">View</a></li>");
        }
        else{
            console.log("<li><span class='num'>" + i + "</span></li>");
        }
    }
    console.log('</ul>');

    function rakiyaNum(num){
        for(var i=0; i<num.length-1;i++){
            var counter = 0;
            var nums = num[i]+ num[i+1];
            for(var j=i+2; j< num.length-1; j++){
                var temp = num[j]+ num[j+1];
                if(nums == temp){
                    counter++;
                }
                if(counter > 0){
                    return true;
                }
            }
        }
        return false;
    }
}
doubleRakiyaNumbers([5,8]);
doubleRakiyaNumbers([11210,11215]);
doubleRakiyaNumbers([55555,55560]);