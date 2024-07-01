import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
}, {
  rules: {
    'arrow-body-style': ['error', 'always'],
    '@typescript-eslint/no-empty-interface': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'unused-imports/no-unused-vars': 'warn',
    'ts/no-non-null-asserted-optional-chain': 'warn',
    'style/max-statements-per-line': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-console': 'warn',
    'no-void': ['error', { allowAsStatement: true }],
  },
})
