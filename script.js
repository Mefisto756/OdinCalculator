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
    return (b === 0) ? 0: a/b;
}

function operate(a, operator, b) {
    let result = 0;
    switch (operator) {
        case '+':
            result = getSum(a,b);
            break;
        case '-':
            result = getSubstract(a,b);
            break;
        case '*':
            result = getMultiply(a,b);
            break;
        case '/':
            result = getDivision(a,b);
            break;
    }
    return result;
}

let numberA = 4;
let numberB = 2;
let operator = '+';

//alert(operate(numberA, operator, numberB));