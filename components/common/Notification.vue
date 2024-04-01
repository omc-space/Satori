<script lang="ts" setup>
import { microReboundPreset } from '~/constants/spring';

const types = {
  success: 'i-carbon:checkmark-filled text-green text-4',
  warning: 'i-carbon:warning-filled text-orange text-4',
  error: 'i-carbon:close-filled text-red text-4',
}

const props = defineProps({
  msg: {
    type: String,
  },
  type: {
    type: String as PropType<keyof typeof types>,
    required:true
  },
  onClose: {
    type: Function,
    required: false,
  },
  top: {
    type: Number,
    required: false,
  },
  bottom: {
    type: Number,
    required: false,
  },
})

const emits = defineEmits(['destroy'])
const exit = ref(false)

onMounted(() => {
  setTimeout(() => {
    exit.value = true
    setTimeout(() => {
      props.onClose && props.onClose()
      emits('destroy')
    }, 200)
  }, 3000)
})

defineExpose({
  close,
})
</script>

<template>
  <div class="message-container" :style="{ bottom: `${props.bottom}px` }" text-sm>
    <Presence :exit-before-enter="false" :initial="true">
      <CommonMotion
        :initial="{ opacity: 0.001, x: '100%' }"
        :animate="{ opacity: 1, x: 0 }"
        :spring="microReboundPreset"
        :exit="{ opacity: 0.001, x: '100%' }"
        v-if="!exit"
      >
        <div class="message">
          <div :class="types[props.type]" />
          <div flex-1 ml-1>
            {{ msg }}
          </div>
        </div>
      </CommonMotion>
    </Presence>
  </div>
</template>

<style scoped>
.message-container{
  position: fixed;
  z-index: 100;
  right: 1rem;
  bottom: 1rem;
  user-select: none;
  transition: 0.4s;
}
.message{
  background-color: white;
  /* border: 1px solid red; */
  top: 1.2rem;
  box-shadow: 0 3px 12px rgba(0,0,0,0.2);
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  min-height: 58px;
}
.dark .message{
  background-color: rgba(0,0,0);
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 3px 5px rgba(10,10,10,0.2);
}
.icon{
  display: inline-block;
  font-size: 1.25rem;
  vertical-align: -0.45rem;
  margin-right: .4rem;
}
</style>
