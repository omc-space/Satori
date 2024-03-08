<script setup lang="ts">
import { useMasterStore } from '~/store/master'

const { y } = useWindowScroll()
const { data: menus } = useAsyncData(() => getMenus())

const showBg = computed(() => y.value > 50)

const masterStore = useMasterStore()
const headerInfo = masterStore.headerInfo
const route = useRoute()
const isMiniSize = computed(() => useWindowSize().width.value < 768)
</script>

<template>
  <header
    v-if="menus"
    :class="showBg ? 'bg-white/80 dark:bg-black/50 dark:shadow-white/20 shadow backdrop-blur-md' : ''"
    class="fixed left-0 right-0 top-0 z-10 h-16 w-full transition duration-200"
  >
    <div class="relative grid grid-cols-[4.5rem_auto_4.5rem] mx-auto h-full max-w-7xl min-h-0 lg:px-8">
      <div class="flex-center">
        <CommonHeaderMpNav v-if="isMiniSize" :menus="menus.data" class="flex lg:hidden" />
        <NuxtLink v-if="!isMiniSize" to="/" class="flex-center">
          <CommonLazyLoadImage class="h-10 w-10 rounded-4 bg-gray-3" :src="masterStore.masterInfo.avatar" alt="home" />
        </NuxtLink>
      </div>
      <div relative flex-center>
        <Presence :exit-before-enter="false" :initial="true">
          <CommonMotion
            v-if="headerInfo.show && showBg"
            class="absolute left-0 w-full flex flex-row justify-between text-omit px-2 md:px-8"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :exit="{ opacity: 0, y: 20 }"
            :spring="{ stiffness: 400, damping: 20 }"
          >
            <div>
              <div class="mb-1 text-xs text-zinc">
                {{ headerInfo.subtitle }}
              </div>
              <div>
                {{ headerInfo.title }}
              </div>
            </div>
            <div v-if="!isMiniSize">
              <div class="mb-1 text-xs text-zinc">
                {{ route.path.split('/')[-1] }}
              </div>
              <div class="text-x">
                {{ masterStore.masterInfo.name }}
              </div>
            </div>
          </CommonMotion>
        </Presence>
        <Transition name="fade" flex-center>
          <NuxtLink v-if="!showBg && isMiniSize" to="/" class="- absolute left-1/2 flex-center -translate-x-1/2">
            <CommonLazyLoadImage class="h-10 w-10 rounded-4 bg-gray-3" :src="masterStore.masterInfo.avatar" alt="home" />
          </NuxtLink>
        </Transition>
        <Transition name="fade" flex-center>
          <CommonHeaderNav v-if="!showBg || !headerInfo.show" :menus="menus.data" class="hidden lg:flex" />
        </Transition>
      </div>
      <div class="flex-center">
        <CommonIconButton>
          <div class="i-tabler:user-plus" />
        </CommonIconButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
