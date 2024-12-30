<script setup lang="ts">
import zhCNMarkdown from '../locales/examples/markdowns/zh-CN.md?raw'
import { useRoute } from 'vue-router'
import { parse } from 'marked'
import DOMPurify from 'dompurify'
import { computedAsync } from '@vueuse/core'

const route = useRoute()
const lang = route.params.lang

const markdownHTML = computedAsync(async () => {
  // get markdown
  const markdown = zhCNMarkdown
  return DOMPurify.sanitize(await parse(markdown))
})
</script>

<style></style>

<style scoped>
/* Noto Serif SC */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&display=swap');

.markdown {
  font-size: 1.5rem;
}

.zh-CN {
  font-family: 'Noto Serif SC', serif;
  font-style: normal;
}

.markdown :deep(a) {
  color: inherit;
  text-decoration: none;
}
</style>

<template>
  <article v-html="markdownHTML" :class="lang" class="markdown"></article>
</template>
