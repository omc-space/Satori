<template>
  <Header />
  <main class="fill-content relative z-[1] px-4 pt-[4.5rem] md:px-0">
    <div class="mx-auto mt-14 max-w-3xl px-2 [&_header.prose]:mb-[80px] lg:mt-[80px] 2xl:max-w-4xl lg:px-0">
      <slot />
    </div>
  </main>
  <Footer />
</template>
