<script lang="ts" setup>
const props = withDefaults(defineProps<{
  type: 'note' | 'post'
  vertical?: boolean
  onLikeClick?: () => any
  onShareClick?: () => any
  title?: string
  liked?: boolean
}>(), {
  vertical: true,
  onLikeClick: () => {},
  onShareClick: () => {},
  title: '分享',
  liked: false,
})
const isLiked = ref(props.liked)

async function handleLikeClick() {
  if (isLiked.value) {
    notification.error('一天只能点赞一次哦')
    return
  }
  await props.onLikeClick()
  isLiked.value = !isLiked.value
}

function handleShareClick() {
  navigator.share({
    title: props.title,
    url: location.href,
  })
}
</script>

<template>
  <div :class="props.vertical ? 'flex-col' : 'flex-row'" class="flex gap-5 p-2 text-xl text-zinc transition-color hover:text-black/80 dark:hover:text-white/80">
    <button class="hover:text-primary" @click="handleLikeClick">
      <div v-if="props.type === 'note'" class="i-tabler:heart" :class="{ 'i-tabler:heart-filled text-primary': isLiked } " />
      <div v-if="props.type === 'post'" class="i-tabler:thumb-up" :class="{ 'i-tabler:thumb-up-filled text-primary': isLiked } " />
    </button>
    <button class="i-tabler:share-3 hover:text-primary" @click="handleShareClick" />
    <button class="i-tabler:bell hover:text-primary" />
    <button class="i-tabler:coffee hover:text-primary" />
  </div>
</template>
