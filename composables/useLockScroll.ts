export function useLockScroll(el?: HTMLElement) {
  if (!process.client)
    return

  let originalOverflow: string

  function lock() {
    el = el ?? document.body
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
