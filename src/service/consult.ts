import { request } from '@/utils/request'
import type {
  KnowledgePage,
  KnowledgeParams,
  PageParams,
  DoctorPage,
  FollowType
} from '@/types/consult'
export const getKnowledgePage = (params: KnowledgeParams) =>
  request<KnowledgePage>('/patient/home/knowledge', 'GET', params)

export const getDoctorPage = (params: PageParams) =>
  request<DoctorPage>('home/page/doc', 'GET', params)
//关注医生
export const followOrUnfollow = (id: string, type: FollowType = 'doc') =>
  request('like', 'POST', { id, type })
