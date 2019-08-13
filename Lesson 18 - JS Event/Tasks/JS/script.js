// 1.
// <input type="text"><button id="btn">Click</button>
// ● додати обробник на кнопку, при кліку на яку буде в консоль виводитися текст з поля

document.getElementById("btn").onclick = function () {
    console.log(document.querySelectorAll("input[type=text]")[0].value)
}
//another way
// document.getElementById("btn").addEventListener("click", function (){
//     console.log(document.querySelectorAll("input[type=text]")[0].value)   
// });


// 2.1 Написати обробник на подію клік щоб елемент переміщувався на
// координати кліку

window.onclick = function (event) {
    var pointer = document.getElementById('pointer');
    pointer.style.position = "absolute"
    pointer.style.left = event.x + "px"
    pointer.style.top = event.y + "px"
}

//2.2 зробити dropdown(випадаючий список)
function dropdown() {
    document.getElementById("dropdownContainer").classList.toggle("show");
}


//3. Підсвічувати комірки таблиці при наведенні
var elements = document.querySelectorAll('td,th');
for (var i = 0; i < elements.length; i++) {
    const element = elements[i]
    element.addEventListener("mouseover", function (event) {
        element.style.backgroundColor = "#dddddd"
    })

    element.addEventListener("mouseout", function () {
        element.style.backgroundColor = "white"
    })
}

//4. при прокручуванні сторінки на 200px тоглити клас в header
window.addEventListener("scroll", () => {
    if (pageYOffset > 200) {
        document.getElementById("text").classList.add("header")
    } else {
        document.getElementById("text").classList.remove("header")
    }
});

//5. зробити перевірку на ширину екрану, якщо менше 768px то до елемента додати клас

window.addEventListener("resize", () => {
    if (screen.width < 768) {
        document.getElementById('screen-size').classList.add("size");
    } else {
        document.getElementById('screen-size').classList.remove("size");
    }
});

//6. зробити інпут (type="text") в який можна вводити тільки цифри (keyCode для чисел від 48 до 57 і від 96 до 105)

const inputText = document.getElementById("input-symbol");
inputText.addEventListener("keydown", event => {
    var key = event.keyCode;
    if (!(key >= 48 && key <= 57 || key >= 96 && key <= 105 || key == 8)) { //keyCode = 8 is a backspace code
        event.preventDefault();
    }
});