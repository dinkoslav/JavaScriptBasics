/**
 * Created by Imakandy on 9.11.2014 г..
 */
function findMinAndMax(arr){
    var minNum = 0;
    var maxNum = 0;
    for(i=0; i<arr.length; i++){
        if(i==0){
            minNum = arr[i];
            maxNum = arr[i];
        }
        else{
            if(arr[i]<minNum){
                minNum = arr[i];
            }
            else if(arr[i]>maxNum){
                maxNum = arr[i];
            }
        }
    }
    console.log("Min -> " + minNum);
    console.log("Max -> " + maxNum);
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);