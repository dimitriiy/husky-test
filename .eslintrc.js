module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      env: { 'jest/globals': true },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
  ],
};
