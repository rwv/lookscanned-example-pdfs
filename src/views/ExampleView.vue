<script setup lang="ts">
import zhCNMarkdown from '../locales/examples/markdowns/zh-CN.md?raw'
import { useRoute } from 'vue-router'
import { parse } from 'marked'
import DOMPurify from 'dompurify'
import { computed } from 'vue'
import ScannerSvg from '../components/ScannerSvg.vue'
import { computedAsync } from '@vueuse/core'

const route = useRoute()
const lang = route.params.lang

const fonts = {
  'zh-CN': {
    'font-family': 'Noto Serif SC',
    'font-style': 'normal',
  },
}

const markdownHTML = computedAsync(async () => {
  console.log(lang)
  // get markdown
  const markdown = zhCNMarkdown
  return DOMPurify.sanitize(await parse(markdown))
})

const style = computed(() => {
  return fonts?.[lang as keyof typeof fonts] ?? {}
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

h1 {
  font-family: system-ui !important;
}

.container {
  font-size: 1.3rem;
  /* A4 size */
  width: 210mm;
  /* align center */
  margin: 0 auto;
  padding: 1in;
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
