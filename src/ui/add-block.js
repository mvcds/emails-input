import remove from '../icons/icon-remove.svg'

function addBlock ({ editor, input, logic }, addEmailEvent) {
  const block = document.createElement('span')

  block.className = 'emails-input__block'

  if (!addEmailEvent.isValid) {
    block.className = block.className + ' emails-input__block--invalid'
  }

  addLabel(block, addEmailEvent)
  addRemoveButton(block, logic, addEmailEvent)

  editor.insertBefore(block, input)

  const unregister = logic.register({
    onRemoveEmail (id) {
      if (id === addEmailEvent.id) {
        editor.removeChild(block)
        unregister()
      }
    }
  })
}

function addLabel (block, { email }) {
  const label = document.createElement('span')
  label.innerHTML = email
  label.className = 'emails-input__block-email'

  block.appendChild(label)
}

function addRemoveButton (block, logic, { id }) {
  const button = document.createElement('span')

  button.innerHTML = remove
  button.className = 'emails-input__block-remove'

  button.addEventListener('click', () => logic.removeEmail(id))

  block.appendChild(button)
}

export default addBlock
