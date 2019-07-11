module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extra-semi': 1, // 禁止多余的冒号
    'no-invalid-this': 2, // 禁止无效的this，只能用在构造器，类，对象字面量
    'linebreak-style': [1, 'windows'], // 换行风格
    'no-multi-spaces': 1, // 不能用多余的空格
    'no-redeclare': 2, // 禁止重复声明变量
    'no-restricted-modules': 1, // 如果禁用了指定模块，使用就会报错
    'no-trailing-spaces': 1, // 一行结束后面不要有空格
    'no-undef': 1, // 不能有未定义的变量
    'arrow-spacing': 1, //= >的前/后括号
    'eqeqeq': 2, // 必须使用全等
    'indent': [1, 2]// 缩进风格
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
