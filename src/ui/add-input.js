function addInput (editor, logic) {
  const input = document.createElement('input')

  input.className = 'emails-input__email'
  input.type = 'email'
  input.tabIndex = 0
  input.autofocus = true
  input.placeholder = 'add more people…'

  const addEmail = (email) => {
    logic.addEmail(email)
    input.value = ''
  }

  input.addEventListener('input', function onKeyDown (event) {
    if (event.data === ',') {
      input.value.split(',').forEach(addEmail)
    }
  })

  input.addEventListener('keydown', function onKeyDown (event) {
    if (event.key === 'Enter') {
      addEmail(input.value)
    }
  })

  input.addEventListener('blur', function onBlur (event) {
    addEmail(input.value)
  })

  input.addEventListener('paste', function onPaste (event) {
    // uses the timeout to be sure that the value has changed
    setTimeout(() => {
      input.value.split(',').forEach(addEmail)
    }, 0)
  })

  editor.appendChild(input)

  return input
}

export default addInput
