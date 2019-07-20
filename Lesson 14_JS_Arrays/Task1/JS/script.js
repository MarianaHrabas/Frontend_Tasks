//1. додавати елементи в масив через метод prompt() поки користувач не натисне cancel
var arr = [];
var input = prompt("Input your digit", 0);
while (input != null) {
    arr.push(input);
    input = prompt("Input your digit", 0);
}
console.log(arr);

//2.знайти суму елементів двовимірного масиву
var arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
function sumMatrix(arr) {
    var result = 0;
    for (var i of arr) {
        for (var j of i) {
            result += j;
        }
    }
    return result;
}
console.log(sumMatrix(arr));