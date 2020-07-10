function Logic () {
  //  necessary because text can be repeated
  let id = 0
  const logic = {
    addEmail (raw) {
      const email = raw && raw.trim()

      if (!email) {
        return
      }

      const data = {
        email,
        id: id++,
        isValid: isEmailValid(email)
      }

      logic.emails.push(data)

      const event = {
        email,
        isValid: data.isValid,
        onRemoveEmail: () => {
          const index = logic.emails.findIndex(x => x.id === data.id)

          logic.emails.splice(index, 1)
        }
      }

      logic.onAddEmail(event)
    },
    onGetEmailsCount () {
      const validEmails = logic.emails
        .filter(({ isValid }) => isValid)

      alert(validEmails.length)
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
