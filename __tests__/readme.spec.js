'use strict'
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

const options = {
  authorName: 'Yeoman',
  authorUrl: 'http://yeoman.io',
  dependencyManager: 'Gradle',
  description: 'a cool project',
  githubAccount: 'commonality',
  gitRemoteOriginUrl: '/',
  lang: 'Java',
  licenseName: 'MIT',
  licenseUrl: './LICENSE.md',
  logoPath: 'docs/img/logo.sample.png',
  name: 'my-product',
  repository: {
    url: '/'
  }
}

describe('community:readme', () => {
  beforeEach(() => {
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions(options)
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('package.json'), {
          license: 'MIT'
        })
      })
  })

  it('creates an instruction manual for consumers called README.md', () => {
    assert.file('README.md')
    assert.fileContent('README.md', '__TODO:__ Put badges here.')
    assert.fileContent('README.md', '> a cool project')
    assert.fileContent('README.md', '`my-product` is written in Java, which must be installed prior to use. Java requires Gradle, which is used for installing dependencies.')
  })
})

describe('community:readme --includeApi', () => {
  beforeEach(() => {
    options.logoPath = 'img/logo.png'
    options.name = 'my-product'
    options.description = 'a cool project'
    options.githubAccount = 'yeoman'
    options.includeApi = true
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions(options)
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('package.json'), {
          license: 'MIT'
        })
      })
  })

  it('adds an "API" section to README.md', () => {
    assert.file('README.md')
    assert.fileContent('README.md', 'The API section should detail')
    assert.fileContent('README.md', 'getCurrencyByAlphabeticCode')
    assert.fileContent('README.md', 'const alphabeticCode = \'USD\'')
  })
})

describe('community:readme --includeConfig', () => {
  beforeEach(() => {
    options.includeConfig = true
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions(options)
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('package.json'), {
          license: 'MIT'
        })
      })
  })

  it('adds a "Configuration" section to README.md', () => {
    assert.fileContent('README.md', '## Configuration')
  })
})

describe('community:readme --includeOverview', () => {
  beforeEach(() => {
    options.includeOverview = true
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions(options)
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('package.json'), {
          license: 'MIT'
        })
      })
  })

  it('adds an "Overview" section to README.md', () => {
    assert.fileContent('README.md', '## Overview')
  })
})

describe('community:readme --includeSecurity', () => {
  beforeEach(() => {
    options.includeSecurity = true
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions(options)
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('package.json'), {
          license: 'MIT'
        })
      })
  })

  it('adds a "Security" section to README.md', () => {
    assert.fileContent('README.md', '## Security')
  })
})

describe('community:readme --generate-into', () => {
  beforeEach(() => {
    options.generateInto = 'other/'
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions(options)
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('other/package.json'), {
          license: 'MIT'
        })
      })
  })

  it('generates README.md in the directory path your provide', () => {
    assert.file('other/README.md')
    assert.fileContent('other/README.md', '> a cool project')
  })
})
