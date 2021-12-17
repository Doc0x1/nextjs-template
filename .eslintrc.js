module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: ['plugin:@next/next/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
}
