/**
 * Created by Imakandy on 11.11.2014 г..
 */

function sortTable(arr){
    var sorted = {};
    for(var i = 2; i<arr.length-1; i++){
        var elements = arr[i].split(/[\/<tr>]+[<td>]+[<\/td>]+[<\/tr>]+/g);
            sorted[elements[1]] = [elements[2], elements[3]];
    }

    var sortable = [];
    for (var key in sorted){
        sortable.push([key, sorted[key]]);
        sortable.sort(function(a, b) {return a[1][0] - b[1][0]});
    }
    console.log('<table>');
    console.log('<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');
    for(var i = 0; i< sortable.length; i++){
        console.log('<tr><td>' + sortable[i][0] + '</td><td>' + sortable[i][1][0] + '</td><td>' + sortable[i][1][1] + '</td></tr>');
    }
    console.log('</table>');
}

//AVTORSKO RESHENIE, moeto izkarva samo 80/100

//function sortTable(input) {
//    var rows = [];
//    for (var i = 2; i < input.length - 1; i++) {
//        var rowData = input[i];
//        var regex = /<td>.*?<\/td><td>(.*?)<\/td>/g;
//        var match = regex.exec(rowData);
//        var price = Number(match[1]);
//        var row = { price: price, data: rowData };
//        rows.push(row);
//    }
//    rows.sort(function (a, b) {
//        if (a.price != b.price) {
//            return a.price - b.price;
//        } else {
//            return a.data == b.data ? 0 : a.data < b.data ? -1 : 1;
//        }
//    });
//    console.log(input[0]);
//    console.log(input[1]);
//    for (var i = 0; i < rows.length; i++) {
//        console.log(rows[i].data);
//    }
//    console.log(input[input.length - 1]);
//}

//sortTable(['<table>',
//'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
//'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
//'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
//'<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
//'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
//'<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
//'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
//'</table>']);
sortTable(['<table>',
'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
'<tr><td>Ariana Grapefruit 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Coffee Davidoff Black 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.65</td><td>+7</td></tr>',
'<tr><td>Laptop Dell Inspiron 3537a</td><td>1199.0</td><td>+3</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>-10</td></tr>',
'<tr><td>Ariana Radler 1.5 l</td><td>2.79</td><td>+33</td></tr>',
'<tr><td>Coca Cola 12 pieces x 1.5 l</td><td>8.73</td><td>+10</td></tr>',
'<tr><td>Coffee Cup 0.250</td><td>0.02</td><td>0</td></tr>',
'<tr><td>Car BMW i8 (Black)</td><td>203500</td><td>+7</td></tr>',
'<tr><td>Vitamin B5, 350 mg</td><td>16.50</td><td>+3</td></tr>',
'<tr><td>Book \"Eloquent JavaScript\" by M. Haverbeke</td><td>0</td><td>+653</td></tr>',
'<tr><td>Apple iPad mini 128GB</td><td>1199.0</td><td>+5</td></tr>',
'<tr><td>HP ElitePad G1</td><td>1199</td><td>0</td></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
'<tr><td>Laptop Lenovo IdeaPad B7400</td><td>1199.00</td><td>0</td></tr>',
'<tr><td>Laptop ASUS ROG G550JK-CN268D</td><td>1939.00</td><td>+1</td></tr>',
'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'<tr><td>Kamenitza Lemon 1 l</td><td>1.65</td><td>+7</td></tr>',
'<tr><td>Vodka Absolute 1 l</td><td>22.00</td><td>+2</td></tr>',
'<tr><td>Laptop Dell Inspiron 3537b</td><td>1199.0</td><td>+3</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>-10</td></tr>',
'<tr><td>Ariana Radler 1.7 l</td><td>2.79</td><td>+33</td></tr>',
'<tr><td>Coffee Lavazza 250 gr.</td><td>8.73</td><td>+10</td></tr>',
'<tr><td>Coffee Cup 0.200</td><td>0.02</td><td>0</td></tr>',
'<tr><td>Car BMW i8 (Red)</td><td>203500</td><td>+7</td></tr>',
'<tr><td>Vitamin B5, 350 mg (new)</td><td>16.50</td><td>+3</td></tr>',
'<tr><td>Book "Free JavaScript" by Annonymous</td><td>0</td><td>+130</td></tr>',
'<tr><td>Apple iPad mini 16GB MD528HC/A</td><td>529.90</td><td>+5</td></tr>',
'<tr><td>HP ElitePad 1000 G2</td><td>2369.00</td><td>0</td></tr>',
'</table>']);