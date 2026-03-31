<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores/user'
const useStore = useUserStore()
</script>

<template>
  <div>
    {{ useStore.user }}
    <VanButton
      type="primary"
      @click="
        useStore.setUser({
          id: '1',
          avatar: '1',
          token: '1',
          mobile: '1',
          account: '1'
        })
      "
      >登录</VanButton
    >
    <VanButton type="primary" @click="useStore.delUser()">退出</VanButton>
  </div>
</template>
