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
    indent: 2,
    'no-else-return': 1,
    semi: 1,
    'space-unary-ops': 2,
    'no- tabs': 0
  }

};
