function vladkosNotebook(arr){
    var notebook = {};
    var notebookClean = {};
    for(var i = 0; i < arr.length; i++){
        var cleanRow = arr[i].split('|');
        if(!notebook[cleanRow[0]]) {
            notebook[cleanRow[0]] = {};
            notebook[cleanRow[0]].age = '';
            notebook[cleanRow[0]].name = '';
            notebook[cleanRow[0]].opponents = [];
            notebook[cleanRow[0]].rank = 0;
            var win = 0;
            var loss = 0;
            for(var row = 0; row<arr.length; row++){
                var cleanInnerRow = arr[row].split('|');
                if(cleanRow[0] == cleanInnerRow[0]){
                    if(cleanInnerRow[1] == 'age'){
                        notebook[cleanInnerRow[0]].age = cleanInnerRow[2];
                    }
                    else if(cleanInnerRow[1] == 'name'){
                        notebook[cleanInnerRow[0]].name = cleanInnerRow[2];
                    }
                    else{
                        notebook[cleanInnerRow[0]].opponents.push(cleanInnerRow[2]);
                        if(cleanInnerRow[1] == 'win'){
                            win = win + 1;
                        }
                        else{
                            loss = loss + 1;
                        }
                    }
                }
            }
            notebook[cleanRow[0]].rank = (parseFloat(win+1)/parseFloat(loss+1)).toFixed(2);
        }
    }

    for(var i in notebook){
        if(notebook[i].age == 0 || notebook[i].name == ''){

        }
        else{
            notebookClean[i] = JSON.parse(JSON.stringify(notebook[i]));
            notebookClean[i].opponents.sort();
        }
    }
    notebookClean = sortObjectProperties(notebookClean);

    function sortObjectProperties(obj) {
            var keysSorted = Object.keys(obj).sort();
            var sortedObj = {};
            for (var i = 0; i < keysSorted.length; i++) {
                var key = keysSorted[i];
                sortedObj[key] = obj[key];
            }
            return sortedObj;
        }

    console.log(JSON.stringify(notebookClean));
}
vladkosNotebook([   'purple|age|99',
                    'red|age|44',
                    'blue|win|pesho',
                    'blue|win|mariya',
                    'purple|loss|Kiko',
                    'purple|loss|Kiko',
                    'purple|loss|Kiko',
                    'purple|loss|Yana',
                    'purple|loss|Yana',
                    'purple|loss|Manov',
                    'purple|loss|Manov',
                    'red|name|gosho',
                    'blue|win|Vladko',
                    'purple|loss|Yana',
                    'purple|name|VladoKaramfilov',
                    'blue|age|21',
                    'blue|loss|Pesho'])
