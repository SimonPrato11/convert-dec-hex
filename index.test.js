import { convert } from './index.js'

const options = [
  [10, 'A'],
  [15, 'F'],
  [30, '1E'],
  [12232, '2FC8'],
  ['sds', 'Its not a number'],
]

test.each(options)('%s should return %s', (input, expected) => {
  expect(convert(input)).toBe(expected)
})
