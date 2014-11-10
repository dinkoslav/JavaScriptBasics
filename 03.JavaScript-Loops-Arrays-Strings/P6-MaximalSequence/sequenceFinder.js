/**
 * Created by Imakandy on 9.11.2014 г..
 */
function findMaxSequence(arr){
    var maxSeqArr = [];
    var longestLength = 0;
    var longestLengthElement;
    var tempLength = 0;
    var tempElement;
    for(i=0; i<arr.length;i++){
        if(i==0){
            tempLength++;
            tempElement = arr[i];
        }
        else{
            if(tempElement === arr[i]){
                tempLength++;
            }
            else{
                if(tempLength>=longestLength){
                    longestLength=tempLength;
                    longestLengthElement = tempElement;
                    tempLength = 1;
                    tempElement = arr[i];
                }
                else{
                    tempLength = 1;
                    tempElement = arr[i];
                }
            }
        }
    }
    if(tempLength>=longestLength){
        longestLength=tempLength;
        longestLengthElement = tempElement;
    }
    for(i=0 ; i<longestLength; i++){
        maxSeqArr[i] = longestLengthElement;
    }
    console.log(maxSeqArr);
}
findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);