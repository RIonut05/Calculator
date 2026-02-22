const add = (num1, num2) => num1 + num2
const subtract =  (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

let firstNumber = null
let secondNumber = null
let operator = null
let resultCheck = null

const operate = (operator, operand1, operand2) => {
  switch (operator) {
    case '+': return add(operand1, operand2)
    case '-': return subtract(operand1, operand2)
    case '*': return multiply(operand1, operand2)
    case '/': return divide(operand1, operand2)
  }
}

const updateOperator = sign => operator = sign.textContent
const screen = document.querySelector('#screen')

const updateFirstNumber = digit => {
  firstNumber = firstNumber === null ? digit.textContent : firstNumber + digit.textContent
  screen.textContent = firstNumber
}

const updateSecondNumber = digit => {
  secondNumber = secondNumber === null ? digit.textContent : secondNumber + digit.textContent
  screen.textContent = secondNumber
} 

document.querySelector('#buttons').addEventListener('click', (e) => {
  if (e.target.classList.contains('digit') && resultCheck) {
    firstNumber = null
    secondNumber = null
    operator = null
    resultCheck = false
    updateFirstNumber(e.target)
  }else if (e.target.classList.contains('digit')) {
    operator === null ? updateFirstNumber(e.target) : updateSecondNumber(e.target)
  } 

  if (e.target.classList.contains('operator') && secondNumber === null) {
    updateOperator(e.target)
  } 

  if (e.target.id === 'equals' && firstNumber !== null && secondNumber !== null) {
    let result = screen.textContent = operate(operator, Number(firstNumber), Number(secondNumber))
    if (result === Infinity) screen.textContent = '/'
    firstNumber = String(result)
    secondNumber = null
    operator = null
    resultCheck = true
  }

  if (e.target.classList.contains('operator') && firstNumber !== null && secondNumber !== null) {
    let result = screen.textContent = operate(operator, Number(firstNumber), Number(secondNumber))
    if (result === Infinity) screen.textContent = '/'
    firstNumber = String(result)
    secondNumber = null
    updateOperator(e.target)
  }

  if (e.target.id === 'clear') {
    firstNumber = null
    secondNumber = null
    operator = null
    screen.textContent = ''
  }
})