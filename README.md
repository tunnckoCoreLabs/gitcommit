# gitcommit [![npm version][npmv-img]][npmv-url] [![github release][github-release-img]][github-release-url] [![License][license-img]][license-url]

> Lightweight and joyful `git commit` replacement. Conventional Commits compliant.

<div id="thetop"></div>

_You might also be interested in [prompts][highlighted-link] or in the other [related projects](#related-projects)._

## Quality Assurance :100:

[![bitHound Code][bithound-code-img]][bithound-code-url]
[![Code Style Standard][standard-img]][standard-url]
[![Linux Build][circleci-img]][circleci-url]
[![Code Coverage][codecov-img]][codecov-url]
[![bitHound Score][bithound-score-img]][bithound-score-url]
[![bitHound Deps][bithound-deps-img]][bithound-deps-url]
[![Dependencies Status][dependencies-img]][dependencies-url]

If you have any _how-to_ kind of questions, please read [Code of Conduct](./CODE_OF_CONDUCT.md) and **ping me on [twitter](https://twitter.com/tunnckoCore)** or [open an issue][open-issue-url].  
You may also read the [Contributing Guide](./CONTRIBUTING.md). There, beside _"How to contribute?"_, we describe everything **_stated_** by the badges.

[![Make A Pull Request][prs-welcome-img]][prs-welcome-url]
[![Code Format Prettier][prettier-img]][prettier-url]
[![Node Security Status][nodesecurity-img]][nodesecurity-url]
[![Conventional Commits][ccommits-img]][ccommits-url]
[![Semantically Released][new-release-img]][new-release-url]
[![Renovate App Status][renovate-img]][renovate-url]

Project is [semantically](https://semver.org) & automatically released on [CircleCI][codecov-url] with [new-release][] and its [New Release](https://github.com/apps/new-release) Github Bot.

[![All Contributors Spec][all-contributors-img]](#contributors)
[![Newsletter Subscribe][tinyletter-img]][tinyletter-url]
[![Give thanks][give-donate-img]][give-donate-url]
[![Share Love Tweet][share-love-img]][share-love-url]
[![NPM Downloads Weekly][downloads-weekly-img]][npmv-url]
[![NPM Downloads Monthly][downloads-monthly-img]][npmv-url]
[![NPM Downloads Total][downloads-total-img]][npmv-url]

## Table of Contents

- [Install](#install)
- [API](#api)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Users](#users)
- [License](#license)

## Install

This project requires [**Node.js**][nodeversion-url] **v8.6** or above. Install it using [**yarn**](https://yarnpkg.com) **v1.3+** or [**npm**](https://www.npmjs.com) **v5.2+** package managers.

```
$ yarn add gitcommit
```

Or install it globally and for example run `gitcommit --scope`. It will prompt you with questions
for commit type, commit scope and commit subject (short description). The type and subject questions are required always, so you can't skip them.

```
$ yarn global add gitcommit
```

All `git commit` flags are available too.

```
# -s is --signoff, -S is --gpg-sign
$ gitcommit -S -s --scope --body --footer

# equivalent of above is following
# where -x is --scope, -y is --body and -w is --footer
$ gitcommit -Ssxyw
```

Above command will GPG Sign commit, add `Sign-off-by` at the end line, prompt
for commit scope, body and footer. Consider we commit breaking change.

```
$ gitcommit -Ssxyw
? Select the type of this change ›
❯  fix:   A bug fix
   feat:  New feature
   major: Breaking change
   chore: Non src or test files changes
   docs:  Documentation only changes
✔ What is the scope of this change? … refactor
✔ Short, imperative tense description … huge api change
✔ Longer description (or fixes #17423, closes #33) … some pretty long body description.
✔ List issues or PRs (e.g. fixes #1771, resolves #371) … fixes #33, resolves #511
```

The actual `git commit` command which will be executed is like

```
$ git commit --allow-empty-message -S -s -m "major(refactor): huge api change" -m "" -m "some pretty long body description." -m "" -m "fixes #33, closes #511"
```

<!-- 
A browser usage is also possible, thanks to the [unpkg.com](https://unpkg.com) CDN and [Rollup](https://ghub.now.sh/rollup) bundler.  
See available bundles at [`https://unpkg.com/gitcommit/dist/browser/`](https://unpkg.com/gitcommit/dist/browser/).

> _**Note:** May not work in the browser if some of the [Node.js builtin modules](https://github.com/juliangruber/builtins/blob/master/builtins.json) are used here._
 -->

## API

Review carefully the provided examples and the working [tests](./test).

**[back to top](#thetop)**

## Related Projects

Some of these projects are used here or were inspiration for this one, others are just related. So, thanks for your existance!
- [hela-config-tunnckocore](https://www.npmjs.com/package/hela-config-tunnckocore): Shareable Config (preset of tasks) for [hela][] task runner | [homepage](https://github.com/tunnckoCore/hela-config-tunnckocore "Shareable Config (preset of tasks) for [hela][] task runner")
- [new-release](https://www.npmjs.com/package/new-release): A stable alternative to [semantic-release][]. Only handles NPM publishing and nothing more… [more](https://github.com/tunnckoCore/new-release#readme) | [homepage](https://github.com/tunnckoCore/new-release#readme "A stable alternative to [semantic-release][]. Only handles NPM publishing and nothing more. For creating GitHub releases use the Semantic Release GitHub App")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Low-level package to handle completion and errors of sync or asynchronous functions… [more](https://github.com/hybridables/try-catch-core#readme) | [homepage](https://github.com/hybridables/try-catch-core#readme "Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such as [always-done][] to handle completion of anything.")

**[back to top](#thetop)**

## Contributing

Please read the [Contributing Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) documents for advices.  
For bugs reports and feature requests, [please create an issue][open-issue-url].

## Contributors

Thanks to the hard work of [these wonderful people](./CONTRIBUTORS.md) this project is alive and it also follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.  
[Pull requests](https://github.com/tunnckoCore/contributing#opening-a-pull-request), stars and all kind of [contributions](https://opensource.guide/how-to-contribute/#what-it-means-to-contribute) are always welcome.

## Users

You can see who uses `gitcommit` in the [USERS.md](./USERS.md) file. Please feel free adding this file if it not exists.  
If you or your organization are using this project, consider adding yourself to the list of users. **Thank You!**

## License

Copyright (c) 2017-present, [Charlike Mike Reagent][author-link] `<olsten.larck@gmail.com>`.  
Released under the [Apache-2.0 License][license-url].

---

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on March 07, 2018._  
_Project automation and management with [hela][] task framework._

[always-done]: https://github.com/hybridables/always-done
[dezalgo]: https://github.com/npm/dezalgo
[hela]: https://github.com/tunnckoCore/hela
[new-release]: https://github.com/tunnckoCore/new-release
[once]: https://github.com/isaacs/once
[semantic-release]: https://github.com/semantic-release/semantic-release

<!-- Heading badges -->

[npmv-url]: https://www.npmjs.com/package/gitcommit
[npmv-img]: https://img.shields.io/npm/v/gitcommit.svg?label=npm%20version

[github-release-url]: https://github.com/tunnckoCore/gitcommit/releases/latest
[github-release-img]: https://img.shields.io/github/release/tunnckoCore/gitcommit.svg?label=github%20release

[license-url]: https://github.com/tunnckoCore/gitcommit/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-Apache%202.0-blue.svg

<!-- [license-img]: https://img.shields.io/badge/license-tunnckoCore_1%2E0-blue.svg -->

<!-- Front line badges -->

[bithound-score-url]: https://www.bithound.io/github/tunnckoCore/gitcommit
[bithound-score-img]: https://www.bithound.io/github/tunnckoCore/gitcommit/badges/score.svg

[bithound-code-url]: https://www.bithound.io/github/tunnckoCore/gitcommit
[bithound-code-img]: https://www.bithound.io/github/tunnckoCore/gitcommit/badges/code.svg

[standard-url]: https://github.com/airbnb/javascript
[standard-img]: https://img.shields.io/badge/code_style-airbnb-brightgreen.svg

[circleci-url]: https://circleci.com/gh/tunnckoCore/gitcommit/tree/master
[circleci-img]: https://img.shields.io/circleci/project/github/tunnckoCore/gitcommit/master.svg

[codecov-url]: https://codecov.io/gh/tunnckoCore/gitcommit
[codecov-img]: https://img.shields.io/codecov/c/github/tunnckoCore/gitcommit/master.svg

[bithound-deps-url]: https://www.bithound.io/github/tunnckoCore/gitcommit/dependencies/npm
[bithound-deps-img]: https://www.bithound.io/github/tunnckoCore/gitcommit/badges/dependencies.svg

[dependencies-url]: https://david-dm.org/tunnckoCore/gitcommit
[dependencies-img]: https://img.shields.io/david/tunnckoCore/gitcommit.svg

<!-- Second front of badges -->

[prs-welcome-img]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs-welcome-url]: http://makeapullrequest.com
[prettier-url]: https://github.com/prettier/prettier
[prettier-img]: https://img.shields.io/badge/styled_with-prettier-f952a5.svg

[nodesecurity-url]: https://nodesecurity.io/orgs/tunnckocore/projects/a3213fd4-9f9a-46a1-a472-055c49331b92/master
[nodesecurity-img]: https://nodesecurity.io/orgs/tunnckocore/projects/a3213fd4-9f9a-46a1-a472-055c49331b92/badge

<!-- the original color of nsp: 
[nodesec-img]: https://img.shields.io/badge/nsp-no_known_vulns-35a9e0.svg -->

[ccommits-url]: https://conventionalcommits.org/
[ccommits-img]: https://img.shields.io/badge/conventional_commits-1.0.0-yellow.svg
[new-release-url]: https://github.com/tunnckoCore/new-release
[new-release-img]: https://img.shields.io/badge/semantically-released-05C5FF.svg
[nodeversion-url]: https://nodejs.org/en/download

[nodeversion-img]: https://img.shields.io/node/v/gitcommit.svg

[renovate-url]: https://renovateapp.com
[renovate-img]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg

<!-- Third badges line (After CodeSponsor.io ad) -->

[all-contributors-img]: https://img.shields.io/github/contributors/tunnckoCore/gitcommit.svg?label=all%20contributors&colorB=ffa500

[tinyletter-url]: https://tinyletter.com/tunnckoCore
[tinyletter-img]: https://img.shields.io/badge/join-newsletter-9caaf8.svg

<!-- 
[paypal-donate-url]: https://paypal.me/tunnckoCore/10
[paypal-donate-img]: https://img.shields.io/badge/$-support-f47721.svg
 -->

[give-donate-url]: https://paypal.me/tunnckoCore/10
[give-donate-img]: https://img.shields.io/badge/give-donation-f47721.svg

[downloads-weekly-img]: https://img.shields.io/npm/dw/gitcommit.svg
[downloads-monthly-img]: https://img.shields.io/npm/dm/gitcommit.svg
[downloads-total-img]: https://img.shields.io/npm/dt/gitcommit.svg

<!-- Miscellaneous -->

[share-love-url]: https://twitter.com/intent/tweet?text=https://github.com/tunnckoCore/gitcommit&via=tunnckoCore
[share-love-img]: https://img.shields.io/badge/tweet-about-1da1f2.svg

[open-issue-url]: https://github.com/tunnckoCore/gitcommit/issues/new
[highlighted-link]: https://ghub.now.sh/prompts
[author-link]: http://tunnckocore.com

