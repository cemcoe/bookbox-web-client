/* eslint-disable prettier/prettier */

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser', // 要对 Vue script lint
  parserOptions: {
    // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
    parser: '@typescript-eslint/parser', // 要对 Vue script lint
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'], // 对 typescript lint
  extends: [
    'plugin:vue/vue3-essential', // 对 Vue lint
    'eslint:recommended', // ESLint 的默认规格集，不需要额外的插件
    'plugin:@typescript-eslint/recommended',
    // 为了保证格式化后代码都以prettier为准，把这两项配置放到数组最后
    'plugin:prettier/recommended',
    'prettier'
  ]
};
