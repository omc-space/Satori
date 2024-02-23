<script lang="ts" setup>
import { fastPreset } from '~/constants/spring'
import type { CommentDto } from '~/types'

const props = defineProps<{
  onSubmit?: (comment: CommentDto) => void
}>()

const user = useLocalStorage('user', {
  author: '',
  mail: '',
  url: '',
})
const commentForm = reactive<CommentDto>({
  author: user.value.author,
  text: '',
  mail: user.value.mail,
  url: user.value.url,
  source: 'github',
  // avatar: '',
  isWhispers: false,
})

const maxLength = 500

async function onSubmit() {
  // TODO: 提交评论
  // await sendComment(props.id, commentForm, props.type)
  user.value.author = commentForm.author
  user.value.mail = commentForm.mail
  user.value.url = commentForm.url || ''
  props.onSubmit && props.onSubmit(commentForm)

  commentForm.text = ''
}
function handleKeyDown(e: KeyboardEvent) {
  if (e.ctrlKey && e.key === 'Enter')
    onSubmit()
}
</script>

<template>
  <div>
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
    <div class="relative rounded-md bg-gray-200/50 transition dark:bg-zinc-800/50">
      <textarea
        v-model="commentForm.text"
        class="w-full resize-none bg-transparent p-2 text-x text-gray-600 focus:outline-none"
        placeholder="留下你的足迹"
        :maxlength="maxLength"
        rows="5"
        @keydown="handleKeyDown"
      />
      <div class="flex px-4 pb-1">
        <div flex-1>
          <Emoji />
        </div>
        <Presence :initial="true" :exit-before-enter="false">
          <CommonMotion
            v-if="commentForm.text.length"
            :initial="{ opacity: 0, y: 12, scale: 0.9 }"
            :animate="{ opacity: 1, y: 0, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.9, y: 12 }"
            :spring="fastPreset"
            class="flex items-center gap-4 text-xs"
          >
            <div class="text-[8px] text-gray">
              {{ commentForm.text.length }}/{{ maxLength }}
            </div>
            <button type="button" class="flex-center" @click="commentForm.isWhispers = !commentForm.isWhispers">
              <div v-show="!commentForm.isWhispers" i-tabler:circle text-xl />
              <div v-show="commentForm.isWhispers" i-tabler:circle-check text-xl />
              <div ml-1>
                悄悄话
              </div>
            </button>
            <button type="submit" class="flex-center" @click="onSubmit">
              <div i-carbon:send-alt-filled />
              <div ml-1>
                送信
              </div>
            </button>
          </CommonMotion>
        </Presence>
      </div>
    </div>
  </div>
</template>
