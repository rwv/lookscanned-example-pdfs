<template>
  <h1>
    <div class="align-middle">
      <ScannerSvg class="icon" />
      <span>Look Scanned</span>
    </div>
  </h1>
</template>

<script setup lang="ts">
import ScannerSvg from '../components/ScannerSvg.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');

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
  font-family: 'Noto Serif';
  font-weight: 600;
  font-size: 1.5em;
}
</style>
