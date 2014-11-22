function xRemoval(arr){
    var currentRow = [];
    var secondRow = [];
    var thirdRow = [];
    if(arr.length < 3){
        for(var i in arr){
            console.log(arr[i]);
        }
    }
    else{
        for(var i = 0; i<arr.length-2; i++){
            currentRow = secondRow.slice(0);
            secondRow = thirdRow.slice(0);
            thirdRow = [];
            var row = arr[i].toLowerCase();
            var nextRow = arr[i+1].toLowerCase();
            var nextNextRow = arr[i+2].toLowerCase();
            for (var j = 0; j < row.length-2; j++) {
                if(row[j] == row[j+2] && row[j] == nextRow[j+1] && row[j] == nextNextRow[j] && row[j] == nextNextRow[j+2]){
                    if(currentRow.indexOf(j) == -1){
                        currentRow.push(j);
                    }
                    if(currentRow.indexOf(j+2) == -1){
                        currentRow.push(j+2);
                    }
                    if(secondRow.indexOf(j+1) == -1){
                        secondRow.push(j+1);
                    }
                    if(thirdRow.indexOf(j) == -1){
                        thirdRow.push(j);
                    }
                    if(thirdRow.indexOf(j+2) == -1){
                        thirdRow.push(j+2);
                    }
                }
            }
            var str = cleanStr(arr[i],currentRow);
            console.log(str);
        }
    }
    console.log(cleanStr(arr[arr.length-2], secondRow));
    console.log(cleanStr(arr[arr.length-1], thirdRow));

    function cleanStr(row,currentRow){
        var str = row;
        var sortedNums = currentRow.sort(function(a,b) { return a - b; });
        for( var i = currentRow.length-1; i >=0; i--){
            var str = str.slice(0, currentRow[i]) + str.slice(currentRow[i]+1);
        }
        return str;
    }
}

xRemoval([  'abnbjs',
            'xoBab',
            'Abmbh',
            'aabab',
            'ababvvvv']);

xRemoval([  '8888888',
            '08*8*80',
            '808*888',
            '0**8*8?']);

xRemoval([  '^u^',
            'j^l^a',
            '^w^WoWl',
            'adw1w6',
            '(WdWoWgPoop)'])

xRemoval([  'puoUdai',
            'miU',
            'ausupirina',
            '8n8i8',
            'm8o8a',
            '8l8o860',
            'M8i8',
            '8e8!8?!'])