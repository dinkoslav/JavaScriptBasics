function treeHouseCompare(arr){
	var houseArea = (arr[0]*arr[0])+((arr[0]*(arr[0]-1))/2);
	var treeArea = arr[1] + (Math.PI * (arr[1]-1) * (arr[1]-1));
	if(houseArea>treeArea){
		return "house/"+((Math.round(houseArea*100))/100);
	}
	else{
		return "tree/"+((Math.round(treeArea*100))/100);
	}
}

console.log(treeHouseCompare([3, 2]));
console.log(treeHouseCompare([3, 3]));
console.log(treeHouseCompare([4, 5]));