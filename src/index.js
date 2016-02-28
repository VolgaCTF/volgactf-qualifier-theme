import EmailGenerator from './email-generator'

export default class DefaultCustomizer {
  static customizerName = 'default'

  constructor () {
    this.emailGenerator = new EmailGenerator()
  }

  getEmailGenerator () {
    return this.emailGenerator
  }

  getEventTitle () {
    return 'Themis Quals'
  }

  getPartials () {
    return {}
  }
}
