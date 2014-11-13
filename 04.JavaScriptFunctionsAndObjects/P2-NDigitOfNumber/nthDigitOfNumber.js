
function findNthDigit(arr){
    if(arr[1]<0){
        var clearNum = Math.abs(arr[1]).toString().split('.').join("");
    }
    else{
        var clearNum = arr[1].toString().split('.').join("");
    }
    if(clearNum[clearNum.length-arr[0]] != undefined){
        console.log(clearNum[clearNum.length-arr[0]]);
    }
    else{
        console.log("The number doesn’t have " + arr[0] + " digits");
    }

}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);