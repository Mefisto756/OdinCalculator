let input = '';
let operatorFlag = 0;
let resultFlag = 0;

function getDivision(a, b) {
    return (b === 0) ? 0 : a / b;
}

function operate(a, operator, b = 0) {
    a = Number(a);
    b = Number(b);
    console.log(`${a} ${operator} ${b}`);
    let localResult = 0;
    switch (operator) {
        case '+':
            localResult = a + b;
            break;
        case '-':
            localResult = a - b;
            break;
        case '*':
            localResult = a * b;
            break;
        case '/':
            localResult = getDivision(a, b);
            break;
        case '√':
            localResult = Math.sqrt(a);
            break;
        case 'x²':
            localResult = a ** 2;
            break;
        case 'mod':
            localResult = a % b;
            break;
    }
    return localResult.toFixed(2);
}

function display() {
    const displayHtml = document.querySelector("#display");
    displayHtml.textContent = input;
}

function evaluateKeystroke(n) {// input validation for number 

    twoNumberOperationKeys = ['*', '/', '-', '+', 'mod'];
    numberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    singleNumberOperationKeys = ['x²', '√'];

    if (numberKeys.includes(n)) {
        if (input == '0' || input == '0.00' || resultFlag == 1) {
            input = n;
            resultFlag = 0;
        }
        else
            input += n;
    } else {
        if (twoNumberOperationKeys.includes(n)) { //+ - etc.
            if (operatorFlag === 1) {
                splitedInput = input.split(' ');
                input = operate(Number(splitedInput[0]), splitedInput[1], Number(splitedInput[2]));
                input += ` ${n} `;
            } else {
                input += ` ${n} `;
                operatorFlag = 1;
                resultFlag = 0;
            }
        } else { // x^2 etc
            if (singleNumberOperationKeys.includes(n)) { // x^2
                if (input.split(' ').length === 3) {
                    splitedInput = input.split(' ');
                    input = operate(Number(splitedInput[0]), splitedInput[1], Number(splitedInput[2]));
                    operatorFlag = 0;
                    resultFlag = 1;
                }
                input = operate(Number(input), n);
                operatorFlag = 0;
            } else { // = C
                if (n === 'C')
                    input = 0;
                else
                    if (n === '=') {
                        splitedInput = input.split(' ');
                        input = operate(Number(splitedInput[0]), splitedInput[1], Number(splitedInput[2]));
                        operatorFlag = 0;
                        resultFlag = 1;
                    }
            }
        }
    }
    if(input == 'NaN') {
        input = `Wrong input`;
        resultFlag = 1;
    }
    display()
}

function main() { //event listeners

    keysArray = document.querySelectorAll("button");
    for (let i = 0; i < keysArray.length; i++) {
        keysArray[i].addEventListener('click', () => evaluateKeystroke(keysArray[i].textContent));
    }

}

main()