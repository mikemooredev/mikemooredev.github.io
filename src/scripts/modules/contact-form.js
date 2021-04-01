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
      formIsValid: true,
      mail: {
        options: {
          apiKey: 'C7DAC08514BC176826913DA29764F86BCF44E5317EE8CBE061253A814DAB6959E6D5B610E6F5E05513F4AD19E6679463',
          apiUri: 'https://api.elasticemail.com/',
          apiVersion: 'v2'
        }
      }
    }
  }

  contactFormSubmit(e) {
    e.preventDefault()
    if (this.contactFormValidate()) {

      window.grecaptcha.ready(() => {
        // do request for recaptcha token
        // response is promise with passed token
        window.grecaptcha.execute(this.recaptchaSitekey)
          .then(token => {
            // add token value to form
            this.onRecaptchaVerify(token)
          });
      });

    }
  }

  setNotificationHTML(notificationEl, notificationHTML) {
    if (notificationEl) {
      notificationEl.innerHTML = notificationHTML;
    }
  }

  validateInput(inputEl, notificationEl, notificationHTML) {
    if (inputEl) {
      if (!inputEl.value.length) {
        inputEl.classList.add('isDanger')
        this.data.formIsValid = false;
        this.setNotificationHTML(notificationEl, notificationHTML)
      } else {
        inputEl.classList.remove('isDanger')
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

  onRecaptchaVerify(recaptchaToken) {

    console.log(recaptchaToken)

    const eeClient = require('elasticemail-webapiclient').client;

    const bodyText = `Name: ${this.els.nameEl.value} \r\n` +
      `Email: ${this.els.emailEl.value} \r\n` +
      `Phone: ${this.els.phoneEl.value} \r\n` +
      `Message: ${this.els.messageEl.value} \r\n\r\n`;

    //const ee = new elasticemail(this.data.mail.options);

    const ee = new eeClient(this.data.mail.options);

    // Load account data
    ee.Account.Load().then(function (resp) {
      console.log(resp);
    });

    const emailParams = {
      "subject": 'New Enquiry',
      "to": 'me@mikemoore.dev',
      "from": 'noreply@mikemoore.dev',
      "fromName": this.els.nameEl.value,
      "sender": this.els.emailEl.value,
      "senderName": this.els.nameEl.value,
      "replyTo": this.els.emailEl.value,
      "replyToName": this.els.nameEl.value,
      "bodyText": bodyText,
      "bodyType": 'Plain',
      "isTransactional": true
    };

    ee.Email.Send(emailParams)
      .catch((err) => {
        this.setNotificationHTML(this.els.notificationEl, `<p class="isDanger boxed">${err}</p>`)
      })
      .then((result) => {

        if (result.success) {
          this.setNotificationHTML(this.els.notificationEl, `<p class="isSuccess boxed">Thank you for getting in touch, I'll get back to you as soon as possible.</p>`)
        } else {
          this.setNotificationHTML(this.els.notificationEl, `<p class="isDanger boxed">Oops, it looks like something went wrong, please email me directly at <a href="mailto:${emailParams.to}" title="Direct email: ${emailParams.to}">${emailParams.to}</a></p>`)
        }

      });

  }

  onRecaptchaExpired() {
    this.setNotificationHTML(this.els.notificationEl, `<p class="isDanger">There has been an error processing your enquiry, please refresh the page and try again.</p>`)
  }

  validateEmail(emailEl, notificationEl, notificationHTML) {
    if (emailEl && emailEl.value.length && this.regexTest(emailEl.value, /\S+@\S+\.\S+/)) {
      return true
    }
    this.setNotificationHTML(notificationEl, notificationHTML)
    return false
  }

  validatePhone(phoneEl, notificationEl, notificationHTML) {
    if (phoneEl && phoneEl.value.length && this.regexTest(phoneEl.value, /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/)) {
      return true
    }
    this.setNotificationHTML(notificationEl, notificationHTML)
    return false
  }

  regexTest(text, regex) {
    return regex.test(text);
  }

  get recaptchaSize() {
    return this.el && this.el.dataset && this.el.dataset.recaptchaSize ? this.el.dataset.recaptchaSize : null
  }
  get recaptchaSitekey() {
    return this.el && this.el.dataset && this.el.dataset.recaptchaSitekey ? this.el.dataset.recaptchaSitekey : null
  }

  get methods() {
    return [
      'setupData',
      'contactFormSubmit',
      'contactFormValidate',
      'onRecaptchaVerify',
      'onRecaptchaExpired',
      'validateEmail',
      'validatePhone',
      'validateInput',
      'regexTest',
      'setNotificationHTML'
    ]
  }

}