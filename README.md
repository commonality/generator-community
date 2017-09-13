# `generator-community`

[![License][license-badge-image]][license-url] [![Dependencies' licenses][fossa-badge-image]][fossa-url] [![NSP Status][nsp-badge-image]][nsp-url] [![Synk Vulnerabilities][snyk-vulnerabilities-badge-image]][snyk-vulnerabilities-url]<br>[![StackShare][stack-share-badge-image]][stack-share-url] [![Dependency Status][david-dm-badge-image]][daviddm-url] [![devDependencies Status][david-dm-dev-badge-image]][daviddm-dev-url] <br>[![Build Status][travis-badge-image]][travis-url] [![Coverage percentage][coveralls-badge-image]][coveralls-url] [![Codacy quality][codacy-badge-image]][codacy-url]
> Generate `README`, `CODE_OF_CONDUCT`, `CONTRIBUTING`, and `LICENSE` files according to [recommended community standards][opensource-guide-community-standards-url].



## Table of contents
<!-- AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [1. Installation](#1-installation)
- [2. Usage](#2-usage)
- [3. API](#3-api)
  * [3.1. `community:readme` subgenerator](#31-communityreadme-subgenerator)
- [4. Contributing to `generator-community`](#4-contributing-to-generator-community)
- [5. License](#5-license)
<!-- AUTO-GENERATED-CONTENT:END -->

## 1. Installation

__Prerequisite software__

`generator-community` is written in Node.js (JavaScript), which must be installed prior to use. Node.js (JavaScript) requires npm, which is used for installing dependencies. You'll also need to install Yeoman, a command-line interface framework.

> ```shell
> # Install Yeoman and generator-community globally
> npm install yo generator-community --global
> ```



## 2. Usage

> ```shell
> # Install all recommended community documents
> # with guided assistance:
> yo community
>
> ⚠️  🔗  Heads up, You! 🔗 ⚠️
>
> You do not appear to have a Git repository associated with this directory.
>
> As a result, some of your links (e.g., "Report a defect" and "Request a
> ew feature") will not work properly.
>
> Please consider cancelling generator-community and either creating a new
> repository, cloning a remote, or forking another repository.
>
> Otherwise, be sure to fix and test your links!
>
> ? Module Name readme
> ? The name above already exists on npm, choose another? No
> ? Which programming language does this product use the most? Node.js (JavaScript)
> ? What do you use to manage dependencies (e.g., Gradle, npm, NuGet)? Leave blank if you don't know. npm
> ? GitHub username or organization gregswindle
> ? ⦾ 📄  README: Select the sections to include in your README (Press <space> to select, <a> to toggle all, <i> to inverse selection)
> ❯◯ Overview
> ◯ Configuration
> ◯ Security
> ◉ API
> ◯ Background
> ◉ License
> ?  ⦾ 📄  README: Select the sections to include in your README API, License
>   conflict README.md
> ? Overwrite README.md? (ynaxdH)
 > y) overwrite
 > n) do not overwrite
 > a) overwrite this and all others
 > x) abort
 > d) show the differences between the old and the new
 > h) Help, list all options
 > Answer:
 > ? Overwrite README.md? overwrite
     > force README.md
>
>
> I'm all done. Running npm install for you to install the required dependencies. If this fails, try running the command yourself.
>
> # Dynamic table of contents generation, too___wat___
>  ✔ /README.md Updated
>   Transforms run
>    ⁕ TOC
>
 > npm WARN @1.0.0 No license field.
>
 > up to date in 0.784s
 > Thanks for generating community!
> ```




## 3. API

`generator-community` provides sub-generators, too, which gives you the option of installing one document at a time.

### 3.1. `community:readme` subgenerator

You can automate README.md documentation via the command line interface (CLI) (e.g., during one of your CI/CD pipelines). To view all CLI options, use the `--help` or `-h` option:

> ```shell
> yo community:readme --help
>
> Usage:
>   yo community:readme [options]
>
> Options:
>   -h,   --help               # Print the generator's options and usage
>         --skip-cache         # Do not remember prompt answers                                    Default: false
>         --skip-install       # Do not automatically install dependencies                         Default: false
>         --generateInto       # Destination directory for generated files
>         --name               # Product name
>         --description        # Product description
>         --githubAccount      # GitHub account/organization name
>         --authorName         # Author name
>         --authorUrl          # Author URL
>         --licenseName        # Open source software license
>         --licenseUrl         # URL to your LICENSE file                                          Default: ./LICENSE
> -l,   --includeLogoPath    # README.md: Absolute URL or relative logo  path (optional)  Default: docs/img/logo.sample.png
> -s,   --includeSecurity    # README.md: Security section content (optional)                    Default: false
> -o,   --includeOverview    # README.md: Overview section content (optional)                    Default: false
> -b,   --includeBackground  # README.md: Background section content (optional)                  Default: false
> -c,   --includeConfig      # README.md: Configuration instructions (optional)                  Default: false
> -a,   --includeApi         # README.md: Public API overview (optional)                         Default: true
> ```

If you prefer interactive assistance, you can simply run the subgenerator without any options:

> ```shell
> yo community
> ```



## 4. Contributing to `generator-community`
> [![Learn how to make a Pull Request with free training][prs-welcome-badge-image]][prs-welcome-url]
>
> We welcome contributors with [Pull Requests][prs-welcome-url]!

Contributions in the form of GitHub pull requests are welcome. Before embarking on a significant change, please adhere to the following guidelines:

  1. Read the [Code of Conduct][code-of-conduct-url].
  1. Create an issue to discuss the proposed change and ensure that it is likely to be merged:
      * [Report a defect][issues-new-defect-url] (aka "bug")
      * [Request a new feature][issues-new-feat-url]
  1. Follow [Contributing to `generator-community`][contributing-url]'s coding conventions and Git workflow if you're willing and able to program (or want to learn how).

## 5. License


[MIT][license-url] © [Greg Swindle][author-url]




<!-- ⛔️ 📝 NOTE: PLEASE ALPHABETIZE LINK REFERENCES. 📝 ⛔️ -->

[angularjs-commit-message-guidelines-url]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit
[author-url]: https://github.com/commonality
[changelog-url]: ./CHANGELOG.md
[cla-url]: https://www.clahub.com/agreements/commonality/generator-community
[codacy-badge-image]: https://img.shields.io/codacy/grade/de7b30825ac649de8b7255e4303fb069.svg?style=flat-square
[codacy-url]: https://www.codacy.com/app/commonality/generator-community?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=commonality/generator-community&amp;utm_campaign=Badge_Grade
[code-of-conduct-url]: ./.github/CODE_OF_CONDUCT.md
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[complexity-report-url]: ./docs/COMPLEXITY.md
[contributing-url]: ./.github/CONTRIBUTING.md
[contributing-url]: ./CONTRIBUTING.md
[conventional-changelog-url]: https://github.com/conventional-changelog/conventional-changelog
[conventional-commits-badge-image]: https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg?style=flat-square
[conventional-commits-url]: https://conventionalcommits.org/
[coolor-palette-url]: https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533
[coveralls-badge-image]: https://img.shields.io/coveralls/repos/commonality/generator-community/badge.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/commonality/generator-community
[david-dm-badge-image]: https://img.shields.io/david/dev/commonality/generator-community.svg?style=flat-square
[david-dm-dev-badge-image]: https://img.shields.io/david/commonality/generator-community.svg?style=flat-square
[daviddm-dev-url]: https://david-dm.org/commonality/generator-community?type=dev
[daviddm-url]: https://david-dm.org/commonality/generator-community
[fossa-badge-image]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fcommonality%2Fgenerator-community.svg?type=shield
[fossa-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fcommonality%2Fgenerator-community?ref=badge_shield
[generator-community-color-palette-image]: ./docs/style-guide/generator-community-color-palette.png
[generator-community-color-palette-pdf-url]: ./docs/style-guide/generator-community-color-palette.pdf
[generator-community-color-palette-png-url]: ./docs/style-guide/generator-community-color-palette.png
[generator-community-color-palette-scss-url]: ./docs/style-guide/generator-community-color-palette.scss
[generator-community-logo-image]: ./docs/img/logo-commonalaxy.png
[generator-community-repo-url]: ./README.md
[gh-standardjs-url]: https://github.com/feross/standard
[git-workflow-feature-branch-tutorial-url]: https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow
[greenkeeper-badge-image]: https://badges.greenkeeper.io/commonality/generator-community.svg?style=flat-square
[greenkeeper-url]: https://greenkeeper.io/
[icon-alert-50-image]: ./docs/img/icons8/icon-alert-50.png
[icon-eslint-image]: ./docs/img/tech-stack/icon-eslint-50.jpeg
[icon-jest-image]: ./docs/img/tech-stack/icon-jest-50.jpeg
[icon-nodejs-image]: ./docs/img/tech-stack/icon-nodejs-50.png
[icon-npm-image]: ./docs/img/tech-stack/icon-npm-50.png
[icon-package-image]: ./docs/img/icons8/icon-package-filled.png
[icon-road-milestone-image]: ./docs/img/icons8/img-goal-filled-50.png
[icon-standardjs-image]: ./docs/img/tech-stack/icon-standardjs-50.png
[icon-travis-image]: ./docs/img/icons8/travis-ci-50.png
[icon-user-manual-image]: ./docs/img/icons8/icon-user-manual-grey-50.png
[icon-yeoman-image]: ./docs/img/tech-stack/icon-yeoman-50.png
[icons8-license-url]: https://icons8.com/license/
[issues-new-defect-url]: https://github.com/commonality/generator-community/issues/new?title=fix%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-url]: https://github.com/commonality/generator-community/issues/new?title=feat%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-url]: https://github.com/commonality/generator-community/issues/new
[issues-url]: https://github.com/commonality/generator-community/issues
[least-privilege-url]: https://en.wikipedia.org/wiki/Principle_of_least_privilege
[license-badge-image]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square
[license-choose-url]: https://choosealicense.com/
[license-no-license-url]: https://choosealicense.com/no-license/
[license-unlicense-url]: https://choosealicense.com/licenses/#unlicense
[license-url]: ./LICENSE
[license-url]: LICENSE
[markdown-toc-url]: https://github.com/jonschlinkert/markdown-toc
[mda-book-url]: https://www.amazon.com/Enterprise-Patterns-MDA-Building-Archetype/dp/032111230X
[nodejs-url]: https://nodejs.org
[nodejs-url]: https://nodejs.org/
[npm-badge-image]: https://img.shields.io/npm/v/generator-community.svg?style=flat-square
[npm-scripts-docs-url]: https://docs.npmjs.com/misc/scripts
[npm-url]: https://npmjs.org/package/generator-community
[npmjs-url]: https://www.npmjs.com/
[nsp-badge-image]: https://nodesecurity.io/orgs/commonality/projects/0662674a-ad9f-4b2f-a930-30615e6222cd/badge?style=flat-square
[nsp-sign-up-url]: https://nodesecurity.io/signup
[nsp-url]: https://nodesecurity.io/orgs/commonality/projects/0662674a-ad9f-4b2f-a930-30615e6222cd
[opensource-guide-community-standards-url]: https://opensource.guide
[pr-url]: /commonality/generator-community/pulls
[product-development-guidelines-url]: ./.github/PRODUCT_DEVELOPEMENT_GUIDELINES.md
[prs-welcome-badge-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome-url]: http://makeapullrequest.com
[quote-left-img]: ./docs/img/icons8/quote-left-25.png
[readme-score-badge-image]: http://readme-score-api.herokuapp.com/score.svg?style=flat-square&url=https://github.com/commonality/generator-community
[readme-score-url]: http://clayallsopp.github.io/readme-score?url=https://github.com/commonality/generator-community
[rest-api-image]: ./docs/img/icons8/icon-rest-api.png
[snyk-vulnerabilities-badge-image]: https://snyk.io/test/github/commonality/generator-community/badge.svg?style=flat-square
[snyk-vulnerabilities-url]: https://snyk.io/test/github/commonality/generator-community
[sonarcloud-url]: https://sonarcloud.io
[stack-share-badge-image]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat-square
[stack-share-news-feed-image]: ./docs/img/tech-stack/icon-news-feed-50.png
[stack-share-news-feed-url]: https://stackshare.io/news/filter/75847/1724/save
[stack-share-rss-feed-image]: ./docs/img/tech-stack/icon-rss-feed-50.png
[stack-share-rss-feed-url]: https://stackshare.io/news/75847/1724/feed
[stack-share-url]: https://stackshare.io/commonality/generator-community
[standard-version-cut-a-release-url]: https://github.com/conventional-changelog/standard-version#cut-a-release
[standardjs-badge-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standardjs-url]: https://standardjs.com/
[travis-badge-image]: https://img.shields.io/travis/commonality/generator-community.svg?branch=master&style=flat-square
[travis-url]: https://travis-ci.org/commonality/generator-community
