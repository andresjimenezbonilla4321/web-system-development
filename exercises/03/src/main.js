// Budget Tracker - vanilla JavaScript (Module 03)

// State: an array of expense objects. We never mutate it,
// we always create a new array with concat (immutable style).
let expenses = []

// DOM references
const form = document.querySelector('#expense-form')
const nameInput = document.querySelector('input[name="expense-name"]')
const amountInput = document.querySelector('input[name="expense-amount"]')
const errorMessage = document.querySelector('#error')
const list = document.querySelector('#expense-list')
const totalElement = document.querySelector('#total')

// Returns an error message, or an empty string if everything is valid
const validate = (name, amount) => {
  if (name === '') {
    return 'The name must not be empty.'
  }
  if (Number.isNaN(amount) || amount <= 0) {
    return 'The amount must be a positive number.'
  }
  return ''
}

// Declarative: total computed from the array with reduce
const calculateTotal = items => items.reduce((sum, item) => sum + item.amount, 0)

// Builds the <li> for one expense using the DOM API (createElement, textContent, appendChild)
const createExpenseItem = expense => {
  const li = document.createElement('li')

  const nameSpan = document.createElement('span')
  nameSpan.textContent = expense.name

  const amountSpan = document.createElement('span')
  amountSpan.textContent = expense.amount.toFixed(2) + ' €'

  li.appendChild(nameSpan)
  li.appendChild(amountSpan)
  return li
}

// Renders the whole list and the total from the current state
const render = () => {
  list.replaceChildren()
  expenses.forEach(expense => {
    list.appendChild(createExpenseItem(expense))
  })
  totalElement.textContent = calculateTotal(expenses).toFixed(2)
}

// Event handling
form.addEventListener('submit', event => {
  event.preventDefault() // do not reload the page

  const name = nameInput.value.trim()
  const amount = parseFloat(amountInput.value)

  const error = validate(name, amount)
  if (error !== '') {
    errorMessage.textContent = error
    return
  }

  errorMessage.textContent = ''
  expenses = expenses.concat({ name, amount })
  render()

  form.reset()
  nameInput.focus()
})

// First render (empty list, total 0.00)
render()
