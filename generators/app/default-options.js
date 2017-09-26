const defaultOptions = {
  authorName: {
    desc: 'Author name',
    required: true,
    type: String
  },
  authorUrl: {
    desc: 'Author URL',
    required: true,
    type: String
  },
  conduct: {
    defaults: true,
    desc: 'Code of Conduct',
    required: false,
    type: Boolean
  },
  dependencyManager: {
    defaults: 'Unspecified',
    desc: 'Tool used to install third-party libraries',
    required: false,
    type: String
  },
  generateInto: {
    defaults: '',
    desc: 'Destination directory for generated files',
    required: false,
    type: String
  },
  gitRemoteOriginUrl: {
    defaults: '/',
    desc: 'The URI (SSH or HTTPS) of your Git repository',
    required: false,
    type: String
  },
  githubAccount: {
    desc: 'GitHub account/organization name',
    required: true,
    type: String
  },
  description: {
    desc: 'Product description',
    required: true,
    type: String
  },
  lang: {
    defaults: 'Unspecified',
    desc: 'Product\'s primary programming language',
    required: true,
    type: String
  },
  license: {
    desc: 'Open source software license',
    required: false,
    type: String
  },
  licenseUrl: {
    default: './LICENSE',
    desc: 'URL to your LICENSE file',
    required: true,
    type: String
  },
  name: {
    desc: 'Product name',
    required: true,
    type: String
  },
  includeApi: {
    alias: 'a',
    defaults: true,
    desc: 'README.md: Public API overview (optional)',
    required: false,
    type: Boolean
  },
  includeBackground: {
    alias: 'b',
    defaults: false,
    desc: 'README.md: Background section content (optional)',
    required: false,
    type: Boolean
  },
  includeConfig: {
    alias: 'c',
    defaults: false,
    desc: 'README.md: Configuration instructions (optional)',
    required: false,
    type: Boolean
  },
  includeOverview: {
    alias: 'o',
    defaults: false,
    desc: 'README.md: Overview section content (optional)',
    required: false,
    type: Boolean
  },
  includeSecurity: {
    alias: 's',
    defaults: false,
    desc: 'README.md: Security section content (optional)',
    required: false,
    type: Boolean
  }
}

module.exports = defaultOptions
