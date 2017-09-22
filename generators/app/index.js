'use strict'

const NodeAppGenerator = require('generator-node/generators/app')
const _ = require('lodash')
const inquirerNpmName = require('inquirer-npm-name')
const path = require('path')

class CommunityAppGenerator extends NodeAppGenerator {
  constructor (args, options) {
    // Do not include generator-node's boilerplate, coveralls, or travis installations, and set the project root to the current directory.
    const opts = _.merge(options, {
      boilerplate: false,
      coveralls: false,
      projectRoot: './',
      travis: false
    })

    super(args, opts)
  }

  initializing () {
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {})
    super.initializing()
  }

  _askForModuleName () {
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

  prompting () {
    return super.prompting()
  }

  writing () {
    // Re-read the content at this point because a composed generator might modify it.
    const currentPkg = this.fs.readJSON(this.destinationPath('package.json'), {})

    const pkgTemplate = require('./templates/package.json')

    const pkg = _.merge({
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

    if (this.options.license && !this.pkg.license) {
      this.composeWith(require.resolve('generator-license/app'), {
        name: this.props.authorName,
        email: this.props.authorEmail,
        website: this.props.authorUrl
      })
    }

    // If (!this.fs.exists(this.destinationPath('README.md'))) {
    //   this.composeWith(require(generatorNode.readme), {
    //     name: this.props.name,
    //     description: this.props.description,
    //     githubAccount: this.props.githubAccount,
    //     authorName: this.props.authorName,
    //     authorUrl: this.props.authorUrl,
    //     coveralls: this.props.includeCoveralls,
    //     content: this.options.readme
    //   })
    // }
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
