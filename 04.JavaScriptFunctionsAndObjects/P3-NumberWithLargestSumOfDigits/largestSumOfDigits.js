
function findLargestBySumOfDigits(arr){
    var largest = 0;

    if(allNums(arr)) {
        function sumOfDigits(number) {
            var temp = 0;
            var num = number.toString();
            for (var j in num) {
                temp = temp + parseInt(num[j]);
            }
            return temp;
        }

        for (var i = 0; i < arr.length; i++) {
            var sum = Math.abs(parseInt(sumOfDigits(arr[i])));
            if (sum > largest) {
                largest = arr[i];
            }
        }

        console.log(largest);
    }
    else{
        console.log("undefined");
    }


    function allNums(arr) {

        for(var element in arr){
            if(typeof arr[element] != 'number'){
                return false;
            }
            else if(parseInt(arr[element]) !== arr[element]){
                return false;
            }
        }
        return true;
    }
}

findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 20]);
findLargestBySumOfDigits(['hello']);
findLargestBySumOfDigits([5, 3.3]);