import createRandomEmail from 'random-email'

function Logic () {
  let observers = []
  let emails = []
  //  UX was weird when I tried to forbid repeated emails
  //  so an ID was necessary due to time constraints =D
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

      emails.push(addEmailEvent)
      observers.forEach(({ onAddEmail }) => {
        onAddEmail && onAddEmail(addEmailEvent)
      })
    },
    removeEmail (id) {
      emails = emails.filter(email => email.id !== id)

      observers.forEach(({ onRemoveEmail }) => {
        onRemoveEmail && onRemoveEmail(id)
      })
    },
    getEmailsCount () {
      const validEmails = emails
        .filter(({ isValid }) => isValid)

      alert(validEmails.length)
    },
    addRandomEmail () {
      const email = createRandomEmail()

      if (!isEmailValid(email)) {
        return logic.addRandomEmail()
      }

      logic.addEmail(email)
    },
    setEmails (list = []) {
      emails.forEach(({ id }) => logic.removeEmail(id))
      list.forEach(logic.addEmail)
    },
    getEmails () {
      return emails.map(({ email }) => email)
    },
    register (callback) {
      observers.push(callback)

      return () => {
        observers = observers.filter(observer => observer !== callback)
      }
    }
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
