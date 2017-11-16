'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('license:generators/license', () => {
  it('does not create new package.json', () => {
    return helpers
      .run(require.resolve('../generators/license'))
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })
      .then(() => {
        assert.file('LICENSE')
        assert.noFile('package.json')
      })
  })

  it('edit pre-existing package.json', () => {
    return helpers
      .run(require.resolve('../generators/license'))
      .inTmpDir(function (dir) {
        const done = this.async()
        const fs = require('fs')
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        fs.writeFile(path.join(dir, 'package.json'), '{}', done)
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })
      .then(() => {
        assert.file('LICENSE')
        assert.fileContent('package.json', '"license": "MIT"')
      })
  })

  it('with author options: --name --email --website', () => {
    return helpers
      .run(require.resolve('../generators/license'))
      .withPrompts({
        license: 'ISC'
      })
      .withOptions({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com'
      })
      .then(() => {
        assert.fileContent('LICENSE', 'ISC')
        assert.fileContent('LICENSE', 'Rick <foo@example.com> (http://example.com)')
        assert.noFile('package.json')
      })
  })

  it('makes npm module private when license selected is nolicense', () => {
    return helpers
      .run(require.resolve('../generators/license'))
      .inTmpDir(function (dir) {
        const fs = require('fs')
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        fs.writeFileSync(path.join(dir, 'package.json'), '{}')
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        licensePrompt: 'Choose a license',
        license: 'nolicense'
      })
      .then(() => {
        assert.noFileContent('package.json', '"license"')
        assert.fileContent('package.json', '"private": true')
      })
  })
})
