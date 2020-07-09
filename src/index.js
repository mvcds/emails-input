import Logic from './logic/index.js'
import Ui from './ui/index.js'

const CONFIG = {
  emails: []
}

function EmailsInput (inputContainerNode, config) {
  const options = { ...CONFIG, ...config }

  const logic = new Logic()

  Ui(inputContainerNode, logic)

  options.emails.forEach(logic.addEmail)

  return {}
}

export default EmailsInput
