<template>
  <div class="relative grid-cols-[auto_200px] m-auto mt-12 max-w-6xl px-4 py-8 lg:grid">
    <div class="base-min-h">
      <slot />
    </div>
    <aside class="sticky top-[120px] mt-[120px] hidden h-[calc(100vh-6rem-4.5rem-150px-120px)] pl-4 lg:block">
      <slot name="aside" />
    </aside>
  </div>
</template>
