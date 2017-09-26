'use strict'

const YeomanGenerator = require('yeoman-generator')

class CommunityConductGenerator extends YeomanGenerator {
  constructor (args, options) {
    super(args, options)

    this.option('email', {
      defaults: this.options.email || this.user.git.email(),
      desc: 'Contact email',
      required: true,
      type: String
    })

    this.option('generateInto', {
      defaults: '',
      desc: 'Destination directory',
      required: false,
      type: String
    })
  }

  prompting () {
    if (this.options.email) {
      return Promise.resolve(true)
    } else {
      const prompts = [
        {
          name: 'email',
          message: 'Contacts\'s e-mail',
          when: !this.options.email,
          default: this.user.git.email(),
          store: true
        }
      ]
      return this.prompt(prompts).then((answer) => {
        this.options.email = answer.email
      })
    }
  }

  writing () {
    this.fs.copyTpl(
      this.templatePath('en/_CODE_OF_CONDUCT.md'),
      this.destinationPath(this.options.generateInto, 'CODE_OF_CONDUCT.md'),
      this.options
    )
  }
};

module.exports = CommunityConductGenerator
