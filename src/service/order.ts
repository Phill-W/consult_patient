import type { AddAddress, AddressItem, OrderPre } from '@/types/order'
import { request } from '@/utils/request'
import { showToast } from 'vant'

type ServiceResult<T> = {
  code: number
  message: string
  data: T
}

// 查询药品订单预支付信息
export const getMedicalOrderPre = (params: { prescriptionId: string }) =>
  request<OrderPre>('/patient/medicine/order/pre', 'GET', params)

const fallbackAddressList: AddressItem[] = [
  {
    id: 'mock-address-1',
    receiver: '测试用户',
    mobile: '13800000000',
    province: '广东省',
    city: '深圳市',
    county: '南山区',
    addressDetail: '科技园路 100 号',
    isDefault: 1
  }
]

// 获取收货地址列表
export const getAddressList = async (): Promise<
  ServiceResult<AddressItem[]>
> => {
  showToast('收货地址服务异常，已启用测试数据')
  return {
    code: 10000,
    message: 'success',
    data: fallbackAddressList
  }
}

// 添加收货地址
export const addAddress = (data: AddAddress) =>
  request<{ id: string }>('/patient/order/address', 'POST', data)

// 创建药品订单
export const createMedicalOrder = (data: {
  id: string
  addressId: string
  couponId?: string
}) => request<{ id: string }>('/patient/medicine/order', 'POST', data)
