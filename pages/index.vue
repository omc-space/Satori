<script setup lang="ts">

</script>

<template>
  <div class="h-full px-4 lg:px-20 xl:px-40">
    <HomePageContainer>
      <template #left>
        <div class="mt-20 flex-1 lg:mt-0">
          <div>
            <h1 class="mx-2 py-2 text-4xl font-medium">
              Hi, I'm Innei👋。
            </h1>
            <h1 class="mx-2 py-2 text-4xl font-medium">
              A NodeJS Full Stack &lt;Developer/&gt;
            </h1>
          </div>
          <p class="mx-2 my-3">
            An independent developer coding with love.
          </p>
        </div>
        <div class="absolute bottom-0 left-0 right-0 flex-center flex-col text-xs">
          <p>
            当第一颗卫星飞向大气层外，我们便以为自己终有一日会征服宇宙。
          </p>
          <div class="i-carbon:chevron-sort-down m-2 animate-bounce text-xl" />
        </div>
      </template>
      <template #right>
        <div class="flex-1">
          <div class="m-auto h-60 w-60 rounded-full bg-gray-3" />
        </div>
      </template>
    </HomePageContainer>

    <HomePageContainer>
      <template #left>
        <h1 class="flex-1 text-2xl font-medium">
          <p class="pb-4">
            这里或许有那么一些对于生活的感慨
          </p>
          <p>
            也或许有那么一些对于技术的记录。
          </p>
        </h1>
      </template>
      <template #right>
        <div class="mt-20 flex-1 lg:mt-0">
          <div>
            <h1 class="mx-2 py-2 text-4xl font-medium">
              Hi, I'm Innei👋。
            </h1>
            <h1 class="mx-2 py-2 text-4xl font-medium">
              A NodeJS Full Stack &lt;Developer/&gt;
            </h1>
          </div>
          <p class="mx-2 my-3">
            An independent developer coding with love.
          </p>
        </div>
      </template>
    </HomePageContainer>
    <HomePageContainer>
      <template #left>
        <div class="flex-1">
          <div class="m-auto h-60 w-60 rounded-full bg-gray-3" />
        </div>
      </template>
      <template #right>
        <div class="flex-1 text-2xl font-medium">
          <p class="pb-4">
            而在这里，你会看到一个不同的我，
          </p>
          <p>
            一个在生活中发现美，感受痛苦，洞察人性的我。
          </p>
        </div>
      </template>
    </HomePageContainer>
    <HomePageContainer>
      <h1 class="text-2xl font-medium">
        这些是我珍视的人，他们陪伴我走过人生的每一段旅程。
      </h1>
    </HomePageContainer>
  </div>
</template>
