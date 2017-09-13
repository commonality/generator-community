'use strict'

const YeomanGenerator = require('yeoman-generator')
const _ = require('lodash')
const defaultOptions = require('../app/default-options')
const markdownMagic = require('markdown-magic')

module.exports = class extends YeomanGenerator {
  constructor (args, options) {
    super(args, options)
    _.forEach(defaultOptions, (val, key) => this.option(key, val))
  }

  _writeTableOfContents () {
    markdownMagic(
      this.destinationPath(this.options.generateInto, 'README.md')
    )
  }

  writing () {
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath(this.options.generateInto, 'README.md'),
      this.options
    )
  }

  install () {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    })

    this._writeTableOfContents()
  }
}
