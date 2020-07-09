function addFooter (node) {
  const footer = document.createElement('footer')

  footer.className = 'emails-input__footer'

  node.appendChild(footer)

  addAddEmail(footer)
  addGetEmailsCount(footer)
}

function addAddEmail(footer) {
  const button = document.createElement('button')

  button.innerHTML = 'Add email'
  button.type = 'button'
  button.className = 'emails-input__footer-button'

  footer.appendChild(button)
}

function addGetEmailsCount(footer) {
  const button = document.createElement('button')

  button.innerHTML = 'Get emails count'
  button.type = 'button'
  button.className = 'emails-input__footer-button'

  footer.appendChild(button)
}

export default addFooter
