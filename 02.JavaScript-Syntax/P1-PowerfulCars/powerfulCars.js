 function convertKWtoHP(number){
	return (Math.round((number*1.341022)*100)/100);
 }
 
 console.log(convertKWtoHP(75));
 console.log(convertKWtoHP(150));
 console.log(convertKWtoHP(1000));