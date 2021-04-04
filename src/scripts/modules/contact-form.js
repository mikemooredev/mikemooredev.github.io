import Module from './module/Module'

export default class extends Module {

  initialize() {
    this.setupData()
  }

  setupListeners() {
    if (this.els.formEl) {
      this.els.formEl.addEventListener('submit', e => this.contactFormSubmit(e))
    }
  }

  setupData() {
    this.data = {
      formIsValid: true
    }
  }

  contactFormSubmit(e) {
    e.preventDefault()
    if (this.contactFormValidate()) {

      const form = this.els.formEl
      const data = new FormData(e.target)
      fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        this.els.notificationEl.innerHTML = 'Thanks for your submission!'
        form.reset()
      })
      .catch((error) => {
        this.els.notificationEl.innerHTML = 'Oops! There was a problem submitting your form'
      })

    }
  }

  setNotificationHTML(notificationEl, notificationHTML) {
    if (notificationEl) {
      notificationEl.innerHTML = notificationHTML;
    }
  }

  validateInput(inputEl, notificationEl, notificationHTML) {
    if (inputEl && inputEl.getAttribute('aria-required') === "true") {
      if (!inputEl.value.length) {
        inputEl.classList.add('isDanger')
        inputEl.setAttribute('aria-invalid','true')
        this.data.formIsValid = false;
        this.setNotificationHTML(notificationEl, notificationHTML)
      } else {
        inputEl.classList.remove('isDanger')
        inputEl.setAttribute('aria-invalid','false')
        this.setNotificationHTML(notificationEl, '')
        return true
      }
    }
    return false
  }

  contactFormValidate() {

    this.data.formIsValid = true;

    this.validateInput(this.els.nameEl, this.els.nameNotificationEl, 'Please enter your name.')
    this.validateInput(this.els.emailEl, this.els.emailNotificationEl, 'Please enter a valid email address.')
    this.validateEmail(this.els.emailEl, this.els.emailNotificationEl, 'Please enter a valid email address.')
    this.validateInput(this.els.phoneEl, this.els.phoneNotificationEl, 'Please enter a valid phone number.')
    this.validatePhone(this.els.phoneEl, this.els.phoneNotificationEl, 'Please enter a valid phone number.')
    this.validateInput(this.els.messageEl, this.els.messageNotificationEl, 'Please enter a message.')

    return this.data.formIsValid;

  }

  validateEmail(emailEl, notificationEl, notificationHTML) {
    if (emailEl && emailEl.getAttribute('aria-required') === "true" && emailEl.value.length && !this.regexTest(emailEl.value, /\S+@\S+\.\S+/)) {
      emailEl.setAttribute('aria-invalid','true')
      this.setNotificationHTML(notificationEl, notificationHTML)
      return false
    }    
    emailEl.setAttribute('aria-invalid','false')
    return true
  }

  validatePhone(phoneEl, notificationEl, notificationHTML) {
    if (phoneEl && phoneEl.getAttribute('aria-required') === "true" && phoneEl.value.length && !this.regexTest(phoneEl.value, /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/)) {
      phoneEl.setAttribute('aria-invalid','true')
      this.setNotificationHTML(notificationEl, notificationHTML)
      return false
    }    
    phoneEl.setAttribute('aria-invalid','false')
    return true
  }

  regexTest(text, regex) {
    return regex.test(text);
  }

  get methods() {
    return [
      'setupData',
      'contactFormSubmit',
      'contactFormValidate',
      'validateEmail',
      'validatePhone',
      'validateInput',
      'regexTest',
      'setNotificationHTML'
    ]
  }

}