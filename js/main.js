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
        return confirm('Do you have permission from your parentss ?');
    }
}

// let age = prompt('How old are you ?', 18);

if (checkAge(age)) {
    alert('Access Granted');
} else {
    alert('Access Denied');
}

