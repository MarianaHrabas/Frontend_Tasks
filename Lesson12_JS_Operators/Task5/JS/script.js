"use strict";
//функція приймає два параметри(числа) і повертає більший з них
function getBigger(a, b) {
    if (a > b)
        return a
    else if (a < b)
        return b
    else
        return 0
}
console.log(getBigger(4, 7));
