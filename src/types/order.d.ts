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

type Address = Omit<AddressItem, 'isDefault'>

export type OrderDetail = {
  /** 药品订单ID */
  id: string
  /** 药品订单编号 */
  orderNo: string
  /** 订单类型 */
  type: number
  /** 创建时间 */
  createTime: string
  /** 处方ID */
  prescriptionId: string
  /** 订单状态 */
  status: OrderType
  /** 订单状态说明 */
  statusValue: string
  /** 药品清单 */
  medicines: Medical[]
  /** 支付倒计时时间 */
  countDown: number
  /** 收货地址 */
  addressInfo: Address
  /** 物流信息 */
  expressInfo: {
    /** 物流最新位置 */
    content: string
    /** 物流最新时间 */
    time: string
  }
  /** 支付时间 */
  payTime: string
  /** 支付方式 */
  paymentMethod?: 0 | 1
  /** 支付金额 */
  payment: number
  /** 积分抵扣 */
  pointDeduction: number
  /** 优惠券抵扣 */
  couponDeduction: number
  /** 邮费 */
  expressFee: number
  /** 实付金额 */
  actualPayment: number
  /** 问诊室ID */
  roomId: string
}
