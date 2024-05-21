module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'google',
    'plugin:react/recommended',
    'prettier',
  ],

  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}', '*.tsx', '*.ts'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.json'],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    '@typescript-eslint/triple-slash-reference': 0,
    'require-jsdoc': 0,
    'valid-jsdoc': 0,
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-var': 0,
    'no-array-constructor': 0,
    'spaced-comment': 0,
    'react/display-name': 0,
    'import/extensions': 0,
    'one-var': 0,
    'react/jsx-no-target-blank': 0,
    'new-cap': 0,
    'react/prop-types': 0,
    'react/jsx-key': 0,
    'prefer-const': 0,
    camelcase: 0,
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.tsx', 'ts'],
      },
    },
  },
  globals: {
    JSX: 'readonly',
  },
};
