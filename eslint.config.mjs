// @ts-check
// eslint.config.mjs

import eslint from '@eslint/js'
// import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
// import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginPrettierRecommended
)
