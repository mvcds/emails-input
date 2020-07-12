import email from 'random-email'

function Logic () {
  const observers = []
  //  an id necessary because text can be repeated
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
        isValid: isEmailValid(email)
      }

      logic.emails.push(addEmailEvent)
      observers.forEach(({ onAddEmail }) => {
        onAddEmail && onAddEmail(addEmailEvent)
      })
    },
    removeEmail (id) {
      logic.emails = logic.emails.filter(email => email.id !== id)

      observers.forEach(({ onRemoveEmail }) => {
        onRemoveEmail && onRemoveEmail(id)
      })
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
      logic.emails.forEach(({ id }) => logic.removeEmail(id))
      emails.forEach(logic.addEmail)
    },
    getEmails () {
      return logic.emails.map(({ email }) => email)
    },
    register (callbacks) {
      observers.push(callbacks)
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
