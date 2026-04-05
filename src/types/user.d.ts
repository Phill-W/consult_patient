// 用户信息
type User = {
  /** token令牌 */
  token: string
  /** 用户ID */
  id: string
  /** 用户名称 */
  account: string
  /** 手机号 */
  mobile: string
  /** 头像 */
  avatar: string
}

// 短信验证码类型，登录|注册|修改手机号|忘记密码|绑定手机号
type CodeType =
  | 'login'
  | 'register'
  | 'changeMobile'
  | 'forgetPassword'
  | 'bindMobile'

// Pick 作用？
// 从类型对象中取出指定的属性类型
// Omit 作用？
// 从类型对象中排出指定的属性类型，得到剩余的
type OmitUser = Omit<User, 'token'>
type UserInfo = OmitUser & {
  /** 关注 */
  likeNumber: number
  /** 收藏 */
  collectionNumber: number
  /** 积分 */
  score: number
  /** 优惠券 */
  couponNumber: number
  orderInfo: {
    /** 待付款 */
    paidNumber: number
    /** 待发货 */
    receivedNumber: number
    /** 待收货 */
    shippedNumber: number
    /** 已完成 */
    finishedNumber: number
  }
}
