// Function to check if input is a valid number
function validateInput() {
    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        showAlert("Please enter valid numbers.");
        return false;
    }

    return true;
}

// Function to display alert message
function showAlert(message) {
    alert(message);
}

// Function to add two numbers
function addition() {
    if (!validateInput()) {
        return;
    }

    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);
    const sum = firstNumber + secondNumber;

    document.getElementById("answer").value = sum;
}

// Function to subtract two numbers
function subtraction() {
    if (!validateInput()) {
        return;
    }

    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);
    const result = firstNumber - secondNumber;

    document.getElementById("answer").value = result;
}

// Function to multiply two numbers
function multiplication() {
    if (!validateInput()) {
        return;
    }

    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);
    const result = firstNumber * secondNumber;

    document.getElementById("answer").value = result;
}

// Function to divide two numbers
function division() {
    if (!validateInput()) {
        return;
    }

    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);

    if (secondNumber === 0) {
        showAlert("Cannot divide by zero.");
        return;
    }

    const result = firstNumber / secondNumber;

    document.getElementById("answer").value = result;
}
