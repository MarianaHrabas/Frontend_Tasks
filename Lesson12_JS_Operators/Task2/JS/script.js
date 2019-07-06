"use strict";

/* За допомогою конструкції switch записати такі умови: якщо ввели 1, то вивести в консоль 'a'; якщо ввели 2 -'b'; 
якщо ввели 3 -'c'; інакше -'z'*/ 
var input = parseInt(prompt ("Input digit", "0"), 10);//casted string (prompt) to number
switch (input) {
    case 1:
        alert("a");
        break;
    case 2:
        alert("b");
        break;
    case 3:
        alert("c");
        break;
    default:
        alert("z");
        break;
}

