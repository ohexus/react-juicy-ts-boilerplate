module.exports = {
  reportUnusedDisableDirectives: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:react/recommended',
    'plugin:typescript-sort-keys/recommended',
  ],
  overrides: [
    {
      files: ['src/index.scss.d.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'react',
    'sort-destructure-keys',
    'typescript-sort-keys',
    '@typescript-eslint',
  ],
  rules: {
    // typescript-eslint overrides.
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],

    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/sort-type-union-intersection-members': ['error'],

    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': ['error', 'never', { css: 'always', svg: 'always' }],
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@*',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '*.{png,svg}',
            patternOptions: { matchBase: true },
            group: 'index',
            position: 'before',
          },
          {
            pattern: '*.scss',
            patternOptions: { matchBase: true },
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', { code: 100, ignoreTemplateLiterals: true, tabWidth: 2 }],
    'no-console': ['error', { allow: ['error'] }],
    'no-void': ['error', { allowAsStatement: true }],
    'object-curly-newline': 'off',
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-sort-default-props': ['error'],
    'react/jsx-sort-props': ['error', { reservedFirst: true, shorthandLast: true }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'sort-destructure-keys/sort-destructure-keys': ['error'],
    'sort-imports': 'off',
    'sort-keys': ['error'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
