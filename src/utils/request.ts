import { useUserStore } from '@/stores'
import axios from 'axios'
import { showToast } from 'vant'
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
    if (res.data?.code !== 10000) {
      //错误提示
      showToast(res.data.message || '请求失败')
      //返回 错误的promise对象
      return Promise.reject(res.data)
      //传入 code将来catch中可以拿到
    }
    // TODO 4. 摘取核心响应数据
    return res.data
  },
  (err) => {
    // TODO 5. 处理401错误
    return Promise.reject(err)
  }
)

export default instance
