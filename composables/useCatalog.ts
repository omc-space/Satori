import { useCatalogState } from './state'

export interface Catelog {
  id: string
  type: string
  text: string
  top: number
}
const show = ref(false)
const anchor = ref<Catelog[]>([])
const active = ref('')

export function useCatalog() {
  const catelog = useCatalogState()
  const parse = () => {
    try {
      const article = document.querySelector('.markdown-body')!
      if (!article)
        return
      const titleDoms = article.querySelectorAll('h1,h2,h3,h4')
      const temp: Catelog[] = []
      titleDoms.forEach((item, idx) => {
        const h = item.nodeName.substring(0, 2).toLowerCase()
        const id = `${h}-${idx}`
        item.id = id
        temp.push({
          id: `#${id}`,
          type: `catalog-${h}`,
          text: item.textContent || '',
          top: item.offsetTop,
        })
      })
      anchor.value = temp
      catelog.value.data = temp
      const addEvent = useThrottleFn(() => {
        const top = document.documentElement.scrollTop
        for (let i = 0; i < anchor.value.length; i++) {
          if (top > anchor.value[i].top)
            active.value = anchor.value[i].id
        }
      }, 100)
      if (anchor.value.length)
        document.body.onscroll = addEvent
    }
    catch (e) {
      console.error('目录解析失败=>', e)
    }
  }
  return { anchor, active, show, parse }
}
