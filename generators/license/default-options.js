'use strict'

const defaultOptions = {
  defaultLicense: {
    desc: 'Default license',
    required: false,
    type: String
  },
  email: {
    desc: 'Email of the license owner',
    required: false,
    type: String
  },
  generateInto: {
    defaults: '',
    desc: 'Destination directory of the generated files',
    required: false,
    type: String
  },
  license: {
    desc: `Enter an SPDX license name`,
    required: false,
    type: String
  },
  licensePrompt: {
    defaults: '⦾ 📄  LICENSE: Select a license',
    desc: 'License prompt text',
    hide: true,
    required: false,
    type: String
  },
  name: {
    desc: 'Name of the license owner',
    required: false,
    type: String
  },
  output: {
    defaults: 'LICENSE',
    desc: 'Set the output file for the generated license',
    required: false,
    type: String
  },
  website: {
    desc: 'Website of the license owner',
    required: false,
    type: String
  },
  year: {
    defaults: (new Date()).getFullYear(),
    desc: 'Year(s) to include on the license',
    required: false,
    type: String
  }
}

module.exports = defaultOptions
