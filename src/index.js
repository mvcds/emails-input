import Logic from './logic/index.js'
import Ui from './ui/index.js'

const CONFIG = {
  emails: []
}

function EmailsInput (inputContainerNode, config) {
  const options = { ...CONFIG, ...config }

  const logic = new Logic()

  Ui(inputContainerNode, logic)

  logic.setEmails(options.emails)

  return {
    setEmails: logic.setEmails
  }
}

try {
  globalThis.EmailsInput = EmailsInput
} catch (e) {
  window.EmailsInput = EmailsInput
}

export default EmailsInput
