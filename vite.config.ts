import { fileURLToPath, URL } from 'node:url'
import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const gitCommit = execSync('git rev-parse HEAD').toString().trim()
const gitCommitTime: number =
  parseInt(execSync(`git show -s --format=%ct ${gitCommit}`).toString().trim()) * 1000

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    __GIT_COMMIT__: JSON.stringify(gitCommit),
    __GIT_COMMIT_TIME__: gitCommitTime,
  },
})
