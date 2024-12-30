<template>
  <section>
    <h1>
      <div class="align-middle">
        <ScannerSvg class="icon" />
        <span>Look Scanned</span>
      </div>
    </h1>
    <MarkdownContent />
  </section>
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
</style>
