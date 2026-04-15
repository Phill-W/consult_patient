import type {
  AddAddress,
  AddressItem,
  OrderDetail,
  OrderPre,
  Logistics
} from '@/types/order'
import { request } from '@/utils/request'
import { showToast } from 'vant'

type ServiceResult<T> = {
  code: number
  message: string
  data: T
}

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

const fallbackLogistics: Logistics = {
  estimatedTime: '2天后',
  name: '顺丰速运',
  awbNo: 'SF1234567890',
  status: 3,
  statusValue: '运输中',
  currentLocationInfo: {
    longitude: '114.0579',
    latitude: '22.5431'
  },
  logisticsInfo: [
    {
      longitude: '113.2644',
      latitude: '23.1291'
    },
    {
      longitude: '113.9304',
      latitude: '22.5333'
    },
    {
      longitude: '114.0579',
      latitude: '22.5431'
    }
  ],
  list: [
    {
      id: 'log-1',
      content: '包裹已从深圳分拨中心发出',
      createTime: '2026-04-15 09:12:00',
      status: 1,
      statusValue: '已发货'
    },
    {
      id: 'log-2',
      content: '包裹到达深圳南山转运中心',
      createTime: '2026-04-15 12:35:00',
      status: 3,
      statusValue: '运输中'
    },
    {
      id: 'log-3',
      content: '快递员正在派送，请保持电话畅通',
      createTime: '2026-04-15 18:20:00',
      status: 4,
      statusValue: '派送中'
    }
  ]
}

export const getMedicalOrderPre = (params: { prescriptionId: string }) =>
  request<OrderPre>('/patient/medicine/order/pre', 'GET', params)

export const getAddressList = async (): Promise<
  ServiceResult<AddressItem[]>
> => {
  try {
    return await request<AddressItem[]>('/patient/order/address')
  } catch {
    showToast('收货地址服务异常，已启用测试数据')
    return {
      code: 10000,
      message: 'success',
      data: fallbackAddressList
    }
  }
}

export const addAddress = (data: AddAddress) =>
  request<{ id: string }>('/patient/order/address', 'POST', data)

export const createMedicalOrder = (data: {
  id: string
  addressId: string
  couponId?: string
}) => request<{ id: string }>('/patient/medicine/order', 'POST', data)

export const getMedicalOrderDetail = (id: string) =>
  request<OrderDetail>(`/patient/medicine/order/detail/${id}`)

export const getMedicalOrderLogistics = async (
  id: string
): Promise<ServiceResult<Logistics>> => {
  try {
    return await request<Logistics>(`/patient/order/${id}/logistics`)
  } catch {
    showToast('物流服务异常，已启用测试数据')
    return {
      code: 10000,
      message: 'success',
      data: fallbackLogistics
    }
  }
}
