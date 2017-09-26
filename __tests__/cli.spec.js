'use strict'
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('community:cli', () => {
  afterAll(() => {
    process.setMaxListeners(0)
  })

  beforeEach(() => {
    return helpers.run(require.resolve('generator-node/generators/cli'))
      .on('ready', (generator) => {
        generator.fs.write(
          generator.destinationPath('package.json'),
          '{"name": "my-lib"}'
        )
      })
  })

  it('creates cli.js', () => {
    assert.file('lib/cli.js')
    assert.fileContent('lib/cli.js', 'const meow = require(\'meow\')')
    assert.fileContent('lib/cli.js', 'const myLib = require(\'./\')')
  })

  it('extends package.json', () => {
    assert.fileContent('package.json', '"bin": "lib/cli.js"')
    assert.fileContent('package.json', '"meow"')
    assert.fileContent('package.json', /"lec": "\^/)
    assert.fileContent('package.json', '"prepublish": "lec lib/cli.js -c LF && nsp check"')
  })
})

describe('community:cli', () => {
  beforeEach(() => {
    return helpers.run(require.resolve('generator-node/generators/cli'))
      .withOptions({generateInto: 'other/'})
      .on('ready', (generator) => {
        generator.fs.write(
          generator.destinationPath('other/package.json'),
          '{"name": "my-lib"}'
        )
      })
  })

  it('creates lib/cli.js in the directory specified by --generateInto', () => {
    assert.file('other/lib/cli.js')
  })
})
