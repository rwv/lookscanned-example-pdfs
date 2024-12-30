<script setup lang="ts">
import { markdowns } from '../locales/how-to-use/markdowns'
import { useRoute, useRouter } from 'vue-router'
import { parse } from 'marked'
import DOMPurify from 'dompurify'
import { computedAsync } from '@vueuse/core'
import { computed } from 'vue'
import { useHead } from '@unhead/vue'

const route = useRoute()
const router = useRouter()
const lang = route.params.lang as string

const markdown = computed(() => {
  // if lang not in markdowns, redirect to home
  if (!(lang in markdowns)) {
    // eslint-disable-next-line
    router.push('/')
  }
  const markdown = markdowns[lang as keyof typeof markdowns]

  return markdown
})

const markdownHTML = computedAsync(async () => {
  // get markdown
  return DOMPurify.sanitize(await parse(markdown.value))
})

const title = computed(() => {
  const re = /##\s+(.*)/
  const match = markdown.value.match(re)
  return match ? match[1] : 'Look Scanned'
})

const description = computed(() => {
  const lines = markdown.value.split('\n')
  // remove empty lines
  const nonEmptyLines = lines.filter((line) => line.trim() !== '')
  return nonEmptyLines[1]
})

useHead({
  title: title,
  meta: [
    {
      name: 'description',
      content: description,
    },
  ],
})
</script>

<style></style>

<style scoped>
/* Noto Serif SC */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');

.markdown {
  font-family: 'Noto Serif';
  font-size: 1.5rem;
}

.zh-CN {
  font-family: 'Noto Serif SC';
}

.markdown :deep(a) {
  color: inherit;
  text-decoration: none;
}
</style>

<template>
  <article v-html="markdownHTML" :class="lang" class="markdown"></article>
</template>
