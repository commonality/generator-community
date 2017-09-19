/* eslint handle-callback-err: ["warn", "error"] */

'use strict'

const DefaultPrompts = require('./default-prompts')
const YeomanGenerator = require('yeoman-generator')
const _ = require('lodash')
const defaultOptions = require('./default-options')
const gitRemoteOriginUrl = require('git-remote-origin-url')
const gitUrlParse = require('git-url-parse')
const githubUsername = require('github-username')
const inquirerNpmName = require('inquirer-npm-name')
const merge = _.merge
const parseAuthor = require('parse-author')
const path = require('path')
const readme = require('../readme/readme')
const util = require('../util')

class CommunityAppGenerator extends YeomanGenerator {
  constructor (args, options) {
    super(args, options)

    _.forEach(defaultOptions, (val, key) => this.option(key, val))
  }

  _initAuthorInfo () {
    /* istanbul ignore else */
    if (_.isObject(this.pkg.author)) {
      this.props.authorName = this.pkg.author.name
      this.props.authorEmail = this.pkg.author.email
      this.props.authorUrl = this.pkg.author.url
    } else if (_.isString(this.pkg.author)) {
      const info = parseAuthor(this.pkg.author)
      this.props.authorName = info.name
      this.props.authorEmail = info.email
      this.props.authorUrl = info.url
    }
    return this
  }

  _initProductInfo () {
    // Pre set the default props from the information we have at this point
    this.props = {
      name: this.pkg.name,
      description: this.pkg.description,
      version: this.pkg.version,
      homepage: this.pkg.homepage,
      license: util.license(this)
    }
    return this
  }

  _initRepoInfo () {
    gitRemoteOriginUrl()
      .then((originUrl) => {
        this.options.gitRemoteOriginUrl = originUrl
        this.props.repository = {
          url: _.trimEnd(gitUrlParse(originUrl), '.git')
        }
      })
      .catch(() => {
        const repo = this.pkg.repository
        /* istanbul ignore else */
        if (_.isObject(repo)) {
          repo.url = repo.url.replace('.git', '')
          this.options.gitRemoteOriginUrl = repo.url
          this.props.repository = repo
        } else if (_.isString(repo)) {
          const originUrl = `/${repo}`
          this.options.gitRemoteOriginUrl = originUrl
          this.props.repository = {
            url: originUrl
          }
        }
      })
    return this
  }

  initializing () {
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {})

    this
      ._initProductInfo()
      ._initAuthorInfo()
      ._initRepoInfo()
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

  _askFor () {
    const prompts = new DefaultPrompts(this).prompts

    return this.prompt(prompts).then((props) => {
      this.props = merge(this.props, props)
    })
  }

  _askForReadme () {
    this.props = merge(this.props, readme.toProps(this))
    return this.prompt(readme.prompts)
      .then((props) => {
        _.forEach(props.sections, (section) => {
          _.set(this.props, section, true)
        })
      })
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
        })
          .then((prompt) => {
            this.props.githubAccount = prompt.githubAccount
          })
      })
  }

  _copyDocs () {
    this.fs.copy(
      this.templatePath('docs'),
      this.destinationPath(this.options.generateInto, 'docs')
    )
  }

  _generateReadme () {
    this.composeWith(require.resolve('../readme'), this.props)
  }

  prompting () {
    return this._askForProductName()
      .then(this._askFor.bind(this))
      .then(this._askForGithubAccount.bind(this))
      .then(this._askForReadme.bind(this))
  }

  default () {
    this._copyDocs()
    // Generate a README file
    this._generateReadme()
  }

  install () {
    this.installDependencies({
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
