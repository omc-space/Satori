<script lang="ts" setup>
import type { CollectionRefTypes, CommentDto, NoteModel, PostModel } from '~/types'
import { getCommentList } from '~/composables/api'

const props = defineProps<{
  data: PostModel | NoteModel
  type: CollectionRefTypes
}>()
const { data: comments, refresh } = useAsyncData(() => getCommentList(props.data.id))
async function onSubmit(comment: CommentDto) {
  await sendComment(props.data.id, comment, props.type)
  refresh()
}
</script>

<template>
  <div v-bind="$attrs">
    <CommentEditor :id="props.data.id" :type="props.type" :on-submit="onSubmit" />
    <div class="mt-12">
      <template v-for="comment in comments?.data" :key="comment.id">
        <CommentItem :comment="comment" />
        <div ml-8>
          <CommentItem v-for="i in comment.children" :key="i.id" :comment="i" />
        </div>
      </template>
    </div>
  </div>
</template>
