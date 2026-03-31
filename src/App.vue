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
// 测试登录
const login = () => {
  axios
    .request({
      url: 'login/password',
      method: 'post',
      data: {
        mobile: '13211112222',
        password: 'abc12345'
      }
    })
    .then((res) => {
      console.log('登录成功', res)
    })
    .catch((err) => {
      console.log('登录失败', err)
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
    <VanButton type="primary" @click="getUser">获取用户信息</VanButton>
    <VanButton type="primary" @click="login">接口登录</VanButton>
  </div>
</template>
