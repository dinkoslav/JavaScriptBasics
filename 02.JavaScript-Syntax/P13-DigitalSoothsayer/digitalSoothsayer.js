function soothsayer(numsArr, langsArr, citiesArr, carsArr){
	var rndNum = numsArr[Math.floor((Math.random() * 5) + 1)];
	var rndLang = langsArr[Math.floor((Math.random() * 5) + 1)];
	var rndCity = citiesArr[Math.floor((Math.random() * 5) + 1)];
	var rndCar = carsArr[Math.floor((Math.random() * 5) + 1)];
	return [rndNum, rndLang, rndCity, rndCar];
};
var result = soothsayer([3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'], ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']);
console.log("You will work " + result[0].toString() + " years on " + result[1] + ". You will live in " + result[2] + " and drive " + result[3] + ".");