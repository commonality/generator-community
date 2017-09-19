'use strict'
const util = require('../generators/util')
const specify = it

describe('util provides open source license information', () => {
  specify('either from a Generator\'s options', () => {
    const mockGenerator = {
      options: {
        licenseName: 'MIT',
        licenseUrl: null
      }
    }
    expect(util.license(mockGenerator).url).toBe('./LICENSE')
  })

  specify('or it defaults to "MIT" (till MVP3: community:license is released)', () => {
    const mockGenerator = {
      options: {
        licenseName: null
      }
    }
    expect(util.license(mockGenerator).name).toBe('MIT')
  })
})
