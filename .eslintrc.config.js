import pluginQuery from '@tanstack/eslint-plugin-query'

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  ...pluginQuery.configs['flat/recommended'],
  ...eslintPluginPrettierRecommended,
  {
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      'no-shadow': 'off',
      camelcase: 'off',
      'no-mixed-operators': 'error',
      'no-unneeded-ternary': 'error',
      'no-nested-ternary': 'off',
      'no-use-before-define': 'off',
      'no-lonely-if': 'error',
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['sibling', 'index']],
          pathGroups: [
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/design-system/**',
              group: 'external',
              position: 'after',
            },
            ...Object.keys(tsconfig.compilerOptions.paths).map(key => ({
              pattern: `${key}*`,
              group: 'internal',
              position: 'after',
            })),
          ],
          pathGroupsExcludedImportTypes: [
            'builtin',
            'sibling',
            'index',
            'object',
            'type',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
  },
]
