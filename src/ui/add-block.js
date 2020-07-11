import remove from '../icons/icon-remove.svg'

function addBlock ({ editor, input }, addEmailEvent) {
  const block = document.createElement('span')

  block.className = 'emails-input__block'

  if (!addEmailEvent.isValid) {
    block.className = block.className + ' emails-input__block--invalid'
  }

  addLabel(block, addEmailEvent)
  addRemoveButton(block, editor, addEmailEvent)

  editor.insertBefore(block, input)
}

function addLabel (block, addEmailEvent) {
  const label = document.createElement('span')
  label.innerHTML = addEmailEvent.email
  label.className = 'emails-input__block-email'

  block.appendChild(label)
}

function addRemoveButton (block, editor, addEmailEvent) {
  const button = document.createElement('span')

  button.innerHTML = remove
  button.className = 'emails-input__block-remove'

  button.addEventListener('click', addEmailEvent.undo)

  addEmailEvent.onRemoveEmail = () => editor.removeChild(block)

  block.appendChild(button)
}

export default addBlock
