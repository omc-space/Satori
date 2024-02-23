<script lang="ts" setup>
interface SocialType {
  name: string
  iconClass: string
  color: string
  url: (id: string) => string
}
interface Social {
  name?: keyof typeof socialList
  id?: string
  social?: SocialType
}

const props = defineProps<{ socials: Social[] }>()

const socialList: Record<string, SocialType> = {
  bilibili: {
    name: 'bilibili',
    url: (id: string) => `https://www.bilibili.com/${id}`,
    color: '#00a1d6',
    iconClass: 'i-tabler:brand-bilibili',
  },
  netease: {
    name: '网易云音乐',
    url: (id: string) => `https://music.163.com/#/song?id=${id}`,
    color: '#c10d0c',
    iconClass: 'i-tabler:brand-netease-music',
  },
  github: {
    name: 'GitHub',
    url: (id: string) => `https://github.com/${id}`,
    color: '#000000',
    iconClass: 'i-tabler:brand-github',
  },
  zhihu: {
    name: '知乎',
    url: (id: string) => `https://www.zhihu.com/people/${id}`,
    color: '#0084ff',
    iconClass: 'i-tabler:brand-zhihu',
  },
  mail: {
    name: '邮箱',
    url: (id: string) => `mailto:${id}`,
    color: '#000000',
    iconClass: 'i-tabler:mail',
  },
  weibo: {
    name: '微博',
    url: (id: string) => `https://weibo.com/${id}`,
    color: '#e6162d',
    iconClass: 'i-tabler:brand-weibo',
  },
  x: {
    name: 'X',
    url: (id: string) => `https://twitter.com/${id}`,
    color: '#1da1f2',
    iconClass: 'i-tabler:brand-twitter',
  },
  qq: {
    name: 'QQ',
    url: (id: string) => `tencent://message/?uin=${id}&Site=&Menu=yes`,
    color: '#1296db',
    iconClass: 'i-tabler:brand-qq',
  },
  default: {
    name: 'default',
    url: (id: string) => `https://error/${id}`,
    color: '#000000',
    iconClass: 'tabler:error-404',
  },
}
</script>

<template>
  <div class="flex gap-3">
    <CommonTooltip
      v-for="social, idx in props.socials"
      :key="social.name"
    >
      <CommonMotion
        :initial="{ y: 60, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :transition="{ delay: idx * 0.15 }"
      >
        <NuxtLink
          :to="socialList[social.name ?? 'default']?.url(social.id ?? '')"
          target="_blank"
          :style="{ backgroundColor: socialList[social.name ?? 'default']?.color }"
          class="inline-block rounded-full p-1.8 text-4.5 text-white hover:scale-102"
        >
          <div
            :class="socialList[social.name ?? 'default']?.iconClass"
          />
        </NuxtLink>
      </CommonMotion>

      <template #popper>
        <div class="text-x">
          {{ socialList[social.name ?? 'default']?.name }}
        </div>
      </template>
    </CommonTooltip>
  </div>
</template>
