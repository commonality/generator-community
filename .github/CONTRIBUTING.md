[![Generator Community Repo][product-repo-logo-image]][product-repo-url]

# Contributing<br>to `generator-community`
> [![PRs Welcome][makeapullrequest-image]][makeapullrequest-url]
>
> Contributions are community conversations with a beginning, a middle, and an end, all told through issues, pull requests, comments, and commit logs.

## Table of contents

<!-- toc -->

- [1. __Issues__](#1-__issues__)
  * [1.1. Create Issues for feature requests and defects.](#11-create-issues-for-feature-requests-and-defects)
  * [1.2. Format titles with **`type(scope): subject`**.](#12-format-titles-with-typescope-subject)
  * [1.3. Fill out the issue template.](#13-fill-out-the-issue-template)
  * [1.4. Label the issue (optional).](#14-label-the-issue-optional)
  * [1.5. Monitor your issue for questions.](#15-monitor-your-issue-for-questions)
  * [1.6. Your issue will be either accepted for work, or declined.](#16-your-issue-will-be-either-accepted-for-work-or-declined)
- [2. __Git__](#2-__git__)
  * [2.1. __Rules__](#21-__rules__)
    + [2.1.1. Makes changes in a topic branch.](#211-makes-changes-in-a-topic-branch)
    + [2.1.2. Favor the topic branch naming recommendation `type/issue-change-name`.](#212-favor-the-topic-branch-naming-recommendation-typeissue-change-name)
    + [2.1.3. Branch out from `master`.](#213-branch-out-from-master)
    + [2.1.4. __*Never*__ push into the `master` branch. __*Always*__ submit a Pull Request.](#214-__never__-push-into-the-master-branch-__always__-submit-a-pull-request)
    + [2.1.5. Submit a Pull Request as soon as possible.](#215-submit-a-pull-request-as-soon-as-possible)
    + [2.1.6. Rebase your local `master` branch before you ask for PR approvals.](#216-rebase-your-local-master-branch-before-you-ask-for-pr-approvals)
    + [2.1.7. Resolve rebase conflicts before Pull Request reviews.](#217-resolve-rebase-conflicts-before-pull-request-reviews)
    + [2.1.8. Add reviewers and the label `Status: Needs Review` when the topic branch is ready.](#218-add-reviewers-and-the-label-status-needs-review-when-the-topic-branch-is-ready)
    + [2.1.9. Delete local and remote topic branches after merging.](#219-delete-local-and-remote-topic-branches-after-merging)
    + [2.1.10. Protect your `master` branch.](#2110-protect-your-master-branch)
  * [2.2. __Feature-branch-workflow__](#22-__feature-branch-workflow__)
    + [2.2.1. Initialize a Git repository in the product directory (_for new repositories only_).](#221-initialize-a-git-repository-in-the-product-directory-_for-new-repositories-only_)
    + [2.2.2. Checkout a new `feat`ure or `fix` branch.](#222-checkout-a-new-feature-or-fix-branch)
    + [2.2.3. Make Changes.](#223-make-changes)
    + [2.2.4. Follow the Conventional Commits Specification for commit messages.](#224-follow-the-conventional-commits-specification-for-commit-messages)
    + [2.2.5. Sync with remote to get changes you’ve missed.](#225-sync-with-remote-to-get-changes-youve-missed)
    + [2.2.6. Update your topic branch with the latest changes from `master` by interactive rebase.](#226-update-your-topic-branch-with-the-latest-changes-from-master-by-interactive-rebase)
    + [2.2.7. Resolve conflicts (if any occur), and continue rebase.](#227-resolve-conflicts-if-any-occur-and-continue-rebase)
    + [2.2.8. Push your branch with the `-f` flag (if necessary).](#228-push-your-branch-with-the--f-flag-if-necessary)
    + [2.2.9. Submit a Pull Request.](#229-submit-a-pull-request)
    + [2.2.10. Once accepted, the Pull request will be merged, closed, and deleted by an administrator.](#2210-once-accepted-the-pull-request-will-be-merged-closed-and-deleted-by-an-administrator)
    + [2.2.11. Remove your local topic branch if you're done.](#2211-remove-your-local-topic-branch-if-youre-done)
  * [2.3. __Tell your boss how Git enables collaborative process models.__](#23-__tell-your-boss-how-git-enables-collaborative-process-models__)
    + [2.3.1. Explain that inner and open source are _process models_.](#231-explain-that-inner-and-open-source-are-_process-models_)
    + [2.3.2. Describe a typical Git workflow in collaborative terms.](#232-describe-a-typical-git-workflow-in-collaborative-terms)
- [3. __Code standards__](#3-__code-standards__)
  * [3.1. Use the Standard JS Style.](#31-use-the-standard-js-style)
  * [3.2. Use ESLint to analyze source code.](#32-use-eslint-to-analyze-source-code)
- [4. __Unit testing__](#4-__unit-testing__)
  * [4.1. Write Jest tests.](#41-write-jest-tests)
  * [4.2. Reach 100% code coverage.](#42-reach-100%25-code-coverage)

<!-- tocstop -->

<!-- tocend -->

## 1. __Issues__

![Issues][icon-issue-image]

* __Collaboration starts with *Issues*. Changes happen through *Pull Requests*.__

    View `generator-community's` collaboration and contribution flowcharts:

  <details>
  <summary><mark>Toogle the Issue workflow flowchart.</mark></summary>

  ![Issue flowchart][contribution-lifecycle-issues-image]

  </details>
  <br>

  <details>
  <summary><mark>Toogle the Pull Request workflow flowchart.</mark></summary>

  ![Pull Request flowchart][contribution-lifecycle-pr-image]

  </details>


* ### 1.1. Create Issues for feature requests and defects.

    _Why:_
    > ⌦`generator-community` follows an issue-driven product delivery model.
    > Before any work is done, create an Issue, first. This starts a
    > conversation about features, defects ("bugs"), refactoring, product
    > delivery improvements, etc.

    Go ahead! Get started now:

    * [Report a defect ("bug")][issues-new-defect-url]
    * [Request a feature][issues-new-feat-url]
    * [Review all open issues][issues-url]

* ### 1.2. Format titles with **`type(scope): subject`**.

   _Why:_
    > ⌦`type` categorizes product changes. Valid types are:
    >
    > * `build`: Changes that affect the build system or external dependencies.
    > * `ci`: Changes related to continuous integration, delivery, and deployment tasks.
    > * `docs`: Documentation changes.
    > * `feat`: A new feature.
    > * `fix`: Defect (bug) repair.
    > * `perf`: Performance enhancements.
    > * `refactor`: Source code design improvements that don't affect product behavior.
    > * `style`: Changes involving graphics, typography, etc., as well as source code beautification.
    > * `test`: Tests added to increase code coverage, or corrected due to errors.

* ### 1.3. Fill out the issue template.

    _Why:_
    > ⌦It keeps communication consistent and unambiguous.

* ### 1.4. Label the issue (optional).

    _Why:_
    > ⌦ We use [`git-labelmaker`][gh-git-labelmaker-url] to categorize Issues (and Pull Requests) consistently. There are four label categories:
    >
    > * `Type`: the "kind" of product change.
    > * `Status`: the state of a change.
    > * `Priority`: the importance and value of a change.
    > * `Points`: the size/complexity of a change.
    <br><br>

    <details>
    <summary><mark>Toggle the Label definitions table.</mark></summary>
      <table class="table table-striped table-bordered">
      <thead>
      <tr>
      <th>Label 🏷</th>
      <th>Definition</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><code>Type: Feature</code></td>
      <td><dfn>A distinguished or expected characteristic of a product that either differentiates the product from competitors, or whose absence would be diminish the product’s value.</dfn><br><br><strong>Note</strong> that <code>Type: Feature</code> and <code>Type: Defect</code> are mutually exclusive: an Issue cannot be both a feature and a defect.</td>
      </tr>
      <tr>
      <td><code>Type: Defect</code></td>
      <td><dfn>A flaw, fault, or abnormality that deviates from or prevents the product’s expected behavior.</dfn><br><br><strong>Note</strong> that <code>Type: Feature</code> and <code>Type: Defect</code> are mutually exclusive: an Issue cannot be both a feature and a defect.</td>
      </tr>
      <tr>
      <td><code>CLA: Signed</code></td>
      <td><dfn>The person who submitted a product change has signed your Contributor License Agreement.</dfn><br><br>Remove this label if your product owner does not require a CLA.</td>
      </tr>
      <tr>
      <td><code>CLA: Unsigned</code></td>
      <td><dfn>The person who submitted a product change has __<em>not</em>__signed your Contributor License Agreement.</dfn><br><br>Remove this label if your product owner does not require a CLA.</td>
      </tr>
      <tr>
      <td><code>Priority: Critical</code></td>
      <td><code>Type: Feature</code>: <dfn>The proposed enhancement is essential to the success of your product.</dfn><br><br><code>Type: Defect</code>: <dfn>Your product no longer functions due to internal, <code>FATAL</code> errors, and must be addressed immediately in order to maintain consumer loyalty.</dfn></td>
      </tr>
      <tr>
      <td><code>Priority: High</code></td>
      <td><code>Type: Feature</code>: <dfn>The proposed enhancement is central to product’s value proposition, and should be implemented as soon as possible.</dfn><br><br><code>Type: Defect</code>: <dfn>The product functions overall, but with an issue that risks consumer abandonment.</dfn></td>
      </tr>
      <tr>
      <td><code>Priority: Medium</code></td>
      <td><code>Type: Feature</code> or <code>Type: Defect</code>:  <dfn>The proposed change should be implemented as long as no <code>Priority: Critical</code> or <code>Priority: High</code> issues exists.</dfn></td>
      </tr>
      <tr>
      <td><code>Priority: Low</code></td>
      <td><code>Type: Feature</code>: <dfn>A proposal that minimally affects the product’s value.</dfn><br><br><code>Type: Defect</code>: <dfn>Represents “cosmetic” problems like misspelled words or misaligned text that do not affect branding and marketing strategy.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: Abandoned</code></td>
      <td><code>Type: Feature</code> or <code>Type: Defect</code>: <dfn>The team and community have neglected, forgotten, discarded, or ignored resolving a Issue.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: Accepted</code></td>
      <td><code>Type: Feature</code> or <code>Type: Defect</code>: <dfn>The product owner or maintainers agreed to a product change proposal.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: Available</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The change proposal is ready for team and community members to work on.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: Blocked</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The proposed change cannot be addressed until another issue has been resolved.</dfn><br><br><strong>Note</strong> that the Issue blocking the proposed change SHOULD be referenced in the <code>Blocked</code> Issue’s description field.</td>
      </tr>
      <tr>
      <td><code>Status: Completed</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The issue has been resolved and all acceptance criteria validated.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: In Progress</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The team or community is actively working on the Issue’s resolution.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: On Hold</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The Product Owner has (temporarily) postponed Issue resolution.</dfn><br><br><strong>Note</strong> that the <em>reason</em> for postponement should be stated in the Issue’s description field.</td>
      </tr>
      <tr>
      <td><code>Status: Pending</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>product change or resolution is either awaiting the Product Owner’s decision.</dfn> Ideally, the Product Owner should declare why they’re undecided somewhere in the Issue thread.</td>
      </tr>
      <tr>
      <td><code>Status: Rejected</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The Product Owner has declined a change proposal.</dfn><br><br><strong>Note</strong> that the Product Owner should politely explain why they dismissed the change request.</td>
      </tr>
      <tr>
      <td><code>Status: Review Needed</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The person working on an Issue has requested help or discussion.</dfn> When applied to a Pull Request, <code>Status: Review Needed</code> <dfn>signifies that the PR is ready for evaluation (and potentially, approval).</dfn></td>
      </tr>
      <tr>
      <td><code>Status: Revision Needed</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The Issue is not ready for evaluation because of incomplete or insufficient information.</dfn></td>
      </tr>
      <tr>
      <td><code>Type: Breaking Change</code></td>
      <td><dfn>The change introduces backward incompatibility with previous product versions.</dfn><br><br><strong><code>Type: Breaking Change</code> MUST be recorded with a</strong> <ol><br><li>Git commit message,<br><li>An increment (+1) in the product’s Semantic Version’s MAJOR version,<br><li><code>CHANGELOG</code> entry, and<br><li>Updated API documentation.</ol></td>
      </tr>
      <tr>
      <td><code>Type: Build</code></td>
      <td><dfn>Changes to the process that convert source code into a stand-alone form that can be run on a computer or to the form itself.</dfn></td>
      </tr>
      <tr>
      <td><code>Type: Chore</code></td>
      <td><dfn>Miscellaneous non-functional changes such as typographical fixes or source code repository initialization</dfn>, e.g., <code>chore(scm): scaffold product directory structure</code></td>
      </tr>
      <tr>
      <td><code>Type: CI</code></td>
      <td><dfn>Continuous Integration (CI) changes, i.e., automated build, test, an quality assurance tasks.</dfn></td>
      </tr>
      <tr>
      <td><code>Type: Docs</code></td>
      <td><dfn>The introduction of or revisions to natural language documents or source code comments.</dfn></td>
      </tr>
      <tr>
      <td><code>Type: Duplicate</code></td>
      <td><dfn>An Issue that shares the same characteristics as a previously reported issue.</dfn> <br><br><strong>Note</strong> that  product maintainers should reference the original Issue and close the <code>Type: Duplicate</code> Issue.</td>
      </tr>
      <tr>
      <td><code>Type: Feedback</code></td>
      <td><dfn>A response to a <code>Type: Question</code> or voluntary information used as a basis for improvement.</td>
      </tr>
      <tr>
      <td><code>Type: Fix</code></td>
      <td><dfn>A change intended to repair a <code>Type: Defect</code> Issue.</td>
      </tr>
      <tr>
      <td><code>Type: Performance</code></td>
      <td><dfn>A change intended to reduce product latency.</td>
      </tr>
      <tr>
      <td><code>Type: Question</code></td>
      <td><dfn>A request for information.</td>
      </tr>
      <tr>
      <td><code>Type: Refactor</code></td>
      <td><dfn>Source code design improvements that do not affect product behavior.</td>
      </tr>
      <tr>
      <td><code>Type: Revert</code></td>
      <td><dfn>Changes that return the product’s source code to previous Git commit hash.</td>
      </tr>
      <tr>
      <td><code>Type: Spike</code></td>
      <td><dfn>A technical or design <em>experiment</em> that investigates a possible solution.</dfn> <br><br><strong>Note</strong> that spike solutions are, by definition, <em>throwaway</em> solutions that should <strong>NEVER</strong> be added to a product release.</td>
      </tr>
      <tr>
      <td><code>Type: Style</code></td>
      <td><dfn>Issues that address code standard <em>or</em> brand compliance.</td>
      </tr>
      <tr>
      <td><code>Type: Test</code></td>
      <td><dfn>Issues that prove intended behavior or substantiate “definitions of done.”</dfn> <br><br><code>Type: Test</code> can also refer to changes that result in broader code coverage.</td>
      </tr>
      </tbody>
      </table>
    </details>

* ### 1.5. Monitor your issue for questions.

    _Why:_
    > ⌦ The team might need more clarification.

* ### 1.6. Your issue will be either accepted for work, or declined.

    _Why:_
    > ⌦ It's up to the Product Owner to agree to proposed changes. If they believe your issue add value, the issue will be approved, and we'll ask someone to volunteer to do the work.
    >
    > Otherwise, your issue will be politely declined.


## 2. __Git__

![Git Logo][icon-git-logo-image]

* ### 2.1. __Rules__

  `generator-community` manages contributions with the  [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow).

* #### 2.1.1. Makes changes in a topic branch.

  _Why:_
  > ⌦ Use an isolated topic branch for parallel product development. Topic branches allow you to submit multiple pull requests without confusion. You can iterate without polluting the master branch with potentially unstable, unfinished code. The `generator-community` team uses:
  >
  > * [Feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow) for small-ish codebases, or
  > * [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) for large applications and monoliths

* #### 2.1.2. Favor the topic branch naming recommendation `type/issue-change-name`.

  _Why:_
  > ⌦ Although not required, our team prefixes branches with the type of change being introduced, followed by a forward slash and the issue id.
  >
  > Pattern: `type/issueId-subject`<br>
  > Icon legend: ![Bitbucket branch prefix][icon-bitbucket-20-image] Bitbucket
  > ![GitHub branch prefix][icon-github-20-image] GitHub
  >
  > <dt>
  > <dt><code>bugfix/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-bitbucket-20.png" alt="Applies to Bitbucket branches"> Defect (bug) repair issues.</dd>
  > <dt><code>build/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Issues related to product builds.</dd>
  > <dt><code>ci/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Issues related to continuous integration, delivery, and deployment tasks.</dd>
  > <dt><code>docs/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Issues related to documentation.</dd>
  > <dt><code>feat/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> New feature or enhancement requests.</dd>
  > <dt><code>feature/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-bitbucket-20.png" alt="Applies to Bitbucket branches"> New feature or enhancement requests.</dd>
  > <dt><code>fix/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Defect (bug) repair issues.</dd>
  > <dt></dt>
  > <dd><img src="../docs/img/icons8/icon-bitbucket-20.png" alt="Applies to Bitbucket branches"> `hotfix/`</dd>
  > <dt><code>perf/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Performance improvement issues.</dd>
  > <dt><code>refactor/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Source code design **improvements that do not affect product behavior**.</dd>
  > <dt><code>revert/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Tasks that revert to a previous commit hash.</dd>
  > <dt><code>spike/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Issues related in solution investigation.</dd>
  > <dt><code>style/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Issues related to style guideline compliance, especially `ESLint` errors and warnings.</dd>
  > <dt><code>test/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Test coverage tasks.</dd>
  > </dl>

* #### 2.1.3. Branch out from `master`.

    _Why:_
    > ⌦ `generator-community` follows the feature-branch-workflow.

* #### 2.1.4. __*Never*__ push into the `master` branch. __*Always*__ submit a Pull Request.

    _Why:_
    > ⌦ It notifies team members whenever changes occur and allows the community to review your changes at any time..
    >
    > It also enables easy peer-review of the code and dedicates forum for discussing the proposed feature.

* #### 2.1.5. Submit a Pull Request as soon as possible.

    _Why:_
    > ⌦ Pull Requests declare work in progress. Frequent pushes to a Pull Request notify your team members about change, and gives them the opportunity to provide feedback more often.
    >
    > Pull Request pushes also trigger automated CI-services, which help you fail fast and assess quality.

* #### 2.1.6. Rebase your local `master` branch before you ask for PR approvals.

    _Why:_
    > ⌦ Rebasing will merge in the requested branch (`master` or `develop`) and apply the commits that you have made locally to the top of the history without creating a merge commit (assuming there were no conflicts). This results in a nice and clean history.

* #### 2.1.7. Resolve rebase conflicts before Pull Request reviews.

    _Why:_
    > ⌦ Rebasing will merge in the `master` branch and apply the commits that you have made locally to the top of it.

* #### 2.1.8. Add reviewers and the label `Status: Needs Review` when the topic branch is ready.

    _Why:_
    > ⌦ When you add a Reviewer, GitHub (or Bitbucket) notifies teammates that your topic branch meets all Acceptance Criteria and is ready to be merged into `master`.
    >
    > Add the label "Status: Review Needed" formally declares the status of your topic branch, and helps teams filter through issues.

* #### 2.1.9. Delete local and remote topic branches after merging.

    _Why:_
    > ⌦ Topic branches should only exist while work is in-progress. Merged topic branches clutter up your list of branches with dead branches. Topic branch deletion also insures that you only ever merge back into `master`.

* #### 2.1.10. Protect your `master` branch.

    _Why:_
    > ⌦ Branch protection prevents production-ready branches from incorporating unexpected and irreversible changes. Learn more about
    >
    > * [GitHub protected branches](https://help.github.com/articles/about-protected-branches/) and
    > * [Bitbucket protected branches](https://confluence.atlassian.com/bitbucketserver/using-branch-permissions-776639807.html).

* ### 2.2. __Feature-branch-workflow__

  We use the  [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow). We _recommend_ [interactive rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing#the-golden-rule-of-rebasing), too, but that's not required.

* #### 2.2.1. Initialize a Git repository in the product directory (_for new repositories only_).

  For subsequent features and changes, this step should be ignored.

  ```sh
  cd <product-repo-directory>
  git init
  ```

* #### 2.2.2. Checkout a new `feat`ure or `fix` branch.

  ```sh
  # For a new feature branch:
  git checkout -b feat/<issueId>-scope-of-change

  # For branches that address defects:
  git checkout -b fix/<issueId>-scope-of-change
  ```

* #### 2.2.3. Make Changes.

  ```sh
  git add
  git commit -a
  ```

  _Why:_
  > ⌦ `git commit -a` will start an editor which lets you separate the subject from the body. Read more about it in *section 1.3*.

* #### 2.2.4. Follow the Conventional Commits Specification for commit messages.

  This project enforces [AngularJS Git Commit Guidelines][git-commit-guidelines-url] (which is now an extension of the [Conventional Commits Specfication][conventional-commits-url]) with [`commitplease`][commitplease-url] pre-commit hooks.

  _Why:_
  > Consistent, legible Git logs not only facilitate communication, but also enable automated `CHANGELOG` generation and semantic versioning with [`standard-version`][standard-version-url].

  * __`build` commit messages__

    Issues related to product builds.

    ```
    build(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`chore` commit messages__

    Issues related to miscellaneous non-functional changes (usually "maintenance" changes).

    ```
    chore(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`ci` commit messages__

    Issues related to continuous integration, delivery, and deployment tasks.

    ```
    ci(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`docs` commit messages__

    Issues related to documentation.

    ```
    docs(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`feat` (feature) commit messages__

    New feature or enhancement requests.

    ```
    feat(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`fix` commit messages__

    Defect (bug) repair issues.

    ```
    fix(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`perf` (performance) commit messages__

    Performance improvement issues.

    ```
    perf(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`refactor` commit messages__

    Source code design **improvements that do not affect product behavior**.

    ```
    refactor(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`revert` commit messages__

    Tasks that revert to a previous commit hash. Your message should begin with `revert:`, followed by the header of the reverted commit.

    In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

    ```
    revert: <hash>
    <BLANK LINE>
    This reverts commit <hash>.
    <BLANK LINE>
    <footer>
    ```

  * __`style` commit messages__

    Issues related to style guideline compliance, especially `ESLint` errors and warnings.

    ```
    style(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`test` commit messages__

    Test coverage tasks.

    ```
    test(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

* #### 2.2.5. Sync with remote to get changes you’ve missed.

  ```sh
  git checkout master
  git pull
  ```

  _Why:_
  > ⌦ This will give you a chance to deal with conflicts on your machine while rebasing(later) rather than creating a Pull Request that contains conflicts.

* #### 2.2.6. Update your topic branch with the latest changes from `master` by interactive rebase.

  ```sh
  git checkout <branchname>
  git rebase -i --autosquash master
  ```

  _Why:_
  > ⌦ You can use `--autosquash` to squash all your commits to a single commit. Nobody wants many commits for a single feature in develop branch.
  >
  > [Learn more about autosquashing Git commits][autosquashing-git-commits-url].

* #### 2.2.7. Resolve conflicts (if any occur), and continue rebase.

  ```sh
  git add <file1> <file2> ...
  git rebase --continue
  ```

  [Learn more about resolving conflicts][git-resolve-conflicts-url].

* #### 2.2.8. Push your branch with the `-f` flag (if necessary).

  Rebase changes history, so you might need to force changes into the `remote` branch with the `-f` flag. If someone else is working on your branch, use the less destructive `--force-with-lease`.

  ```sh
  git push -f
  ```

  _Why:_
  > ⌦ When you do a rebase, you are changing the history on your topic branch. As a result, Git will reject normal `git push`. Instead, you'll need to use the -f or --force flag.
  >
  > [Learn more about `--force-with-lease`][force-with-lease-url].

* #### 2.2.9. Submit a Pull Request.

* #### 2.2.10. Once accepted, the Pull request will be merged, closed, and deleted by an administrator.

* #### 2.2.11. Remove your local topic branch if you're done.

  ```sh
  git branch -d <branchname>
  ```

  to remove all branches which are no longer on remote

  ```sh
  git fetch -p && \
    for branch in `git branch -vv | grep ': gone]' | awk '{print $1}'`; \
      do git branch -D $branch; \
    done
  ```

### 2.3. __Tell your boss how Git enables collaborative process models.__

![Leadership](../docs/img/icons8/icon-leadership-filled.png)

* __Git enables collaboration with structured (business) process models.__ Git is a collaboration tool that grants people the opportunity to contribute to software products using simple and consistent process models called workflows.

  > <details>
  > <summary>Toggle a workflow example.</summary><br>
  > <p>⌦ Git is a collaboration tool that grants people the opportunity to contribute to software products using simple and consistent process models called _workflows_.
  > <ol>
  > <li>Git __repositories__ store software products, as well as the historical changes to these products.<br><br>
  > <li>Git workflows begin with either __cloning__ or __forking__ a repository, which __pulls__ a duplicate of the entire codebase onto a local computer.<br><br>
  > <li>Contributors then create a local __topic branch__ in which they introduce changes—-features, fixes, documentation, tests, and design improvements—-which allows others to develop in parallel.<br><br>
  > <li>Contributors __push__ their topic branch to others (usually another `remote` repository called `origin`) and submit __pull requests (PRs)__ to their announce their changes. __Pull requests are central to almost all Git workflows, since PRs allow Product Owners and their community to review suggested modifications. Product owners can approve or reject PRs at any time.__<br><br>
  > <li>Other contributors answer the request to __pull__ the changes so they can review and test them.<br><br>
  > <li>The changes in the PR are approved.<br><br>
  > <li>The topic branch is either __merged__ or __rebased__ into the the software product.<br><br>
  > <li>The topic branch gets deleted, and (ultimately) its changes are delivered to the world.
  > </ol>
  > </details>

  _Why:_
  > ⌦ Git can be intimidating, and The Boss (even if that's you!) needs to know why Git is valuable in *business terms.*

* #### 2.3.1. Explain that inner and open source are _process models_.

  _Why:_
  > ⌦ Git is a __collaboration__ tool that grants people the opportunity to contribute to software products using simple and consistent process models called __workflows.__

* #### 2.3.2. Describe a typical Git workflow in collaborative terms.

  _Why:_
  > ⌦ Many engineers can discuss Git's _technicalities_, but cannot articulate Git's as an applied _technology_ for collaboration.

## 3. __Code standards__

[![JavaScript Style Guide][standard-js-badge-image]][standard-js-url] [![ESLint logo][eslint-logo-image]][eslint-url]

* ### 3.1. Use the Standard JS Style.

  `generator-community` follows the [Standard JS Style][standard-js-url].

* ### 3.2. Use ESLint to analyze source code.

  _Why:_
  > ⌦ [ESLint][eslint-url] evaluates JavaScript code (and `--fix`es what it can) whenever `npm test` runs. You can run ESLint directly with:
  >
  ```shell
  npm run lint:js
  ```
  >

  View [`generator-community's` ESLint rules][eslint-rules-table-url] and their enforcement.

## 4. __Unit testing__

[![Jest JavaScript Testing][jest-logo-image]][jest-url]

* ### 4.1. Write Jest tests.

  _Why:_
  > ⌦ Behavior-driven development specifications are executable documentation.

  * **Put test files in the \__test\__ directory.**

  * __Use the `.spec.js` suffix for all tests.__

* ### 4.2. Reach 100% code coverage.

  _Why:_
  > ⌦ Full coverage makes automated dependency drift updates safer.

  * View a test coverage summary in the Terminal:

    ```shell
    npm test

    > jest --config=jest.config.json

      PASS  __tests__/app.js
       generator-community:app
        ✓ creates files (1ms)

    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   0 total
    Time:        2.595s
    Ran all test suites.
    ----------|----------|----------|----------|----------|----------------|
    File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
    ----------|----------|----------|----------|----------|----------------|
    All files |      100 |      100 |      100 |      100 |                |
     index.js |      100 |      100 |      100 |      100 |                |
    ----------|----------|----------|----------|----------|----------------|
    ```

  * Open `/coverage/lcov-report/index.html` in a Web browser to view detailed coverage reports.



<!-- ⛔️  Do not remove anything below this comment. ⛔️  -->

[all-contributors-cli-url]: https://github.com/kentcdodds/all-contributors
[autosquashing-git-commits-url]: https://robots.thoughtbot.com/autosquashing-git-commits
[changelog-url]: ./CHANGELOG.md
[cite-interview-torvalds-url]: https://techcrunch.com/2012/04/19/an-interview-with-millenium-technology-prize-finalist-linus-torvalds/
[cla-url]: https://www.clahub.com/agreements/commonality/generator-community
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[commitplease-url]: https://www.npmjs.com/package/commitplease
[commonality-palette-image]: ./docs/img/palette.svg
[contributing-url]: ./CONTRIBUTING.md
[contribution-lifecycle-issues-image]: ../docs/img/icons8/contribution-lifecycle-create-issue.png
[contribution-lifecycle-pr-image]: ../docs/img/icons8/contribution-lifecycle-pr.png
[conventional-commits-url]: https://conventionalcommits.org
[coolors-palette-url]: https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533
[eslint-logo-image]: ../docs/img/logo-eslint.png
[eslint-url]: https://eslint.org
[force-with-lease-url]: https://developer.atlassian.com/blog/2015/04/force-with-lease/
[fossa-image-large]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Forganization%2Frepo-name.svg?type=large
[gh-git-labelmaker-url]: https://github.com/himynameisdave/git-labelmaker
[git-commit-guidelines-url]: https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit
[git-resolve-conflicts-url]: https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/
[icon-bitbucket-20-image]: ../docs/img/icons8/icon-bitbucket-20.png
[icon-git-logo-image]: ../docs/img/icons8/git-logo.png
[icon-github-20-image]: ../docs/img/icons8/icon-github-filled-20.png
[icon-info-image]: ../docs/img/icons8/icon-info-50.png
[icon-issue-image]: ../docs/img/icons8/icon-issues.png
[icon-pr-image]: ../docs/img/icons8/icon-pr.png
[issues-new-defect-url]: https://github.com/commonality/generator-community/issues/new?title=fix%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-url]: https://github.com/commonality/generator-community/issues/new?title=feat%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-url]: https://github.com/commonality/generator-community/issues
[jest-logo-image]: ../docs/img/logo-jest.png
[jest-url]: https://facebook.github.io/jest/
[license-url]: ./LICENSE
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com
[markdown-toc-url]: https://github.com/jonschlinkert/markdown-toc
[product-development-guidelines-url]: ../docs/product-development-guidelines/js/PRODUCT_DEVELOPEMENT_GUIDELINES.md
[product-repo-logo-image]: ../docs/img/logo-commonalaxy.png
[product-repo-url]: .
[standard-js-badge-image]: https://cdn.rawgit.com/standard/standard/master/badge.svg
[standard-js-url]: https://github.com/standard/standard
[standard-version-url]: https://github.com/conventional-changelog/standard-version
[eslint-rules-table-url]: ./ESLINT_RULES.md
