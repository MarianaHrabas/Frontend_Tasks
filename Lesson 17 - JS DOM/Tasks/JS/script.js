/*1.
<div> Технології: </div>
<ul>
<li> HTML </li>
<li>CSS </li> 
<ul/>
● знайти ul елемент
● знайти другий li */

console.log(document.body.children[1]);
console.log(document.body.children[1].children[1]);


/*2.  
<div>Технології:</div>
<ul> class=”list”
<li> HTML</li>
<li>CSS</li>
</ul>
● знайти елемент з класом list
● знайти другий li і змінити в ньому текст
●зробити текст в div червоним */

console.log(document.getElementsByClassName("list")[0]);
console.log(document.getElementsByClassName("list")[0].getElementsByTagName("li")[1]);
document.getElementsByTagName("div")[0].style.color = "red";


// 3.
// ● до чекбокса додати атрибут checked
// ● якщо параграф має клас “text” то видалити його і навпаки

document.getElementsByTagName("input")[0].setAttribute("checked", true);
document.getElementsByTagName("p")[0].classList.toggle("text");


// 4.
// <ul id = "list"></ul>
// ●додати в список 5 елементів li з текстом від 1 до 5

var list = document.getElementById("list")
for (var i = 1; i <= 5; i++) {
    var li = document.createElement('li');
    li.innerHTML = i
    list.appendChild(li);
}
