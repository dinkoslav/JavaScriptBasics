function pricesTrends(arr){
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    var prevNum = 0;
    for(var i = 0; i< arr.length;i++){
        var number = Math.round(parseFloat(arr[i])*100)/100;
        var a = number.toFixed(2);
        if(i==0 || parseFloat(a) == parseFloat(prevNum)){
            console.log('<tr><td>' + a + '</td><td><img src="fixed.png"/></td></td>');
        }
        else if(parseFloat(a) > parseFloat(prevNum)){
            console.log('<tr><td>' + a + '</td><td><img src="up.png"/></td></td>');
        }
        else if(parseFloat(a) < parseFloat(prevNum)){
            console.log('<tr><td>' + a + '</td><td><img src="down.png"/></td></td>');
        }
        prevNum = a;
    }

    console.log('</table>');
}

//pricesTrends(['50','60']);
//pricesTrends(['36.333','36.5','37.019','35.4','35','35.001','36.225']);
pricesTrends(['1.33','1.35','2.25','13.00','0.5','0.51','0.5','0.5','0.33','1.05','1.346','20','900','1500.1','1500.10','2000']);
