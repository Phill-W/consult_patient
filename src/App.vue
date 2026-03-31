<script setup lang="ts">
import { Button as VanButton } from 'vant'
</script>

<template>
  <div>APP<VanButton type="primary">按钮</VanButton></div>
  <div class="main">main</div>
  <div class="footer">footer</div>
</template>

<style scoped lang="scss">
.main {
  color: var(--cp-primary);
  background-color: var(--footer-color);
}
.footer {
  color: var(--footer-color);
  background-color: var(--footer-color);
}
</style>
