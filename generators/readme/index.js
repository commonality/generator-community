'use strict'

const YeomanGenerator = require('yeoman-generator')
const { forEach, merge } = require('lodash')
const defaultOptions = require('../app/default-options')
const readme = require('./readme')

class CommunityReadmeGenerator extends YeomanGenerator {
  constructor (args, options) {
    super(args, options)

    forEach(defaultOptions, (val, key) => this.option(key, val))

    this.options = merge(this.options, readme.toProps({options, props: options}))
  }

  writing () {
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath(this.options.generateInto, 'README.md'),
      this.options
    )
  }

  end () {
    readme.writeTableOfContents(this)
  }
}

module.exports = CommunityReadmeGenerator
