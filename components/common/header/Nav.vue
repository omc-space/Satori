<script setup lang="ts">
import type { NavigationItem } from '~/types'

const { menus } = defineProps<{ menus: NavigationItem[] }>()
const bgPosition = reactive({
  show: false,
  left: 0,
  top: 0,
})
const route = useRoute()
// TODO: 判断菜单选中 这里需要优化
const pathPrefix = computed(() => route.path.split('/')[1])
const selectIndex = ref(-1)

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
      <template v-for="menu in menus" :key="menu.path">
        <CommonPopoverMenu
          v-if="menu.children?.length"
          :delay="{ show: 0, hide: 50 }"
          :disabled="menu.children?.length === 0"
        >
          <NuxtLink
            :to="menu.path"
            class="relative flex-center gap-1 px-4 py-2 hover:primary-color"
            :class="{ selected: pathPrefix === menu.path?.split('/')[1] }"
          >
            <Transition name="icon">
              <div v-show="pathPrefix === menu.path" :class="menu.iconClass" />
            </Transition>
            <span>{{ menu.name }}</span>
            <span class="line absolute bottom-0 left-0 hidden h-[1px] w-full" />
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
                v-for="child, idx in menu.children" :key="child.path" :to="child.path"
                class="h-[36px] w-26 flex-center gap-1 text-center lh-[36px] transition hover:color-[var(--primary-color)]"
                @mouseenter="selectIndex = idx"
              >
                <div :class="child.iconClass" />
                <span>{{ child.name }}</span>
              </NuxtLink>
            </div>
          </template>
        </CommonPopoverMenu>
        <div v-else>
          <NuxtLink
            :to="menu.path"
            class="relative flex-center gap-1 px-4 py-2 hover:primary-color"
            :class="{ selected: pathPrefix === menu.path?.split('/')[1] }"
          >
            <Transition name="icon">
              <div v-show="pathPrefix === menu.path" :class="menu.iconClass" />
            </Transition>
            <span>{{ menu.name }}</span>
            <span class="line absolute bottom-0 left-0 hidden h-[1px] w-full" />
          </NuxtLink>
        </div>
      </template>
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
  .line {
    display: block;
    background: radial-gradient(
      circle at 40px 10px,
      var(--primary-color) 0%,
      transparent 100%
    );
  }
}
.icon-enter-active {
  visibility: hidden;
}

.icon-leave-active {
  transition: all 1s cubic-bezier(0, 0.99, 0.41, 1.02);
}
.icon-enter-from {
  visibility: unset;
}
.icon-leave-to {
  transform: translate3d(70px, 0, 0);
  opacity: 0;
}
</style>
