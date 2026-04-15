import type { Medical } from './room'

export type OrderPre = {
  id: string
  couponId: string
  pointDeduction: number
  couponDeduction: number
  payment: number
  expressFee: number
  actualPayment: number
  medicines: Medical[]
}

export type AddressItem = {
  id: string
  mobile: string
  receiver: string
  province: string
  city: string
  county: string
  addressDetail: string
  isDefault: 0 | 1
}

export type AddAddress = {
  receiver: string
  mobile: string
  provinceCode: string
  cityCode: string
  countyCode: string
  addressDetail: string
  isDefault: 0 | 1
}
