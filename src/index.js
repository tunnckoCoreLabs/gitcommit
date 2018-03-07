/**
 * @copyright 2017-present, Charlike Mike Reagent <olsten.larck@gmail.com>
 * @license Apache-2.0
 */

/* eslint-disable import/no-commonjs */

module.exports = (options) => {
  const opts = Object.assign({}, options)
  const { type, subject, body } = opts

  if (!isValid(type) || !isValid(subject)) {
    throw new Error('gitcommit: options.type and options.subject required')
  }

  const scope = isValid(opts.scope) ? `(${opts.scope})` : ''
  const header = JSON.stringify(`${type}${scope}: ${subject.replace(/\.$/, '')}`)

  let args = [header]

  if (isValid(body)) {
    // empty line before the body
    args = args.concat('""', JSON.stringify(body))
  }

  if (isValid(opts.footer)) {
    // empty line before the footer
    args = args.concat('""', JSON.stringify(opts.footer))
  }

  return args
}

function isValid(val) {
  return val && typeof val === 'string' && val.length > 0
}
