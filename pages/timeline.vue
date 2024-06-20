<script lang="ts" setup>
import { getTimeline } from '~/composables/api'
import { getOutOfDate, getOutOfYear } from '~/composables/date'

useHead({
  title: '时间线',
})
const route = useRoute()
const outOfTime = ref<string | number>(0)
const len = ref(0)
const type = computed(() => {
  if (route.query.type === 'post')
    return { type: 0 }
  if (route.query.type === 'note')
    return { type: 1 }
  return {}
})
const { data, refresh, pending } = useAsyncData(async () => {
  const res = await getTimeline({ ...type.value, sort: -1 })
  const result: Record<number, Array<any>> = {}
  res.data?.notes?.forEach((item) => {
    const year = dateFns(item.created).year()
    if (!result[year])
      result[year] = []

    result[year].push({
      ...item,
      type: 'note',
    })
  })
  res.data?.posts?.forEach((item) => {
    const year = dateFns(item.created).year()
    if (!result[year])
      result[year] = []

    result[year].push({
      ...item,
      type: 'post',
    })
  })
  const keys = Object.keys(result).sort((a, b) => Number(b) - Number(a)) as any as Array<keyof typeof result>
  let count = 0
  const sortResult: Array<{ data: Array<any>, year: number }> = []
  keys.forEach((key) => {
    count += result[key].length
    result[key].sort((a, b) => dateFns(a.created).unix() - dateFns(b.created).unix())
    sortResult.push({
      data: result[key],
      year: key,
    })
  })
  len.value = count
  return sortResult
})

watch(type, () => {
  refresh()
})

let timer: any
onMounted(() => {
  timer = setInterval(() => {
    outOfTime.value = getOutOfDate(new Date()).toFixed(8)
  }, 10)
})
onBeforeMount(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="mb-16 prose base-container">
    <header class="mb-18">
      <h1>时间线</h1>
      <div class="mt-8 font-bold">
        共有 {{ len }} 篇文章, 继续加油!
      </div>
      <CommonDivider w-20 />
      <div class="text-sm">
        <p>今天是 {{ dateFns().year() }} 年的第 {{ dateFns().dayOfYear() }} 天</p>
        <p>今年已过 {{ getOutOfYear() }}%</p>
        <p>今天已过 {{ outOfTime }}%</p>
        <p>活在当下，珍惜眼下</p>
      </div>
    </header>
    <div v-if="!pending">
      <div
        v-for="item, idx of data"
        :key="item.year"
      >
        <Motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ delay: idx * 0.15 + 0.2 }"
        >
          <div class="pre-line">
            <span>{{ item.year }}</span>
            <span ml-1 text-x text-gray-800>({{ item.data.length }})</span>
          </div>
          <ul class="timeline-container text-sm">
            <li
              v-for="i in item.data"
              :key="i.id"
              class="timeline-item flex items-center justify-between gap-2 text-gray-600"
            >
              <div class="min-w-0 flex-center">
                <span mr-2>{{ dateFns(i.created).format('MM/DD') }}</span>
                <CommonLink :to="`/${i.type}/${i.nid ?? i._id}`" class="min-w-0 flex-1 text-omit">
                  {{ i.title }}
                </CommonLink>
                <div v-if="i.hasMemory" i-tabler:bookmark-filled text-red />
              </div>
              <div class="hidden text-xs md:flex">
                <div v-if="i.type === 'post'">
                  <span>{{ i?.category?.name }}</span>
                </div>
                <div v-else flex>
                  <span>心情：{{ i.mood }}</span>
                  <span>/</span>
                  <span>天气：{{ i.weather }}</span>
                </div>
                <span>/</span>
                <span>{{ i.type === 'post' ? '博文' : '手记' }}</span>
              </div>
            </li>
          </ul>
        </Motion>
      </div>
    </div>
  </div>
</template>
