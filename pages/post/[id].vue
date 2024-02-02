<script setup lang="ts">
const fullPath = computed(() => window.location.href)
</script>

<template>
  <NuxtLayout name="post" class="m-auto max-w-6xl">
    <div>
      content
      <section class="py-6 text-xs text-gray-600 lh-6">
        <div>文章标题：由一个钟表引发的思考</div>
        <div>文章作者：<span class="text-gray-500">Innei</span></div>
        <div>
          <span>文章链接：<span class="text-gray-500">{{ fullPath }}</span></span>
          <button class="ml-1 select-none">
            [复制]
          </button>
        </div>
        <div>最后修改时间: 2022 年 01 月 08 日 14:45</div>
        <CommonDivider />
        <div>版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</div>
      </section>
      <Comment class="mt-8" />
    </div>
    <template #aside>
      <div>
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </div>
    </template>
  </NuxtLayout>
</template>
