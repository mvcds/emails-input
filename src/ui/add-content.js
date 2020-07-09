import addInput from './add-input.js'

function addContent (node, logic) {
  const content = document.createElement('div')

  content.className = 'emails-input__content'

  node.appendChild(content)

  addTitle(content)
  addEditor(content, logic)
}

function addTitle(content) {
  const title = document.createElement('header')

  title.className = 'emails-input__title'
  title.innerHTML = 'Share Board Name with others'

  content.appendChild(title)
}

function addEditor(content, logic) {
  const editor = document.createElement('div')

  editor.className = 'emails-input__editor'

  content.appendChild(editor)

  addInput(editor, logic)
}

export default addContent
