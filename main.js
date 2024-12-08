// Function to append a value to the input field
function appendValue(value) {
    // Get the input field with ID 'result' and add the provided value to its current content
    document.getElementById('result').value += value;
}

// Function to clear the input field
function clearResult() {
    // Set the value of the input field with ID 'result' to an empty string
    document.getElementById('result').value = '';
}

// Function to calculate the result of the expression in the input field
function calculate() {
    try {
        // Replace '^' with '**' for proper exponentiation in JavaScript
        let expression = document.getElementById('result').value.replace(/\^/g, '**');
        // Evaluate the expression and set the result back to the input field
        document.getElementById('result').value = eval(expression);
    } catch (error) {
        // If an error occurs, show an alert message and clear the input field
        alert('Invalid calculation');
        clearResult();
    }
}

// Function to erase the last character from the input field
function eraseCharacter() {
    // Get the current value of the input field
    let result = document.getElementById('result').value;
    // Remove the last character using the slice method
    document.getElementById('result').value = result.slice(0, -1);
}
