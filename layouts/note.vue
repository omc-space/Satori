<template>
  <div class="relative grid mx-auto base-min-h max-w-[56rem] gap-4 xl:grid-cols-[1fr_minmax(auto,56rem)_1fr] md:grid-cols-1 md:mt-24 xl:max-w-[calc(56rem+400px)] print:!block print:!max-w-full">
    <div class="sticky top-[120px] mt-[120px] hidden h-[calc(100vh-6rem-4.5rem-150px-120px)] pl-4 xl:block">
      <slot name="left" />
    </div>
    <slot />
  </div>
</template>
