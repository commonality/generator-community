# `generator-community`

[![License][license-badge-image]][license-url] [![Dependencies' licenses][fossa-badge-image]][fossa-url] [![NSP Status][nsp-badge-image]][nsp-url] [![Synk Vulnerabilities][snyk-vulnerabilities-badge-image]][snyk-vulnerabilities-url]<br>[![StackShare][stack-share-badge-image]][stack-share-url] [![Dependency Status][david-dm-badge-image]][daviddm-url] [![devDependencies Status][david-dm-dev-badge-image]][daviddm-dev-url] <br>[![Build Status][travis-badge-image]][travis-url] [![Coverage percentage][coveralls-badge-image]][coveralls-url] [![Codacy quality][codacy-badge-image]][codacy-url]
> Generate `README`, `CODE_OF_CONDUCT`, `CONTRIBUTING`, and `LICENSE` files according to [recommended community standards][opensource-guide-community-standards-url].



## Table of contents
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [1. Overview](#1-overview)
- [2. Installation](#2-installation)
  * [2.1. Prerequisite software](#21-prerequisite-software)
  * [2.2. Install Yeoman and `generator-community`](#22-install-yeoman-and-generator-community)
- [3. Usage](#3-usage)
  * [3.1. `yo community:readme`](#31-yo-communityreadme)
    + [3.1.1. Guided assistance](#311-guided-assistance)
    + [3.1.2. Command-line interface automation](#312-command-line-interface-automation)
  * [3.2. `yo community:conduct`](#32-yo-communityconduct)
  * [3.3. `yo community:contributing`](#33-yo-communitycontributing)
  * [3.4. `yo community:license`](#34-yo-communitylicense)
  * [3.5. Update your documents's tables of contents](#35-update-your-documentss-tables-of-contents)
- [4. Contributing to `generator-community`](#4-contributing-to-generator-community)
- [5. License](#5-license)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## 1. Overview
---

[![Alert icon][icon-alert-50-image]][milestones-url] `generator-community` v0.1.0 only generates READMEs.

Please [see the Milestones][milestones-url] for `generator-community's` release plan.

---

`generator-community` helps product repository maintainers follow the [recommended community standards][opensource-guide-community-standards-url] for documentation that communicates expectations, manages contributions, protects participants' legal rights, and optimizes search engine results. `generator-community`'s simple command-line interface prompts you with simple questions in order to generate a:

1. `CODE_OF_CONDUCT.md`
2. `CONTRIBUTING.md`
3. Open source `LICENSE.md`
4. `README.md`

## 2. Installation

### 2.1. Prerequisite software

1. [Node.js][nodejs-url] v4.1.1 or greater
1. npm (which installs with Node.js)
1. [Yeoman][yeoman-url] (a command-line tool which you will install with npm, and not a manual download)

---

<details>
<summary>![Help][icon-help-image] __Verify Node.js availability...__</summary>
<ul>
<li><h4><a id="212_Verify_Nodejs_availability_0"></a>2.1.2. Verify Node.js availability</h4>
<p>Open a Terminal and find out whether you have Node.js installed. Run:</p>
<pre><code class="language-bash">$ node --version
<span class="hljs-comment"># =&gt; v7.7.3</span>
</code></pre>
<p>If you do not have [Node.js][nodejs-url] installed, you will receive an error message similar to:</p>
<pre><code class="language-bash"><span class="hljs-comment"># Linux or macOS</span>
bash: foobar: <span class="hljs-built_in">command</span> not found
<span class="hljs-comment"># You need to install Node.js!</span>
</code></pre></li>
<li><h4><a id="212_Install_or_update_Nodejs_17"></a>2.1.2. Install or update Node.js</h4>
<p>You have two options for installing Node.js. If you feel comfortable using the command line, try one of the following version managers:</p>
<ul>
<li>[Node Version Manager (<code>nvm</code>)][nvm-url] (for macOS and Linux Bash shells)</li>
<li><a href="https://github.com/coreybutler/nvm-windows">nvm-windows</a> (for Windows)</li>
<li><a href="https://github.com/marcelklehr/nodist">nodist</a> (for Windows)</li>
</ul>
<blockquote>
<p>:information_source: I cannot vouch for the two Windows options, so do a little homework, first.</p>
</blockquote>
<p>The other (and easier) option is to simply [download and install Node.js][nodejs-url].</p></li>
</ul>
</details>

---

### 2.2. Install Yeoman and `generator-community`

Once you've verified that you have Node.js v4.1.1. or higher installed, open a Terminal and run these two commands:

```bash
# Install Yeoman and generator-community globally
$ npm install yo --global

# 💡 The letter "i" is shorthand for "install"; -g is short for --global
$ npm i generator-community -g
```



## 3. Usage

Install all four recommended community standards (README, CODE_OF_CONDUCT, CONTRIBUTING, and a LICENSE):

```bash
# Generate README.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, and LICENSE files per the recommended community community standards:

$ yo community
```

This will guide you with prompts to help you pre-fill the documents, e.g.,

```bash
? Which programming language does this product use the most? Node.js (JavaScript)
? What do you use to manage dependencies (e.g., Gradle, npm, NuGet)? Leave blank if you don't know. npm
? GitHub username or organization gregswindle
? ⦾ 📄  README: Select the sections to include in your README API, Background, License
   create README.md


I'm all done. Running npm install for you to install the required dependencies. If this fails, try running the command yourself.


✔ /README.md Updated
 Transforms run
  ⁕ TOC

up to date in 0.767s
Thanks for generating community!
```

### 3.1. `yo community:readme`
> ![Quote][icon-quote-left-image] READMEs do more than explain how to use your project. They also explain why your project matters, and what your users can do with it.
>
> In your README, try to answer the following questions:
>
> - What does this project do?
>
> - Why is this project useful?
>
> - How do I get started?
>
> - Where can I get more help, if I need it?
>
> Owen, K., Keepers, B., Shepherd, S., & Eghbal, N. (2017, February 17). Starting an Open Source Project. Retrieved September 13, 2017, from https://opensource.guide/starting-a-project/#writing-a-readme

#### 3.1.1. Guided assistance

To answer prompts manually, open a Terminal and run

```bash
$ yo community:readme
```

The `community:readme` subgenerator will evaluate your product repository's _manifests_ (e.g., package.json for Node.js products, or settings.gradle for Java products) to ensure consistency.

#### 3.1.2. Command-line interface automation

You can automate README.md documentation via the command line interface (CLI) (e.g., during one of your CI/CD pipelines). To view all CLI options, use the `--help` or `-h` option:

```bash
$ yo community:readme -h
Usage:
  yo community:readme [options]

Options:
  -h,   --help               # Print the generator's options and usage
        --skip-cache         # Do not remember prompt answers                    Default: false
        --skip-install       # Do not automatically install dependencies         Default: false
        --authorName         # Author name
        --authorUrl          # Author URL
        --generateInto       # Destination directory for generated files
        --githubAccount      # GitHub account/organization name
        --dependencyManager  # Tool used to install third-party libraries        Default: Unspecified
        --description        # Product description
        --lang               # Product's primary programming language            Default: Unspecified
        --licenseName        # Open source software license
        --licenseUrl         # URL to your LICENSE file                          Default: ./LICENSE
        --name               # Product name
  -a,   --includeApi         # README.md: Public API overview (optional)         Default: true
  -b,   --includeBackground  # README.md: Background section content (optional)  Default: false
  -c,   --includeConfig      # README.md: Configuration instructions (optional)  Default: false
  -o,   --includeOverview    # README.md: Overview section content (optional)    Default: false
  -s,   --includeSecurity    # README.md: Security section content (optional)    Default: false
```

__Example:__

```bash
$ yo community:readme --authorName "Jane Doe" --authorUrl "https://jdoe.example.com" \
  --githubAccount janedoeasindeer --lang JavaScript --licenseName MIT \
  --name spike-sln-community \
  --description "A spike solution to test generator-community." \
  --includeApi --includeConfig --includeSecurity
```

### 3.2. `yo community:conduct`
> ![Quote][icon-quote-left-image] ...a code of conduct helps set ground rules for behavior for your project’s participants. This is especially valuable if you’re launching an open source project for a community or company. A code of conduct empowers you to facilitate healthy, constructive community behavior, which will reduce your stress as a maintainer.
>
> Owen, K., Keepers, B., Shepherd, S., & Eghbal, N. (2017, February 17). Starting an Open Source Project. Retrieved September 13, 2017, from https://opensource.guide/starting-a-project/#establishing-a-code-of-conduct

[![Alert icon][icon-goal-image]][milestones-url] This feature isn't available, yet.

### 3.3. `yo community:contributing`
> ![Quote][icon-quote-left-image] A CONTRIBUTING file tells your audience how to participate in your project. For example, you might include information on:
>
> * How to file a bug report (try using issue and pull request templates)
> * How to suggest a new feature
> * How to set up your environment and run tests
>
> Owen, K., Keepers, B., Shepherd, S., & Eghbal, N. (2017, February 17). Starting an Open Source Project. Retrieved September 13, 2017, from https://opensource.guide/starting-a-project/#writing-your-contributing-guidelines

[![Alert icon][icon-goal-image]][milestones-url] This feature isn't available, yet.

### 3.4. `yo community:license`
> ![Quote][icon-quote-left-image] An open source license guarantees that others can use, copy, modify, and contribute back to your project without repercussions. It also protects you from sticky legal situations. **You must include a license when you launch an open source project.**
>
> Owen, K., Keepers, B., Shepherd, S., & Eghbal, N. (2017, February 17). Starting an Open Source Project. Retrieved September 13, 2017, from https://opensource.guide/starting-a-project/#launching-your-own-open-source-project

[![Alert icon][icon-goal-image]][milestones-url] This feature isn't available, yet.

### 3.5. Update your documents's tables of contents

`yo community` installs an npm-script that will help keep your documents' table of contents up-to-date:

```bash
$ npm run docs:toc
```

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

[MIT][license-url] © [Greg Swindle][author-url].

---



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
[icon-goal-image]: ./docs/img/icons8/icon-goal.png
[icon-help-image]: ./docs/img/icons8/icon-help-48.png
[icon-jest-image]: ./docs/img/tech-stack/icon-jest-50.jpeg
[icon-nodejs-image]: ./docs/img/tech-stack/icon-nodejs-50.png
[icon-npm-image]: ./docs/img/tech-stack/icon-npm-50.png
[icon-package-image]: ./docs/img/icons8/icon-package-filled.png
[icon-quote-left-image]: ./docs/img/icons8/icon-quote-left-25.png
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
[logo-nodejs-image]: ./docs/img/logo-nodejs-46.png
[markdown-toc-url]: https://github.com/jonschlinkert/markdown-toc
[mda-book-url]: https://www.amazon.com/Enterprise-Patterns-MDA-Building-Archetype/dp/032111230X
[milestones-url]: https://github.com/commonality/generator-community/milestones
[nodejs-url]: https://nodejs.org
[npm-badge-image]: https://img.shields.io/npm/v/generator-community.svg?style=flat-square
[npm-scripts-docs-url]: https://docs.npmjs.com/misc/scripts
[npm-url]: https://npmjs.org/package/generator-community
[npmjs-url]: https://www.npmjs.com/
[nsp-badge-image]: https://nodesecurity.io/orgs/commonality/projects/0662674a-ad9f-4b2f-a930-30615e6222cd/badge?style=flat-square
[nsp-sign-up-url]: https://nodesecurity.io/signup
[nsp-url]: https://nodesecurity.io/orgs/commonality/projects/0662674a-ad9f-4b2f-a930-30615e6222cd
[nvm-url]: https://github.com/creationix/nvm
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
[yeoman-url]: https://yeoman.io
