<template>
  <div class="relative grid mx-auto mt-12 mt-18 max-w-[60rem] min-h-[calc(100vh-6.5rem-10rem)] gap-4 xl:grid-cols-[1fr_minmax(auto,60rem)_1fr] md:grid-cols-1 md:mt-24 xl:max-w-[calc(60rem+400px)] print:!block print:!max-w-full">
    <div>
      <slot name="left" />
    </div>
    <div>
      <slot />
    </div>
    <div>
      <slot name="right" />
    </div>
  </div>
</template>
