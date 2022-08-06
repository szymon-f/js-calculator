
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
        alert("You can't divide by zero 😡");
        const display = document.querySelector('.calculator-screen');
        document.textContent = "";
        displayValue = "";
        return "";
    }
    return a / b;
}


function operate(a, b, operator){
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
            alert("don't input = before an expression to evaluate!")
            return ""
    }
}

let displayValue = "";
let lastInputValue = ""


function refreshDisplay(){
    const display = document.querySelector('.calculator-screen');
    display.textContent += lastInputValue;
}

function addNumBtnFunctionality(){
    const btns = document.querySelectorAll('li');
    btns.forEach(button => {
        button.addEventListener('click', () => {
            displayValue += button.textContent;
            lastInputValue = button.textContent;
            refreshDisplay();
        })
    })
}

function addClearBtnFunctionality(){
    const btn = document.querySelector('#clear');
    btn.addEventListener('click', () => {
        displayValue = "";
        lastInputValue = "";
        clearDisplay();
    })
}

function clearDisplay(){
    const display = document.querySelector('.calculator-screen');
    display.textContent = "";
}

function addEqualBtnFunctionality(){
    const btn = document.querySelector("#equal");
    btn.addEventListener('click', () => {
        let [a, b, operator] = parseInput(displayValue);
        let result = operate(a, b, operator);
        // console.log(result);
        const display = document.querySelector('.calculator-screen');
        display.textContent = result;
        displayValue = result;
    })
}

function parseInput(str){
    const operators = ['+', '-', '/', '*'];
    let left = "";
    let right = ""
    let operator = "";
    for(let i = 0; i < str.length; i++){ // TO MOŻNA ZROBIĆ str.split()!!
        if(operators.includes(str[i])){
            left = str.slice(0, i);
            right = str.slice(i + 1, -1);
            operator = str[i];
        }
    }
    // console.log([left, right, operator]);
    return [left, right, operator];
}

addNumBtnFunctionality();
addClearBtnFunctionality();
addEqualBtnFunctionality();