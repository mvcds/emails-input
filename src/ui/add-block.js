function addBlock ({ editor, input }, event) {
  const block = document.createElement('span')

  block.className = 'emails-input__block'

  if (!event.isValid) {
    block.className = block.className + ' emails-input__block--invalid'
  }

  addLabel(block, event)
  addRemoveButton(block, editor, event)

  editor.insertBefore(block, input)
}

function addLabel (block, event) {
  const label = document.createElement('span')
  label.innerHTML = event.email
  label.className = 'emails-input__block-email'

  block.appendChild(label)
}

function addRemoveButton (block, editor, event) {
  const button = document.createElement('span')

  button.innerHTML = 'X'
  button.className = 'emails-input__block-remove'

  button.addEventListener('click', function onRemoveBlock () {
    editor.removeChild(block)
    event.onRemoveEmail()
  })

  block.appendChild(button)
}

export default addBlock
