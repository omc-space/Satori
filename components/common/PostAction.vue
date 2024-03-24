<script lang="ts" setup>
const props = withDefaults(defineProps<{
  type: 'note' | 'post'
  vertical?: boolean,
  onLikeClick?: () => void,
  onShareClick?: () => void,
  title: string,
}>(),{
  vertical: true,
  onLikeClick: () => {},
  onShareClick: () => {},
})

function handleLikeClick(){
  notification.success('感谢喜欢')
}

function handleShareClick(){
  navigator.share({
    title: props.title || '分享',
    url: location.href,
  })
}

</script>

<template>
  <div :class="props.vertical ? 'flex-col' : 'flex-row'" class="flex gap-5 p-2 text-xl text-zinc hover:text-black/80 dark:hover:text-white/80 transition-color">
    <button @click="handleLikeClick" :class="props.type==='note' ? 'i-tabler:heart': 'i-tabler:thumb-up'" class="hover:text-primary"/>
    <button @click="handleShareClick" class="i-tabler:share-3 hover:text-primary"/>
    <button class="i-tabler:bell hover:text-primary"/>
    <button class="i-tabler:coffee hover:text-primary"/>
  </div>
</template>
