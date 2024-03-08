<script setup lang="ts">
import { useMasterStore } from '@/store/master'
import { formateRelativeTime } from '~/composables/date'
import { microDampingPreset } from '~/constants/spring'

useHead({
  title: '首页',
})
const { masterInfo } = useMasterStore()
const socials = computed(() => {
  if (!masterInfo.socialIds)
    return []
  const ids = Object.keys(masterInfo.socialIds).map((key) => {
    return {
      name: key,
      id: masterInfo.socialIds[key],
    }
  })
  ids.push({
    name: 'mail',
    id: masterInfo.mail,
  })
  return ids
})

const { data: posts } = useAsyncData(() => getPosts({ page: 1, size: 5 }))
const { data: notes } = useAsyncData(() => getNoteList({ page: 1, size: 5 }))
const { data: links } = useAsyncData(() => getLinkList({ page: 1, size: 10 }))
</script>

<template>
  <!-- class=" lg:px-20 xl:px-40" -->
  <div class="mt-22 px-4 md:mt-0">
    <HomePageContainer>
      <template #left>
        <CommonMotion :spring="microDampingPreset" class="my-5">
          <h1 class="py-2 text-4xl font-medium">
            <CommonTextAnimate :text="`Hi, I'm ${masterInfo.name}👋。`"/>
          </h1>
          <h1 class="py-2 text-4xl font-medium">
            <CommonTextAnimate text="A NodeJS Full Stack &lt;Developer/&gt" :delay="1"/>
          </h1>
          <CommonMotion :spring="microDampingPreset" :transition="{delay: 2.8}">
            <p class="mb-8 mt-3 text-black/50 md:mb-14">
                An independent developer coding with love.
            </p>
            <div class="flex-center lg:block">
              <ClientOnly>
                <HomeSocialGroup :socials="socials" :init-delay="3" />
              </ClientOnly>
            </div>
          </CommonMotion>
        </CommonMotion>
        <CommonMotion :spring="microDampingPreset" class="absolute bottom-0 left-0 right-0 flex-center flex-col text-xs">
          <p>
            当第一颗卫星飞向大气层外，我们便以为自己终有一日会征服宇宙。
          </p>
          <div class="i-carbon:chevron-sort-down m-2 animate-bounce text-xl" />
        </CommonMotion>
      </template>
      <template #right>
        <div class="my-5">
          <CommonLazyLoadImage :src="masterInfo.avatar" class="m-auto h-60 w-60 rounded-full bg-gray-3" />
        </div>
      </template>
    </HomePageContainer>

    <HomePageContainer>
      <template #left>
        <h1 class="text-2xl font-medium">
          <p class="pb-4">
            <p py-2>这里或许有那么一些对于生活的感慨</p>
            <p py-2>也或许有那么一些对于技术的记录。</p>
          </p>
        </h1>
      </template>
      <template #right="{ visible }">
        <!-- TODO：fix 动画导致宽度异常 -->
        <!-- 需要添加overflow-hiddeb修复动画导致的宽度异常问题 -->
        <div v-if="visible" class="w-full flex-center flex-col">
          <CommonMotion
            v-for="i, idx in posts?.data"
            :key="i.id"
            :initial="{ x: 50, opacity: 0 }"
            :animate="{ x: 0, opacity: 1 }"
            :transition="{ delay: (idx + 1) * 0.2, easing: [.3, 1.02, .78, 1.0], duration: 0.8 }"
            class="my-2 w-full flex-center"
          >
            <PostHomeCard :post="i" />
          </CommonMotion>
          <CommonLink to="/post" class="m-auto my-10 text-x">
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
            <div v-if="notes?.data.length" class="my-6">
              <NuxtLink :to="`/note/${notes.data[0].nid}`">
                <div class="border rounded bg-gray/20 p-4 text-right shadow">
                  <div class="pt-14">
                    {{ notes.data[0].title }}
                  </div>
                  <div class="mt-1 text-xs">
                    {{ formateRelativeTime(notes.data[0].created) }}
                  </div>
                </div>
              </NuxtLink>
            </div>
            <p>这里还有一些历史回顾</p>
            <ul class="timeline-container my-10">
              <li v-for="i in notes?.data.slice(1, 5)" :key="i.id" class="timeline-item flex justify-between text-x">
                <CommonLink :to="`/note/${i.nid}`">
                  {{ i.title }}
                </CommonLink>
                <span class="text-xs text-black/50">{{ formateRelativeTime(i.created) }}</span>
              </li>
            </ul>
            <div class="my-10 text-center text-x">
              <CommonLink to="/timeline?type=notes" class="">
                还有更多要不要看看?
              </CommonLink>
            </div>
          </div>
        </div>
      </template>
      <template #right>
        <div class="flex-1 text-2xl font-medium">
          <p class="m-auto max-w-100 pb-4">
            <p>而在这里，你会看到一个不同的我，</p>
            <p>一个在生活中发现美，感受痛苦，洞察人性的我。</p>
          </p>
        </div>
      </template>
    </HomePageContainer>
    <div class="flex-center flex-col">
      <h1 class="text-center text-2xl font-medium">
        这些是我珍视的人，他们陪伴我走过人生的每一段旅程。
      </h1>
      <div class="grid grid-cols-3 mt-10 max-w-5xl min-w-0 gap-10 p-4 lg:grid-cols-5 md:grid-cols-4 lg:p-0">
        <NuxtLink 
        v-for="i in links?.data"
        :key="i.id"
        :to="i.url"
        target="_blank"
        class="flex-center flex-col"
        >
          <CommonLazyLoadImage :src="i.avatar" class="h-24 w-24 border border-gray/20 rounded-full bg-gray-100" />
          <div class="mt-4 text-center text-x">
            {{ i.name }}
          </div>
        </NuxtLink>
      </div>
      <div class="my-20 text-center text-x">
        <CommonLink to="/friends">
          还有更多要不要看看?
        </CommonLink>
      </div>
    </div>
  </div>
</template>
