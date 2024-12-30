<template>
  <main class="container">
    <h1>
      <div class="align-middle">
        <ScannerSvg class="icon" />
        <span>Look Scanned</span>
      </div>
    </h1>
    <MarkdownContent />
  </main>
</template>

<script setup lang="ts">
import ScannerSvg from '../components/ScannerSvg.vue'
import MarkdownContent from '@/components/MarkdownContent.vue'
</script>

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
  font-weight: 600 !important;
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

<style>
@page {
  size: A4;
  margin: 0cm; /* Default print margin */
}
</style>
