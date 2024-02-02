<script setup lang="ts">
const input = ref('')
</script>

<template>
  <NuxtLayout name="post" class="m-auto max-w-6xl">
    <div h-400>
      <CommonInput v-model="input" placeholder="昵称" />
    </div>
    <template #aside>
      <div>
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </div>
    </template>
  </NuxtLayout>
</template>
