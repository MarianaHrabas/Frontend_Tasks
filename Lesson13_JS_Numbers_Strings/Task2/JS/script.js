"use strict";

/*1. Є масив стрічок [‘lorem’, ipsum’, ‘is’, ‘Simply’, ‘Dummy’] або будь який інший,
пройтися циклом по масиву і об’єднати в стрічку в якій кожне слово з великої літери*/

// while
var arr = ['lorem', 'ipsum', 'is', 'Simply', 'Dummy']
function getFullStringwithWhile(arr) {
    var i = 0;
    var fullString = "";
    while (i < arr.length) {
        var str = arr[i];
        var fullWord = str[0].toUpperCase().concat("", str.substring(1));
        if (i == 0) {
            fullString = fullString.concat("", fullWord);
        } else {
            fullString = fullString.concat(" ", fullWord);
        }
        i++;
    }
    return fullString;
}
console.log(getFullStringwithWhile(arr));

//for
function getFullStringWithFor(arr) {
    var fullString = "";

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        var fullWord = str[0].toUpperCase().concat("", str.substring(1));

        fullString =  fullString.concat((i == 0) ? "" : " ", fullWord);
    }
    return fullString;
}
console.log(getFullStringWithFor(arr));



//2. функція приймає дві стрічки і повертає більшу з них (if operator)
function getBiggerStr(str1, str2) { 
    if (str1.length > str2.length) {
        return str1
    } else {
        return str2
    }
}
console.log(getBiggerStr("Hello World", "Hello World!!!"))


//2.1.функція приймає дві стрічки і повертає більшу з них (ternary operator)
function getBiggerStrTernary(str1, str2) {
    return str1.length > str2.length ? str1 : str2;
}
console.log(getBiggerStrTernary("Hello World", "Hello World!!!"))



