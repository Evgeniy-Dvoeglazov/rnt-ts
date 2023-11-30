/* eslint-env node */
module.exports = {
  env: {
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    "no-unused-vars": "off",
    '@typescript-eslint/no-var-requires': 'off',
    'no-undef': 'warn',
    "@typescript-eslint/no-explicit-any": "off"
  },
  root: true,
};
