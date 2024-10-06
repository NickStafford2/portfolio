// @ts-check

import eslint from '@eslint/js'
import jestPlugin from 'eslint-plugin-jest'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        ignores: [
            '**/*.mjs',
            'eslint.config.mjs',
            '**/build/**',
            '**/dist/**',
            '**/*.js',
        ],
    },
    eslint.configs.recommended,
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            jest: jestPlugin,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            '@typescript-eslint/no-unsafe-argument': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',
        },
    },
    {
        // disable type-aware linting on JS files
        files: ['**/*.js', '**/*.jsx'],
        ...tseslint.configs.disableTypeChecked,
    },
    {
        // enable jest rules on test files
        files: ['test/**'],
        ...jestPlugin.configs['flat/recommended'],
    }
)
