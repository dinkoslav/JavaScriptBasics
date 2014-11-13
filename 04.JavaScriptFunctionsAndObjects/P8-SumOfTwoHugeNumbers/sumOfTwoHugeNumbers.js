function sumTwoHugeNumbers(value){
    if(value[0].length > value[1].length){
        var finalSum = sumNumbers(value[0],  value[1]);
        //console.log(finalSum);
    }
    else{
        var finalSum = sumNumbers(value[1], value[0]);
        //console.log(finalSum);
    }

    function sumNumbers(num1, num2){
        var sum = "";
        var carry = false;
        for(var i = 0; i< num2.length; i++){
            var digitSum = (parseInt(num1[num1.length-1-i]) + parseInt(num2[num2.length-1-i]));
            if(carry){
                digitSum++;
            }
            if(digitSum<10){
                sum = sum.concat(digitSum.toString());
                carry = false;
            }
            else{
                sum = sum.concat((digitSum.toString())[1]);
                carry = true;
            }
        }
        var reverse = sum.split("").reverse().join("");
        if(num1.length == num2.length){
            if(carry){
                sum = '1'+reverse;
            }
            else{
                sum = reverse;
            }
        }
        else {
            if(carry){
                sum = num1.slice(0,num1.length-num2.length-1).concat((parseInt(num1[num1.length-num2.length-1])+1).toString()).concat(reverse);
            }
            else{
                sum = num1.slice(0,num1.length-num2.length).concat(reverse);
            }
        }
        console.log(sum);
    }
}

sumTwoHugeNumbers(['155', '65']);
sumTwoHugeNumbers(['123456789', '123456789']);
sumTwoHugeNumbers(['887987345974539','4582796427862587']);
sumTwoHugeNumbers(['347135713985789531798031509832579382573195807', '817651358763158761358796358971685973163314321']);

// в отговорите на домашните има грешка и последното число което се получава не е 164787072748948293156827868804265355736510128,
// а е 1164787072748948293156827868804265355736510128