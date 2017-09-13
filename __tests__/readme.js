'use strict'
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

const options = {
  authorName: 'Yeoman',
  authorUrl: 'http://yeoman.io',
  dependencyManager: 'Gradle',
  description: 'a cool project',
  githubAccount: 'yeoman',
  includeBadges: true,
  lang: 'Java',
  logoPath: 'docs/img/logo.sample.png',
  name: 'my-product',
  licenseName: 'MIT'
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

  it('creates and fill contents in README.md', () => {
    assert.file('README.md')
    assert.fileContent('README.md', 'const myProduct = require(\'my-product\')')
    assert.fileContent('README.md', '> a cool project')
    assert.fileContent('README.md', 'npm install --save my-product')
    // assert.fileContent('README.md', 'MIT © [Yeoman](http://yeoman.io)')
    // assert.fileContent('README.md', '[travis-image]: https://travis-ci.org/yeoman/my-product.svg?branch=master')
    // assert.fileContent('README.md', 'includeBadges')
  })
})

describe('community:readme --logoPath', () => {
  beforeEach(() => {
    options.logoPath = 'img/logo.png'
    options.name = 'my-product'
    options.description = 'a cool project'
    options.githubAccount = 'yeoman'
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions(options)
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('package.json'), {
          license: 'MIT'
        })
      })
  })

  it('fill custom contents in README.md', () => {
    assert.file('README.md')
    // assert.fileContent('README.md', 'My custom content')
    // assert.fileContent('README.md', 'MIT © [Yeoman](http://yeoman.io)')
    // assert.fileContent('README.md', '[travis-image]: https://travis-ci.org/yeoman/my-product.svg?branch=master')
    // assert.fileContent('README.md', 'includeBadges')
    assert.fileContent('README.md', '[logo-path]: img/logo.png')
  })
})

describe('community:readme --includeBadges false', () => {
  beforeEach(() => {
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions({
        name: 'my-product',
        description: 'a cool project',
        githubAccount: 'yeoman',
        authorName: 'Yeoman',
        authorUrl: 'http://yeoman.io',
        includeBadges: false
      })
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('package.json'), {
          license: 'MIT'
        })
      })
  })

  it('does not include includeBadges README.md', () => {
    assert.noFileContent('README.md', 'includeBadges')
  })
})

describe('community:readme --generate-into', () => {
  beforeEach(() => {
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions({
        name: 'my-product',
        description: 'a cool project',
        githubAccount: 'yeoman',
        authorName: 'Yeoman',
        authorUrl: 'http://yeoman.io',
        includeBadges: true,
        generateInto: 'other/'
      })
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('other/package.json'), {
          license: 'MIT'
        })
      })
  })

  it('creates and fill contents in README.md', () => {
    assert.file('other/README.md')
    assert.fileContent('other/README.md', 'const myProduct = require(\'my-product\')')
    assert.fileContent('other/README.md', '> a cool project')
    assert.fileContent('other/README.md', 'npm install --save my-product')
    // assert.fileContent('other/README.md', 'MIT © [Yeoman](http://yeoman.io)')
    // assert.fileContent('other/README.md', '[travis-image]: https://travis-ci.org/yeoman/my-product.svg?branch=master')
    // assert.fileContent('other/README.md', 'includeBadges')
  })
})

describe('community:readme --content and --generate-into', () => {
  beforeEach(() => {
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions({
        name: 'my-product',
        description: 'My custom content',
        githubAccount: 'yeoman',
        authorName: 'Yeoman',
        authorUrl: 'http://yeoman.io',
        includeBadges: true,
        generateInto: 'other/'
      })
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('other/package.json'), {
          license: 'MIT'
        })
      })
  })

  it('fill custom contents in README.md', () => {
    assert.file('other/README.md')
    assert.fileContent('other/README.md', 'My custom content')
    // assert.fileContent('other/README.md', 'MIT © [Yeoman](http://yeoman.io)')
    // assert.fileContent('other/README.md', '[travis-image]: https://travis-ci.org/yeoman/my-product.svg?branch=master')
    // assert.fileContent('other/README.md', 'includeBadges')
  })
})

describe('community:readme --no-includeBadges and --generate-into', () => {
  beforeEach(() => {
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions({
        name: 'my-product',
        description: 'a cool project',
        githubAccount: 'yeoman',
        authorName: 'Yeoman',
        authorUrl: 'http://yeoman.io',
        includeBadges: false,
        generateInto: 'other/'
      })
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('other/package.json'), {
          license: 'MIT'
        })
      })
  })

  it('does not include includeBadges README.md', () => {
    assert.noFileContent('other/README.md', 'includeBadges')
  })
})
