'use strict'
const _ = require('lodash')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-community:app,', () => {
  afterAll(() => {
    process.setMaxListeners(0)
  })

  beforeEach(() => {
    jest.mock('inquirer-npm-name', () => {
      return () => Promise.resolve(true)
    })

    jest.mock('github-username', () => {
      return () => Promise.resolve('unicornUser')
    })

    jest.mock('generator-license/app', () => {
      const helpers = require('yeoman-test')
      return helpers.createDummyGenerator()
    })
  })

  describe('when generating a new product repository,', () => {
    it('creates a new product manifest as package.json', () => {
      const answers = {
        name: 'generator-community',
        description: 'A generator',
        homepage: 'http://yeoman.io',
        githubAccount: 'yeoman',
        authorName: 'The Yeoman Team',
        authorEmail: 'hi@yeoman.io',
        authorUrl: 'http://yeoman.io',
        keywords: ['foo', 'bar']
      }

      return helpers.run(require.resolve('../generators/app'))
        .withPrompts(answers)
        .then(() => {
          assert.file([
            '.editorconfig',
            '.gitignore',
            '.gitattributes'
          ])

          assert.file('package.json')
          assert.jsonFileContent('package.json', {
            version: '0.0.0',
            description: answers.description,
            homepage: answers.homepage,
            author: {
              name: answers.authorName,
              email: answers.authorEmail,
              url: answers.authorUrl
            },
            keywords: answers.keywords
          })
        })
    })
  })

  describe('when running on an existing product repository,', () => {
    it('extends the current package.json properties', () => {
      const pkg = {
        name: 'generator-community',
        version: '1.0.34',
        description: 'lots of fun',
        homepage: 'http://yeoman.io',
        repository: 'yeoman/generator-community',
        author: 'The Yeoman Team',
        keywords: ['bar']
      }
      return helpers.run(require.resolve('../generators/app'))
        .withPrompts({
          name: 'generator-community',
          keywords: 'bar'
        })
        .on('ready', (gen) => {
          gen.fs.writeJSON(gen.destinationPath('package.json'), pkg)
        })
        .then(() => {
          const newPkg = _.extend({name: 'generator-community'}, pkg)
          assert.jsonFileContent('package.json', newPkg)
        })
    })
  })

  /* Product name information */
  describe('when given the CLI option --name,', () => {
    beforeEach(() => {
      return helpers.run(require.resolve('../generators/app'))
        .withOptions({
          name: 'mockPackage',
          cli: true
        })
    })

    it('writes the product\'s "name" to the product manifest\'s "name" string (package.json/#/name<String>)', () => {
      assert.fileContent('package.json', 'mock-package')
    })
  })

  describe('when no local Git repository exists,', () => {
    beforeEach(() => {
      jest.resetModules()

      jest.mock('inquirer-npm-name', () => {
        return () => Promise.resolve(false)
      })

      return helpers.run(require.resolve('../generators/app'))
        .withOptions({
          githubAccount: 'account',
          name: 'product'
        })
    })

    it('creates one', (done) => {
      assert.file('.git/config')
      done()
    })
  })

  describe('when given the CLI option --no-editorconfig,', () => {
    it('does not include an .editorconfig file', () => {
      return helpers.run(require.resolve('../generators/app'))
        .withOptions({editorconfig: false})
        .then(() => assert.noFile('.editorconfig'))
    })
  })

  describe('when given the CLI option --no-license,', () => {
    it('does not include a LICENSE file', () => {
      return helpers.run(require.resolve('../generators/app'))
        .withOptions({license: false})
        .then(() => assert.noFile('LICENSE'))
    })
  })
})
