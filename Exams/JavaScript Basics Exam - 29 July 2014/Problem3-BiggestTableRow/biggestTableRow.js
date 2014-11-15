function biggestTableRow(arr){
    var biggest = "";
    var biggestSum = -100001;
    var count = 0;
    for(var i = 2; i<arr.length-1;i++){
        var elements = arr[i].split(/[\/<tr>]+[<td>]+[<\/td>]+[<\/tr>]+/g).filter(Boolean);
        var sum = 0;
        var biggestTemp = [];
        for(var j = 1; j < elements.length; j++){
            if(elements[j] != '-'){
                sum = sum + parseFloat(elements[j]);
                biggestTemp.push(elements[j]);
                count++;
            }
        }
        if(sum>biggestSum){
            biggestSum = sum;
            biggest = sum + " = " + biggestTemp.join(" + ");
        }
    }
    if(count != 0){
        console.log(biggest);
    }
    else{
        console.log('no data');
    }
}

biggestTableRow(['<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
'<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
'<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
'<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
'</table>']);

biggestTableRow(['<table>',
    '<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
    '</table>']);

biggestTableRow(['<table>',
    '<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
    '<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>',
    '<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>',
    '</table>']);

biggestTableRow(['<table>',
    '<tr><td>Pleven</td><td>-100</td><td>-200</td><td>-</td></tr>',
    '<tr><td>Varna</td><td>-100</td><td>-</td><td>-300</td></tr>',
    '<tr><td>Rousse</td><td>-</td><td>-200</td><td>-100</td></tr>',
    '</table>']);

biggestTableRow(['<table>',
    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Yambol</td><td>-</td><td>-</td><td>-</td></tr>',
    '<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
    '<tr><td>Sliven</td><td>-</td><td>-</td><td>-</td></tr>',
    '<tr><td>Kaspichan</td><td>-</td><td>-</td><td>-</td></tr>',
    '</table>']);
