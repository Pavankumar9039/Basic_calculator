let currentOperand = '';
let previousOperand = '';
let operation = null;

// Update the display
function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = currentOperand || '0';
}

// Append a number to the current operand
function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateDisplay();
}

// Choose an operation
function chooseOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') calculate();
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
  updateDisplay();
}

// Perform the calculation
function calculate() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current !== 0 ? prev / current : 'Error';
      break;
    default:
      return;
  }

  currentOperand = result.toString();
  operation = null;
  previousOperand = '';
  updateDisplay();
}

// Clear the display
function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateDisplay();
}
