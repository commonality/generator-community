'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  // Constructor(args, options) {
  //   super(args, options)
  //
  //   this.option('readme', {
  //     type: String,
  //     required: false,
  //     desc: 'Content to insert in the README.md file'
  //   })
  // }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantastic ' + chalk.red('generator-community') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  default() {
    this.composeWith(
      require.resolve('generator-standard-readme/app')
    );
  }

  install() {
    this.installDependencies();
  }
};
