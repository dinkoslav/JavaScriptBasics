function keepTheChange(arr){
    switch (arr[1]){
        case 'happy':
            var tip = parseFloat(arr[0])/10;
            console.log(tip.toFixed(2));
            break;
        case 'married':
            var tip = (parseFloat(arr[0])*0.05)/100;
            console.log(tip.toFixed(2));
            break;
        case 'drunk':
            var tip = ((parseFloat(arr[0]) *15)/100);
            tip = Math.pow(tip, tip.toString().charAt(0));
            console.log(tip.toFixed(2));
            break;
        default :
            var tip = (parseFloat(arr[0])*5)/100;
            console.log(tip.toFixed(2));
            break;
    }
}

keepTheChange(['120.44','happy']);
keepTheChange(['1230.83','drunk']);
keepTheChange(['716.00','bored']);
keepTheChange(['9999.13','drunk']);
