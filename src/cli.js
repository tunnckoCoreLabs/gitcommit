#!/usr/bin/env node

/**
 * @copyright 2018-present, Charlike Mike Reagent <olsten.larck@gmail.com>
 * @license Apache-2.0
 */

/* eslint-disable import/no-commonjs, import/no-nodejs-modules */

const process = require('process')
const execa = require('execa')
const mri = require('mri')
const prompts = require('prompts')
const dargs = require('./dargs')
const origAliases = require('./aliases')
const getQuestions = require('./get-questions')
const gitcommit = require('./index')

// Custom aliases - x, y, w. Free for now.
const customAliases = { x: 'scope', y: 'body', w: 'footer' }
const aliases = Object.assign({}, customAliases, origAliases)
const argv = mri(process.argv.slice(2), { alias: aliases })

/**
 * Run.
 */

async function run() {
  const bannedFlags = Object.keys(customAliases).reduce(
    (acc, key) => acc.concat(key, customAliases[key]),
    [],
  )

  const opts = await prompts(getQuestions(argv))
  const extra = dargs(argv, { alias: aliases, bannedFlags }).join(' ')
  const args = gitcommit(opts)
    .map((x) => `-m ${x}`)
    .join(' ')

  await execa.shell(`git commit --allow-empty-message ${args} ${extra}`)
}

run().catch((er) => {
  console.error(er.message || er)
  process.exit(1)
})
