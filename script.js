
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
        currentOperation.textContent = "";
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

// const display = document.querySelector('.calculator-screen');
const numBtns = document.querySelectorAll('.number');
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector('#clear');
const backBtn = document.querySelector('#back');
const dotBtn = document.querySelector('#dot')
const operatorBtns = document.querySelectorAll('.operator');
const previousOperation = document.querySelector('.previous-operation');
const currentOperation = document.querySelector('.current-operation');

let leftOperand = "";
let rightOperand = "";
let operator = "";
let lastOperation = "";

function refreshDisplay(result){
    if(arguments.length === 0){
        currentOperation.textContent = leftOperand + operator + rightOperand;
    } else {
        previousOperation.textContent = lastOperation;
        currentOperation.textContent = result;
    }
}

function clearDisplay(){
    currentOperation.textContent = "";
    previousOperation.textContent = "";
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

function addDotBtnFunctionality(){
    dotBtn.addEventListener('click', (button) => {
        if(operator.length === 0){
            if (!leftOperand.includes(".")){
                leftOperand += ".";
            }
        } else {
            if(!rightOperand.includes(".")){
                rightOperand += ".";
            }
        }
        refreshDisplay();
    })
}

function addOperatorBtnFunctionality(){
    operatorBtns.forEach(button => {
        button.addEventListener('click', () => {
            if(leftOperand.length !== 0 && operator.length !== 0  && rightOperand.length !== 0){
                let result = operate(leftOperand, rightOperand, operator);
                lastOperation = leftOperand + operator + rightOperand;
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

function addBackBtnFunctionality(){
    backBtn.addEventListener('click', () => {
        if(operator.length === 0){
            leftOperand = leftOperand.slice(0, -1);
            refreshDisplay();
        } else if (rightOperand.length === 0){
            operator = "";
            refreshDisplay();
        } else {
            rightOperand = rightOperand.slice(0, -1);
            refreshDisplay();
        }
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
            lastOperation = leftOperand + operator + rightOperand;
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
addBackBtnFunctionality();
addDotBtnFunctionality();
