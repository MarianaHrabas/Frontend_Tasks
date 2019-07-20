/*1. написати функцію randomNumber(number) яка наповнює масив випадковими числами від -100 до 100, 
де number - довжина масиву*/
function randomNumber(number) {
    var arr = [];
    var min = -100;
    var max = 100;
    for (var i = 0; i < number; i++) {
        arr.push(Math.round(Math.random() * (max - min) + min));
    }
    return arr;
}
var number = parseInt(prompt("Input your digit"));
var numberArr = randomNumber(number); 
console.log(numberArr);

//1.1. через filter вивести масив з числами, які більші 10
var filteredArr = numberArr.filter(function(number){ 
    return number > 10;
});
console.log(filteredArr);


/*2. Відсортувати строку lorem по зростанню(по довжині)
- Перетворити стрічку на масив
- відсортувати масив
- з'єднати назад в стрічку*/
var str = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
var arr = str.split(" ");
function sortArr(arr){
    var sortedArr = arr.sort(function compareStrings(a, b) {
        if (a.length > b.length) return 1
        if (a.length < b.length) return -1
    });
    return sortedArr;
}
console.log(sortArr(arr).join(" "));


/*3. Дано масив об’єктів. Вивести масив телефонних номерів користувачів в яких баланс більше
2000 доларів і суму всіх балансів*/

var users = [
  {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
  },
  {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
  },
  {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
  }
]

console.log(users.filter(function(user){
    var balance = parseFloat(user.balance.substring(1).replace(",", ""));
    return balance > 2000;
}).map(function(user){
    return user.phone;
}));

console.log(users.map(function(user){
    return parseFloat(user.balance.substring(1).replace(",", ""));
}).reduce(function(sum, current) {
    return sum + current;
}))


//4. Використовуючи lodash, повернути масив з унікальних елементів масиву [1, 2, 1, 4, 1, 3]
