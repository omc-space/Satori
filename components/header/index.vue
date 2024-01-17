<template>
  <header class="fixed left-0 right-0 top-0 z-10 h-18 w-full bg-white/10 shadow backdrop-blur-md">
    <div class="relative grid grid-cols-[4.5rem_auto_4.5rem] mx-auto h-full max-w-7xl min-h-0 lg:px-8">
      <NuxtLink to="/" class="flex-center">
        <img class="h-10 w-10 rounded-4 bg-gray-3 p-1" src="/nuxt.svg" alt="home">
      </NuxtLink>
      <HeaderNav />
    </div>
  </header>
</template>
