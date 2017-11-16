'use strict'
var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-test')

describe('generator-community:contribute', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/contribute'))
      .withPrompts({someAnswer: true})
  })

  it('creates files', () => {
    assert.file([
      'CONTRIBUTING.md'
    ])
  })
})
