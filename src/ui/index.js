import addContent from './add-content.js'
import addFooter from './add-footer.js'

function Ui (node, logic, { classes, ...options }) {
  node.className = `emails-input ${classes}`

  addContent(node, logic, options)
  addFooter(node, logic)
}

export default Ui
