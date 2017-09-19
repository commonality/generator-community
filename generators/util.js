'use strict'

const _ = require('lodash')
const gitRemoteOriginUrl = require('git-remote-origin-url')
const gitUrlParse = require('git-url-parse')
const licensePath = './LICENSE'
const parseAuthor = require('parse-author')
const pkg = require('../package.json')
const updateNotifier = require('update-notifier')

const util = {

  // git: function() {
  //   const props = {
  //     originUrl: '',
  //     gitRepo: gitUrlParse('')
  //   }
  //   return gitRemoteOriginUrl().then(originUrl => {
  //     props.originUrl = originUrl
  //     props.gitRepo = gitUrlParse(originUrl)
  //     return Promise.resolve(props)
  //   }, () => {
  //     return Promise.reject(new Error('Remote git repository not found'))
  //   })
  // },

  // initializer: {
  //   author: (generator) => {
  //     if (_.isObject(generator.pkg.author)) {
  //       generator.props.authorName = generator.pkg.author.name
  //       generator.props.authorEmail = generator.pkg.author.email
  //       generator.props.authorUrl = generator.pkg.author.url
  //     } else if (_.isString(generator.pkg.author)) {
  //       const info = parseAuthor(generator.pkg.author)
  //       generator.props.authorName = info.name
  //       generator.props.authorEmail = info.email
  //       generator.props.authorUrl = info.url
  //     }
  //     return Promise.resolve(generator)
  //   },
  //
  //   git: (generator) => {
  //     generator.props.originUrl = ''
  //     generator.props.gitRepo = {}
  //     return gitRemoteOriginUrl().then(originUrl => {
  //       generator.props.originUrl = originUrl
  //       generator.props.gitRepo = gitUrlParse(originUrl)
  //       return Promise.resolve(generator)
  //     })
  //   },
  //
  //   init: (generator) => {
  //     generator.pkg = generator.fs.readJSON(generator.destinationPath('package.json'), {})
  //     generator.props = {
  //       name: generator.pkg.name,
  //       description: generator.pkg.description,
  //       version: generator.pkg.version,
  //       homepage: generator.pkg.homepage
  //     }
  //     return util.initializer.author()
  //       .then(() => {
  //         return util.initializer.git(generator)
  //       })
  //       .then(() => {
  //         return util.initializer.props(generator)
  //       })
  //   },
  //
  //   props: function(generator) {
  //     const attrs = {
  //       author: {
  //         name: generator.options.authorName,
  //         url: generator.options.authorUrl
  //       },
  //       authorName: generator.props.authorName,
  //       authorUrl: generator.props.authorUrl,
  //       content: generator.options.readme,
  //       coveralls: generator.props.includeCoveralls,
  //       description: generator.props.description,
  //       email: generator.props.authorEmail,
  //       license: generator.props.license,
  //       name: generator.props.name,
  //       originUrl: generator.props.originUrl,
  //       scmAccount: generator.props.scmAccount,
  //       website: generator.props.authorUrl
  //     }
  //     return Promise.resolve(attrs)
  //   }
  // },

  license: function(generator) {
    // Return a stub until we composeWith generator-license
    const license = {
      name: generator.options.licenseName || 'MIT',
      url: generator.options.licenseUrl || licensePath
    }
    return license
  },

  notify: function() {
    const daily = 1000 * 60 * 60 * 24 * 1
    updateNotifier({
      pkg,
      updateCheckInterval: daily
    }).notify()
  }
}

util.notify()

module.exports = util
