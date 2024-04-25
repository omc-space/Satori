import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: true,
  typescript: {
    overrides: {
      'node/prefer-global/process': 'off',
    },
  },
})
