import { followOrUnfollow } from '@/service/consult'
import { ref } from 'vue'
import type { FollowType } from '@/types/consult'
import { getPrescriptionPic } from '@/service/consult'
import { showImagePreview } from 'vant'
//vue3概念：组合式API，组合式函数（composable） useXxx
//composable
export const useFollow = (type: FollowType = 'doc') => {
  const loading = ref(false)
  const follow = async (item: { id: string; likeFlag: 0 | 1 }) => {
    loading.value = true
    try {
      await followOrUnfollow(item.id, type)
      item.likeFlag = item.likeFlag === 1 ? 0 : 1
    } finally {
      loading.value = false
    }
  }
  return { loading, follow }
}

//提供查看处方
export const useShowPrescription = () => {
  const onShowPrescription = async (id?: string) => {
    if (id) {
      const res = await getPrescriptionPic(id)
      showImagePreview([res.data.url])
    }
  }
  return { onShowPrescription }
}
