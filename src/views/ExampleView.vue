<script setup lang="ts">
import zhCNMarkdown from '../locales/examples/markdowns/zh-CN.md?raw'
import { useRoute } from 'vue-router'
import { parse } from 'marked'
import DOMPurify from 'dompurify'
import { computed } from 'vue'

const route = useRoute()
const lang = route.params.lang

const fonts = {
  'zh-CN': {
    'font-family': 'Noto Serif SC',
    'font-optical-sizing': 'auto',
    'font-style': 'normal',
  },
}

const markdownHTML = computed(() => {
  console.log(lang)
  // get markdown
  const markdown = zhCNMarkdown
  return DOMPurify.sanitize(parse(markdown))
})

const style = computed(() => {
  return fonts[lang]
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&display=swap');
</style>

<template>
  <main>
    <div v-html="markdownHTML" :style="style"></div>
  </main>
</template>
