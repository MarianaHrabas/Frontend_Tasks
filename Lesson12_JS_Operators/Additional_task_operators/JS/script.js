"use strict";

/*1. Перевірити чи число знаходиться в діапазоні від 25 до 99 включно (25 і 99 входять в діапазон). 
Число ввести за допомогою prompt. Якщо користувач ввів число не з діапазону - попросити ввести ще 
раз, і так далі. Цикл повинен питати число поки відвідувач не введе число з діапазону, або не 
натисне кнопку Cancel (ESC).*/
var i = 25;
var j = 99;
var input;
do {
    input = prompt("Input you digit in space between " + i + " and " + j + " included.");
    if (input == null) {
        break;
    }
} while (input < i || input > j)


/*2. Переписати код через тернарний оператор
    if(a === b) {
    rezult = "a and b are equal";
     } else if(a > b) {
         rezult = "a is greater";
     } else {
    rezult = "b is greater";
    }*/
var a = parseInt(prompt("Input a digit"));
var b = parseInt(prompt("Input b digit"));
var result = a === b ? "a and b are equal" : a > b ? "a is greater" : "b is greater";
alert(result);

//3. Вивести в консоль всі непарні числа від 20 до 40
for (var i = 20; i <= 40; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

/*4. Написати функцію яка приймає два параметри range(a, b) і виводить непарні числа від a до b. 
Зробити перевірку щоб b було більше a*/
function range(a, b) {
    if (b < a) {
        return;
    }
    for (var i = a; i <= b; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
var k = parseInt(prompt("Input digit a"));
var m = parseInt(prompt("Input digit b"));
range(k, m);