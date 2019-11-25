module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 'warn',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    // 'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
  },
};
