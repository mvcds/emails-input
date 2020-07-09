import addContent from './add-content.js'
import addFooter from './add-footer.js'

function Ui (node, logic) {
  node.className = 'emails-input'

  addContent(node, logic)
  addFooter(node)
}

export default Ui
