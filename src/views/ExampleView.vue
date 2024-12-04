<script setup lang="ts">
import zhCNMarkdown from '../locales/examples/markdowns/zh-CN.md?raw'
import { useRoute } from 'vue-router'
import { parse } from 'marked'
import DOMPurify from 'dompurify'
import { computed } from 'vue'

const route = useRoute()
const lang = route.params.lang

const markdownHTML = computed(() => {
  console.log(lang)
  // get markdown
  const markdown = zhCNMarkdown
  return DOMPurify.sanitize(parse(markdown))
})
</script>

<template>
  <main>
    <div v-html="markdownHTML"></div>
  </main>
</template>
