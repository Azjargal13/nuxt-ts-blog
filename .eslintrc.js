module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs/eslint-config'
  ],
  env: {
    browser: true,
    node: true,
    es2021: true
  }
}
