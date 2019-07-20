//написати функцію randomNumber(number) яка наповнює масив випадковими числами від 0 до 100, де number довжина масиву

function randomNumbers(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        arr.push(randomInteger(0, 100));
    }
    return arr;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
var input = parseInt(prompt("How many random numbers you want to generate?"));
var randomNumbers = randomNumbers(input);
console.log(randomNumbers)


//перевірити чи в масиві є число, яке вводиться через prompt()
var inputDigit = parseInt(prompt("Input your digit"));

function isNumberInArr(arr, number) {
    for (var i = 0; i < arr.length; i++) {
        if (number == arr[i]) {
            return true;
        }
    }
    return false;
}
console.log(isNumberInArr(randomNumbers, inputDigit) ? "Number " + inputDigit + " is included in the arr." : "Number " + inputDigit + " is not included in the arr." );