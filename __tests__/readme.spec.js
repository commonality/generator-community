'use strict'

const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('community:readme', () => {
  afterAll(() => {
    process.setMaxListeners(0)
  })

  beforeEach(() => {
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions({
        name: 'my-project',
        description: 'a cool project',
        githubAccount: 'yeoman',
        authorName: 'Yeoman',
        authorUrl: 'http://yeoman.io'
      })
      .on('ready', (gen) => {
        gen.fs.writeJSON(gen.destinationPath('package.json'), {
          license: 'MIT',
          repository: 'org/repo'
        })
      })
  })

  it('writes the license (if one has been declared)', () => {
    assert.file('README.md')
    assert.fileContent('README.md', '> a cool project')
    assert.fileContent('README.md', '[MIT][license-url] © [Yeoman][author-url]')
  })

  it('writes a link reference for new "feature request" issues', () => {
    assert.fileContent('README.md', '[issues-new-feat-url]: /org/repo/issues/new?title=feat')
  })

  it('writes a link reference for new "defect (bug)" issues', () => {
    assert.fileContent('README.md', '[issues-new-defect-url]: /org/repo/issues/new?title=fix')
  })
})

describe('community:readme --generate-into', () => {
  beforeEach(() => {
    return helpers.run(require.resolve('../generators/readme'))
      .withOptions({
        name: 'my-project',
        description: 'a cool project',
        githubAccount: 'yeoman',
        authorName: 'Yeoman',
        authorUrl: 'http://yeoman.io',
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
    assert.fileContent('other/README.md', '> a cool project')
    assert.fileContent('other/README.md', '[MIT][license-url] © [Yeoman][author-url]')
    assert.fileContent('other/README.md', '[issues-new-feat-url]: ./issues/new?title=feat')
  })
})
