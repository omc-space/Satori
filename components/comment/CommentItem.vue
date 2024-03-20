<script lang="ts" setup>
import { md5 } from 'js-md5'
import type { CommentDto, CommentModel } from '~/types'
import { replyComment } from '~/composables/api'

const { comment } = defineProps<{
  comment: CommentModel
  onReplay: () => void
}>()
const [showReplay, toggleReplay] = useToggle()

async function onSubmit(data: CommentDto) {
  data.source = comment.id
  await replyComment(comment.id, data)
  toggleReplay()
}
</script>

<template>
  <div v-if="comment">
    <div class="group my-4 flex items-end gap-4">
      <div class="flex">
        <CommonLazyLoadImage
          :src="comment.avatar || `https://cravatar.cn/avatar/${md5(comment.mail)}?d=monsterid`"
          class="h-10 w-10 rounded-full"
        />
      </div>
      <div>
        <div class="p-1 pb-2 text-[10px] text-gray/90">
          <NuxtLink class="text-sm text-gray-700 font-bold .dark:text-white/80">
            {{ comment.author }}
          </NuxtLink>
          <span class="select-none">
            <span class="ml-2">{{ dateFns(comment.created).format('YY年MM月DD日') }}</span>
            <span class="ml-2">{{ comment.key }}</span>
            <span class="ml-2">{{ comment.ip }}</span>
          </span>
        </div>
        <div class="relative">
          <div class="w-fit rounded-xl px-2 py-0.5 text-wrap text-x base-bg">
            {{ comment.text }}
          </div>
          <CommonIconButton
            class="absolute bottom--3 right--3 hidden p-1.5 group-hover:block"
            @click="toggleReplay()"
          >
            <div class="i-tabler:message-circle-plus text-[10px]" />
          </CommonIconButton>
        </div>
      </div>
    </div>
    <CommentEditor v-if="showReplay" :on-submit="onSubmit" />
  </div>
</template>
