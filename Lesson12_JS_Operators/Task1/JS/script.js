"use strict";

/* Написати оператор if..else який примає значення з prompt і виводить в консоль: 
1, якщо значення більше нуля; -1, якщо значення менше нуля; 0, якщо значення дорівнює нулю.*/
var result = prompt("Input your digit", "0");
var output;
if (result > 0) {
    output = "1";
} else if (result < 0) {
    output = "-1";
} else {
    output = "0";
}
console.log(output);

/*2. переписати if..else в ?
var a = 1;
var n;
if(a > 0) { n = true; }
else { n=false; } */
var a = 1;
var n = (a > 0) ? true : false;
console.log (n);


 