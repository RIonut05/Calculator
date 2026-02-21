const add = (num1, num2) => num1 + num2
const subtract =  (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

let firstNumber = null
let secondNumber = null
let operator = null

const operate = (operator, operand1, operand2) => {
  switch (operator) {
    case '+': add(operand1, operand2)
    break
    case '-': subtract(operand1, operand2)
    break
    case '*': multiply(operand1, operand2)
    break
    case '/': divide(operand1, operand2)
  }
}