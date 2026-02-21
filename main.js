const add = (num1, num2) => num1 + num2
const subtract =  (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

let firstNumber = null
let secondNumber = null
let operator = null

const operate = (operator, operand1, operand2) => {
  switch (operator) {
    case '+': return add(operand1, operand2)
    case '-': return subtract(operand1, operand2)
    case '*': return multiply(operand1, operand2)
    case '/': return divide(operand1, operand2)
  }
}

const updateFirstNumber = (digit) => {
  firstNumber = firstNumber === null ? digit.textContent : firstNumber + digit.textContent
  document.querySelector('#screen').textContent = firstNumber
}

document.querySelector('#buttons').addEventListener('click', (e) => {
  if (e.target.classList.contains('digit')) {
    updateFirstNumber(e.target)
  }
})