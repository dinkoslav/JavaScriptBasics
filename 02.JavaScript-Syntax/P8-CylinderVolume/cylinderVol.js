function calcCylinderVol(arr){
	var cylVol = Math.PI * arr[0] * arr[0] * arr[1];
	return Math.round(cylVol*1000)/1000;
}

console.log(calcCylinderVol([2, 4]));
console.log(calcCylinderVol([5, 8]));
console.log(calcCylinderVol([12, 3]));