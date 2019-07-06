"use strict";

/* Функція приймає межі випадкового числа (min, max) і вивести в консоль парне чи непарне воно.
Додатково написати функцію, яка перевірить чи число (digit) більше або менше від рандомного числа (num) */
function getRand(min, max, digit) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("num = " + num);
    console.log("digit = " + digit);
    if (num % 2 == 0) {
        console.log("even number");
    } else {
        console.log("odd number");
    }

    if (digit > num) {
        console.log("digit is bigger than num")
    }
    else if (digit < num) {
        console.log("digit is smaller than num")
    }
    else {
        console.log("digit is equal to num")
    }

    // console.log(num % 2 == 0 ? "even number" : "odd number");
    // console.log(digit > num ? "digit is bigger than num" : digit < num ? "digit is smaller than num" : "digit is equal to num")
}
getRand(4, 20, 7);


