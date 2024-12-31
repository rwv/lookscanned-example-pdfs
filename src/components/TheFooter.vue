<script setup lang="ts">
const gitCommit = __GIT_COMMIT__
const gitCommitTime = __GIT_COMMIT_TIME__
const gitShortCommit = gitCommit.slice(0, 8)
const githubURL = `https://github.com/lookscanned/lookscanned-example-pdfs/commit/${gitCommit}`
</script>

<template>
  <footer class="footer">
    Git commit: <a :href="githubURL" class="github-link">{{ gitShortCommit }}</a> at
    {{ new Date(gitCommitTime).toLocaleString() }}
  </footer>
</template>

<style scoped>
.footer {
  position: absolute;
  transform: translateY(calc(1in + 0.7em)) translateX(calc(-1in + 0.7em));
  opacity: 0.7;
  font-size: 0.7em;
}

.github-link {
  text-decoration: none;
  color: inherit;
}

.github-link:hover {
  text-decoration: underline;
}

@media print {
  .footer {
    display: none;
  }
}
</style>
