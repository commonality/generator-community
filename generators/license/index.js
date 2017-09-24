'use strict'
const YeomanGenerator = require('yeoman-generator')

class CommunityLicenseGenerator extends YeomanGenerator {
  constructor (args, options) {
    super(args, options)

    this.option('generateInto', {
      defaults: '',
      desc: 'Destination directory of the generated files.',
      required: false,
      type: String
    })
  }

  default () {
    const props = {
      name: this.options.name,
      email: this.options.email,
      website: this.options.website,
      license: this.options.license
    }
    this.composeWith('generator-license/app', props)
  }
}

module.exports = CommunityLicenseGenerator
