import addInput from './add-input.js'

function addContent (node, logic, options) {
  const content = document.createElement('div')

  content.className = 'emails-input__content'

  node.appendChild(content)

  addTitle(content, options)
  addEditor(content, logic)
}

function addTitle (content, { createTitleNodes }) {
  const header = document.createElement('header')
  const title = createTitleNodes()

  header.className = 'emails-input__title'

  title.forEach((node) => header.appendChild(node))

  content.appendChild(header)
}

function addEditor (content, logic) {
  const editor = document.createElement('div')

  editor.className = 'emails-input__editor'

  content.appendChild(editor)

  addInput(editor, logic)
}

export default addContent
