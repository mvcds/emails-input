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

  button.className = 'emails-input__block-remove'

  button.addEventListener('click', function onRemoveBlock () {
    editor.removeChild(block)
    event.onRemoveEmail()
  })

  addSVG(button)

  block.appendChild(button)
}

function addSVG(button) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use')

  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'bundle.svg#icon-remove')

  svg.appendChild(use)
  button.appendChild(svg)
}

export default addBlock
