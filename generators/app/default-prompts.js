'use strict'

class DefaultPrompts {
  constructor (generator) {
    this.prompts = [
      {
        name: 'description',
        message: 'Write a short description/value proposition',
        type: String,
        when: !generator.props.description
      },
      {
        name: 'homepage',
        message: 'Product homepage URL',
        when: !generator.props.homepage
      },
      {
        name: 'authorName',
        message: 'Author\'s name',
        when: !generator.props.authorName,
        default: generator.user.git.name(),
        store: true
      },
      {
        name: 'authorEmail',
        message: 'Author\'s e-mail',
        when: !generator.props.authorEmail,
        default: generator.user.git.email(),
        store: true
      },
      {
        name: 'authorUrl',
        message: 'Author\'s homepage',
        when: !generator.props.authorUrl,
        store: true
      },
      {
        name: 'lang',
        message: 'Which programming language does this product use the most?',
        store: true
      },
      {
        name: 'dependencyManager',
        message: 'What do you use to manage dependencies (e.g., Gradle, npm, NuGet)? Leave blank if you don\'t know.',
        store: true
      }
    ]
  }
}

module.exports = DefaultPrompts
