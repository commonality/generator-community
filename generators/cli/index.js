'use strict'

const GeneratorCli = require('generator-node/generators/cli')

class CommunityCliGenerator extends GeneratorCli {
  constructor (args, options) {
    super(args, options)

    this.option('generateInto', {
      defaults: '',
      desc: 'Destination directory of the generated files.',
      required: false,
      type: String
    })
  }

  defaults () {
    this.composeWith(
      require.resolve('generator-node/generators/cli'),
      this.props
    )
  }
}

module.exports = CommunityCliGenerator
