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