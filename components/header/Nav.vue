<script setup lang="ts">
const bgPosition = reactive({
  show: false,
  left: 0,
  top: 0,
})
const route = useRoute()
const pathPrefix = computed(() => `/${route.path.split('/')[1]}`)
const selectIndex = ref(-1)

const menus = ref([
  {
    name: '首页',
    path: '/',
  },
  {
    name: '文稿',
    path: '/post',
  },
  {
    name: '手记',
    path: '/note',
  },
  {
    name: '速览',
    path: '/overview',
  },
  {
    name: '友链',
    path: '/link',
  },
  {
    name: '更多',
    path: '/more',
  },
])

const handleMouseMove = useThrottleFn((e: MouseEvent) => {
  bgPosition.show = true
  const bounds = (e.currentTarget as Element).getBoundingClientRect()
  bgPosition.left = e.clientX - bounds.left
  bgPosition.top = e.clientY - bounds.top
}, 50)

function handleMouseLeave() {
  bgPosition.show = false
}

function onMouseLeave() {
  selectIndex.value = -1
}

const spotlightStyle = computed(() => {
  return bgPosition.show ? `--position-x:${bgPosition.left}px;--position-y:${bgPosition.top}px` : ''
})
</script>

<template>
  <nav class="flex-center px-4">
    <div
      class="spotlight flex-center cursor-default rounded-full px-4 text-x shadow backdrop-blur-md transition"
      :style="spotlightStyle"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <CommonPopoverMenu
        v-for="i in menus" :key="i.path"
        :delay="{ show: 0, hide: 50 }"
      >
        <NuxtLink
          :to="i.path"
          class="relative inline-block px-4 py-2 hover:primary-color"
          :class="{ selected: pathPrefix === i.path }"
        >
          {{ i.name }}
          <span class="absolute bottom-0 left-0 hidden h-[1px] w-full" />
        </NuxtLink>
        <template #popper>
          <div
            class="relative flex flex-col text-sm"
            @mouseleave="onMouseLeave"
          >
            <div
              v-if="selectIndex !== -1"
              class="absolute inset-0 z--1 h-[36px] w-26 border rounded bg-gray-100 transition-300 dark:bg-[var(--dark-bg-color)]"
              :style="{ transform: `translate3d(0,${selectIndex * 36}px,0)` }"
            />
            <NuxtLink
              v-for="i, idx in 5" :key="i" to="/"
              class="h-[36px] w-26 text-center lh-[36px] transition hover:color-[var(--primary-color)]"
              @mouseenter="selectIndex = idx"
            >
              这是第{{ i }}项
            </NuxtLink>
          </div>
        </template>
      </CommonPopoverMenu>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
.spotlight {
  background-clip: padding-box;
  background: radial-gradient(
    124px circle at var(--position-x) var(--position-y),
    var(--spotlight-color) 0%,
    transparent 65%
  );
  backdrop-filter: blur(50px);
}
.selected {
  color: var(--primary-color);
  span {
    display: block;
    background: radial-gradient(
      circle at 25px 10px,
      var(--primary-color) 0%,
      transparent 100%
    );
  }
}
</style>
