/**
 * Created by Imakandy on 9.11.2014 г..
 */
function printNumbers(numbers){
    var nums;
    for(i=1; i<=numbers;i++){
        if((i%4 !=0)&&(i%5 !=0)){
            if(nums != null){
                nums = nums + ', ' + i;
            }
            else{
                nums =  i;
            }
        }
    }
    if(nums == undefined){
        console.log('no');
    }
    else{
        console.log(nums);
    }

}

printNumbers(20);
printNumbers(-5);
printNumbers(13);