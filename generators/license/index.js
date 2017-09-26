'use strict'

const YeomanGenerator = require('yeoman-generator')
const licenseDefaultOptions = require('./default-options')
const { forEach } = require('lodash')

class CommunityLicenseGenerator extends YeomanGenerator {
  constructor (args, options) {
    super(args, options)

    forEach(licenseDefaultOptions, (val, key) => this.option(key, val))
  }

  default () {
    this.props = {
      name: this.options.name,
      email: this.options.email,
      website: this.options.website,
      license: this.options.license
    }
    this.composeWith('generator-license/app', this.props)
  }
}

module.exports = CommunityLicenseGenerator
