function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression and update the display
        display.innerText = eval(display.innerText) || '';
    } catch (e) {
        // In case of an error (e.g., malformed expression)
        display.innerText = 'Error';
    }
}
