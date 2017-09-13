const defaultOptions = {
  generateInto: {
    required: false,
    defaults: '',
    desc: 'Destination directory for generated files',
    type: String
  },
  name: {
    required: true,
    desc: 'Product name',
    type: String
  },
  description: {
    required: true,
    desc: 'Product description',
    type: String
  },
  githubAccount: {
    required: true,
    desc: 'GitHub account/organization name',
    type: String
  },
  authorName: {
    required: true,
    desc: 'Author name',
    type: String
  },
  authorUrl: {
    required: true,
    desc: 'Author URL',
    type: String
  },
  licenseName: {
    required: true,
    desc: 'Open source software license',
    type: String
  },
  licenseUrl: {
    required: true,
    desc: 'URL to your LICENSE file',
    type: String,
    defaults: './LICENSE'
  },
  lang: {
    required: true,
    desc: 'Product\'s primary programming language',
    type: String
  },
  includeLogoPath: {
    required: false,
    desc: 'README.md: Absolute URL or relative path to your logo (optional)',
    type: Boolean,
    defaults: 'docs/img/logo.sample.png',
    alias: 'l'
  },
  includeSecurity: {
    required: false,
    desc: 'README.md: Security section content (optional)',
    type: Boolean,
    defaults: false,
    alias: 's'
  },
  includeOverview: {
    required: false,
    desc: 'README.md: Overview section content (optional)',
    type: Boolean,
    defaults: false,
    alias: 'o'
  },
  includeBackground: {
    required: false,
    desc: 'README.md: Background section content (optional)',
    type: Boolean,
    defaults: false,
    alias: 'b'
  },
  includeConfig: {
    required: false,
    desc: 'README.md: Configuration instructions (optional)',
    type: Boolean,
    defaults: false,
    alias: 'c'
  },
  includeApi: {
    required: false,
    desc: 'README.md: Public API overview (optional)',
    type: Boolean,
    defaults: true,
    alias: 'a'
  }
}

module.exports = defaultOptions
