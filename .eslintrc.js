module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'consistent-return': 2,
    indent: [2, "space"],
    'no-else-return': 1,
    semi: [1, 'always'],
    'space-unary-ops': 2,
    'no- tabs': 0,
  },

};
