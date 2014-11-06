 function isPrime(number){
	if(number%2==0 && number>2){
		return false;
	}
	else{
		for(i=3; i<number/2;i++){
			if(number%i == 0){
				return false;
			}
		}
		return true;
	}
 }
 console.log(isPrime(7));
 console.log(isPrime(254));
 console.log(isPrime(587));