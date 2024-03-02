<script setup>

</script>

<template>
  <NuxtLayout name="base">
    <header class="mb-16 prose">
      <h1 class="mb-6">
        朋友们
      </h1>
      <b>海内存知己，天涯若比邻</b>
    </header>
    <div class="grid grid-cols-2 gap-2 md:grid-cols-3">
      <FriendsCard v-for="i in 6" :key="i" />
    </div>
  </NuxtLayout>
</template>
