
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
            return ""
    }
}

const numBtns = document.querySelectorAll('.number');
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector('#clear');
const backBtn = document.querySelector('#delete');
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

function addNumBtnFunctionality(num){
    if(arguments.length === 0){
        numBtns.forEach(button => {
            button.addEventListener('click', () => {
                if(operator.length === 0){
                    leftOperand += button.textContent;
                } else {
                    rightOperand += button.textContent;
                }        
            })
        })
    } else {
        operator.length === 0 ? leftOperand+= num : rightOperand += num;
    }
    refreshDisplay();
}

function addDotBtnFunctionality(_){
    if(arguments.length === 0){
        dotBtn.addEventListener('click', () => {
            if(operator.length === 0){
                if (!leftOperand.includes(".")){
                    leftOperand += ".";
                }
            } else {
                if(!rightOperand.includes(".")){
                    rightOperand += ".";
                }
            }
        })
    } else {
        if(operator.length === 0){
            if (!leftOperand.includes(".")){
                leftOperand += ".";
            }
        } else {
            if(!rightOperand.includes(".")){
                rightOperand += ".";
            }
        }
    }
    refreshDisplay();
}

function addOperatorBtnFunctionality(oper){
    if(arguments.length === 0){
        operatorBtns.forEach(button => {
            button.addEventListener('click', () => {
                if(leftOperand.length !== 0 && operator.length !== 0  && rightOperand.length !== 0){
                    let result = operate(leftOperand, rightOperand, operator);
                    lastOperation = leftOperand + operator + rightOperand;
                    refreshDisplay(result);
                    leftOperand = result.toString();
                    rightOperand = "";
                }
                operator = button.textContent;
            })
        })
    } else {
        if(leftOperand.length !== 0 && operator.length !== 0  && rightOperand.length !== 0){
            let result = operate(leftOperand, rightOperand, operator);
            lastOperation = leftOperand + operator + rightOperand;
            refreshDisplay(result);
            leftOperand = result.toString();
            rightOperand = "";
        }
        operator = oper;
    }
    refreshDisplay();
}

function addClearBtnFunctionality(){
    clearBtn.addEventListener('click', () => {
        leftOperand = "";
        rightOperand = "";
        operator = "";
        clearDisplay();
    })
}

function addBackBtnFunctionality(_){
    if(arguments.length === 0){
        backBtn.addEventListener('click', () => {
            if(operator.length === 0){
                leftOperand = leftOperand.slice(0, -1);
            } else if (rightOperand.length === 0){
                operator = "";
            } else {
                rightOperand = rightOperand.slice(0, -1);
            }
        })
    } else {
        if(operator.length === 0){
            leftOperand = leftOperand.slice(0, -1);
        } else if (rightOperand.length === 0){
            operator = "";
        } else {
            rightOperand = rightOperand.slice(0, -1);
        }
    }
    refreshDisplay();
}

function addEqualBtnFunctionality(_){
    if(arguments.length === 0){
        equalBtn.addEventListener('click', () => {
            if(leftOperand.length === 0 || rightOperand.length === 0){
                lastOperation = "";
                leftOperand = "";
                rightOperand = "";
                operator = "";
                refreshDisplay("");
            } else {
                let result = operate(leftOperand, rightOperand, operator);
                lastOperation = leftOperand + operator + rightOperand;
                refreshDisplay(result);
                leftOperand = result.toString();
                rightOperand = "";
                operator = "";
            }
        })
    } else {
        if(leftOperand.length === 0 || rightOperand.length === 0){
            lastOperation = "";
            leftOperand = "";
            rightOperand = "";
            operator = "";
            refreshDisplay("");
        } else {
            let result = operate(leftOperand, rightOperand, operator);
            lastOperation = leftOperand + operator + rightOperand;
            refreshDisplay(result);
            leftOperand = result.toString();
            rightOperand = "";
            operator = "";
        }
    }
}

function addKeyboardFunctionality(){
    const validNumKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    const validOperatorKeys = ['-', '/', '*', '+']
    const validSpecialKeys = ['=', '.', ',', 'Enter', 'Backspace']
    window.addEventListener('keydown', e => {
        if(validNumKeys.includes(e.key) || validOperatorKeys.includes(e.key) || validSpecialKeys.includes(e.key)){
            let pressedKey = e.key;
            if(validNumKeys.includes(pressedKey)){
                addNumBtnFunctionality(pressedKey);
            } else if (validOperatorKeys.includes(pressedKey)){
                addOperatorBtnFunctionality(pressedKey);
            } else {
                e.key === ',' ? pressedKey = '.' :pressedKey = pressedKey;
                e.key === 'Enter' ? pressedKey = '=' : pressedKey = pressedKey;
                switch (pressedKey){
                    case '=':
                        addEqualBtnFunctionality('');
                        break;
                    case 'Backspace':
                        addBackBtnFunctionality('')
                        break;
                    case '.':
                        addDotBtnFunctionality('');
                        break;
                }

            }

        }
    })
}

addNumBtnFunctionality();
addOperatorBtnFunctionality();
addEqualBtnFunctionality();
addClearBtnFunctionality();
addBackBtnFunctionality();
addDotBtnFunctionality();
addKeyboardFunctionality();
