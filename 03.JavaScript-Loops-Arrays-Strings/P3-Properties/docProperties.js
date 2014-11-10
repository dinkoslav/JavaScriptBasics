/**
 * Created by Imakandy on 9.11.2014 г..
 */
function displayProperties(){
    var arr = Object.getOwnPropertyNames(document);
    arr.sort();
    for(var i=1; i<arr.length; i++){
        console.log(arr[i]);
    }
}
displayProperties();