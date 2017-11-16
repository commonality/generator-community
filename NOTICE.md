# 3rd-Party Software for [generator-community]()

## Table of contents
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
1. [License Scan](#license-scan)
  1. [UNRECOGNIZED](#unrecognized)
  1. [Public Domain](#public-domain)
  1. [Mozilla Public License 2.0 (MPL-2.0)](#mozilla-public-license-20-mpl-20)
  1. [GNU General Public License v3 (GPL-3)](#gnu-general-public-license-v3-gpl-3)
  1. [GNU Lesser General Public License v3 (LGPL-3.0)](#gnu-lesser-general-public-license-v3-lgpl-30)
  1. [MIT License (Expat)](#mit-license-expat)
  1. [Apache License 2.0 (Apache-2.0)](#apache-license-20-apache-20)
  1. [BSD 3-Clause License (Revised)](#bsd-3-clause-license-revised)
1. [Direct Dependencies](#direct-dependencies)
  1. [Details](#details)
    1. [**babel-eslint (8.0.2)**](#babel-eslint-802)
    1. [**chalk (2.3.0)**](#chalk-230)
    1. [**color-convert (1.9.1)**](#color-convert-191)
    1. [**colors (1.1.2)**](#colors-112)
    1. [**conventional-changelog (1.1.7)**](#conventional-changelog-117)
    1. [**conventional-recommended-bump (1.0.3)**](#conventional-recommended-bump-103)
    1. [**diff (3.4.0)**](#diff-340)
    1. [**flat-cache (1.3.0)**](#flat-cache-130)
    1. [**generator-license (5.2.0)**](#generator-license-520)
    1. [**generator-node (2.3.0)**](#generator-node-230)
    1. [**git-remote-origin-url (2.0.0)**](#git-remote-origin-url-200)
    1. [**git-url-parse (7.0.1)**](#git-url-parse-701)
    1. [**github-username (4.1.0)**](#github-username-410)
    1. [**ignore (3.3.7)**](#ignore-337)
    1. [**inquirer-npm-name (2.0.0)**](#inquirer-npm-name-200)
    1. [**interpret (1.0.4)**](#interpret-104)
    1. [**istanbul-api (1.2.1)**](#istanbul-api-121)
    1. [**istanbul-lib-instrument (1.9.1)**](#istanbul-lib-instrument-191)
    1. [**istanbul-lib-source-maps (1.2.2)**](#istanbul-lib-source-maps-122)
    1. [**js-yaml (3.10.0)**](#js-yaml-3100)
    1. [**lodash (4.17.4)**](#lodash-4174)
    1. [**make-dir (1.1.0)**](#make-dir-110)
    1. [**markdown-magic (0.1.19)**](#markdown-magic-0119)
    1. [**markdown-magic-dependency-table (1.3.2)**](#markdown-magic-dependency-table-132)
    1. [**markdown-magic-install-command (1.3.1)**](#markdown-magic-install-command-131)
    1. [**markdown-magic-package-scripts (1.2.1)**](#markdown-magic-package-scripts-121)
    1. [**parse-author (2.0.0)**](#parse-author-200)
    1. [**private (0.1.8)**](#private-018)
    1. [**rc (1.2.2)**](#rc-122)
    1. [**request (2.83.0)**](#request-2830)
    1. [**resolve (1.5.0)**](#resolve-150)
    1. [**rimraf (2.6.2)**](#rimraf-262)
    1. [**source-map-support (0.4.18)**](#source-map-support-0418)
    1. [**update-notifier (2.3.0)**](#update-notifier-230)
    1. [**worker-farm (1.5.2)**](#worker-farm-152)
    1. [**yeoman-environment (2.0.5)**](#yeoman-environment-205)
    1. [**yeoman-generator (2.0.1)**](#yeoman-generator-201)
1. [Deep Dependencies](#deep-dependencies)
  1. [Details](#details-1)
    1. [**ajv (5.3.0)**](#ajv-530)
    1. [**align-text (0.1.4)**](#align-text-014)
    1. [**amdefine (1.0.1)**](#amdefine-101)
    1. [**ansi-align (2.0.0)**](#ansi-align-200)
    1. [**ansi-escapes (3.0.0)**](#ansi-escapes-300)
    1. [**ansi-red (0.1.1)**](#ansi-red-011)
    1. [**ansi-regex (3.0.0)**](#ansi-regex-300)
    1. [**ansi-styles (3.2.0)**](#ansi-styles-320)
    1. [**ansi-wrap (0.1.0)**](#ansi-wrap-010)
    1. [**append-transform (0.4.0)**](#append-transform-040)
    1. [**argparse (1.0.9)**](#argparse-109)
    1. [**array-differ (1.0.0)**](#array-differ-100)
    1. [**array-find-index (1.0.2)**](#array-find-index-102)
    1. [**array-ify (1.0.0)**](#array-ify-100)
    1. [**array-union (1.0.2)**](#array-union-102)
    1. [**array-uniq (1.0.3)**](#array-uniq-103)
    1. [**arrify (1.0.1)**](#arrify-101)
    1. [**arr-union (3.1.0)**](#arr-union-310)
    1. [**asap (2.0.6)**](#asap-206)
    1. [**asn1 (0.2.3)**](#asn1-023)
    1. [**assert-plus (1.0.0)**](#assert-plus-100)
    1. [**async (2.6.0)**](#async-260)
    1. [**asynckit (0.4.0)**](#asynckit-040)
    1. [**author-regex (1.0.0)**](#author-regex-100)
    1. [**autolinker (0.15.3)**](#autolinker-0153)
    1. [**aws4 (1.6.0)**](#aws4-160)
    1. [**aws-sign2 (0.7.0)**](#aws-sign2-070)
    1. [**babel-code-frame (6.26.0)**](#babel-code-frame-6260)
    1. [**@babel/code-frame (7.0.0-beta.32)**](#babelcode-frame-700-beta32)
    1. [**babel-generator (6.26.0)**](#babel-generator-6260)
    1. [**@babel/helper-function-name (7.0.0-beta.32)**](#babelhelper-function-name-700-beta32)
    1. [**@babel/helper-get-function-arity (7.0.0-beta.32)**](#babelhelper-get-function-arity-700-beta32)
    1. [**babel-messages (6.23.0)**](#babel-messages-6230)
    1. [**babel-runtime (6.26.0)**](#babel-runtime-6260)
    1. [**babel-template (6.26.0)**](#babel-template-6260)
    1. [**@babel/template (7.0.0-beta.32)**](#babeltemplate-700-beta32)
    1. [**babel-traverse (6.26.0)**](#babel-traverse-6260)
    1. [**@babel/traverse (7.0.0-beta.32)**](#babeltraverse-700-beta32)
    1. [**babel-types (6.26.0)**](#babel-types-6260)
    1. [**@babel/types (7.0.0-beta.32)**](#babeltypes-700-beta32)
    1. [**babylon (7.0.0-beta.32)**](#babylon-700-beta32)
    1. [**balanced-match (1.0.0)**](#balanced-match-100)
    1. [**bcrypt-pbkdf (1.0.1)**](#bcrypt-pbkdf-101)
    1. [**binaryextensions (2.0.0)**](#binaryextensions-200)
    1. [**boom (5.2.0)**](#boom-520)
    1. [**boxen (1.2.2)**](#boxen-122)
    1. [**brace-expansion (1.1.8)**](#brace-expansion-118)
    1. [**builtin-modules (1.1.1)**](#builtin-modules-111)
    1. [**bytewise (1.1.0)**](#bytewise-110)
    1. [**bytewise-core (1.2.3)**](#bytewise-core-123)
    1. [**camelcase (4.1.0)**](#camelcase-410)
    1. [**camelcase-keys (2.1.0)**](#camelcase-keys-210)
    1. [**capture-stack-trace (1.0.0)**](#capture-stack-trace-100)
    1. [**caseless (0.12.0)**](#caseless-0120)
    1. [**center-align (0.1.3)**](#center-align-013)
    1. [**circular-json (0.3.3)**](#circular-json-033)
    1. [**class-extend (0.1.2)**](#class-extend-012)
    1. [**cli-boxes (1.0.0)**](#cli-boxes-100)
    1. [**cli-cursor (2.1.0)**](#cli-cursor-210)
    1. [**cli-table (0.3.1)**](#cli-table-031)
    1. [**cliui (2.1.0)**](#cliui-210)
    1. [**cli-width (2.2.0)**](#cli-width-220)
    1. [**clone (2.1.1)**](#clone-211)
    1. [**cloneable-readable (1.0.0)**](#cloneable-readable-100)
    1. [**clone-buffer (1.0.0)**](#clone-buffer-100)
    1. [**clone-stats (1.0.0)**](#clone-stats-100)
    1. [**co (4.6.0)**](#co-460)
    1. [**code-point-at (1.1.0)**](#code-point-at-110)
    1. [**coffee-script (1.12.7)**](#coffee-script-1127)
    1. [**color-name (1.1.3)**](#color-name-113)
    1. [**combined-stream (1.0.5)**](#combined-stream-105)
    1. [**commander (2.11.0)**](#commander-2110)
    1. [**commondir (1.0.1)**](#commondir-101)
    1. [**compare-func (1.3.2)**](#compare-func-132)
    1. [**concat-map (0.0.1)**](#concat-map-001)
    1. [**concat-stream (1.6.0)**](#concat-stream-160)
    1. [**configstore (3.1.1)**](#configstore-311)
    1. [**conventional-changelog-angular (1.5.2)**](#conventional-changelog-angular-152)
    1. [**conventional-changelog-atom (0.1.2)**](#conventional-changelog-atom-012)
    1. [**conventional-changelog-codemirror (0.2.1)**](#conventional-changelog-codemirror-021)
    1. [**conventional-changelog-core (1.9.3)**](#conventional-changelog-core-193)
    1. [**conventional-changelog-ember (0.2.9)**](#conventional-changelog-ember-029)
    1. [**conventional-changelog-eslint (0.2.1)**](#conventional-changelog-eslint-021)
    1. [**conventional-changelog-express (0.2.1)**](#conventional-changelog-express-021)
    1. [**conventional-changelog-jquery (0.1.0)**](#conventional-changelog-jquery-010)
    1. [**conventional-changelog-jscs (0.1.0)**](#conventional-changelog-jscs-010)
    1. [**conventional-changelog-jshint (0.2.1)**](#conventional-changelog-jshint-021)
    1. [**conventional-changelog-writer (2.0.2)**](#conventional-changelog-writer-202)
    1. [**conventional-commits-filter (1.1.0)**](#conventional-commits-filter-110)
    1. [**conventional-commits-parser (2.0.1)**](#conventional-commits-parser-201)
    1. [**core-js (2.5.1)**](#core-js-251)
    1. [**core-util-is (1.0.2)**](#core-util-is-102)
    1. [**create-error-class (3.0.2)**](#create-error-class-302)
    1. [**cross-spawn (5.1.0)**](#cross-spawn-510)
    1. [**cryptiles (3.1.2)**](#cryptiles-312)
    1. [**crypto-random-string (1.0.0)**](#crypto-random-string-100)
    1. [**currently-unhandled (0.4.1)**](#currently-unhandled-041)
    1. [**dargs (5.1.0)**](#dargs-510)
    1. [**dashdash (1.14.1)**](#dashdash-1141)
    1. [**dateformat (3.0.2)**](#dateformat-302)
    1. [**debug (3.1.0)**](#debug-310)
    1. [**decamelize (1.2.0)**](#decamelize-120)
    1. [**decompress-response (3.3.0)**](#decompress-response-330)
    1. [**deep-extend (0.5.0)**](#deep-extend-050)
    1. [**deepmerge (1.5.2)**](#deepmerge-152)
    1. [**default-require-extensions (1.0.0)**](#default-require-extensions-100)
    1. [**del (2.2.2)**](#del-222)
    1. [**delayed-stream (1.0.0)**](#delayed-stream-100)
    1. [**detect-conflict (1.0.1)**](#detect-conflict-101)
    1. [**detect-indent (4.0.0)**](#detect-indent-400)
    1. [**diacritics-map (0.1.0)**](#diacritics-map-010)
    1. [**dot-prop (4.2.0)**](#dot-prop-420)
    1. [**duplexer3 (0.1.4)**](#duplexer3-014)
    1. [**ecc-jsbn (0.1.1)**](#ecc-jsbn-011)
    1. [**editions (1.3.3)**](#editions-133)
    1. [**ejs (2.5.7)**](#ejs-257)
    1. [**errno (0.1.4)**](#errno-014)
    1. [**error (7.0.2)**](#error-702)
    1. [**error-ex (1.3.1)**](#error-ex-131)
    1. [**escape-string-regexp (1.0.5)**](#escape-string-regexp-105)
    1. [**esprima (4.0.0)**](#esprima-400)
    1. [**esutils (2.0.2)**](#esutils-202)
    1. [**execa (0.7.0)**](#execa-070)
    1. [**exit-hook (1.1.1)**](#exit-hook-111)
    1. [**expand-range (1.8.2)**](#expand-range-182)
    1. [**extend (3.0.1)**](#extend-301)
    1. [**extend-shallow (2.0.1)**](#extend-shallow-201)
    1. [**external-editor (2.0.5)**](#external-editor-205)
    1. [**extsprintf (1.3.0)**](#extsprintf-130)
    1. [**fast-deep-equal (1.0.0)**](#fast-deep-equal-100)
    1. [**fast-json-stable-stringify (2.0.0)**](#fast-json-stable-stringify-200)
    1. [**figures (2.0.0)**](#figures-200)
    1. [**fileset (2.0.3)**](#fileset-203)
    1. [**fill-range (2.2.3)**](#fill-range-223)
    1. [**findup (0.1.5)**](#findup-015)
    1. [**find-up (2.1.0)**](#find-up-210)
    1. [**first-chunk-stream (2.0.0)**](#first-chunk-stream-200)
    1. [**forever-agent (0.6.1)**](#forever-agent-061)
    1. [**for-in (1.0.2)**](#for-in-102)
    1. [**form-data (2.3.1)**](#form-data-231)
    1. [**fs-extra (1.0.0)**](#fs-extra-100)
    1. [**fs.realpath (1.0.0)**](#fsrealpath-100)
    1. [**generator-jest (1.4.2)**](#generator-jest-142)
    1. [**generator-travis (1.5.3)**](#generator-travis-153)
    1. [**getpass (0.1.7)**](#getpass-017)
    1. [**get-pkg-repo (1.4.0)**](#get-pkg-repo-140)
    1. [**get-stdin (4.0.1)**](#get-stdin-401)
    1. [**get-stream (3.0.0)**](#get-stream-300)
    1. [**get-value (2.0.6)**](#get-value-206)
    1. [**gh-got (6.0.0)**](#gh-got-600)
    1. [**git-config (0.0.7)**](#git-config-007)
    1. [**gitconfiglocal (1.0.0)**](#gitconfiglocal-100)
    1. [**git-raw-commits (1.3.0)**](#git-raw-commits-130)
    1. [**git-semver-tags (1.2.3)**](#git-semver-tags-123)
    1. [**git-up (2.0.9)**](#git-up-209)
    1. [**glob (7.1.2)**](#glob-712)
    1. [**global-dirs (0.1.0)**](#global-dirs-010)
    1. [**globals (9.18.0)**](#globals-9180)
    1. [**globby (6.1.0)**](#globby-610)
    1. [**got (7.1.0)**](#got-710)
    1. [**graceful-fs (4.1.11)**](#graceful-fs-4111)
    1. [**gray-matter (2.1.1)**](#gray-matter-211)
    1. [**grouped-queue (0.3.3)**](#grouped-queue-033)
    1. [**handlebars (4.0.11)**](#handlebars-4011)
    1. [**har-schema (2.0.0)**](#har-schema-200)
    1. [**har-validator (5.0.3)**](#har-validator-503)
    1. [**has-ansi (2.0.0)**](#has-ansi-200)
    1. [**has-flag (2.0.0)**](#has-flag-200)
    1. [**has-symbol-support-x (1.4.1)**](#has-symbol-support-x-141)
    1. [**has-to-string-tag-x (1.4.1)**](#has-to-string-tag-x-141)
    1. [**hawk (6.0.2)**](#hawk-602)
    1. [**hoek (4.2.0)**](#hoek-420)
    1. [**hosted-git-info (2.5.0)**](#hosted-git-info-250)
    1. [**http-basic (2.5.1)**](#http-basic-251)
    1. [**http-response-object (1.1.0)**](#http-response-object-110)
    1. [**http-signature (1.2.0)**](#http-signature-120)
    1. [**iconv-lite (0.4.19)**](#iconv-lite-0419)
    1. [**import-lazy (2.1.0)**](#import-lazy-210)
    1. [**imurmurhash (0.1.4)**](#imurmurhash-014)
    1. [**indent-string (2.1.0)**](#indent-string-210)
    1. [**inflight (1.0.6)**](#inflight-106)
    1. [**inherits (2.0.3)**](#inherits-203)
    1. [**ini (1.3.4)**](#ini-134)
    1. [**iniparser (1.0.5)**](#iniparser-105)
    1. [**inquirer (3.3.0)**](#inquirer-330)
    1. [**invariant (2.2.2)**](#invariant-222)
    1. [**isarray (1.0.0)**](#isarray-100)
    1. [**is-arrayish (0.2.1)**](#is-arrayish-021)
    1. [**is-buffer (1.1.6)**](#is-buffer-116)
    1. [**is-builtin-module (1.0.0)**](#is-builtin-module-100)
    1. [**isexe (2.0.0)**](#isexe-200)
    1. [**is-extendable (0.1.1)**](#is-extendable-011)
    1. [**is-finite (1.0.2)**](#is-finite-102)
    1. [**is-fullwidth-code-point (2.0.0)**](#is-fullwidth-code-point-200)
    1. [**is-installed-globally (0.1.0)**](#is-installed-globally-010)
    1. [**is-local-path (0.1.6)**](#is-local-path-016)
    1. [**is-npm (1.0.0)**](#is-npm-100)
    1. [**is-number (3.0.0)**](#is-number-300)
    1. [**is-obj (1.0.1)**](#is-obj-101)
    1. [**is-object (1.0.1)**](#is-object-101)
    1. [**isobject (3.0.1)**](#isobject-301)
    1. [**is-path-cwd (1.0.0)**](#is-path-cwd-100)
    1. [**is-path-in-cwd (1.0.0)**](#is-path-in-cwd-100)
    1. [**is-path-inside (1.0.0)**](#is-path-inside-100)
    1. [**is-plain-obj (1.1.0)**](#is-plain-obj-110)
    1. [**is-plain-object (2.0.4)**](#is-plain-object-204)
    1. [**is-promise (2.1.0)**](#is-promise-210)
    1. [**is-redirect (1.0.0)**](#is-redirect-100)
    1. [**is-retry-allowed (1.1.0)**](#is-retry-allowed-110)
    1. [**is-scoped (1.0.0)**](#is-scoped-100)
    1. [**is-ssh (1.3.0)**](#is-ssh-130)
    1. [**isstream (0.1.2)**](#isstream-012)
    1. [**is-stream (1.1.0)**](#is-stream-110)
    1. [**is-subset (0.1.1)**](#is-subset-011)
    1. [**istanbul-lib-coverage (1.1.1)**](#istanbul-lib-coverage-111)
    1. [**istanbul-lib-hook (1.1.0)**](#istanbul-lib-hook-110)
    1. [**istanbul-lib-report (1.1.2)**](#istanbul-lib-report-112)
    1. [**istanbul-reports (1.1.3)**](#istanbul-reports-113)
    1. [**istextorbinary (2.1.0)**](#istextorbinary-210)
    1. [**is-text-path (1.0.1)**](#is-text-path-101)
    1. [**is-typedarray (1.0.0)**](#is-typedarray-100)
    1. [**isurl (1.0.0)**](#isurl-100)
    1. [**is-utf8 (0.2.1)**](#is-utf8-021)
    1. [**jsbn (0.1.1)**](#jsbn-011)
    1. [**jschardet (1.6.0)**](#jschardet-160)
    1. [**jsesc (1.3.0)**](#jsesc-130)
    1. [**jsonfile (2.4.0)**](#jsonfile-240)
    1. [**jsonparse (1.3.1)**](#jsonparse-131)
    1. [**json-schema (0.2.3)**](#json-schema-023)
    1. [**json-schema-traverse (0.3.1)**](#json-schema-traverse-031)
    1. [**JSONStream (1.3.1)**](#jsonstream-131)
    1. [**json-stringify-safe (5.0.1)**](#json-stringify-safe-501)
    1. [**jsprim (1.4.1)**](#jsprim-141)
    1. [**js-tokens (3.0.2)**](#js-tokens-302)
    1. [**kind-of (4.0.0)**](#kind-of-400)
    1. [**klaw (1.3.1)**](#klaw-131)
    1. [**latest-version (3.1.0)**](#latest-version-310)
    1. [**lazy-cache (2.0.2)**](#lazy-cache-202)
    1. [**list-item (1.1.1)**](#list-item-111)
    1. [**load-json-file (2.0.0)**](#load-json-file-200)
    1. [**locate-path (2.0.0)**](#locate-path-200)
    1. [**lodash.camelcase (4.3.0)**](#lodashcamelcase-430)
    1. [**lodash._reinterpolate (3.0.0)**](#lodash_reinterpolate-300)
    1. [**lodash.template (4.4.0)**](#lodashtemplate-440)
    1. [**lodash.templatesettings (4.1.0)**](#lodashtemplatesettings-410)
    1. [**lodash.upperfirst (4.3.1)**](#lodashupperfirst-431)
    1. [**lodash.zip (4.2.0)**](#lodashzip-420)
    1. [**log-symbols (2.1.0)**](#log-symbols-210)
    1. [**longest (1.0.1)**](#longest-101)
    1. [**loose-envify (1.3.1)**](#loose-envify-131)
    1. [**loud-rejection (1.6.0)**](#loud-rejection-160)
    1. [**lowercase-keys (1.0.0)**](#lowercase-keys-100)
    1. [**lru-cache (4.1.1)**](#lru-cache-411)
    1. [**map-obj (1.0.1)**](#map-obj-101)
    1. [**markdown-link (0.1.1)**](#markdown-link-011)
    1. [**markdown-toc (1.2.0)**](#markdown-toc-120)
    1. [**mem-fs (1.1.3)**](#mem-fs-113)
    1. [**mem-fs-editor (3.0.2)**](#mem-fs-editor-302)
    1. [**meow (3.7.0)**](#meow-370)
    1. [**merge-and-concat (1.0.2)**](#merge-and-concat-102)
    1. [**mime-db (1.30.0)**](#mime-db-1300)
    1. [**mime-types (2.1.17)**](#mime-types-2117)
    1. [**mimic-fn (1.1.0)**](#mimic-fn-110)
    1. [**mimic-response (1.0.0)**](#mimic-response-100)
    1. [**minimatch (3.0.4)**](#minimatch-304)
    1. [**minimist (1.2.0)**](#minimist-120)
    1. [**mixin-deep (1.2.0)**](#mixin-deep-120)
    1. [**mkdirp (0.5.1)**](#mkdirp-051)
    1. [**modify-values (1.0.0)**](#modify-values-100)
    1. [**ms (2.0.0)**](#ms-200)
    1. [**multimatch (2.1.0)**](#multimatch-210)
    1. [**mute-stream (0.0.7)**](#mute-stream-007)
    1. [**normalize-package-data (2.4.0)**](#normalize-package-data-240)
    1. [**npm-name (3.1.0)**](#npm-name-310)
    1. [**npm-run-path (2.0.2)**](#npm-run-path-202)
    1. [**number-is-nan (1.0.1)**](#number-is-nan-101)
    1. [**oauth-sign (0.8.2)**](#oauth-sign-082)
    1. [**object-assign (4.1.1)**](#object-assign-411)
    1. [**object.pick (1.3.0)**](#objectpick-130)
    1. [**once (1.4.0)**](#once-140)
    1. [**onetime (2.0.1)**](#onetime-201)
    1. [**optimist (0.6.1)**](#optimist-061)
    1. [**os-homedir (1.0.2)**](#os-homedir-102)
    1. [**os-shim (0.1.3)**](#os-shim-013)
    1. [**os-tmpdir (1.0.2)**](#os-tmpdir-102)
    1. [**package-json (4.0.1)**](#package-json-401)
    1. [**parse-github-repo-url (1.4.1)**](#parse-github-repo-url-141)
    1. [**parse-json (2.2.0)**](#parse-json-220)
    1. [**parse-url (1.3.11)**](#parse-url-1311)
    1. [**path-exists (3.0.0)**](#path-exists-300)
    1. [**path-is-absolute (1.0.1)**](#path-is-absolute-101)
    1. [**path-is-inside (1.0.2)**](#path-is-inside-102)
    1. [**path-key (2.0.1)**](#path-key-201)
    1. [**path-parse (1.0.5)**](#path-parse-105)
    1. [**path-type (2.0.0)**](#path-type-200)
    1. [**p-cancelable (0.3.0)**](#p-cancelable-030)
    1. [**performance-now (2.1.0)**](#performance-now-210)
    1. [**p-finally (1.0.0)**](#p-finally-100)
    1. [**pify (3.0.0)**](#pify-300)
    1. [**pinkie (2.0.4)**](#pinkie-204)
    1. [**pinkie-promise (2.0.1)**](#pinkie-promise-201)
    1. [**p-limit (1.1.0)**](#p-limit-110)
    1. [**p-locate (2.0.0)**](#p-locate-200)
    1. [**prepend-http (1.0.4)**](#prepend-http-104)
    1. [**pretty-bytes (4.0.2)**](#pretty-bytes-402)
    1. [**process-nextick-args (1.0.7)**](#process-nextick-args-107)
    1. [**promise (7.3.1)**](#promise-731)
    1. [**protocols (1.4.6)**](#protocols-146)
    1. [**prr (0.0.0)**](#prr-000)
    1. [**pseudomap (1.0.2)**](#pseudomap-102)
    1. [**p-timeout (1.2.0)**](#p-timeout-120)
    1. [**punycode (1.4.1)**](#punycode-141)
    1. [**q (1.5.1)**](#q-151)
    1. [**qs (6.5.1)**](#qs-651)
    1. [**ramda (0.23.0)**](#ramda-0230)
    1. [**randomatic (1.1.7)**](#randomatic-117)
    1. [**readable-stream (2.3.3)**](#readable-stream-233)
    1. [**read-chunk (2.1.0)**](#read-chunk-210)
    1. [**read-pkg (2.0.0)**](#read-pkg-200)
    1. [**read-pkg-up (2.0.0)**](#read-pkg-up-200)
    1. [**rechoir (0.6.2)**](#rechoir-062)
    1. [**redent (1.0.0)**](#redent-100)
    1. [**regenerator-runtime (0.11.0)**](#regenerator-runtime-0110)
    1. [**registry-auth-token (3.3.1)**](#registry-auth-token-331)
    1. [**registry-url (3.1.0)**](#registry-url-310)
    1. [**remarkable (1.7.1)**](#remarkable-171)
    1. [**remove-trailing-separator (1.1.0)**](#remove-trailing-separator-110)
    1. [**repeat-element (1.1.2)**](#repeat-element-112)
    1. [**repeating (2.0.1)**](#repeating-201)
    1. [**repeat-string (1.6.1)**](#repeat-string-161)
    1. [**replace-ext (1.0.0)**](#replace-ext-100)
    1. [**restore-cursor (2.0.0)**](#restore-cursor-200)
    1. [**right-align (0.1.3)**](#right-align-013)
    1. [**run-async (2.3.0)**](#run-async-230)
    1. [**rx (4.1.0)**](#rx-410)
    1. [**rx-lite (4.0.8)**](#rx-lite-408)
    1. [**rx-lite-aggregates (4.0.8)**](#rx-lite-aggregates-408)
    1. [**safe-buffer (5.1.1)**](#safe-buffer-511)
    1. [**scoped-regex (1.0.0)**](#scoped-regex-100)
    1. [**semver (5.4.1)**](#semver-541)
    1. [**semver-diff (2.1.0)**](#semver-diff-210)
    1. [**set-getter (0.1.0)**](#set-getter-010)
    1. [**set-value (0.4.3)**](#set-value-043)
    1. [**shebang-command (1.2.0)**](#shebang-command-120)
    1. [**shebang-regex (1.0.0)**](#shebang-regex-100)
    1. [**shelljs (0.7.8)**](#shelljs-078)
    1. [**signal-exit (3.0.2)**](#signal-exit-302)
    1. [**sntp (2.1.0)**](#sntp-210)
    1. [**sort-asc (0.2.0)**](#sort-asc-020)
    1. [**sort-desc (0.2.0)**](#sort-desc-020)
    1. [**sort-object (3.0.2)**](#sort-object-302)
    1. [**sort-scripts (1.0.0)**](#sort-scripts-100)
    1. [**source-map (0.5.7)**](#source-map-057)
    1. [**spawn-sync (1.0.15)**](#spawn-sync-1015)
    1. [**spdx-correct (1.0.2)**](#spdx-correct-102)
    1. [**spdx-expression-parse (1.0.4)**](#spdx-expression-parse-104)
    1. [**spdx-license-ids (1.2.2)**](#spdx-license-ids-122)
    1. [**split (1.0.1)**](#split-101)
    1. [**split2 (2.2.0)**](#split2-220)
    1. [**sprintf-js (1.0.3)**](#sprintf-js-103)
    1. [**sshpk (1.13.1)**](#sshpk-1131)
    1. [**string_decoder (1.0.3)**](#string_decoder-103)
    1. [**stringstream (0.0.5)**](#stringstream-005)
    1. [**string-template (0.2.1)**](#string-template-021)
    1. [**string-width (2.1.1)**](#string-width-211)
    1. [**strip-ansi (4.0.0)**](#strip-ansi-400)
    1. [**strip-bom (3.0.0)**](#strip-bom-300)
    1. [**strip-bom-stream (2.0.0)**](#strip-bom-stream-200)
    1. [**strip-color (0.1.0)**](#strip-color-010)
    1. [**strip-eof (1.0.0)**](#strip-eof-100)
    1. [**strip-indent (1.0.1)**](#strip-indent-101)
    1. [**strip-json-comments (2.0.1)**](#strip-json-comments-201)
    1. [**supports-color (4.5.0)**](#supports-color-450)
    1. [**sync-request (3.0.1)**](#sync-request-301)
    1. [**term-size (1.2.0)**](#term-size-120)
    1. [**text-extensions (1.7.0)**](#text-extensions-170)
    1. [**textextensions (2.1.0)**](#textextensions-210)
    1. [**text-table (0.2.0)**](#text-table-020)
    1. [**then-request (2.2.0)**](#then-request-220)
    1. [**through2 (2.0.3)**](#through2-203)
    1. [**through (2.3.8)**](#through-238)
    1. [**timed-out (4.0.1)**](#timed-out-401)
    1. [**tmp (0.0.33)**](#tmp-0033)
    1. [**to-fast-properties (2.0.0)**](#to-fast-properties-200)
    1. [**toml (2.3.3)**](#toml-233)
    1. [**to-object-path (0.3.0)**](#to-object-path-030)
    1. [**tough-cookie (2.3.3)**](#tough-cookie-233)
    1. [**travis-config-keys (1.0.3)**](#travis-config-keys-103)
    1. [**trim-newlines (1.0.0)**](#trim-newlines-100)
    1. [**trim-off-newlines (1.0.1)**](#trim-off-newlines-101)
    1. [**trim-right (1.0.1)**](#trim-right-101)
    1. [**tunnel-agent (0.6.0)**](#tunnel-agent-060)
    1. [**tweetnacl (0.14.5)**](#tweetnacl-0145)
    1. [**typedarray (0.0.6)**](#typedarray-006)
    1. [**typewise (1.0.3)**](#typewise-103)
    1. [**typewise-core (1.2.0)**](#typewise-core-120)
    1. [**uglify-js (2.8.29)**](#uglify-js-2829)
    1. [**uglify-to-browserify (1.0.2)**](#uglify-to-browserify-102)
    1. [**underscore (1.7.0)**](#underscore-170)
    1. [**underscore.string (2.4.0)**](#underscorestring-240)
    1. [**union-value (0.2.4)**](#union-value-024)
    1. [**unique-string (1.0.0)**](#unique-string-100)
    1. [**untildify (3.0.2)**](#untildify-302)
    1. [**unzip-response (2.0.1)**](#unzip-response-201)
    1. [**url-parse-lax (1.0.0)**](#url-parse-lax-100)
    1. [**url-to-options (1.0.1)**](#url-to-options-101)
    1. [**user-home (2.0.0)**](#user-home-200)
    1. [**util-deprecate (1.0.2)**](#util-deprecate-102)
    1. [**uuid (3.1.0)**](#uuid-310)
    1. [**validate-npm-package-license (3.0.1)**](#validate-npm-package-license-301)
    1. [**verror (1.10.0)**](#verror-1100)
    1. [**vinyl (2.1.0)**](#vinyl-210)
    1. [**vinyl-file (2.0.0)**](#vinyl-file-200)
    1. [**which (1.3.0)**](#which-130)
    1. [**widest-line (1.0.0)**](#widest-line-100)
    1. [**window-size (0.1.0)**](#window-size-010)
    1. [**wordwrap (0.0.3)**](#wordwrap-003)
    1. [**wrappy (1.0.2)**](#wrappy-102)
    1. [**write (0.2.1)**](#write-021)
    1. [**write-file-atomic (2.3.0)**](#write-file-atomic-230)
    1. [**xdg-basedir (3.0.0)**](#xdg-basedir-300)
    1. [**xtend (4.0.1)**](#xtend-401)
    1. [**yallist (2.1.2)**](#yallist-212)
    1. [**yamljs (0.3.0)**](#yamljs-030)
    1. [**yargs (3.10.0)**](#yargs-3100)
1. [Licenses](#licenses)
  1. [Public Domain](#public-domain-1)
  1. [Mozilla Public License 2.0 (MPL-2.0)](#mozilla-public-license-20-mpl-20-1)
  1. [GNU General Public License v3 (GPL-3)](#gnu-general-public-license-v3-gpl-3-1)
  1. [GNU Lesser General Public License v3 (LGPL-3.0)](#gnu-lesser-general-public-license-v3-lgpl-30-1)
  1. [MIT License (Expat)](#mit-license-expat-1)
  1. [Apache License 2.0 (Apache-2.0)](#apache-license-20-apache-20-1)
  1. [BSD 3-Clause License (Revised)](#bsd-3-clause-license-revised-1)
  1. [BSD 2-Clause License (FreeBSD/Simplified)](#bsd-2-clause-license-freebsdsimplified)
  1. [GNU Affero General Public License v3 (AGPL-3.0)](#gnu-affero-general-public-license-v3-agpl-30)
  1. [Unlicense](#unlicense)
  1. [ISC License](#isc-license)
  1. [GNU Lesser General Public License v2.1 (LGPL-2.1)](#gnu-lesser-general-public-license-v21-lgpl-21)
  1. [Academic Free License 3.0 (AFL)](#academic-free-license-30-afl)
  1. [CMU License](#cmu-license)
  1. [Common Public License 1.0 (CPL-1.0)](#common-public-license-10-cpl-10)
  1. [Microsoft Public License (Ms-PL)](#microsoft-public-license-ms-pl)
  1. [Sun Public License v1.0 (SPL-1.0)](#sun-public-license-v10-spl-10)
  1. [X11 License](#x11-license)
  1. [Do What The F*ck You Want To Public License (WTFPL)](#do-what-the-fck-you-want-to-public-license-wtfpl)
  1. [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](#creative-commons-attribution-noncommercial-sharealike-40-international-cc-by-nc-sa-40)
  1. [Creative Commons CC0 1.0 Universal (CC-0)](#creative-commons-cc0-10-universal-cc-0)
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

The following 3rd-party software components may be used by or distributed with **generator-community**.  This document was automatically generated by [FOSSA](http://fossa.io) on 11/16/17; any information relevant to third-party vendors listed below are collected using common, reasonable means.


## License Scan


### UNRECOGNIZED


### Public Domain


### Mozilla Public License 2.0 (MPL-2.0)
<p>Mozilla Public License, version 2.0 1. Definitions 1.1. “Contributor” means each individual or legal entity that creates, contributes to the creation of, or owns Covered Software.</p><p>1.2. “Contributor Version” means the combination of the Contributions of others (if any) used by a Contributor and that particular Contributor’s Contribution.</p><p>1.3. “Contribution” means Covered Software of a particular Contributor.</p><p>1.4. “Covered Software” means Source Code Form to which the initial Contributor has attached the notice in Exhibit A, the Executable Form of such Source Code Form, and Modifications of such Source Code Form, in each case including portions thereof.</p><p>1.5. “Incompatible With Secondary Licenses” means</p><p>that the initial Contributor has attached the notice described in Exhibit B to the Covered Software; or</p><p>that the Covered Software was made available under the terms of version 1.1 or earlier of the License, but not also under the terms of a Secondary License.</p><p>1.6. “Executable Form” means any form of the work other than Source Code Form.</p><p>1.7. “Larger Work” means a work that combines Covered Software with other material, in a separate file or files, that is not Covered Software.</p><p>1.8. “License” means this document.</p><p>1.9. “Licensable” means having the right to grant, to the maximum extent possible, whether at the time of the initial grant or subsequently, any and all of the rights conveyed by this License.</p><p>1.10. “Modifications” means any of the following:</p><p>any file in Source Code Form that results from an addition to, deletion from, or modification of the contents of Covered Software; or</p><p>any new file in Source Code Form that contains any Covered Software.</p><p>1.11. “Patent Claims” of a Contributor means any patent claim(s), including without limitation, method, process, and apparatus claims, in any patent Licensable by such Contributor that would be infringed, but for the grant of the License, by the making, using, selling, offering for sale, having made, import, or transfer of either its Contributions or its Contributor Version.</p><p>1.12. “Secondary License” means either the GNU General Public License, Version 2.0, the GNU Lesser General Public License, Version 2.1, the GNU Affero General Public License, Version 3.0, or any later versions of those licenses.</p><p>1.13. “Source Code Form” means the form of the work preferred for making modifications.</p><p>1.14. “You” (or “Your”) means an individual or a legal entity exercising rights under this License. For legal entities, “You” includes any entity that controls, is controlled by, or is under common control with You. For purposes of this definition, “control” means (a) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (b) ownership of more than fifty percent (50%) of the outstanding shares or beneficial ownership of such entity.</p><p>2. License Grants and Conditions 2.1. Grants Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license:</p><p>under intellectual property rights (other than patent or trademark) Licensable by such Contributor to use, reproduce, make available, modify, display, perform, distribute, and otherwise exploit its Contributions, either on an unmodified basis, with Modifications, or as part of a Larger Work; and</p><p>under Patent Claims of such Contributor to make, use, sell, offer for sale, have made, import, and otherwise transfer either its Contributions or its Contributor Version.</p><p>2.2. Effective Date The licenses granted in Section 2.1 with respect to any Contribution become effective for each Contribution on the date the Contributor first distributes such Contribution.</p><p>2.3. Limitations on Grant Scope The licenses granted in this Section 2 are the only rights granted under this License. No additional rights or licenses will be implied from the distribution or licensing of Covered Software under this License. Notwithstanding Section 2.1(b) above, no patent license is granted by a Contributor:</p><p>for any code that a Contributor has removed from Covered Software; or</p><p>for infringements caused by: (i) Your and any other third party’s modifications of Covered Software, or (ii) the combination of its Contributions with other software (except as part of its Contributor Version); or</p><p>under Patent Claims infringed by Covered Software in the absence of its Contributions.</p><p>This License does not grant any rights in the trademarks, service marks, or logos of any Contributor (except as may be necessary to comply with the notice requirements in Section 3.4).</p><p>2.4. Subsequent Licenses No Contributor makes additional grants as a result of Your choice to distribute the Covered Software under a subsequent version of this License (see Section 10.2) or under the terms of a Secondary License (if permitted under the terms of Section 3.3).</p><p>2.5. Representation Each Contributor represents that the Contributor believes its Contributions are its original creation(s) or it has sufficient rights to grant the rights to its Contributions conveyed by this License.</p><p>2.6. Fair Use This License is not intended to limit any rights You have under applicable copyright doctrines of fair use, fair dealing, or other equivalents.</p><p>2.7. Conditions Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted in Section 2.1.</p><p>3. Responsibilities 3.1. Distribution of Source Form All distribution of Covered Software in Source Code Form, including any Modifications that You create or to which You contribute, must be under the terms of this License. You must inform recipients that the Source Code Form of the Covered Software is governed by the terms of this License, and how they can obtain a copy of this License. You may not attempt to alter or restrict the recipients’ rights in the Source Code Form.</p><p>3.2. Distribution of Executable Form If You distribute Covered Software in Executable Form then:</p><p>such Covered Software must also be made available in Source Code Form, as described in Section 3.1, and You must inform recipients of the Executable Form how they can obtain a copy of such Source Code Form by reasonable means in a timely manner, at a charge no more than the cost of distribution to the recipient; and</p><p>You may distribute such Executable Form under the terms of this License, or sublicense it under different terms, provided that the license for the Executable Form does not attempt to limit or alter the recipients’ rights in the Source Code Form under this License.</p><p>3.3. Distribution of a Larger Work You may create and distribute a Larger Work under terms of Your choice, provided that You also comply with the requirements of this License for the Covered Software. If the Larger Work is a combination of Covered Software with a work governed by one or more Secondary Licenses, and the Covered Software is not Incompatible With Secondary Licenses, this License permits You to additionally distribute such Covered Software under the terms of such Secondary License(s), so that the recipient of the Larger Work may, at their option, further distribute the Covered Software under the terms of either this License or such Secondary License(s).</p><p>3.4. Notices You may not remove or alter the substance of any license notices (including copyright notices, patent notices, disclaimers of warranty, or limitations of liability) contained within the Source Code Form of the Covered Software, except that You may alter any license notices to the extent required to remedy known factual inaccuracies.</p><p>3.5. Application of Additional Terms You may choose to offer, and to charge a fee for, warranty, support, indemnity or liability obligations to one or more recipients of Covered Software. However, You may do so only on Your own behalf, and not on behalf of any Contributor. You must make it absolutely clear that any such warranty, support, indemnity, or liability obligation is offered by You alone, and You hereby agree to indemnify every Contributor for any liability incurred by such Contributor as a result of warranty, support, indemnity or liability terms You offer. You may include additional disclaimers of warranty and limitations of liability specific to any jurisdiction.</p><p>4. Inability to Comply Due to Statute or Regulation If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Covered Software due to statute, judicial order, or regulation then You must: (a) comply with the terms of this License to the maximum extent possible; and (b) describe the limitations and the code they affect. Such description must be placed in a text file included with all distributions of the Covered Software under this License. Except to the extent prohibited by statute or regulation, such description must be sufficiently detailed for a recipient of ordinary skill to be able to understand it.</p><p>5. Termination 5.1. The rights granted under this License will terminate automatically if You fail to comply with any of its terms. However, if You become compliant, then the rights granted under this License from a particular Contributor are reinstated (a) provisionally, unless and until such Contributor explicitly and finally terminates Your grants, and (b) on an ongoing basis, if such Contributor fails to notify You of the non-compliance by some reasonable means prior to 60 days after You have come back into compliance. Moreover, Your grants from a particular Contributor are reinstated on an ongoing basis if such Contributor notifies You of the non-compliance by some reasonable means, this is the first time You have received notice of non-compliance with this License from such Contributor, and You become compliant prior to 30 days after Your receipt of the notice.</p><p>5.2. If You initiate litigation against any entity by asserting a patent infringement claim (excluding declaratory judgment actions, counter-claims, and cross-claims) alleging that a Contributor Version directly or indirectly infringes any patent, then the rights granted to You by any and all Contributors for the Covered Software under Section 2.1 of this License shall terminate.</p><p>5.3. In the event of termination under Sections 5.1 or 5.2 above, all end user license agreements (excluding distributors and resellers) which have been validly granted by You or Your distributors under this License prior to termination shall survive termination.</p><p>6. Disclaimer of Warranty Covered Software is provided under this License on an “as is” basis, without warranty of any kind, either expressed, implied, or statutory, including, without limitation, warranties that the Covered Software is free of defects, merchantable, fit for a particular purpose or non-infringing. The entire risk as to the quality and performance of the Covered Software is with You. Should any Covered Software prove defective in any respect, You (not any Contributor) assume the cost of any necessary servicing, repair, or correction. This disclaimer of warranty constitutes an essential part of this License. No use of any Covered Software is authorized under this License except under this disclaimer.</p><p>7. Limitation of Liability Under no circumstances and under no legal theory, whether tort (including negligence), contract, or otherwise, shall any Contributor, or anyone who distributes Covered Software as permitted above, be liable to You for any direct, indirect, special, incidental, or consequential damages of any character including, without limitation, damages for lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses, even if such party shall have been informed of the possibility of such damages. This limitation of liability shall not apply to liability for death or personal injury resulting from such party’s negligence to the extent applicable law prohibits such limitation. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so this exclusion and limitation may not apply to You.</p><p>8. Litigation Any litigation relating to this License may be brought only in the courts of a jurisdiction where the defendant maintains its principal place of business and such litigation shall be governed by laws of that jurisdiction, without reference to its conflict-of-law provisions. Nothing in this Section shall prevent a party’s ability to bring cross-claims or counter-claims.</p><p>9. Miscellaneous This License represents the complete agreement concerning the subject matter hereof. If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable. Any law or regulation which provides that the language of a contract shall be construed against the drafter shall not be used to construe this License against a Contributor.</p><p>10. Versions of the License 10.1. New Versions Mozilla Foundation is the license steward. Except as provided in Section 10.3, no one other than the license steward has the right to modify or publish new versions of this License. Each version will be given a distinguishing version number.</p><p>10.2. Effect of New Versions You may distribute the Covered Software under the terms of the version of the License under which You originally received the Covered Software, or under the terms of any subsequent version published by the license steward.</p><p>10.3. Modified Versions If you create software not governed by this License, and you want to create a new license for such software, you may create and use a modified version of this License if you rename the license and remove any references to the name of the license steward (except to note that such modified license differs from this License).</p><p>10.4. Distributing Source Code Form that is Incompatible With Secondary Licenses If You choose to distribute Source Code Form that is Incompatible With Secondary Licenses under the terms of this version of the License, the notice described in Exhibit B of this License must be attached.</p><p>Exhibit A - Source Code Form License Notice This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.</p><p>If it is not possible or desirable to put the notice in a particular file, then You may include the notice in a location (such as a LICENSE file in a relevant directory) where a recipient would be likely to look for such a notice.</p><p>You may add additional accurate notices of copyright ownership.</p><p>Exhibit B - “Incompatible With Secondary Licenses” Notice This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.</p>

### GNU General Public License v3 (GPL-3)
<p>GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007</p><p>Copyright (C) 2007 Free Software Foundation, Inc.</p><p>Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.</p><p>Preamble The GNU General Public License is a free, copyleft license for software and other kinds of works.</p><p>The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.</p><p>When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.</p><p>To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.</p><p>For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.</p><p>Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it.</p><p>For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions.</p><p>Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of protecting users' freedom to change the software. The systematic pattern of such abuse occurs in the area of products for individuals to use, which is precisely where it is most unacceptable. Therefore, we have designed this version of the GPL to prohibit the practice for those products. If such problems arise substantially in other domains, we stand ready to extend this provision to those domains in future versions of the GPL, as needed to protect the freedom of users.</p><p>Finally, every program is threatened constantly by software patents. States should not allow patents to restrict development and use of software on general-purpose computers, but in those that do, we wish to avoid the special danger that patents applied to a free program could make it effectively proprietary. To prevent this, the GPL assures that patents cannot be used to render the program non-free.</p><p>The precise terms and conditions for copying, distribution and modification follow.</p><p>TERMS AND CONDITIONS 0. Definitions. “This License” refers to version 3 of the GNU General Public License.</p><p>“Copyright” also means copyright-like laws that apply to other kinds of works, such as semiconductor masks.</p><p>“The Program” refers to any copyrightable work licensed under this License. Each licensee is addressed as “you”. “Licensees” and “recipients” may be individuals or organizations.</p><p>To “modify” a work means to copy from or adapt all or part of the work in a fashion requiring copyright permission, other than the making of an exact copy. The resulting work is called a “modified version” of the earlier work or a work “based on” the earlier work.</p><p>A “covered work” means either the unmodified Program or a work based on the Program.</p><p>To “propagate” a work means to do anything with it that, without permission, would make you directly or secondarily liable for infringement under applicable copyright law, except executing it on a computer or modifying a private copy. Propagation includes copying, distribution (with or without modification), making available to the public, and in some countries other activities as well.</p><p>To “convey” a work means any kind of propagation that enables other parties to make or receive copies. Mere interaction with a user through a computer network, with no transfer of a copy, is not conveying.</p><p>An interactive user interface displays “Appropriate Legal Notices” to the extent that it includes a convenient and prominently visible feature that (1) displays an appropriate copyright notice, and (2) tells the user that there is no warranty for the work (except to the extent that warranties are provided), that licensees may convey the work under this License, and how to view a copy of this License. If the interface presents a list of user commands or options, such as a menu, a prominent item in the list meets this criterion.</p><p>1. Source Code. The “source code” for a work means the preferred form of the work for making modifications to it. “Object code” means any non-source form of a work.</p><p>A “Standard Interface” means an interface that either is an official standard defined by a recognized standards body, or, in the case of interfaces specified for a particular programming language, one that is widely used among developers working in that language.</p><p>The “System Libraries” of an executable work include anything, other than the work as a whole, that (a) is included in the normal form of packaging a Major Component, but which is not part of that Major Component, and (b) serves only to enable use of the work with that Major Component, or to implement a Standard Interface for which an implementation is available to the public in source code form. A “Major Component”, in this context, means a major essential component (kernel, window system, and so on) of the specific operating system (if any) on which the executable work runs, or a compiler used to produce the work, or an object code interpreter used to run it.</p><p>The “Corresponding Source” for a work in object code form means all the source code needed to generate, install, and (for an executable work) run the object code and to modify the work, including scripts to control those activities. However, it does not include the work's System Libraries, or general-purpose tools or generally available free programs which are used unmodified in performing those activities but which are not part of the work. For example, Corresponding Source includes interface definition files associated with source files for the work, and the source code for shared libraries and dynamically linked subprograms that the work is specifically designed to require, such as by intimate data communication or control flow between those subprograms and other parts of the work.</p><p>The Corresponding Source need not include anything that users can regenerate automatically from other parts of the Corresponding Source.</p><p>The Corresponding Source for a work in source code form is that same work.</p><p>2. Basic Permissions. All rights granted under this License are granted for the term of copyright on the Program, and are irrevocable provided the stated conditions are met. This License explicitly affirms your unlimited permission to run the unmodified Program. The output from running a covered work is covered by this License only if the output, given its content, constitutes a covered work. This License acknowledges your rights of fair use or other equivalent, as provided by copyright law.</p><p>You may make, run and propagate covered works that you do not convey, without conditions so long as your license otherwise remains in force. You may convey covered works to others for the sole purpose of having them make modifications exclusively for you, or provide you with facilities for running those works, provided that you comply with the terms of this License in conveying all material for which you do not control copyright. Those thus making or running the covered works for you must do so exclusively on your behalf, under your direction and control, on terms that prohibit them from making any copies of your copyrighted material outside their relationship with you.</p><p>Conveying under any other circumstances is permitted solely under the conditions stated below. Sublicensing is not allowed; section 10 makes it unnecessary.</p><p>3. Protecting Users' Legal Rights From Anti-Circumvention Law. No covered work shall be deemed part of an effective technological measure under any applicable law fulfilling obligations under article 11 of the WIPO copyright treaty adopted on 20 December 1996, or similar laws prohibiting or restricting circumvention of such measures.</p><p>When you convey a covered work, you waive any legal power to forbid circumvention of technological measures to the extent such circumvention is effected by exercising rights under this License with respect to the covered work, and you disclaim any intention to limit operation or modification of the work as a means of enforcing, against the work's users, your or third parties' legal rights to forbid circumvention of technological measures.</p><p>4. Conveying Verbatim Copies. You may convey verbatim copies of the Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice; keep intact all notices stating that this License and any non-permissive terms added in accord with section 7 apply to the code; keep intact all notices of the absence of any warranty; and give all recipients a copy of this License along with the Program.</p><p>You may charge any price or no price for each copy that you convey, and you may offer support or warranty protection for a fee.</p><p>5. Conveying Modified Source Versions. You may convey a work based on the Program, or the modifications to produce it from the Program, in the form of source code under the terms of section 4, provided that you also meet all of these conditions:</p><p>a) The work must carry prominent notices stating that you modified it, and giving a relevant date. b) The work must carry prominent notices stating that it is released under this License and any conditions added under section 7. This requirement modifies the requirement in section 4 to “keep intact all notices”. c) You must license the entire work, as a whole, under this License to anyone who comes into possession of a copy. This License will therefore apply, along with any applicable section 7 additional terms, to the whole of the work, and all its parts, regardless of how they are packaged. This License gives no permission to license the work in any other way, but it does not invalidate such permission if you have separately received it. d) If the work has interactive user interfaces, each must display Appropriate Legal Notices; however, if the Program has interactive interfaces that do not display Appropriate Legal Notices, your work need not make them do so. A compilation of a covered work with other separate and independent works, which are not by their nature extensions of the covered work, and which are not combined with it such as to form a larger program, in or on a volume of a storage or distribution medium, is called an “aggregate” if the compilation and its resulting copyright are not used to limit the access or legal rights of the compilation's users beyond what the individual works permit. Inclusion of a covered work in an aggregate does not cause this License to apply to the other parts of the aggregate.</p><p>6. Conveying Non-Source Forms. You may convey a covered work in object code form under the terms of sections 4 and 5, provided that you also convey the machine-readable Corresponding Source under the terms of this License, in one of these ways:</p><p>a) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by the Corresponding Source fixed on a durable physical medium customarily used for software interchange. b) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by a written offer, valid for at least three years and valid for as long as you offer spare parts or customer support for that product model, to give anyone who possesses the object code either (1) a copy of the Corresponding Source for all the software in the product that is covered by this License, on a durable physical medium customarily used for software interchange, for a price no more than your reasonable cost of physically performing this conveying of source, or (2) access to copy the Corresponding Source from a network server at no charge. c) Convey individual copies of the object code with a copy of the written offer to provide the Corresponding Source. This alternative is allowed only occasionally and noncommercially, and only if you received the object code with such an offer, in accord with subsection 6b. d) Convey the object code by offering access from a designated place (gratis or for a charge), and offer equivalent access to the Corresponding Source in the same way through the same place at no further charge. You need not require recipients to copy the Corresponding Source along with the object code. If the place to copy the object code is a network server, the Corresponding Source may be on a different server (operated by you or a third party) that supports equivalent copying facilities, provided you maintain clear directions next to the object code saying where to find the Corresponding Source. Regardless of what server hosts the Corresponding Source, you remain obligated to ensure that it is available for as long as needed to satisfy these requirements. e) Convey the object code using peer-to-peer transmission, provided you inform other peers where the object code and Corresponding Source of the work are being offered to the general public at no charge under subsection 6d. A separable portion of the object code, whose source code is excluded from the Corresponding Source as a System Library, need not be included in conveying the object code work.</p><p>A “User Product” is either (1) a “consumer product”, which means any tangible personal property which is normally used for personal, family, or household purposes, or (2) anything designed or sold for incorporation into a dwelling. In determining whether a product is a consumer product, doubtful cases shall be resolved in favor of coverage. For a particular product received by a particular user, “normally used” refers to a typical or common use of that class of product, regardless of the status of the particular user or of the way in which the particular user actually uses, or expects or is expected to use, the product. A product is a consumer product regardless of whether the product has substantial commercial, industrial or non-consumer uses, unless such uses represent the only significant mode of use of the product.</p><p>“Installation Information” for a User Product means any methods, procedures, authorization keys, or other information required to install and execute modified versions of a covered work in that User Product from a modified version of its Corresponding Source. The information must suffice to ensure that the continued functioning of the modified object code is in no case prevented or interfered with solely because modification has been made.</p><p>If you convey an object code work under this section in, or with, or specifically for use in, a User Product, and the conveying occurs as part of a transaction in which the right of possession and use of the User Product is transferred to the recipient in perpetuity or for a fixed term (regardless of how the transaction is characterized), the Corresponding Source conveyed under this section must be accompanied by the Installation Information. But this requirement does not apply if neither you nor any third party retains the ability to install modified object code on the User Product (for example, the work has been installed in ROM).</p><p>The requirement to provide Installation Information does not include a requirement to continue to provide support service, warranty, or updates for a work that has been modified or installed by the recipient, or for the User Product in which it has been modified or installed. Access to a network may be denied when the modification itself materially and adversely affects the operation of the network or violates the rules and protocols for communication across the network.</p><p>Corresponding Source conveyed, and Installation Information provided, in accord with this section must be in a format that is publicly documented (and with an implementation available to the public in source code form), and must require no special password or key for unpacking, reading or copying.</p><p>7. Additional Terms. “Additional permissions” are terms that supplement the terms of this License by making exceptions from one or more of its conditions. Additional permissions that are applicable to the entire Program shall be treated as though they were included in this License, to the extent that they are valid under applicable law. If additional permissions apply only to part of the Program, that part may be used separately under those permissions, but the entire Program remains governed by this License without regard to the additional permissions.</p><p>When you convey a copy of a covered work, you may at your option remove any additional permissions from that copy, or from any part of it. (Additional permissions may be written to require their own removal in certain cases when you modify the work.) You may place additional permissions on material, added by you to a covered work, for which you have or can give appropriate copyright permission.</p><p>Notwithstanding any other provision of this License, for material you add to a covered work, you may (if authorized by the copyright holders of that material) supplement the terms of this License with terms:</p><p>a) Disclaiming warranty or limiting liability differently from the terms of sections 15 and 16 of this License; or b) Requiring preservation of specified reasonable legal notices or author attributions in that material or in the Appropriate Legal Notices displayed by works containing it; or c) Prohibiting misrepresentation of the origin of that material, or requiring that modified versions of such material be marked in reasonable ways as different from the original version; or d) Limiting the use for publicity purposes of names of licensors or authors of the material; or e) Declining to grant rights under trademark law for use of some trade names, trademarks, or service marks; or f) Requiring indemnification of licensors and authors of that material by anyone who conveys the material (or modified versions of it) with contractual assumptions of liability to the recipient, for any liability that these contractual assumptions directly impose on those licensors and authors. All other non-permissive additional terms are considered “further restrictions” within the meaning of section 10. If the Program as you received it, or any part of it, contains a notice stating that it is governed by this License along with a term that is a further restriction, you may remove that term. If a license document contains a further restriction but permits relicensing or conveying under this License, you may add to a covered work material governed by the terms of that license document, provided that the further restriction does not survive such relicensing or conveying.</p><p>If you add terms to a covered work in accord with this section, you must place, in the relevant source files, a statement of the additional terms that apply to those files, or a notice indicating where to find the applicable terms.</p><p>Additional terms, permissive or non-permissive, may be stated in the form of a separately written license, or stated as exceptions; the above requirements apply either way.</p><p>8. Termination. You may not propagate or modify a covered work except as expressly provided under this License. Any attempt otherwise to propagate or modify it is void, and will automatically terminate your rights under this License (including any patent licenses granted under the third paragraph of section 11).</p><p>However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.</p><p>Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.</p><p>Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, you do not qualify to receive new licenses for the same material under section 10.</p><p>9. Acceptance Not Required for Having Copies. You are not required to accept this License in order to receive or run a copy of the Program. Ancillary propagation of a covered work occurring solely as a consequence of using peer-to-peer transmission to receive a copy likewise does not require acceptance. However, nothing other than this License grants you permission to propagate or modify any covered work. These actions infringe copyright if you do not accept this License. Therefore, by modifying or propagating a covered work, you indicate your acceptance of this License to do so.</p><p>10. Automatic Licensing of Downstream Recipients. Each time you convey a covered work, the recipient automatically receives a license from the original licensors, to run, modify and propagate that work, subject to this License. You are not responsible for enforcing compliance by third parties with this License.</p><p>An “entity transaction” is a transaction transferring control of an organization, or substantially all assets of one, or subdividing an organization, or merging organizations. If propagation of a covered work results from an entity transaction, each party to that transaction who receives a copy of the work also receives whatever licenses to the work the party's predecessor in interest had or could give under the previous paragraph, plus a right to possession of the Corresponding Source of the work from the predecessor in interest, if the predecessor has it or can get it with reasonable efforts.</p><p>You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.</p><p>11. Patents. A “contributor” is a copyright holder who authorizes use under this License of the Program or a work on which the Program is based. The work thus licensed is called the contributor's “contributor version”.</p><p>A contributor's “essential patent claims” are all patent claims owned or controlled by the contributor, whether already acquired or hereafter acquired, that would be infringed by some manner, permitted by this License, of making, using, or selling its contributor version, but do not include claims that would be infringed only as a consequence of further modification of the contributor version. For purposes of this definition, “control” includes the right to grant patent sublicenses in a manner consistent with the requirements of this License.</p><p>Each contributor grants you a non-exclusive, worldwide, royalty-free patent license under the contributor's essential patent claims, to make, use, sell, offer for sale, import and otherwise run, modify and propagate the contents of its contributor version.</p><p>In the following three paragraphs, a “patent license” is any express agreement or commitment, however denominated, not to enforce a patent (such as an express permission to practice a patent or covenant not to sue for patent infringement). To “grant” such a patent license to a party means to make such an agreement or commitment not to enforce a patent against the party.</p><p>If you convey a covered work, knowingly relying on a patent license, and the Corresponding Source of the work is not available for anyone to copy, free of charge and under the terms of this License, through a publicly available network server or other readily accessible means, then you must either (1) cause the Corresponding Source to be so available, or (2) arrange to deprive yourself of the benefit of the patent license for this particular work, or (3) arrange, in a manner consistent with the requirements of this License, to extend the patent license to downstream recipients. “Knowingly relying” means you have actual knowledge that, but for the patent license, your conveying the covered work in a country, or your recipient's use of the covered work in a country, would infringe one or more identifiable patents in that country that you have reason to believe are valid.</p><p>If, pursuant to or in connection with a single transaction or arrangement, you convey, or propagate by procuring conveyance of, a covered work, and grant a patent license to some of the parties receiving the covered work authorizing them to use, propagate, modify or convey a specific copy of the covered work, then the patent license you grant is automatically extended to all recipients of the covered work and works based on it.</p><p>A patent license is “discriminatory” if it does not include within the scope of its coverage, prohibits the exercise of, or is conditioned on the non-exercise of one or more of the rights that are specifically granted under this License. You may not convey a covered work if you are a party to an arrangement with a third party that is in the business of distributing software, under which you make payment to the third party based on the extent of your activity of conveying the work, and under which the third party grants, to any of the parties who would receive the covered work from you, a discriminatory patent license (a) in connection with copies of the covered work conveyed by you (or copies made from those copies), or (b) primarily for and in connection with specific products or compilations that contain the covered work, unless you entered into that arrangement, or that patent license was granted, prior to 28 March 2007.</p><p>Nothing in this License shall be construed as excluding or limiting any implied license or other defenses to infringement that may otherwise be available to you under applicable patent law.</p><p>12. No Surrender of Others' Freedom. If conditions are imposed on you (whether by court order, agreement or otherwise) that contradict the conditions of this License, they do not excuse you from the conditions of this License. If you cannot convey a covered work so as to satisfy simultaneously your obligations under this License and any other pertinent obligations, then as a consequence you may not convey it at all. For example, if you agree to terms that obligate you to collect a royalty for further conveying from those to whom you convey the Program, the only way you could satisfy both those terms and this License would be to refrain entirely from conveying the Program.</p><p>13. Use with the GNU Affero General Public License. Notwithstanding any other provision of this License, you have permission to link or combine any covered work with a work licensed under version 3 of the GNU Affero General Public License into a single combined work, and to convey the resulting work. The terms of this License will continue to apply to the part which is the covered work, but the special requirements of the GNU Affero General Public License, section 13, concerning interaction through a network will apply to the combination as such.</p><p>14. Revised Versions of this License. The Free Software Foundation may publish revised and/or new versions of the GNU General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.</p><p>Each version is given a distinguishing version number. If the Program specifies that a certain numbered version of the GNU General Public License “or any later version” applies to it, you have the option of following the terms and conditions either of that numbered version or of any later version published by the Free Software Foundation. If the Program does not specify a version number of the GNU General Public License, you may choose any version ever published by the Free Software Foundation.</p><p>If the Program specifies that a proxy can decide which future versions of the GNU General Public License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Program.</p><p>Later license versions may give you additional or different permissions. However, no additional obligations are imposed on any author or copyright holder as a result of your choosing to follow a later version.</p><p>15. Disclaimer of Warranty. THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.</p><p>16. Limitation of Liability. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p><p>17. Interpretation of Sections 15 and 16. If the disclaimer of warranty and limitation of liability provided above cannot be given local legal effect according to their terms, reviewing courts shall apply local law that most closely approximates an absolute waiver of all civil liability in connection with the Program, unless a warranty or assumption of liability accompanies a copy of the Program in return for a fee.</p><p>END OF TERMS AND CONDITIONS</p><p>How to Apply These Terms to Your New Programs If you develop a new program, and you want it to be of the greatest possible use to the public, the best way to achieve this is to make it free software which everyone can redistribute and change under these terms.</p><p>To do so, attach the following notices to the program. It is safest to attach them to the start of each source file to most effectively state the exclusion of warranty; and each file should have at least the “copyright” line and a pointer to where the full notice is found.</p><p><one>Copyright (C)<year></year></one></p><p>This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.</p><p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.</p><p>You should have received a copy of the GNU General Public License along with this program. If not, see <http>. Also add information on how to contact you by electronic and paper mail.</http></p><p>If the program does terminal interaction, make it output a short notice like this when it starts in an interactive mode:</p><p>
<program>Copyright (C)<year></year></program></p><p>This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'. This is free software, and you are welcome to redistribute it under certain conditions; type `show c' for details. The hypothetical commands `show w' and `show c' should show the appropriate parts of the General Public License. Of course, your program's commands might be different; for a GUI interface, you would use an “about box”.</p><p>You should also get your employer (if you work as a programmer) or school, if any, to sign a “copyright disclaimer” for the program, if necessary. For more information on this, and how to apply and follow the GNU GPL, see <http>.</http></p><p>The GNU General Public License does not permit incorporating your program into proprietary programs. If your program is a subroutine library, you may consider it more useful to permit linking proprietary applications with the library. If this is what you want to do, use the GNU Lesser General Public License instead of this License. But first, please read <http>.</http></p>

### GNU Lesser General Public License v3 (LGPL-3.0)
<h3>GNU LESSER GENERAL PUBLIC LICENSE</h3><p>Version 3, 29 June 2007</p><p>Copyright &copy; 2007 Free Software Foundation, Inc. &lt;<a href="http://fsf.org/">http://fsf.org/</a>&gt;</p><p>Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.</p><p>This version of the GNU Lesser General Public License incorporates the terms and conditions of version 3 of the GNU General Public License, supplemented by the additional permissions listed below.</p><h4>0. Additional Definitions.</h4><p>As used herein, “this License” refers to version 3 of the GNU Lesser General Public License, and the “GNU GPL” refers to version 3 of the GNU General Public License.</p><p>“The Library” refers to a covered work governed by this License, other than an Application or a Combined Work as defined below.</p><p>An “Application” is any work that makes use of an interface provided by the Library, but which is not otherwise based on the Library. Defining a subclass of a class defined by the Library is deemed a mode of using an interface provided by the Library.</p><p>A “Combined Work” is a work produced by combining or linking an Application with the Library. The particular version of the Library with which the Combined Work was made is also called the “Linked Version”.</p><p>The “Minimal Corresponding Source” for a Combined Work means the Corresponding Source for the Combined Work, excluding any source code for portions of the Combined Work that, considered in isolation, are based on the Application, and not on the Linked Version.</p><p>The “Corresponding Application Code” for a Combined Work means the object code and/or source code for the Application, including any data and utility programs needed for reproducing the Combined Work from the Application, but excluding the System Libraries of the Combined Work.</p><h4>1. Exception to Section 3 of the GNU GPL.</h4><p>You may convey a covered work under sections 3 and 4 of this License without being bound by section 3 of the GNU GPL.</p><h4>2. Conveying Modified Versions.</h4><p>If you modify a copy of the Library, and, in your modifications, a facility refers to a function or data to be supplied by an Application that uses the facility (other than as an argument passed when the facility is invoked), then you may convey a copy of the modified version:</p><ul>
<li>a) under this License, provided that you make a good faith effort to ensure that, in the event an Application does not supply the function or data, the facility still operates, and performs whatever part of its purpose remains meaningful, or</li><li>b) under the GNU GPL, with none of the additional permissions of this License applicable to that copy.</li></ul><h4>3. Object Code Incorporating Material from Library Header Files.</h4><p>The object code form of an Application may incorporate material from a header file that is part of the Library. You may convey such object code under terms of your choice, provided that, if the incorporated material is not limited to numerical parameters, data structure layouts and accessors, or small macros, inline functions and templates (ten or fewer lines in length), you do both of the following:</p><ul>
<li>a) Give prominent notice with each copy of the object code that the Library is used in it and that the Library and its use are covered by this License.</li><li>b) Accompany the object code with a copy of the GNU GPL and this license document.</li></ul><h4>4. Combined Works.</h4><p>You may convey a Combined Work under terms of your choice that, taken together, effectively do not restrict modification of the portions of the Library contained in the Combined Work and reverse engineering for debugging such modifications, if you also do each of the following:</p><ul>
<li>a) Give prominent notice with each copy of the Combined Work that the Library is used in it and that the Library and its use are covered by this License.</li><li>b) Accompany the Combined Work with a copy of the GNU GPL and this license document.</li><li>c) For a Combined Work that displays copyright notices during execution, include the copyright notice for the Library among these notices, as well as a reference directing the user to the copies of the GNU GPL and this license document.</li><li>d) Do one of the following:
<ul>
<li>0) Convey the Minimal Corresponding Source under the terms of this License, and the Corresponding Application Code in a form suitable for, and under terms that permit, the user to recombine or relink the Application with a modified version of the Linked Version to produce a modified Combined Work, in the manner specified by section 6 of the GNU GPL for conveying Corresponding Source.</li><li>1) Use a suitable shared library mechanism for linking with the Library. A suitable mechanism is one that (a) uses at run time a copy of the Library already present on the user's computer system, and (b) will operate properly with a modified version of the Library that is interface-compatible with the Linked Version.</li></ul></li><li>e) Provide Installation Information, but only if you would otherwise be required to provide such information under section 6 of the GNU GPL, and only to the extent that such information is necessary to install and execute a modified version of the Combined Work produced by recombining or relinking the Application with a modified version of the Linked Version. (If you use option 4d0, the Installation Information must accompany the Minimal Corresponding Source and Corresponding Application Code. If you use option 4d1, you must provide the Installation Information in the manner specified by section 6 of the GNU GPL for conveying Corresponding Source.)</li></ul><h4>5. Combined Libraries.</h4><p>You may place library facilities that are a work based on the Library side by side in a single library together with other library facilities that are not Applications and are not covered by this License, and convey such a combined library under terms of your choice, if you do both of the following:</p><ul>
<li>a) Accompany the combined library with a copy of the same work based on the Library, uncombined with any other library facilities, conveyed under the terms of this License.</li><li>b) Give prominent notice with the combined library that part of it is a work based on the Library, and explaining where to find the accompanying uncombined form of the same work.</li></ul><h4>6. Revised Versions of the GNU Lesser General Public License.</h4><p>The Free Software Foundation may publish revised and/or new versions of the GNU Lesser General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.</p><p>Each version is given a distinguishing version number. If the Library as you received it specifies that a certain numbered version of the GNU Lesser General Public License “or any later version” applies to it, you have the option of following the terms and conditions either of that published version or of any later version published by the Free Software Foundation. If the Library as you received it does not specify a version number of the GNU Lesser General Public License, you may choose any version of the GNU Lesser General Public License ever published by the Free Software Foundation.</p><p>If the Library as you received it specifies that a proxy can decide whether future versions of the GNU Lesser General Public License shall apply, that proxy's public statement of acceptance of any version is permanent authorization for you to choose that version for the Library.</p>

### MIT License (Expat)
<p>The MIT License (MIT)</p><p>Copyright (c) &lt;year&gt; &lt;copyright holders&gt;</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>

### Apache License 2.0 (Apache-2.0)
<p>Apache License, Version 2.0 Apache License Version 2.0, January 2004 http://www.apache.org/licenses/</p><p>TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION</p><p>1. Definitions.</p><p>"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.</p><p>"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.</p><p>"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.</p><p>"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.</p><p>"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.</p><p>"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.</p><p>"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).</p><p>"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.</p><p>"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."</p><p>"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.</p><p>2. Grant of Copyright License.</p><p>Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.</p><p>3. Grant of Patent License.</p><p>Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.</p><p>4. Redistribution.</p><p>You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:</p><p>You must give any other recipients of the Work or Derivative Works a copy of this License; and You must cause any modified files to carry prominent notices stating that You changed the files; and You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License. You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.</p><p>5. Submission of Contributions.</p><p>Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.</p><p>6. Trademarks.</p><p>This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.</p><p>7. Disclaimer of Warranty.</p><p>Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.</p><p>8. Limitation of Liability.</p><p>In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.</p><p>9. Accepting Warranty or Additional Liability.</p><p>While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.</p><p>END OF TERMS AND CONDITIONS</p><p>APPENDIX: How to apply the Apache License to your work</p><p>To apply the Apache License to your work, attach the following boilerplate notice, with the fields enclosed by brackets "[]" replaced with your own identifying information. (Don't include the brackets!) The text should be enclosed in the appropriate comment syntax for the file format. We also recommend that a file or class name and description of purpose be included on the same "printed page" as the copyright notice for easier identification within third-party archives.</p><p>Copyright [yyyy] [name of copyright owner]</p><p>Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at</p><p>http://www.apache.org/licenses/LICENSE-2.0</p><p>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</p>

### BSD 3-Clause License (Revised)
<p>The BSD 3-Clause License The following is a BSD 3-Clause ("BSD New" or "BSD Simplified") license template. To generate your own license, change the values of OWNER, ORGANIZATION and YEAR from their original values as given here, and substitute your own.</p><p>Note: You may omit clause 3 and still be OSD-conformant. Despite its colloquial name "BSD New", this is not the newest version of the BSD license; it was followed by the even newer BSD-2-Clause version, sometimes known as the "Simplified BSD License". On January 9th, 2008 the OSI Board approved BSD-2-Clause, which is used by FreeBSD and others. It omits the final "no-endorsement" clause and is thus roughly equivalent to the MIT License.</p><p>Historical Background: The original license used on BSD Unix had four clauses. The advertising clause (the third of four clauses) required you to acknowledge use of U.C. Berkeley code in your advertising of any product using that code. It was officially rescinded by the Director of the Office of Technology Licensing of the University of California on July 22nd, 1999. He states that clause 3 is "hereby deleted in its entirety." The four clause license has not been approved by OSI. The license below does not contain the advertising clause.</p><p>This prelude is not part of the license.</p><p>OWNER = Regents of the University of California </p><p>ORGANIZATION = University of California, Berkeley </p><p>YEAR = 1998</p><p>In the original BSD license, both occurrences of the phrase "COPYRIGHT HOLDERS AND CONTRIBUTORS" in the disclaimer read "REGENTS AND CONTRIBUTORS".</p><h2>License template</h2><p>Copyright (c) $YEAR $OWNER, All rights reserved.</p><p>Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:</p><ol>
<li>Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. </li><li>Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</li><li>Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.&nbsp;</li></ol><p>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p>





## Direct Dependencies


Library|Licenses
-------|--------
**[babel-eslint (8.0.2)](#babel-eslint)**|MIT License (Expat)
**[chalk (2.3.0)](#chalk)**|MIT License (Expat)
**[color-convert (1.9.1)](#color-convert)**|MIT License (Expat)
**[colors (1.1.2)](#colors)**|MIT License (Expat)
**[conventional-changelog (1.1.7)](#conventional-changelog)**|MIT License (Expat)
**[conventional-recommended-bump (1.0.3)](#conventional-recommended-bump)**|MIT License (Expat)
**[diff (3.4.0)](#diff)**|BSD 3-Clause License (Revised)
**[flat-cache (1.3.0)](#flat-cache)**|MIT License (Expat)
**[generator-license (5.2.0)](#generator-license)**|**Multi-license:** Mozilla Public License 2.0 (MPL-2.0) *OR* Apache License 2.0 (Apache-2.0) *OR* MIT License (Expat) *OR* GNU General Public License v3 (GPL-3), Unlicense
**[generator-node (2.3.0)](#generator-node)**|MIT License (Expat)
**[git-remote-origin-url (2.0.0)](#git-remote-origin-url)**|MIT License (Expat)
**[git-url-parse (7.0.1)](#git-url-parse)**|MIT License (Expat)
**[github-username (4.1.0)](#github-username)**|MIT License (Expat)
**[ignore (3.3.7)](#ignore)**|MIT License (Expat), See-file
**[inquirer-npm-name (2.0.0)](#inquirer-npm-name)**|MIT License (Expat)
**[interpret (1.0.4)](#interpret)**|MIT License (Expat)
**[istanbul-api (1.2.1)](#istanbul-api)**|BSD 3-Clause License (Revised)
**[istanbul-lib-instrument (1.9.1)](#istanbul-lib-instrument)**|BSD 3-Clause License (Revised)
**[istanbul-lib-source-maps (1.2.2)](#istanbul-lib-source-maps)**|BSD 3-Clause License (Revised)
**[js-yaml (3.10.0)](#js-yaml)**|MIT License (Expat)
**[lodash (4.17.4)](#lodash)**|MIT License (Expat)
**[make-dir (1.1.0)](#make-dir)**|MIT License (Expat)
**[markdown-magic (0.1.19)](#markdown-magic)**|MIT License (Expat)
**[markdown-magic-dependency-table (1.3.2)](#markdown-magic-dependency-table)**|MIT License (Expat)
**[markdown-magic-install-command (1.3.1)](#markdown-magic-install-command)**|MIT License (Expat)
**[markdown-magic-package-scripts (1.2.1)](#markdown-magic-package-scripts)**|MIT License (Expat)
**[parse-author (2.0.0)](#parse-author)**|MIT License (Expat)
**[private (0.1.8)](#private)**|MIT License (Expat)
**[rc (1.2.2)](#rc)**|Apache License 2.0 (Apache-2.0), **Multi-license:** MIT License (Expat) *OR* BSD 3-Clause License (Revised), BSD 2-Clause License (FreeBSD/Simplified)
**[request (2.83.0)](#request)**|Apache License 2.0 (Apache-2.0), See-doc(OTHER)
**[resolve (1.5.0)](#resolve)**|MIT License (Expat)
**[rimraf (2.6.2)](#rimraf)**|**Multi-license:**  ISC License *OR* MIT License (Expat)
**[source-map-support (0.4.18)](#source-map-support)**|MIT License (Expat)
**[update-notifier (2.3.0)](#update-notifier)**|BSD 3-Clause License (Revised)
**[worker-farm (1.5.2)](#worker-farm)**|MIT License (Expat)
**[yeoman-environment (2.0.5)](#yeoman-environment)**|BSD 3-Clause License (Revised)
**[yeoman-generator (2.0.1)](#yeoman-generator)**|**Multi-license:** BSD 3-Clause License (Revised) *OR* BSD 2-Clause License (FreeBSD/Simplified)




### Details


#### **babel-eslint (8.0.2)**

1. Description
    1.*babel-eslint** allows you to lint **ALL** valid Babel code with the fantastic [ESLint](https://github.com/eslint/eslint).


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [monastic.panic@gmail.com](author)
    1. [sebmck@gmail.com](author)
    1. [loganfsmyth@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [hi@henryzoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/babel/babel-eslint


1. Notes



#### **chalk (2.3.0)**

1. Description
    Terminal string styling done right. Much color.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [i.am.qix@gmail.com](author)
    1. [sindresorhus+unicorn@gmail.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/chalk/chalk#readme


1. Notes



#### **color-convert (1.9.1)**

1. Description
    Plain color conversion functions


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [fayearthur@gmail.com](author)
    1. [m@moox.io](author)
    1. [i.am.qix@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/qix-/color-convert#readme


1. Notes



#### **colors (1.1.2)**

1. Description
    get colors in your node.js console


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [marak.squires@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/Marak/colors.js


1. Notes



#### **conventional-changelog (1.1.7)**

1. Description
    Generate a changelog from git metadata


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [andrewtjoslin@gmail.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog


1. Notes



#### **conventional-recommended-bump (1.0.3)**

1. Description
    Get a recommended version bump based on conventional commits


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-recommended-bump


1. Notes



#### **diff (3.4.0)**

1. Description
    A javascript text diff implementation.


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [kpdecker@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/kpdecker/jsdiff#readme


1. Notes



#### **flat-cache (1.3.0)**

1. Description
    A stupidly simple key/value storage using files to persist some data


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [royriojas@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/royriojas/flat-cache#readme


1. Notes



#### **generator-license (5.2.0)**

1. Description
    License generator for Yeoman based projects.


1. Licenses
    1. **Multi-license:** Mozilla Public License 2.0 (MPL-2.0) *OR* Apache License 2.0 (Apache-2.0) *OR* MIT License (Expat) *OR* GNU General Public License v3 (GPL-3)
    1. Unlicense


1. Authors
    1. [admin@simonboudrias.com](author)
    1. [jozef.izso@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Copyleft, Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive, Copyleft,GNU,OSI-Approved,Open Source, Public Domain


1. Other Licenses
    1. GNU Lesser General Public License v3 (LGPL-3.0)
    1. GNU Affero General Public License v3 (AGPL-3.0)
    1. BSD 2-Clause License (FreeBSD/Simplified)
    1. BSD 3-Clause License (Revised)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/generator-license


1. Notes
    1. I am not:

\* Sublicensing generator-license
\* Holding its authors liable

I am:

\* Including Copyright information in the NOTICE.md file
\* Including License information in the NOTICE.md and CONTRIBUTING.md files
\* I have no State Changes to announce
\* Disclosing Source
\* Including installation instructions
    1. The libraries licensed under LGPL-3.0 and LGPL-2.1 are dynamically linked, and do not therefore pose legal risks.



#### **generator-node (2.3.0)**

1. Description
    Create a Node.js module


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [addyosmani@gmail.com](author)
    1. [contact@arthurverschaeve.be](author)
    1. [eddie+npm@eddiemonge.com](author)
    1. [hemanth.hm@gmail.com](author)
    1. [kevinmartensson@gmail.com](author)
    1. [mail@michael-kuehnel.de](author)
    1. [phartig@rdrei.net](author)
    1. [admin@simonboudrias.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/generator-node


1. Notes



#### **git-remote-origin-url (2.0.0)**

1. Description
    Get the remote origin url of a git repository


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/git-remote-origin-url


1. Notes



#### **git-url-parse (7.0.1)**

1. Description
    A high level git url parser for common git providers.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bizauionica@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/git-url-parse


1. Notes



#### **github-username (4.1.0)**

1. Description
    Get a GitHub username from an email address


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/github-username


1. Notes



#### **ignore (3.3.7)**

1. Description
    Ignore is a manager and filter for .gitignore rules.


1. Licenses
    1. MIT License (Expat)
    1. See-file


1. Authors
    1. [i@kael.me](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/ignore


1. Notes



#### **inquirer-npm-name (2.0.0)**

1. Description
    Helper function using inquirer to validate a value provided in a prompt does not exist as an npm package.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [admin@simonboudrias.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/inquirer-npm-name


1. Notes



#### **interpret (1.0.4)**

1. Description
    A dictionary of file extensions and associated module loaders.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [tyler@sleekcode.net](author)
    1. [blaine@iceddev.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/tkellen/node-interpret


1. Notes



#### **istanbul-api (1.2.1)**

1. Description
    High level API for istanbul features


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [ben@npmjs.com](author)
    1. [kananthmail-github@yahoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/istanbul-api


1. Notes



#### **istanbul-lib-instrument (1.9.1)**

1. Description
    Core istanbul API for JS code coverage


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [ben@npmjs.com](author)
    1. [kananthmail-github@yahoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/istanbul-lib-instrument


1. Notes



#### **istanbul-lib-source-maps (1.2.2)**

1. Description
    Source maps support for istanbul


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [ben@npmjs.com](author)
    1. [kananthmail-github@yahoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/istanbul-lib-source-maps


1. Notes



#### **js-yaml (3.10.0)**

1. Description
    YAML 1.2 parser and serializer


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [vitaly@rcdesign.ru](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/nodeca/js-yaml


1. Notes



#### **lodash (4.17.4)**

1. Description
    Lodash modular utilities.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [john.david.dalton@gmail.com](author)
    1. [mathias@qiwi.be](author)
    1. [blaine@iceddev.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. See-URL


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://lodash.com/


1. Notes



#### **make-dir (1.1.0)**

1. Description
    Make a directory and its parents if needed - Think `mkdir -p`


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/make-dir


1. Notes



#### **markdown-magic (0.1.19)**

1. Description
    Automatically update markdown files with content from external sources


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [david@inboundnow.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/markdown-magic


1. Notes



#### **markdown-magic-dependency-table (1.3.2)**

1. Description
    Generate table of information about dependencies automatically in markdown


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [patrick@daftdevelopers.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/markdown-magic-dependency-table


1. Notes



#### **markdown-magic-install-command (1.3.1)**

1. Description
    Print install command for markdown file


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [patrick@daftdevelopers.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/markdown-magic-install-command


1. Notes



#### **markdown-magic-package-scripts (1.2.1)**

1. Description
    Print list of scripts in package.json with descriptions


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [patrick@daftdevelopers.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/markdown-magic-package-scripts


1. Notes



#### **parse-author (2.0.0)**

1. Description
    Parse an author, contributor, maintainer or other 'person' string into an object with name, email and url properties following npm conventions.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)
    1. [slang800@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/parse-author


1. Notes



#### **private (0.1.8)**

1. Description
    Utility for associating truly private state with any JavaScript object


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bn@cs.stanford.edu](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://github.com/benjamn/private


1. Notes



#### **rc (1.2.2)**

1. Description
    hardwired configuration loader


1. Licenses
    1. Apache License 2.0 (Apache-2.0)
    1. **Multi-license:** MIT License (Expat) *OR* BSD 3-Clause License (Revised)
    1. BSD 2-Clause License (FreeBSD/Simplified)


1. Authors
    1. [dominic.tarr@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/dominictarr/rc#readme


1. Notes



#### **request (2.83.0)**

1. Description
    Simplified HTTP request client.


1. Licenses
    1. Apache License 2.0 (Apache-2.0)
    1. See-doc(OTHER)


1. Authors
    1. [mikeal.rogers@gmail.com](author)
    1. [jnylen@gmail.com](author)
    1. [fkschott@gmail.com](author)
    1. [simeonvelichkov@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/request/request#readme


1. Notes



#### **resolve (1.5.0)**

1. Description
    resolve like require.resolve() on behalf of files asynchronously and synchronously


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [ljharb@gmail.com](author)
    1. [substack@gmail.com](author)
    1. [post.ben.here@gmail.com](author)
    1. [rene@kooi.me](author)
    1. [pereira.filype@gmail.com](author)
    1. [hughskennedy@gmail.com](author)
    1. [dave.des@gmail.com](author)
    1. [vestibule@anandthakker.net](author)
    1. [bcomnes@gmail.com](author)
    1. [garann@gmail.com](author)
    1. [martin.heidegger@gmail.com](author)
    1. [forbes@lindesay.co.uk](author)
    1. [yerko.palma@usach.cl](author)
    1. [parshap+npm@gmail.com](author)
    1. [contact@elnounch.net](author)
    1. [michael.williams@enspiral.com](author)
    1. [ungoldman@gmail.com](author)
    1. [i@yoshuawuyts.com](author)
    1. [sethvincent@gmail.com](author)
    1. [jryans@gmail.com](author)
    1. [fedor@indutny.com](author)
    1. [jprichardson@gmail.com](author)
    1. [npm@dcousens.com](author)
    1. [calvin.metcalf@gmail.com](author)
    1. [b@lupton.cc](author)
    1. [darawk@gmail.com](author)
    1. [palmermebane@gmail.com](author)
    1. [npm-public@jessemccarthy.net](author)
    1. [terinjokes@gmail.com](author)
    1. [thlorenz@gmx.de](author)
    1. [dominic.tarr@gmail.com](author)
    1. [max@maxogden.com](author)
    1. [mathiasbuus@gmail.com](author)
    1. [zertosh@gmail.com](author)
    1. [me@gkatsev.com](author)
    1. [feross@feross.org](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/substack/node-resolve#readme


1. Notes



#### **rimraf (2.6.2)**

1. Description
    A deep deletion module for node (like `rm -rf`)


1. Licenses
    1. **Multi-license:**  ISC License *OR* MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/rimraf#readme


1. Notes



#### **source-map-support (0.4.18)**

1. Description
    Fixes stack traces for files with source maps


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [linus@folkdatorn.se](author)
    1. [julien.fontanet@isonoe.net](author)
    1. [evan.exe@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/evanw/node-source-map-support#readme


1. Notes



#### **update-notifier (2.3.0)**

1. Description
    Update notifications for your CLI app


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [addyosmani@gmail.com](author)
    1. [contact@arthurverschaeve.be](author)
    1. [eddie+npm@eddiemonge.com](author)
    1. [hemanth.hm@gmail.com](author)
    1. [mail@michael-kuehnel.de](author)
    1. [phartig@rdrei.net](author)
    1. [admin@simonboudrias.com](author)
    1. [sindresorhus@gmail.com](author)
    1. [mdara@eleven-labs.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/update-notifier


1. Notes



#### **worker-farm (1.5.2)**

1. Description
    Distribute processing tasks to child processes with an über-simple API and baked-in durability & custom concurrency options.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [rod@vagg.org](author)
    1. [amjad.masad@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/worker-farm


1. Notes



#### **yeoman-environment (2.0.5)**

1. Description
    Handles the lifecyle and bootstrapping of generators in a specific environment


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [addyosmani@gmail.com](author)
    1. [contact@arthurverschaeve.be](author)
    1. [eddie+npm@eddiemonge.com](author)
    1. [mail@michael-kuehnel.de](author)
    1. [phartig@rdrei.net](author)
    1. [admin@simonboudrias.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/yeoman-environment


1. Notes



#### **yeoman-generator (2.0.1)**

1. Description
    Rails-inspired generator system that provides scaffolding for your apps


1. Licenses
    1. **Multi-license:** BSD 3-Clause License (Revised) *OR* BSD 2-Clause License (FreeBSD/Simplified)


1. Authors
    1. [addyosmani@gmail.com](author)
    1. [eddie+npm@eddiemonge.com](author)
    1. [mail@michael-kuehnel.de](author)
    1. [phartig@rdrei.net](author)
    1. [paul.irish@gmail.com](author)
    1. [admin@simonboudrias.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/yeoman-generator


1. Notes








## Deep Dependencies


Library|Licenses
-------|--------
**[ajv (5.3.0)](#ajv)**|MIT License (Expat)
**[align-text (0.1.4)](#align-text)**|MIT License (Expat)
**[amdefine (1.0.1)](#amdefine)**|**Multi-license:** BSD 3-Clause License (Revised) *OR* MIT License (Expat)
**[ansi-align (2.0.0)](#ansi-align)**| ISC License, MIT License (Expat)
**[ansi-escapes (3.0.0)](#ansi-escapes)**|MIT License (Expat)
**[ansi-red (0.1.1)](#ansi-red)**|MIT License (Expat)
**[ansi-regex (3.0.0)](#ansi-regex)**|MIT License (Expat)
**[ansi-styles (3.2.0)](#ansi-styles)**|MIT License (Expat)
**[ansi-wrap (0.1.0)](#ansi-wrap)**|**Multi-license:** MIT License (Expat) *OR* https://github.com/jonschlinkert/ansi-wrap/blob/master/LICENSE
**[append-transform (0.4.0)](#append-transform)**|MIT License (Expat)
**[argparse (1.0.9)](#argparse)**|MIT License (Expat)
**[array-differ (1.0.0)](#array-differ)**|MIT License (Expat)
**[array-find-index (1.0.2)](#array-find-index)**|MIT License (Expat)
**[array-ify (1.0.0)](#array-ify)**|MIT License (Expat)
**[array-union (1.0.2)](#array-union)**|MIT License (Expat)
**[array-uniq (1.0.3)](#array-uniq)**|MIT License (Expat)
**[arrify (1.0.1)](#arrify)**|MIT License (Expat)
**[arr-union (3.1.0)](#arr-union)**|MIT License (Expat)
**[asap (2.0.6)](#asap)**|MIT License (Expat)
**[asn1 (0.2.3)](#asn1)**|MIT License (Expat)
**[assert-plus (1.0.0)](#assert-plus)**|MIT License (Expat)
**[async (2.6.0)](#async)**|MIT License (Expat)
**[asynckit (0.4.0)](#asynckit)**|MIT License (Expat)
**[author-regex (1.0.0)](#author-regex)**|MIT License (Expat)
**[autolinker (0.15.3)](#autolinker)**|MIT License (Expat)
**[aws4 (1.6.0)](#aws4)**|MIT License (Expat)
**[aws-sign2 (0.7.0)](#aws-sign2)**|Apache License 2.0 (Apache-2.0)
**[babel-code-frame (6.26.0)](#babel-code-frame)**|MIT License (Expat)
**[@babel/code-frame (7.0.0-beta.32)](#@babel/code-frame)**|MIT License (Expat)
**[babel-generator (6.26.0)](#babel-generator)**|MIT License (Expat)
**[@babel/helper-function-name (7.0.0-beta.32)](#@babel/helper-function-name)**|MIT License (Expat)
**[@babel/helper-get-function-arity (7.0.0-beta.32)](#@babel/helper-get-function-arity)**|MIT License (Expat)
**[babel-messages (6.23.0)](#babel-messages)**|MIT License (Expat)
**[babel-runtime (6.26.0)](#babel-runtime)**|MIT License (Expat)
**[babel-template (6.26.0)](#babel-template)**|MIT License (Expat)
**[@babel/template (7.0.0-beta.32)](#@babel/template)**|MIT License (Expat)
**[babel-traverse (6.26.0)](#babel-traverse)**|MIT License (Expat)
**[@babel/traverse (7.0.0-beta.32)](#@babel/traverse)**|MIT License (Expat)
**[babel-types (6.26.0)](#babel-types)**|MIT License (Expat)
**[@babel/types (7.0.0-beta.32)](#@babel/types)**|MIT License (Expat)
**[babylon (7.0.0-beta.32)](#babylon)**|MIT License (Expat)
**[balanced-match (1.0.0)](#balanced-match)**|MIT License (Expat)
**[bcrypt-pbkdf (1.0.1)](#bcrypt-pbkdf)**|BSD 3-Clause License (Revised)
**[binaryextensions (2.0.0)](#binaryextensions)**|MIT License (Expat)
**[boom (5.2.0)](#boom)**|BSD 3-Clause License (Revised)
**[boxen (1.2.2)](#boxen)**|MIT License (Expat)
**[brace-expansion (1.1.8)](#brace-expansion)**|MIT License (Expat)
**[builtin-modules (1.1.1)](#builtin-modules)**|MIT License (Expat)
**[bytewise (1.1.0)](#bytewise)**|MIT License (Expat), UnclassifiedLicense
**[bytewise-core (1.2.3)](#bytewise-core)**|MIT License (Expat)
**[camelcase (4.1.0)](#camelcase)**|MIT License (Expat)
**[camelcase-keys (2.1.0)](#camelcase-keys)**|MIT License (Expat)
**[capture-stack-trace (1.0.0)](#capture-stack-trace)**|MIT License (Expat)
**[caseless (0.12.0)](#caseless)**|Apache License 2.0 (Apache-2.0)
**[center-align (0.1.3)](#center-align)**|MIT License (Expat)
**[circular-json (0.3.3)](#circular-json)**|MIT License (Expat)
**[class-extend (0.1.2)](#class-extend)**|MIT License (Expat)
**[cli-boxes (1.0.0)](#cli-boxes)**|MIT License (Expat)
**[cli-cursor (2.1.0)](#cli-cursor)**|MIT License (Expat)
**[cli-table (0.3.1)](#cli-table)**|MIT License (Expat)
**[cliui (2.1.0)](#cliui)**| ISC License, MIT License (Expat)
**[cli-width (2.2.0)](#cli-width)**|**Multi-license:**  ISC License *OR* MIT License (Expat)
**[clone (2.1.1)](#clone)**|MIT License (Expat)
**[cloneable-readable (1.0.0)](#cloneable-readable)**|MIT License (Expat)
**[clone-buffer (1.0.0)](#clone-buffer)**|MIT License (Expat)
**[clone-stats (1.0.0)](#clone-stats)**|MIT License (Expat)
**[co (4.6.0)](#co)**|MIT License (Expat)
**[code-point-at (1.1.0)](#code-point-at)**|MIT License (Expat)
**[coffee-script (1.12.7)](#coffee-script)**|MIT License (Expat)
**[color-name (1.1.3)](#color-name)**|MIT License (Expat)
**[combined-stream (1.0.5)](#combined-stream)**|MIT License (Expat)
**[commander (2.11.0)](#commander)**|MIT License (Expat)
**[commondir (1.0.1)](#commondir)**|MIT License (Expat)
**[compare-func (1.3.2)](#compare-func)**|MIT License (Expat)
**[concat-map (0.0.1)](#concat-map)**|MIT License (Expat)
**[concat-stream (1.6.0)](#concat-stream)**|MIT License (Expat)
**[configstore (3.1.1)](#configstore)**|BSD 3-Clause License (Revised)
**[conventional-changelog-angular (1.5.2)](#conventional-changelog-angular)**| ISC License
**[conventional-changelog-atom (0.1.2)](#conventional-changelog-atom)**| ISC License
**[conventional-changelog-codemirror (0.2.1)](#conventional-changelog-codemirror)**| ISC License
**[conventional-changelog-core (1.9.3)](#conventional-changelog-core)**|MIT License (Expat)
**[conventional-changelog-ember (0.2.9)](#conventional-changelog-ember)**| ISC License
**[conventional-changelog-eslint (0.2.1)](#conventional-changelog-eslint)**| ISC License
**[conventional-changelog-express (0.2.1)](#conventional-changelog-express)**| ISC License
**[conventional-changelog-jquery (0.1.0)](#conventional-changelog-jquery)**| ISC License
**[conventional-changelog-jscs (0.1.0)](#conventional-changelog-jscs)**| ISC License
**[conventional-changelog-jshint (0.2.1)](#conventional-changelog-jshint)**| ISC License
**[conventional-changelog-writer (2.0.2)](#conventional-changelog-writer)**|MIT License (Expat)
**[conventional-commits-filter (1.1.0)](#conventional-commits-filter)**|MIT License (Expat)
**[conventional-commits-parser (2.0.1)](#conventional-commits-parser)**|MIT License (Expat)
**[core-js (2.5.1)](#core-js)**|MIT License (Expat)
**[core-util-is (1.0.2)](#core-util-is)**|MIT License (Expat)
**[create-error-class (3.0.2)](#create-error-class)**|MIT License (Expat)
**[cross-spawn (5.1.0)](#cross-spawn)**|MIT License (Expat)
**[cryptiles (3.1.2)](#cryptiles)**|BSD 3-Clause License (Revised)
**[crypto-random-string (1.0.0)](#crypto-random-string)**|MIT License (Expat)
**[currently-unhandled (0.4.1)](#currently-unhandled)**|MIT License (Expat)
**[dargs (5.1.0)](#dargs)**|MIT License (Expat)
**[dashdash (1.14.1)](#dashdash)**|MIT License (Expat)
**[dateformat (3.0.2)](#dateformat)**|MIT License (Expat)
**[debug (3.1.0)](#debug)**|MIT License (Expat)
**[decamelize (1.2.0)](#decamelize)**|MIT License (Expat)
**[decompress-response (3.3.0)](#decompress-response)**|MIT License (Expat)
**[deep-extend (0.5.0)](#deep-extend)**|**Multi-license:** MIT License (Expat) *OR* https://raw.githubusercontent.com/unclechu/node-deep-extend/master/LICENSE
**[deepmerge (1.5.2)](#deepmerge)**|MIT License (Expat)
**[default-require-extensions (1.0.0)](#default-require-extensions)**|MIT License (Expat)
**[del (2.2.2)](#del)**|MIT License (Expat)
**[delayed-stream (1.0.0)](#delayed-stream)**|MIT License (Expat)
**[detect-conflict (1.0.1)](#detect-conflict)**|MIT License (Expat)
**[detect-indent (4.0.0)](#detect-indent)**|MIT License (Expat)
**[diacritics-map (0.1.0)](#diacritics-map)**|MIT License (Expat)
**[dot-prop (4.2.0)](#dot-prop)**|MIT License (Expat)
**[duplexer3 (0.1.4)](#duplexer3)**|BSD 3-Clause License (Revised)
**[ecc-jsbn (0.1.1)](#ecc-jsbn)**|MIT License (Expat)
**[editions (1.3.3)](#editions)**|MIT License (Expat)
**[ejs (2.5.7)](#ejs)**|Apache License 2.0 (Apache-2.0)
**[errno (0.1.4)](#errno)**|MIT License (Expat)
**[error (7.0.2)](#error)**|MIT License (Expat), http://github.com/Raynos/error/raw/master/LICENSE
**[error-ex (1.3.1)](#error-ex)**|MIT License (Expat)
**[escape-string-regexp (1.0.5)](#escape-string-regexp)**|MIT License (Expat)
**[esprima (4.0.0)](#esprima)**|BSD 2-Clause License (FreeBSD/Simplified), BSD 3-Clause License (Revised)
**[esutils (2.0.2)](#esutils)**|BSD 2-Clause License (FreeBSD/Simplified), BSD 3-Clause License (Revised)
**[execa (0.7.0)](#execa)**|MIT License (Expat)
**[exit-hook (1.1.1)](#exit-hook)**|MIT License (Expat)
**[expand-range (1.8.2)](#expand-range)**|MIT License (Expat)
**[extend (3.0.1)](#extend)**|MIT License (Expat)
**[extend-shallow (2.0.1)](#extend-shallow)**|MIT License (Expat)
**[external-editor (2.0.5)](#external-editor)**|MIT License (Expat)
**[extsprintf (1.3.0)](#extsprintf)**|MIT License (Expat)
**[fast-deep-equal (1.0.0)](#fast-deep-equal)**|MIT License (Expat)
**[fast-json-stable-stringify (2.0.0)](#fast-json-stable-stringify)**|MIT License (Expat)
**[figures (2.0.0)](#figures)**|MIT License (Expat)
**[fileset (2.0.3)](#fileset)**|MIT License (Expat)
**[fill-range (2.2.3)](#fill-range)**|MIT License (Expat)
**[findup (0.1.5)](#findup)**|MIT License (Expat)
**[find-up (2.1.0)](#find-up)**|MIT License (Expat)
**[first-chunk-stream (2.0.0)](#first-chunk-stream)**|MIT License (Expat)
**[forever-agent (0.6.1)](#forever-agent)**|Apache License 2.0 (Apache-2.0)
**[for-in (1.0.2)](#for-in)**|MIT License (Expat)
**[form-data (2.3.1)](#form-data)**|MIT License (Expat)
**[fs-extra (1.0.0)](#fs-extra)**|MIT License (Expat)
**[fs.realpath (1.0.0)](#fs.realpath)**|**Multi-license:** MIT License (Expat) *OR*  ISC License
**[generator-jest (1.4.2)](#generator-jest)**|MIT License (Expat)
**[generator-travis (1.5.3)](#generator-travis)**|MIT License (Expat)
**[getpass (0.1.7)](#getpass)**|MIT License (Expat)
**[get-pkg-repo (1.4.0)](#get-pkg-repo)**|MIT License (Expat)
**[get-stdin (4.0.1)](#get-stdin)**|MIT License (Expat)
**[get-stream (3.0.0)](#get-stream)**|MIT License (Expat)
**[get-value (2.0.6)](#get-value)**|MIT License (Expat)
**[gh-got (6.0.0)](#gh-got)**|MIT License (Expat)
**[git-config (0.0.7)](#git-config)**|BSD 3-Clause License (Revised)
**[gitconfiglocal (1.0.0)](#gitconfiglocal)**|BSD 3-Clause License (Revised)
**[git-raw-commits (1.3.0)](#git-raw-commits)**|MIT License (Expat)
**[git-semver-tags (1.2.3)](#git-semver-tags)**|MIT License (Expat)
**[git-up (2.0.9)](#git-up)**|MIT License (Expat)
**[glob (7.1.2)](#glob)**|MIT License (Expat)
**[global-dirs (0.1.0)](#global-dirs)**|MIT License (Expat)
**[globals (9.18.0)](#globals)**|MIT License (Expat)
**[globby (6.1.0)](#globby)**|MIT License (Expat)
**[got (7.1.0)](#got)**|MIT License (Expat)
**[graceful-fs (4.1.11)](#graceful-fs)**|**Multi-license:**  ISC License *OR* MIT License (Expat)
**[gray-matter (2.1.1)](#gray-matter)**|MIT License (Expat)
**[grouped-queue (0.3.3)](#grouped-queue)**|MIT License (Expat)
**[handlebars (4.0.11)](#handlebars)**|MIT License (Expat)
**[har-schema (2.0.0)](#har-schema)**| ISC License, MIT License (Expat)
**[har-validator (5.0.3)](#har-validator)**| ISC License, MIT License (Expat)
**[has-ansi (2.0.0)](#has-ansi)**|MIT License (Expat)
**[has-flag (2.0.0)](#has-flag)**|MIT License (Expat)
**[has-symbol-support-x (1.4.1)](#has-symbol-support-x)**|MIT License (Expat)
**[has-to-string-tag-x (1.4.1)](#has-to-string-tag-x)**|MIT License (Expat)
**[hawk (6.0.2)](#hawk)**|./LICENSE
**[hoek (4.2.0)](#hoek)**|BSD 3-Clause License (Revised)
**[hosted-git-info (2.5.0)](#hosted-git-info)**|**Multi-license:**  ISC License *OR* MIT License (Expat)
**[http-basic (2.5.1)](#http-basic)**|MIT License (Expat)
**[http-response-object (1.1.0)](#http-response-object)**|MIT License (Expat)
**[http-signature (1.2.0)](#http-signature)**|MIT License (Expat)
**[iconv-lite (0.4.19)](#iconv-lite)**|MIT License (Expat)
**[import-lazy (2.1.0)](#import-lazy)**|MIT License (Expat)
**[imurmurhash (0.1.4)](#imurmurhash)**|MIT License (Expat)
**[indent-string (2.1.0)](#indent-string)**|MIT License (Expat)
**[inflight (1.0.6)](#inflight)**|**Multi-license:**  ISC License *OR* MIT License (Expat)
**[inherits (2.0.3)](#inherits)**|**Multi-license:**  ISC License *OR* MIT License (Expat)
**[ini (1.3.4)](#ini)**|**Multi-license:**  ISC License *OR* MIT License (Expat)
**[iniparser (1.0.5)](#iniparser)**|MIT License (Expat)
**[inquirer (3.3.0)](#inquirer)**|MIT License (Expat)
**[invariant (2.2.2)](#invariant)**|BSD 3-Clause License (Revised)
**[isarray (1.0.0)](#isarray)**|MIT License (Expat)
**[is-arrayish (0.2.1)](#is-arrayish)**|MIT License (Expat)
**[is-buffer (1.1.6)](#is-buffer)**|MIT License (Expat)
**[is-builtin-module (1.0.0)](#is-builtin-module)**|MIT License (Expat)
**[isexe (2.0.0)](#isexe)**| ISC License, MIT License (Expat)
**[is-extendable (0.1.1)](#is-extendable)**|MIT License (Expat)
**[is-finite (1.0.2)](#is-finite)**|MIT License (Expat)
**[is-fullwidth-code-point (2.0.0)](#is-fullwidth-code-point)**|MIT License (Expat)
**[is-installed-globally (0.1.0)](#is-installed-globally)**|MIT License (Expat)
**[is-local-path (0.1.6)](#is-local-path)**|MIT License (Expat)
**[is-npm (1.0.0)](#is-npm)**|MIT License (Expat)
**[is-number (3.0.0)](#is-number)**|MIT License (Expat)
**[is-obj (1.0.1)](#is-obj)**|MIT License (Expat)
**[is-object (1.0.1)](#is-object)**|MIT License (Expat), http://github.com/ljharb/is-object/raw/master/LICENSE
**[isobject (3.0.1)](#isobject)**|MIT License (Expat)
**[is-path-cwd (1.0.0)](#is-path-cwd)**|MIT License (Expat)
**[is-path-in-cwd (1.0.0)](#is-path-in-cwd)**|MIT License (Expat)
**[is-path-inside (1.0.0)](#is-path-inside)**|MIT License (Expat)
**[is-plain-obj (1.1.0)](#is-plain-obj)**|MIT License (Expat)
**[is-plain-object (2.0.4)](#is-plain-object)**|MIT License (Expat)
**[is-promise (2.1.0)](#is-promise)**|MIT License (Expat)
**[is-redirect (1.0.0)](#is-redirect)**|MIT License (Expat)
**[is-retry-allowed (1.1.0)](#is-retry-allowed)**|MIT License (Expat)
**[is-scoped (1.0.0)](#is-scoped)**|MIT License (Expat)
**[is-ssh (1.3.0)](#is-ssh)**|MIT License (Expat)
**[isstream (0.1.2)](#isstream)**|MIT License (Expat)
**[is-stream (1.1.0)](#is-stream)**|MIT License (Expat)
**[is-subset (0.1.1)](#is-subset)**|MIT License (Expat)
**[istanbul-lib-coverage (1.1.1)](#istanbul-lib-coverage)**|BSD 3-Clause License (Revised)
**[istanbul-lib-hook (1.1.0)](#istanbul-lib-hook)**|BSD 3-Clause License (Revised)
**[istanbul-lib-report (1.1.2)](#istanbul-lib-report)**|BSD 3-Clause License (Revised)
**[istanbul-reports (1.1.3)](#istanbul-reports)**|BSD 3-Clause License (Revised)
**[istextorbinary (2.1.0)](#istextorbinary)**|MIT License (Expat)
**[is-text-path (1.0.1)](#is-text-path)**|MIT License (Expat)
**[is-typedarray (1.0.0)](#is-typedarray)**|MIT License (Expat)
**[isurl (1.0.0)](#isurl)**|MIT License (Expat)
**[is-utf8 (0.2.1)](#is-utf8)**|MIT License (Expat)
**[jsbn (0.1.1)](#jsbn)**|MIT License (Expat)
**[jschardet (1.6.0)](#jschardet)**|GNU Lesser General Public License v2.1 (LGPL-2.1)
**[jsesc (1.3.0)](#jsesc)**|MIT License (Expat)
**[jsonfile (2.4.0)](#jsonfile)**|MIT License (Expat)
**[jsonparse (1.3.1)](#jsonparse)**|MIT License (Expat)
**[json-schema (0.2.3)](#json-schema)**|**Multi-license:** Academic Free License 3.0 (AFL) *OR* BSD 3-Clause License (Revised), http://trac.dojotoolkit.org/browser/dojo/trunk/LICENSE#L13, http://trac.dojotoolkit.org/browser/dojo/trunk/LICENSE#L43
**[json-schema-traverse (0.3.1)](#json-schema-traverse)**|MIT License (Expat)
**[JSONStream (1.3.1)](#JSONStream)**|Apache License 2.0 (Apache-2.0), MIT License (Expat), Dual-license
**[json-stringify-safe (5.0.1)](#json-stringify-safe)**|**Multi-license:**  ISC License *OR* MIT License (Expat)
**[jsprim (1.4.1)](#jsprim)**|MIT License (Expat)
**[js-tokens (3.0.2)](#js-tokens)**|MIT License (Expat)
**[kind-of (4.0.0)](#kind-of)**|MIT License (Expat)
**[klaw (1.3.1)](#klaw)**|MIT License (Expat)
**[latest-version (3.1.0)](#latest-version)**|MIT License (Expat)
**[lazy-cache (2.0.2)](#lazy-cache)**|MIT License (Expat)
**[list-item (1.1.1)](#list-item)**|MIT License (Expat)
**[load-json-file (2.0.0)](#load-json-file)**|MIT License (Expat)
**[locate-path (2.0.0)](#locate-path)**|MIT License (Expat)
**[lodash.camelcase (4.3.0)](#lodash.camelcase)**|MIT License (Expat)
**[lodash._reinterpolate (3.0.0)](#lodash._reinterpolate)**|MIT License (Expat)
**[lodash.template (4.4.0)](#lodash.template)**|MIT License (Expat)
**[lodash.templatesettings (4.1.0)](#lodash.templatesettings)**|MIT License (Expat)
**[lodash.upperfirst (4.3.1)](#lodash.upperfirst)**|MIT License (Expat)
**[lodash.zip (4.2.0)](#lodash.zip)**|MIT License (Expat)
**[log-symbols (2.1.0)](#log-symbols)**|MIT License (Expat)
**[longest (1.0.1)](#longest)**|https://github.com/jonschlinkert/longest/blob/master/LICENSE, MIT License (Expat)
**[loose-envify (1.3.1)](#loose-envify)**|MIT License (Expat)
**[loud-rejection (1.6.0)](#loud-rejection)**|MIT License (Expat)
**[lowercase-keys (1.0.0)](#lowercase-keys)**|MIT License (Expat)
**[lru-cache (4.1.1)](#lru-cache)**| ISC License, MIT License (Expat)
**[map-obj (1.0.1)](#map-obj)**|MIT License (Expat)
**[markdown-link (0.1.1)](#markdown-link)**|MIT License (Expat), https://github.com/jonschlinkert/markdown-link/blob/master/LICENSE
**[markdown-toc (1.2.0)](#markdown-toc)**|MIT License (Expat)
**[mem-fs (1.1.3)](#mem-fs)**|MIT License (Expat)
**[mem-fs-editor (3.0.2)](#mem-fs-editor)**|MIT License (Expat)
**[meow (3.7.0)](#meow)**|MIT License (Expat)
**[merge-and-concat (1.0.2)](#merge-and-concat)**|MIT License (Expat)
**[mime-db (1.30.0)](#mime-db)**|MIT License (Expat)
**[mime-types (2.1.17)](#mime-types)**|MIT License (Expat)
**[mimic-fn (1.1.0)](#mimic-fn)**|MIT License (Expat)
**[mimic-response (1.0.0)](#mimic-response)**|MIT License (Expat)
**[minimatch (3.0.4)](#minimatch)**|**Multi-license:**  ISC License *OR* MIT License (Expat)
**[minimist (1.2.0)](#minimist)**|MIT License (Expat)
**[mixin-deep (1.2.0)](#mixin-deep)**|MIT License (Expat)
**[mkdirp (0.5.1)](#mkdirp)**|MIT License (Expat)
**[modify-values (1.0.0)](#modify-values)**|MIT License (Expat)
**[ms (2.0.0)](#ms)**|MIT License (Expat)
**[multimatch (2.1.0)](#multimatch)**|MIT License (Expat)
**[mute-stream (0.0.7)](#mute-stream)**| ISC License, MIT License (Expat)
**[normalize-package-data (2.4.0)](#normalize-package-data)**|BSD 3-Clause License (Revised), BSD 2-Clause License (FreeBSD/Simplified), MIT License (Expat)
**[npm-name (3.1.0)](#npm-name)**|MIT License (Expat)
**[npm-run-path (2.0.2)](#npm-run-path)**|MIT License (Expat)
**[number-is-nan (1.0.1)](#number-is-nan)**|MIT License (Expat)
**[oauth-sign (0.8.2)](#oauth-sign)**|Apache License 2.0 (Apache-2.0)
**[object-assign (4.1.1)](#object-assign)**|MIT License (Expat)
**[object.pick (1.3.0)](#object.pick)**|MIT License (Expat)
**[once (1.4.0)](#once)**|**Multi-license:**  ISC License *OR* MIT License (Expat)
**[onetime (2.0.1)](#onetime)**|MIT License (Expat)
**[optimist (0.6.1)](#optimist)**|**Multi-license:** MIT License (Expat) *OR* X11 License
**[os-homedir (1.0.2)](#os-homedir)**|MIT License (Expat)
**[os-shim (0.1.3)](#os-shim)**|MIT License (Expat), M
**[os-tmpdir (1.0.2)](#os-tmpdir)**|MIT License (Expat), See-doc(OTHER)
**[package-json (4.0.1)](#package-json)**|MIT License (Expat)
**[parse-github-repo-url (1.4.1)](#parse-github-repo-url)**|MIT License (Expat)
**[parse-json (2.2.0)](#parse-json)**|MIT License (Expat)
**[parse-url (1.3.11)](#parse-url)**|MIT License (Expat)
**[path-exists (3.0.0)](#path-exists)**|MIT License (Expat)
**[path-is-absolute (1.0.1)](#path-is-absolute)**|MIT License (Expat)
**[path-is-inside (1.0.2)](#path-is-inside)**|Dual-license, MIT License (Expat), Do What The F*ck You Want To Public License (WTFPL)
**[path-key (2.0.1)](#path-key)**|MIT License (Expat)
**[path-parse (1.0.5)](#path-parse)**|MIT License (Expat)
**[path-type (2.0.0)](#path-type)**|MIT License (Expat)
**[p-cancelable (0.3.0)](#p-cancelable)**|MIT License (Expat)
**[performance-now (2.1.0)](#performance-now)**|MIT License (Expat)
**[p-finally (1.0.0)](#p-finally)**|MIT License (Expat)
**[pify (3.0.0)](#pify)**|MIT License (Expat)
**[pinkie (2.0.4)](#pinkie)**|MIT License (Expat)
**[pinkie-promise (2.0.1)](#pinkie-promise)**|MIT License (Expat)
**[p-limit (1.1.0)](#p-limit)**|MIT License (Expat)
**[p-locate (2.0.0)](#p-locate)**|MIT License (Expat)
**[prepend-http (1.0.4)](#prepend-http)**|MIT License (Expat)
**[pretty-bytes (4.0.2)](#pretty-bytes)**|MIT License (Expat)
**[process-nextick-args (1.0.7)](#process-nextick-args)**|MIT License (Expat)
**[promise (7.3.1)](#promise)**|MIT License (Expat)
**[protocols (1.4.6)](#protocols)**|MIT License (Expat)
**[prr (0.0.0)](#prr)**|MIT License (Expat)
**[pseudomap (1.0.2)](#pseudomap)**| ISC License, MIT License (Expat)
**[p-timeout (1.2.0)](#p-timeout)**|MIT License (Expat)
**[punycode (1.4.1)](#punycode)**|MIT License (Expat)
**[q (1.5.1)](#q)**|MIT License (Expat)
**[qs (6.5.1)](#qs)**|BSD 3-Clause License (Revised)
**[ramda (0.23.0)](#ramda)**|MIT License (Expat), Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
**[randomatic (1.1.7)](#randomatic)**|MIT License (Expat)
**[readable-stream (2.3.3)](#readable-stream)**|MIT License (Expat)
**[read-chunk (2.1.0)](#read-chunk)**|MIT License (Expat)
**[read-pkg (2.0.0)](#read-pkg)**|MIT License (Expat)
**[read-pkg-up (2.0.0)](#read-pkg-up)**|MIT License (Expat)
**[rechoir (0.6.2)](#rechoir)**|MIT License (Expat), https://github.com/tkellen/node-rechoir/blob/master/LICENSE
**[redent (1.0.0)](#redent)**|MIT License (Expat)
**[regenerator-runtime (0.11.0)](#regenerator-runtime)**|MIT License (Expat)
**[registry-auth-token (3.3.1)](#registry-auth-token)**|MIT License (Expat)
**[registry-url (3.1.0)](#registry-url)**|MIT License (Expat)
**[remarkable (1.7.1)](#remarkable)**|MIT License (Expat)
**[remove-trailing-separator (1.1.0)](#remove-trailing-separator)**|MIT License (Expat),  ISC License
**[repeat-element (1.1.2)](#repeat-element)**|MIT License (Expat), https://github.com/jonschlinkert/repeat-element/blob/master/LICENSE
**[repeating (2.0.1)](#repeating)**|MIT License (Expat)
**[repeat-string (1.6.1)](#repeat-string)**|MIT License (Expat)
**[replace-ext (1.0.0)](#replace-ext)**|MIT License (Expat)
**[restore-cursor (2.0.0)](#restore-cursor)**|MIT License (Expat)
**[right-align (0.1.3)](#right-align)**|MIT License (Expat)
**[run-async (2.3.0)](#run-async)**|MIT License (Expat)
**[rx (4.1.0)](#rx)**|Apache License 2.0 (Apache-2.0)
**[rx-lite (4.0.8)](#rx-lite)**|Apache License 2.0 (Apache-2.0)
**[rx-lite-aggregates (4.0.8)](#rx-lite-aggregates)**|Apache License 2.0 (Apache-2.0)
**[safe-buffer (5.1.1)](#safe-buffer)**|MIT License (Expat)
**[scoped-regex (1.0.0)](#scoped-regex)**|MIT License (Expat)
**[semver (5.4.1)](#semver)**|MIT License (Expat),  ISC License
**[semver-diff (2.1.0)](#semver-diff)**|MIT License (Expat)
**[set-getter (0.1.0)](#set-getter)**|MIT License (Expat)
**[set-value (0.4.3)](#set-value)**|MIT License (Expat)
**[shebang-command (1.2.0)](#shebang-command)**|MIT License (Expat)
**[shebang-regex (1.0.0)](#shebang-regex)**|MIT License (Expat)
**[shelljs (0.7.8)](#shelljs)**|BSD 3-Clause License (Revised)
**[signal-exit (3.0.2)](#signal-exit)**| ISC License, MIT License (Expat)
**[sntp (2.1.0)](#sntp)**|BSD 3-Clause License (Revised)
**[sort-asc (0.2.0)](#sort-asc)**|MIT License (Expat)
**[sort-desc (0.2.0)](#sort-desc)**|MIT License (Expat)
**[sort-object (3.0.2)](#sort-object)**|MIT License (Expat)
**[sort-scripts (1.0.0)](#sort-scripts)**|MIT License (Expat)
**[source-map (0.5.7)](#source-map)**|BSD 3-Clause License (Revised)
**[spawn-sync (1.0.15)](#spawn-sync)**|MIT License (Expat)
**[spdx-correct (1.0.2)](#spdx-correct)**|Apache License 2.0 (Apache-2.0)
**[spdx-expression-parse (1.0.4)](#spdx-expression-parse)**|MIT License (Expat)
**[spdx-license-ids (1.2.2)](#spdx-license-ids)**|Creative Commons CC0 1.0 Universal (CC-0)
**[split (1.0.1)](#split)**|MIT License (Expat)
**[split2 (2.2.0)](#split2)**|**Multi-license:** MIT License (Expat) *OR*  ISC License
**[sprintf-js (1.0.3)](#sprintf-js)**|BSD 3-Clause License (Revised)
**[sshpk (1.13.1)](#sshpk)**|MIT License (Expat)
**[string_decoder (1.0.3)](#string_decoder)**|MIT License (Expat)
**[stringstream (0.0.5)](#stringstream)**|MIT License (Expat)
**[string-template (0.2.1)](#string-template)**|MIT License (Expat), http://github.com/Matt-Esch/string-template/raw/master/LICENSE
**[string-width (2.1.1)](#string-width)**|MIT License (Expat)
**[strip-ansi (4.0.0)](#strip-ansi)**|MIT License (Expat)
**[strip-bom (3.0.0)](#strip-bom)**|MIT License (Expat)
**[strip-bom-stream (2.0.0)](#strip-bom-stream)**|MIT License (Expat)
**[strip-color (0.1.0)](#strip-color)**|MIT License (Expat)
**[strip-eof (1.0.0)](#strip-eof)**|MIT License (Expat)
**[strip-indent (1.0.1)](#strip-indent)**|MIT License (Expat)
**[strip-json-comments (2.0.1)](#strip-json-comments)**|MIT License (Expat)
**[supports-color (4.5.0)](#supports-color)**|MIT License (Expat)
**[sync-request (3.0.1)](#sync-request)**|MIT License (Expat)
**[term-size (1.2.0)](#term-size)**|MIT License (Expat)
**[text-extensions (1.7.0)](#text-extensions)**|MIT License (Expat)
**[textextensions (2.1.0)](#textextensions)**|MIT License (Expat)
**[text-table (0.2.0)](#text-table)**|MIT License (Expat)
**[then-request (2.2.0)](#then-request)**|MIT License (Expat)
**[through2 (2.0.3)](#through2)**|MIT License (Expat)
**[through (2.3.8)](#through)**|MIT License (Expat), Apache License 2.0 (Apache-2.0)
**[timed-out (4.0.1)](#timed-out)**|MIT License (Expat)
**[tmp (0.0.33)](#tmp)**|MIT License (Expat)
**[to-fast-properties (2.0.0)](#to-fast-properties)**|MIT License (Expat)
**[toml (2.3.3)](#toml)**|MIT License (Expat)
**[to-object-path (0.3.0)](#to-object-path)**|MIT License (Expat)
**[tough-cookie (2.3.3)](#tough-cookie)**|**Multi-license:** BSD 3-Clause License (Revised) *OR* Mozilla Public License 2.0 (MPL-2.0)
**[travis-config-keys (1.0.3)](#travis-config-keys)**|MIT License (Expat)
**[trim-newlines (1.0.0)](#trim-newlines)**|MIT License (Expat)
**[trim-off-newlines (1.0.1)](#trim-off-newlines)**|MIT License (Expat)
**[trim-right (1.0.1)](#trim-right)**|MIT License (Expat)
**[tunnel-agent (0.6.0)](#tunnel-agent)**|Apache License 2.0 (Apache-2.0)
**[tweetnacl (0.14.5)](#tweetnacl)**|
**[typedarray (0.0.6)](#typedarray)**|MIT License (Expat)
**[typewise (1.0.3)](#typewise)**|MIT License (Expat)
**[typewise-core (1.2.0)](#typewise-core)**|MIT License (Expat)
**[uglify-js (2.8.29)](#uglify-js)**|BSD 3-Clause License (Revised), BSD 2-Clause License (FreeBSD/Simplified)
**[uglify-to-browserify (1.0.2)](#uglify-to-browserify)**|MIT License (Expat)
**[underscore (1.7.0)](#underscore)**|MIT License (Expat), https://raw.github.com/jashkenas/underscore/master/LICENSE
**[underscore.string (2.4.0)](#underscore.string)**|undefined, MIT License (Expat)
**[union-value (0.2.4)](#union-value)**|MIT License (Expat)
**[unique-string (1.0.0)](#unique-string)**|MIT License (Expat)
**[untildify (3.0.2)](#untildify)**|MIT License (Expat)
**[unzip-response (2.0.1)](#unzip-response)**|MIT License (Expat)
**[url-parse-lax (1.0.0)](#url-parse-lax)**|MIT License (Expat)
**[url-to-options (1.0.1)](#url-to-options)**|MIT License (Expat)
**[user-home (2.0.0)](#user-home)**|MIT License (Expat)
**[util-deprecate (1.0.2)](#util-deprecate)**|MIT License (Expat)
**[uuid (3.1.0)](#uuid)**|MIT License (Expat)
**[validate-npm-package-license (3.0.1)](#validate-npm-package-license)**|Apache License 2.0 (Apache-2.0)
**[verror (1.10.0)](#verror)**|MIT License (Expat)
**[vinyl (2.1.0)](#vinyl)**|MIT License (Expat)
**[vinyl-file (2.0.0)](#vinyl-file)**|MIT License (Expat)
**[which (1.3.0)](#which)**| ISC License, MIT License (Expat)
**[widest-line (1.0.0)](#widest-line)**|MIT License (Expat)
**[window-size (0.1.0)](#window-size)**|MIT License (Expat)
**[wordwrap (0.0.3)](#wordwrap)**|MIT License (Expat)
**[wrappy (1.0.2)](#wrappy)**|**Multi-license:**  ISC License *OR* MIT License (Expat)
**[write (0.2.1)](#write)**|MIT License (Expat)
**[write-file-atomic (2.3.0)](#write-file-atomic)**| ISC License, MIT License (Expat)
**[xdg-basedir (3.0.0)](#xdg-basedir)**|MIT License (Expat)
**[xtend (4.0.1)](#xtend)**|MIT License (Expat)
**[yallist (2.1.2)](#yallist)**| ISC License, MIT License (Expat)
**[yamljs (0.3.0)](#yamljs)**|MIT License (Expat)
**[yargs (3.10.0)](#yargs)**|MIT License (Expat)




### Details


#### **ajv (5.3.0)**

1. Description
    Another JSON Schema Validator


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [hello@blakeembrey.com](author)
    1. [e.poberezkin@me.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/ajv


1. Notes



#### **align-text (0.1.4)**

1. Description
    Align the text in a string.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [brian.woodward@gmail.com](author)
    1. [github@sellside.com](author)
    1. [snnskwtnb@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/align-text


1. Notes



#### **amdefine (1.0.1)**

1. Description
    Provide AMD's define() API for declaring modules in the AMD format


1. Licenses
    1. **Multi-license:** BSD 3-Clause License (Revised) *OR* MIT License (Expat)


1. Authors
    1. [jrburke@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://github.com/jrburke/amdefine


1. Notes



#### **ansi-align (2.0.0)**

1. Description
    align-text with ANSI support for CLIs


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [andrew@npmjs.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/ansi-align


1. Notes



#### **ansi-escapes (3.0.0)**

1. Description
    ANSI escape codes for manipulating the terminal


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/ansi-escapes


1. Notes



#### **ansi-red (0.1.1)**

1. Description
    The color red, in ansi.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/ansi-red


1. Notes



#### **ansi-regex (3.0.0)**

1. Description
    Regular expression for matching ANSI escape codes


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [threedeecee@gmail.com](author)
    1. [i.am.qix@gmail.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/ansi-regex


1. Notes



#### **ansi-styles (3.2.0)**

1. Description
    ANSI escape codes for styling strings in the terminal


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [i.am.qix@gmail.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/chalk/ansi-styles


1. Notes



#### **ansi-wrap (0.1.0)**

1. Description
    Create ansi colors by passing the open and close codes.


1. Licenses
    1. **Multi-license:** MIT License (Expat) *OR* https://github.com/jonschlinkert/ansi-wrap/blob/master/LICENSE


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/ansi-wrap


1. Notes



#### **append-transform (0.4.0)**

1. Description
    Install a transform to `require.extensions` that always runs last, even if additional extensions are added later.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [james@talmage.io](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/append-transform


1. Notes



#### **argparse (1.0.9)**

1. Description
    Very powerful CLI arguments parser. Native port of argparse - python's options parsing library


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [vitaly@rcdesign.ru](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/nodeca/argparse


1. Notes



#### **array-differ (1.0.0)**

1. Description
    Create an array with values that are present in the first input array but not additional ones


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/array-differ


1. Notes



#### **array-find-index (1.0.2)**

1. Description
    ES2015 `Array#findIndex()` ponyfill


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/array-find-index


1. Notes



#### **array-ify (1.0.0)**

1. Description
    Turn anything into an array


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [steve.mao@healthinteract.com.au](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/array-ify


1. Notes



#### **array-union (1.0.2)**

1. Description
    Create an array of unique values, in order, from the input arrays


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/array-union


1. Notes



#### **array-uniq (1.0.3)**

1. Description
    Create an array without duplicates


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/array-uniq


1. Notes



#### **arrify (1.0.1)**

1. Description
    Convert a value to an array


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/arrify#readme


1. Notes



#### **arr-union (3.1.0)**

1. Description
    Combines a list of arrays, returning a single array with unique values, using strict equality for comparisons.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/arr-union


1. Notes



#### **asap (2.0.6)**

1. Description
    High-priority task queue for Node.js and browsers


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [kris.kowal@cixar.com](author)
    1. [forbes@lindesay.co.uk](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/kriskowal/asap#readme


1. Notes



#### **asn1 (0.2.3)**

1. Description
    Contains parsers and serializers for ASN.1 (currently BER only)


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mcavage@gmail.com](author)
    1. [patrick.f.mooney@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. UnclassifiedLicense


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mcavage/node-asn1


1. Notes



#### **assert-plus (1.0.0)**

1. Description
    Extra assertions on top of node's assert module


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mcavage@gmail.com](author)
    1. [patrick.f.mooney@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mcavage/node-assert-plus#readme


1. Notes



#### **async (2.6.0)**

1. Description
    Higher-order functions and common patterns for asynchronous code


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [alexander.early@gmail.com](author)
    1. [beau@beaugunderson.com](author)
    1. [caolan.mcmahon@gmail.com](author)
    1. [argasinski.hubert@gmail.com](author)
    1. [megawac@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/caolan/async#readme


1. Notes



#### **asynckit (0.4.0)**

1. Description
    Minimal async jobs utility library, with streams support


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [iam@alexindigo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/asynckit


1. Notes



#### **author-regex (1.0.0)**

1. Description
    Regular expression for parsing an `author` string into an object following npm conventions.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/author-regex


1. Notes



#### **autolinker (0.15.3)**

1. Description
    Utility to automatically link the URLs, email addresses, and Twitter handles in a given block of text/HTML


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [greg@greg-jacobs.com](author)
    1. [olivier.lafleur@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/gregjacobs/Autolinker.js


1. Notes



#### **aws4 (1.6.0)**

1. Description
    Signs and prepares requests using AWS Signature Version 4


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [michael.hart.au@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mhart/aws4#readme


1. Notes



#### **aws-sign2 (0.7.0)**

1. Description
    AWS signing. Originally pulled from LearnBoost/knox, maintained as vendor in request, now a standalone module.


1. Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [mikeal.rogers@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mikeal/aws-sign#readme


1. Notes



#### **babel-code-frame (6.26.0)**

1. Description
    Generate errors that contain a code frame that point to source locations.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [me@thejameskyle.com](author)
    1. [sebmck@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [hi@henryzoo.com](author)
    1. [loganfsmyth@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://babeljs.io/


1. Notes



#### **@babel/code-frame (7.0.0-beta.32)**

1. Description
    Generate errors that contain a code frame that point to source locations.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bng412@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [loganfsmyth@gmail.com](author)
    1. [hi@henryzoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/@babel/code-frame


1. Notes



#### **babel-generator (6.26.0)**

1. Description
    Turns an AST into code.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [me@thejameskyle.com](author)
    1. [sebmck@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [hi@henryzoo.com](author)
    1. [loganfsmyth@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://babeljs.io/


1. Notes



#### **@babel/helper-function-name (7.0.0-beta.32)**

1. Description
    Helper function to change the property 'name' of every function


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bng412@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [loganfsmyth@gmail.com](author)
    1. [hi@henryzoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/@babel/helper-function-name


1. Notes



#### **@babel/helper-get-function-arity (7.0.0-beta.32)**

1. Description
    Helper function to get function arity


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bng412@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [loganfsmyth@gmail.com](author)
    1. [hi@henryzoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/@babel/helper-get-function-arity


1. Notes



#### **babel-messages (6.23.0)**

1. Description
    Collection of debug messages used by Babel.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [amjad.masad@gmail.com](author)
    1. [hi@henryzoo.com](author)
    1. [npm-public@jessemccarthy.net](author)
    1. [loganfsmyth@gmail.com](author)
    1. [sebmck@gmail.com](author)
    1. [me@thejameskyle.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://babeljs.io/


1. Notes



#### **babel-runtime (6.26.0)**

1. Description
    babel selfContained runtime


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [me@thejameskyle.com](author)
    1. [sebmck@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [hi@henryzoo.com](author)
    1. [loganfsmyth@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/babel/babel/tree/master/packages/babel-runtime


1. Notes



#### **babel-template (6.26.0)**

1. Description
    Generate an AST from a string template.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [me@thejameskyle.com](author)
    1. [sebmck@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [hi@henryzoo.com](author)
    1. [loganfsmyth@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://babeljs.io/


1. Notes



#### **@babel/template (7.0.0-beta.32)**

1. Description
    Generate an AST from a string template.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bng412@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [loganfsmyth@gmail.com](author)
    1. [hi@henryzoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/@babel/template


1. Notes



#### **babel-traverse (6.26.0)**

1. Description



1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [me@thejameskyle.com](author)
    1. [sebmck@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [hi@henryzoo.com](author)
    1. [loganfsmyth@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://babeljs.io/


1. Notes



#### **@babel/traverse (7.0.0-beta.32)**

1. Description
    The Babel Traverse module maintains the overall tree state, and is responsible for replacing, removing, and adding nodes


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bng412@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [loganfsmyth@gmail.com](author)
    1. [hi@henryzoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/@babel/traverse


1. Notes



#### **babel-types (6.26.0)**

1. Description
    This module contains methods for building ASTs manually and for checking the types of AST nodes.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [me@thejameskyle.com](author)
    1. [sebmck@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [hi@henryzoo.com](author)
    1. [loganfsmyth@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://babeljs.io/


1. Notes



#### **@babel/types (7.0.0-beta.32)**

1. Description
    Babel Types is a Lodash-esque utility library for AST nodes


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bng412@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [loganfsmyth@gmail.com](author)
    1. [hi@henryzoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/@babel/types


1. Notes



#### **babylon (7.0.0-beta.32)**

1. Description
    A JavaScript parser


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [me@thejameskyle.com](author)
    1. [sebmck@gmail.com](author)
    1. [daniel@tschinder.de](author)
    1. [hi@henryzoo.com](author)
    1. [loganfsmyth@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. BSD 2-Clause License (FreeBSD/Simplified)
    1. See-URL


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://babeljs.io/


1. Notes



#### **balanced-match (1.0.0)**

1. Description
    Match balanced character pairs, like "{" and "}"


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [julian@juliangruber.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/juliangruber/balanced-match


1. Notes



#### **bcrypt-pbkdf (1.0.1)**

1. Description
    Port of the OpenBSD bcrypt_pbkdf function to pure JS


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [alex@cooperi.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. MIT License (Expat)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/bcrypt-pbkdf


1. Notes



#### **binaryextensions (2.0.0)**

1. Description
    A package that contains an array of every single file extension there is for binary files


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [b@lupton.cc](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/binaryextensions


1. Notes



#### **boom (5.2.0)**

1. Description
    HTTP-friendly error objects


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [arbretz@gmail.com](author)
    1. [eran@hammer.io](author)
    1. [nicolas@morel.io](author)
    1. [quitlahok@gmail.com](author)
    1. [wpreul@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/hapijs/boom


1. Notes



#### **boxen (1.2.2)**

1. Description
    Create boxes in the terminal


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/boxen


1. Notes



#### **brace-expansion (1.1.8)**

1. Description
    Brace expansion as known from sh/bash


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [julian@juliangruber.com](author)
    1. [isaacs@npmjs.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/juliangruber/brace-expansion


1. Notes



#### **builtin-modules (1.1.1)**

1. Description
    List of the Node.js builtin modules


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/builtin-modules#readme


1. Notes



#### **bytewise (1.1.0)**

1. Description
    Binary serialization which sorts bytewise for arbirarily complex data structures


1. Licenses
    1. MIT License (Expat)
    1. UnclassifiedLicense


1. Authors
    1. [dean@deanlandolt.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/deanlandolt/bytewise


1. Notes



#### **bytewise-core (1.2.3)**

1. Description
    Binary serialization of arbitrarily complex structures that sort element-wise


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [dean@deanlandolt.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/bytewise-core


1. Notes



#### **camelcase (4.1.0)**

1. Description
    Convert a dash/dot/underscore/space separated string to camelCase: foo-bar → fooBar


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/camelcase#readme


1. Notes



#### **camelcase-keys (2.1.0)**

1. Description
    Convert object keys to camelCase


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/camelcase-keys


1. Notes



#### **capture-stack-trace (1.0.0)**

1. Description
    Error.captureStackTrace ponyfill


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [floatdrop@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/capture-stack-trace


1. Notes



#### **caseless (0.12.0)**

1. Description
    Caseless object set/get/has, very useful when working with HTTP headers.


1. Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [mikeal.rogers@gmail.com](author)
    1. [jnylen@gmail.com](author)
    1. [simeonvelichkov@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mikeal/caseless#readme


1. Notes



#### **center-align (0.1.3)**

1. Description
    Center-align the text in a string.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [brian.woodward@gmail.com](author)
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/center-align


1. Notes



#### **circular-json (0.3.3)**

1. Description
    JSON does not handle circular references. This version does


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [andrea.giammarchi@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/circular-json


1. Notes



#### **class-extend (0.1.2)**

1. Description
    Backbone like Class.extend utility for Node


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [admin@simonboudrias.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/class-extend


1. Notes



#### **cli-boxes (1.0.0)**

1. Description
    Boxes for use in the terminal


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/cli-boxes


1. Notes



#### **cli-cursor (2.1.0)**

1. Description
    Toggle the CLI cursor


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/cli-cursor#readme


1. Notes



#### **cli-table (0.3.1)**

1. Description
    Pretty unicode tables for the CLI


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [rauchg@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/Automattic/cli-table


1. Notes



#### **cliui (2.1.0)**

1. Description
    easily create complex multi-column command-line-interfaces


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [ben@npmjs.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/bcoe/cliui


1. Notes



#### **cli-width (2.2.0)**

1. Description
    Get stdout window width, with two fallbacks, tty and then a default.


1. Licenses
    1. **Multi-license:**  ISC License *OR* MIT License (Expat)


1. Authors
    1. [ilya@burstcreations.com](author)
    1. [admin@simonboudrias.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/knownasilya/cli-width


1. Notes



#### **clone (2.1.1)**

1. Description
    deep cloning of objects and arrays


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [paul@vorb.de](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/pvorb/node-clone


1. Notes



#### **cloneable-readable (1.0.0)**

1. Description
    Clone a Readable stream, safely


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [hello@matteocollina.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/cloneable-readable


1. Notes



#### **clone-buffer (1.0.0)**

1. Description
    Easier Buffer cloning in node.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [blaine.bublitz@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/clone-buffer


1. Notes



#### **clone-stats (1.0.0)**

1. Description
    Safely clone node's fs.Stats instances without losing their class methods


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [hughskennedy@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/hughsk/clone-stats


1. Notes



#### **co (4.6.0)**

1. Description
    generator async control flow goodness


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [tj@vision-media.ca](author)
    1. [jonathanrichardong@gmail.com](author)
    1. [jonathanrichardong@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/co


1. Notes



#### **code-point-at (1.1.0)**

1. Description
    ES2015 String#codePointAt() ponyfill


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/code-point-at


1. Notes



#### **coffee-script (1.12.7)**

1. Description
    Unfancy JavaScript


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [computing+npm@geoffreybooth.com](author)
    1. [jashkenas@gmail.com](author)
    1. [simon.lydell@gmail.com](author)
    1. [npm@michael.ficarra.me](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://coffeescript.org


1. Notes



#### **color-name (1.1.3)**

1. Description
    A list of color names and it’s values


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [df.creative@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/dfcreative/color-name


1. Notes



#### **combined-stream (1.0.5)**

1. Description
    A stream that emits multiple other streams one after another.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [felix@debuggable.com](author)
    1. [dtyree77@gmail.com](author)
    1. [iam@alexindigo.com](author)
    1. [apeherder@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/felixge/node-combined-stream


1. Notes



#### **commander (2.11.0)**

1. Description
    the complete solution for node.js command-line programs


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [romain.vanesyan@gmail.com](author)
    1. [abe@enzou.tokyo](author)
    1. [rkoutnik@gmail.com](author)
    1. [zhiyelee@gmail.com](author)
    1. [tj@vision-media.ca](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/tj/commander.js#readme


1. Notes



#### **commondir (1.0.1)**

1. Description
    compute the closest common parent for file paths


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mail@substack.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/substack/node-commondir


1. Notes



#### **compare-func (1.3.2)**

1. Description
    Get a compare function for array to sort


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [steve.mao@healthinteract.com.au](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/compare-func


1. Notes



#### **concat-map (0.0.1)**

1. Description
    concatenative mapdashery


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mail@substack.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/substack/node-concat-map


1. Notes



#### **concat-stream (1.6.0)**

1. Description
    writable stream that concatenates strings or binary data and calls a callback with the result


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [max@maxogden.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/maxogden/concat-stream#readme


1. Notes



#### **configstore (3.1.1)**

1. Description
    Easily load and save config without having to think about where and how


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [addyosmani@gmail.com](author)
    1. [contact@arthurverschaeve.be](author)
    1. [eddie+npm@eddiemonge.com](author)
    1. [hemanth.hm@gmail.com](author)
    1. [mail@michael-kuehnel.de](author)
    1. [phartig@rdrei.net](author)
    1. [admin@simonboudrias.com](author)
    1. [sindresorhus@gmail.com](author)
    1. [mdara@eleven-labs.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/configstore


1. Notes



#### **conventional-changelog-angular (1.5.2)**

1. Description
    conventional-changelog angular preset


1. Licenses
    1.  ISC License


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog-angular


1. Notes



#### **conventional-changelog-atom (0.1.2)**

1. Description
    conventional-changelog atom preset


1. Licenses
    1.  ISC License


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog-atom


1. Notes



#### **conventional-changelog-codemirror (0.2.1)**

1. Description
    conventional-changelog CodeMirror preset


1. Licenses
    1.  ISC License


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog-codemirror


1. Notes



#### **conventional-changelog-core (1.9.3)**

1. Description
    conventional-changelog core


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog-core


1. Notes



#### **conventional-changelog-ember (0.2.9)**

1. Description
    conventional-changelog ember preset


1. Licenses
    1.  ISC License


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog-ember


1. Notes



#### **conventional-changelog-eslint (0.2.1)**

1. Description
    conventional-changelog eslint preset


1. Licenses
    1.  ISC License


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog-eslint


1. Notes



#### **conventional-changelog-express (0.2.1)**

1. Description
    conventional-changelog express preset


1. Licenses
    1.  ISC License


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog-express


1. Notes



#### **conventional-changelog-jquery (0.1.0)**

1. Description
    conventional-changelog jquery preset


1. Licenses
    1.  ISC License


1. Authors
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog-jquery


1. Notes



#### **conventional-changelog-jscs (0.1.0)**

1. Description
    conventional-changelog jscs preset


1. Licenses
    1.  ISC License


1. Authors
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog-jscs


1. Notes



#### **conventional-changelog-jshint (0.2.1)**

1. Description
    conventional-changelog jshint preset


1. Licenses
    1.  ISC License


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog-jshint


1. Notes



#### **conventional-changelog-writer (2.0.2)**

1. Description
    Write logs based on conventional commits and templates


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-changelog-writer


1. Notes



#### **conventional-commits-filter (1.1.0)**

1. Description
    Filter out reverted commits parsed by conventional-commits-parser


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-commits-filter


1. Notes



#### **conventional-commits-parser (2.0.1)**

1. Description
    Parse raw conventional commits


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/conventional-commits-parser


1. Notes



#### **core-js (2.5.1)**

1. Description
    Standard library


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [zloirock@zloirock.ru](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/zloirock/core-js#readme


1. Notes



#### **core-util-is (1.0.2)**

1. Description
    The `util.is*` functions introduced in Node v0.12.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/core-util-is#readme


1. Notes



#### **create-error-class (3.0.2)**

1. Description
    Create Error classes


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [floatdrop@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/create-error-class


1. Notes



#### **cross-spawn (5.1.0)**

1. Description
    Cross platform child_process#spawn and child_process#spawnSync


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [andremiguelcruz@msn.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/cross-spawn


1. Notes



#### **cryptiles (3.1.2)**

1. Description
    General purpose crypto utilities


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [ceejceej@gmail.com](author)
    1. [eran@hammer.io](author)
    1. [nicolas@morel.io](author)
    1. [quitlahok@gmail.com](author)
    1. [wpreul@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/hapijs/cryptiles#readme


1. Notes



#### **crypto-random-string (1.0.0)**

1. Description
    Generate a cryptographically strong random string


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/crypto-random-string


1. Notes



#### **currently-unhandled (0.4.1)**

1. Description
    Track the list of currently unhandled promise rejections.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [james@talmage.io](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/currently-unhandled


1. Notes



#### **dargs (5.1.0)**

1. Description
    Reverse minimist. Convert an object of options into an array of command-line arguments.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)
    1. [kevinmartensson@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/dargs


1. Notes



#### **dashdash (1.14.1)**

1. Description
    A light, featureful and explicit option parsing library.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [trentm@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/trentm/node-dashdash


1. Notes



#### **dateformat (3.0.2)**

1. Description
    A node.js package for Steven Levithan's excellent dateFormat() function.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [fpintos.npm@outlook.com](author)
    1. [github@sellside.com](author)
    1. [dev@tavan.de](author)
    1. [felix@debuggable.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/felixge/node-dateformat


1. Notes



#### **debug (3.1.0)**

1. Description
    small debugging utility


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [rhyneandrew@gmail.com](author)
    1. [kolban1@kolban.com](author)
    1. [nathan@tootallnate.net](author)
    1. [tj@vision-media.ca](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/visionmedia/debug


1. Notes



#### **decamelize (1.2.0)**

1. Description
    Convert a camelized string into a lowercased one with a custom separator: unicornRainbow → unicorn_rainbow


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/decamelize


1. Notes



#### **decompress-response (3.3.0)**

1. Description
    Decompress a HTTP response if needed


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/decompress-response


1. Notes



#### **deep-extend (0.5.0)**

1. Description
    Recursive object extending


1. Licenses
    1. **Multi-license:** MIT License (Expat) *OR* https://raw.githubusercontent.com/unclechu/node-deep-extend/master/LICENSE


1. Authors
    1. [lotsmanov89@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/unclechu/node-deep-extend


1. Notes



#### **deepmerge (1.5.2)**

1. Description
    A library for deep (recursive) merging of Javascript objects


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [me@JoshDuff.com](author)
    1. [mathews.kyle@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/nrf110/deepmerge


1. Notes



#### **default-require-extensions (1.0.0)**

1. Description
    Node's default require extensions as a separate module


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [james@talmage.io](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/default-require-extensions


1. Notes



#### **del (2.2.2)**

1. Description
    Delete files/folders using globs


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/del


1. Notes



#### **delayed-stream (1.0.0)**

1. Description
    Buffers events from a stream until you are ready to handle them.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [felix@debuggable.com](author)
    1. [apeherder@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/felixge/node-delayed-stream


1. Notes



#### **detect-conflict (1.0.1)**

1. Description
    Small utility library that check if a new file content can be merged safely in the on-disk existing file.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [admin@simonboudrias.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/detect-conflict


1. Notes



#### **detect-indent (4.0.0)**

1. Description
    Detect the indentation of code


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/detect-indent


1. Notes



#### **diacritics-map (0.1.0)**

1. Description
    Map of more than 1,200 diacritics and ligatures to english alphabet equivalents.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/diacritics-map


1. Notes



#### **dot-prop (4.2.0)**

1. Description
    Get, set, or delete a property from a nested object using a dot path


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/dot-prop


1. Notes



#### **duplexer3 (0.1.4)**

1. Description
    Like duplexer but using streams3


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [floatdrop@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/duplexer3


1. Notes



#### **ecc-jsbn (0.1.1)**

1. Description
    ECC JS code based on JSBN


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [jeremie@jabber.org](author)
    1. [nomad.ry@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/quartzjer/ecc-jsbn


1. Notes



#### **editions (1.3.3)**

1. Description
    Publish multiple editions for your JavaScript packages consistently and easily (e.g. source edition, esnext edition, es2015 edition)


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [b@lupton.cc](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/editions


1. Notes



#### **ejs (2.5.7)**

1. Description
    Embedded JavaScript templates


1. Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [mde@fleegix.org](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. MIT License (Expat)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mde/ejs


1. Notes



#### **errno (0.1.4)**

1. Description
    libuv errno details exposed


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [rod@vagg.org](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/rvagg/node-errno


1. Notes



#### **error (7.0.2)**

1. Description
    Custom errors


1. Licenses
    1. MIT License (Expat)
    1. http://github.com/Raynos/error/raw/master/LICENSE


1. Authors
    1. [raynos2@gmail.com](author)
    1. [jcorbin@wunjo.org](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/Raynos/error


1. Notes



#### **error-ex (1.3.1)**

1. Description
    Easy error subclassing and stack customization


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [i.am.qix@gmail.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/qix-/node-error-ex#readme


1. Notes



#### **escape-string-regexp (1.0.5)**

1. Description
    Escape RegExp special characters


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)
    1. [jappelman@xebia.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/escape-string-regexp


1. Notes



#### **esprima (4.0.0)**

1. Description
    ECMAScript parsing infrastructure for multipurpose analysis


1. Licenses
    1. BSD 2-Clause License (FreeBSD/Simplified)
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [ariya.hidayat@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://esprima.org


1. Notes



#### **esutils (2.0.2)**

1. Description
    utility box for ECMAScript language tools


1. Licenses
    1. BSD 2-Clause License (FreeBSD/Simplified)
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [utatane.tea@gmail.com](author)
    1. [npm@michael.ficarra.me](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/estools/esutils


1. Notes



#### **execa (0.7.0)**

1. Description
    A better `child_process`


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/execa


1. Notes



#### **exit-hook (1.1.1)**

1. Description
    Run some code when the process exits


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/exit-hook


1. Notes



#### **expand-range (1.8.2)**

1. Description
    Fast, bash-like range expansion. Expand a range of numbers or letters, uppercase or lowercase. See the benchmarks. Used by micromatch.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)
    1. [brian.woodward@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/expand-range


1. Notes



#### **extend (3.0.1)**

1. Description
    Port of jQuery.extend for node.js and the browser


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [justmoon@members.fsf.org](author)
    1. [ljharb@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/justmoon/node-extend#readme


1. Notes



#### **extend-shallow (2.0.1)**

1. Description
    Extend an object with the properties of additional objects. node.js/javascript util.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/extend-shallow


1. Notes



#### **external-editor (2.0.5)**

1. Description
    Edit a string with the users preferred text editor using $VISUAL or $ENVIRONMENT


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [kevin@mrkmg.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/external-editor


1. Notes



#### **extsprintf (1.3.0)**

1. Description
    extended POSIX-style sprintf


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [dap@cs.brown.edu](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/davepacheco/node-extsprintf


1. Notes



#### **fast-deep-equal (1.0.0)**

1. Description
    Fast deep equal


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [e.poberezkin@me.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/fast-deep-equal


1. Notes



#### **fast-json-stable-stringify (2.0.0)**

1. Description
    deterministic `JSON.stringify()` - a faster version of substack's json-stable-strigify without jsonify


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [e.poberezkin@me.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/fast-json-stable-stringify


1. Notes



#### **figures (2.0.0)**

1. Description
    Unicode symbols with Windows CMD fallbacks


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/figures#readme


1. Notes



#### **fileset (2.0.3)**

1. Description
    Wrapper around miniglob / minimatch combo to allow multiple patterns matching and include-exclude ability


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [daniel.mickael@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mklabs/node-fileset


1. Notes



#### **fill-range (2.2.3)**

1. Description
    Fill in a range of numbers or letters, optionally passing an increment or multiplier to use.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [brian.woodward@gmail.com](author)
    1. [elan.shanker+npm@gmail.com](author)
    1. [github@sellside.com](author)
    1. [paul@paulmillr.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/fill-range


1. Notes



#### **findup (0.1.5)**

1. Description
    Walk up ancester's dir up to root


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [filirom1@gmail.com](author)
    1. [filirom1@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/findup


1. Notes



#### **find-up (2.1.0)**

1. Description
    Find a file by walking up parent directories


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/find-up


1. Notes



#### **first-chunk-stream (2.0.0)**

1. Description
    Transform the first chunk in a stream


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/first-chunk-stream#readme


1. Notes



#### **forever-agent (0.6.1)**

1. Description
    HTTP Agent that keeps socket connections alive between keep-alive requests. Formerly part of mikeal/request, now a standalone module.


1. Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [mikeal.rogers@gmail.com](author)
    1. [jnylen@gmail.com](author)
    1. [simeonvelichkov@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mikeal/forever-agent


1. Notes



#### **for-in (1.0.2)**

1. Description
    Iterate over the own and inherited enumerable properties of an objecte, and return an object with properties that evaluate to true from the callback. Exit early by returning `false`. JavaScript/Node.js


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/for-in


1. Notes



#### **form-data (2.3.1)**

1. Description
    A library to create readable "multipart/form-data" streams. Can be used to submit forms and file uploads to other web applications.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [iam@alexindigo.com](author)
    1. [pierceydylan@gmail.com](author)
    1. [felix@debuggable.com](author)
    1. [mikeal.rogers@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/form-data/form-data#readme


1. Notes



#### **fs-extra (1.0.0)**

1. Description
    fs-extra contains methods that aren't included in the vanilla Node.js fs package. Such as mkdir -p, cp -r, and rm -rf.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [jprichardson@gmail.com](author)
    1. [opensrc@ryanzim.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. BSD 3-Clause License (Revised)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jprichardson/node-fs-extra


1. Notes



#### **fs.realpath (1.0.0)**

1. Description
    Use node's fs.realpath, but fall back to the JS implementation if the native one fails


1. Licenses
    1. **Multi-license:** MIT License (Expat) *OR*  ISC License


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/fs.realpath#readme


1. Notes



#### **generator-jest (1.4.2)**

1. Description
    Add jest support to any projects


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [admin@simonboudrias.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/generator-jest


1. Notes



#### **generator-travis (1.5.3)**

1. Description
    Yeoman generator to get and keep `.travis.yml` up-to-date effortlessly


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [iamstarkov@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/generator-travis


1. Notes



#### **getpass (0.1.7)**

1. Description
    getpass for node.js


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [alex@cooperi.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/getpass


1. Notes



#### **get-pkg-repo (1.4.0)**

1. Description
    Get normalized repository from package json data


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [hutson@hyper-expanse.net](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/get-pkg-repo


1. Notes



#### **get-stdin (4.0.1)**

1. Description
    Get stdin as a string or buffer


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/get-stdin


1. Notes



#### **get-stream (3.0.0)**

1. Description
    Get a stream as a string, buffer, or array


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [james@talmage.io](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/get-stream


1. Notes



#### **get-value (2.0.6)**

1. Description
    Use property paths (`a.b.c`) to get a nested value from an object.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/get-value


1. Notes



#### **gh-got (6.0.0)**

1. Description
    Convenience wrapper for `got` to interact with the GitHub API


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)
    1. [kevinmartensson@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/gh-got


1. Notes



#### **git-config (0.0.7)**

1. Description
    A simple way to extract out all the contents of a .gitconfig file and return as JSON


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [eugene@noblesamurai.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/git-config


1. Notes



#### **gitconfiglocal (1.0.0)**

1. Description
    parse the .git/config file into a useful data structure


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [soldair@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/gitconfiglocal


1. Notes



#### **git-raw-commits (1.3.0)**

1. Description
    Get raw git commits out of your repository using git-log(1)


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/git-raw-commits


1. Notes



#### **git-semver-tags (1.2.3)**

1. Description
    Get all git semver tags of your repository in reverse chronological order


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [moilanen.tapani@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/git-semver-tags


1. Notes



#### **git-up (2.0.9)**

1. Description
    A low level git url parser.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bizauionica@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/git-up


1. Notes



#### **glob (7.1.2)**

1. Description
    a little globber


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1.  ISC License


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/node-glob#readme


1. Notes



#### **global-dirs (0.1.0)**

1. Description
    Get the directory of globally installed packages and binaries


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/global-dirs


1. Notes



#### **globals (9.18.0)**

1. Description
    Global identifiers from different JavaScript environments


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [ben@byk.im](author)
    1. [schreck.mathias@gmail.com](author)
    1. [nicholas@nczconsulting.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/globals#readme


1. Notes



#### **globby (6.1.0)**

1. Description
    Extends `glob` with support for multiple patterns and exposes a Promise API


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/globby


1. Notes



#### **got (7.1.0)**

1. Description
    Simplified HTTP requests


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [alex.tesfamichael@gmail.com](author)
    1. [kevinmartensson@gmail.com](author)
    1. [sindresorhus@gmail.com](author)
    1. [floatdrop@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/got


1. Notes



#### **graceful-fs (4.1.11)**

1. Description
    A drop-in replacement for fs, making various improvements.


1. Licenses
    1. **Multi-license:**  ISC License *OR* MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/node-graceful-fs#readme


1. Notes



#### **gray-matter (2.1.1)**

1. Description
    Parse front-matter from a string or file. Fast, reliable and easy to use. Parses YAML front matter by default, but also has support for YAML, JSON, TOML or Coffee Front-Matter, with options to set custom delimiters. Used by metalsmith, assemble, verb and


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)
    1. [brian.woodward@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/gray-matter


1. Notes



#### **grouped-queue (0.3.3)**

1. Description
    In memory queue system prioritizing tasks


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [admin@simonboudrias.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/grouped-queue


1. Notes



#### **handlebars (4.0.11)**

1. Description
    Handlebars provides the power necessary to let you build semantic templates effectively with no frustration


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [erisds@gmail.com](author)
    1. [npm@knappi.org](author)
    1. [kpdecker@gmail.com](author)
    1. [lawnsea@gmail.com](author)
    1. [wycats@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://www.handlebarsjs.com/


1. Notes



#### **har-schema (2.0.0)**

1. Description
    JSON Schema for HTTP Archive (HAR)


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [e.poberezkin@me.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/har-schema


1. Notes



#### **har-validator (5.0.3)**

1. Description
    Extremely fast HTTP Archive (HAR) validator using JSON Schema


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [ahmad@ahmadnassri.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/ahmadnassri/har-validator


1. Notes



#### **has-ansi (2.0.0)**

1. Description
    Check if a string has ANSI escape codes


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [threedeecee@gmail.com](author)
    1. [i.am.qix@gmail.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/has-ansi


1. Notes



#### **has-flag (2.0.0)**

1. Description
    Check if argv has a specific flag


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)
    1. [jappelman@xebia.com](author)
    1. [i.am.qix@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/has-flag#readme


1. Notes



#### **has-symbol-support-x (1.4.1)**

1. Description
    Tests if ES6 Symbol is supported.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [xotic750@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/has-symbol-support-x


1. Notes



#### **has-to-string-tag-x (1.4.1)**

1. Description
    Tests if ES6 @@toStringTag is supported.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [xotic750@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/has-to-string-tag-x


1. Notes



#### **hawk (6.0.2)**

1. Description
    HTTP Hawk Authentication Scheme


1. Licenses
    1. ./LICENSE


1. Authors
    1. [eran@hueniverse.com](author)


1. License tags
    1.


1. Other Licenses
    1. BSD 3-Clause License (Revised)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/hueniverse/hawk#readme


1. Notes



#### **hoek (4.2.0)**

1. Description
    General purpose node utilities


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [eran@hammer.io](author)
    1. [wpreul@gmail.com](author)
    1. [quitlahok@gmail.com](author)
    1. [nicolas@morel.io](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. MIT License (Expat)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/hapijs/hoek#readme


1. Notes



#### **hosted-git-info (2.5.0)**

1. Description
    Provides metadata and conversions from repository urls for Github, Bitbucket and Gitlab


1. Licenses
    1. **Multi-license:**  ISC License *OR* MIT License (Expat)


1. Authors
    1. [me@re-becca.org](author)
    1. [ogd@aoaioxxysz.net](author)
    1. [kat@sykosomatic.org](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/npm/hosted-git-info


1. Notes



#### **http-basic (2.5.1)**

1. Description
    Very low level wrapper arround http.request/https.request


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [forbes@lindeay.co.uk](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/http-basic


1. Notes



#### **http-response-object (1.1.0)**

1. Description
    A simple object to represent an http response


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [forbes@lindeay.co.uk](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/http-response-object


1. Notes



#### **http-signature (1.2.0)**

1. Description
    Reference implementation of Joyent's HTTP Signature scheme.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [alex@cooperi.net](author)
    1. [mcavage@gmail.com](author)
    1. [patrick.f.mooney@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. Public Domain


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/joyent/node-http-signature/


1. Notes



#### **iconv-lite (0.4.19)**

1. Description
    Convert character encodings in pure javascript.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [ashtuchkin@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/ashtuchkin/iconv-lite


1. Notes
    1. Found license in currently used version.



#### **import-lazy (2.1.0)**

1. Description
    Import modules lazily


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/import-lazy


1. Notes



#### **imurmurhash (0.1.4)**

1. Description
    An incremental implementation of MurmurHash3


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [jensyt@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jensyt/imurmurhash-js


1. Notes



#### **indent-string (2.1.0)**

1. Description
    Indent each line in a string


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/indent-string#readme


1. Notes



#### **inflight (1.0.6)**

1. Description
    Add callbacks to requests in flight to avoid async duplication


1. Licenses
    1. **Multi-license:**  ISC License *OR* MIT License (Expat)


1. Authors
    1. [i@izs.me](author)
    1. [ogd@aoaioxxysz.net](author)
    1. [me@re-becca.org](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/inflight


1. Notes



#### **inherits (2.0.3)**

1. Description
    Browser-friendly inheritance fully compatible with standard node.js inherits()


1. Licenses
    1. **Multi-license:**  ISC License *OR* MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/inherits/issues


1. Notes



#### **ini (1.3.4)**

1. Description
    An ini encoder/decoder for node


1. Licenses
    1. **Multi-license:**  ISC License *OR* MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/ini#readme


1. Notes



#### **iniparser (1.0.5)**

1. Description
    a simple .ini parser


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [jordyvangelder@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/iniparser


1. Notes



#### **inquirer (3.3.0)**

1. Description
    A collection of common interactive command line user interfaces.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mail@michael-kuehnel.de](author)
    1. [admin@simonboudrias.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sboudrias/Inquirer.js#readme


1. Notes



#### **invariant (2.2.2)**

1. Description
    invariant


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [zertosh@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/zertosh/invariant#readme


1. Notes



#### **isarray (1.0.0)**

1. Description
    Array#isArray for older browsers


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [julian@juliangruber.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/juliangruber/isarray


1. Notes



#### **is-arrayish (0.2.1)**

1. Description
    Determines if an object can be used as an array


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [i.am.qix@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-arrayish


1. Notes



#### **is-buffer (1.1.6)**

1. Description
    Determine if an object is Buffer


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [feross@feross.org](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://feross.org


1. Notes



#### **is-builtin-module (1.0.0)**

1. Description
    Check if a string matches the name of a Node.js builtin module


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/is-builtin-module


1. Notes



#### **isexe (2.0.0)**

1. Description
    Minimal module to check if a file is executable.


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/isexe#readme


1. Notes



#### **is-extendable (0.1.1)**

1. Description
    Returns true if a value is any of the object types: array, regexp, plain object, function or date. This is useful for determining if a value can be extended, e.g. "can the value have keys?"


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-extendable


1. Notes



#### **is-finite (1.0.2)**

1. Description
    ES6 Number.isFinite() ponyfill


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/is-finite#readme


1. Notes



#### **is-fullwidth-code-point (2.0.0)**

1. Description
    Check if the character represented by a given Unicode code point is fullwidth


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/is-fullwidth-code-point


1. Notes



#### **is-installed-globally (0.1.0)**

1. Description
    Check if your package was installed globally


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-installed-globally


1. Notes



#### **is-local-path (0.1.6)**

1. Description
    Test whether a path is local.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [alex@panosoft.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-local-path


1. Notes



#### **is-npm (1.0.0)**

1. Description
    Check if your code is running as an npm script


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-npm


1. Notes



#### **is-number (3.0.0)**

1. Description
    Returns true if the value is a number. comprehensive tests.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)
    1. [brian.woodward@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/is-number


1. Notes



#### **is-obj (1.0.1)**

1. Description
    Check if a value is an object


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-obj


1. Notes



#### **is-object (1.0.1)**

1. Description
    Checks whether a value is an object


1. Licenses
    1. MIT License (Expat)
    1. http://github.com/ljharb/is-object/raw/master/LICENSE


1. Authors
    1. [raynos2@gmail.com](author)
    1. [ljharb@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/ljharb/is-object


1. Notes



#### **isobject (3.0.1)**

1. Description
    Returns true if the value is an object and not an array or null.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)
    1. [brian.woodward@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/isobject


1. Notes



#### **is-path-cwd (1.0.0)**

1. Description
    Check if a path is CWD


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/is-path-cwd


1. Notes



#### **is-path-in-cwd (1.0.0)**

1. Description
    Check if a path is in the current working directory


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/is-path-in-cwd


1. Notes



#### **is-path-inside (1.0.0)**

1. Description
    Check if a path is inside another path


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/is-path-inside


1. Notes



#### **is-plain-obj (1.1.0)**

1. Description
    Check if a value is a plain object


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-plain-obj


1. Notes



#### **is-plain-object (2.0.4)**

1. Description
    Returns true if an object was created by the `Object` constructor.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)
    1. [contact@svachon.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-plain-object


1. Notes



#### **is-promise (2.1.0)**

1. Description
    Test whether an object looks like a promises-a+ promise


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [forbes@lindesay.co.uk](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/then/is-promise


1. Notes



#### **is-redirect (1.0.0)**

1. Description
    Check if a number is a redirect HTTP status code


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-redirect


1. Notes



#### **is-retry-allowed (1.1.0)**

1. Description
    My prime module


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [floatdrop@gmail.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-retry-allowed


1. Notes



#### **is-scoped (1.0.0)**

1. Description
    Check if a string is a scoped npm package name


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-scoped


1. Notes



#### **is-ssh (1.3.0)**

1. Description
    Check if an input value is a ssh url or not.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bizauionica@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-ssh


1. Notes



#### **isstream (0.1.2)**

1. Description
    Determine if an object is a Stream


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [rod@vagg.org](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/rvagg/isstream


1. Notes



#### **is-stream (1.1.0)**

1. Description
    Check if something is a Node.js stream


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-stream


1. Notes



#### **is-subset (0.1.1)**

1. Description
    Check if an object is contained within another one


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [t.wiszniewski@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-subset


1. Notes



#### **istanbul-lib-coverage (1.1.1)**

1. Description
    Data library for istanbul coverage objects


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [ben@npmjs.com](author)
    1. [kananthmail-github@yahoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/istanbul-lib-coverage


1. Notes



#### **istanbul-lib-hook (1.1.0)**

1. Description
    Hooks for require, vm and script used in istanbul


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [ben@npmjs.com](author)
    1. [kananthmail-github@yahoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/istanbul-lib-hook


1. Notes



#### **istanbul-lib-report (1.1.2)**

1. Description
    Base reporting library for istanbul


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [ben@npmjs.com](author)
    1. [kananthmail-github@yahoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/istanbul-lib-report


1. Notes



#### **istanbul-reports (1.1.3)**

1. Description
    istanbul reports


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [jgkurian@me.com](author)
    1. [ben@npmjs.com](author)
    1. [kananthmail-github@yahoo.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/istanbul-reports


1. Notes



#### **istextorbinary (2.1.0)**

1. Description
    Determines if a buffer is comprised of text or binary


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [b@lupton.cc](author)
    1. [mike@mdm.cc](author)
    1. [robloach@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/istextorbinary


1. Notes



#### **is-text-path (1.0.1)**

1. Description
    Check if a filepath is a text file


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/is-text-path


1. Notes



#### **is-typedarray (1.0.0)**

1. Description
    Detect whether or not an object is a Typed Array


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [hughskennedy@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/hughsk/is-typedarray


1. Notes



#### **isurl (1.0.0)**

1. Description
    Checks whether a value is a WHATWG URL.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [contact@svachon.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/isurl


1. Notes



#### **is-utf8 (0.2.1)**

1. Description
    Detect if a buffer is utf8 encoded.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [whyer1@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/wayfind/is-utf8#readme


1. Notes
    1. Found license in currently used version.



#### **jsbn (0.1.1)**

1. Description
    The jsbn library is a fast, portable implementation of large-number math in pure JavaScript, enabling public-key crypto and other applications on desktop and mobile browsers.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [andyperlitch@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. See-file


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/andyperlitch/jsbn


1. Notes



#### **jschardet (1.6.0)**

1. Description
    Character encoding auto-detection in JavaScript (port of python's chardet)


1. Licenses
    1. GNU Lesser General Public License v2.1 (LGPL-2.1)


1. Authors
    1. [antonio.afonso@gmail.com](author)


1. License tags
    1. GNU,OSI-Approved,Weak Copyleft


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/jschardet


1. Notes
    1. The libraries licensed under LGPL-3.0 and LGPL-2.1 are dynamically linked, and do not therefore pose legal risks.



#### **jsesc (1.3.0)**

1. Description
    A JavaScript library for escaping JavaScript strings while generating the shortest possible valid output.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mathias@qiwi.be](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://mths.be/jsesc


1. Notes



#### **jsonfile (2.4.0)**

1. Description
    Easily read/write JSON files.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [jprichardson@gmail.com](author)
    1. [opensrc@ryanzim.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jprichardson/node-jsonfile#readme


1. Notes



#### **jsonparse (1.3.1)**

1. Description
    This is a pure-js JSON streaming parser for node.js


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [tim@creationix.com](author)
    1. [mail@substack.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/creationix/jsonparse


1. Notes



#### **json-schema (0.2.3)**

1. Description
    JSON Schema validation and specifications


1. Licenses
    1. **Multi-license:** Academic Free License 3.0 (AFL) *OR* BSD 3-Clause License (Revised)
    1. http://trac.dojotoolkit.org/browser/dojo/trunk/LICENSE#L13, http://trac.dojotoolkit.org/browser/dojo/trunk/LICENSE#L43


1. Authors
    1. [kriszyp@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved, Open Source,OSI-Approved,Permissive,


1. Other Licenses
    1. MIT License (Expat)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://github.com/kriszyp/json-schema


1. Notes



#### **json-schema-traverse (0.3.1)**

1. Description
    Traverse JSON Schema passing each schema object to callback


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [e.poberezkin@me.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/json-schema-traverse


1. Notes



#### **JSONStream (1.3.1)**

1. Description
    rawStream.pipe(JSONStream.parse()).pipe(streamOfObjects)


1. Licenses
    1. Apache License 2.0 (Apache-2.0)
    1. MIT License (Expat)
    1. Dual-license


1. Authors
    1. [dominic.tarr@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://github.com/dominictarr/JSONStream


1. Notes



#### **json-stringify-safe (5.0.1)**

1. Description
    Like JSON.stringify, but doesn't blow up on circular refs.


1. Licenses
    1. **Multi-license:**  ISC License *OR* MIT License (Expat)


1. Authors
    1. [i@izs.me](author)
    1. [andri@dot.ee](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/json-stringify-safe


1. Notes



#### **jsprim (1.4.1)**

1. Description
    utilities for primitive JavaScript types


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [dap@cs.brown.edu](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/davepacheco/node-jsprim


1. Notes



#### **js-tokens (3.0.2)**

1. Description
    A regex that tokenizes JavaScript.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [simon.lydell@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/lydell/js-tokens#readme


1. Notes



#### **kind-of (4.0.0)**

1. Description
    Get the native type of a value.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [brian.woodward@gmail.com](author)
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/kind-of


1. Notes



#### **klaw (1.3.1)**

1. Description
    File system walker with Readable stream interface.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [opensrc@ryanzim.com](author)
    1. [jprichardson@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jprichardson/node-klaw#readme


1. Notes



#### **latest-version (3.1.0)**

1. Description
    Get the latest version of a npm package


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/latest-version


1. Notes



#### **lazy-cache (2.0.2)**

1. Description
    Cache requires to be lazy-loaded when needed.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)
    1. [brian.woodward@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/lazy-cache


1. Notes



#### **list-item (1.1.1)**

1. Description
    Generate a single formatted list item, allowing you to easily generate lists with proper indentation, bullets, numbers or other leading characters.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)
    1. [adjohnson916@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/list-item


1. Notes



#### **load-json-file (2.0.0)**

1. Description
    Read and parse a JSON file


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/load-json-file#readme


1. Notes



#### **locate-path (2.0.0)**

1. Description
    Get the first path that exists on disk of multiple paths


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/locate-path


1. Notes



#### **lodash.camelcase (4.3.0)**

1. Description
    The lodash method `_.camelCase` exported as a module.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [john.david.dalton@gmail.com](author)
    1. [mathias@qiwi.be](author)
    1. [blaine@iceddev.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. See-URL


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://lodash.com/


1. Notes



#### **lodash._reinterpolate (3.0.0)**

1. Description
    The modern build of lodash’s internal `reInterpolate` as a module.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [john.david.dalton@gmail.com](author)
    1. [github@kitcambridge.be](author)
    1. [mathias@qiwi.be](author)
    1. [blaine@iceddev.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. See-URL


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://lodash.com/


1. Notes



#### **lodash.template (4.4.0)**

1. Description
    The lodash method `_.template` exported as a module.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [john.david.dalton@gmail.com](author)
    1. [mathias@qiwi.be](author)
    1. [blaine@iceddev.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. See-URL


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://lodash.com/


1. Notes



#### **lodash.templatesettings (4.1.0)**

1. Description
    The lodash method `_.templateSettings` exported as a module.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [john.david.dalton@gmail.com](author)
    1. [mathias@qiwi.be](author)
    1. [blaine@iceddev.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. See-URL


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://lodash.com/


1. Notes



#### **lodash.upperfirst (4.3.1)**

1. Description
    The lodash method `_.upperFirst` exported as a module.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [john.david.dalton@gmail.com](author)
    1. [mathias@qiwi.be](author)
    1. [blaine.bublitz@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. See-URL


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/lodash.upperfirst


1. Notes



#### **lodash.zip (4.2.0)**

1. Description
    The lodash method `_.zip` exported as a module.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [john.david.dalton@gmail.com](author)
    1. [mathias@qiwi.be](author)
    1. [blaine@iceddev.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. See-URL


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/lodash.zip


1. Notes



#### **log-symbols (2.1.0)**

1. Description
    Colored symbols for various log levels. Example: ✔︎ success


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/log-symbols


1. Notes



#### **longest (1.0.1)**

1. Description
    Get the longest item in an array.


1. Licenses
    1. https://github.com/jonschlinkert/longest/blob/master/LICENSE
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)
    1. [snnskwtnb@gmail.com](author)
    1. [brian.woodward@gmail.com](author)


1. License tags
    1. , Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/longest


1. Notes



#### **loose-envify (1.3.1)**

1. Description
    Fast (and loose) selective `process.env` replacer using js-tokens instead of an AST


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [zertosh@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/zertosh/loose-envify


1. Notes



#### **loud-rejection (1.6.0)**

1. Description
    Make unhandled promise rejections fail loudly instead of the default silent fail


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [james@talmage.io](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/loud-rejection


1. Notes



#### **lowercase-keys (1.0.0)**

1. Description
    Lowercase the keys of an object


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/lowercase-keys


1. Notes



#### **lru-cache (4.1.1)**

1. Description
    A cache object that deletes the least-recently-used items.


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [isaacs@npmjs.com](author)
    1. [ogd@aoaioxxysz.net](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/node-lru-cache#readme


1. Notes



#### **map-obj (1.0.1)**

1. Description
    Map object keys and values into a new object


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/map-obj


1. Notes



#### **markdown-link (0.1.1)**

1. Description
    Micro util for generating a single markdown link.


1. Licenses
    1. MIT License (Expat)
    1. https://github.com/jonschlinkert/markdown-link/blob/master/LICENSE


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/markdown-link


1. Notes



#### **markdown-toc (1.2.0)**

1. Description
    Generate a markdown TOC (table of contents) with Remarkable.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [brian.woodward@gmail.com](author)
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/markdown-toc


1. Notes



#### **mem-fs (1.1.3)**

1. Description
    Simple in-memory vinyl file store


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [admin@simonboudrias.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/mem-fs


1. Notes



#### **mem-fs-editor (3.0.2)**

1. Description
    File edition helpers working on top of mem-fs


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [admin@simonboudrias.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/mem-fs-editor


1. Notes



#### **meow (3.7.0)**

1. Description
    CLI app helper


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/meow#readme


1. Notes



#### **merge-and-concat (1.0.2)**

1. Description
    Merge objects and concatenating arrays inside them


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [iamstarkov@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/merge-and-concat


1. Notes



#### **mime-db (1.30.0)**

1. Description
    Media Type Database


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [doug@somethingdoug.com](author)
    1. [jonathanrichardong@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. Apache License 2.0 (Apache-2.0)
    1. **Multi-license:** CMU License *OR* Common Public License 1.0 (CPL-1.0) *OR* HP-possibility *OR* Microsoft Public License (Ms-PL) *OR* Sun Public License v1.0 (SPL-1.0)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jshttp/mime-db


1. Notes



#### **mime-types (2.1.17)**

1. Description
    The ultimate javascript content-type utility.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [fishrock123@rocketmail.com](author)
    1. [doug@somethingdoug.com](author)
    1. [jonathanrichardong@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jshttp/mime-types


1. Notes



#### **mimic-fn (1.1.0)**

1. Description
    Make a function mimic another one


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/mimic-fn


1. Notes



#### **mimic-response (1.0.0)**

1. Description
    Mimic a Node.js HTTP response stream


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/mimic-response


1. Notes



#### **minimatch (3.0.4)**

1. Description
    a glob matcher in javascript


1. Licenses
    1. **Multi-license:**  ISC License *OR* MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/minimatch#readme


1. Notes



#### **minimist (1.2.0)**

1. Description
    parse argument options


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mail@substack.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/substack/minimist


1. Notes



#### **mixin-deep (1.2.0)**

1. Description
    Deeply mix the properties of objects into the first object. Like merge-deep, but doesn't clone.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/mixin-deep


1. Notes



#### **mkdirp (0.5.1)**

1. Description
    Recursively mkdir, like `mkdir -p`


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mail@substack.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/substack/node-mkdirp#readme


1. Notes



#### **modify-values (1.0.0)**

1. Description
    Modify the values of an object


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/modify-values


1. Notes



#### **ms (2.0.0)**

1. Description
    Tiny ms conversion utility


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [leo@zeit.co](author)
    1. [rauchg@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/guille/ms.js


1. Notes



#### **multimatch (2.1.0)**

1. Description
    Extends minimatch.match() with support for multiple patterns


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/multimatch


1. Notes



#### **mute-stream (0.0.7)**

1. Description
    Bytes go in, but they don't come out (when muted).


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/mute-stream#readme


1. Notes



#### **normalize-package-data (2.4.0)**

1. Description
    Normalizes data that can be found in package.json files.


1. Licenses
    1. BSD 3-Clause License (Revised)
    1. BSD 2-Clause License (FreeBSD/Simplified)
    1. MIT License (Expat)


1. Authors
    1. [me@re-becca.org](author)
    1. [isaacs@npmjs.com](author)
    1. [merynstol@gmail.com](author)
    1. [ogd@aoaioxxysz.net](author)
    1. [kat@sykosomatic.org](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/npm/normalize-package-data#readme


1. Notes



#### **npm-name (3.1.0)**

1. Description
    Check whether a package name is available on npm


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/npm-name


1. Notes



#### **npm-run-path (2.0.2)**

1. Description
    Get your PATH prepended with locally installed binaries


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/npm-run-path


1. Notes



#### **number-is-nan (1.0.1)**

1. Description
    ES6 Number.isNaN() ponyfill


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/number-is-nan#readme


1. Notes



#### **oauth-sign (0.8.2)**

1. Description
    OAuth 1 signing. Formerly a vendor lib in mikeal/request, now a standalone module.


1. Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [mikeal.rogers@gmail.com](author)
    1. [jnylen@gmail.com](author)
    1. [simeonvelichkov@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mikeal/oauth-sign#readme


1. Notes



#### **object-assign (4.1.1)**

1. Description
    ES6 Object.assign() ponyfill


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/object-assign#readme


1. Notes



#### **object.pick (1.3.0)**

1. Description
    Returns a filtered copy of an object with only the specified keys, like `pick` from lo-dash / underscore.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [blaine.bublitz@gmail.com](author)
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/object.pick


1. Notes



#### **once (1.4.0)**

1. Description
    Run a function exactly one time


1. Licenses
    1. **Multi-license:**  ISC License *OR* MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/once#readme


1. Notes



#### **onetime (2.0.1)**

1. Description
    Only call a function once


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/onetime


1. Notes



#### **optimist (0.6.1)**

1. Description
    Light-weight option parsing with an argv hash. No optstrings attached.


1. Licenses
    1. **Multi-license:** MIT License (Expat) *OR* X11 License


1. Authors
    1. [mail@substack.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/substack/node-optimist


1. Notes



#### **os-homedir (1.0.2)**

1. Description
    io.js 2.3.0 os.homedir() ponyfill


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/os-homedir


1. Notes



#### **os-shim (0.1.3)**

1. Description
    Native OS module API shim for older node.js versions


1. Licenses
    1. MIT License (Expat)
    1. M


1. Authors
    1. [tomas@aparicio.me](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/os-shim


1. Notes



#### **os-tmpdir (1.0.2)**

1. Description
    Node.js os.tmpdir() ponyfill


1. Licenses
    1. MIT License (Expat)
    1. See-doc(OTHER)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/os-tmpdir


1. Notes



#### **package-json (4.0.1)**

1. Description
    Get the package.json of a package from the npm registry


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [rexxars@gmail.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/package-json


1. Notes



#### **parse-github-repo-url (1.4.1)**

1. Description
    Parse a GitHub URL for user/project@version


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [gleb.bahmutov@gmail.com](author)
    1. [fishrock123@rocketmail.com](author)
    1. [jonathanrichardong@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/parse-github-repo-url


1. Notes



#### **parse-json (2.2.0)**

1. Description
    Parse JSON with more helpful errors


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/parse-json


1. Notes



#### **parse-url (1.3.11)**

1. Description
    An advanced url parser supporting git urls too.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bizauionica@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/parse-url


1. Notes



#### **path-exists (3.0.0)**

1. Description
    Check if a path exists


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/path-exists


1. Notes



#### **path-is-absolute (1.0.1)**

1. Description
    Node.js 0.12 path.isAbsolute() ponyfill


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/path-is-absolute


1. Notes



#### **path-is-inside (1.0.2)**

1. Description
    Tests whether one path is inside another path


1. Licenses
    1. Dual-license
    1. MIT License (Expat)
    1. Do What The F*ck You Want To Public License (WTFPL)


1. Authors
    1. [domenic@domenicdenicola.com](author)


1. License tags
    1. , Open Source,OSI-Approved,Permissive, Public Domain


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/domenic/path-is-inside


1. Notes



#### **path-key (2.0.1)**

1. Description
    Get the PATH environment variable key cross-platform


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/path-key


1. Notes



#### **path-parse (1.0.5)**

1. Description
    Node.js path.parse() ponyfill


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [jbgutierrez@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/path-parse


1. Notes



#### **path-type (2.0.0)**

1. Description
    Check if a path is a file, directory, or symlink


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/path-type


1. Notes



#### **p-cancelable (0.3.0)**

1. Description
    Create a promise that can be canceled


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/p-cancelable


1. Notes



#### **performance-now (2.1.0)**

1. Description
    Implements performance.now (based on process.hrtime).


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [merynstol@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/performance-now


1. Notes



#### **p-finally (1.0.0)**

1. Description
    `Promise#finally()` ponyfill - Invoked when the promise is settled regardless of outcome


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/p-finally


1. Notes



#### **pify (3.0.0)**

1. Description
    Promisify a callback-style function


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/pify


1. Notes



#### **pinkie (2.0.4)**

1. Description
    Itty bitty little widdle twinkie pinkie ES2015 Promise implementation


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [floatdrop@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/floatdrop/pinkie


1. Notes



#### **pinkie-promise (2.0.1)**

1. Description
    ES2015 Promise ponyfill


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [floatdrop@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/floatdrop/pinkie-promise


1. Notes



#### **p-limit (1.1.0)**

1. Description
    Run multiple promise-returning & async functions with limited concurrency


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/p-limit


1. Notes



#### **p-locate (2.0.0)**

1. Description
    Get the first fulfilled promise that satisfies the provided testing function


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/p-locate


1. Notes



#### **prepend-http (1.0.4)**

1. Description
    Prepend http:// to humanized URLs like todomvc.com and localhost


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/prepend-http#readme


1. Notes



#### **pretty-bytes (4.0.2)**

1. Description
    Convert bytes to a human readable string: 1337 → 1.34 kB


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/pretty-bytes


1. Notes



#### **process-nextick-args (1.0.7)**

1. Description
    process.nextTick but always with args


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [calvin.metcalf@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/calvinmetcalf/process-nextick-args


1. Notes



#### **promise (7.3.1)**

1. Description
    Bare bones Promises/A+ implementation


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [forbes@lindesay.co.uk](author)
    1. [nathan@nathan7.eu](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/then/promise


1. Notes



#### **protocols (1.4.6)**

1. Description
    Get the protocols of an input url.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bizauionica@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/protocols


1. Notes



#### **prr (0.0.0)**

1. Description
    A better Object.defineProperty()


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [rod@vagg.org](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/rvagg/prr


1. Notes



#### **pseudomap (1.0.2)**

1. Description
    A thing that is a lot like ES6 `Map`, but without iterators, for use in environments where `for..of` syntax and `Map` are not available.


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/pseudomap#readme


1. Notes



#### **p-timeout (1.2.0)**

1. Description
    Timeout a promise after a specified amount of time


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/p-timeout


1. Notes



#### **punycode (1.4.1)**

1. Description
    A robust Punycode converter that fully complies to RFC 3492 and RFC 5891, and works on nearly all JavaScript platforms.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mathias@qiwi.be](author)
    1. [wizard@roborooter.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://mths.be/punycode


1. Notes



#### **q (1.5.1)**

1. Description
    A library for promises (CommonJS/Promises/A,B,D)


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [kris.kowal@cixar.com](author)
    1. [domenic@domenicdenicola.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/kriskowal/q


1. Notes



#### **qs (6.5.1)**

1. Description
    A querystring parser that supports nesting and arrays, with a depth limit


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [ljharb@gmail.com](author)
    1. [eran@hammer.io](author)
    1. [quitlahok@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/ljharb/qs


1. Notes
    1. Found license in currently used version.



#### **ramda (0.23.0)**

1. Description
    A practical functional library for JavaScript programmers.


1. Licenses
    1. MIT License (Expat)
    1. Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)


1. Authors
    1. [notpmoc84@hotmail.com](author)
    1. [kwallace@gmail.com](author)
    1. [raine.virta@gmail.com](author)
    1. [schristopher@konputa.com](author)
    1. [aromano@preemptsecurity.com](author)
    1. [scott@sauyet.com](author)
    1. [m_hur@yahoo.com](author)
    1. [dc@davidchambers.me](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Creative Commons


1. Other Licenses
    1. Apache License 2.0 (Apache-2.0)
    1. BSD 3-Clause License (Revised)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/ramda


1. Notes



#### **randomatic (1.1.7)**

1. Description
    Generate randomized strings of a specified length, fast. Only the length is necessary, but you can optionally generate patterns using any combination of numeric, alpha-numeric, alphabetical, special or custom characters.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [brian.woodward@gmail.com](author)
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/randomatic


1. Notes



#### **readable-stream (2.3.3)**

1. Description
    Streams3, a user-land copy of the stream library from iojs v2.x


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [build@iojs.org](author)
    1. [hello@matteocollina.com](author)
    1. [calvin.metcalf@gmail.com](author)
    1. [i@izs.me](author)
    1. [nathan@tootallnate.net](author)
    1. [rod@vagg.org](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. UnclassifiedLicense


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/nodejs/readable-stream#readme


1. Notes



#### **read-chunk (2.1.0)**

1. Description
    Read a chunk from a file


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/read-chunk


1. Notes



#### **read-pkg (2.0.0)**

1. Description
    Read a package.json file


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/read-pkg


1. Notes



#### **read-pkg-up (2.0.0)**

1. Description
    Read the closest package.json file


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/read-pkg-up


1. Notes



#### **rechoir (0.6.2)**

1. Description
    Require any supported file as a node module.


1. Licenses
    1. MIT License (Expat)
    1. https://github.com/tkellen/node-rechoir/blob/master/LICENSE


1. Authors
    1. [tyler@sleekcode.net](author)
    1. [blaine@iceddev.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/tkellen/node-rechoir


1. Notes



#### **redent (1.0.0)**

1. Description
    Strip redundant indentation and indent the string


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/redent


1. Notes



#### **regenerator-runtime (0.11.0)**

1. Description
    Runtime for Regenerator-compiled generator and async functions.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [bn@cs.stanford.edu](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. BSD 3-Clause License (Revised)
    1. See-URL


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/regenerator-runtime


1. Notes



#### **registry-auth-token (3.3.1)**

1. Description
    Get the auth token set for an npm registry (if any)


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [git@leipert.io](author)
    1. [rexxars@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/registry-auth-token


1. Notes



#### **registry-url (3.1.0)**

1. Description
    Get the set npm registry URL


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/registry-url


1. Notes



#### **remarkable (1.7.1)**

1. Description
    Markdown parser, done right. 100% Commonmark support, extensions, syntax plugins, high speed - all in one.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [brian.woodward@gmail.com](author)
    1. [joey@byjoeybaker.com](author)
    1. [github@sellside.com](author)
    1. [nikolas@gnu.org](author)
    1. [fladset@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/remarkable


1. Notes



#### **remove-trailing-separator (1.1.0)**

1. Description
    Removes separators from the end of the string.


1. Licenses
    1. MIT License (Expat)
    1.  ISC License


1. Authors
    1. [darsain@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/remove-trailing-separator


1. Notes



#### **repeat-element (1.1.2)**

1. Description
    Create an array by repeating the given value n times.


1. Licenses
    1. MIT License (Expat)
    1. https://github.com/jonschlinkert/repeat-element/blob/master/LICENSE


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/repeat-element


1. Notes



#### **repeating (2.0.1)**

1. Description
    Repeat a string - fast


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/repeating#readme


1. Notes



#### **repeat-string (1.6.1)**

1. Description
    Repeat the given string n times. Fastest implementation for repeating a string.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/repeat-string


1. Notes



#### **replace-ext (1.0.0)**

1. Description
    Replaces a file extension with another one


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [contact@wearefractal.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://github.com/wearefractal/replace-ext


1. Notes



#### **restore-cursor (2.0.0)**

1. Description
    Gracefully restore the CLI cursor on exit


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/restore-cursor#readme


1. Notes



#### **right-align (0.1.3)**

1. Description
    Right-align the text in a string.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/right-align


1. Notes



#### **run-async (2.3.0)**

1. Description
    Utility method to run function either synchronously or asynchronously using the common `this.async()` style.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [admin@simonboudrias.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/SBoudrias/run-async


1. Notes



#### **rx (4.1.0)**

1. Description
    Library for composing asynchronous and event-based operations in JavaScript


1. Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [vesa@vilhonen.com](author)
    1. [matthew.podwysocki@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. See-file


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/rx


1. Notes



#### **rx-lite (4.0.8)**

1. Description
    Lightweight library for composing asynchronous and event-based operations in JavaScript


1. Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [matthew.podwysocki@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/Reactive-Extensions/RxJS


1. Notes



#### **rx-lite-aggregates (4.0.8)**

1. Description
    Lightweight library with aggregate functions for composing asynchronous and event-based operations in JavaScript


1. Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [matthew.podwysocki@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/rx-lite-aggregates


1. Notes



#### **safe-buffer (5.1.1)**

1. Description
    Safer Node.js Buffer API


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [feross@feross.org](author)
    1. [mathiasbuus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/safe-buffer


1. Notes



#### **scoped-regex (1.0.0)**

1. Description
    Regular expression for matching scoped npm package names


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/scoped-regex


1. Notes



#### **semver (5.4.1)**

1. Description
    The semantic version parser used by npm.


1. Licenses
    1. MIT License (Expat)
    1.  ISC License


1. Authors
    1. [i@izs.me](author)
    1. [ogd@aoaioxxysz.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/npm/node-semver#readme


1. Notes



#### **semver-diff (2.1.0)**

1. Description
    Get the diff type of two semver versions: 0.0.1 0.0.2 → patch


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/semver-diff


1. Notes



#### **set-getter (0.1.0)**

1. Description
    Create nested getter properties and any intermediary dot notation (`'a.b.c'`) paths


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [brian.woodward@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/set-getter


1. Notes



#### **set-value (0.4.3)**

1. Description
    Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/set-value


1. Notes



#### **shebang-command (1.2.0)**

1. Description
    Get the command from a shebang


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [kevinmartensson@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/shebang-command


1. Notes



#### **shebang-regex (1.0.0)**

1. Description
    Regular expression for matching a shebang line


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/shebang-regex


1. Notes



#### **shelljs (0.7.8)**

1. Description
    Portable Unix shell commands for Node.js


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [arturadib@gmail.com](author)
    1. [freitagbr@gmail.com](author)
    1. [ntfschr@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. MIT License (Expat)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://github.com/shelljs/shelljs


1. Notes



#### **signal-exit (3.0.2)**

1. Description
    when you want to fire an event no matter how a process exits.


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [ben@npmjs.com](author)
    1. [isaacs@npmjs.com](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/tapjs/signal-exit


1. Notes



#### **sntp (2.1.0)**

1. Description
    SNTP Client


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [eran@hueniverse.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/hapijs/hapi#readme


1. Notes



#### **sort-asc (0.2.0)**

1. Description
    Sort array elements in ascending order.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/sort-asc


1. Notes



#### **sort-desc (0.2.0)**

1. Description
    Sort array elements in descending order.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/sort-desc


1. Notes



#### **sort-object (3.0.2)**

1. Description
    Sort the keys in an object.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [brian.woodward@gmail.com](author)
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/sort-object


1. Notes



#### **sort-scripts (1.0.0)**

1. Description
    Sort a map of scripts in a logical order


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [patrick@daftdevelopers.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/sort-scripts


1. Notes



#### **source-map (0.5.7)**

1. Description
    Generates and consumes source maps


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [tom@tromey.com](author)
    1. [ejpbruel@gmail.com](author)
    1. [nfitzgerald@mozilla.com](author)
    1. [dherman@mozilla.com](author)
    1. [fitzgen@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mozilla/source-map


1. Notes



#### **spawn-sync (1.0.15)**

1. Description
    Prollyfill for child_process.spawnSync


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [forbes@lindesay.co.uk](author)
    1. [leonardo.balter@gmail.com](author)
    1. [bryan@bryanenglish.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/spawn-sync


1. Notes



#### **spdx-correct (1.0.2)**

1. Description
    correct invalid SPDX identifiers


1. Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [kyle@kemitchell.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/kemitchell/spdx-correct.js#readme


1. Notes
    1. fp



#### **spdx-expression-parse (1.0.4)**

1. Description
    parse SPDX license expressions


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [kyle@kemitchell.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/kemitchell/spdx-expression-parse.js#readme


1. Notes
    1. Not statically linked to project.



#### **spdx-license-ids (1.2.2)**

1. Description
    A list of SPDX license identifiers


1. Licenses
    1. Creative Commons CC0 1.0 Universal (CC-0)


1. Authors
    1. [snnskwtnb@gmail.com](author)


1. License tags
    1. Creative Commons,Public Domain


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/shinnn/spdx-license-ids#readme


1. Notes
    1. Not statically linked to project.



#### **split (1.0.1)**

1. Description
    split a Text Stream into a Line Stream


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [dominic.tarr@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://github.com/dominictarr/split


1. Notes



#### **split2 (2.2.0)**

1. Description
    split a Text Stream into a Line Stream, using Stream 3


1. Licenses
    1. **Multi-license:** MIT License (Expat) *OR*  ISC License


1. Authors
    1. [hello@matteocollina.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Permissive,OSI-Approved,Open Source


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/split2


1. Notes



#### **sprintf-js (1.0.3)**

1. Description
    JavaScript sprintf implementation


1. Licenses
    1. BSD 3-Clause License (Revised)


1. Authors
    1. [hello@alexei.ro](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/alexei/sprintf.js#readme


1. Notes



#### **sshpk (1.13.1)**

1. Description
    A library for finding and using SSH public keys


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [alex@cooperi.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. RSA-possibility


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/arekinath/node-sshpk#readme


1. Notes



#### **string_decoder (1.0.3)**

1. Description
    The string_decoder module from Node core


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [calvin.metcalf@gmail.com](author)
    1. [hello@matteocollina.com](author)
    1. [build@iojs.org](author)
    1. [rod@vagg.org](author)
    1. [substack@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/rvagg/string_decoder


1. Notes



#### **stringstream (0.0.5)**

1. Description
    Encode and decode streams into string streams


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [michael.hart.au@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mhart/StringStream#readme


1. Notes



#### **string-template (0.2.1)**

1. Description
    A simple string template function based on named or indexed arguments


1. Licenses
    1. MIT License (Expat)
    1. http://github.com/Matt-Esch/string-template/raw/master/LICENSE


1. Authors
    1. [matt@mattesch.info](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/Matt-Esch/string-template


1. Notes



#### **string-width (2.1.1)**

1. Description
    Get the visual width of a string - the number of columns required to display it


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/string-width


1. Notes



#### **strip-ansi (4.0.0)**

1. Description
    Strip ANSI escape codes


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [threedeecee@gmail.com](author)
    1. [i.am.qix@gmail.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/strip-ansi


1. Notes



#### **strip-bom (3.0.0)**

1. Description
    Strip UTF-8 byte order mark (BOM) from a string/buffer


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/strip-bom


1. Notes



#### **strip-bom-stream (2.0.0)**

1. Description
    Strip UTF-8 byte order mark (BOM) from a stream


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/strip-bom-stream


1. Notes



#### **strip-color (0.1.0)**

1. Description
    Strip ANSI color codes from a string. No dependencies.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/strip-color


1. Notes



#### **strip-eof (1.0.0)**

1. Description
    Strip the End-Of-File (EOF) character from a string/buffer


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/strip-eof


1. Notes



#### **strip-indent (1.0.1)**

1. Description
    Strip leading whitespace from each line in a string


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/strip-indent


1. Notes



#### **strip-json-comments (2.0.1)**

1. Description
    Strip comments from JSON. Lets you use comments in your JSON files!


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/strip-json-comments#readme


1. Notes



#### **supports-color (4.5.0)**

1. Description
    Detect whether a terminal supports color


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [i.am.qix@gmail.com](author)
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/chalk/supports-color


1. Notes



#### **sync-request (3.0.1)**

1. Description
    Make synchronous web requests


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [forbes@lindeay.co.uk](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/sync-request


1. Notes



#### **term-size (1.2.0)**

1. Description
    Reliably get the terminal window size


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/term-size


1. Notes



#### **text-extensions (1.7.0)**

1. Description
    List of text file extensions


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)
    1. [contact@arthurverschaeve.be](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/text-extensions


1. Notes



#### **textextensions (2.1.0)**

1. Description
    A package that contains an array of every single file extension there is for text files


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [b@lupton.cc](author)
    1. [us@bevry.me](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/textextensions


1. Notes



#### **text-table (0.2.0)**

1. Description
    borderless text tables with alignment


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mail@substack.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/substack/text-table


1. Notes



#### **then-request (2.2.0)**

1. Description
    A request library that returns promises, inspired by request


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [forbes@lindesay.co.uk](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/then-request


1. Notes



#### **through2 (2.0.3)**

1. Description
    A tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [rod@vagg.org](author)
    1. [bryce@ravenwall.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/rvagg/through2#readme


1. Notes



#### **through (2.3.8)**

1. Description
    simplified stream construction


1. Licenses
    1. MIT License (Expat)
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [dominic.tarr@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/dominictarr/through


1. Notes



#### **timed-out (4.0.1)**

1. Description
    Emit `ETIMEDOUT` or `ESOCKETTIMEDOUT` when ClientRequest is hanged


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [floatdrop@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/timed-out


1. Notes



#### **tmp (0.0.33)**

1. Description
    Temporary file and directory creator


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [npm@spam.raszi.hu](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://github.com/raszi/node-tmp


1. Notes



#### **to-fast-properties (2.0.0)**

1. Description
    Force V8 to use fast properties for an object


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/to-fast-properties


1. Notes



#### **toml (2.3.3)**

1. Description
    TOML parser for Node.js (parses TOML spec v0.4.0)


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [brandon@brandontilley.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/toml


1. Notes



#### **to-object-path (0.3.0)**

1. Description
    Create an object path from a list or array of strings.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/to-object-path


1. Notes



#### **tough-cookie (2.3.3)**

1. Description
    RFC6265 Cookies and Cookie Jar for node.js


1. Licenses
    1. **Multi-license:** BSD 3-Clause License (Revised) *OR* Mozilla Public License 2.0 (MPL-2.0)


1. Authors
    1. [awaterma@awaterma.net](author)
    1. [jstash@gmail.com](author)
    1. [emily@contactvibe.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Copyleft


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/SalesforceEng/tough-cookie


1. Notes



#### **travis-config-keys (1.0.3)**

1. Description
    Travis configs properties in correct order


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [iamstarkov@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/travis-config-keys


1. Notes



#### **trim-newlines (1.0.0)**

1. Description
    Trim newlines from the start and/or end of a string


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/trim-newlines


1. Notes



#### **trim-off-newlines (1.0.1)**

1. Description
    Similar to String#trim() but removes only newlines


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [maochenyan@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/trim-off-newlines


1. Notes



#### **trim-right (1.0.1)**

1. Description
    Similar to String#trim() but removes only whitespace on the right


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/trim-right


1. Notes



#### **tunnel-agent (0.6.0)**

1. Description
    HTTP proxy tunneling agent. Formerly part of mikeal/request, now a standalone module.


1. Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [mikeal.rogers@gmail.com](author)
    1. [jnylen@gmail.com](author)
    1. [fkschott@gmail.com](author)
    1. [simeonvelichkov@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/mikeal/tunnel-agent#readme


1. Notes



#### **tweetnacl (0.14.5)**

1. Description
    Port of TweetNaCl cryptographic library to JavaScript


1. Licenses


1. Authors
    1. [dmitry@codingrobots.com](author)


1. License tags
    1.


1. Other Licenses
    1. Public Domain


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://dchest.github.io/tweetnacl-js


1. Notes



#### **typedarray (0.0.6)**

1. Description
    TypedArray polyfill for old browsers


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mail@substack.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/substack/typedarray


1. Notes



#### **typewise (1.0.3)**

1. Description
    Typewise-structured sorting for arbitrarily complex data structures


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [dean@deanlandolt.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/typewise


1. Notes



#### **typewise-core (1.2.0)**

1. Description
    Core typewise type system functionality


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [dean@deanlandolt.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/typewise-core


1. Notes



#### **uglify-js (2.8.29)**

1. Description
    JavaScript parser, mangler/compressor and beautifier toolkit


1. Licenses
    1. BSD 3-Clause License (Revised)
    1. BSD 2-Clause License (FreeBSD/Simplified)


1. Authors
    1. [alexlamsl@gmail.com](author)
    1. [mihai.bazon@gmail.com](author)
    1. [rvanvelzen1@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://lisperator.net/uglifyjs


1. Notes



#### **uglify-to-browserify (1.0.2)**

1. Description
    A transform to make UglifyJS work in browserify.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [forbes@lindesay.co.uk](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/ForbesLindesay/uglify-to-browserify


1. Notes



#### **underscore (1.7.0)**

1. Description
    JavaScript's functional programming helper library.


1. Licenses
    1. MIT License (Expat)
    1. https://raw.github.com/jashkenas/underscore/master/LICENSE


1. Authors
    1. [jashkenas@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive,


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://underscorejs.org


1. Notes



#### **underscore.string (2.4.0)**

1. Description
    String manipulation extensions for Underscore.js javascript library.


1. Licenses
    1. undefined
    1. MIT License (Expat)


1. Authors
    1. [edtsech@gmail.com](author)
    1. [rwz@duckroll.ru](author)
    1. [esa-matti@suuronen.org](author)
    1. [schtoeffel@gmail.com](author)


1. License tags
    1. , Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://epeli.github.com/underscore.string/


1. Notes



#### **union-value (0.2.4)**

1. Description
    Set an array of unique values as the property of an object. Supports setting deeply nested properties using using object-paths/dot notation.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/union-value


1. Notes



#### **unique-string (1.0.0)**

1. Description
    Generate a unique random string


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/unique-string


1. Notes



#### **untildify (3.0.2)**

1. Description
    Convert a tilde path to an absolute path: ~/dev => /Users/sindresorhus/dev


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)
    1. [me@silverwind.io](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/untildify


1. Notes



#### **unzip-response (2.0.1)**

1. Description
    Unzip a HTTP response if needed


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)
    1. [floatdrop@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/unzip-response


1. Notes



#### **url-parse-lax (1.0.0)**

1. Description
    url.parse() with support for protocol-less URLs & IPs


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/url-parse-lax


1. Notes



#### **url-to-options (1.0.1)**

1. Description
    Convert a WHATWG URL to an http(s).request options object.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [contact@svachon.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/url-to-options


1. Notes



#### **user-home (2.0.0)**

1. Description
    Get the path to the user home directory


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/user-home


1. Notes



#### **util-deprecate (1.0.2)**

1. Description
    The Node.js `util.deprecate()` function with browser support


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [nathan@tootallnate.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/TooTallNate/util-deprecate


1. Notes



#### **uuid (3.1.0)**

1. Description
    Rigorous implementation of RFC4122 (v1 and v4) UUIDs.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [robert@broofa.com](author)
    1. [shtylman@gmail.com](author)
    1. [vincent.voyer@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. See-URL


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/shtylman/node-uuid


1. Notes



#### **validate-npm-package-license (3.0.1)**

1. Description
    Give me a string and I'll tell you if it's a valid npm package license string


1. Licenses
    1. Apache License 2.0 (Apache-2.0)


1. Authors
    1. [kyle@kemitchell.com](author)
    1. [ogd@aoaioxxysz.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/kemitchell/validate-npm-package-license.js#readme


1. Notes
    1. Apache 2.0



#### **verror (1.10.0)**

1. Description
    richer JavaScript errors


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [dap@cs.brown.edu](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/davepacheco/node-verror


1. Notes



#### **vinyl (2.1.0)**

1. Description
    A virtual file format


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [yo@contra.io](author)
    1. [blaine.bublitz@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    http://github.com/gulpjs/vinyl


1. Notes



#### **vinyl-file (2.0.0)**

1. Description
    Create a vinyl file from an actual file


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/sindresorhus/vinyl-file


1. Notes



#### **which (1.3.0)**

1. Description
    Like which(1) unix command. Find the first instance of an executable in the PATH.


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/node-which#readme


1. Notes



#### **widest-line (1.0.0)**

1. Description
    Get the visual width of the widest line in a string - the number of columns required to display it


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/widest-line


1. Notes



#### **window-size (0.1.0)**

1. Description
    Reliable way to to get the height and width of the terminal/console in a node.js environment.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [github@sellside.com](author)
    1. [brian.woodward@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/window-size


1. Notes



#### **wordwrap (0.0.3)**

1. Description
    Wrap those words. Show them at what columns to start and stop.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [mail@substack.net](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/substack/node-wordwrap#readme


1. Notes



#### **wrappy (1.0.2)**

1. Description
    Callback wrapping utility


1. Licenses
    1. **Multi-license:**  ISC License *OR* MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/npm/wrappy


1. Notes



#### **write (0.2.1)**

1. Description
    Write files to disk, creating intermediate directories if they don't exist.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [brian.woodward@gmail.com](author)
    1. [github@sellside.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/jonschlinkert/write


1. Notes



#### **write-file-atomic (2.3.0)**

1. Description
    Write files in an atomic fashion w/configurable ownership


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [kat@sykosomatic.org](author)
    1. [ogd@aoaioxxysz.net](author)
    1. [me@re-becca.org](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/iarna/write-file-atomic


1. Notes



#### **xdg-basedir (3.0.0)**

1. Description
    Get XDG Base Directory paths


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [sindresorhus@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/xdg-basedir


1. Notes



#### **xtend (4.0.1)**

1. Description
    extend like a boss


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [raynos2@gmail.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/Raynos/xtend


1. Notes



#### **yallist (2.1.2)**

1. Description
    Yet Another Linked List


1. Licenses
    1.  ISC License
    1. MIT License (Expat)


1. Authors
    1. [i@izs.me](author)


1. License tags
    1. Permissive,OSI-Approved,Open Source, Open Source,OSI-Approved,Permissive


1. Other Licenses


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/isaacs/yallist#readme


1. Notes



#### **yamljs (0.3.0)**

1. Description
    Standalone JavaScript YAML 1.2 Parser & Encoder. Works under node.js and all major browsers. Also brings command line YAML/JSON conversion tools.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [contact@jeremyfa.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. BSD 3-Clause License (Revised)


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://www.npmjs.com/package/yamljs


1. Notes



#### **yargs (3.10.0)**

1. Description
    Light-weight option parsing with an argv hash. No optstrings attached.


1. Licenses
    1. MIT License (Expat)


1. Authors
    1. [andrewbgoode@gmail.com](author)
    1. [ben@npmjs.com](author)
    1. [alex.ford@codetunnel.com](author)


1. License tags
    1. Open Source,OSI-Approved,Permissive


1. Other Licenses
    1. X11 License


1. Source
	1. NPM (npmjs.com)


1. Project Url
    https://github.com/bcoe/yargs#readme


1. Notes








## Licenses


### Public Domain


### Mozilla Public License 2.0 (MPL-2.0)
<p>Mozilla Public License, version 2.0 1. Definitions 1.1. “Contributor” means each individual or legal entity that creates, contributes to the creation of, or owns Covered Software.</p><p>1.2. “Contributor Version” means the combination of the Contributions of others (if any) used by a Contributor and that particular Contributor’s Contribution.</p><p>1.3. “Contribution” means Covered Software of a particular Contributor.</p><p>1.4. “Covered Software” means Source Code Form to which the initial Contributor has attached the notice in Exhibit A, the Executable Form of such Source Code Form, and Modifications of such Source Code Form, in each case including portions thereof.</p><p>1.5. “Incompatible With Secondary Licenses” means</p><p>that the initial Contributor has attached the notice described in Exhibit B to the Covered Software; or</p><p>that the Covered Software was made available under the terms of version 1.1 or earlier of the License, but not also under the terms of a Secondary License.</p><p>1.6. “Executable Form” means any form of the work other than Source Code Form.</p><p>1.7. “Larger Work” means a work that combines Covered Software with other material, in a separate file or files, that is not Covered Software.</p><p>1.8. “License” means this document.</p><p>1.9. “Licensable” means having the right to grant, to the maximum extent possible, whether at the time of the initial grant or subsequently, any and all of the rights conveyed by this License.</p><p>1.10. “Modifications” means any of the following:</p><p>any file in Source Code Form that results from an addition to, deletion from, or modification of the contents of Covered Software; or</p><p>any new file in Source Code Form that contains any Covered Software.</p><p>1.11. “Patent Claims” of a Contributor means any patent claim(s), including without limitation, method, process, and apparatus claims, in any patent Licensable by such Contributor that would be infringed, but for the grant of the License, by the making, using, selling, offering for sale, having made, import, or transfer of either its Contributions or its Contributor Version.</p><p>1.12. “Secondary License” means either the GNU General Public License, Version 2.0, the GNU Lesser General Public License, Version 2.1, the GNU Affero General Public License, Version 3.0, or any later versions of those licenses.</p><p>1.13. “Source Code Form” means the form of the work preferred for making modifications.</p><p>1.14. “You” (or “Your”) means an individual or a legal entity exercising rights under this License. For legal entities, “You” includes any entity that controls, is controlled by, or is under common control with You. For purposes of this definition, “control” means (a) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (b) ownership of more than fifty percent (50%) of the outstanding shares or beneficial ownership of such entity.</p><p>2. License Grants and Conditions 2.1. Grants Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license:</p><p>under intellectual property rights (other than patent or trademark) Licensable by such Contributor to use, reproduce, make available, modify, display, perform, distribute, and otherwise exploit its Contributions, either on an unmodified basis, with Modifications, or as part of a Larger Work; and</p><p>under Patent Claims of such Contributor to make, use, sell, offer for sale, have made, import, and otherwise transfer either its Contributions or its Contributor Version.</p><p>2.2. Effective Date The licenses granted in Section 2.1 with respect to any Contribution become effective for each Contribution on the date the Contributor first distributes such Contribution.</p><p>2.3. Limitations on Grant Scope The licenses granted in this Section 2 are the only rights granted under this License. No additional rights or licenses will be implied from the distribution or licensing of Covered Software under this License. Notwithstanding Section 2.1(b) above, no patent license is granted by a Contributor:</p><p>for any code that a Contributor has removed from Covered Software; or</p><p>for infringements caused by: (i) Your and any other third party’s modifications of Covered Software, or (ii) the combination of its Contributions with other software (except as part of its Contributor Version); or</p><p>under Patent Claims infringed by Covered Software in the absence of its Contributions.</p><p>This License does not grant any rights in the trademarks, service marks, or logos of any Contributor (except as may be necessary to comply with the notice requirements in Section 3.4).</p><p>2.4. Subsequent Licenses No Contributor makes additional grants as a result of Your choice to distribute the Covered Software under a subsequent version of this License (see Section 10.2) or under the terms of a Secondary License (if permitted under the terms of Section 3.3).</p><p>2.5. Representation Each Contributor represents that the Contributor believes its Contributions are its original creation(s) or it has sufficient rights to grant the rights to its Contributions conveyed by this License.</p><p>2.6. Fair Use This License is not intended to limit any rights You have under applicable copyright doctrines of fair use, fair dealing, or other equivalents.</p><p>2.7. Conditions Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted in Section 2.1.</p><p>3. Responsibilities 3.1. Distribution of Source Form All distribution of Covered Software in Source Code Form, including any Modifications that You create or to which You contribute, must be under the terms of this License. You must inform recipients that the Source Code Form of the Covered Software is governed by the terms of this License, and how they can obtain a copy of this License. You may not attempt to alter or restrict the recipients’ rights in the Source Code Form.</p><p>3.2. Distribution of Executable Form If You distribute Covered Software in Executable Form then:</p><p>such Covered Software must also be made available in Source Code Form, as described in Section 3.1, and You must inform recipients of the Executable Form how they can obtain a copy of such Source Code Form by reasonable means in a timely manner, at a charge no more than the cost of distribution to the recipient; and</p><p>You may distribute such Executable Form under the terms of this License, or sublicense it under different terms, provided that the license for the Executable Form does not attempt to limit or alter the recipients’ rights in the Source Code Form under this License.</p><p>3.3. Distribution of a Larger Work You may create and distribute a Larger Work under terms of Your choice, provided that You also comply with the requirements of this License for the Covered Software. If the Larger Work is a combination of Covered Software with a work governed by one or more Secondary Licenses, and the Covered Software is not Incompatible With Secondary Licenses, this License permits You to additionally distribute such Covered Software under the terms of such Secondary License(s), so that the recipient of the Larger Work may, at their option, further distribute the Covered Software under the terms of either this License or such Secondary License(s).</p><p>3.4. Notices You may not remove or alter the substance of any license notices (including copyright notices, patent notices, disclaimers of warranty, or limitations of liability) contained within the Source Code Form of the Covered Software, except that You may alter any license notices to the extent required to remedy known factual inaccuracies.</p><p>3.5. Application of Additional Terms You may choose to offer, and to charge a fee for, warranty, support, indemnity or liability obligations to one or more recipients of Covered Software. However, You may do so only on Your own behalf, and not on behalf of any Contributor. You must make it absolutely clear that any such warranty, support, indemnity, or liability obligation is offered by You alone, and You hereby agree to indemnify every Contributor for any liability incurred by such Contributor as a result of warranty, support, indemnity or liability terms You offer. You may include additional disclaimers of warranty and limitations of liability specific to any jurisdiction.</p><p>4. Inability to Comply Due to Statute or Regulation If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Covered Software due to statute, judicial order, or regulation then You must: (a) comply with the terms of this License to the maximum extent possible; and (b) describe the limitations and the code they affect. Such description must be placed in a text file included with all distributions of the Covered Software under this License. Except to the extent prohibited by statute or regulation, such description must be sufficiently detailed for a recipient of ordinary skill to be able to understand it.</p><p>5. Termination 5.1. The rights granted under this License will terminate automatically if You fail to comply with any of its terms. However, if You become compliant, then the rights granted under this License from a particular Contributor are reinstated (a) provisionally, unless and until such Contributor explicitly and finally terminates Your grants, and (b) on an ongoing basis, if such Contributor fails to notify You of the non-compliance by some reasonable means prior to 60 days after You have come back into compliance. Moreover, Your grants from a particular Contributor are reinstated on an ongoing basis if such Contributor notifies You of the non-compliance by some reasonable means, this is the first time You have received notice of non-compliance with this License from such Contributor, and You become compliant prior to 30 days after Your receipt of the notice.</p><p>5.2. If You initiate litigation against any entity by asserting a patent infringement claim (excluding declaratory judgment actions, counter-claims, and cross-claims) alleging that a Contributor Version directly or indirectly infringes any patent, then the rights granted to You by any and all Contributors for the Covered Software under Section 2.1 of this License shall terminate.</p><p>5.3. In the event of termination under Sections 5.1 or 5.2 above, all end user license agreements (excluding distributors and resellers) which have been validly granted by You or Your distributors under this License prior to termination shall survive termination.</p><p>6. Disclaimer of Warranty Covered Software is provided under this License on an “as is” basis, without warranty of any kind, either expressed, implied, or statutory, including, without limitation, warranties that the Covered Software is free of defects, merchantable, fit for a particular purpose or non-infringing. The entire risk as to the quality and performance of the Covered Software is with You. Should any Covered Software prove defective in any respect, You (not any Contributor) assume the cost of any necessary servicing, repair, or correction. This disclaimer of warranty constitutes an essential part of this License. No use of any Covered Software is authorized under this License except under this disclaimer.</p><p>7. Limitation of Liability Under no circumstances and under no legal theory, whether tort (including negligence), contract, or otherwise, shall any Contributor, or anyone who distributes Covered Software as permitted above, be liable to You for any direct, indirect, special, incidental, or consequential damages of any character including, without limitation, damages for lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses, even if such party shall have been informed of the possibility of such damages. This limitation of liability shall not apply to liability for death or personal injury resulting from such party’s negligence to the extent applicable law prohibits such limitation. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so this exclusion and limitation may not apply to You.</p><p>8. Litigation Any litigation relating to this License may be brought only in the courts of a jurisdiction where the defendant maintains its principal place of business and such litigation shall be governed by laws of that jurisdiction, without reference to its conflict-of-law provisions. Nothing in this Section shall prevent a party’s ability to bring cross-claims or counter-claims.</p><p>9. Miscellaneous This License represents the complete agreement concerning the subject matter hereof. If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable. Any law or regulation which provides that the language of a contract shall be construed against the drafter shall not be used to construe this License against a Contributor.</p><p>10. Versions of the License 10.1. New Versions Mozilla Foundation is the license steward. Except as provided in Section 10.3, no one other than the license steward has the right to modify or publish new versions of this License. Each version will be given a distinguishing version number.</p><p>10.2. Effect of New Versions You may distribute the Covered Software under the terms of the version of the License under which You originally received the Covered Software, or under the terms of any subsequent version published by the license steward.</p><p>10.3. Modified Versions If you create software not governed by this License, and you want to create a new license for such software, you may create and use a modified version of this License if you rename the license and remove any references to the name of the license steward (except to note that such modified license differs from this License).</p><p>10.4. Distributing Source Code Form that is Incompatible With Secondary Licenses If You choose to distribute Source Code Form that is Incompatible With Secondary Licenses under the terms of this version of the License, the notice described in Exhibit B of this License must be attached.</p><p>Exhibit A - Source Code Form License Notice This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.</p><p>If it is not possible or desirable to put the notice in a particular file, then You may include the notice in a location (such as a LICENSE file in a relevant directory) where a recipient would be likely to look for such a notice.</p><p>You may add additional accurate notices of copyright ownership.</p><p>Exhibit B - “Incompatible With Secondary Licenses” Notice This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.</p>

### GNU General Public License v3 (GPL-3)
<p>GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007</p><p>Copyright (C) 2007 Free Software Foundation, Inc.</p><p>Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.</p><p>Preamble The GNU General Public License is a free, copyleft license for software and other kinds of works.</p><p>The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.</p><p>When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.</p><p>To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.</p><p>For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.</p><p>Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it.</p><p>For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions.</p><p>Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of protecting users' freedom to change the software. The systematic pattern of such abuse occurs in the area of products for individuals to use, which is precisely where it is most unacceptable. Therefore, we have designed this version of the GPL to prohibit the practice for those products. If such problems arise substantially in other domains, we stand ready to extend this provision to those domains in future versions of the GPL, as needed to protect the freedom of users.</p><p>Finally, every program is threatened constantly by software patents. States should not allow patents to restrict development and use of software on general-purpose computers, but in those that do, we wish to avoid the special danger that patents applied to a free program could make it effectively proprietary. To prevent this, the GPL assures that patents cannot be used to render the program non-free.</p><p>The precise terms and conditions for copying, distribution and modification follow.</p><p>TERMS AND CONDITIONS 0. Definitions. “This License” refers to version 3 of the GNU General Public License.</p><p>“Copyright” also means copyright-like laws that apply to other kinds of works, such as semiconductor masks.</p><p>“The Program” refers to any copyrightable work licensed under this License. Each licensee is addressed as “you”. “Licensees” and “recipients” may be individuals or organizations.</p><p>To “modify” a work means to copy from or adapt all or part of the work in a fashion requiring copyright permission, other than the making of an exact copy. The resulting work is called a “modified version” of the earlier work or a work “based on” the earlier work.</p><p>A “covered work” means either the unmodified Program or a work based on the Program.</p><p>To “propagate” a work means to do anything with it that, without permission, would make you directly or secondarily liable for infringement under applicable copyright law, except executing it on a computer or modifying a private copy. Propagation includes copying, distribution (with or without modification), making available to the public, and in some countries other activities as well.</p><p>To “convey” a work means any kind of propagation that enables other parties to make or receive copies. Mere interaction with a user through a computer network, with no transfer of a copy, is not conveying.</p><p>An interactive user interface displays “Appropriate Legal Notices” to the extent that it includes a convenient and prominently visible feature that (1) displays an appropriate copyright notice, and (2) tells the user that there is no warranty for the work (except to the extent that warranties are provided), that licensees may convey the work under this License, and how to view a copy of this License. If the interface presents a list of user commands or options, such as a menu, a prominent item in the list meets this criterion.</p><p>1. Source Code. The “source code” for a work means the preferred form of the work for making modifications to it. “Object code” means any non-source form of a work.</p><p>A “Standard Interface” means an interface that either is an official standard defined by a recognized standards body, or, in the case of interfaces specified for a particular programming language, one that is widely used among developers working in that language.</p><p>The “System Libraries” of an executable work include anything, other than the work as a whole, that (a) is included in the normal form of packaging a Major Component, but which is not part of that Major Component, and (b) serves only to enable use of the work with that Major Component, or to implement a Standard Interface for which an implementation is available to the public in source code form. A “Major Component”, in this context, means a major essential component (kernel, window system, and so on) of the specific operating system (if any) on which the executable work runs, or a compiler used to produce the work, or an object code interpreter used to run it.</p><p>The “Corresponding Source” for a work in object code form means all the source code needed to generate, install, and (for an executable work) run the object code and to modify the work, including scripts to control those activities. However, it does not include the work's System Libraries, or general-purpose tools or generally available free programs which are used unmodified in performing those activities but which are not part of the work. For example, Corresponding Source includes interface definition files associated with source files for the work, and the source code for shared libraries and dynamically linked subprograms that the work is specifically designed to require, such as by intimate data communication or control flow between those subprograms and other parts of the work.</p><p>The Corresponding Source need not include anything that users can regenerate automatically from other parts of the Corresponding Source.</p><p>The Corresponding Source for a work in source code form is that same work.</p><p>2. Basic Permissions. All rights granted under this License are granted for the term of copyright on the Program, and are irrevocable provided the stated conditions are met. This License explicitly affirms your unlimited permission to run the unmodified Program. The output from running a covered work is covered by this License only if the output, given its content, constitutes a covered work. This License acknowledges your rights of fair use or other equivalent, as provided by copyright law.</p><p>You may make, run and propagate covered works that you do not convey, without conditions so long as your license otherwise remains in force. You may convey covered works to others for the sole purpose of having them make modifications exclusively for you, or provide you with facilities for running those works, provided that you comply with the terms of this License in conveying all material for which you do not control copyright. Those thus making or running the covered works for you must do so exclusively on your behalf, under your direction and control, on terms that prohibit them from making any copies of your copyrighted material outside their relationship with you.</p><p>Conveying under any other circumstances is permitted solely under the conditions stated below. Sublicensing is not allowed; section 10 makes it unnecessary.</p><p>3. Protecting Users' Legal Rights From Anti-Circumvention Law. No covered work shall be deemed part of an effective technological measure under any applicable law fulfilling obligations under article 11 of the WIPO copyright treaty adopted on 20 December 1996, or similar laws prohibiting or restricting circumvention of such measures.</p><p>When you convey a covered work, you waive any legal power to forbid circumvention of technological measures to the extent such circumvention is effected by exercising rights under this License with respect to the covered work, and you disclaim any intention to limit operation or modification of the work as a means of enforcing, against the work's users, your or third parties' legal rights to forbid circumvention of technological measures.</p><p>4. Conveying Verbatim Copies. You may convey verbatim copies of the Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice; keep intact all notices stating that this License and any non-permissive terms added in accord with section 7 apply to the code; keep intact all notices of the absence of any warranty; and give all recipients a copy of this License along with the Program.</p><p>You may charge any price or no price for each copy that you convey, and you may offer support or warranty protection for a fee.</p><p>5. Conveying Modified Source Versions. You may convey a work based on the Program, or the modifications to produce it from the Program, in the form of source code under the terms of section 4, provided that you also meet all of these conditions:</p><p>a) The work must carry prominent notices stating that you modified it, and giving a relevant date. b) The work must carry prominent notices stating that it is released under this License and any conditions added under section 7. This requirement modifies the requirement in section 4 to “keep intact all notices”. c) You must license the entire work, as a whole, under this License to anyone who comes into possession of a copy. This License will therefore apply, along with any applicable section 7 additional terms, to the whole of the work, and all its parts, regardless of how they are packaged. This License gives no permission to license the work in any other way, but it does not invalidate such permission if you have separately received it. d) If the work has interactive user interfaces, each must display Appropriate Legal Notices; however, if the Program has interactive interfaces that do not display Appropriate Legal Notices, your work need not make them do so. A compilation of a covered work with other separate and independent works, which are not by their nature extensions of the covered work, and which are not combined with it such as to form a larger program, in or on a volume of a storage or distribution medium, is called an “aggregate” if the compilation and its resulting copyright are not used to limit the access or legal rights of the compilation's users beyond what the individual works permit. Inclusion of a covered work in an aggregate does not cause this License to apply to the other parts of the aggregate.</p><p>6. Conveying Non-Source Forms. You may convey a covered work in object code form under the terms of sections 4 and 5, provided that you also convey the machine-readable Corresponding Source under the terms of this License, in one of these ways:</p><p>a) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by the Corresponding Source fixed on a durable physical medium customarily used for software interchange. b) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by a written offer, valid for at least three years and valid for as long as you offer spare parts or customer support for that product model, to give anyone who possesses the object code either (1) a copy of the Corresponding Source for all the software in the product that is covered by this License, on a durable physical medium customarily used for software interchange, for a price no more than your reasonable cost of physically performing this conveying of source, or (2) access to copy the Corresponding Source from a network server at no charge. c) Convey individual copies of the object code with a copy of the written offer to provide the Corresponding Source. This alternative is allowed only occasionally and noncommercially, and only if you received the object code with such an offer, in accord with subsection 6b. d) Convey the object code by offering access from a designated place (gratis or for a charge), and offer equivalent access to the Corresponding Source in the same way through the same place at no further charge. You need not require recipients to copy the Corresponding Source along with the object code. If the place to copy the object code is a network server, the Corresponding Source may be on a different server (operated by you or a third party) that supports equivalent copying facilities, provided you maintain clear directions next to the object code saying where to find the Corresponding Source. Regardless of what server hosts the Corresponding Source, you remain obligated to ensure that it is available for as long as needed to satisfy these requirements. e) Convey the object code using peer-to-peer transmission, provided you inform other peers where the object code and Corresponding Source of the work are being offered to the general public at no charge under subsection 6d. A separable portion of the object code, whose source code is excluded from the Corresponding Source as a System Library, need not be included in conveying the object code work.</p><p>A “User Product” is either (1) a “consumer product”, which means any tangible personal property which is normally used for personal, family, or household purposes, or (2) anything designed or sold for incorporation into a dwelling. In determining whether a product is a consumer product, doubtful cases shall be resolved in favor of coverage. For a particular product received by a particular user, “normally used” refers to a typical or common use of that class of product, regardless of the status of the particular user or of the way in which the particular user actually uses, or expects or is expected to use, the product. A product is a consumer product regardless of whether the product has substantial commercial, industrial or non-consumer uses, unless such uses represent the only significant mode of use of the product.</p><p>“Installation Information” for a User Product means any methods, procedures, authorization keys, or other information required to install and execute modified versions of a covered work in that User Product from a modified version of its Corresponding Source. The information must suffice to ensure that the continued functioning of the modified object code is in no case prevented or interfered with solely because modification has been made.</p><p>If you convey an object code work under this section in, or with, or specifically for use in, a User Product, and the conveying occurs as part of a transaction in which the right of possession and use of the User Product is transferred to the recipient in perpetuity or for a fixed term (regardless of how the transaction is characterized), the Corresponding Source conveyed under this section must be accompanied by the Installation Information. But this requirement does not apply if neither you nor any third party retains the ability to install modified object code on the User Product (for example, the work has been installed in ROM).</p><p>The requirement to provide Installation Information does not include a requirement to continue to provide support service, warranty, or updates for a work that has been modified or installed by the recipient, or for the User Product in which it has been modified or installed. Access to a network may be denied when the modification itself materially and adversely affects the operation of the network or violates the rules and protocols for communication across the network.</p><p>Corresponding Source conveyed, and Installation Information provided, in accord with this section must be in a format that is publicly documented (and with an implementation available to the public in source code form), and must require no special password or key for unpacking, reading or copying.</p><p>7. Additional Terms. “Additional permissions” are terms that supplement the terms of this License by making exceptions from one or more of its conditions. Additional permissions that are applicable to the entire Program shall be treated as though they were included in this License, to the extent that they are valid under applicable law. If additional permissions apply only to part of the Program, that part may be used separately under those permissions, but the entire Program remains governed by this License without regard to the additional permissions.</p><p>When you convey a copy of a covered work, you may at your option remove any additional permissions from that copy, or from any part of it. (Additional permissions may be written to require their own removal in certain cases when you modify the work.) You may place additional permissions on material, added by you to a covered work, for which you have or can give appropriate copyright permission.</p><p>Notwithstanding any other provision of this License, for material you add to a covered work, you may (if authorized by the copyright holders of that material) supplement the terms of this License with terms:</p><p>a) Disclaiming warranty or limiting liability differently from the terms of sections 15 and 16 of this License; or b) Requiring preservation of specified reasonable legal notices or author attributions in that material or in the Appropriate Legal Notices displayed by works containing it; or c) Prohibiting misrepresentation of the origin of that material, or requiring that modified versions of such material be marked in reasonable ways as different from the original version; or d) Limiting the use for publicity purposes of names of licensors or authors of the material; or e) Declining to grant rights under trademark law for use of some trade names, trademarks, or service marks; or f) Requiring indemnification of licensors and authors of that material by anyone who conveys the material (or modified versions of it) with contractual assumptions of liability to the recipient, for any liability that these contractual assumptions directly impose on those licensors and authors. All other non-permissive additional terms are considered “further restrictions” within the meaning of section 10. If the Program as you received it, or any part of it, contains a notice stating that it is governed by this License along with a term that is a further restriction, you may remove that term. If a license document contains a further restriction but permits relicensing or conveying under this License, you may add to a covered work material governed by the terms of that license document, provided that the further restriction does not survive such relicensing or conveying.</p><p>If you add terms to a covered work in accord with this section, you must place, in the relevant source files, a statement of the additional terms that apply to those files, or a notice indicating where to find the applicable terms.</p><p>Additional terms, permissive or non-permissive, may be stated in the form of a separately written license, or stated as exceptions; the above requirements apply either way.</p><p>8. Termination. You may not propagate or modify a covered work except as expressly provided under this License. Any attempt otherwise to propagate or modify it is void, and will automatically terminate your rights under this License (including any patent licenses granted under the third paragraph of section 11).</p><p>However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.</p><p>Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.</p><p>Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, you do not qualify to receive new licenses for the same material under section 10.</p><p>9. Acceptance Not Required for Having Copies. You are not required to accept this License in order to receive or run a copy of the Program. Ancillary propagation of a covered work occurring solely as a consequence of using peer-to-peer transmission to receive a copy likewise does not require acceptance. However, nothing other than this License grants you permission to propagate or modify any covered work. These actions infringe copyright if you do not accept this License. Therefore, by modifying or propagating a covered work, you indicate your acceptance of this License to do so.</p><p>10. Automatic Licensing of Downstream Recipients. Each time you convey a covered work, the recipient automatically receives a license from the original licensors, to run, modify and propagate that work, subject to this License. You are not responsible for enforcing compliance by third parties with this License.</p><p>An “entity transaction” is a transaction transferring control of an organization, or substantially all assets of one, or subdividing an organization, or merging organizations. If propagation of a covered work results from an entity transaction, each party to that transaction who receives a copy of the work also receives whatever licenses to the work the party's predecessor in interest had or could give under the previous paragraph, plus a right to possession of the Corresponding Source of the work from the predecessor in interest, if the predecessor has it or can get it with reasonable efforts.</p><p>You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.</p><p>11. Patents. A “contributor” is a copyright holder who authorizes use under this License of the Program or a work on which the Program is based. The work thus licensed is called the contributor's “contributor version”.</p><p>A contributor's “essential patent claims” are all patent claims owned or controlled by the contributor, whether already acquired or hereafter acquired, that would be infringed by some manner, permitted by this License, of making, using, or selling its contributor version, but do not include claims that would be infringed only as a consequence of further modification of the contributor version. For purposes of this definition, “control” includes the right to grant patent sublicenses in a manner consistent with the requirements of this License.</p><p>Each contributor grants you a non-exclusive, worldwide, royalty-free patent license under the contributor's essential patent claims, to make, use, sell, offer for sale, import and otherwise run, modify and propagate the contents of its contributor version.</p><p>In the following three paragraphs, a “patent license” is any express agreement or commitment, however denominated, not to enforce a patent (such as an express permission to practice a patent or covenant not to sue for patent infringement). To “grant” such a patent license to a party means to make such an agreement or commitment not to enforce a patent against the party.</p><p>If you convey a covered work, knowingly relying on a patent license, and the Corresponding Source of the work is not available for anyone to copy, free of charge and under the terms of this License, through a publicly available network server or other readily accessible means, then you must either (1) cause the Corresponding Source to be so available, or (2) arrange to deprive yourself of the benefit of the patent license for this particular work, or (3) arrange, in a manner consistent with the requirements of this License, to extend the patent license to downstream recipients. “Knowingly relying” means you have actual knowledge that, but for the patent license, your conveying the covered work in a country, or your recipient's use of the covered work in a country, would infringe one or more identifiable patents in that country that you have reason to believe are valid.</p><p>If, pursuant to or in connection with a single transaction or arrangement, you convey, or propagate by procuring conveyance of, a covered work, and grant a patent license to some of the parties receiving the covered work authorizing them to use, propagate, modify or convey a specific copy of the covered work, then the patent license you grant is automatically extended to all recipients of the covered work and works based on it.</p><p>A patent license is “discriminatory” if it does not include within the scope of its coverage, prohibits the exercise of, or is conditioned on the non-exercise of one or more of the rights that are specifically granted under this License. You may not convey a covered work if you are a party to an arrangement with a third party that is in the business of distributing software, under which you make payment to the third party based on the extent of your activity of conveying the work, and under which the third party grants, to any of the parties who would receive the covered work from you, a discriminatory patent license (a) in connection with copies of the covered work conveyed by you (or copies made from those copies), or (b) primarily for and in connection with specific products or compilations that contain the covered work, unless you entered into that arrangement, or that patent license was granted, prior to 28 March 2007.</p><p>Nothing in this License shall be construed as excluding or limiting any implied license or other defenses to infringement that may otherwise be available to you under applicable patent law.</p><p>12. No Surrender of Others' Freedom. If conditions are imposed on you (whether by court order, agreement or otherwise) that contradict the conditions of this License, they do not excuse you from the conditions of this License. If you cannot convey a covered work so as to satisfy simultaneously your obligations under this License and any other pertinent obligations, then as a consequence you may not convey it at all. For example, if you agree to terms that obligate you to collect a royalty for further conveying from those to whom you convey the Program, the only way you could satisfy both those terms and this License would be to refrain entirely from conveying the Program.</p><p>13. Use with the GNU Affero General Public License. Notwithstanding any other provision of this License, you have permission to link or combine any covered work with a work licensed under version 3 of the GNU Affero General Public License into a single combined work, and to convey the resulting work. The terms of this License will continue to apply to the part which is the covered work, but the special requirements of the GNU Affero General Public License, section 13, concerning interaction through a network will apply to the combination as such.</p><p>14. Revised Versions of this License. The Free Software Foundation may publish revised and/or new versions of the GNU General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.</p><p>Each version is given a distinguishing version number. If the Program specifies that a certain numbered version of the GNU General Public License “or any later version” applies to it, you have the option of following the terms and conditions either of that numbered version or of any later version published by the Free Software Foundation. If the Program does not specify a version number of the GNU General Public License, you may choose any version ever published by the Free Software Foundation.</p><p>If the Program specifies that a proxy can decide which future versions of the GNU General Public License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Program.</p><p>Later license versions may give you additional or different permissions. However, no additional obligations are imposed on any author or copyright holder as a result of your choosing to follow a later version.</p><p>15. Disclaimer of Warranty. THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.</p><p>16. Limitation of Liability. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p><p>17. Interpretation of Sections 15 and 16. If the disclaimer of warranty and limitation of liability provided above cannot be given local legal effect according to their terms, reviewing courts shall apply local law that most closely approximates an absolute waiver of all civil liability in connection with the Program, unless a warranty or assumption of liability accompanies a copy of the Program in return for a fee.</p><p>END OF TERMS AND CONDITIONS</p><p>How to Apply These Terms to Your New Programs If you develop a new program, and you want it to be of the greatest possible use to the public, the best way to achieve this is to make it free software which everyone can redistribute and change under these terms.</p><p>To do so, attach the following notices to the program. It is safest to attach them to the start of each source file to most effectively state the exclusion of warranty; and each file should have at least the “copyright” line and a pointer to where the full notice is found.</p><p><one>Copyright (C)<year></year></one></p><p>This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.</p><p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.</p><p>You should have received a copy of the GNU General Public License along with this program. If not, see <http>. Also add information on how to contact you by electronic and paper mail.</http></p><p>If the program does terminal interaction, make it output a short notice like this when it starts in an interactive mode:</p><p>
<program>Copyright (C)<year></year></program></p><p>This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'. This is free software, and you are welcome to redistribute it under certain conditions; type `show c' for details. The hypothetical commands `show w' and `show c' should show the appropriate parts of the General Public License. Of course, your program's commands might be different; for a GUI interface, you would use an “about box”.</p><p>You should also get your employer (if you work as a programmer) or school, if any, to sign a “copyright disclaimer” for the program, if necessary. For more information on this, and how to apply and follow the GNU GPL, see <http>.</http></p><p>The GNU General Public License does not permit incorporating your program into proprietary programs. If your program is a subroutine library, you may consider it more useful to permit linking proprietary applications with the library. If this is what you want to do, use the GNU Lesser General Public License instead of this License. But first, please read <http>.</http></p>

### GNU Lesser General Public License v3 (LGPL-3.0)
<h3>GNU LESSER GENERAL PUBLIC LICENSE</h3><p>Version 3, 29 June 2007</p><p>Copyright &copy; 2007 Free Software Foundation, Inc. &lt;<a href="http://fsf.org/">http://fsf.org/</a>&gt;</p><p>Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.</p><p>This version of the GNU Lesser General Public License incorporates the terms and conditions of version 3 of the GNU General Public License, supplemented by the additional permissions listed below.</p><h4>0. Additional Definitions.</h4><p>As used herein, “this License” refers to version 3 of the GNU Lesser General Public License, and the “GNU GPL” refers to version 3 of the GNU General Public License.</p><p>“The Library” refers to a covered work governed by this License, other than an Application or a Combined Work as defined below.</p><p>An “Application” is any work that makes use of an interface provided by the Library, but which is not otherwise based on the Library. Defining a subclass of a class defined by the Library is deemed a mode of using an interface provided by the Library.</p><p>A “Combined Work” is a work produced by combining or linking an Application with the Library. The particular version of the Library with which the Combined Work was made is also called the “Linked Version”.</p><p>The “Minimal Corresponding Source” for a Combined Work means the Corresponding Source for the Combined Work, excluding any source code for portions of the Combined Work that, considered in isolation, are based on the Application, and not on the Linked Version.</p><p>The “Corresponding Application Code” for a Combined Work means the object code and/or source code for the Application, including any data and utility programs needed for reproducing the Combined Work from the Application, but excluding the System Libraries of the Combined Work.</p><h4>1. Exception to Section 3 of the GNU GPL.</h4><p>You may convey a covered work under sections 3 and 4 of this License without being bound by section 3 of the GNU GPL.</p><h4>2. Conveying Modified Versions.</h4><p>If you modify a copy of the Library, and, in your modifications, a facility refers to a function or data to be supplied by an Application that uses the facility (other than as an argument passed when the facility is invoked), then you may convey a copy of the modified version:</p><ul>
<li>a) under this License, provided that you make a good faith effort to ensure that, in the event an Application does not supply the function or data, the facility still operates, and performs whatever part of its purpose remains meaningful, or</li><li>b) under the GNU GPL, with none of the additional permissions of this License applicable to that copy.</li></ul><h4>3. Object Code Incorporating Material from Library Header Files.</h4><p>The object code form of an Application may incorporate material from a header file that is part of the Library. You may convey such object code under terms of your choice, provided that, if the incorporated material is not limited to numerical parameters, data structure layouts and accessors, or small macros, inline functions and templates (ten or fewer lines in length), you do both of the following:</p><ul>
<li>a) Give prominent notice with each copy of the object code that the Library is used in it and that the Library and its use are covered by this License.</li><li>b) Accompany the object code with a copy of the GNU GPL and this license document.</li></ul><h4>4. Combined Works.</h4><p>You may convey a Combined Work under terms of your choice that, taken together, effectively do not restrict modification of the portions of the Library contained in the Combined Work and reverse engineering for debugging such modifications, if you also do each of the following:</p><ul>
<li>a) Give prominent notice with each copy of the Combined Work that the Library is used in it and that the Library and its use are covered by this License.</li><li>b) Accompany the Combined Work with a copy of the GNU GPL and this license document.</li><li>c) For a Combined Work that displays copyright notices during execution, include the copyright notice for the Library among these notices, as well as a reference directing the user to the copies of the GNU GPL and this license document.</li><li>d) Do one of the following:
<ul>
<li>0) Convey the Minimal Corresponding Source under the terms of this License, and the Corresponding Application Code in a form suitable for, and under terms that permit, the user to recombine or relink the Application with a modified version of the Linked Version to produce a modified Combined Work, in the manner specified by section 6 of the GNU GPL for conveying Corresponding Source.</li><li>1) Use a suitable shared library mechanism for linking with the Library. A suitable mechanism is one that (a) uses at run time a copy of the Library already present on the user's computer system, and (b) will operate properly with a modified version of the Library that is interface-compatible with the Linked Version.</li></ul></li><li>e) Provide Installation Information, but only if you would otherwise be required to provide such information under section 6 of the GNU GPL, and only to the extent that such information is necessary to install and execute a modified version of the Combined Work produced by recombining or relinking the Application with a modified version of the Linked Version. (If you use option 4d0, the Installation Information must accompany the Minimal Corresponding Source and Corresponding Application Code. If you use option 4d1, you must provide the Installation Information in the manner specified by section 6 of the GNU GPL for conveying Corresponding Source.)</li></ul><h4>5. Combined Libraries.</h4><p>You may place library facilities that are a work based on the Library side by side in a single library together with other library facilities that are not Applications and are not covered by this License, and convey such a combined library under terms of your choice, if you do both of the following:</p><ul>
<li>a) Accompany the combined library with a copy of the same work based on the Library, uncombined with any other library facilities, conveyed under the terms of this License.</li><li>b) Give prominent notice with the combined library that part of it is a work based on the Library, and explaining where to find the accompanying uncombined form of the same work.</li></ul><h4>6. Revised Versions of the GNU Lesser General Public License.</h4><p>The Free Software Foundation may publish revised and/or new versions of the GNU Lesser General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.</p><p>Each version is given a distinguishing version number. If the Library as you received it specifies that a certain numbered version of the GNU Lesser General Public License “or any later version” applies to it, you have the option of following the terms and conditions either of that published version or of any later version published by the Free Software Foundation. If the Library as you received it does not specify a version number of the GNU Lesser General Public License, you may choose any version of the GNU Lesser General Public License ever published by the Free Software Foundation.</p><p>If the Library as you received it specifies that a proxy can decide whether future versions of the GNU Lesser General Public License shall apply, that proxy's public statement of acceptance of any version is permanent authorization for you to choose that version for the Library.</p>

### MIT License (Expat)
<p>The MIT License (MIT)</p><p>Copyright (c) &lt;year&gt; &lt;copyright holders&gt;</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>

### Apache License 2.0 (Apache-2.0)
<p>Apache License, Version 2.0 Apache License Version 2.0, January 2004 http://www.apache.org/licenses/</p><p>TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION</p><p>1. Definitions.</p><p>"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.</p><p>"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.</p><p>"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.</p><p>"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.</p><p>"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.</p><p>"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.</p><p>"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).</p><p>"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.</p><p>"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."</p><p>"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.</p><p>2. Grant of Copyright License.</p><p>Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.</p><p>3. Grant of Patent License.</p><p>Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.</p><p>4. Redistribution.</p><p>You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:</p><p>You must give any other recipients of the Work or Derivative Works a copy of this License; and You must cause any modified files to carry prominent notices stating that You changed the files; and You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License. You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.</p><p>5. Submission of Contributions.</p><p>Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.</p><p>6. Trademarks.</p><p>This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.</p><p>7. Disclaimer of Warranty.</p><p>Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.</p><p>8. Limitation of Liability.</p><p>In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.</p><p>9. Accepting Warranty or Additional Liability.</p><p>While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.</p><p>END OF TERMS AND CONDITIONS</p><p>APPENDIX: How to apply the Apache License to your work</p><p>To apply the Apache License to your work, attach the following boilerplate notice, with the fields enclosed by brackets "[]" replaced with your own identifying information. (Don't include the brackets!) The text should be enclosed in the appropriate comment syntax for the file format. We also recommend that a file or class name and description of purpose be included on the same "printed page" as the copyright notice for easier identification within third-party archives.</p><p>Copyright [yyyy] [name of copyright owner]</p><p>Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at</p><p>http://www.apache.org/licenses/LICENSE-2.0</p><p>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</p>

### BSD 3-Clause License (Revised)
<p>The BSD 3-Clause License The following is a BSD 3-Clause ("BSD New" or "BSD Simplified") license template. To generate your own license, change the values of OWNER, ORGANIZATION and YEAR from their original values as given here, and substitute your own.</p><p>Note: You may omit clause 3 and still be OSD-conformant. Despite its colloquial name "BSD New", this is not the newest version of the BSD license; it was followed by the even newer BSD-2-Clause version, sometimes known as the "Simplified BSD License". On January 9th, 2008 the OSI Board approved BSD-2-Clause, which is used by FreeBSD and others. It omits the final "no-endorsement" clause and is thus roughly equivalent to the MIT License.</p><p>Historical Background: The original license used on BSD Unix had four clauses. The advertising clause (the third of four clauses) required you to acknowledge use of U.C. Berkeley code in your advertising of any product using that code. It was officially rescinded by the Director of the Office of Technology Licensing of the University of California on July 22nd, 1999. He states that clause 3 is "hereby deleted in its entirety." The four clause license has not been approved by OSI. The license below does not contain the advertising clause.</p><p>This prelude is not part of the license.</p><p>OWNER = Regents of the University of California </p><p>ORGANIZATION = University of California, Berkeley </p><p>YEAR = 1998</p><p>In the original BSD license, both occurrences of the phrase "COPYRIGHT HOLDERS AND CONTRIBUTORS" in the disclaimer read "REGENTS AND CONTRIBUTORS".</p><h2>License template</h2><p>Copyright (c) $YEAR $OWNER, All rights reserved.</p><p>Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:</p><ol>
<li>Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. </li><li>Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</li><li>Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.&nbsp;</li></ol><p>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p>

### BSD 2-Clause License (FreeBSD/Simplified)
<p>The BSD 2-Clause License The following is a BSD 2-Clause license template. To generate your own license, change the values of OWNER, ORGANIZATION and YEAR from their original values as given here, and substitute your own.</p><p>Note: see also the BSD-3-Clause license.</p><p>This prelude is not part of the license.</p><p><owner>= Regents of the University of California <organization>= University of California, Berkeley <year>= 1998</year></organization></owner></p><p>In the original BSD license, both occurrences of the phrase "COPYRIGHT HOLDERS AND CONTRIBUTORS" in the disclaimer read "REGENTS AND CONTRIBUTORS".</p><p>Here is the license template:</p><p>Copyright (c) <year>, <owner>All rights reserved.</owner></year></p><p>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</p><p>Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p>

### GNU Affero General Public License v3 (AGPL-3.0)
<p>Copyright (C) 2007 Free Software Foundation, Inc. <http style="line-height: 1.5rem;">Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.</http></p><p>Preamble The GNU Affero General Public License is a free, copyleft license for software and other kinds of works, specifically designed to ensure cooperation with the community in the case of network server software.</p><p>The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, our General Public Licenses are intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users.</p><p>When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.</p><p>Developers that use our General Public Licenses protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License which gives you legal permission to copy, distribute and/or modify the software.</p><p>A secondary benefit of defending all users' freedom is that improvements made in alternate versions of the program, if they receive widespread use, become available for other developers to incorporate. Many developers of free software are heartened and encouraged by the resulting cooperation. However, in the case of software used on network servers, this result may fail to come about. The GNU General Public License permits making a modified version and letting the public access it on a server without ever releasing its source code to the public.</p><p>The GNU Affero General Public License is designed specifically to ensure that, in such cases, the modified source code becomes available to the community. It requires the operator of a network server to provide the source code of the modified version running there to the users of that server. Therefore, public use of a modified version, on a publicly accessible server, gives the public access to the source code of the modified version.</p><p>An older license, called the Affero General Public License and published by Affero, was designed to accomplish similar goals. This is a different license, not a version of the Affero GPL, but Affero has released a new version of the Affero GPL which permits relicensing under this license.</p><p>The precise terms and conditions for copying, distribution and modification follow.</p><p>TERMS AND CONDITIONS 0. Definitions. "This License" refers to version 3 of the GNU Affero General Public License.</p><p>"Copyright" also means copyright-like laws that apply to other kinds of works, such as semiconductor masks.</p><p>"The Program" refers to any copyrightable work licensed under this License. Each licensee is addressed as "you". "Licensees" and "recipients" may be individuals or organizations.</p><p>To "modify" a work means to copy from or adapt all or part of the work in a fashion requiring copyright permission, other than the making of an exact copy. The resulting work is called a "modified version" of the earlier work or a work "based on" the earlier work.</p><p>A "covered work" means either the unmodified Program or a work based on the Program.</p><p>To "propagate" a work means to do anything with it that, without permission, would make you directly or secondarily liable for infringement under applicable copyright law, except executing it on a computer or modifying a private copy. Propagation includes copying, distribution (with or without modification), making available to the public, and in some countries other activities as well.</p><p>To "convey" a work means any kind of propagation that enables other parties to make or receive copies. Mere interaction with a user through a computer network, with no transfer of a copy, is not conveying.</p><p>An interactive user interface displays "Appropriate Legal Notices" to the extent that it includes a convenient and prominently visible feature that (1) displays an appropriate copyright notice, and (2) tells the user that there is no warranty for the work (except to the extent that warranties are provided), that licensees may convey the work under this License, and how to view a copy of this License. If the interface presents a list of user commands or options, such as a menu, a prominent item in the list meets this criterion.</p><p>1. Source Code. The "source code" for a work means the preferred form of the work for making modifications to it. "Object code" means any non-source form of a work.</p><p>A "Standard Interface" means an interface that either is an official standard defined by a recognized standards body, or, in the case of interfaces specified for a particular programming language, one that is widely used among developers working in that language.</p><p>The "System Libraries" of an executable work include anything, other than the work as a whole, that (a) is included in the normal form of packaging a Major Component, but which is not part of that Major Component, and (b) serves only to enable use of the work with that Major Component, or to implement a Standard Interface for which an implementation is available to the public in source code form. A "Major Component", in this context, means a major essential component (kernel, window system, and so on) of the specific operating system (if any) on which the executable work runs, or a compiler used to produce the work, or an object code interpreter used to run it.</p><p>The "Corresponding Source" for a work in object code form means all the source code needed to generate, install, and (for an executable work) run the object code and to modify the work, including scripts to control those activities. However, it does not include the work's System Libraries, or general-purpose tools or generally available free programs which are used unmodified in performing those activities but which are not part of the work. For example, Corresponding Source includes interface definition files associated with source files for the work, and the source code for shared libraries and dynamically linked subprograms that the work is specifically designed to require, such as by intimate data communication or control flow between those subprograms and other parts of the work.</p><p>The Corresponding Source need not include anything that users can regenerate automatically from other parts of the Corresponding Source.</p><p>The Corresponding Source for a work in source code form is that same work.</p><p>2. Basic Permissions. All rights granted under this License are granted for the term of copyright on the Program, and are irrevocable provided the stated conditions are met. This License explicitly affirms your unlimited permission to run the unmodified Program. The output from running a covered work is covered by this License only if the output, given its content, constitutes a covered work. This License acknowledges your rights of fair use or other equivalent, as provided by copyright law.</p><p>You may make, run and propagate covered works that you do not convey, without conditions so long as your license otherwise remains in force. You may convey covered works to others for the sole purpose of having them make modifications exclusively for you, or provide you with facilities for running those works, provided that you comply with the terms of this License in conveying all material for which you do not control copyright. Those thus making or running the covered works for you must do so exclusively on your behalf, under your direction and control, on terms that prohibit them from making any copies of your copyrighted material outside their relationship with you.</p><p>Conveying under any other circumstances is permitted solely under the conditions stated below. Sublicensing is not allowed; section 10 makes it unnecessary.</p><p>3. Protecting Users' Legal Rights From Anti-Circumvention Law. No covered work shall be deemed part of an effective technological measure under any applicable law fulfilling obligations under article 11 of the WIPO copyright treaty adopted on 20 December 1996, or similar laws prohibiting or restricting circumvention of such measures.</p><p>When you convey a covered work, you waive any legal power to forbid circumvention of technological measures to the extent such circumvention is effected by exercising rights under this License with respect to the covered work, and you disclaim any intention to limit operation or modification of the work as a means of enforcing, against the work's users, your or third parties' legal rights to forbid circumvention of technological measures.</p><p>4. Conveying Verbatim Copies. You may convey verbatim copies of the Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice; keep intact all notices stating that this License and any non-permissive terms added in accord with section 7 apply to the code; keep intact all notices of the absence of any warranty; and give all recipients a copy of this License along with the Program.</p><p>You may charge any price or no price for each copy that you convey, and you may offer support or warranty protection for a fee.</p><p>5. Conveying Modified Source Versions. You may convey a work based on the Program, or the modifications to produce it from the Program, in the form of source code under the terms of section 4, provided that you also meet all of these conditions:</p><p>a) The work must carry prominent notices stating that you modified it, and giving a relevant date. b) The work must carry prominent notices stating that it is released under this License and any conditions added under section 7. This requirement modifies the requirement in section 4 to "keep intact all notices". c) You must license the entire work, as a whole, under this License to anyone who comes into possession of a copy. This License will therefore apply, along with any applicable section 7 additional terms, to the whole of the work, and all its parts, regardless of how they are packaged. This License gives no permission to license the work in any other way, but it does not invalidate such permission if you have separately received it. d) If the work has interactive user interfaces, each must display Appropriate Legal Notices; however, if the Program has interactive interfaces that do not display Appropriate Legal Notices, your work need not make them do so. A compilation of a covered work with other separate and independent works, which are not by their nature extensions of the covered work, and which are not combined with it such as to form a larger program, in or on a volume of a storage or distribution medium, is called an "aggregate" if the compilation and its resulting copyright are not used to limit the access or legal rights of the compilation's users beyond what the individual works permit. Inclusion of a covered work in an aggregate does not cause this License to apply to the other parts of the aggregate.</p><p>6. Conveying Non-Source Forms. You may convey a covered work in object code form under the terms of sections 4 and 5, provided that you also convey the machine-readable Corresponding Source under the terms of this License, in one of these ways:</p><p>a) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by the Corresponding Source fixed on a durable physical medium customarily used for software interchange. b) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by a written offer, valid for at least three years and valid for as long as you offer spare parts or customer support for that product model, to give anyone who possesses the object code either (1) a copy of the Corresponding Source for all the software in the product that is covered by this License, on a durable physical medium customarily used for software interchange, for a price no more than your reasonable cost of physically performing this conveying of source, or (2) access to copy the Corresponding Source from a network server at no charge. c) Convey individual copies of the object code with a copy of the written offer to provide the Corresponding Source. This alternative is allowed only occasionally and noncommercially, and only if you received the object code with such an offer, in accord with subsection 6b. d) Convey the object code by offering access from a designated place (gratis or for a charge), and offer equivalent access to the Corresponding Source in the same way through the same place at no further charge. You need not require recipients to copy the Corresponding Source along with the object code. If the place to copy the object code is a network server, the Corresponding Source may be on a different server (operated by you or a third party) that supports equivalent copying facilities, provided you maintain clear directions next to the object code saying where to find the Corresponding Source. Regardless of what server hosts the Corresponding Source, you remain obligated to ensure that it is available for as long as needed to satisfy these requirements. e) Convey the object code using peer-to-peer transmission, provided you inform other peers where the object code and Corresponding Source of the work are being offered to the general public at no charge under subsection 6d. A separable portion of the object code, whose source code is excluded from the Corresponding Source as a System Library, need not be included in conveying the object code work.</p><p>A "User Product" is either (1) a "consumer product", which means any tangible personal property which is normally used for personal, family, or household purposes, or (2) anything designed or sold for incorporation into a dwelling. In determining whether a product is a consumer product, doubtful cases shall be resolved in favor of coverage. For a particular product received by a particular user, "normally used" refers to a typical or common use of that class of product, regardless of the status of the particular user or of the way in which the particular user actually uses, or expects or is expected to use, the product. A product is a consumer product regardless of whether the product has substantial commercial, industrial or non-consumer uses, unless such uses represent the only significant mode of use of the product.</p><p>"Installation Information" for a User Product means any methods, procedures, authorization keys, or other information required to install and execute modified versions of a covered work in that User Product from a modified version of its Corresponding Source. The information must suffice to ensure that the continued functioning of the modified object code is in no case prevented or interfered with solely because modification has been made.</p><p>If you convey an object code work under this section in, or with, or specifically for use in, a User Product, and the conveying occurs as part of a transaction in which the right of possession and use of the User Product is transferred to the recipient in perpetuity or for a fixed term (regardless of how the transaction is characterized), the Corresponding Source conveyed under this section must be accompanied by the Installation Information. But this requirement does not apply if neither you nor any third party retains the ability to install modified object code on the User Product (for example, the work has been installed in ROM).</p><p>The requirement to provide Installation Information does not include a requirement to continue to provide support service, warranty, or updates for a work that has been modified or installed by the recipient, or for the User Product in which it has been modified or installed. Access to a network may be denied when the modification itself materially and adversely affects the operation of the network or violates the rules and protocols for communication across the network.</p><p>Corresponding Source conveyed, and Installation Information provided, in accord with this section must be in a format that is publicly documented (and with an implementation available to the public in source code form), and must require no special password or key for unpacking, reading or copying.</p><p>7. Additional Terms. "Additional permissions" are terms that supplement the terms of this License by making exceptions from one or more of its conditions. Additional permissions that are applicable to the entire Program shall be treated as though they were included in this License, to the extent that they are valid under applicable law. If additional permissions apply only to part of the Program, that part may be used separately under those permissions, but the entire Program remains governed by this License without regard to the additional permissions.</p><p>When you convey a copy of a covered work, you may at your option remove any additional permissions from that copy, or from any part of it. (Additional permissions may be written to require their own removal in certain cases when you modify the work.) You may place additional permissions on material, added by you to a covered work, for which you have or can give appropriate copyright permission.</p><p>Notwithstanding any other provision of this License, for material you add to a covered work, you may (if authorized by the copyright holders of that material) supplement the terms of this License with terms:</p><p>a) Disclaiming warranty or limiting liability differently from the terms of sections 15 and 16 of this License; or b) Requiring preservation of specified reasonable legal notices or author attributions in that material or in the Appropriate Legal Notices displayed by works containing it; or c) Prohibiting misrepresentation of the origin of that material, or requiring that modified versions of such material be marked in reasonable ways as different from the original version; or d) Limiting the use for publicity purposes of names of licensors or authors of the material; or e) Declining to grant rights under trademark law for use of some trade names, trademarks, or service marks; or f) Requiring indemnification of licensors and authors of that material by anyone who conveys the material (or modified versions of it) with contractual assumptions of liability to the recipient, for any liability that these contractual assumptions directly impose on those licensors and authors. All other non-permissive additional terms are considered "further restrictions" within the meaning of section 10. If the Program as you received it, or any part of it, contains a notice stating that it is governed by this License along with a term that is a further restriction, you may remove that term. If a license document contains a further restriction but permits relicensing or conveying under this License, you may add to a covered work material governed by the terms of that license document, provided that the further restriction does not survive such relicensing or conveying.</p><p>If you add terms to a covered work in accord with this section, you must place, in the relevant source files, a statement of the additional terms that apply to those files, or a notice indicating where to find the applicable terms.</p><p>Additional terms, permissive or non-permissive, may be stated in the form of a separately written license, or stated as exceptions; the above requirements apply either way.</p><p>8. Termination. You may not propagate or modify a covered work except as expressly provided under this License. Any attempt otherwise to propagate or modify it is void, and will automatically terminate your rights under this License (including any patent licenses granted under the third paragraph of section 11).</p><p>However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.</p><p>Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.</p><p>Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, you do not qualify to receive new licenses for the same material under section 10.</p><p>9. Acceptance Not Required for Having Copies. You are not required to accept this License in order to receive or run a copy of the Program. Ancillary propagation of a covered work occurring solely as a consequence of using peer-to-peer transmission to receive a copy likewise does not require acceptance. However, nothing other than this License grants you permission to propagate or modify any covered work. These actions infringe copyright if you do not accept this License. Therefore, by modifying or propagating a covered work, you indicate your acceptance of this License to do so.</p><p>10. Automatic Licensing of Downstream Recipients. Each time you convey a covered work, the recipient automatically receives a license from the original licensors, to run, modify and propagate that work, subject to this License. You are not responsible for enforcing compliance by third parties with this License.</p><p>An "entity transaction" is a transaction transferring control of an organization, or substantially all assets of one, or subdividing an organization, or merging organizations. If propagation of a covered work results from an entity transaction, each party to that transaction who receives a copy of the work also receives whatever licenses to the work the party's predecessor in interest had or could give under the previous paragraph, plus a right to possession of the Corresponding Source of the work from the predecessor in interest, if the predecessor has it or can get it with reasonable efforts.</p><p>You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.</p><p>11. Patents. A "contributor" is a copyright holder who authorizes use under this License of the Program or a work on which the Program is based. The work thus licensed is called the contributor's "contributor version".</p><p>A contributor's "essential patent claims" are all patent claims owned or controlled by the contributor, whether already acquired or hereafter acquired, that would be infringed by some manner, permitted by this License, of making, using, or selling its contributor version, but do not include claims that would be infringed only as a consequence of further modification of the contributor version. For purposes of this definition, "control" includes the right to grant patent sublicenses in a manner consistent with the requirements of this License.</p><p>Each contributor grants you a non-exclusive, worldwide, royalty-free patent license under the contributor's essential patent claims, to make, use, sell, offer for sale, import and otherwise run, modify and propagate the contents of its contributor version.</p><p>In the following three paragraphs, a "patent license" is any express agreement or commitment, however denominated, not to enforce a patent (such as an express permission to practice a patent or covenant not to sue for patent infringement). To "grant" such a patent license to a party means to make such an agreement or commitment not to enforce a patent against the party.</p><p>If you convey a covered work, knowingly relying on a patent license, and the Corresponding Source of the work is not available for anyone to copy, free of charge and under the terms of this License, through a publicly available network server or other readily accessible means, then you must either (1) cause the Corresponding Source to be so available, or (2) arrange to deprive yourself of the benefit of the patent license for this particular work, or (3) arrange, in a manner consistent with the requirements of this License, to extend the patent license to downstream recipients. "Knowingly relying" means you have actual knowledge that, but for the patent license, your conveying the covered work in a country, or your recipient's use of the covered work in a country, would infringe one or more identifiable patents in that country that you have reason to believe are valid.</p><p>If, pursuant to or in connection with a single transaction or arrangement, you convey, or propagate by procuring conveyance of, a covered work, and grant a patent license to some of the parties receiving the covered work authorizing them to use, propagate, modify or convey a specific copy of the covered work, then the patent license you grant is automatically extended to all recipients of the covered work and works based on it.</p><p>A patent license is "discriminatory" if it does not include within the scope of its coverage, prohibits the exercise of, or is conditioned on the non-exercise of one or more of the rights that are specifically granted under this License. You may not convey a covered work if you are a party to an arrangement with a third party that is in the business of distributing software, under which you make payment to the third party based on the extent of your activity of conveying the work, and under which the third party grants, to any of the parties who would receive the covered work from you, a discriminatory patent license (a) in connection with copies of the covered work conveyed by you (or copies made from those copies), or (b) primarily for and in connection with specific products or compilations that contain the covered work, unless you entered into that arrangement, or that patent license was granted, prior to 28 March 2007.</p><p>Nothing in this License shall be construed as excluding or limiting any implied license or other defenses to infringement that may otherwise be available to you under applicable patent law.</p><p>12. No Surrender of Others' Freedom. If conditions are imposed on you (whether by court order, agreement or otherwise) that contradict the conditions of this License, they do not excuse you from the conditions of this License. If you cannot convey a covered work so as to satisfy simultaneously your obligations under this License and any other pertinent obligations, then as a consequence you may not convey it at all. For example, if you agree to terms that obligate you to collect a royalty for further conveying from those to whom you convey the Program, the only way you could satisfy both those terms and this License would be to refrain entirely from conveying the Program.</p><p>13. Remote Network Interaction; Use with the GNU General Public License. Notwithstanding any other provision of this License, if you modify the Program, your modified version must prominently offer all users interacting with it remotely through a computer network (if your version supports such interaction) an opportunity to receive the Corresponding Source of your version by providing access to the Corresponding Source from a network server at no charge, through some standard or customary means of facilitating copying of software. This Corresponding Source shall include the Corresponding Source for any work covered by version 3 of the GNU General Public License that is incorporated pursuant to the following paragraph.</p><p>Notwithstanding any other provision of this License, you have permission to link or combine any covered work with a work licensed under version 3 of the GNU General Public License into a single combined work, and to convey the resulting work. The terms of this License will continue to apply to the part which is the covered work, but the work with which it is combined will remain governed by version 3 of the GNU General Public License.</p><p>14. Revised Versions of this License. The Free Software Foundation may publish revised and/or new versions of the GNU Affero General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.</p><p>Each version is given a distinguishing version number. If the Program specifies that a certain numbered version of the GNU Affero General Public License "or any later version" applies to it, you have the option of following the terms and conditions either of that numbered version or of any later version published by the Free Software Foundation. If the Program does not specify a version number of the GNU Affero General Public License, you may choose any version ever published by the Free Software Foundation.</p><p>If the Program specifies that a proxy can decide which future versions of the GNU Affero General Public License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Program.</p><p>Later license versions may give you additional or different permissions. However, no additional obligations are imposed on any author or copyright holder as a result of your choosing to follow a later version.</p><p>15. Disclaimer of Warranty. THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.</p><p>16. Limitation of Liability. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p><p>17. Interpretation of Sections 15 and 16. If the disclaimer of warranty and limitation of liability provided above cannot be given local legal effect according to their terms, reviewing courts shall apply local law that most closely approximates an absolute waiver of all civil liability in connection with the Program, unless a warranty or assumption of liability accompanies a copy of the Program in return for a fee.</p><p>END OF TERMS AND CONDITIONS</p><p>How to Apply These Terms to Your New Programs If you develop a new program, and you want it to be of the greatest possible use to the public, the best way to achieve this is to make it free software which everyone can redistribute and change under these terms.</p><p>To do so, attach the following notices to the program. It is safest to attach them to the start of each source file to most effectively state the exclusion of warranty; and each file should have at least the "copyright" line and a pointer to where the full notice is found.</p><p><one>Copyright (C)<year></year></one></p><p>This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.</p><p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.</p><p>You should have received a copy of the GNU Affero General Public License along with this program. If not, see <http>. Also add information on how to contact you by electronic and paper mail.</http></p><p>If your software can interact with users remotely through a computer network, you should also make sure that it provides a way for users to get its source. For example, if your program is a web application, its interface could display a "Source" link that leads users to an archive of the code. There are many ways you could offer source, and different solutions will be better for different programs; see section 13 for the specific requirements.</p><p>You should also get your employer (if you work as a programmer) or school, if any, to sign a "copyright disclaimer" for the program, if necessary. For more information on this, and how to apply and follow the GNU AGPL, see <http>.</http></p>

### Unlicense
<p>This is free and unencumbered software released into the public domain.</p><p>Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.</p><p>In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. &nbsp;We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. &nbsp;We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTBILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT, IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><p>For more information, please refer to &lt;http://unlicense.org/&gt;</p>

###  ISC License
<p>Copyright (c) 4-digit year, Company or Person's Name</p><p>Permission to use, copy, modify, and/or distribute this software for any<br>purpose&nbsp;with or without fee is hereby granted, provided that the above<br>copyright notice and this permission notice appear in all copies.</p><p>THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES<br>WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF<br>MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY<br>SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES<br>WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION<br>OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN<br>CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.</p>

### GNU Lesser General Public License v2.1 (LGPL-2.1)
<p>GNU Lesser General Public License Version 2.1, February 1999</p><p>Copyright (C) 1991, 1999 Free Software Foundation, Inc. 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.</p><p>[This is the first released version of the Lesser GPL. It also counts as the successor of the GNU Library Public License, version 2, hence the version number 2.1.]</p><p>Preamble The licenses for most software are designed to take away your freedom to share and change it. By contrast, the GNU General Public Licenses are intended to guarantee your freedom to share and change free software--to make sure the software is free for all its users.</p><p>This license, the Lesser General Public License, applies to some specially designated software packages--typically libraries--of the Free Software Foundation and other authors who decide to use it. You can use it too, but we suggest you first think carefully about whether this license or the ordinary General Public License is the better strategy to use in any particular case, based on the explanations below.</p><p>When we speak of free software, we are referring to freedom of use, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for this service if you wish); that you receive source code or can get it if you want it; that you can change the software and use pieces of it in new free programs; and that you are informed that you can do these things.</p><p>To protect your rights, we need to make restrictions that forbid distributors to deny you these rights or to ask you to surrender these rights. These restrictions translate to certain responsibilities for you if you distribute copies of the library or if you modify it.</p><p>For example, if you distribute copies of the library, whether gratis or for a fee, you must give the recipients all the rights that we gave you. You must make sure that they, too, receive or can get the source code. If you link other code with the library, you must provide complete object files to the recipients, so that they can relink them with the library after making changes to the library and recompiling it. And you must show them these terms so they know their rights.</p><p>We protect your rights with a two-step method: (1) we copyright the library, and (2) we offer you this license, which gives you legal permission to copy, distribute and/or modify the library.</p><p>To protect each distributor, we want to make it very clear that there is no warranty for the free library. Also, if the library is modified by someone else and passed on, the recipients should know that what they have is not the original version, so that the original author's reputation will not be affected by problems that might be introduced by others.</p><p>Finally, software patents pose a constant threat to the existence of any free program. We wish to make sure that a company cannot effectively restrict the users of a free program by obtaining a restrictive license from a patent holder. Therefore, we insist that any patent license obtained for a version of the library must be consistent with the full freedom of use specified in this license.</p><p>Most GNU software, including some libraries, is covered by the ordinary GNU General Public License. This license, the GNU Lesser General Public License, applies to certain designated libraries, and is quite different from the ordinary General Public License. We use this license for certain libraries in order to permit linking those libraries into non-free programs.</p><p>When a program is linked with a library, whether statically or using a shared library, the combination of the two is legally speaking a combined work, a derivative of the original library. The ordinary General Public License therefore permits such linking only if the entire combination fits its criteria of freedom. The Lesser General Public License permits more lax criteria for linking other code with the library.</p><p>We call this license the "Lesser" General Public License because it does Less to protect the user's freedom than the ordinary General Public License. It also provides other free software developers Less of an advantage over competing non-free programs. These disadvantages are the reason we use the ordinary General Public License for many libraries. However, the Lesser license provides advantages in certain special circumstances.</p><p>For example, on rare occasions, there may be a special need to encourage the widest possible use of a certain library, so that it becomes a de-facto standard. To achieve this, non-free programs must be allowed to use the library. A more frequent case is that a free library does the same job as widely used non-free libraries. In this case, there is little to gain by limiting the free library to free software only, so we use the Lesser General Public License.</p><p>In other cases, permission to use a particular library in non-free programs enables a greater number of people to use a large body of free software. For example, permission to use the GNU C Library in non-free programs enables many more people to use the whole GNU operating system, as well as its variant, the GNU/Linux operating system.</p><p>Although the Lesser General Public License is Less protective of the users' freedom, it does ensure that the user of a program that is linked with the Library has the freedom and the wherewithal to run that program using a modified version of the Library.</p><p>The precise terms and conditions for copying, distribution and modification follow. Pay close attention to the difference between a "work based on the library" and a "work that uses the library". The former contains code derived from the library, whereas the latter must be combined with the library in order to run.</p><p>TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 0. This License Agreement applies to any software library or other program which contains a notice placed by the copyright holder or other authorized party saying it may be distributed under the terms of this Lesser General Public License (also called "this License"). Each licensee is addressed as "you".</p><p>A "library" means a collection of software functions and/or data prepared so as to be conveniently linked with application programs (which use some of those functions and data) to form executables.</p><p>The "Library", below, refers to any such software library or work which has been distributed under these terms. A "work based on the Library" means either the Library or any derivative work under copyright law: that is to say, a work containing the Library or a portion of it, either verbatim or with modifications and/or translated straightforwardly into another language. (Hereinafter, translation is included without limitation in the term "modification".)</p><p>"Source code" for a work means the preferred form of the work for making modifications to it. For a library, complete source code means all the source code for all modules it contains, plus any associated interface definition files, plus the scripts used to control compilation and installation of the library.</p><p>Activities other than copying, distribution and modification are not covered by this License; they are outside its scope. The act of running a program using the Library is not restricted, and output from such a program is covered only if its contents constitute a work based on the Library (independent of the use of the Library in a tool for writing it). Whether that is true depends on what the Library does and what the program that uses the Library does.</p><p>1. You may copy and distribute verbatim copies of the Library's complete source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice and disclaimer of warranty; keep intact all the notices that refer to this License and to the absence of any warranty; and distribute a copy of this License along with the Library.</p><p>You may charge a fee for the physical act of transferring a copy, and you may at your option offer warranty protection in exchange for a fee.</p><p>2. You may modify your copy or copies of the Library or any portion of it, thus forming a work based on the Library, and copy and distribute such modifications or work under the terms of Section 1 above, provided that you also meet all of these conditions:</p><p>a) The modified work must itself be a software library.</p><p>b) You must cause the files modified to carry prominent notices stating that you changed the files and the date of any change.</p><p>c) You must cause the whole of the work to be licensed at no charge to all third parties under the terms of this License.</p><p>d) If a facility in the modified Library refers to a function or a table of data to be supplied by an application program that uses the facility, other than as an argument passed when the facility is invoked, then you must make a good faith effort to ensure that, in the event an application does not supply such function or table, the facility still operates, and performs whatever part of its purpose remains meaningful.</p><p>(For example, a function in a library to compute square roots has a purpose that is entirely well-defined independent of the application. Therefore, Subsection 2d requires that any application-supplied function or table used by this function must be optional: if the application does not supply it, the square root function must still compute square roots.)</p><p>These requirements apply to the modified work as a whole. If identifiable sections of that work are not derived from the Library, and can be reasonably considered independent and separate works in themselves, then this License, and its terms, do not apply to those sections when you distribute them as separate works. But when you distribute the same sections as part of a whole which is a work based on the Library, the distribution of the whole must be on the terms of this License, whose permissions for other licensees extend to the entire whole, and thus to each and every part regardless of who wrote it.</p><p>Thus, it is not the intent of this section to claim rights or contest your rights to work written entirely by you; rather, the intent is to exercise the right to control the distribution of derivative or collective works based on the Library.</p><p>In addition, mere aggregation of another work not based on the Library with the Library (or with a work based on the Library) on a volume of a storage or distribution medium does not bring the other work under the scope of this License.</p><p>3. You may opt to apply the terms of the ordinary GNU General Public License instead of this License to a given copy of the Library. To do this, you must alter all the notices that refer to this License, so that they refer to the ordinary GNU General Public License, version 2, instead of to this License. (If a newer version than version 2 of the ordinary GNU General Public License has appeared, then you can specify that version instead if you wish.) Do not make any other change in these notices.</p><p>Once this change is made in a given copy, it is irreversible for that copy, so the ordinary GNU General Public License applies to all subsequent copies and derivative works made from that copy.</p><p>This option is useful when you wish to copy part of the code of the Library into a program that is not a library.</p><p>4. You may copy and distribute the Library (or a portion or derivative of it, under Section 2) in object code or executable form under the terms of Sections 1 and 2 above provided that you accompany it with the complete corresponding machine-readable source code, which must be distributed under the terms of Sections 1 and 2 above on a medium customarily used for software interchange.</p><p>If distribution of object code is made by offering access to copy from a designated place, then offering equivalent access to copy the source code from the same place satisfies the requirement to distribute the source code, even though third parties are not compelled to copy the source along with the object code.</p><p>5. A program that contains no derivative of any portion of the Library, but is designed to work with the Library by being compiled or linked with it, is called a "work that uses the Library". Such a work, in isolation, is not a derivative work of the Library, and therefore falls outside the scope of this License.</p><p>However, linking a "work that uses the Library" with the Library creates an executable that is a derivative of the Library (because it contains portions of the Library), rather than a "work that uses the library". The executable is therefore covered by this License. Section 6 states terms for distribution of such executables.</p><p>When a "work that uses the Library" uses material from a header file that is part of the Library, the object code for the work may be a derivative work of the Library even though the source code is not. Whether this is true is especially significant if the work can be linked without the Library, or if the work is itself a library. The threshold for this to be true is not precisely defined by law.</p><p>If such an object file uses only numerical parameters, data structure layouts and accessors, and small macros and small inline functions (ten lines or less in length), then the use of the object file is unrestricted, regardless of whether it is legally a derivative work. (Executables containing this object code plus portions of the Library will still fall under Section 6.)</p><p>Otherwise, if the work is a derivative of the Library, you may distribute the object code for the work under the terms of Section 6. Any executables containing that work also fall under Section 6, whether or not they are linked directly with the Library itself.</p><p>6. As an exception to the Sections above, you may also combine or link a "work that uses the Library" with the Library to produce a work containing portions of the Library, and distribute that work under terms of your choice, provided that the terms permit modification of the work for the customer's own use and reverse engineering for debugging such modifications.</p><p>You must give prominent notice with each copy of the work that the Library is used in it and that the Library and its use are covered by this License. You must supply a copy of this License. If the work during execution displays copyright notices, you must include the copyright notice for the Library among them, as well as a reference directing the user to the copy of this License. Also, you must do one of these things:</p><p>a) Accompany the work with the complete corresponding machine-readable source code for the Library including whatever changes were used in the work (which must be distributed under Sections 1 and 2 above); and, if the work is an executable linked with the Library, with the complete machine-readable "work that uses the Library", as object code and/or source code, so that the user can modify the Library and then relink to produce a modified executable containing the modified Library. (It is understood that the user who changes the contents of definitions files in the Library will not necessarily be able to recompile the application to use the modified definitions.)</p><p>b) Use a suitable shared library mechanism for linking with the Library. A suitable mechanism is one that (1) uses at run time a copy of the library already present on the user's computer system, rather than copying library functions into the executable, and (2) will operate properly with a modified version of the library, if the user installs one, as long as the modified version is interface-compatible with the version that the work was made with.</p><p>c) Accompany the work with a written offer, valid for at least three years, to give the same user the materials specified in Subsection 6a, above, for a charge no more than the cost of performing this distribution.</p><p>d) If distribution of the work is made by offering access to copy from a designated place, offer equivalent access to copy the above specified materials from the same place.</p><p>e) Verify that the user has already received a copy of these materials or that you have already sent this user a copy.</p><p>For an executable, the required form of the "work that uses the Library" must include any data and utility programs needed for reproducing the executable from it. However, as a special exception, the materials to be distributed need not include anything that is normally distributed (in either source or binary form) with the major components (compiler, kernel, and so on) of the operating system on which the executable runs, unless that component itself accompanies the executable.</p><p>It may happen that this requirement contradicts the license restrictions of other proprietary libraries that do not normally accompany the operating system. Such a contradiction means you cannot use both them and the Library together in an executable that you distribute.</p><p>7. You may place library facilities that are a work based on the Library side-by-side in a single library together with other library facilities not covered by this License, and distribute such a combined library, provided that the separate distribution of the work based on the Library and of the other library facilities is otherwise permitted, and provided that you do these two things:</p><p>a) Accompany the combined library with a copy of the same work based on the Library, uncombined with any other library facilities. This must be distributed under the terms of the Sections above.</p><p>b) Give prominent notice with the combined library of the fact that part of it is a work based on the Library, and explaining where to find the accompanying uncombined form of the same work.</p><p>8. You may not copy, modify, sublicense, link with, or distribute the Library except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, link with, or distribute the Library is void, and will automatically terminate your rights under this License. However, parties who have received copies, or rights, from you under this License will not have their licenses terminated so long as such parties remain in full compliance.</p><p>9. You are not required to accept this License, since you have not signed it. However, nothing else grants you permission to modify or distribute the Library or its derivative works. These actions are prohibited by law if you do not accept this License. Therefore, by modifying or distributing the Library (or any work based on the Library), you indicate your acceptance of this License to do so, and all its terms and conditions for copying, distributing or modifying the Library or works based on it.</p><p>10. Each time you redistribute the Library (or any work based on the Library), the recipient automatically receives a license from the original licensor to copy, distribute, link with or modify the Library subject to these terms and conditions. You may not impose any further restrictions on the recipients' exercise of the rights granted herein. You are not responsible for enforcing compliance by third parties with this License.</p><p>11. If, as a consequence of a court judgment or allegation of patent infringement or for any other reason (not limited to patent issues), conditions are imposed on you (whether by court order, agreement or otherwise) that contradict the conditions of this License, they do not excuse you from the conditions of this License. If you cannot distribute so as to satisfy simultaneously your obligations under this License and any other pertinent obligations, then as a consequence you may not distribute the Library at all. For example, if a patent license would not permit royalty-free redistribution of the Library by all those who receive copies directly or indirectly through you, then the only way you could satisfy both it and this License would be to refrain entirely from distribution of the Library.</p><p>If any portion of this section is held invalid or unenforceable under any particular circumstance, the balance of the section is intended to apply, and the section as a whole is intended to apply in other circumstances.</p><p>It is not the purpose of this section to induce you to infringe any patents or other property right claims or to contest validity of any such claims; this section has the sole purpose of protecting the integrity of the free software distribution system which is implemented by public license practices. Many people have made generous contributions to the wide range of software distributed through that system in reliance on consistent application of that system; it is up to the author/donor to decide if he or she is willing to distribute software through any other system and a licensee cannot impose that choice.</p><p>This section is intended to make thoroughly clear what is believed to be a consequence of the rest of this License.</p><p>12. If the distribution and/or use of the Library is restricted in certain countries either by patents or by copyrighted interfaces, the original copyright holder who places the Library under this License may add an explicit geographical distribution limitation excluding those countries, so that distribution is permitted only in or among countries not thus excluded. In such case, this License incorporates the limitation as if written in the body of this License.</p><p>13. The Free Software Foundation may publish revised and/or new versions of the Lesser General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.</p><p>Each version is given a distinguishing version number. If the Library specifies a version number of this License which applies to it and "any later version", you have the option of following the terms and conditions either of that version or of any later version published by the Free Software Foundation. If the Library does not specify a license version number, you may choose any version ever published by the Free Software Foundation.</p><p>14. If you wish to incorporate parts of the Library into other free programs whose distribution conditions are incompatible with these, write to the author to ask for permission. For software which is copyrighted by the Free Software Foundation, write to the Free Software Foundation; we sometimes make exceptions for this. Our decision will be guided by the two goals of preserving the free status of all derivatives of our free software and of promoting the sharing and reuse of software generally.</p><p>NO WARRANTY</p><p>15. BECAUSE THE LIBRARY IS LICENSED FREE OF CHARGE, THERE IS NO WARRANTY FOR THE LIBRARY, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE LIBRARY "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE LIBRARY IS WITH YOU. SHOULD THE LIBRARY PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.</p><p>16. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR REDISTRIBUTE THE LIBRARY AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE LIBRARY (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE LIBRARY TO OPERATE WITH ANY OTHER SOFTWARE), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p><p>END OF TERMS AND CONDITIONS</p>

### Academic Free License 3.0 (AFL)
<p>Academic Free License ("AFL") v. 3.0 This Academic Free License (the "License") applies to any original work of authorship (the "Original Work") whose owner (the "Licensor") has placed the following licensing notice adjacent to the copyright notice for the Original Work:</p><p>Licensed under the Academic Free License version 3.0</p><p>1) Grant of Copyright License. Licensor grants You a worldwide, royalty-free, non-exclusive, sublicensable license, for the duration of the copyright, to do the following:</p><p>a) to reproduce the Original Work in copies, either alone or as part of a collective work;</p><p>b) to translate, adapt, alter, transform, modify, or arrange the Original Work, thereby creating derivative works ("Derivative Works") based upon the Original Work;</p><p>c) to distribute or communicate copies of the Original Work and Derivative Works to the public, under any license of your choice that does not contradict the terms and conditions, including Licensor's reserved rights and remedies, in this Academic Free License;</p><p>d) to perform the Original Work publicly; and</p><p>e) to display the Original Work publicly.</p><p>2) Grant of Patent License. Licensor grants You a worldwide, royalty-free, non-exclusive, sublicensable license, under patent claims owned or controlled by the Licensor that are embodied in the Original Work as furnished by the Licensor, for the duration of the patents, to make, use, sell, offer for sale, have made, and import the Original Work and Derivative Works.</p><p>3) Grant of Source Code License. The term "Source Code" means the preferred form of the Original Work for making modifications to it and all available documentation describing how to modify the Original Work. Licensor agrees to provide a machine-readable copy of the Source Code of the Original Work along with each copy of the Original Work that Licensor distributes. Licensor reserves the right to satisfy this obligation by placing a machine-readable copy of the Source Code in an information repository reasonably calculated to permit inexpensive and convenient access by You for as long as Licensor continues to distribute the Original Work.</p><p>4) Exclusions From License Grant. Neither the names of Licensor, nor the names of any contributors to the Original Work, nor any of their trademarks or service marks, may be used to endorse or promote products derived from this Original Work without express prior permission of the Licensor. Except as expressly stated herein, nothing in this License grants any license to Licensor's trademarks, copyrights, patents, trade secrets or any other intellectual property. No patent license is granted to make, use, sell, offer for sale, have made, or import embodiments of any patent claims other than the licensed claims defined in Section 2. No license is granted to the trademarks of Licensor even if such marks are included in the Original Work. Nothing in this License shall be interpreted to prohibit Licensor from licensing under terms different from this License any Original Work that Licensor otherwise would have a right to license.</p><p>5) External Deployment. The term "External Deployment" means the use, distribution, or communication of the Original Work or Derivative Works in any way such that the Original Work or Derivative Works may be used by anyone other than You, whether those works are distributed or communicated to those persons or made available as an application intended for use over a network. As an express condition for the grants of license hereunder, You must treat any External Deployment by You of the Original Work or a Derivative Work as a distribution under section 1(c).</p><p>6) Attribution Rights. You must retain, in the Source Code of any Derivative Works that You create, all copyright, patent, or trademark notices from the Source Code of the Original Work, as well as any notices of licensing and any descriptive text identified therein as an "Attribution Notice." You must cause the Source Code for any Derivative Works that You create to carry a prominent Attribution Notice reasonably calculated to inform recipients that You have modified the Original Work.</p><p>7) Warranty of Provenance and Disclaimer of Warranty. Licensor warrants that the copyright in and to the Original Work and the patent rights granted herein by Licensor are owned by the Licensor or are sublicensed to You under the terms of this License with the permission of the contributor(s) of those copyrights and patent rights. Except as expressly stated in the immediately preceding sentence, the Original Work is provided under this License on an "AS IS" BASIS and WITHOUT WARRANTY, either express or implied, including, without limitation, the warranties of non-infringement, merchantability or fitness for a particular purpose. THE ENTIRE RISK AS TO THE QUALITY OF THE ORIGINAL WORK IS WITH YOU. This DISCLAIMER OF WARRANTY constitutes an essential part of this License. No license to the Original Work is granted by this License except under this disclaimer.</p><p>8) Limitation of Liability. Under no circumstances and under no legal theory, whether in tort (including negligence), contract, or otherwise, shall the Licensor be liable to anyone for any indirect, special, incidental, or consequential damages of any character arising as a result of this License or the use of the Original Work including, without limitation, damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses. This limitation of liability shall not apply to the extent applicable law prohibits such limitation.</p><p>9) Acceptance and Termination. If, at any time, You expressly assented to this License, that assent indicates your clear and irrevocable acceptance of this License and all of its terms and conditions. If You distribute or communicate copies of the Original Work or a Derivative Work, You must make a reasonable effort under the circumstances to obtain the express assent of recipients to the terms of this License. This License conditions your rights to undertake the activities listed in Section 1, including your right to create Derivative Works based upon the Original Work, and doing so without honoring these terms and conditions is prohibited by copyright law and international treaty. Nothing in this License is intended to affect copyright exceptions and limitations (including "fair use" or "fair dealing"). This License shall terminate immediately and You may no longer exercise any of the rights granted to You by this License upon your failure to honor the conditions in Section 1(c).</p><p>10) Termination for Patent Action. This License shall terminate automatically and You may no longer exercise any of the rights granted to You by this License as of the date You commence an action, including a cross-claim or counterclaim, against Licensor or any licensee alleging that the Original Work infringes a patent. This termination provision shall not apply for an action alleging patent infringement by combinations of the Original Work with other software or hardware.</p><p>11) Jurisdiction, Venue and Governing Law. Any action or suit relating to this License may be brought only in the courts of a jurisdiction wherein the Licensor resides or in which Licensor conducts its primary business, and under the laws of that jurisdiction excluding its conflict-of-law provisions. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. Any use of the Original Work outside the scope of this License or after its termination shall be subject to the requirements and penalties of copyright or patent law in the appropriate jurisdiction. This section shall survive the termination of this License.</p><p>12) Attorneys' Fees. In any action to enforce the terms of this License or seeking damages relating thereto, the prevailing party shall be entitled to recover its costs and expenses, including, without limitation, reasonable attorneys' fees and costs incurred in connection with such action, including any appeal of such action. This section shall survive the termination of this License.</p><p>13) Miscellaneous. If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable.</p><p>14) Definition of "You" in This License. "You" throughout this License, whether in upper or lower case, means an individual or a legal entity exercising rights under, and complying with all of the terms of, this License. For legal entities, "You" includes any entity that controls, is controlled by, or is under common control with you. For purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.</p><p>15) Right to Use. You may use the Original Work in all ways not otherwise restricted or conditioned by this License or by law, and Licensor promises not to interfere with or be responsible for such uses by You.</p><p>16) Modification of This License. This License is Copyright &copy; 2005 Lawrence Rosen. Permission is granted to copy, distribute, or communicate this License without modification. Nothing in this License permits You to modify this License as applied to the Original Work or to Derivative Works. However, You may modify the text of this License and copy, distribute or communicate your modified version (the "Modified License") and apply it to other original works of authorship subject to the following conditions: (i) You may not indicate in any way that your Modified License is the "Academic Free License" or "AFL" and you may not use those names in the name of your Modified License; (ii) You must replace the notice specified in the first paragraph above with the notice "Licensed under <insert>" or with a notice of your own that is not confusingly similar to the notice in this License; and (iii) You may not claim that your original works are open source software unless your Modified License has been approved by Open Source Initiative (OSI) and You comply with its license review and certification process.</insert></p>

### CMU License
<p>Copyright 1989, 1991, 1992 by Carnegie Mellon University</p><p>Derivative Work - 1996, 1998-2000 Copyright 1996, 1998-2000 The Regents of the University of California</p><p>All Rights Reserved</p><p>Permission to use, copy, modify and distribute this software and its documentation for any purpose and without fee is hereby granted, provided that the above copyright notice appears in all copies and that both that copyright notice and this permission notice appear in supporting documentation, and that the name of CMU and The Regents of the University of California not be used in advertising or publicity pertaining to distribution of the software without specific written permission.</p><p>CMU AND THE REGENTS OF THE UNIVERSITY OF CALIFORNIA DISCLAIM ALL WARRANTIES WITH REGARD TO THIS SOFTWARE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL CMU OR THE REGENTS OF THE UNIVERSITY OF CALIFORNIA BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM THE LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.</p>

### Common Public License 1.0 (CPL-1.0)
<p>Common Public License Version 1.0</p><p>THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS COMMON PUBLIC <br>LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM <br>CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.</p><p>1. DEFINITIONS</p><p>"Contribution" means:</p><p>a) in the case of the initial Contributor, the initial code and <br>documentation distributed under this Agreement, and</p><p>b) in the case of each subsequent Contributor:</p><p>i) changes to the Program, and</p><p>ii) additions to the Program;</p><p>where such changes and/or additions to the Program originate from and are <br>distributed by that particular Contributor. A Contribution 'originates' from a <br>Contributor if it was added to the Program by such Contributor itself or anyone <br>acting on such Contributor's behalf. Contributions do not include additions to <br>the Program which: (i) are separate modules of software distributed in <br>conjunction with the Program under their own license agreement, and (ii) are not <br>derivative works of the Program.</p><p>"Contributor" means any person or entity that distributes the Program.</p><p>"Licensed Patents " mean patent claims licensable by a Contributor which are <br>necessarily infringed by the use or sale of its Contribution alone or when <br>combined with the Program.</p><p>"Program" means the Contributions distributed in accordance with this Agreement.</p><p>"Recipient" means anyone who receives the Program under this Agreement, <br>including all Contributors.</p><p>2. GRANT OF RIGHTS</p><p>a) Subject to the terms of this Agreement, each Contributor hereby grants <br>Recipient a non-exclusive, worldwide, royalty-free copyright license to <br>reproduce, prepare derivative works of, publicly display, publicly perform, <br>distribute and sublicense the Contribution of such Contributor, if any, and such <br>derivative works, in source code and object code form.</p><p>b) Subject to the terms of this Agreement, each Contributor hereby grants <br>Recipient a non-exclusive, worldwide, royalty-free patent license under Licensed <br>Patents to make, use, sell, offer to sell, import and otherwise transfer the <br>Contribution of such Contributor, if any, in source code and object code form. <br>This patent license shall apply to the combination of the Contribution and the <br>Program if, at the time the Contribution is added by the Contributor, such <br>addition of the Contribution causes such combination to be covered by the <br>Licensed Patents. The patent license shall not apply to any other combinations <br>which include the Contribution. No hardware per se is licensed hereunder.</p><p>c) Recipient understands that although each Contributor grants the licenses <br>to its Contributions set forth herein, no assurances are provided by any <br>Contributor that the Program does not infringe the patent or other intellectual <br>property rights of any other entity. Each Contributor disclaims any liability to <br>Recipient for claims brought by any other entity based on infringement of <br>intellectual property rights or otherwise. As a condition to exercising the <br>rights and licenses granted hereunder, each Recipient hereby assumes sole <br>responsibility to secure any other intellectual property rights needed, if any. <br>For example, if a third party patent license is required to allow Recipient to <br>distribute the Program, it is Recipient's responsibility to acquire that license <br>before distributing the Program.</p><p>d) Each Contributor represents that to its knowledge it has sufficient <br>copyright rights in its Contribution, if any, to grant the copyright license set <br>forth in this Agreement.</p><p>3. REQUIREMENTS</p><p>A Contributor may choose to distribute the Program in object code form under its <br>own license agreement, provided that:</p><p>a) it complies with the terms and conditions of this Agreement; and</p><p>b) its license agreement:</p><p>i) effectively disclaims on behalf of all Contributors all warranties and <br>conditions, express and implied, including warranties or conditions of title and <br>non-infringement, and implied warranties or conditions of merchantability and <br>fitness for a particular purpose;</p><p>ii) effectively excludes on behalf of all Contributors all liability for <br>damages, including direct, indirect, special, incidental and consequential <br>damages, such as lost profits;</p><p>iii) states that any provisions which differ from this Agreement are offered <br>by that Contributor alone and not by any other party; and</p><p>iv) states that source code for the Program is available from such <br>Contributor, and informs licensees how to obtain it in a reasonable manner on or <br>through a medium customarily used for software exchange.</p><p>When the Program is made available in source code form:</p><p>a) it must be made available under this Agreement; and</p><p>b) a copy of this Agreement must be included with each copy of the Program.</p><p>Contributors may not remove or alter any copyright notices contained within the <br>Program.</p><p>Each Contributor must identify itself as the originator of its Contribution, if <br>any, in a manner that reasonably allows subsequent Recipients to identify the <br>originator of the Contribution.</p><p>4. COMMERCIAL DISTRIBUTION</p><p>Commercial distributors of software may accept certain responsibilities with <br>respect to end users, business partners and the like. While this license is <br>intended to facilitate the commercial use of the Program, the Contributor who <br>includes the Program in a commercial product offering should do so in a manner <br>which does not create potential liability for other Contributors. Therefore, if <br>a Contributor includes the Program in a commercial product offering, such <br>Contributor ("Commercial Contributor") hereby agrees to defend and indemnify <br>every other Contributor ("Indemnified Contributor") against any losses, damages <br>and costs (collectively "Losses") arising from claims, lawsuits and other legal <br>actions brought by a third party against the Indemnified Contributor to the <br>extent caused by the acts or omissions of such Commercial Contributor in <br>connection with its distribution of the Program in a commercial product <br>offering. The obligations in this section do not apply to any claims or Losses <br>relating to any actual or alleged intellectual property infringement. In order <br>to qualify, an Indemnified Contributor must: a) promptly notify the Commercial <br>Contributor in writing of such claim, and b) allow the Commercial Contributor to <br>control, and cooperate with the Commercial Contributor in, the defense and any <br>related settlement negotiations. The Indemnified Contributor may participate in <br>any such claim at its own expense.</p><p>For example, a Contributor might include the Program in a commercial product <br>offering, Product X. That Contributor is then a Commercial Contributor. If that <br>Commercial Contributor then makes performance claims, or offers warranties <br>related to Product X, those performance claims and warranties are such <br>Commercial Contributor's responsibility alone. Under this section, the <br>Commercial Contributor would have to defend claims against the other <br>Contributors related to those performance claims and warranties, and if a court <br>requires any other Contributor to pay any damages as a result, the Commercial <br>Contributor must pay those damages.</p><p>5. NO WARRANTY</p><p>EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE PROGRAM IS PROVIDED ON AN <br>"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR <br>IMPLIED INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR CONDITIONS OF TITLE, <br>NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Each <br>Recipient is solely responsible for determining the appropriateness of using and <br>distributing the Program and assumes all risks associated with its exercise of <br>rights under this Agreement, including but not limited to the risks and costs of <br>program errors, compliance with applicable laws, damage to or loss of data, <br>programs or equipment, and unavailability or interruption of operations.</p><p>6. DISCLAIMER OF LIABILITY</p><p>EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, NEITHER RECIPIENT NOR ANY <br>CONTRIBUTORS SHALL HAVE ANY LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, <br>SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOST <br>PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, <br>STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY <br>OUT OF THE USE OR DISTRIBUTION OF THE PROGRAM OR THE EXERCISE OF ANY RIGHTS <br>GRANTED HEREUNDER, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p><p>7. GENERAL</p><p>If any provision of this Agreement is invalid or unenforceable under applicable <br>law, it shall not affect the validity or enforceability of the remainder of the <br>terms of this Agreement, and without further action by the parties hereto, such <br>provision shall be reformed to the minimum extent necessary to make such <br>provision valid and enforceable.</p><p>If Recipient institutes patent litigation against a Contributor with respect to <br>a patent applicable to software (including a cross-claim or counterclaim in a <br>lawsuit), then any patent licenses granted by that Contributor to such Recipient <br>under this Agreement shall terminate as of the date such litigation is filed. In <br>addition, if Recipient institutes patent litigation against any entity <br>(including a cross-claim or counterclaim in a lawsuit) alleging that the Program <br>itself (excluding combinations of the Program with other software or hardware) <br>infringes such Recipient's patent(s), then such Recipient's rights granted under <br>Section 2(b) shall terminate as of the date such litigation is filed.</p><p>All Recipient's rights under this Agreement shall terminate if it fails to <br>comply with any of the material terms or conditions of this Agreement and does <br>not cure such failure in a reasonable period of time after becoming aware of <br>such noncompliance. If all Recipient's rights under this Agreement terminate, <br>Recipient agrees to cease use and distribution of the Program as soon as <br>reasonably practicable. However, Recipient's obligations under this Agreement <br>and any licenses granted by Recipient relating to the Program shall continue and <br>survive.</p><p>Everyone is permitted to copy and distribute copies of this Agreement, but in <br>order to avoid inconsistency the Agreement is copyrighted and may only be <br>modified in the following manner. The Agreement Steward reserves the right to <br>publish new versions (including revisions) of this Agreement from time to time. <br>No one other than the Agreement Steward has the right to modify this Agreement. <br>IBM is the initial Agreement Steward. IBM may assign the responsibility to serve <br>as the Agreement Steward to a suitable separate entity. Each new version of the <br>Agreement will be given a distinguishing version number. The Program (including <br>Contributions) may always be distributed subject to the version of the Agreement <br>under which it was received. In addition, after a new version of the Agreement <br>is published, Contributor may elect to distribute the Program (including its <br>Contributions) under the new version. Except as expressly stated in Sections <br>2(a) and 2(b) above, Recipient receives no rights or licenses to the <br>intellectual property of any Contributor under this Agreement, whether <br>expressly, by implication, estoppel or otherwise. All rights in the Program not <br>expressly granted under this Agreement are reserved.</p><p>This Agreement is governed by the laws of the State of New York and the <br>intellectual property laws of the United States of America. No party to this <br>Agreement will bring a legal action under this Agreement more than one year <br>after the cause of action arose. Each party waives its rights to a jury trial in <br>any resulting litigation.</p>

### Microsoft Public License (Ms-PL)
<p>Microsoft Public License (MS-PL)</p><p>This license governs use of the accompanying software. If you use the software, you accept this license. If you do not accept the license, do not use the software.</p><p>1. Definitions</p><p>The terms "reproduce," "reproduction," "derivative works," and "distribution" have the same meaning here as under U.S. copyright law.</p><p>A "contribution" is the original software, or any additions or changes to the software.</p><p>A "contributor" is any person that distributes its contribution under this license.</p><p>"Licensed patents" are a contributor's patent claims that read directly on its contribution.</p><p>2. Grant of Rights</p><p>(A) Copyright Grant- Subject to the terms of this license, including the license conditions and limitations in section 3, each contributor grants you a non-exclusive, worldwide, royalty-free copyright license to reproduce its contribution, prepare derivative works of its contribution, and distribute its contribution or any derivative works that you create.</p><p>(B) Patent Grant- Subject to the terms of this license, including the license conditions and limitations in section 3, each contributor grants you a non-exclusive, worldwide, royalty-free license under its licensed patents to make, have made, use, sell, offer for sale, import, and/or otherwise dispose of its contribution in the software or derivative works of the contribution in the software.</p><p>3. Conditions and Limitations</p><p>(A) No Trademark License- This license does not grant you rights to use any contributors' name, logo, or trademarks.</p><p>(B) If you bring a patent claim against any contributor over patents that you claim are infringed by the software, your patent license from such contributor to the software ends automatically.</p><p>(C) If you distribute any portion of the software, you must retain all copyright, patent, trademark, and attribution notices that are present in the software.</p><p>(D) If you distribute any portion of the software in source code form, you may do so only under this license by including a complete copy of this license with your distribution. If you distribute any portion of the software in compiled or object code form, you may only do so under a license that complies with this license.</p><p>(E) The software is licensed "as-is." You bear the risk of using it. The contributors give no express warranties, guarantees or conditions. You may have additional consumer rights under your local laws which this license cannot change. To the extent permitted under your local laws, the contributors exclude the implied warranties of merchantability, fitness for a particular purpose and non-infringement.</p>

### Sun Public License v1.0 (SPL-1.0)
<p>SUN PUBLIC LICENSE Version 1.0</p><p>1. Definitions.</p><p>1.0.1. "Commercial Use" means distribution or otherwise making the <br>Covered Code available to a third party.</p><p>1.1. "Contributor" means each entity that creates or contributes to <br>the creation of Modifications.</p><p>1.2. "Contributor Version" means the combination of the Original Code, <br>prior Modifications used by a Contributor, and the Modifications made <br>by that particular Contributor.</p><p>1.3. "Covered Code" means the Original Code or Modifications or the <br>combination of the Original Code and Modifications, in each case <br>including portions thereof and corresponding documentation released <br>with the source code.</p><p>1.4. "Electronic Distribution Mechanism" means a mechanism generally <br>accepted in the software development community for the electronic <br>transfer of data.</p><p>1.5. "Executable" means Covered Code in any form other than Source <br>Code.</p><p>1.6. "Initial Developer" means the individual or entity identified as <br>the Initial Developer in the Source Code notice required by Exhibit <br>A.</p><p>1.7. "Larger Work" means a work which combines Covered Code or <br>portions thereof with code not governed by the terms of this <br>License.</p><p>1.8. "License" means this document.</p><p>1.8.1. "Licensable" means having the right to grant, to the maximum <br>extent possible, whether at the time of the initial grant or <br>subsequently acquired, any and all of the rights conveyed herein.</p><p>1.9. "Modifications" means any addition to or deletion from the <br>substance or structure of either the Original Code or any previous <br>Modifications. When Covered Code is released as a series of files, a <br>Modification is:</p><p>A. Any addition to or deletion from the contents of a file containing <br>Original Code or previous Modifications.</p><p>B. Any new file that contains any part of the Original Code or <br>previous Modifications.</p><p>1.10. "Original Code"../ means Source Code of computer software code <br>which is described in the Source Code notice required by Exhibit A as <br>Original Code, and which, at the time of its release under this <br>License is not already Covered Code governed by this License.</p><p>1.10.1. "Patent Claims" means any patent claim(s), now owned or <br>hereafter acquired, including without limitation, method, process, and <br>apparatus claims, in any patent Licensable by grantor.</p><p>1.11. "Source Code"../ means the preferred form of the Covered Code <br>for <br>making modifications to it, including all modules it contains, plus <br>any associated documentation, interface definition files, scripts used <br>to control compilation and installation of an Executable, or source <br>code differential comparisons against either the Original Code or <br>another well known, available Covered Code of the Contributor's <br>choice. The Source Code can be in a compressed or archival form, <br>provided the appropriate decompression or de-archiving software is <br>widely available for no charge.</p><p>1.12. "You" (or "Your") means an individual or a legal entity <br>exercising rights under, and complying with all of the terms of, this <br>License or a future version of this License issued under Section 6.1. <br>For legal entities, "You" includes any entity which controls, is <br>controlled by, or is under common control with You. For purposes of <br>this definition, "control"../ means (a) the power, direct or indirect, <br>to <br>cause the direction or management of such entity, whether by contract <br>or otherwise, or (b) ownership of more than fifty percent (50%) of the <br>outstanding shares or beneficial ownership of such entity.</p><p>2. Source Code License.</p><p>2.1 The Initial Developer Grant.</p><p>The Initial Developer hereby grants You a world-wide, royalty-free, <br>non-exclusive license, subject to third party intellectual property <br>claims:</p><p>(a) under intellectual property rights (other than patent or <br>trademark) Licensable by Initial Developer to use, reproduce, modify, <br>display, perform, sublicense and distribute the Original Code (or <br>portions thereof) with or without Modifications, and/or as part of a <br>Larger Work; and</p><p>(b) under Patent Claims infringed by the making, using or selling of <br>Original Code, to make, have made, use, practice, sell, and offer for <br>sale, and/or otherwise dispose of the Original Code (or portions <br>thereof).</p><p>(c) the licenses granted in this Section 2.1(a) and (b) are effective <br>on the date Initial Developer first distributes Original Code under <br>the terms of this License.</p><p>(d) Notwithstanding Section 2.1(b) above, no patent license is <br>granted: 1) for code that You delete from the Original Code; 2) <br>separate from the Original Code; or 3) for infringements caused <br>by:</p><p>i) the modification of the Original Code or ii) the combination of the <br>Original Code with other software or devices.</p><p>2.2. Contributor Grant.</p><p>Subject to third party intellectual property claims, each Contributor <br>hereby grants You a world-wide, royalty-free, non-exclusive license</p><p>(a) under intellectual property rights (other than patent <br>or <br>trademark) Licensable by Contributor, to use, reproduce, modify, <br>display, perform, sublicense and distribute the Modifications created <br>by such Contributor (or portions thereof) either on an unmodified <br>basis, with other Modifications, as Covered Code and/or as part of a <br>Larger Work; and</p><p>b) under Patent Claims infringed by the making, using, or selling of <br>Modifications made by that Contributor either alone and/or in <br>combination with its Contributor Version (or portions of such <br>combination), to make, use, sell, offer for sale, have made, and/or <br>otherwise dispose of: 1) Modifications made by that Contributor (or <br>portions thereof); and 2) the combination of Modifications made by <br>that Contributor with its Contributor Version (or portions of such <br>combination).</p><p>(c) the licenses granted in Sections 2.2(a) and 2.2(b) are effective <br>on the date Contributor first makes Commercial Use of the Covered <br>Code.</p><p>(d) notwithstanding Section 2.2(b) above, no patent license is <br>granted: 1) for any code that Contributor has deleted from the <br>Contributor Version; 2) separate from the Contributor Version; 3) for <br>infringements caused by: i) third party modifications of Contributor <br>Version or ii) the combination of Modifications made by that <br>Contributor with other software (except as part of the Contributor <br>Version) or other devices; or 4) under Patent Claims infringed by <br>Covered Code in the absence of Modifications made by that <br>Contributor.</p><p>3. Distribution Obligations.</p><p>3.1. Application of License.</p><p>The Modifications which You create or to which You contribute are <br>governed by the terms of this License, including without limitation <br>Section 2.2. The Source Code version of Covered Code may be <br>distributed only under the terms of this License or a future version <br>of this License released under Section 6.1, and You must include a <br>copy of this License with every copy of the Source Code You <br>distribute. You may not offer or impose any terms on any Source Code <br>version that alters or restricts the applicable version of this <br>License or the recipients' rights hereunder. However, You may include <br>an additional document offering the additional rights described in <br>Section 3.5.</p><p>3.2. Availability of Source Code.</p><p>Any Modification which You create or to which You contribute must be <br>made available in Source Code form under the terms of this License <br>either on the same media as an Executable version or via an accepted <br>Electronic Distribution Mechanism to anyone to whom you made an <br>Executable version available; and if made available via Electronic <br>Distribution Mechanism, must remain available for at least twelve (12) <br>months after the date it initially became available, or at least six <br>(6) months after a subsequent version of that particular Modification <br>has been made available to such recipients. You are responsible for <br>ensuring that the Source Code version remains available even if the <br>Electronic Distribution Mechanism is maintained by a third party.</p><p>3.3. Description of Modifications.</p><p>You must cause all Covered Code to which You contribute to contain a <br>file documenting the changes You made to create that Covered Code and <br>the date of any change. You must include a prominent statement that <br>the Modification is derived, directly or indirectly, from Original <br>Code provided by the Initial Developer and including the name of the <br>Initial Developer in (a) the Source Code, and (b) in any notice in an <br>Executable version or related documentation in which You describe the <br>origin or ownership of the Covered Code.</p><p>3.4. Intellectual Property Matters.</p><p>(a) Third Party Claims.</p><p>If Contributor has knowledge that a license under a third party's <br>intellectual property rights is required to exercise the rights <br>granted by such Contributor under Sections 2.1 or 2.2, Contributor <br>must include a text file with the Source Code distribution titled <br>"../LEGAL'' which describes the claim and the party making the claim in <br>sufficient detail that a recipient will know whom to contact. If <br>Contributor obtains such knowledge after the Modification is made <br>available as described in Section 3.2, Contributor shall promptly <br>modify the LEGAL file in all copies Contributor makes available <br>thereafter and shall take other steps (such as notifying appropriate <br>mailing lists or newsgroups) reasonably calculated to inform those who <br>received the Covered Code that new knowledge has been obtained.</p><p>(b) Contributor APIs.</p><p>If Contributor's Modifications include an application programming <br>interface ("API"../) and Contributor has knowledge of patent licenses <br>which are reasonably necessary to implement that API, Contributor must <br>also include this information in the LEGAL file.</p><p>(c) Representations.</p><p>Contributor represents that, except as disclosed pursuant to Section <br>3.4(a) above, Contributor believes that Contributor's Modifications <br>are Contributor's original creation(s) and/or Contributor has <br>sufficient rights to grant the rights conveyed by this <br>License</p><p>.</p><p>3.5. Required Notices.</p><p>You must duplicate the notice in Exhibit A in each file of the Source <br>Code. If it is not possible to put such notice in a particular Source <br>Code file due to its structure, then You must include such notice in a <br>location (such as a relevant directory) where a user would be likely <br>to look for such a notice. If You created one or more Modification(s) <br>You may add your name as a Contributor to the notice described in <br>Exhibit A. You must also duplicate this License in any documentation <br>for the Source Code where You describe recipients' rights or ownership <br>rights relating to Covered Code. You may choose to offer, and to <br>charge a fee for, warranty, support, indemnity or liability <br>obligations to one or more recipients of Covered Code. However, You <br>may do so only on Your own behalf, and not on behalf of the Initial <br>Developer or any Contributor. You must make it absolutely clear than <br>any such warranty, support, indemnity or liability obligation is <br>offered by You alone, and You hereby agree to indemnify the Initial <br>Developer and every Contributor for any liability incurred by the <br>Initial Developer or such Contributor as a result of warranty, <br>support, indemnity or liability terms You offer.</p><p>3.6. Distribution of Executable Versions.</p><p>You may distribute Covered Code in Executable form only if the <br>requirements of Section 3.1-3.5 have been met for that Covered Code, <br>and if You include a notice stating that the Source Code version of <br>the Covered Code is available under the terms of this License, <br>including a description of how and where You have fulfilled the <br>obligations of Section 3.2. The notice must be conspicuously included <br>in any notice in an Executable version, related documentation or <br>collateral in which You describe recipients' rights relating to the <br>Covered Code. You may distribute the Executable version of Covered <br>Code or ownership rights under a license of Your choice, which may <br>contain terms different from this License, provided that You are in <br>compliance with the terms of this License and that the license for the <br>Executable version does not attempt to limit or alter the recipient's <br>rights in the Source Code version from the rights set forth in this <br>License. If You distribute the Executable version under a different <br>license You must make it absolutely clear that any terms which differ <br>from this License are offered by You alone, not by the Initial <br>Developer or any Contributor. You hereby agree to indemnify the <br>Initial Developer and every Contributor for any liability incurred by <br>the Initial Developer or such Contributor as a result of any such <br>terms You offer.</p><p>3.7. Larger Works.</p><p>You may create a Larger Work by combining Covered Code with other <br>code <br>not governed by the terms of this License and distribute the Larger <br>Work as a single product. In such a case, You must make sure the <br>requirements of this License are fulfilled for the Covered Code.</p><p>4. Inability to Comply Due to Statute or Regulation.</p><p>If it is impossible for You to comply with any of the terms of this <br>License with respect to some or all of the Covered Code due to <br>statute, judicial order, or regulation then You must: (a) comply with <br>the terms of this License to the maximum extent possible; and (b) <br>describe the limitations and the code they affect. Such description <br>must be included in the LEGAL file described in Section 3.4 and must <br>be included with all distributions of the Source Code. Except to the <br>extent prohibited by statute or regulation, such description must be <br>sufficiently detailed for a recipient of ordinary skill to be able to <br>understand it.</p><p>5. Application of this License.</p><p>This License applies to code to which the Initial Developer has <br>attached the notice in Exhibit A and to related Covered Code.</p><p>6. Versions of the License.</p><p>6.1. New Versions.</p><p>Sun Microsystems, Inc. ("Sun") may publish revised and/or new versions <br>of the License from time to time. Each version will be given a <br>distinguishing version number.</p><p>6.2. Effect of New Versions.</p><p>Once Covered Code has been published under a particular version of <br>the <br>License, You may always continue to use it under the terms of that <br>version. You may also choose to use such Covered Code under the terms <br>of any subsequent version of the License published by Sun. No one <br>other than Sun has the right to modify the terms applicable to Covered <br>Code created under this License.</p><p>6.3. Derivative Works.</p><p>If You create or use a modified version of this License (which you <br>may <br>only do in order to apply it to code which is not already Covered Code <br>governed by this License), You must: (a) rename Your license so that <br>the phrases "Sun," "Sun Public License," or "SPL"../ or any confusingly <br>similar phrase do not appear in your license (except to note that your <br>license differs from this License) and (b) otherwise make it clear <br>that Your version of the license contains terms which differ from the <br>Sun Public License. (Filling in the name of the Initial Developer, <br>Original Code or Contributor in the notice described in Exhibit A <br>shall not of themselves be deemed to be modifications of this <br>License.)</p><p>7. DISCLAIMER OF WARRANTY.</p><p>COVERED CODE IS PROVIDED UNDER THIS LICENSE ON AN "../AS IS'' BASIS, <br>WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, <br>WITHOUT LIMITATION, WARRANTIES THAT THE COVERED CODE IS FREE OF <br>DEFECTS, MERCHANTABLE, FIT FOR A PARTICULAR PURPOSE OR NON-INFRINGING. <br>THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE COVERED CODE <br>IS WITH YOU. SHOULD ANY COVERED CODE PROVE DEFECTIVE IN ANY RESPECT, <br>YOU (NOT THE INITIAL DEVELOPER OR ANY OTHER CONTRIBUTOR) ASSUME THE <br>COST OF ANY NECESSARY SERVICING, REPAIR OR CORRECTION. THIS DISCLAIMER <br>OF WARRANTY CONSTITUTES AN ESSENTIAL PART OF THIS LICENSE. NO USE OF <br>ANY COVERED CODE IS AUTHORIZED HEREUNDER EXCEPT UNDER THIS <br>DISCLAIMER.</p><p>8. TERMINATION.</p><p>8.1. This License and the rights granted hereunder will terminate <br>automatically if You fail to comply with terms herein and fail to cure <br>such breach within 30 days of becoming aware of the breach. All <br>sublicenses to the Covered Code which are properly granted shall <br>survive any termination of this License. Provisions which, by their <br>nature, must remain in effect beyond the termination of this License <br>shall survive.</p><p>8.2. If You initiate litigation by asserting a patent infringement <br>claim (excluding declaratory judgment actions) against Initial Developer <br>or a Contributor (the Initial Developer or Contributor against whom <br>You file such action is referred to as "Participant") alleging <br>that:</p><p>(a) such Participant's Contributor Version directly or indirectly <br>infringes any patent, then any and all rights granted by such <br>Participant to You under Sections 2.1 and/or 2.2 of this License <br>shall, upon 60 days notice from Participant terminate prospectively, <br>unless if within 60 days after receipt of notice You either: (i) <br>agree in writing to pay Participant a mutually agreeable reasonable <br>royalty for Your past and future use of Modifications made by such <br>Participant, or (ii) withdraw Your litigation claim with respect to <br>the Contributor Version against such Participant. If within 60 days <br>of notice, a reasonable royalty and payment arrangement are not <br>mutually agreed upon in writing by the parties or the litigation claim <br>is not withdrawn, the rights granted by Participant to You under <br>Sections 2.1 and/or 2.2 automatically terminate at the expiration of <br>the 60 day notice period specified above.</p><p>(b) any software, hardware, or device, other than such Participant's <br>Contributor Version, directly or indirectly infringes any patent, then <br>any rights granted to You by such Participant under Sections 2.1(b) <br>and 2.2(b) are revoked effective as of the date You first made, used, <br>sold, distributed, or had made, Modifications made by that <br>Participant.</p><p>8.3. If You assert a patent infringement claim against Participant <br>alleging that such Participant's Contributor Version directly or <br>indirectly infringes any patent where such claim is resolved (such as <br>by license or settlement) prior to the initiation of patent <br>infringement litigation, then the reasonable value of the licenses <br>granted by such Participant under Sections 2.1 or 2.2 shall be taken <br>into account in determining the amount or value of any payment or <br>license.</p><p>8.4. In the event of termination under Sections 8.1 or 8.2 above, <br>all <br>end user license agreements (excluding distributors and resellers) <br>which have been validly granted by You or any distributor hereunder <br>prior to termination shall survive termination.</p><p>9. LIMITATION OF LIABILITY.</p><p>UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY, WHETHER TORT <br>(INCLUDING NEGLIGENCE), CONTRACT, OR OTHERWISE, SHALL YOU, THE INITIAL <br>DEVELOPER, ANY OTHER CONTRIBUTOR, OR ANY DISTRIBUTOR OF COVERED CODE, <br>OR ANY SUPPLIER OF ANY OF SUCH PARTIES, BE LIABLE TO ANY PERSON FOR <br>ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY <br>CHARACTER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF GOODWILL, <br>WORK STOPPAGE, COMPUTER FAILURE OR MALFUNCTION, OR ANY AND ALL OTHER <br>COMMERCIAL DAMAGES OR LOSSES, EVEN IF SUCH PARTY SHALL HAVE BEEN <br>INFORMED OF THE POSSIBILITY OF SUCH DAMAGES. THIS LIMITATION OF <br>LIABILITY SHALL NOT APPLY TO LIABILITY FOR DEATH OR PERSONAL INJURY <br>RESULTING FROM SUCH PARTY'S NEGLIGENCE TO THE EXTENT APPLICABLE LAW <br>PROHIBITS SUCH LIMITATION. SOME JURISDICTIONS DO NOT ALLOW THE <br>EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO <br>THIS EXCLUSION AND LIMITATION MAY NOT APPLY TO YOU.</p><p>10. U.S. GOVERNMENT END USERS.</p><p>The Covered Code is a "commercial item," as that term is defined in <br>48 <br>C.F.R. 2.101 (Oct. 1995), consisting of "commercial computer software" <br>and "commercial computer software documentation,"../ as such terms are <br>used in 48 C.F.R. 12.212 (Sept. 1995). Consistent with 48 C.F.R. <br>12.212 and 48 C.F.R. 227.7202-1 through 227.7202-4 (June 1995), all <br>U.S. Government End Users acquire Covered Code with only those rights <br>set forth herein.</p><p>11. MISCELLANEOUS.</p><p>This License represents the complete agreement concerning subject <br>matter hereof. If any provision of this License is held to be <br>unenforceable, such provision shall be reformed only to the extent <br>necessary to make it enforceable. This License shall be governed by <br>California law provisions (except to the extent applicable law, if <br>any, provides otherwise), excluding its conflict-of-law provisions. <br>With respect to disputes in which at least one party is a citizen of, <br>or an entity chartered or registered to do business in the United <br>States of America, any litigation relating to this License shall be <br>subject to the jurisdiction of the Federal Courts of the Northern <br>District of California, with venue lying in Santa Clara County, <br>California, with the losing party responsible for costs, including <br>without limitation, court costs and reasonable attorneys' fees and <br>expenses. The application of the United Nations Convention on <br>Contracts for the International Sale of Goods is expressly excluded. <br>Any law or regulation which provides that the language of a contract <br>shall be construed against the drafter shall not apply to this <br>License.</p><p>12. RESPONSIBILITY FOR CLAIMS.</p><p>As between Initial Developer and the Contributors, each party is <br>responsible for claims and damages arising, directly or indirectly, <br>out of its utilization of rights under this License and You agree to <br>work with Initial Developer and Contributors to distribute such <br>responsibility on an equitable basis. Nothing herein is intended or <br>shall be deemed to constitute any admission of liability.</p><p>13. MULTIPLE-LICENSED CODE.</p><p>Initial Developer may designate portions of the Covered Code as <br>?Multiple-Licensed?. ?Multiple-Licensed? means that the Initial <br>Developer permits you to utilize portions of the Covered Code under <br>Your choice of the alternative licenses, if any, specified by the <br>Initial Developer in the file described in Exhibit A.</p><p>Exhibit A -Sun Public License Notice.</p><p>The contents of this file are subject to the Sun Public License</p><p>Version 1.0 (the License); you may not use this file except in</p><p>compliance with the License. A copy of the License is available at</p><p>http://www.sun.com/</p><p>The Original Code is _________________. The Initial Developer of the</p><p>Original Code is ___________. Portions created by ______ are Copyright</p><p>(C)_________. All Rights Reserved.</p><p>Contributor(s): ______________________________________.</p><p>Alternatively, the contents of this file may be used under the terms</p><p>of the _____ license (the ?[___] License?), in which case the</p><p>provisions of [______] License are applicable instead of those above.</p><p>If you wish to allow use of your version of this file only under the</p><p>terms of the [____] License and not to allow others to use your</p><p>version of this file under the SPL, indicate your decision by deleting</p><p>the provisions above and replace them with the notice and other</p><p>provisions required by the [___] License. If you do not delete the</p><p>provisions above, a recipient may use your version of this file under</p><p>either the SPL or the [___] License. <br>[NOTE: The text of this Exhibit A may differ slightly from the text of</p><p>the notices in the Source Code files of the Original Code. You should</p><p>use the text of this Exhibit A rather than the text found in the</p><p>Original Code Source Code for Your Modifications.]</p>

### X11 License
<p>The X11 License (X11)</p><p>Copyright (c) &lt;year(s)&gt; &lt;copyright holder(s)&gt;</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><p>Except as contained in this notice, the name(s) of the above copyright holders shall not be used in advertising or otherwise to promote the sale, use or other dealings in this Software without prior written authorization.</p>

### Do What The F*ck You Want To Public License (WTFPL)
<p>do What The Fuck you want to Public License</p><p>Version 1.0, March 2000</p><p>Copyright (C) 2000 Banlu Kemiyatorn (]d).</p><p><p>136 Nives 7 Jangwattana 14 Laksi Bangkok</p></p><p><p>Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.</p><p>Ok, the purpose of this license is simple
and you just</p></p><p>DO WHAT THE FUCK YOU WANT TO.</p>

### Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
<p><strong>Using Creative Commons Public Licenses</strong></p><p>Creative Commons public licenses provide a standard set of terms and conditions that creators and other rights holders may use to share original works of authorship and other material subject to copyright and certain other rights specified in the public license below. The following considerations are for informational purposes only, are not exhaustive, and do not form part of our licenses.</p><blockquote><strong>Considerations for licensors:</strong> Our public licenses are intended for use by those authorized to give the public permission to use material in ways otherwise restricted by copyright and certain other rights. Our licenses are irrevocable. Licensors should read and understand the terms and conditions of the license they choose before applying it. Licensors should also secure all rights necessary before applying our licenses so that the public can reuse the material as expected. Licensors should clearly mark any material not subject to the license. This includes other CC-licensed material, or material used under an exception or limitation to copyright. <a href="http://wiki.creativecommons.org/Considerations_for_licensors_and_licensees#Considerations_for_licensors">More considerations for licensors.</a></blockquote><blockquote><strong>Considerations for the public:</strong> By using one of our public licenses, a licensor grants the public permission to use the licensed material under specified terms and conditions. If the licensor’s permission is not necessary for any reason–for example, because of any applicable exception or limitation to copyright–then that use is not regulated by the license. Our licenses grant only permissions under copyright and certain other rights that a licensor has authority to grant. Use of the licensed material may still be restricted for other reasons, including because others have copyright or other rights in the material. A licensor may make special requests, such as asking that all changes be marked or described. Although not required by our licenses, you are encouraged to respect those requests where reasonable. <a href="http://wiki.creativecommons.org/Considerations_for_licensors_and_licensees#Considerations_for_licensees">More considerations for the public.</a></blockquote><h3>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License</h3><p>By exercising the Licensed Rights (defined below), You accept and agree to be bound by the terms and conditions of this Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License ("Public License"). To the extent this Public License may be interpreted as a contract, You are granted the Licensed Rights in consideration of Your acceptance of these terms and conditions, and the Licensor grants You such rights in consideration of benefits the Licensor receives from making the Licensed Material available under these terms and conditions.</p><p><strong>Section 1 – Definitions.</strong></p><ol>
<li><strong>Adapted Material</strong> means material subject to Copyright and Similar Rights that is derived from or based upon the Licensed Material and in which the Licensed Material is translated, altered, arranged, transformed, or otherwise modified in a manner requiring permission under the Copyright and Similar Rights held by the Licensor. For purposes of this Public License, where the Licensed Material is a musical work, performance, or sound recording, Adapted Material is always produced where the Licensed Material is synched in timed relation with a moving image.</li><li><strong>Adapter's License</strong> means the license You apply to Your Copyright and Similar Rights in Your contributions to Adapted Material in accordance with the terms and conditions of this Public License.</li><li><strong>BY-NC-SA Compatible License</strong> means a license listed at <a href="http://creativecommons.org/compatiblelicenses">creativecommons.org/compatiblelicenses</a>, approved by Creative Commons as essentially the equivalent of this Public License.</li><li><strong>Copyright and Similar Rights</strong> means copyright and/or similar rights closely related to copyright including, without limitation, performance, broadcast, sound recording, and Sui Generis Database Rights, without regard to how the rights are labeled or categorized. For purposes of this Public License, the rights specified in Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s2b">2(b)(1)-(2)</a> are not Copyright and Similar Rights.</li><li><strong>Effective Technological Measures</strong> means those measures that, in the absence of proper authority, may not be circumvented under laws fulfilling obligations under Article 11 of the WIPO Copyright Treaty adopted on December 20, 1996, and/or similar international agreements.</li><li><strong>Exceptions and Limitations</strong> means fair use, fair dealing, and/or any other exception or limitation to Copyright and Similar Rights that applies to Your use of the Licensed Material.</li><li><strong>License Elements</strong> means the license attributes listed in the name of a Creative Commons Public License. The License Elements of this Public License are Attribution, NonCommercial, and ShareAlike.</li><li><strong>Licensed Material</strong> means the artistic or literary work, database, or other material to which the Licensor applied this Public License.</li><li><strong>Licensed Rights</strong> means the rights granted to You subject to the terms and conditions of this Public License, which are limited to all Copyright and Similar Rights that apply to Your use of the Licensed Material and that the Licensor has authority to license.</li><li><strong>Licensor</strong> means the individual(s) or entity(ies) granting rights under this Public License.</li><li><strong>NonCommercial</strong> means not primarily intended for or directed towards commercial advantage or monetary compensation. For purposes of this Public License, the exchange of the Licensed Material for other material subject to Copyright and Similar Rights by digital file-sharing or similar means is NonCommercial provided there is no payment of monetary compensation in connection with the exchange.</li><li><strong>Share</strong> means to provide material to the public by any means or process that requires permission under the Licensed Rights, such as reproduction, public display, public performance, distribution, dissemination, communication, or importation, and to make material available to the public including in ways that members of the public may access the material from a place and at a time individually chosen by them.</li><li><strong>Sui Generis Database Rights</strong> means rights other than copyright resulting from Directive 96/9/EC of the European Parliament and of the Council of 11 March 1996 on the legal protection of databases, as amended and/or succeeded, as well as other essentially equivalent rights anywhere in the world.</li><li><strong>You</strong> means the individual or entity exercising the Licensed Rights under this Public License. <strong>Your</strong> has a corresponding meaning.</li></ol><p><strong>Section 2 – Scope.</strong></p><ol>
<li><strong>License grant</strong>.
<ol>
<li>Subject to the terms and conditions of this Public License, the Licensor hereby grants You a worldwide, royalty-free, non-sublicensable, non-exclusive, irrevocable license to exercise the Licensed Rights in the Licensed Material to:
<ol>
<li>reproduce and Share the Licensed Material, in whole or in part, for NonCommercial purposes only; and</li><li>produce, reproduce, and Share Adapted Material for NonCommercial purposes only.</li></ol></li><li>Exceptions and Limitations. For the avoidance of doubt, where Exceptions and Limitations apply to Your use, this Public License does not apply, and You do not need to comply with its terms and conditions.</li><li>Term. The term of this Public License is specified in Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s6a">6(a)</a>.</li><li>Media and formats; technical modifications allowed. The Licensor authorizes You to exercise the Licensed Rights in all media and formats whether now known or hereafter created, and to make technical modifications necessary to do so. The Licensor waives and/or agrees not to assert any right or authority to forbid You from making technical modifications necessary to exercise the Licensed Rights, including technical modifications necessary to circumvent Effective Technological Measures. For purposes of this Public License, simply making modifications authorized by this Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s2a4">2(a)(4)</a> never produces Adapted Material.</li><li>Downstream recipients.
<ol>
<li>Offer from the Licensor – Licensed Material. Every recipient of the Licensed Material automatically receives an offer from the Licensor to exercise the Licensed Rights under the terms and conditions of this Public License.</li><li>Additional offer from the Licensor – Adapted Material. Every recipient of Adapted Material from You automatically receives an offer from the Licensor to exercise the Licensed Rights in the Adapted Material under the conditions of the Adapter’s License You apply.</li><li>No downstream restrictions. You may not offer or impose any additional or different terms or conditions on, or apply any Effective Technological Measures to, the Licensed Material if doing so restricts exercise of the Licensed Rights by any recipient of the Licensed Material.</li></ol></li><li>No endorsement. Nothing in this Public License constitutes or may be construed as permission to assert or imply that You are, or that Your use of the Licensed Material is, connected with, or sponsored, endorsed, or granted official status by, the Licensor or others designated to receive attribution as provided in Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s3a1Ai">3(a)(1)(A)(i)</a>.</li></ol></li><li><strong>Other rights</strong>.<ol>
<li>Moral rights, such as the right of integrity, are not licensed under this Public License, nor are publicity, privacy, and/or other similar personality rights; however, to the extent possible, the Licensor waives and/or agrees not to assert any such rights held by the Licensor to the limited extent necessary to allow You to exercise the Licensed Rights, but not otherwise.</li><li>Patent and trademark rights are not licensed under this Public License.</li><li>To the extent possible, the Licensor waives any right to collect royalties from You for the exercise of the Licensed Rights, whether directly or through a collecting society under any voluntary or waivable statutory or compulsory licensing scheme. In all other cases the Licensor expressly reserves any right to collect such royalties, including when the Licensed Material is used other than for NonCommercial purposes.</li></ol></li></ol><p><strong>Section 3 – License Conditions.</strong></p><p>Your exercise of the Licensed Rights is expressly made subject to the following conditions.</p><ol>
<li><strong>Attribution</strong>.<ol>
<li>If You Share the Licensed Material (including in modified form), You must:<ol>
<li>retain the following if it is supplied by the Licensor with the Licensed Material:
<ol>
<li>identification of the creator(s) of the Licensed Material and any others designated to receive attribution, in any reasonable manner requested by the Licensor (including by pseudonym if designated);</li><li>a copyright notice;</li><li>a notice that refers to this Public License;</li><li>a notice that refers to the disclaimer of warranties;</li><li>a URI or hyperlink to the Licensed Material to the extent reasonably practicable;</li></ol></li><li>indicate if You modified the Licensed Material and retain an indication of any previous modifications; and</li><li>indicate the Licensed Material is licensed under this Public License, and include the text of, or the URI or hyperlink to, this Public License.</li></ol></li><li>You may satisfy the conditions in Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s3a1">3(a)(1)</a> in any reasonable manner based on the medium, means, and context in which You Share the Licensed Material. For example, it may be reasonable to satisfy the conditions by providing a URI or hyperlink to a resource that includes the required information.</li><li>If requested by the Licensor, You must remove any of the information required by Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s3a1A">3(a)(1)(A)</a> to the extent reasonably practicable.</li></ol></li><li><strong>ShareAlike</strong>.
<p>In addition to the conditions in Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s3a">3(a)</a>, if You Share Adapted Material You produce, the following conditions also apply.</p><ol>
<li>The Adapter’s License You apply must be a Creative Commons license with the same License Elements, this version or later, or a BY-NC-SA Compatible License.</li><li>You must include the text of, or the URI or hyperlink to, the Adapter's License You apply. You may satisfy this condition in any reasonable manner based on the medium, means, and context in which You Share Adapted Material.</li><li>You may not offer or impose any additional or different terms or conditions on, or apply any Effective Technological Measures to, Adapted Material that restrict exercise of the rights granted under the Adapter's License You apply.</li></ol></li></ol><p><strong>Section 4 – Sui Generis Database Rights.</strong></p><p>Where the Licensed Rights include Sui Generis Database Rights that apply to Your use of the Licensed Material:</p><ol>
<li>for the avoidance of doubt, Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s2a1">2(a)(1)</a> grants You the right to extract, reuse, reproduce, and Share all or a substantial portion of the contents of the database for NonCommercial purposes only;</li><li>if You include all or a substantial portion of the database contents in a database in which You have Sui Generis Database Rights, then the database in which You have Sui Generis Database Rights (but not its individual contents) is Adapted Material, including for purposes of Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s3b">3(b)</a>; and</li><li>You must comply with the conditions in Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s3a">3(a)</a> if You Share all or a substantial portion of the contents of the database.</li></ol><p>For the avoidance of doubt, this Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s4">4</a> supplements and does not replace Your obligations under this Public License where the Licensed Rights include other Copyright and Similar Rights.
</p><p><strong>Section 5 – Disclaimer of Warranties and Limitation of Liability.</strong></p><ol>
<li><strong>Unless otherwise separately undertaken by the Licensor, to the extent possible, the Licensor offers the Licensed Material as-is and as-available, and makes no representations or warranties of any kind concerning the Licensed Material, whether express, implied, statutory, or other. This includes, without limitation, warranties of title, merchantability, fitness for a particular purpose, non-infringement, absence of latent or other defects, accuracy, or the presence or absence of errors, whether or not known or discoverable. Where disclaimers of warranties are not allowed in full or in part, this disclaimer may not apply to You.</strong></li><li><strong>To the extent possible, in no event will the Licensor be liable to You on any legal theory (including, without limitation, negligence) or otherwise for any direct, special, indirect, incidental, consequential, punitive, exemplary, or other losses, costs, expenses, or damages arising out of this Public License or use of the Licensed Material, even if the Licensor has been advised of the possibility of such losses, costs, expenses, or damages. Where a limitation of liability is not allowed in full or in part, this limitation may not apply to You.</strong></li></ol><ol>
<li>The disclaimer of warranties and limitation of liability provided above shall be interpreted in a manner that, to the extent possible, most closely approximates an absolute disclaimer and waiver of all liability.</li></ol><p><strong>Section 6 – Term and Termination.</strong></p><ol>
<li>This Public License applies for the term of the Copyright and Similar Rights licensed here. However, if You fail to comply with this Public License, then Your rights under this Public License terminate automatically.</li><li>Where Your right to use the Licensed Material has terminated under Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s6a">6(a)</a>, it reinstates:<ol>
<li>automatically as of the date the violation is cured, provided it is cured within 30 days of Your discovery of the violation; or</li><li>upon express reinstatement by the Licensor.</li></ol><p>For the avoidance of doubt, this Section <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s6b">6(b)</a> does not affect any right the Licensor may have to seek remedies for Your violations of this Public License.</p></li><li>For the avoidance of doubt, the Licensor may also offer the Licensed Material under separate terms or conditions or stop distributing the Licensed Material at any time; however, doing so will not terminate this Public License.</li><li>Sections <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s1">1</a>, <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s5">5</a>, <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s6">6</a>, <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s7">7</a>, and <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode#s8">8</a> survive termination of this Public License.</li></ol><p><strong>Section 7 – Other Terms and Conditions.</strong></p><ol>
<li>The Licensor shall not be bound by any additional or different terms or conditions communicated by You unless expressly agreed.</li><li>Any arrangements, understandings, or agreements regarding the Licensed Material not stated herein are separate from and independent of the terms and conditions of this Public License.</li></ol><p><strong>Section 8 – Interpretation.</strong></p><ol>
<li>For the avoidance of doubt, this Public License does not, and shall not be interpreted to, reduce, limit, restrict, or impose conditions on any use of the Licensed Material that could lawfully be made without permission under this Public License.</li><li>To the extent possible, if any provision of this Public License is deemed unenforceable, it shall be automatically reformed to the minimum extent necessary to make it enforceable. If the provision cannot be reformed, it shall be severed from this Public License without affecting the enforceability of the remaining terms and conditions.</li><li>No term or condition of this Public License will be waived and no failure to comply consented to unless expressly agreed to by the Licensor.</li><li>Nothing in this Public License constitutes or may be interpreted as a limitation upon, or waiver of, any privileges and immunities that apply to the Licensor or You, including from the legal processes of any jurisdiction or authority.</li></ol><p>Creative Commons is not a party to its public licenses. Notwithstanding, Creative Commons may elect to apply one of its public licenses to material it publishes and in those instances will be considered the “Licensor.” Except for the limited purpose of indicating that material is shared under a Creative Commons public license or as otherwise permitted by the Creative Commons policies published at <a href="http://creativecommons.org/policies">creativecommons.org/policies</a>, Creative Commons does not authorize the use of the trademark “Creative Commons” or any other trademark or logo of Creative Commons without its prior written consent including, without limitation, in connection with any unauthorized modifications to any of its public licenses or any other arrangements, understandings, or agreements concerning use of licensed material. For the avoidance of doubt, this paragraph does not form part of the public licenses.<br><br>Creative Commons may be contacted at <a href="http://creativecommons.org/">creativecommons.org</a>.</p>

### Creative Commons CC0 1.0 Universal (CC-0)
<p><strong><em>Statement of Purpose</em></strong></p><p>The laws of most jurisdictions throughout the world
	automatically confer exclusive Copyright and Related Rights
	(defined below) upon the creator and subsequent owner(s) (each
	and all, an "owner") of an original work of authorship and/or
	a database (each, a "Work").</p><p>Certain owners wish to permanently relinquish those rights
	to a Work for the purpose of contributing to a commons of
	creative, cultural and scientific works ("Commons") that the
	public can reliably and without fear of later claims of
	infringement build upon, modify, incorporate in other works,
	reuse and redistribute as freely as possible in any form
	whatsoever and for any purposes, including without limitation
	commercial purposes. These owners may contribute to the
	Commons to promote the ideal of a free culture and the further
	production of creative, cultural and scientific works, or to
	gain reputation or greater distribution for their Work in part
	through the use and efforts of others.</p><p>For these and/or other purposes and motivations, and
	without any expectation of additional consideration or
	compensation, the person associating CC0 with a Work (the
	"Affirmer"), to the extent that he or she is an owner of
	Copyright and Related Rights in the Work, voluntarily elects
	to apply CC0 to the Work and publicly distribute the Work
	under its terms, with knowledge of his or her Copyright and
	Related Rights in the Work and the meaning and intended legal
	effect of CC0 on those rights.</p><p><strong>1. Copyright and Related Rights.</strong>
	   A Work made available under CC0 may be protected by
	   copyright and related or neighboring rights ("Copyright and
	   Related Rights"). Copyright and Related Rights include, but
	   are not limited to, the following:
	</p><ol><li>the right to reproduce, adapt, distribute, perform,
	  display, communicate, and translate a Work;</li><li> moral rights retained by the original author(s) and/or
	  performer(s);</li><li>publicity and privacy rights pertaining to a person's
	  image or likeness depicted in a Work;</li><li>rights protecting against unfair competition in regards
	  to a Work, subject to the limitations in paragraph 4(a),
	  below;</li><li>rights protecting the extraction, dissemination, use and
	  reuse of data in a Work;</li><li>database rights (such as those arising under Directive
	  96/9/EC of the European Parliament and of the Council of 11
	  March 1996 on the legal protection of databases, and under
	  any national implementation thereof, including any amended
	  or successor version of such directive); and</li><li>other similar, equivalent or corresponding rights
	  throughout the world based on applicable law or treaty, and
	  any national implementations thereof.</li></ol><p><strong>2. Waiver.</strong> To the greatest extent
        permitted by, but not in contravention of, applicable law,
        Affirmer hereby overtly, fully, permanently, irrevocably and
        unconditionally waives, abandons, and surrenders all of
        Affirmer's Copyright and Related Rights and associated claims
        and causes of action, whether now known or unknown (including
        existing as well as future claims and causes of action), in
        the Work (i) in all territories worldwide, (ii) for the
        maximum duration provided by applicable law or treaty
        (including future time extensions), (iii) in any current or
        future medium and for any number of copies, and (iv) for any
        purpose whatsoever, including without limitation commercial,
        advertising or promotional purposes (the "Waiver"). Affirmer
        makes the Waiver for the benefit of each member of the public
        at large and to the detriment of Affirmer's heirs and
        successors, fully intending that such Waiver shall not be
        subject to revocation, rescission, cancellation, termination,
        or any other legal or equitable action to disrupt the quiet
        enjoyment of the Work by the public as contemplated by
        Affirmer's express Statement of Purpose.
	</p><p><strong>3. Public License Fallback.</strong> Should any
        part of the Waiver for any reason be judged legally invalid or
        ineffective under applicable law, then the Waiver shall be
        preserved to the maximum extent permitted taking into account
        Affirmer's express Statement of Purpose. In addition, to the
        extent the Waiver is so judged Affirmer hereby grants to each
        affected person a royalty-free, non transferable, non
        sublicensable, non exclusive, irrevocable and unconditional
        license to exercise Affirmer's Copyright and Related Rights
        in the Work (i) in all territories worldwide, (ii) for the
        maximum duration provided by applicable law or treaty
        (including future time extensions), (iii) in any current or
        future medium and for any number of copies, and (iv) for any
        purpose whatsoever, including without limitation commercial,
        advertising or promotional purposes (the "License"). The
        License shall be deemed effective as of the date CC0 was
        applied by Affirmer to the Work. Should any part of the
        License for any reason be judged legally invalid or
        ineffective under applicable law, such partial invalidity or
        ineffectiveness shall not invalidate the remainder of the
        License, and in such case Affirmer hereby affirms that he or
        she will not (i) exercise any of his or her remaining
        Copyright and Related Rights in the Work or (ii) assert any
        associated claims and causes of action with respect to the
        Work, in either case contrary to Affirmer's express Statement
        of Purpose.</p><p><strong>4. Limitations and Disclaimers.</strong></p><ol><li>No trademark or patent rights held by Affirmer are
          waived, abandoned, surrendered, licensed or otherwise
          affected by this document.</li><li>Affirmer offers the Work as-is and makes no
	  representations or warranties of any kind concerning the
	  Work, express, implied, statutory or otherwise, including
	  without limitation warranties of title, merchantability,
	  fitness for a particular purpose, non infringement, or the
	  absence of latent or other defects, accuracy, or the present
	  or absence of errors, whether or not discoverable, all to
	  the greatest extent permissible under applicable law.</li><li>Affirmer disclaims responsibility for clearing rights of
	  other persons that may apply to the Work or any use thereof,
	  including without limitation any person's Copyright and
	  Related Rights in the Work. Further, Affirmer disclaims
	  responsibility for obtaining any necessary consents,
	  permissions or other rights required for any use of the
	  Work.</li><li>Affirmer understands and acknowledges that Creative
	  Commons is not a party to this document and has no duty or
	  obligation with respect to this CC0 or use of the Work.</li></ol>





[FOSSA]: # (Do not touch the comments below)

[FOSSA]: # (==depsig=5854ee56e8c1e5bcecfb59f922fdf6f2cc1ce07c1e21c911677499e3ebe33212==)
