'use strict'
var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-test')

describe('generator-community:conduct', () => {
  afterAll(() => {
    process.setMaxListeners(0)
  })

  describe(', when given a contact email with --email,', () => {
    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../generators/conduct'))
        .withOptions({
          conduct: true,
          email: 'somebody@example.com'
        })
    })

    it('creates a CODE_OF_CONDUCT.md with a team contact email', () => {
      assert.file('CODE_OF_CONDUCT.md')
      assert.fileContent('CODE_OF_CONDUCT.md', '[email]: somebody@example.com')
    })
  })

  describe(', when not given an --email,', () => {
    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../generators/conduct'))
        .withOptions({
          conduct: true
        })
        .withPrompts({
          email: 'somebody@example.com'
        })
        .on('ready', (generator) => {
          generator.options.email = null
        })
    })

    it('prompts for an email address', () => {
      assert.fileContent('CODE_OF_CONDUCT.md', '[email]: somebody@example.com')
    })
  })
})
