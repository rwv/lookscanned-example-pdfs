<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
.container {
  font-size: 1.3rem;
  /* A4 size */
  width: 210mm;
  /* align center */
  margin: 0 auto;
  padding: 1in;
}

@media print {
  .container {
    /* margin: 0; */
    padding: 0;
  }
}

@media screen {
  .container {
    /* add shadow */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-top: 1in;
    margin-bottom: 1in;
  }
}
</style>

<style>
@page {
  size: A4;
  margin: 1in; /* Default print margin */
}
</style>
