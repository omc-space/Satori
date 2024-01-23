<script setup lang="ts">
const social = [
  {
    name: 'bilibili',
    id: '1',
  },
  {
    name: 'zhihu',
    id: '2',
  },
  {
    name: 'github',
    id: '3',
  },
  {
    name: 'twitter',
    id: '4',
  },
  {
    name: 'weibo',
    id: '5',
  },
  {
    name: 'netease',
    id: '6',
  },
  {
    name: 'mail',
    id: '7',
  },
]
</script>

<template>
  <!-- class=" lg:px-20 xl:px-40" -->
  <div class="px-4">
    <HomePageContainer>
      <template #left>
        <div class="my-5">
          <h1 class="py-2 text-4xl font-medium">
            Hi, I'm Innei👋。
          </h1>
          <h1 class="py-2 text-4xl font-medium">
            A NodeJS Full Stack &lt;Developer/&gt;
          </h1>
          <p class="mb-16 mt-3 text-black/50">
            An independent developer coding with love.
          </p>
          <div class="flex-center lg:block">
            <HomeSocialGroup :socials="social" class="lg:" />
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 flex-center flex-col text-xs">
          <p>
            当第一颗卫星飞向大气层外，我们便以为自己终有一日会征服宇宙。
          </p>
          <div class="i-carbon:chevron-sort-down m-2 animate-bounce text-xl" />
        </div>
      </template>
      <template #right>
        <div class="my-5">
          <div class="m-auto h-60 w-60 rounded-full bg-gray-3" />
        </div>
      </template>
    </HomePageContainer>

    <HomePageContainer>
      <template #left>
        <h1 class="text-2xl font-medium">
          <p class="pb-4">
            这里或许有那么一些对于生活的感慨<br>
            也或许有那么一些对于技术的记录。
          </p>
        </h1>
      </template>
      <template #right="{ visible }">
        <!-- TODO：fix 动画导致宽度异常 -->
        <!-- 需要添加overflow-hiddeb修复动画导致的宽度异常问题 -->
        <div v-if="visible" class="w-full flex-center flex-col overflow-hidden">
          <CommonMotion
            v-for=" i in 5"
            :key="i"
            :initial="{ x: 50, opacity: 0 }"
            :animate="{ x: 0, opacity: 1 }"
            :transition="{ delay: (i + 1) * 0.2, easing: [.3, 1.02, .78, 1.0], duration: 0.8 }"
            class="my-2 w-full flex-center"
          >
            <PostCard />
          </CommonMotion>
          <CommonLink to="/" class="m-auto my-10 text-x">
            还有更多要不要看看?
          </CommonLink>
        </div>
      </template>
    </HomePageContainer>
    <HomePageContainer>
      <template #left>
        <div class="flex-center flex-1">
          <div class="max-w-100 flex-1">
            <h1 class="text-xl">
              看看我的近况，我的所思所想、所作所为
            </h1>
            <div class="my-6">
              <NuxtLink to="/">
                <div class="border rounded bg-gray/20 p-4 text-right shadow">
                  <div class="pt-14">
                    穿越云南，穿梭荧幕
                  </div>
                  <div class="mt-1 text-xs">
                    5天前
                  </div>
                </div>
              </NuxtLink>
            </div>
            <p>这里还有一些历史回顾</p>
            <ul class="group-add-point my-10">
              <li v-for="i in 4" :key="i" class="group-item flex justify-between py-1 text-x">
                <CommonLink to="/">
                  2024 开年
                </CommonLink>
                <span class="text-xs text-black/50">{{ i }}天前</span>
              </li>
            </ul>
            <div class="my-10 text-center text-x">
              <CommonLink to="/" class="">
                还有更多要不要看看?
              </CommonLink>
            </div>
          </div>
        </div>
      </template>
      <template #right>
        <div class="flex-1 text-2xl font-medium">
          <p class="m-auto max-w-100 pb-4">
            而在这里，你会看到一个不同的我，
            一个在生活中发现美，感受痛苦，洞察人性的我。
          </p>
        </div>
      </template>
    </HomePageContainer>
    <div class="flex-center flex-col">
      <h1 class="text-center text-2xl font-medium">
        这些是我珍视的人，他们陪伴我走过人生的每一段旅程。
      </h1>
      <div class="grid grid-cols-3 mt-10 max-w-5xl min-w-0 gap-10 p-4 lg:grid-cols-5 md:grid-cols-4 lg:p-0">
        <div v-for="i in 10" :key="i" class="flex-center flex-col">
          <div class="h-24 w-24 border border-gray/20 rounded-full" />
          <div class="mt-4 text-center text-x">
            Rikumi
          </div>
        </div>
      </div>
      <div class="my-20 text-center text-x">
        <CommonLink to="/">
          还有更多要不要看看?
        </CommonLink>
      </div>
    </div>
  </div>
</template>
