
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
        display.textContent = "";
        leftOperand = "";
        rightOperand = "";
        operator = "";
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

const display = document.querySelector('.calculator-screen');
const numBtns = document.querySelectorAll('.number');
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector('#clear');
const operatorBtns = document.querySelectorAll('.operator');
const previousOperationP = document.querySelector('.previous-operation');
const currentOperationP = document.querySelector('.current-operation');

let leftOperand = "";
let rightOperand = "";
let operator = "";
let previousOperation = "";

function refreshDisplay(result){
    if(arguments.length === 0){
        display.textContent = leftOperand + operator + rightOperand;
    } else {
        display.textContent = result;
    }
}

function clearDisplay(){
    display.textContent = "";
}

function addNumBtnFunctionality(){
    numBtns.forEach(button => {
        button.addEventListener('click', () => {
            if(operator.length === 0){
                leftOperand += button.textContent;
            } else {
                rightOperand += button.textContent;
            }        
            refreshDisplay();
        })
    })
}

function addOperatorBtnFunctionality(){
    operatorBtns.forEach(button => {
        button.addEventListener('click', () => {
            if(leftOperand.length !== 0 && operator.length !== 0  && rightOperand.length !== 0){
                let result = operate(leftOperand, rightOperand, operator);
                refreshDisplay(result);
                leftOperand = result;
                rightOperand = "";
            }
            operator = button.textContent;
            refreshDisplay();
        })
    })
}

function addClearBtnFunctionality(){
    clearBtn.addEventListener('click', () => {
        leftOperand = "";
        rightOperand = "";
        operator = "";
        clearDisplay();
    })
}

function addEqualBtnFunctionality(){
    equalBtn.addEventListener('click', () => {
        if(leftOperand.length === 0 || rightOperand.length === 0){
            refreshDisplay("");
            leftOperand = "";
            rightOperand = "";
            operator = "";
        } else {
            let result = operate(leftOperand, rightOperand, operator);
            refreshDisplay(result);
            leftOperand = result;
            rightOperand = "";
        }
    })
}

addNumBtnFunctionality();
addOperatorBtnFunctionality();
addEqualBtnFunctionality();
addClearBtnFunctionality();
