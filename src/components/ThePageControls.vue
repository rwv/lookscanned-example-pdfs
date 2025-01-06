<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const pdfPath = computed(() => {
  return `/pdfs${route.path}.pdf`
})
</script>

<template>
  <div class="controls">
    <router-link class="button" to="/">Back</router-link>
    |
    <a class="button" href="javascript: window.print()">Print</a>
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
