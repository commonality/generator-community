'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const readme = require('../generators/readme/readme')

describe('generator-community:app', () => {
  beforeEach(() => {
    jest.mock('github-username', () => {
      return () => Promise.resolve('gregswindle')
    })

    jest.mock('git-remote-origin-url', () => {
      const originUrl = 'https://github.com/commonality/generator-community'
      return () => Promise.resolve(originUrl)
    })
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.resetModules()
    jest.restoreAllMocks()
    jest.unmock('github-username')
    jest.unmock('git-remote-origin-url')
  })

  it('generates recommended community standards docs for Git repositories', () => {
    assert.file([
      'docs/img/logo-osi.png'
    ])
  })

  /* Product author information */
  describe('generator-community:app', () => {
    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({someAnswer: true})
        .on('ready', (gen) => {
          gen.fs.writeJSON(gen.destinationPath('package.json'), {
            license: 'MIT',
            author: {
              name: 'Greg Swindle',
              email: 'greg@swindle.net',
              url: 'https://github.com/gregswindle'
            }
          })
        })
    })

    it('identifies the product\'s author from the product manifest\'s "author" object (package.json/#/author<Object>)', () => {
      assert.file('README.md')
      assert.fileContent('README.md', '© [Greg Swindle][author-url]')
      assert.fileContent('README.md', '[author-url]: https://github.com/gregswindle')
    })
  })

  /* Product author information */
  describe('generator-community:app', () => {
    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({someAnswer: true})
        .on('ready', (gen) => {
          gen.fs.writeJSON(gen.destinationPath('package.json'), {
            license: 'MIT',
            author: 'Greg Swindle <greg@swindle.net> (https://github.com/gregswindle)'
          })
        })
    })

    it('identifies the product\'s author from the product manifest\'s "author" string (package.json/#/author<String>)', () => {
      assert.file('README.md')
      assert.fileContent('README.md', '© [Greg Swindle][author-url]')
      assert.fileContent('README.md', '[author-url]: https://github.com/gregswindle')
    })
  })

  /* Product name information */
  describe('generator-community:app', () => {
    beforeEach(() => {
      return helpers.run(require.resolve('../generators/app'))
        .withOptions({name: 'mockPackage'})
    })

    it('identifies the product\'s "name" from the product manifest\'s "name" string (package.json/#/name<String>)', () => {
      assert.file('README.md')
      assert.fileContent('README.md', '# `mock-package`')
    })
  })

  /* Product name information */
  describe('generator-community:app', () => {
    beforeEach(() => {
      jest.resetModules()

      jest.mock('inquirer-npm-name', () => {
        return () => Promise.resolve(false)
      })

      return helpers.run(require.resolve('../generators/app'))
        .withPrompts({name: ''})
        .on('ready', (gen) => {
          gen.fs.writeJSON(gen.destinationPath('package.json'), {
            name: undefined
          })
        })
    })

    it('validates the product name', () => {
      assert.file('README.md')
      assert.fileContent('README.md', '# ``')
    })
  })

  /* Product repository information */
  describe('generator-community:app', () => {
    beforeEach(() => {
      return helpers.run(require.resolve('../generators/app'))
        .on('ready', (gen) => {
          gen.fs.writeJSON(gen.destinationPath('package.json'), {
            repository: 'commonality/generator-community'
          })
        })
    })

    it('parses the .git/config file in order to identify the product\'s repository', () => {
      assert.file('README.md')
      assert.fileContent('README.md', '[issues-new-defect-url]: https://github.com/commonality/generator-community/issues/new?')
    })
  })

  /* Product repository information */
  describe('generator-community:app', () => {
    beforeEach(() => {
      jest.resetModules()

      jest.mock('git-remote-origin-url', () => {
        const err = new Error('no gitconfig to be found at /app')
        return () => Promise.reject(err)
      })

      return helpers.run(require.resolve('../generators/app'))
        .on('ready', (gen) => {
          gen.fs.writeJSON(gen.destinationPath('package.json'), {
            repository: {
              type: 'git',
              url: 'https://github.com/example/mock.git'
            }
          })
        })
    })

    it('parses the product-manifest (package.json) to identify the product\'s repository', () => {
      assert.file('README.md')
      assert.fileContent('README.md', '[issues-new-defect-url]: https://github.com/example/mock/issues/new?')
    })
  })

  /* Product github account information */
  describe('generator-community:app', () => {
    beforeEach(() => {
      jest.resetModules()

      jest.mock('git-remote-origin-url', () => {
        const err = new Error('no gitconfig to be found at /path')
        return () => Promise.reject(err)
      })

      return helpers.run(require.resolve('../generators/app'))
        .withOptions({
          authorEmail: '',
          githubAccount: 'gregswindle'
        })
        .on('ready', (gen) => {
          gen.fs.writeJSON(gen.destinationPath('package.json'), {
            repository: 'commonality/generator-community'
          })
        })
    })

    it('identifies the product author\'s github account', () => {
      assert.file('README.md')
      assert.fileContent('README.md', '[MIT][license-url] © [Greg Swindle][author-url].')
    })
  })

  /* Product repository README */
  describe('generator-community:app', () => {
    let generatorPromptSpy = null

    beforeEach(() => {
      return helpers.run(require.resolve('../generators/app'))
        .withPrompts({
          sections: [
            'includeApi',
            'includeOverview',
            'includeSecurity'
          ]
        })
        .on('ready', (gen) => {
          gen.fs.writeJSON(gen.destinationPath('package.json'), {
            repository: 'commonality/generator-community'
          })
          generatorPromptSpy = jest.spyOn(gen, 'prompt')
        })
    })

    it('adds optional sections to the README file', () => {
      assert.file('README.md')
      assert.fileContent('README.md', '## API')
      assert.fileContent('README.md', '## Overview')
      assert.fileContent('README.md', '## Security')
      expect(generatorPromptSpy).toHaveBeenCalledWith(readme.prompts)
    })
  })
})
