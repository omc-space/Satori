<script setup lang="ts">
const bgPosition = reactive({
  show: false,
  left: 0,
  top: 0,
})

const route = useRoute()
const path = computed(() => route.path)

watch(path, (newVal) => {
  console.log('newVal', newVal)
})
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
      class="lig flex-center cursor-default rounded-full px-2 text-x shadow backdrop-blur-md transition"
      :style="spotlightStyle"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <NuxtLink
        v-for="i in menus"
        :key="i.path" :to="i.path"
        class="hover:primary-color relative h-full p-2 px-4"
        :class="{ selected: path.startsWith(i.path) }"
      >
        {{ i.name }}
        <span class="absolute bottom-0 left-0 hidden h-[1px] w-full" />
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
.lig {
  background-clip: padding-box;
  background: radial-gradient(
    134px circle at var(--position-x) var(--position-y),
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
