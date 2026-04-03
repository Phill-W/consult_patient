<script setup lang="ts">
// import { Button as VanButton, Checkbox as VanCheckbox } from 'vant'
const fn = () => {
  console.log('点击了注册')
}
</script>
<template>
  <div class="login-page">
    <cp-nav-bar title="登录" right-text="注册" @click-right="fn"></cp-nav-bar>
    <van-button>按钮</van-button>
    <van-checkbox>复选框</van-checkbox>
  </div>
</template>

<style lang="scss" scoped></style>
