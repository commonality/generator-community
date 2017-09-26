'use strict'

const YeomanGenerator = require('yeoman-generator')
const { isUndefined, forEach, merge } = require('lodash')
const defaultOptions = require('../app/default-options')
const gitUrlParse = require('git-url-parse')
const readme = require('./readme')

class CommunityReadmeGenerator extends YeomanGenerator {
  constructor (args, options) {
    super(args, options)

    forEach(defaultOptions, (val, key) => this.option(key, val))

    const props = readme.toProps({options, props: options})

    this.options = merge(this.options, props)
    this.props = merge({}, props)
  }

  _getRepositoryPath (pkg) {
    const repo = pkg.repository
    if (isUndefined(repo)) {
      return '.'
    }
    return gitUrlParse(repo).pathname.replace(/\/?/, '/')
  }

  writing () {
    const pkg = this.fs.readJSON(this.destinationPath(this.options.generateInto, 'package.json'), {})

    this.options.license = this.props.license || pkg.license
    this.options.repository = this._getRepositoryPath(pkg)

    this.fs.copyTpl(
      this.templatePath('en/_README.md'),
      this.destinationPath(this.options.generateInto, 'README.md'),
      this.options
    )
  }

  end () {
    readme.writeTableOfContents(this)
  }
}

module.exports = CommunityReadmeGenerator
