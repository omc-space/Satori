<script lang="ts" setup>
import { getImageSizeFromUrl } from '~/composables/utils'

const props = defineProps<{
  src?: string
  lazy?: boolean
  blur?: boolean
}>()
const image = ref<HTMLImageElement>()
const defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+Pr1638ACaED3/nOThIAAAAASUVORK5CYII='
const data_url = ref(defaultImage)
const loadingState = ref('')
const aspectRatio = ref<string | number>('auto')

function loadImage() {
  // data_url.value = resizeImgUrl(props.src, 48)
  return new Promise<void>((resolve, reject) => {
    if (!props.src)
      return reject(new Error('cannot load image without src'))
    loadingState.value = 'loading'
    const img = new Image()
    img.src = props.src
    img.onload = () => {
      data_url.value = props.src || defaultImage
      loadingState.value = 'loaded'
      resolve()
    }
    img.onerror = () => {
      data_url.value = defaultImage
    }
  })
}

watch(() => props.src, () => {
  if (!props.src)
    return
  if (props.lazy) {
    const ob = useIntersectionObserver(image, async (el) => {
      if (el[0].isIntersecting) {
        await loadImage()
        ob.stop()
      }
    })
  }
  else {
    // data_url.value = props.src
    loadImage()
  }
  const size = getImageSizeFromUrl(props.src)
  if (size)
    aspectRatio.value = size.width / size.height
}, { immediate: true })
</script>

<template>
  <div class="img-container">
    <img
      ref="image"
      v-bind="$attrs"
      :lazy="loadingState" :src="data_url"
      :style="{ aspectRatio, '--blur': blur ? '8px' : '0' }"
    >
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  user-select: none;
  transition: all 0.2s ease-in 0.2s;
  object-fit: cover;
}
img[lazy='loading'] {
  /* background-color: #e9e9e9; */
  opacity: 1;
  filter: blur(var(--blur));
}
img[lazy='loaded'] {
  opacity: 1;
}
</style>
