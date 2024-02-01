import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    // add your custom rules here
    overrides: {
      typescript: {
        'node/prefer-global/process': 'off',
      },
    },
  },
)
