export function useLockScroll(el?: HTMLElement) {
  if (!process.client)
    return

  let originalOverflow: string
  el = el ?? document.body

  function lock() {
    originalOverflow = el.style.overflow
    el.style.overflow = 'hidden'
  }

  function unlock() {
    el = el ?? document.body
    el.style.overflow = originalOverflow ?? 'auto'
  }

  return {
    lock,
    unlock,
  }
}
