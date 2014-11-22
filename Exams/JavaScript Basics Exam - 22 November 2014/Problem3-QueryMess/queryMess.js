function queryMess(arr){
    for(var i = 0; i< arr.length; i++){
        var row = arr[i].split('?');
        var tempObj = {};
        var outputString = '';
        for(var j = 0; j < row.length; j++){
            if(row[j].indexOf("=") != -1){
                var rowElements = row[j].split('&');
                for (var k = 0; k < rowElements.length; k++) {
                    var cleanRow = rowElements[k].split("+").join("");
                    cleanRow = cleanRow.split("%20").join(" ");
                    var elements = rowElements[k].split("=");
                    elements[0] = elements[0].split("+").join("");
                    elements[0] = elements[0].split("%20").join(" ");
                    elements[0] = elements[0].trim();
                    elements[1] = elements[1].split("+").join(" ");
                    elements[1] = elements[1].split("%20").join(" ");
                    var values = elements[1].split(' ').filter(Boolean);
                    var cleanValues = values.join(' ');

                    if(!tempObj[elements[0]]) {
                        tempObj[elements[0]] = [];
                        tempObj[elements[0]].push(cleanValues);
                    }
                    else{
                        tempObj[elements[0]].push(cleanValues);
                    }
                }

            }
        }
        for(var key in tempObj){
            outputString = outputString + key + "=[" + tempObj[key].join(", ") + "]";
        }

        console.log(outputString);
    }
}

queryMess(['login=student&password=student']);
queryMess(['field=value1&field=value2&field=value3',
    'http://example.com/over/there?name=ferret']);
queryMess(['foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php']);
