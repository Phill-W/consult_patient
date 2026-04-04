/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // 注意：这里建议用 import type，纯类型导入不会破坏全局作用域
  const component: DefineComponent<object, object, unknown>
  export default component
}

declare module 'virtual:svg-icons-register'
