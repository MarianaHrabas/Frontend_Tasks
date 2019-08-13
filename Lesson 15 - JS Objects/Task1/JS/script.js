// 1. дано об’єкт
// var skill = {
//     name: ‘html’,
//     level: 5
//     }
//     Написати метод який поверне стрічку вигляду “html-5”

var skill = {
    name: "html",
    level: 5
}

function formStr(obj) {
    return obj.name + "-" + obj.level
}

console.log(formStr(skill));

// 2. Додати метод newString() в прототип String який буде робити першу і
// останню літеру стрічки великою

String.prototype.newString = function () {
    var str = this;
    var firstChar = str[0].toUpperCase();
    var lastChar = str[str.length - 1].toUpperCase();
    return firstChar + str.substring(1, str.length - 1) + lastChar;
}

console.log("developer".newString());


//3. написати калькулятор з методами add() додає два значення, mul() перемножає їх
function Calculator(a, b) {
    this.a = a;
    this.b = b;
}

Calculator.prototype.add = function () {
    return this.a + this.b;
}

Calculator.prototype.mul = function () {
    return this.a * this.b;
}

var calc = new Calculator(4, 6);
console.log(calc.add());
console.log(calc.mul());


//4. Написати таймер Timer через прототипи з методами start(), stop(), reset()

function Timer(time) {
    this.initialTime = time;
    this.time = time;
    this.intervalId = 0;
    showTime(this.time)
}

Timer.prototype.start = function () {
    // this function has to start timer with current time or resume it after stop called
    if (this.time > 0) {
        console.log("Timer started")
        var self = this

        var fname = function () {
            // console.log(self.time)
            showTime(self.time)
            self.time--;

            if (self.time < 0) {
                clearInterval(self.intervalId);
                console.log("Timer stopped")
            }
        }

        this.intervalId = setInterval(fname, 1000);
    }
}

Timer.prototype.stop = function () {
    // this function has to stop timer
    if (this.intervalId != 0) {
        clearInterval(this.intervalId);
        console.log("Timer stopped")
    }
}

Timer.prototype.reset = function () {
    // this function has to stop and reset time of the timer
    if (this.intervalId != 0) {
        this.stop()
    }
    console.log("Timer reset")
    this.time = this.initialTime;
    showTime(this.time)
}

function input(id) {
    if (id == "start") {
        timer.start()
    } else if (id == "stop") {
        timer.stop()
    } else if (id == "reset") {
        timer.reset()
    }
}

function inputTimerValue() {
    return parseInt(prompt("Input time in seconds."))
}

function showTime(time) {
    document.getElementById("time").innerHTML = time;
}

var timer = new Timer(inputTimerValue());



//1. написати функцію яка буде повертати методи для виведення і задання імені
var createPerson = function (name) {
    return {
        setName: function (newName) {
            name = newName;
        },

        getName: function () {
            return name;
        }
    }
}
var person = createPerson("Peter");
console.log(person.getName());
person.setName("John");
console.log(person.getName());


// 2. Створіть об'єкт calculator з методами: 
// - sum () повертає суму цих двох значень; 
// - mul () повертає добуток цих двох значень
// var calculator = {
// number1: 2,
// number2: 3,
// }
// alert (calculator.sum());
// alert (calculator.mul())

var calculator = {
    number1: 2,
    number2: 3,
    sum: function () {
        return this.number1 + this.number2;
    },
    mul: function () {
        return this.number1 * this.number2;
    }
}
alert(calculator.sum());
alert(calculator.mul())


// 3. Переписати об'єкт calculator з методами через конструктор:
// - метод sum () повертає суму двох значень
// - метод mul () повертає добуток двох значень
// var calculator = new Calculator();
// alert ("Сума=" + calculator.sum();
// alert ("Добуток=" + calculator.mul()

var calculator = new Calculator1();
function Calculator1() {
    this.num1 = 8;
    this.num2 = 8;
}

Calculator1.prototype.sum = function () {
    return this.num1 + this.num2;
}

Calculator1.prototype.mul = function () {
    return this.num1 * this.num2;
}

alert("Сума=" + calculator.sum());
alert("Добуток=" + calculator.mul());


//4. Є об'єкт calculator
// var calculator = {
// number1: 2,
// number2: 3,
// }
// функція sum () повертає суму двох значень
// функція mul () повертає добуток двох значень
// Явно задати контекст(this) для цих фунцій

var calculator = {
    number1: 2,
    number2: 3,
}

function sum() {
    return this.number1 + this.number2;
}

function mul() {
    return this.number1 * this.number2;
}

console.log(sum.call(calculator))
console.log(mul.call(calculator))