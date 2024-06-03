<script lang="ts" setup>
import { getImageList } from '~/composables/api'

const pager = reactive({
  page: 1,
  size: 10,
})
const { data: pictures, pending } = useAsyncData('pictures', () => getImageList(pager))
useHead({
  title: '照片墙',
})

function loadMore() {

}
</script>

<template>
  <div v-if="pictures?.data.length" class="m-auto max-w-3xl lg:max-w-5xl">
    <ClientOnly>
      <div v-masonry gutter="10" fit-width="true" transition-duration="0.3s" item-selector=".img-item" class="masonry-container">
        <div v-for="item, idx in pictures.data" :key="idx" v-masonry-tile class="img-item" w-44vw overflow-hidden md:w-60>
          <CommonLazyLoadImage :src="resizeImgUrl(item.url, 720)" blur />
          <div p-2>
            <div break-words pb-2 text-base text-sm>
              {{ item.description }}
            </div>
            <div text="gray xs" flex justify-between>
              <div flex items-center gap-1>
                <template v-if="item.location">
                  <div i-carbon:location-filled />
                  <div>{{ item.location }}</div>
                </template>
              </div>
              <button i-ri:heart-3-fill text-red-200 />
            </div>
          </div>
        </div>
      </div>
      <LazyCommonLoadMore v-if="pictures.pagination.hasNextPage" :loading="pending" @load-more="loadMore" />
      <div v-else text="sm center">
        没有更多了...
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped>
.category {
  width: 4rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  user-select: none;
}
.category:hover {
  background-color: var(--yellow);
  color: white;
}
.active {
  color: white;
  background-color: #8076a3;
}
.masonry-container {
  margin: 0 auto;
}
.img-item {
  /* border: 1px solid gray; */
  border-radius: 10px;
  margin-bottom: 0.8rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(224, 224, 224, 0.7);
}
.img-item img {
  object-fit: cover;
}
.dark .img-item {
  background-color: rgba(50, 50, 50, 0.5);
  box-shadow: 0 0 6px rgba(250, 250, 250, 0.2);
}
</style>
