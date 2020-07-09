import addBlock from './add-block.js'

function addInput(editor, logic) {
  const input = document.createElement('input')

  input.className = 'emails-input__email'
  input.type = 'email'
  input.tabIndex = 0
  input.autofocus = true
  input.placeholder = 'add more people…'

  input.addEventListener('keydown', function onKeyDown (event) {
    if (event.key === ',' || event.key === 'Enter') {
      logic.addEmail(input.value)
      input.value = ''
    }
  })

  input.addEventListener('input', function onInput (event) {
    if (event.data === ',' || event.data === 'Enter') {
      input.value = ''
    }
  })

  input.addEventListener('blur', function onBlur (event) {
    logic.addEmail(input.value)
    input.value = ''
  })

  input.addEventListener('paste', function onPaste (event) {
    //  uses the timeout to be sure that the value has changed
    setTimeout(() => {
      input.value.split(',').forEach(logic.addEmail)
      input.value = ''
    }, 0);
  })

  logic.onAddEmail = addBlock.bind(null, { editor, input })

  editor.appendChild(input)
}

export default addInput
