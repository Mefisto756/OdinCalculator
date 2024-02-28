function getSum(a, b) {
    return a + b;
}

function getSubstract(a, b) {
    return a - b;
}

function getMultiply(a, b) {
    return a * b;
}

function getDivision(a, b) {
    return (b === 0) ? 0 : a / b;
}

function getSquare(a) {
    return a ** 2;
}

function getRoot(a) {
    return Math.sqrt(a).toFixed(2);
}

function getMod(a, b) {
    return a % b;
}

function operate(a, operator, b = 0) {
    let result = 0;
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            result = getSum(a, b);
            break;
        case '-':
            result = getSubstract(a, b);
            break;
        case '*':
            result = getMultiply(a, b);
            break;
        case '/':
            result = getDivision(a, b);
            break;
        case '√':
            result = getRoot(a);
            break;
        case 'x²':
            result = getSquare(a);
            break;
        case '%':
            result = getMod(a, b);
            break;
    }
    return result;
}

function main() { //event listeners and global variables
    let numberA = '3';
    let numberB = '2';
    let operator = '%';
    alert(operate(numberA, operator, numberB));

}
main();