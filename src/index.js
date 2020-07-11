import Logic from './logic/index.js'
import Ui from './ui/index.js'

const CONFIG = {
  emails: [],
  createTitleNodes () {
    const strong = document.createElement('strong')

    strong.innerText = 'Board Name'

    return [
      document.createTextNode('Share '),
      strong,
      document.createTextNode(' with others')
    ]
  }
}

function EmailsInput (inputContainerNode, config) {
  const { emails, ...options } = { ...CONFIG, ...config }

  const logic = new Logic()

  Ui(inputContainerNode, logic, options)

  logic.setEmails(emails)

  return {
    setEmails: logic.setEmails,
    getEmails: logic.getEmails
  }
}

try {
  globalThis.EmailsInput = EmailsInput
} catch (e) {
  window.EmailsInput = EmailsInput
}

export default EmailsInput
