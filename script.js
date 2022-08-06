
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

let leftOperand = "";
let rightOperand = "";
let operator = "";

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
        console.log(leftOperand, operator, rightOperand);
        let result = operate(leftOperand, rightOperand, operator);
        refreshDisplay(result);
        leftOperand = result;
        rightOperand = "";
        console.log(result);
        // let [a, b, operator] = parseInput(displayValue);
        // let result = operate(a, b, operator);
        // // console.log(result);
        // const display = document.querySelector('.calculator-screen');
        // display.textContent = result;
        // displayValue = result;
    })
}

function parseInput(str){
    const operators = ['+', '-', '/', '*'];
    let left = "";
    let right = ""
    let operator = "";
    for(let i = 0; i < str.length; i++){ // TO MOŻNA ZROBIĆ str.split()!!
        if(operators.includes(str[i])){  // i zrobić to na osobnym branchu
            left = str.slice(0, i);
            right = str.slice(i + 1, -1);
            operator = str[i];
        }
    }
    // console.log([left, right, operator]);
    return [left, right, operator];
}

addNumBtnFunctionality();
addOperatorBtnFunctionality();
addEqualBtnFunctionality();
addClearBtnFunctionality();
