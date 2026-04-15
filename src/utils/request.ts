import router from '@/router'
import { useUserStore } from '@/stores'
import axios, { AxiosError, type Method } from 'axios'
import { showToast } from 'vant'

// 线上接口基址，开发环境下 axios 走同源以便命中 vite mock
export const baseURL = 'https://consult-api.itheima.net'
export const apiBaseURL = import.meta.env.DEV ? '' : baseURL

const instance = axios.create({
  baseURL: apiBaseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers.Authorization = `Bearer ${store.user.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    if (res.data?.code !== 10000) {
      showToast(res.data.message || '请求失败')
      return Promise.reject(res.data)
    }
    return res.data
  },
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      const store = useUserStore()
      store.delUser()
      router.push({
        path: '/login',
        query: { returnUrl: router.currentRoute.value.fullPath }
      })
    }
    return Promise.reject(err)
  }
)

export default instance

type Data<T> = {
  code: number
  message: string
  data: T
}

export const request = <T>(
  url: string,
  method: Method = 'GET',
  submitData?: object
) => {
  return instance.request<unknown, Data<T>>({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData
  })
}
