/**
 * Created by Imakandy on 4.11.2014 г..
 */

function calcCircleArea(r){
    return Math.PI * r * r;
}
document.getElementById("result").innerHTML = "<p>r = 7; area = " + calcCircleArea(7)+ "</p></br>" +
                                                "<p>r = 1.5; area = " + calcCircleArea(1.5)+ "</p></br>" +
                                                "<p>r = 20; area = " + calcCircleArea(20)+ "</p>";