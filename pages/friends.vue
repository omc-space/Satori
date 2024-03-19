<script setup lang="ts">
import { canApplyLink } from '~/composables/api'
import type { LinkApplyDto } from '~/types'
import { applyLink, getLinks } from '~/composables/api';
useHead({
  title: '友链',
})
const linkForm = reactive<LinkApplyDto>({
  name: '',
  url: '',
  description: '',
  email: '',
  avatar: '',
  author: 'custom',
})
const { data: canApply } = useAsyncData(()=> canApplyLink())
const { data: links } = useAsyncData(()=> getLinks())

async function handleApplyLink(){
  if(linkForm.name.trim() === '' || linkForm.url.trim() === '') return
  await applyLink(linkForm)
}
</script>

<template>
  <div class="base-container">
    <header class="prose">
      <h1 class="mb-6">
        朋友们
      </h1>
      <b>海内存知己，天涯若比邻</b>
    </header>
    <CommonMotion v-if="links">
      <div class="grid grid-cols-2 gap-2 md:grid-cols-3 mt-16">
        <FriendsCard v-for="i in links.data" :key="i.id" :data="i"/>
      </div>
      <div text="center x" v-if="links.data.length === 0">这里还没有人，来和我做朋友</div>
      <div v-if="canApply?.can" mt-16>
        <div class="pre-line">友链申请：</div>
        <div class="text-x mt-6 flex-1">
          <div>站点名称<span text-red>*</span> ：</div>
          <CommonInput v-model="linkForm.name"></CommonInput>
          <div mt-1>网址<span text-red>*</span>：</div>
          <CommonInput v-model="linkForm.url"></CommonInput>
          <div>邮箱：</div>
          <CommonInput mt-1 v-model="linkForm.email"></CommonInput>
          <div>头像：</div>
          <CommonInput mt-1 v-model="linkForm.avatar"></CommonInput>
          <div>网址描述：</div>
          <CommonInput type="textarea" v-model="linkForm.description"></CommonInput>
          <button class="btn mt-4" w-full @click="handleApplyLink">提交</button>
        </div>
      </div>
      <div v-if="!canApply?.can" text-center>主人禁止了友链申请</div>
    </CommonMotion>
  </div>  
</template>
