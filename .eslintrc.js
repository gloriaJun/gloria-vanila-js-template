module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
      './packages/**/tsconfig.json',
    ],
    sourceType: 'module',
  },
  plugins: [],
  extends: ['gloria-base'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {},
  overrides: [
  ],
};