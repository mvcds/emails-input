import email from 'random-email'

function Logic () {
  //  necessary because text can be repeated
  let id = 0
  const logic = {
    addEmail (raw) {
      const email = raw && raw.trim()

      if (!email) {
        return
      }

      const addEmailEvent = {
        email,
        id: id++,
        isValid: isEmailValid(email),
        undo () {
          logic.removeEmail(addEmailEvent.id)
          addEmailEvent.onRemoveEmail && addEmailEvent.onRemoveEmail()
        }
      }

      logic.emails.push(addEmailEvent)

      logic.onAddEmail && logic.onAddEmail(addEmailEvent)
    },
    removeEmail (id) {
      logic.emails = logic.emails.filter(x => x.id !== id)
    },
    getEmailsCount () {
      const validEmails = logic.emails
        .filter(({ isValid }) => isValid)

      alert(validEmails.length)
    },
    addRandomEmail () {
      const raw = email()

      if (!isEmailValid(raw)) {
        return logic.addRandomEmail()
      }

      logic.addEmail(raw)
    },
    setEmails (emails = []) {
      logic.emails.forEach(({ undo }) => undo())
      emails.forEach(logic.addEmail)
    },
    emails: []
  }

  return logic
}

// https://stackoverflow.com/a/46181/3178998
function isEmailValid (email) {
  //  eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export default Logic
