[![Generator Community Repo][generator-community-logo-image]][generator-community-repo-url]

# `generator-community`
[![License][license-badge-image]][license-url] [![Dependencies' licenses][fossa-badge-image]][fossa-url] [![NSP Status][nsp-badge-image]][nsp-url] [![Synk Vulnerabilities][snyk-vulnerabilities-badge-image]][snyk-vulnerabilities-url]<br>[![StackShare][stack-share-badge-image]][stack-share-url] [![Dependency Status][david-dm-badge-image]][daviddm-url] [![devDependencies Status][david-dm-dev-badge-image]][daviddm-dev-url] <br>[![Build Status][travis-badge-image]][travis-url] [![Coverage percentage][coveralls-badge-image]][coveralls-url] [![Codacy quality][codacy-badge-image]][codacy-url]
> Generate `README`, `CODE_OF_CONDUCT`, `CONTRIBUTING`, and `LICENSE` files according to [recommended community standards][opensource-guide-community-standards-url].

## Table of contents

<!-- toc -->

- [1. Installation](#1-installation)
- [2. Usage](#2-usage)
- [3. Contributing](#3-contributing)
  * [3.1. Create an issue](#31-create-an-issue)
  * [3.2. Submit a pull request (PR)](#32-submit-a-pull-request-pr)
- [4. License](#4-license)

<!-- tocstop -->

<!-- tocend -->

## 1. Getting started

### 1.2. Prerequisite software

This module is written in Node.js, which must be installed prior to use. Node.js includes the Node Package Manager (NPM), which is used for installing dependencies.

### 1.2. Installation

Install [`Yeoman`](http://yeoman.io) and `generator-community` using [`npm`](https://www.npmjs.com/) (we assume you have pre-installed [`Node.js`](https://nodejs.org/)).

```bash
$ npm install -g yo
$ npm install -g generator-community
```

## 2. Usage
> ![Warning][icon-alert-50-image] `generator-community` will generate files in the current working directory, so be sure to change to a new directory first if you don't want to overwrite existing files.

### 2.1. Generate all recommended community standard documents.

* __Option 1:__ provide product information with prompts:

  Open a Terminal and run:
  
  >```bash
  >yo community
  >```

  Answer all questions when prompted.

* __Option 2:__ provide your product info with command line options.

  You can also _automate_ document creation by providing product information to options. Use the `--help` flag to view all available options:

  > ```shell
  > yo community --help
  > Usage:
  > yo community:app [options]
  >
  > Options:
  >   -h,   --help                 # Print the generator's options and usage
  >         --skip-cache           # Do not remember prompt answers
  >         --skip-install         # Do not automatically install dependencies
  >         --generateInto         # Destination directory for generated files
  >         --productName          # Product (and npm module) name
  >         --description          # Product description
  >         --githubAccount        # GitHub account/organization name
  >         --authorName           # Author name
  >         --authorUrl            # Author URL
  >         --includeBadges        # Content: Include badges?
  >         --logoPath             # Content: Absolute URL or relative path to logo (optional)
  >         --securityContent      # Content: Security section content (optional)
  >         --overviewContent      # Content: Overview section content (optional)
  >         --backgroundContent    # Content: Background section content (optional)
  >         --installationContent  # Content: Installation instructions
  >         --configContent        # Content: Configuration instructions (optional)
  >         --usageContent         # Content: Usage instructions
  >         --apiContent           # Content: Public API overview (optional)
  >         --contributingContent  # Content: Contribution instructions
  > ```

Both options will generate the following documents with your product's information:

 1. `README.md`
 2. `CONTRIBUTING.md`
 3. `CODE_OF_CONDUCT.md`
 4. `LICENSE`
 5. `.github/ISSUE_TEMPLATE.md`
 6. `.github/PULL_REQUEST_TEMPLATE.md`

### 2.2. `community:readme` README.md sub-generator

You can generate a README.md alone, too.

```shell
yo community:readme --help
Usage:
  yo community:readme [options]

Options:
  -h,   --help                 # Print the generator's options and usage
        --skip-cache           # Do not remember prompt answers
        --skip-install         # Do not automatically install dependencies
        --generateInto         # Destination directory for generated files
        --productName          # Product (and npm module) name
        --description          # Product description
        --githubAccount        # GitHub account/organization name
        --authorName           # Author name
        --authorUrl            # Author URL
        --includeBadges        # Content: Include badges?
        --logoPath             # Content: Absolute URL or relative path to your logo (optional)
        --securityContent      # Content: Security section content (optional)
        --overviewContent      # Content: Overview section content (optional)
        --backgroundContent    # Content: Background section content (optional)
        --installationContent  # Content: Installation instructions
        --configContent        # Content: Configuration instructions (optional)
        --usageContent         # Content: Usage instructions
        --apiContent           # Content: Public API overview (optional)
        --contributingContent  # Content: Contribution instructions
```

### 2.3. `community:conduct` Code of Conduct sub-generator

Generate a CODE_OF_CONDUCT.md file.

```shell
yo community:readme --help
Usage:
  yo community:readme [options]

Options:
  -h,   --help                 # Print the generator's options and usage
        --skip-cache           # Do not remember prompt answers
        --skip-install         # Do not automatically install dependencies
        --generateInto         # Destination directory for generated files
        --productName          # Product (and npm module) name
        --description          # Product description
        --githubAccount        # GitHub account/organization name
        --authorName           # Author name
        --authorUrl            # Author URL
        --includeBadges        # Content: Include badges?
        --logoPath             # Content: Absolute URL or relative path to your logo (optional)
        --securityContent      # Content: Security section content (optional)
        --overviewContent      # Content: Overview section content (optional)
        --backgroundContent    # Content: Background section content (optional)
        --installationContent  # Content: Installation instructions
        --configContent        # Content: Configuration instructions (optional)
        --usageContent         # Content: Usage instructions
        --apiContent           # Content: Public API overview (optional)
        --contributingContent  # Content: Contribution instructions
```

## 3. Contributing

![Alt text](https://camo.githubusercontent.com/f96261621753dacf526590825b84f87ccb1db0e6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e7376673f7374796c653d666c6174 "Pull Request") We welcome contributors and pull requests!

Contributions are community-driven stories with a beginning, a middle, and an end, all told through issues, comments, and pull requests. If you're interested in collaborating, please review the:

* [Code of Conduct][code-of-conduct-url]
* [Contributing][contributing-url] to `generator-community`

### 3.1. Create an issue
Contributions begin with Issues where we can discuss suggestions or problems.

 * [Report a defect ("bug")][issue-new-defect-url]
 * [Request a new feature or enhancement][issue-new-feat-url]

### 3.2. Submit a pull request (PR)

If you have a solution you'd like to demonstrate, you can go straight to a pull request.

 * [Create a pull request][pr-new-url]

## 4. License

[Apache-2.0][license-url] © [Greg Swindle](https://github.com/commonality)

---

[![Readme Score][readme-score-image]][readme-score-url]

Graphic art by [icons8][icons8-license-url].

<!-- ⛔️ 📝 NOTE: PLEASE ALPHABETIZE LINK REFERENCES. 📝 ⛔️ -->

[angularjs-commit-message-guidelines-url]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit
[changelog-url]: ./CHANGELOG.md
[cla-url]: https://www.clahub.com/agreements/commonality/generator-community
[codacy-badge-image]: https://img.shields.io/codacy/grade/de7b30825ac649de8b7255e4303fb069.svg?style=flat-square
[codacy-url]: https://www.codacy.com/app/commonality/generator-community?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=commonality/generator-community&amp;utm_campaign=Badge_Grade
[code-of-conduct-url]: ./.github/CODE_OF_CONDUCT.md
[complexity-report-url]: ./docs/COMPLEXITY.md
[contributing-url]: ./.github/CONTRIBUTING.md
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
[license-url]: LICENSE
[markdown-toc-url]: https://github.com/jonschlinkert/markdown-toc
[mda-book-url]: https://www.amazon.com/Enterprise-Patterns-MDA-Building-Archetype/dp/032111230X
[nodejs-url]: https://nodejs.org/
[npm-badge-image]: https://img.shields.io/npm/v/generator-community.svg?style=flat-square
[npm-scripts-docs-url]: https://docs.npmjs.com/misc/scripts
[npm-url]: https://npmjs.org/package/generator-community
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
