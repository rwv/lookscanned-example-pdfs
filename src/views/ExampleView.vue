<script setup lang="ts">
import zhCNMarkdown from '../locales/examples/markdowns/zh-CN.md?raw'
import { useRoute } from 'vue-router'
import { parse } from 'marked'
import DOMPurify from 'dompurify'
import { computed } from 'vue'
import ScannerSvg from '../components/ScannerSvg.vue'
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

<style scoped>
.icon {
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5em;
}

.align-middle {
  display: flex;
  align-items: center;
}

.container {
  font-size: 1.3rem;
}
</style>

<template>
  <main class="container">
    <h1 :style="style">
      <div class="align-middle">
        <ScannerSvg class="icon" />
        <span>Look Scanned</span>
      </div>
    </h1>
    <div v-html="markdownHTML" :style="style"></div>
  </main>
</template>
