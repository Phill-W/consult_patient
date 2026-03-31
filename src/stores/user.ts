import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'cp-user',
  () => {
    //1.定义用户信息状态
    const user = ref<User>()
    //2.定义修改用户信息的方法
    const setUser = (u: User) => {
      user.value = u
    }
    //3.定义删除用户信息的方法
    const delUser = () => {
      user.value = undefined
    }
    //4.返回用户信息和修改、删除用户信息的方法
    return { user, setUser, delUser }
  },
  { persist: true }
)
