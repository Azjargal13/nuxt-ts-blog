module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs/eslint-config'
  ],
  rules: {
    'consistent-return': 2,
    'indent': [2, "space"],
    'no-else-return': 1,
    'semi': [1, 'always'],
    'space-unary-ops': 2,
    'no- tabs': 0,
  }

};