import { useUserStore } from '@/stores'
import axios from 'axios'
// 创建axios实例
const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL: 'https://consult-api.itheima.net',
  timeout: 10000
})
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers.Authorization = `Bearer ${store.user.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)
// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    return res
  },
  (err) => {
    // TODO 5. 处理401错误
    return Promise.reject(err)
  }
)

export default instance
