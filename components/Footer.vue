<script setup lang="ts">
const links = [
  [
    {
      name: '关于本站',
      link: '/about',
    },
    {
      name: '关于我',
      link: '/aboutme',
    },
    {
      name: '关于此项目',
      link: 'https://github.com/omc-space/Satori',
      target: '_blank',
    },
  ],
  [
    {
      name: '时间线',
      link: '/timeline',
    },
    {
      name: '友链',
      link: '/friends',
    },
    {
      name: '监控',
      link: '/message',
    },
  ],
  [
    {
      name: '写留言',
      link: '/message',
    },
    {
      name: '发邮件',
      link: 'mailto:iiuzrw@gmail.com',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/dva-ren',
      target: '_blank',
    },
  ],
]
const {data: otherKeys} = useAsyncData(()=> getSystemKey('other'))
</script>

<template>
  <div border-t p-4 text-sm lh-8 dark:border-gray-200>
    <div class="relative mx-auto max-w-7xl lg:px-8">
      <div class="flex flex-col lg:flex-row lg:gap-4">
        <div v-for="i, idx in links" :key="idx" flex gap-2>
          <NuxtLink
            v-for="j in i"
            :key="j.name"
            :to="j.link"
            class="hover:underline"
            :target="j?.target"
          >
            {{ j.name }}
          </NuxtLink>
        </div>
      </div>
      <div flex flex-col items-center justify-between op-80 lg:flex-row gap-2>
        <div class="text-center lg:text-left">
          <div>
            <span>© 2020-2024</span>
            <NuxtLink target="_blank" to="https://github.com/dva-ren">
              dva-ren
            </NuxtLink>
            <span>Stay hungry. Stay foolish.</span>
          </div>
          <div class="flex flex-col lg:flex-row">
            <div>
              <span>Powered by</span>
              <NuxtLink class="satori-link--underline" target="_blank" to="https://github.com/omc-space" ml-1>
                omc-space
              </NuxtLink>
              <span>.</span>
              <NuxtLink class="satori-link--underline" target="_blank" to="https://github.com/omc-space/Satori">
                Satori
              </NuxtLink>
            </div>
            <div>
              <NuxtLink v-if="otherKeys?.icp" class="satori-link--underline" target="_blank" to="http://beian.miit.gov.cn/" mx-2>
                {{ otherKeys.icp }}
              </NuxtLink>
              <spa mx-1>正在被 ? 人看爆</spa>
            </div>
          </div>
        </div>
        <DarkToggle />
      </div>
    </div>
  </div>
</template>
