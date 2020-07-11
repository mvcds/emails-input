import addContent from './add-content.js'
import addFooter from './add-footer.js'

function Ui (node, logic, options) {
  node.className = 'emails-input'

  addContent(node, logic, options)
  addFooter(node, logic)
}

export default Ui
