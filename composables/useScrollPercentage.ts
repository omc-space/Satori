export function useScrollPercentage(el: Ref<HTMLElement | null | undefined>) {
  const percentage = ref(0)
  if (!process.client)
    return percentage

  const calculatePercentage = useThrottleFn(() => {
    if (!el.value)
      return

    const { offsetTop } = el.value
    const p = Math.floor(window.scrollY / offsetTop * 100) || 0
    if (p < 0)
      percentage.value = 0
    else if (p > 100)
      percentage.value = 100
    else
      percentage.value = p
  }, 20)

  onMounted(() => {
    window.addEventListener('scroll', calculatePercentage)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', calculatePercentage)
  })

  return percentage
}
