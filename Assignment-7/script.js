function add() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    if(isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Enter number";
        return;
    }
    document.getElementById("result").innerText = a + b;
}

function subtract() { 
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    if(isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Enter number";
        return;
    }
    document.getElementById("result").innerText = a - b;
}

function multiply() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    if(isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Enter number";
        return;
    }
    document.getElementById("result").innerText = a * b;
}

function divide() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    if(isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Enter number";
        return;
    }
    document.getElementById("result").innerText = a / b;
}

function square() {
    let a = Number(document.getElementById("num1").value);
    if (isNaN(a)) {
        document.getElementById("result").innerText = "Enter number";
        return;
    }
    document.getElementById("result").innerText = a * a;
}

function cube() {
    let a = Number(document.getElementById("num1").value);
    if (isNaN(a)) {
        document.getElementById("result").innerText = "Enter number";
        return;
    }
    document.getElementById("result").innerText = a * a * a;
}