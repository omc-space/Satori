<script lang="ts" setup>
const { y } = useWindowScroll({ behavior: 'smooth' })
const catelog = useCatalogState()
</script>

<template>
  <Teleport to="body">
    <div fixed bottom-8 right-4 z-40 flex flex-col gap-1>
      <Transition name="fade">
        <CommonToolbarButton v-if="catelog.data.length" lg:hidden :on-click="() => catelog.show = true">
          <div i-tabler:menu-2 />
        </CommonToolbarButton>
      </Transition>
      <Transition name="fade">
        <CommonToolbarButton v-if="y > 50" :on-click="() => y = 0">
          <div i-tabler:arrow-bar-to-up />
        </CommonToolbarButton>
      </Transition>
    </div>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
