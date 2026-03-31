<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'
import axios from './utils/request'
const useStore = useUserStore()
const getUser = () => {
  axios.request({
    url: 'patient/myUser',
    method: 'get'
  })
}
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
    <VanButton type="primary" @click="getUser()">获取用户信息</VanButton>
  </div>
</template>
