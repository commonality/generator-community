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
    + [2.1.2. Branch out from `master`.](#212-branch-out-from-master)
    + [2.1.3. __*Never*__ push into the `master` branch. __*Always*__ submit a Pull Request.](#213-__never__-push-into-the-master-branch-__always__-submit-a-pull-request)
    + [2.1.4. Submit a Pull Request as soon as possible.](#214-submit-a-pull-request-as-soon-as-possible)
    + [2.1.5. Rebase your local `master` branch before you ask for PR approvals.](#215-rebase-your-local-master-branch-before-you-ask-for-pr-approvals)
    + [2.1.6. Resolve rebase conflicts before Pull Request reviews.](#216-resolve-rebase-conflicts-before-pull-request-reviews)
    + [2.1.7. Add reviewers and the label `Status: Needs Review` when the topic branch is ready.](#217-add-reviewers-and-the-label-status-needs-review-when-the-topic-branch-is-ready)
    + [2.1.8. Delete local and remote topic branches after merging.](#218-delete-local-and-remote-topic-branches-after-merging)
    + [2.1.9. Protect your `master` branch.](#219-protect-your-master-branch)
  * [2.2 __Git workflow__](#22-__git-workflow__)
    + [2.2.1. New products: initialize a git repository in the project directory.](#221-new-products-initialize-a-git-repository-in-the-project-directory)
    + [2.2.2. Checkout a new `feat`ure or `fix` branch.](#222-checkout-a-new-feature-or-fix-branch)
    + [2.2.3. Make Changes.](#223-make-changes)
    + [2.2.4. Sync with remote to get changes you’ve missed.](#224-sync-with-remote-to-get-changes-youve-missed)
    + [2.2.5. Update your topic branch with the latest changes from `master` by interactive rebase.](#225-update-your-topic-branch-with-the-latest-changes-from-master-by-interactive-rebase)
    + [2.2.6. Resolve conflicts (if any occur), and continue rebase. Otherwise, skip this step.](#226-resolve-conflicts-if-any-occur-and-continue-rebase-otherwise-skip-this-step)
    + [2.2.7. Push your branch with the `-f` flag (if necessary).](#227-push-your-branch-with-the--f-flag-if-necessary)
    + [2.2.8. Submit a Pull Request.](#228-submit-a-pull-request)
    + [2.2.9. Pull request will be accepted, merged and close by a reviewer.](#229-pull-request-will-be-accepted-merged-and-close-by-a-reviewer)
    + [2.2.10. Remove your local topic branch if you're done.](#2210-remove-your-local-topic-branch-if-youre-done)
  * [2.3. Tell your boss how Git enables collaborative process models](#23-tell-your-boss-how-git-enables-collaborative-process-models)
    + [2.3.1. Explain that inner and open source are _process models_](#231-explain-that-inner-and-open-source-are-_process-models_)
    + [2.3.2. Describe a typical Git workflow in collaborative terms](#232-describe-a-typical-git-workflow-in-collaborative-terms)
  * [2.2.](#22)
  * [__Pull Requests (PRs)__](#__pull-requests-prs__)
- [Labels](#labels)

<!-- tocstop -->

<!-- tocend -->

## 1. __Issues__

![Issues][icon-issue-image]

Collaboration starts with Issues. Changes happen through Pull Requests.

_View `generator-community's` collaboration and contribution flowcharts:_

> <details>
  <summary>Toogle `generator-community's` __Issue workflow flowchart__.</summary>
  ![Issue flowchart][contribution-lifecycle-issues-image]
  </details>
  <br>
> <details>
  <summary>Toogle `generator-community's` __Pull Request workflow flowchart__.</summary>
  ![Pull Request flowchart][contribution-lifecycle-pr-image]
  </details>


* ### 1.1. Create Issues for feature requests and defects.

    _Why:_
    > ⌦`generator-community` follows an issue-driven product delivery model.
    > Before any work is done, create an Issue, first. This starts a
    > conversation about features, defects ("bugs"), refactoring, product
    > delivery improvements, etc.

    [Submit a new issue][issues-new-url] or [assign yourself an open issue][issues-url] to begin collaboration.

* ### 1.2. Format titles with **`type(scope): subject`**.

   _Why:_
    > ⌦`type` categorizes product changes. Valid types are:
    >
    1. `build`: Changes that affect the build system or external dependencies.
    1. `ci`: Changes related to continuous integration, delivery, and deployment tasks.
    1. `docs`: Documentation changes.
    1. `feat`: A new feature.
    1. `fix`: Defect (bug) repair.
    1. `perf`: Performance enhancements.
    1. `refactor`: Source code design improvements that don't affect product behavior.
    1. `style`: Changes involving graphics, typography, etc., as well as source code beautification.
    1. `test`: Tests added to increase code coverage, or corrected due to errors.

* ### 1.3. Fill out the issue template.

    _Why:_
    > ⌦It keeps communication consistent and unambiguous.

* ### 1.4. Label the issue (optional).

    _Why:_
    > ⌦ We use [`git-labelmaker`][gh-git-labelmaker-url] to categorize Issues (and Pull Requests) consistently. There are four label categories:
    >
    1. `Type`: the "kind" of product change.
    2. `Status`: the state of a change.
    3. `Priority`: the importance and value of a change.
    4. `Points`: the size/complexity of a change.

    <details>
    <summary>Toggle table of Label definitions...</summary>
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
      <td>A distinguished or expected characteristic of a product that either differentiates the product from competitors, or whose absence would be diminish the product’s value.&lt;br&gt;<strong>Note</strong> that <code>Type: Feature</code> and <code>Type: Defect</code> are mutually exclusive: an Issue cannot be both a feature and a defect.</td>
      </tr>
      <tr>
      <td><code>Type: Defect</code></td>
      <td>A flaw, fault, or abnormality that deviates from or prevents the product’s expected behavior.&lt;br&gt;<strong>Note</strong> that <code>Type: Feature</code> and <code>Type: Defect</code> are mutually exclusive: an Issue cannot be both a feature and a defect.</td>
      </tr>
      <tr>
      <td><code>CLA: Signed</code></td>
      <td>The person who submitted a product change has signed your Contributor License Agreement.&lt;br&gt;<em>Remove this label if your product owner does not require a CLA.</em></td>
      </tr>
      <tr>
      <td><code>CLA: Unsigned</code></td>
      <td>The person who submitted a product change has __<em>not</em>__signed your Contributor License Agreement.&lt;br&gt;<em>Remove this label if your product owner does not require a CLA.</em></td>
      </tr>
      <tr>
      <td><code>Priority: Critical</code></td>
      <td><code>Type: Feature</code>: The proposed enhancement is essential to the success of your product.&lt;br&gt;<code>Type: Defect</code>: Your product no longer functions due to internal, <code>FATAL</code> errors, and must be addressed immediately in order to maintain consumer loyalty.</td>
      </tr>
      <tr>
      <td><code>Priority: High</code></td>
      <td><code>Type: Feature</code>: The proposed enhancement is central to product’s value proposition, and should be implemented as soon as possible.&lt;br&gt;<code>Type: Defect</code>: The product functions overall, but with an issue that risks consumer abandonment.</td>
      </tr>
      <tr>
      <td><code>Priority: Medium</code></td>
      <td><code>Type: Feature</code> or <code>Type: Defect</code>:  The proposed change should be implemented as long as no <code>Priority: Critical</code> or <code>Priority: High</code> issues exists.</td>
      </tr>
      <tr>
      <td><code>Priority: Low</code></td>
      <td><code>Type: Feature</code>: A proposal that minimally affects the product’s value.<code>Type: Defect</code>: Represents “cosmetic” problems like misspelled words or misaligned text that do not affect branding and marketing strategy.</td>
      </tr>
      <tr>
      <td><code>Status: Abandoned</code></td>
      <td><code>Type: Feature</code> or <code>Type: Defect</code>: The team and community have neglected, forgotten, discarded, or ignored resolving a Issue.</td>
      </tr>
      <tr>
      <td><code>Status: Accepted</code></td>
      <td><code>Type: Feature</code> or <code>Type: Defect</code>:The product owner or maintainers agreed to a product change proposal.</td>
      </tr>
      <tr>
      <td><code>Status: Available</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: The change proposal is ready for team and community members to work on.</td>
      </tr>
      <tr>
      <td><code>Status: Blocked</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: The proposed change cannot be addressed until another issue has been resolved.&lt;br&gt;<strong>Note</strong> that the Issue blocking the proposed change SHOULD be referenced in the <code>Blocked</code> Issue’s description field.</td>
      </tr>
      <tr>
      <td><code>Status: Completed</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: The issue has been resolved and all acceptance criteria validated.</td>
      </tr>
      <tr>
      <td><code>Status: In Progress</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: The team or community is actively working on the Issue’s resolution.</td>
      </tr>
      <tr>
      <td><code>Status: On Hold</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: The Product Owner has (temporarily) postponed Issue resolution.&lt;br&gt;<strong>Note</strong> that the <em>reason</em> for postponement should be stated in the Issue’s description field.</td>
      </tr>
      <tr>
      <td><code>Status: Pending</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: product change or resolution is either awaiting the Product Owner’s decision.&lt;br&gt;Ideally, the Product Owner should declare why they’re undecided somewhere in the Issue thread.</td>
      </tr>
      <tr>
      <td><code>Status: Rejected</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: The Product Owner has declined a change proposal.&lt;br&gt;<strong>Note</strong> that the Product Owner should politely explain why they dismissed the change request.</td>
      </tr>
      <tr>
      <td><code>Status: Review Needed</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: The person working on an Issue has requested help or discussion. When applied to a Pull Request, <code>Status: Review Needed</code> signifies that the PR is ready for evaluation (and potentially, approval).</td>
      </tr>
      <tr>
      <td><code>Status: Revision Needed</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: The Issue is not ready for evaluation because of incomplete or insufficient information.</td>
      </tr>
      <tr>
      <td><code>Type: Breaking Change</code></td>
      <td>The change introduces backward incompatibility with previous product versions.&lt;br&gt;&lt;br&gt;<strong><code>Type: Breaking Change</code> MUST be recorded with a</strong> &lt;li&gt;Git commit message,&lt;li&gt;An increment (+1) in the product’s Semantic Version’s MAJOR version,&lt;li&gt;<code>CHANGELOG</code> entry, and&lt;li&gt;Updated API documentation.</td>
      </tr>
      <tr>
      <td><code>Type: Build</code></td>
      <td>Changes to the process that convert source code into a stand-alone form that can be run on a computer or to the form itself.</td>
      </tr>
      <tr>
      <td><code>Type: Chore</code></td>
      <td>Miscellaneous non-functional changes such as typographical fixes or source code repository initialization, e.g., <code>chore(scm): scaffold product directory structure</code></td>
      </tr>
      <tr>
      <td><code>Type: CI</code></td>
      <td>Continuous Integration (CI) changes, i.e., automated build, test, an quality assurance tasks.</td>
      </tr>
      <tr>
      <td><code>Type: Docs</code></td>
      <td>The introduction of or revisions to natural language documents or source code comments.</td>
      </tr>
      <tr>
      <td><code>Type: Duplicate</code></td>
      <td>An Issue that shares the same characteristics as a previously reported issue. <strong>Note</strong> that  product maintainers should reference the original Issue and close the <code>Type: Duplicate</code> Issue.</td>
      </tr>
      <tr>
      <td><code>Type: Feedback</code></td>
      <td>A response to a <code>Type: Question</code> or voluntary information used as a basis for improvement.</td>
      </tr>
      <tr>
      <td><code>Type: Fix</code></td>
      <td>A change intended to repair a <code>Type: Defect</code> Issue.</td>
      </tr>
      <tr>
      <td><code>Type: Performance</code></td>
      <td>A change intended to reduce product latency.</td>
      </tr>
      <tr>
      <td><code>Type: Question</code></td>
      <td>A request for information.</td>
      </tr>
      <tr>
      <td><code>Type: Refactor</code></td>
      <td>Source code design improvements that do not affect product behavior.</td>
      </tr>
      <tr>
      <td><code>Type: Revert</code></td>
      <td>Changes that return the product’s source code to previous Git commit hash.</td>
      </tr>
      <tr>
      <td><code>Type: Spike</code></td>
      <td>A technical or design <em>experiment</em> that investigates a possible solution. <strong>Note</strong> that spike solutions are, by definition, <em>throwaway</em> solutions that should <strong>NEVER</strong> be added to a product release.</td>
      </tr>
      <tr>
      <td><code>Type: Style</code></td>
      <td>Issues that address code standard <em>or</em> brand compliance.</td>
      </tr>
      <tr>
      <td><code>Type: Test</code></td>
      <td>Issues that prove intended behavior or substantiate “definitions of done.” <code>Type: Test</code> can also refer to changes that result in broader code coverage.</td>
      </tr>
      </tbody>
      </table>
    </details>

* ### 1.5. Monitor your issue for questions.

    _Why:_
    > ⌦ The team might need more clarification.

* ### 1.6. Your issue will be either accepted for work, or declined.

    _Why:_
    > ⌦ It's up to the Product Owner to agree to proposed changes. If they believe your issue add value, the issue will be approved, and we'll
    > ask someone to volunteer to do the work.
    >
    > Otherwise, your issue will be politely declined.


## 2. __Git__

![Git Logo][icon-git-logo-image]

* ### 2.1. __Rules__

  `generator-community` manages contributions with the  [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow).

  * #### 2.1.1. Makes changes in a topic branch.

    _Why:_
    > ⌦ Use an isolated topic branch for parallel product development. Topic branches allow you to submit multiple pull requests without confusion. You can iterate without polluting the master branch with potentially unstable, unfinished code. The `generator-community` team uses:

    > * [Feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow) for small-ish codebases, or
    > * [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) for large applications and monoliths

  * #### 2.1.2. Branch out from `master`.

      _Why:_
      > ⌦ `generator-community` follows the feature-branch-workflow.

  * #### 2.1.3. __*Never*__ push into the `master` branch. __*Always*__ submit a Pull Request.

      _Why:_
      > ⌦ It notifies team members whenever changes occur and allows the community to review your changes at any time..

      > It also enables easy peer-review of the code and dedicates forum for discussing the proposed feature.

  * #### 2.1.4. Submit a Pull Request as soon as possible.

      _Why:_
      > ⌦ Pull Requests declare work in progress. Frequent pushes to a Pull Request notify your team members about change, and gives them the opportunity to provide feedback more often.

      > Pull Request pushes also trigger automated CI-services, which help you fail fast and assess quality.

  * #### 2.1.5. Rebase your local `master` branch before you ask for PR approvals.

      _Why:_
      > Rebasing will merge in the requested branch (`master` or `develop`) and apply the commits that you have made locally to the top of the history without creating a merge commit (assuming there were no conflicts). This results in a nice and clean history.

  * #### 2.1.6. Resolve rebase conflicts before Pull Request reviews.

      _Why:_
      > ⌦ Rebasing will merge in the `master` branch and apply the commits that you have made locally to the top of it.

  * #### 2.1.7. Add reviewers and the label `Status: Needs Review` when the topic branch is ready.
f
      _Why:_
      > ⌦ When you add a Reviewer, GitHub (or Bitbucket) notifies teammates that your topic branch meets all Acceptance Criteria and is ready to be merged into `master`.

      > Add the label "Status: Review Needed" formally declares the status of your topic branch, and helps teams filter through issues.

  * #### 2.1.8. Delete local and remote topic branches after merging.

      _Why:_
      > ⌦ Topic branches should only exist while work is in-progress. Merged topic branches clutter up your list of branches with dead branches. Topic branch deletion also insures that you only ever merge back into `master`.

  * #### 2.1.9. Protect your `master` branch.

      _Why:_
      > ⌦ Branch protection prevents production-ready branches from incorporating unexpected and irreversible changes. Learn more about

      > * [GitHub protected branches](https://help.github.com/articles/about-protected-branches/) and
      > * [Bitbucket protected branches](https://confluence.atlassian.com/bitbucketserver/using-branch-permissions-776639807.html).

* ### 2.2 __Git workflow__

  We use the  [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow). We _recommend_ [interactive rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing#the-golden-rule-of-rebasing), too, but that's not required.

  The main steps are as follow:

  * #### 2.2.1. New products: initialize a git repository in the project directory.

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

  * #### 2.2.4. Sync with remote to get changes you’ve missed.

    ```sh
    git checkout master
    git pull
    ```

    _Why:_
    > ⌦ This will give you a chance to deal with conflicts on your machine while rebasing(later) rather than creating a Pull Request that contains conflicts.

  * #### 2.2.5. Update your topic branch with the latest changes from `master` by interactive rebase.

    ```sh
    git checkout <branchname>
    git rebase -i --autosquash master
    ```

    _Why:_
    > ⌦ You can use `--autosquash` to squash all your commits to a single commit. Nobody wants many commits for a single feature in develop branch. [Learn more about autosquashing Git commits....][autosquashing-git-commits-url]
  * #### 2.2.6. Resolve conflicts (if any occur), and continue rebase. Otherwise, skip this step.

    [Learn more about resolving conflicts][git-resolve-conflicts-url]....

    ```sh
    git add <file1> <file2> ...
    git rebase --continue
    ```

  * #### 2.2.7. Push your branch with the `-f` flag (if necessary).

    Rebase changes history, so you might need to force changes into the `remote` branch with the `-f` flag. If someone else is working on your branch, use the less destructive `--force-with-lease`.

    ```sh
    git push -f
    ```

    _Why:_
    > ⌦ When you do a rebase, you are changing the history on your topic branch. As a result, Git will reject normal `git push`. Instead, you'll need to use the -f or --force flag. [Learn more about `--force-with-lease`....][force-with-lease-url]

  * #### 2.2.8. Submit a Pull Request.

  * #### 2.2.9. Pull request will be accepted, merged and close by a reviewer.

  * #### 2.2.10. Remove your local topic branch if you're done.

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


### 2.3. Tell your boss how Git enables collaborative process models

![Leadership](../docs/img/icons8/icon-leadership-filled.png)

  __Git enables collaboration with structured (business) process models.__ Git is a collaboration tool that grants people the opportunity to contribute to software products using simple and consistent process models called workflows.

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

  * #### 2.3.1. Explain that inner and open source are _process models_

    _Why:_
    > ⌦ Git is a __collaboration__ tool that grants people the opportunity to contribute to software products using simple and consistent process models called __workflows.__

  * #### 2.3.2. Describe a typical Git workflow in collaborative terms

    _Why:_
    > ⌦ Many engineers can discuss Git's _technicalities_, but cannot articulate Git's as an applied _technology_ for collaboration.




[all-contributors-cli-url]: https://github.com/kentcdodds/all-contributors
[autosquashing-git-commits-url]: https://robots.thoughtbot.com/autosquashing-git-commits
[changelog-url]: ./CHANGELOG.md
[cite-interview-torvalds-url]: https://techcrunch.com/2012/04/19/an-interview-with-millenium-technology-prize-finalist-linus-torvalds/
[cla-url]: https://www.clahub.com/agreements/commonality/generator-community
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[commonality-palette-image]: ./docs/img/palette.svg
[contributing-url]: ./CONTRIBUTING.md
[contribution-lifecycle-issues-image]: /docs/img/icons8/contribution-lifecycle-create-issue.png
[contribution-lifecycle-pr-image]: /docs/img/icons8/contribution-lifecycle-pr.png
[coolors-palette-url]: https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533
[force-with-lease-url]: https://developer.atlassian.com/blog/2015/04/force-with-lease/
[fossa-image-large]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Forganization%2Frepo-name.svg?type=large
[gh-git-labelmaker-url]: https://github.com/himynameisdave/git-labelmaker
[git-resolve-conflicts-url]: https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/
[icon-git-logo-image]: /docs/img/icons8/git-logo.png
[icon-info-image]: /docs/img/icons8/icon-info-50.png
[icon-issue-image]: /docs/img/icons8/icon-issues.png
[icon-pr-image]: /docs/img/icons8/icon-pr.png
[license-url]: ./LICENSE
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com
[markdown-toc-url]: https://github.com/jonschlinkert/markdown-toc
[product-development-guidelines-url]: /docs/product-development-guidelines/js/PRODUCT_DEVELOPEMENT_GUIDELINES.md
[product-repo-logo-image]: ../docs/img/logo-commonalaxy.png
[product-repo-url]: .
