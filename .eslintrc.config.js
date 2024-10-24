import pluginQuery from '@tanstack/eslint-plugin-query'

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  ...pluginQuery.configs['flat/recommended'],
  ...eslintPluginPrettierRecommended,
  {
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      'no-shadow': "off",
      camelcase: "off",
      'no-mixed-operators': "error",
      'no-unneeded-ternary': "error",
      'no-nested-ternary': "off",
      'no-use-before-define': "off",
      'no-lonely-if': "error"
    }
  }
]
