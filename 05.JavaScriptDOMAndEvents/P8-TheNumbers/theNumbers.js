function theNumbers(arr){
    var str = arr.join("");
    var digits = str.match(/\d+/g);
    var hexNums = [];
    for(var digit in digits){
        hexNums.push(parseInt(digits[digit]).toString(16).toUpperCase());
    }
    for(var num in hexNums){
        if(hexNums[num].length<4){
            var diff = 4-hexNums[num].length;
            for(var i = 0; i< diff;i++){
                hexNums[num] = "0"+ hexNums[num];
            }
        }
        hexNums[num] = "0x"+ hexNums[num];
    }
    var output = hexNums.join("-");
    console.log(output);
}

theNumbers(['5tffwj(//*7837xz','c2---34rlxXP%$”.']);
//theNumbers(['482vMWo(*&^','%$213;k!@41','341((()&^>>','<///]42344p',';e312']);
//theNumbers(['20']);
