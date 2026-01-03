import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['**/build/**'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "CallExpression[callee.object.name='console'][callee.property.name='log'] > Identifier[name='accessToken']",
          message: 'Avoid logging access tokens via console.log',
        },
        {
          selector:
            "CallExpression[callee.object.name='console'][callee.property.name='log'] > Identifier[name='refreshToken']",
          message: 'Avoid logging refresh tokens via console.log',
        },
        {
          selector:
            "CallExpression[callee.object.name='console'][callee.property.name='log'] > Identifier[name='token']",
          message: 'Avoid logging token variables via console.log',
        },
        {
          selector:
            "CallExpression[callee.object.name='console'][callee.property.name='log'] > Identifier[name='secret']",
          message: 'Avoid logging secrets via console.log',
        },
        {
          selector:
            "CallExpression[callee.object.name='console'][callee.property.name='log'] > Identifier[name='password']",
          message: 'Avoid logging passwords via console.log',
        },
      ],
    },
  },
];
