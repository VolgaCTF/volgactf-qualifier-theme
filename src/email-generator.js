import mustache from 'mustache'
import fs from 'fs'
import path from 'path'

export default class EmailGenerator {
  constructor () {
    this.templates = {}
    this.loadTemplates()
  }

  loadTemplates () {
    this.templates['welcome_plain'] = fs.readFileSync(path.join(__dirname, '..', 'templates', 'welcome.plain.mustache'), 'utf8')
    this.templates['welcome_html'] = fs.readFileSync(path.join(__dirname, '..', 'templates', 'welcome.html.mustache'), 'utf8')

    this.templates['restore_plain'] = fs.readFileSync(path.join(__dirname, '..', 'templates', 'restore.plain.mustache'), 'utf8')
    this.templates['restore_html'] = fs.readFileSync(path.join(__dirname, '..', 'templates', 'restore.html.mustache'), 'utf8')
  }

  getWelcomeEmail (params) {
    let plainMessage = mustache.render(this.templates['welcome_plain'], params)
    let htmlMessage = mustache.render(this.templates['welcome_html'], params)

    return {
      subject: 'Welcome to Themis Quals!',
      plain: plainMessage,
      html: htmlMessage
    }
  }

  getRestoreEmail (params) {
    let plainMessage = mustache.render(this.templates['restore_plain'], params)
    let htmlMessage = mustache.render(this.templates['restore_html'], params)

    return {
      subject: 'Reset your password!',
      plain: plainMessage,
      html: htmlMessage
    }
  }
}
