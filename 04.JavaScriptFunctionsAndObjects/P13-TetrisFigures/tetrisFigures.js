function tetrisFigures(arr){
    var elements = {"I":0,"L":0,"J":0,"O":0,"Z":0,"S":0,"T":0};

    // check for I
    for(var i = 0; i < arr.length -3; i++){
        for(var pos = 0; pos< arr[i].length;pos++){
            if(arr[i][pos] == "o" && arr[i+1][pos] == "o" && arr[i+2][pos] == "o" && arr[i+3][pos] == "o"){
                elements.I++;
            }
        }
    }

    // check for L
    for(var l = 0; l < arr.length -2; l++){
        for(var pos = 0; pos< arr[l].length-1;pos++){
            if(arr[l][pos] == "o" && arr[l+1][pos] == "o" && arr[l+2][pos] == "o" && arr[l+2][pos+1] == "o"){
                elements.L++;
            }
        }
    }

    // check for J
    for(var j = 0; j < arr.length -2; j++){
        for(var pos = 1; pos< arr[j].length;pos++){
            if(arr[j][pos] == "o" && arr[j+1][pos] == "o" && arr[j+2][pos] == "o" && arr[j+2][pos-1] == "o"){
                elements.J++;
            }
        }
    }

    // check for O
    for(var o = 0; o < arr.length -1; o++){
        for(var pos = 0; pos< arr[o].length-1;pos++){
            if(arr[o][pos] == "o" && arr[o][pos+1] == "o" && arr[o+1][pos] == "o" && arr[o+1][pos+1] == "o"){
                elements.O++;
            }
        }
    }

    // check for Z
    for(var z = 0; z < arr.length -1; z++){
        for(var pos = 0; pos< arr[z].length-2;pos++){
            if(arr[z][pos] == "o" && arr[z][pos+1] == "o" && arr[z+1][pos+1] == "o" && arr[z+1][pos+2] == "o"){
                elements.Z++;
            }
        }
    }

    // check for S
    for(var s = 0; s < arr.length -1; s++){
        for(var pos = 0; pos< arr[s].length-2;pos++){
            if(arr[s+1][pos] == "o" && arr[s][pos+1] == "o" && arr[s+1][pos+1] == "o" && arr[s][pos+2] == "o"){
                elements.S++;
            }
        }
    }

    // check for T
    for(var t = 0; t < arr.length -1; t++){
        for(var pos = 0; pos< arr[t].length-2;pos++){
            if(arr[t][pos] == "o" && arr[t][pos+1] == "o" && arr[t][pos+2] == "o" && arr[t+1][pos+1] == "o"){
                elements.T++;
            }
        }
    }

    console.log('{"I":' + elements.I + ',"L":' + elements.L + ',"J":' + elements.J + ',"O":' + elements.O + ',"Z":' + elements.Z + ',"S":' + elements.S + ',"T":' + elements.T + '}');

}

tetrisFigures([ '--o--o-',
                '--oo-oo',
                'ooo-oo-',
                '-ooooo-',
                '---oo--']);
tetrisFigures([ '-oo',
                'ooo',
                'ooo']);