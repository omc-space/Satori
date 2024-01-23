<script lang="ts" setup>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = new Editor({
  content: '<p>this is p</p>',
  extensions: [StarterKit],
})
</script>

<template>
  <div>
    <EditorContent :editor="editor">
      11111
    </EditorContent>
  </div>
</template>
