/* eslint-env node */
module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-undef": "warn",
    "no-multiple-empty-lines": "error",
    "@typescript-eslint/no-explicit-any": "warn",
  },
  root: true,
};
