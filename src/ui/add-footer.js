function addFooter (node, logic) {
  const footer = document.createElement('footer')

  footer.className = 'emails-input__footer'

  node.appendChild(footer)

  addAddEmail(footer)
  addGetEmailsCount(footer, logic)
}

function addAddEmail (footer) {
  const button = document.createElement('button')

  button.innerHTML = 'Add email'
  button.type = 'button'
  button.className = 'emails-input__footer-button'

  footer.appendChild(button)
}

function addGetEmailsCount (footer, logic) {
  const button = document.createElement('button')

  button.innerHTML = 'Get emails count'
  button.type = 'button'
  button.className = 'emails-input__footer-button emails-input__get-emails-count'

  button.addEventListener('click', logic.onGetEmailsCount)

  footer.appendChild(button)
}

export default addFooter
