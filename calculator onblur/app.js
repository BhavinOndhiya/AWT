function calculate() {
    // Get input values
    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);

    // Check if input values are valid numbers
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        showAlert("Please enter valid numbers.");
        return;
    }

    // Function to display answer with operator
    function displayAnswer(id, operator, result) {
        document.getElementById(id).innerHTML = `${operator} ${result}`;
    }

    // Perform calculations
    const sum = firstNumber + secondNumber;
    const difference = firstNumber - secondNumber;
    const product = firstNumber * secondNumber;
    const quotient = firstNumber / secondNumber;

    // Display answers
    displayAnswer("addition", "Addition =", sum);
    displayAnswer("subtraction", "Subtraction =", difference);
    displayAnswer("multiplication", "Multiplication =", product);
    displayAnswer("division", "Division =", quotient);
}

// Function to display alert message
function showAlert(message) {
    const alertBox = document.getElementById("alert");
    alertBox.innerHTML = message;
    alertBox.style.display = "block";

    // Hide the alert after 3 seconds
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}
