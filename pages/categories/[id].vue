<script setup lang="ts">
definePageMeta({
  layout: 'base',
})
</script>

<template>
  <div>
    <CommonMotion
      :initial="{ scale: 0.95, y: 5, opacity: 0 }"
      :animate="{ scale: 1, y: 0, opacity: 1 }"
    >
      <h1 class="text-3xl font-bold">
        分类 - 编程
      </h1>
      <div class="mt-4">
        当前共有 56 篇文章，加油！
      </div>
    </CommonMotion>
    <ul class="timeline-container mt-12 text-sm text-secondary">
      <CommonMotion
        v-for="i in 10"
        :key="i"
        class="timeline-item flex justify-between"
        :delay="(i + 4) * 0.08"
      >
        <CommonLink to="/post/:id()">
          模块化的请求数据统一管理的构想
        </CommonLink>
        <div>01/30/2024</div>
      </CommonMotion>
    </ul>
  </div>
</template>
