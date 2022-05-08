function showMessage() {
    alert("Hello World");
}
// showMessage();

function localeVar() {
    let local = 'Hello World';
    console.log(local);
}

// localeVar();

let userName = 'John';

function greetUser () {
    let message = `Hello ${userName}`;
    console.log(message);
}

// greetUser();

function parameterFuncExapmle1(from, text) {
    console.log(`${from} : ${text}`);
}

function parameterFuncExapmle2(from, text) {
    from = `* ${from} *`;
    console.log(`${from} : ${text}`);
}

// parameterFuncExapmle1('Liam','Success');
// parameterFuncExapmle2('Liam','Success');

function addTwoNums(a, b) {
    return a + b;
}

let result = addTwoNums(3, 3);

// console.log(result);

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents ?');
    }
}

// let age = prompt('How old are you ?', 18);

//  Task 2.
function isOfAge(age) {
    if (age <= 18) {
        return true;
    } else {
        return confirm('Did your parents allow you ?');
    }
}

// Turnery example
function isOfAge(age) {
    return (age >= 18) ? true : confirm('Did your parents allow you ?');
}

// let ofAge = console.log(isOfAge(15));

// || or example
function isOfAge(age) {
    return (age >=18) || confirm('Did your parents allow you ?');
}

// let ofAge = console.log(isOfAge(15));

// Task 3.
function returnMinNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// let min = console.log(returnMinNumber(4, 5));

// Same but using the turnery operator
function minNumber(a, b) {
    return (a < b) ? a : b;
}

// let min = console.log(minNumber(6, 9));

// Task 4
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

// let x = prompt(`What is X ?`);
// let n = prompt(`What is N ?`);

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer.`);
} else {
    alert(pow(x, n));
}