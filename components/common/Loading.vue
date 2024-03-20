<script lang="ts" setup>
const props = defineProps<{ loading?: boolean, delay?: number }>()
const load = ref(false)

watch(()=> props.loading, (newValue) => {
  if(newValue === true)
    setTimeout(()=>{
      load.value = true
    }, props.delay ?? 300)
},{immediate: true})
</script>

<template>
  <div v-if="props.loading" class="loading">
    <div class="ball-container" :class="load?'op-100': 'op-0'">
      <LoadBall text-4xl/>
      <div text-x>放宽心，不急躁</div>
    </div>
  </div>
</template>

<style scoped>
.loading{
  position: relative;
  width: 100%;
  height: 200px;
  min-height: calc(100vh - 8rem);
}
.ball-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
