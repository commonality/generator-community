/* eslint security/detect-non-literal-fs-filename: ["warn", "error"] */

'use strict'

const DefaultPrompts = require('./default-prompts')
const NodeAppGenerator = require('generator-node/generators/app')
const YeomanGenerator = require('yeoman-generator')
const _ = require('lodash')
const defaultOptions = require('./default-options')
const githubUsername = require('github-username')
const inquirerNpmName = require('inquirer-npm-name')
const path = require('path')
const readme = require('../readme/readme')

class CommunityAppGenerator extends YeomanGenerator {
  constructor (args, options) {
    // Do not include generator-node's boilerplate, coveralls, or travis installations, and set the project root to the current directory.
    super(args, options)

    _.forEach(defaultOptions, (val, key) => this.option(key, val))

    this.nodeAppGenerator = new NodeAppGenerator(args, this.options)
  }

  initializing () {
    this.nodeAppGenerator.pkg = this.fs.readJSON(this.destinationPath('package.json'), {})
    this.nodeAppGenerator.initializing()

    this.props = this.nodeAppGenerator.props
    this.props.license = this.nodeAppGenerator.pkg.license
    this.pkg = this.nodeAppGenerator.pkg
    this.props.repository = this.pkg.repository
  }

  _askForGithubAccount () {
    if (this.options.githubAccount) {
      this.props.githubAccount = this.options.githubAccount
      return Promise.resolve()
    }

    /* istanbul ignore next */
    return githubUsername(this.props.authorEmail)
      .then((username) => username, () => '')
      .then((username) => {
        return this.prompt({
          name: 'githubAccount',
          message: 'GitHub username or organization',
          default: username
        }).then((prompt) => {
          this.props.githubAccount = prompt.githubAccount
        })
      })
  }

  _askForProductInfo () {
    const questions = new DefaultPrompts(this).prompts
    return this.prompt(questions).then((answers) => {
      this.props = _.merge(this.props, answers)
    })
  }

  _askForProductName () {
    if (this.pkg.name || this.options.name) {
      this.props.name = this.pkg.name || _.kebabCase(this.options.name)
      return Promise.resolve()
    }

    /* istanbul ignore next */
    return inquirerNpmName({
      name: 'name',
      message: 'Product Name',
      default: path.basename(process.cwd()),
      filter: _.kebabCase,
      validate (str) {
        return str.length > 0
      }
    }, this).then((answer) => {
      this.props.name = answer.name
    })
  }

  _askForReadmeInfo () {
    const questions = readme.prompts
    return this.prompt(questions).then((answer) => {
      /* istanbul ignore next */
      _.forEach(answer.sections, (section) => {
        _.set(this.props, section, true)
      })
    })
  }

  prompting () {
    return this._askForGithubAccount()
      .then(this._askForProductName.bind(this))
      .then(this._askForProductInfo.bind(this))
      .then(this._askForReadmeInfo.bind(this))
  }

  default () {
    if (this.options.editorconfig) {
      this.composeWith(
        require.resolve('generator-node/generators/editorconfig')
      )
    }

    this.composeWith(
      require.resolve('generator-node/generators/nsp')
    )

    this.composeWith(require.resolve('generator-node/generators/git'), {
      name: this.props.name,
      githubAccount: this.props.githubAccount
    })

    if (this.options.cli) {
      this.composeWith(
        require.resolve('generator-node/generators/cli')
      )
    }

    /* istanbul ignore else */
    if (this.options.license && !this.pkg.license) {
      this.composeWith(require.resolve('../license'), {
        email: this.props.authorEmail,
        license: this.props.license,
        name: this.props.authorName,
        website: this.props.homepage
      }, {
        link: 'strong'
      })
    }

    /* istanbul ignore else */
    if (!this.fs.exists(this.destinationPath('README.md'))) {
      this.composeWith(require.resolve('../readme'), this.props)
    }

    /* istanbul ignore else */
    if (this.options.conduct) {
      this.composeWith(require.resolve('../conduct'), {
        email: this.props.authorEmail
      })
    }
  }

  writing () {
    // Re-read the content at this point because a composed generator might modify it.
    const currentPkg = this.fs.readJSON(this.destinationPath('package.json'), {})

    const pkgTemplate = require('./templates/package.json')

    const issuesUrl = `https://github.com/${this.props.repository}/issues`

    const pkg = _.merge({
      bugs: issuesUrl,
      name: _.kebabCase(this.props.name),
      version: '0.0.0',
      description: this.props.description,
      homepage: this.props.homepage,
      author: {
        name: this.props.authorName,
        email: this.props.authorEmail,
        url: this.props.authorUrl
      },
      keywords: []
    }, pkgTemplate, currentPkg)

    // Combine the keywords
    if (this.props.keywords && this.props.keywords.length) {
      pkg.keywords = _.uniq(this.props.keywords.concat(pkg.keywords))
    }

    // Let's extend package.json so we're not overwriting user previous fields
    this.fs.writeJSON(this.destinationPath('package.json'), pkg)
  }

  install () {
    super.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    })
  }

  end () {
    this.log('Thank you for generating community!')
  }
}

module.exports = CommunityAppGenerator
