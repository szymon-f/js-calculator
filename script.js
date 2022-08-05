
function add(a, b){
    a = +a;
    b = +b;
    return a + b;
}

function subtract(a, b){
    a = +a;
    b = +b;
    return a - b;
}

function multiply(a, b){
    a = +a;
    b = +b;
    return a * b;
}

function divide(a, b){
    a = +a;
    b = +b;
    if (b === 0){
        return "You can't divide by zero 😡"
    }
    return a / b;
}


function operate(operator, a, b){
    switch(operator){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "An error occured"
    }
}

let displayValue = "";
let lastInputValue = ""


function refreshDisplay(){
    const display = document.querySelector('.calculator-screen');
    display.textContent += lastInputValue;
}

function addBtnFunctionality(){
    const btns = document.querySelectorAll('li');
    btns.forEach(button => {
        button.addEventListener('click', () => {
            displayValue += button.id;
            lastInputValue = button.id;
            refreshDisplay();
        })
    })
}

addBtnFunctionality();
