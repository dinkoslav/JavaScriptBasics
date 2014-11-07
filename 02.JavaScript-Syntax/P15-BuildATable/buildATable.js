function printTableOfNumbers(input){
	var start = parseInt(input[0]);
	var end = parseInt(input[1]);
	console.log('<table>');
	console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
	
	for( currNum=start ; currNum<=end ; currNum++){
		console.log('<tr><td>' + currNum + '</td><td>' + currNum*currNum + '</td><td>' + isFib(currNum) + '</td></tr>');
	}
	function isFib(currNum){
		var fib1 = 1;
		var fib2 = 1;
		var fib3 = 0;
		if(currNum == 1){
			return 'yes';
		}
		else{
			while(fib3<currNum){
				fib3 = fib1 + fib2;
				if(currNum == fib3){
					return 'yes';
				}
				fib1 = fib2;
				fib2 = fib3;
			}
			return 'no';
		}
	}
	
	console.log('</table>');
}
