import type { MaybeComputedElementRef, MaybeElement } from '@vueuse/core'

export function useScrollPercentage(el: MaybeComputedElementRef<MaybeElement>) {
  const { top, height } = useElementBounding(el)
  const bodyHeight = useWindowSize().height
  const percentage = computed(() => {
    if (bodyHeight.value === Number.POSITIVE_INFINITY)
      return 0
    const p = Math.round(-top.value / (height.value - bodyHeight.value) * 100)
    if (p < 0)
      return 0
    if (p > 100)
      return 100
    return p
  })

  return percentage
}
