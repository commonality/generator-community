'use strict'

const licenseDefaultOptions = require('../license/default-options')
const spdx = require('../license/spdx')

class DefaultPrompts {
  constructor (generator) {
    this.prompts = [
      {
        name: 'description',
        message: 'Write a short description/value proposition',
        type: String,
        when: !generator.props.description
      },
      {
        name: 'homepage',
        message: 'Product homepage URL',
        when: !generator.props.homepage
      },
      {
        name: 'authorName',
        message: 'Author\'s name',
        when: !generator.props.authorName,
        default: generator.user.git.name(),
        store: true
      },
      {
        name: 'authorEmail',
        message: 'Author\'s e-mail',
        when: !generator.props.authorEmail,
        default: generator.user.git.email(),
        store: true
      },
      {
        name: 'authorUrl',
        message: 'Author\'s homepage',
        when: !generator.props.authorUrl,
        store: true
      },
      {
        name: 'keywords',
        message: 'Package keywords (comma to split)',
        when: !generator.pkg.keywords,
        filter (words) {
          /* istanbul ignore next */
          return words.split(/\s*,\s*/g)
        }
      },
      {
        name: 'lang',
        message: 'Which programming language does this product use the most?',
        store: true
      },
      {
        name: 'dependencyManager',
        message: 'What do you use to manage dependencies (e.g., Gradle, npm, NuGet)? Leave blank if you don\'t know.',
        store: true
      },
      {
        type: 'list',
        name: 'license',
        message: licenseDefaultOptions.licensePrompt.defaults,
        default: generator.props.defaultLicense || generator.props.license,
        when: !generator.props.license,
        choices: spdx.licenses
      },
      {
        type: 'confirm',
        name: 'conduct',
        message: '⦾ 📄  CODE_OF_CONDUCT: Would you like to generate a Code of Conduct?',
        default: true,
        when: !generator.props.conduct
      }
    ]
  }
}

module.exports = DefaultPrompts
