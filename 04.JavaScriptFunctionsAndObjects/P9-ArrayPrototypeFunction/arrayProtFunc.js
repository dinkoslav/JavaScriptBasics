Array.prototype.removeItem = function(value){
    var removePos = [];
    console.log(this);
    for(var i in this){
        if(this[i] === value) {
            removePos.unshift(i);
        }
    }

    for(var i = 0; i < removePos.length; i++) {
        this.splice(parseInt(removePos[i]), 1);
    }
    console.log(this);
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.removeItem(1);

var arr = ['hi', 'bye', 'hello' ];
arr.removeItem('bye');
