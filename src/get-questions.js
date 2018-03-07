/**
 * @copyright 2017-present, Charlike Mike Reagent <olsten.larck@gmail.com>
 * @license Apache-2.0
 */

/* eslint-disable import/no-commonjs */

module.exports = (argv) =>
  [
    {
      type: 'select',
      name: 'type',
      message: 'Select the type of this change',
      choices: [
        { title: 'A bug fix', value: 'fix' },
        { title: 'New feature', value: 'feat' },
        { title: 'Breaking change', value: 'major' },
        { title: 'Non src or test files changes', value: 'chore' },
        { title: 'Documentation only changes', value: 'docs' },
      ],
    },
    argv.scope && {
      type: 'text',
      name: 'scope',
      message: 'What is the scope of this change?',
    },
    {
      type: 'text',
      name: 'subject',
      message: 'Short, imperative tense description',
    },
    argv.body && {
      type: 'text',
      name: 'body',
      message: 'Longer description (or fixes #17423, closes #33)',
    },
    argv.footer && {
      type: 'text',
      name: 'footer',
      message: 'List issues or PRs (e.g. fixes #1771, resolves #371)',
    },
  ].filter(Boolean)
