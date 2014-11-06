function roundNumber(number){
    var roundNum = Math.round(number);   
    var floorNum = Math.floor(number);        
    return {
        roundNum: roundNum,
        floorNum: floorNum
    };  
}
var newNums = roundNumber(22.7);
console.log(newNums.floorNum);
console.log(newNums.roundNum);

var newNums = roundNumber(12.3);
console.log(newNums.floorNum);
console.log(newNums.roundNum);

var newNums = roundNumber(58.7);
console.log(newNums.floorNum);
console.log(newNums.roundNum);