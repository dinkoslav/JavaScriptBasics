/**
 * Created by Imakandy on 10.11.2014 г..
 */
function findMaxSequence(arr){
    var tempSeq = [];
    var maxSeq = [];
    for(i=0;i<arr.length;i++){
        if(i==0){
            tempSeq.push(arr[i]);
        }
        else{
            if(arr[i] > arr[i-1]){
                tempSeq.push(arr[i]);
            }
            else{
                if(tempSeq.length > maxSeq.length){
                    maxSeq = [];
                    maxSeq = tempSeq.slice(0);
                    tempSeq = [];
                    tempSeq.push(arr[i]);
                }
                else{
                    tempSeq = [];
                    tempSeq.push(arr[i]);
                }
            }
        }
    }
    if(tempSeq.length > maxSeq.length){
        maxSeq = [];
        maxSeq = tempSeq.slice(0);
    }
    if(maxSeq.length > 1){
        console.log(maxSeq);
    }
    else{
        console.log('no');
    }
}

//findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
//findMaxSequence([3, 2, 1]);