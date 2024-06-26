<script setup lang="ts">
// type DirectionType = 'left' | 'right' | 'top' | 'bottom'

const props = defineProps({
  // 是否显示抽屉
  modelValue: {
    type: Boolean,
    default: false,
  },
  // 打开的抽屉尺寸
  size: {
    type: String,
    default: '36%',
  },
  // 是否显示抽屉头部内容
  isShowHeader: {
    type: Boolean,
    default: true,
  },
  // 父组件传过来的抽屉标题值
  title: {
    type: String,
    default: '',
  },
  // 是否显示关闭小图标
  showCloseIcon: {
    type: Boolean,
    default: true,
  },
  // 是否开启抽屉背景遮罩层
  mask: {
    type: Boolean,
    default: true,
  },
  // 点击遮罩层关闭默认为true
  clickMaskClose: {
    type: Boolean,
    default: true,
  },
  // 校验抽屉的4个方向
  direction: {
    type: String,
    default: 'right',
  },
  // 接收父组件传递过来的关闭函数，会中断关闭抽屉的操作
  beforeClose: {
    type: Function,
  },
  drag: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['update:modelValue', 'close'])

const computedName = computed(() => `${props.direction}Move`)
const lockScroll = useLockScroll()
const height = ref(0)

const computedDrawerPosition = computed(() => {
  const positionObj: Record<string, any> = {
    width:
      ((props.direction === 'left') || (props.direction === 'right'))
        ? '70%'
        : '100%',
    height:
      ((props.direction === 'top') || (props.direction === 'bottom'))
        ? props.drag ? height.value ? `${height.value}px` : props.size : props.size
        : '100%',
  }
  positionObj[props.direction] = 0
  return positionObj
})
// 关闭抽屉弹出框
function close() {
  emits('update:modelValue', false)
  emits('close')
}
function closeDrawer() {
  // 若传递了beforeClose函数，就抛出关闭函数，供外部使用
  if (props.beforeClose)
    props.beforeClose(close)
  // 没有beforeClose函数，直接关闭即可
  else
    close()
}

function clickMaskCloseFn() {
  if (props.clickMaskClose) {
    closeDrawer()
  }
  else {
    /* 这里要控制一下冒泡事件，注意第十行使用@click.stop
        不控制冒泡的话，点击内容区也会导致弹出框关闭 */
  }
}
function onEnter() {
  lockScroll?.lock()
}

function onLeave() {
  lockScroll?.unlock()
}

const allowTouch = ref(false)

const startPosition = {
  time: 0,
  startHeight: 0,
}
function touchStart() {
  startPosition.startHeight = height.value
  startPosition.time = new Date().getTime()
  allowTouch.value = true
}

function touchEnd() {
  allowTouch.value = false
}

const handleMove = useThrottleFn((e: TouchEvent) => {
  if (!allowTouch.value)
    return
  const touch = e.touches[0]
  const h = window.innerHeight - touch.clientY
  height.value = h
}, 10)

onMounted(() => {
  if (props.drag) {
    window.addEventListener('touchmove', handleMove)
    window.ontouchend = () => {
      allowTouch.value = false
      const speed = new Date().getTime() - startPosition.time

      if (
        (speed < 300 && startPosition.startHeight - height.value > 0) || height.value < 300
      ) {
        closeDrawer()
        setTimeout(() => {
          height.value = 0
        }, 300)
      }
    }
  }
})
onBeforeUnmount(() => {
  window.removeEventListener('touchmove', handleMove)
})
</script>

<template>
  <Teleport to="body">
    <Transition :name="computedName" @after-enter="onEnter" @after-leave="onLeave">
      <div v-show="props.modelValue" class="myDrawerWrap" :class="{ isShowDrawerMask: mask }" @click="clickMaskCloseFn">
        <div
          class="drawerContent" :style="computedDrawerPosition" @click.stop
          @touchstart="touchStart"
        >
          <div v-if="props.drag" relative>
            <div mx-auto h-1 w-10 rounded-full bg-coolgray />
          </div>
          <header v-show="props.isShowHeader" class="drawerHeader">
            <slot name="title">
              <span>{{ title }}</span>
            </slot>
            <div v-show="props.showCloseIcon" p-4 text-right @click="onClose">
              <button i-ri-close-line text-xl @click="closeDrawer" />
            </div>
          </header>
          <section class="drawerBody" @touchstart.stop="touchEnd">
            <slot />
          </section>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.myDrawerWrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
}

.drawerContent {
  /* // 搭配定位的方式控制在上下左右的那个方位 */
  position: absolute;
  background-color: #fff;
  box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  border-radius: 0.6rem 0.6rem 0 0;
}

/* // 抽屉头部 */
.drawerHeader {
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bolder;
  color: #333;
}

/* 抽屉内容体部分 */
.drawerBody {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  flex: 1;
  overflow-y: auto;
}

:deep(.dark .myDrawerWrap) {
  background-color: #000000c4;
}

/* 遮罩层即为背景色 */
.isShowDrawerMask {
  background-color: rgba(0, 0, 0, 0.3);
}

/**
  动画
*/
/**右边 */
.rightMove-enter-from,
.rightMove-leave-to {
  opacity: 0;
}

.rightMove-enter-active,
.rightMove-enter-active .drawerContent,
.rightMove-leave-active,
.rightMove-leave-active .drawerContent {
  transition: all 0.3s ease-in-out;
}

.rightMove-enter-from,
.rightMove-leave-to {
  opacity: 0;
}

.rightMove-enter-from .drawerContent,
.rightMove-leave-to .drawerContent {
  transform: translate3d(100%, 0, 0);
}

/** 底部 */
.bottomMove-enter-from,
.bottomMove-leave-to {
  opacity: 0;
}

.bottomMove-enter-active,
.bottomMove-enter-active .drawerContent,
.bottomMove-leave-active,
.bottomMove-leave-active .drawerContent {
  transition: all 0.3s ease-in-out;
}

.bottomMove-enter-from,
.bottomMove-leave-to {
  opacity: 0;
}

.bottomMove-enter-from .drawerContent,
.bottomMove-leave-to .drawerContent {
  transform: translate3d(0, 100%, 0);
}
</style>
