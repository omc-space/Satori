<script lang="ts" setup>
import { useCatalogState } from '~/composables/state'
import { useCatalog } from '~/composables/useCatalog'

const { anchor, active, parse } = useCatalog()
const index = ref(0)
const router = useRouter()
const catelog = useCatalogState()

onMounted(() => {
  parse()
})

onBeforeUnmount(() => {
  catelog.value.data = []
  document.body.onscroll = null
})
watch(active, () => {
  index.value = Number(active.value.split('-')[1]) || 0
})
function handleClick(id: string) {
  router.replace(id)
}
</script>

<template>
  <div v-if="anchor.length" class="catalog">
    <div class="items" :style="`--top:${26 * index}px`">
      <div v-for="i in anchor" :key="i.id" class="catalog-item" :class="i.type">
        <a :class="{ active: i.id === active }" @click="handleClick(i.id)">
          {{ i.text }}
        </a>
      </div>
    </div>
    <CommonDrawer v-model="catelog.show" direction="bottom" drag>
      <template #title>
        目录
      </template>
      <div class="items" :style="`--top:${26 * index}px`" ml-4>
        <div v-for="i in anchor" :key="i.id" class="catalog-item" :class="i.type">
          <a :class="{ active: i.id === active }" @click="handleClick(i.id)">
            {{ i.text }}
          </a>
        </div>
      </div>
    </CommonDrawer>
  </div>
</template>

<style scoped>
.catalog {
  max-height: 350px;
  max-width: 16rem;
  overflow-y: scroll;
}
.items {
  border-left: 1px solid var(--yellow);
  padding-left: 0.8rem;
  position: relative;
  font-size: 14px;
}
.items::before {
  content: '';
  position: absolute;
  height: 20px;
  width: 2px;
  background-color: var(--light-color);
  left: -1px;
  transition: transform 0.2s;
  transform: translateY(var(--top));
}
.catalog-item a {
  cursor: pointer;
  display: block;
  height: 26px;
  padding: 0 2px;
  line-height: 26px;
  transition: 0.2s;
  opacity: 0.75;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.catalog-item a:hover {
  color: #845ec2;
  opacity: 1;
  margin-left: -0.25rem;
}
.catalog-h2 {
  padding-left: 1rem;
}
.catalog-h3 {
  padding-left: 2rem;
}
.catalog-h4 {
  padding-left: 3.5rem;
}
.active {
  color: #845ec2;
  opacity: 1 !important;
  margin-left: -0.25rem;
}
</style>
~~/hooks/useCatalog~/composables/useCatalog
