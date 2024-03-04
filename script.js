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

function evaluateKeystroke(n) {

    twoNumberOperationKeys = ['*', '/', '-', '+', 'mod'];
    numberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    singleNumberOperationKeys = ['x²', '√'];
    if (twoNumberOperationKeys.includes(n)) {
        if (operatorFlag == 1) {
            operatorFlag = 0;
            splitedInput = input.split(' ');
            input = operate(Number(splitedInput[0]), splitedInput[1], Number(splitedInput[2]));
            resultFlag++;
        } else {
            operatorFlag++;
            input += ` ${n} `;
        }
    } else {
        if (input === '0' || resultFlag != 0) {
            input = n;
            resultFlag = 0;
        } else
            if (numberKeys.includes(n))
                input += n;
    }

    if (n === 'C') {
        input = '0';
    }
    if (n === '=') {
        splitedInput = input.split(' ');
        input = operate(Number(splitedInput[0]), splitedInput[1], Number(splitedInput[2]));
        resultFlag++;
    }
    if (singleNumberOperationKeys.includes(n)) {
        input = operate(Number(input), n);
        resultFlag++;
    }

    display(input)
}

function main() { //event listeners

    keysArray = document.querySelectorAll("button");
    for (let i = 0; i < keysArray.length; i++) {
        keysArray[i].addEventListener('click', () => evaluateKeystroke(keysArray[i].textContent));
    }

}

main()