const path = require('path')
const markdownMagic = require('markdown-magic')

const config = {
  transforms: {
    SCRIPTS: require('markdown-magic-package-scripts')
  }
}

const markdownPath = path.join(__dirname, 'README.md')
markdownMagic(markdownPath, config)
