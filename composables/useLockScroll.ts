export function useLockScroll(el?: HTMLElement) {
  if (!process.client)
    return

  let originalOverflow: string

  function lock() {
    el = el ?? document.documentElement
    originalOverflow = el.style.overflow
    el.style.overflow = 'hidden'
    el.style.paddingRight = '6px'
    const header = document.querySelector('header')
    if (header)
      header.style.paddingRight = '6px'
  }

  function unlock() {
    el = el ?? document.body
    el.style.overflow = originalOverflow ?? 'auto'
    el.style.paddingRight = '0px'
    const header = document.querySelector('header')
    if (header)
      header.style.paddingRight = '0px'
  }

  return {
    lock,
    unlock,
  }
}
