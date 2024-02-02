<script lang="ts" setup>
const commentForm = reactive({
  author: '',
  text: '',
  mail: '',
  url: '',
  source: 'github',
  avatar: '',

})
</script>

<template>
  <div>
    <form>
      <div class="mb-4 flex flex-col gap-4 lg:flex-row">
        <CommonInput
          v-model="commentForm.author"
          required
          placeholder="昵称"
          class="flex-auto"
        />
        <CommonInput
          v-model="commentForm.mail"
          required
          placeholder="邮箱"
          class="flex-auto"
        />
        <CommonInput
          v-model="commentForm.url"
          placeholder="网址"
          class="flex-auto"
        />
      </div>
      <div>
        <textarea
          v-model="commentForm.text"
          class="w-full border rounded-md bg-gray-200/50 p-2 text-x transition dark:bg-zinc-800/50 focus:outline-[var(--border-color)]"
          placeholder="留下你的足迹"
          rows="6"
        />
      </div>
    </form>
  </div>
</template>
