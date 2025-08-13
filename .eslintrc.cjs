/* eslint-env node */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'playwright', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:playwright/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier'
    ],
    env: { node: true, es2022: true },
    parserOptions: { sourceType: 'module', ecmaVersion: 'latest' },
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        'playwright/no-wait-for-timeout': 'error',
        'import/order': [
            'warn',
            {
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true },
                groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']]
            }
        ]
    },
    overrides: [
        {
            files: ['tests/**/*.*'],
            rules: {
                '@typescript-eslint/no-non-null-assertion': 'off'
            }
        }
    ]
};


