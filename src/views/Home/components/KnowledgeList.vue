<script setup lang="ts">
import type { KnowledgeType } from '@/types/consult'
import KnowledgeCard from './KnowledgeCard.vue'
import { ref } from 'vue'

defineProps<{
  type: KnowledgeType
}>()
//数据列表
const list = ref<number[]>([])
//加载中状态
const loading = ref(false)
//是否完全加载完毕数据
const finished = ref(false)

const onLoad = () => {
  console.log('loading')
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5]
    list.value.push(...data)
    if (list.value.length >= 20) {
      finished.value = true
    }
    loading.value = false
  }, 1000)
}
</script>

<template>
  <div class="knowledge-list">
    <van-list
      v-model:loading="loading"
      v-model:finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <knowledge-card v-for="(item, i) in list" :key="i" />
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.knowledge-list {
  padding: 0 15px;
}
</style>
