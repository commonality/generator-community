'use strict'

const markdownMagic = require('markdown-magic')
const util = require('../util')
const { camelCase } = require('lodash')

const readme = {
  prompts: [
    {
      type: 'checkbox',
      name: 'sections',
      message: '⦾ 📄  README: Select the sections to include in your README',
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

  toProps (generator) {
    const license = util.license(generator)
    return {
      author: {
        name: generator.props.authorName,
        url: generator.props.authorUrl
      },
      camelCaseName: camelCase(generator.props.name),
      description: generator.props.description,
      generateInto: generator.props.generateInto || '',
      githubAccount: generator.props.githubAccount,
      license,
      includeApi: generator.props.includeApi,
      includeBackground: generator.props.includeBackground,
      includeConfig: generator.props.includeConfig,
      includeOverview: generator.props.includeOverview,
      includeSecurity: generator.props.includeSecurity,
      name: generator.props.name,
      repository: generator.props.repository
    }
  },

  writeTableOfContents (generator) {
    const readmePath = generator.destinationPath(generator.options.generateInto, 'README.md')
    markdownMagic(readmePath)
  }
}

module.exports = readme
