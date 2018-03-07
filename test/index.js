/**
 * @copyright 2018-present, Charlike Mike Reagent <olsten.larck@gmail.com>
 * @license Apache-2.0
 */

/* eslint-disable import/no-commonjs */

const test = require('mukla')
const gitcommit = require('../src/index')

test('should build arguments list from object', (done) => {
  const items = gitcommit({
    type: 'fix',
    scope: 'sasa',
    subject: 'this api is change to foo',
    body: 'BREAKING CHANGE: instead of bar use foo',
    footer: 'fixes #33, resolves #444',
  })

  test.strictEqual(items.length, 5)
  test.strictEqual(items[0], '"fix(sasa): this api is change to foo"')
  test.strictEqual(items[1], '""')
  test.strictEqual(items[2], '"BREAKING CHANGE: instead of bar use foo"')
  test.strictEqual(items[3], '""')
  test.strictEqual(items[4], '"fixes #33, resolves #444"')
  done()
})

test('should throw if no opts.subject or opts.type', (done) => {
  function fixture() {
    gitcommit({ body: 'foo bar baz' })
  }

  test.throws(fixture, 'gitcommit: options.type and options.subject required')
  done()
})

test('should allow opts.scope to be optional', (done) => {
  const items = gitcommit({
    type: 'feat',
    subject: 'exciting new feature',
    body: 'some longer description of the change',
  })

  test.strictEqual(items.length, 3)
  test.strictEqual(items[0], '"feat: exciting new feature"')
  test.strictEqual(items[1], '""')
  test.strictEqual(items[2], '"some longer description of the change"')
  done()
})

test('should build git commit command', (done) => {
  const items = gitcommit({
    type: 'chore',
    scope: 'pkg',
    subject: 'update deps',
    body: 'foo bar baz',
    footer: 'Signed-off-by: Charlike Mike Reagent',
  })

  const flags = items.map((x) => `-m ${x}`).join(' ')
  const cmd = `git commit --allow-empty-message ${flags}`

  test.ok(flags.startsWith('-m "chore(pkg): update deps" -m "" -m "foo bar baz" -m ""'))
  test.ok(flags.endsWith('-m "Signed-off-by: Charlike Mike Reagent"'))
  test.ok(cmd.startsWith('git commit --allow-empty-message -m "chore(pkg): update deps"'))
  done()
})
