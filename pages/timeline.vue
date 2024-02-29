<script lang="ts" setup>
import { getOutOfDate, getOutOfYear } from '~/composables/date'
import BaseLayout from '~/layouts/base.vue'

const outOfTime = ref<string | number>(0)

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
  <div class="base-container mb-16 prose">
    <header class="mb-18">
      <h1>时间线</h1>
      <div class="mt-8 font-bold">
        共有269篇文章, 继续加油!
      </div>
      <CommonDivider w-20 />
      <div class="text-sm">
        <p>今天是 {{ dateFns().year() }} 年的第 {{ dateFns().dayOfYear() }} 天</p>
        <p>今年已过 {{ getOutOfYear() }}%</p>
        <p>今天已过 {{ outOfTime }}%</p>
        <p>活在当下，珍惜眼下</p>
      </div>
    </header>
    <div>
      <CommonMotion
        v-for="o, idx in 2"
        :key="idx"
        :initial="{ scale: 0.95, opacity: 0 }"
        :animate="{ scale: 1, opacity: 1 }"
        :transition="{ delay: (idx + 1) * 0.15 }"
      >
        <div class="pre-line">
          202{{ o }}(6)
        </div>
        <ul class="timeline-container text-sm">
          <li
            v-for="i in 10"
            :key="i"
            class="timeline-item flex justify-between gap-2 text-gray-600"
          >
            <div>
              <span mr-2>02/04</span>
              <CommonLink to="/post/xxx" class="flex-1">
                模块化的请求数据统一管理的构想
              </CommonLink>
            </div>
            <div class="text-xs">
              编程/博文
            </div>
          </li>
        </ul>
      </CommonMotion>
    </div>
  </div>
</template>
