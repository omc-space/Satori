interface Options {
  subtitle?: string
  title?: string
  show?: boolean
}

export const useHeaderInfo = (function () {
  const info = reactive({
    show: false,
    subtitle: '',
    title: '',
  })
  return function (options?: Options) {
    if (options) {
      info.show = options.show ?? true
      info.subtitle = options.subtitle ?? ''
      info.title = options.title ?? ''
    }
    return info
  }
})()
