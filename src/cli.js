#!/usr/bin/env node

/**
 * @copyright 2017-present, Charlike Mike Reagent <olsten.larck@gmail.com>
 * @license Apache-2.0
 */

const asky = require('asky');
const execa = require('execa');
const gitcommit = require('./index.js');

const questions = [
  {
    name: 'type',
    message: 'What is the type of the change?',
    required: true,
  },
  {
    name: 'scope',
    message: 'What is the scope of this change?',
    default: '*',
    required: false,
  },
  {
    name: 'subject',
    message: 'Short description of the change:',
    required: true,
  },
  {
    name: 'body',
    message: 'Provide longer description of the change:',
    default: null,
    required: false,
  },
];

const onerror = (er) => {
  console.error(er.message || er);
  process.exit(1);
};

const app = asky();

app
  .ask(questions)
  .then((answers) => {
    const answer = answers.reduce((acc, x) => Object.assign({}, acc, x), {});
    const args = gitcommit(answer);
    const command = ['git commit'].concat(args).join(' ');

    return execa.shell(command);
  }, onerror)
  .catch(onerror);
