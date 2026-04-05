<!-- <script setup lang="ts">
//计数器
//通过 v-model 解析成modelValue @update:modelValue
defineProps<{
  modelValue: number
}>()

defineEmits<{ (e: 'update:modelValue', count: number): void }>()
// const modelValue = defineModel<number>({ default: 0 })
// function update() {
//   modelValue.value++
// }
</script>

<template>
  <div class="cp-radio-btn">计数器：{{ modelValue }}</div>
  <button @click="$emit('update:modelValue', modelValue + 1)">++</button>
</template>

<style lang="scss" scoped></style> -->

<script setup lang="ts">
//计数器
//通过 v-model 解析成modelValue @update:modelValue
defineProps<{
  count: number
}>()

defineEmits<{ (e: 'update:count', count: number): void }>()
// const modelValue = defineModel<number>({ default: 0 })
// function update() {
//   modelValue.value++
// }
</script>

<template>
  <div class="cp-radio-btn">计数器：{{ count }}</div>
  <button @click="$emit('update:count', count + 1)">++</button>
</template>

<style lang="scss" scoped></style>
