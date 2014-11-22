function daggersAndSwords(arr){
    var blades = [];
    for(var i in arr){
        blades[i] = parseInt(arr[i]);
    }
    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');

    for (var i = 0; i < blades.length; i++) {
        var type = 'dagger';
        if(blades[i] > 10){
            if(blades[i] > 40){
                type = 'sword';
            }
            switch (blades[i]%5){
                case 0:
                    console.log('<tr><td>' + blades[i] + '</td><td>' + type + '</td><td>*rap-poker</td></tr>');
                    break;
                case 1:
                    console.log('<tr><td>' + blades[i] + '</td><td>' + type + '</td><td>blade</td></tr>');
                    break;
                case 2:
                    console.log('<tr><td>' + blades[i] + '</td><td>' + type + '</td><td>quite a blade</td></tr>');
                    break;
                case 3:
                    console.log('<tr><td>' + blades[i] + '</td><td>' + type + '</td><td>pants-scraper</td></tr>');
                    break;
                case 4:
                    console.log('<tr><td>' + blades[i] + '</td><td>' + type + '</td><td>frog-butcher</td></tr>');
                    break;
            }
        }
    }

    console.log('</tbody>');
    console.log('</table>');
}

daggersAndSwords(['17.8', '19.4', '13', '55.8', '126.96541651', '3']);