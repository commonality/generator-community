'use strict'

const { camelCase } = require('lodash')

const readme = {
  prompts: [
    {
      type: 'checkbox',
      name: 'sections',
      message: '== 📄  README: Select the sections to include in your README',
      choices: [
        {
          name: 'Overview',
          value: 'includeOverview'
        },
        {
          name: 'Configuration',
          value: 'includeConfig'
        },
        {
          name: 'Security',
          value: 'includeSecurity'
        },
        {
          name: 'API',
          value: 'includeApi',
          checked: true
        },
        {
          name: 'Background',
          value: 'includeBackground'
        },
        {
          name: 'License',
          value: 'includeLicense',
          checked: true
        }
      ]
    }
  ],

  // name: this.options.name,
  // camelCaseName: _.camelCase(this.options.name),
  // description: this.options.description,
  // githubAccount: this.options.githubAccount,
  // repository: pkg.repository,
  // author: {
  //   name: this.options.authorName,
  //   url: this.options.authorUrl
  // },
  // includeOverview: this.options.includeOverview,
  // includeConfig: this.options.includeConfig,
  // includeSecurity: this.options.includeSecurity,
  // includeApi: this.options.includeApi,
  // includeBackground: this.options.includeBackground

  toProps: function (generator) {
    return {
      author: {
        name: generator.props.authorName,
        url: generator.props.authorUrl
      },
      camelCaseName: camelCase(generator.props.name),
      description: generator.props.description,
      githubAccount: generator.props.githubAccount,
      license: generator.props.license,
      includeApi: generator.props.includeApi,
      includeBackground: generator.props.includeBackground,
      includeConfig: generator.props.includeConfig,
      includeLogoPath: generator.props.includeLogoPath,
      includeOverview: generator.props.includeOverview,
      includeSecurity: generator.props.includeSecurity,
      name: generator.props.name,
      repository: generator.props.repository
    }
  }
}

module.exports = readme
