function studentsCoursesGradesVisits(arr){
    var statistic = {};
    for(var row = 0; row<arr.length; row++){
        var elements = splitElements(arr, row);
        if(!statistic[elements[1]]){
            var avgGrade = 0;
            var avgVisits = 0;
            var count = 0;
            statistic[elements[1]] = { "avgGrade": 0,"avgVisits": 0,"students":[]};
            for(var j = 0; j<arr.length;j++){
                var secondElements = splitElements(arr, j);
                if(secondElements[1] == elements[1]){
                    count++;
                    avgGrade = avgGrade + parseFloat(secondElements[2]);
                    avgVisits = avgVisits + parseFloat(secondElements[3]);
                    if(statistic[secondElements[1]].students.indexOf(secondElements[0]) == -1){
                        statistic[secondElements[1]].students.push(secondElements[0]);
                    }
                }
            }
            avgGrade =  (Math.round((parseFloat(avgGrade)/count)*100)/100).toFixed(2);
            avgVisits =  (Math.round((parseFloat(avgVisits)/count)*100)/100);
            statistic[elements[1]].avgGrade = parseFloat(avgGrade);
            statistic[elements[1]].avgVisits = parseFloat(avgVisits);
        }
        for(var key in statistic){
            statistic[key].students.sort();
        }
    }

    statistic = sortObjectProperties(statistic);

    console.log(JSON.stringify(statistic));

    
    function splitElements(array, row){
        var parts = array[row].split("|");
        for(var i in parts){
            parts[i] = parts[i].trim();
        }
        return parts;
    }

    function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
}

//studentsCoursesGradesVisits([   'Peter Nikolov | PHP  | 5.50 | 8',
//                                'Maria Ivanova | Java | 5.83 | 7',
//                                'Ivan Petrov   | PHP  | 3.00 | 2',
//                                'Ivan Petrov   | C#   | 3.00 | 2',
//                                'Peter Nikolov | C#   | 5.50 | 8',
//                                'Maria Ivanova | C#   | 5.83 | 7',
//                                'Ivan Petrov   | C#   | 4.12 | 5',
//                                'Ivan Petrov   | PHP  | 3.10 | 2',
//                                'Peter Nikolov | Java | 6.00 | 9']);

studentsCoursesGradesVisits([   'Milen Georgiev|PHP|2.02|2',
                                'Ivan Petrov | C# Basics | 3.20 | 22',
                                'Peter Nikolov | C# | 5.522 | 18',
                                'Maria Kirova | C# Basics | 5.40 | 4.5',
                                'Stanislav Peev | C# | 4.012 | 15',
                                'Ivan Petrov |    PHP Basics     |     5.120 |6',
                                'Ivan Goranov | SQL | 5.926 | 12',
                                'Todor Kirov | Databases | 5.50 |0.0000',
                                'Maria Ivanova | Java | 5.83 | 37',
                                'Milena Ivanova |    C# |   1.823 | 4.5',
                                'Stanislav Peev   |    C#|   4.122    |    15',
                                'Kiril Petrov |PHP| 5.10 | 6',
                                'Ivan Petrov|SQL|5.926|3',
                                'Peter Nikolov   |    Java  |   5.9996    |    9',
                                'Stefan Nikolov | Java | 4.00 | 9.5',
                                'Ivan Goranov | SQL | 5.926 | 12.5',
                                'Todor Kirov | Databases | 5.150 |0.0000',
                                'Kiril Ivanov | Java | 5.083 | 327',
                                'Diana Ivanova |    C# |   1.823 | 4',
                                'Stanislav Peev   |    C#|   4.122    |    15',
                                'Kiril Petrov |PHP| 5.10 | 6']);