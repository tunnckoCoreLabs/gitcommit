/**
 * @copyright 2017-present, Charlike Mike Reagent <olsten.larck@gmail.com>
 * @license Apache-2.0
 */

module.exports = function gitcommit (opts) {
  const answer = Object.assign(
    {
      type: 'fix',
      scope: '*',
      subject: '',
      body: null,
    },
    opts
  );

  const header = `${answer.type}(${answer.scope}): ${answer.subject}`;
  const body = answer.body ? ['-m', JSON.stringify(answer.body)] : null;
  const args = []
    .concat('-m', JSON.stringify(header))
    .concat(body)
    .filter(Boolean);

  return args;
};
