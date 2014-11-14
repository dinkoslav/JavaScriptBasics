function CloudManager(arr){
    var cloud = {};
    for(var i = 0; i<arr.length;i++){
        var cleanRow = splitElements(arr, i);
        if(!cloud[cleanRow[1]]){
            cloud[cleanRow[1]] = {};
            cloud[cleanRow[1]].files = [];
            cloud[cleanRow[1]].memory = 0;
            var tempMemory = 0;
            for(var row = 0; row<arr.length; row++){
                var clearInnerRow = splitElements(arr, row);
                if(cleanRow[1] == clearInnerRow[1]){
                    tempMemory = tempMemory + clearInnerRow[2];
                    if(cloud[cleanRow[1]].files.indexOf(clearInnerRow[0]) == -1){
                        cloud[cleanRow[1]].files.push(clearInnerRow[0]);
                    }
                }
            }
            cloud[cleanRow[1]].memory = tempMemory.toFixed(2);
        }
    }

    for(var key in cloud){
        cloud[key].files.sort();
    }

    cloud = sortObjectProperties(cloud);

    console.log(JSON.stringify(cloud));

    function splitElements(array, row){
        var parts = array[row].split(" ");
        for(var i in parts){
            parts[i] = parts[i].trim();
        }
        parts[2]= parseFloat(parts[2].slice(0,parts[2].length-2));
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

CloudManager([ 'sentinel .exe 15MB',
               'zoomIt .msi 3MB',
               'skype .exe 45MB',
               'trojanStopper .bat 23MB',
               'kindleInstaller .exe 120MB',
               'setup .msi 33.4MB',
               'winBlock .bat 1MB']);

//CloudManager([  'eclipse .tar.gz 198.00MB',
//                'uTorrent .gyp 33.02MB',
//                'nodeJS .gyp 14MB',
//                'nakov-naked .jpeg 3MB',
//                'gnuGPL .pdf 5.6MB',
//                'skype .tar.gz 66MB',
//                'selfie .jpeg 7.24MB',
//                'myFiles .tar.gz 783MB']);