<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const pdfPath = computed(() => {
  return `/pdfs/${route.path}.pdf`
})

const back = () => {
  router.back()
}

const print = () => {
  window.print()
}
</script>

<template>
  <div class="controls">
    <button class="button" @click="back">Back</button>
    |
    <button class="button" @click="print">Print</button>
    |
    <a class="button" :href="pdfPath" download>PDF</a>
  </div>
</template>

<style scoped>
.controls {
  position: absolute;
  transform: translateY(calc(-1in - 2em)) translateX(calc(-1in));

  font-weight: 300;
  font-size: 0.8em;
}

@media print {
  .controls {
    display: none;
  }
}

.button {
  all: unset;
  cursor: pointer;
}

.button:hover {
  text-decoration: underline;
}
</style>
