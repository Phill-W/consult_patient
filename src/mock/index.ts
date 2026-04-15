import Mock from 'mockjs'

const logisticsData = {
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

export default [
  {
    url: '/patient/message/sys/list',
    method: 'GET',
    timeout: 500,
    response: () => {
      const data = []
      for (let i = 0; i < 10; i++) {
        data.push(
          Mock.mock({
            id: '@id',
            title: '@ctitle(5,10)',
            content: '@ctitle(10,20)',
            avatar: '@image("100x100")',
            createTime: '@datetime()',
            status: '@integer(0,1)',
            type: '@integer(1,3)'
          })
        )
      }
      return {
        code: 10000,
        message: '模拟数据成功',
        data
      }
    }
  },
  {
    url: '/patient/order/:id/logistics',
    method: 'GET',
    timeout: 500,
    response: () => ({
      code: 10000,
      message: '模拟物流数据成功',
      data: logisticsData
    })
  }
]
