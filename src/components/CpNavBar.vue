<script setup lang="ts">
import { useRouter } from 'vue-router'

//1.通过props来实现标题和右侧文字设置
const props = defineProps<{
  title?: string
  rightText?: string
  back?: () => void
}>()
//2.通过emit函数触发自定义事件
const emit = defineEmits<{
  (e: 'click-right'): void
}>()
const onClickRight = () => {
  emit('click-right')
}
//3. 回退，了解 history。state 信息，监听箭头的点击事件按条件进行跳转
const router = useRouter()
const onClickLeft = () => {
  if (props.back) return props.back()
  if (history.state?.back) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<template>
  <!-- 固定定位，左侧箭头，标题，右侧文字 -->
  <van-nav-bar
    fixed
    left-arrow
    @click-left="onClickLeft"
    :title="title"
    :right-text="rightText"
    @click-right="onClickRight"
  ></van-nav-bar>
</template>

<style lang="scss" scoped>
:deep() {
  .van-nav-bar {
    &__arrow {
      color: var(--cp--text1);
      font-size: 18px;
    }

    &__title {
      font-size: 15px;
    }
  }
}
</style>
