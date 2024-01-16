<script setup lang="ts">
const bgPosition = reactive({
  show: false,
  left: 0,
  top: 0,
})
const route = useRoute()
const pathPrefix = computed(() => `/${route.path.split('/')[1]}`)

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
      <VMenu v-for="i in menus" :key="i.path">
        <NuxtLink
          :to="i.path"
          class="relative inline-block px-4 py-2 hover:primary-color"
          :class="{ selected: pathPrefix === i.path }"
        >
          {{ i.name }}
          <span class="absolute bottom-0 left-0 hidden h-[1px] w-full" />
        </NuxtLink>
        <template #popper>
          <ul>
            <li v-for="i in 5" :key="i" w-20 p-2 text-center>
              <NuxtLink>
                {{ i }}
              </NuxtLink>
            </li>
          </ul>
        </template>
      </VMenu>
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

<style>
.v-popper--theme-dropdown .v-popper__inner {
  padding: 6px;
}

.v-popper--theme-my-theme.v-popper__popper--hidden {
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.15s,
    visibility 0.15s;
}

.v-popper--theme-my-theme.v-popper__popper--shown {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}

.v-popper--theme-my-theme .v-popper__arrow-outer {
  visibility: hidden;
}

.v-popper--theme-my-theme .v-popper__arrow-inner {
  visibility: hidden;
}
</style>
