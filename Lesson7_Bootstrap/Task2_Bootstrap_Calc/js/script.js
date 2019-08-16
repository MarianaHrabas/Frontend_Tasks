var operation = ""
var a = 0;
var b = 0;

function input(id) {
    if (isNaN(id)) {
        if (id == "=") {
            b = parseInt(document.getElementById('output').innerText);
            document.getElementById('output').innerText = process();
        } else if (id == "del") {
            var out = document.getElementById('output').innerText
            document.getElementById('output').innerText = out.length > 1 ? out.substring(0, out.length - 1) : "0"; 
        } else if (id == "CE" || id == "C") {
            reset();
        } else {
            a = parseInt(document.getElementById('output').innerText);
            operation = id;
        }
    } else {
        if (operation != "") {
            document.getElementById('output').innerText = "";
        }
        display(id);
    }
}

function display(number) {
    var output = document.getElementById('output').innerText;
    if (output == "0") {
        document.getElementById('output').innerText = number
    } else {
        document.getElementById('output').innerText += number
    }
}

function reset() {
    a = 0;
    b = 0;
    operation = ""
    document.getElementById('output').innerText = "0"
}

function process() {
    switch (operation) {
        case "+":
            return sum(a, b)
        case "-":
            return sub(a, b)
        case "*":
            return mul(a, b)
        case "/":
            return div(a, b)
        default:
            return parseInt(document.getElementById('output').innerText);
    }
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}