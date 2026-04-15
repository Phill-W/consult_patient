import Mock from 'mockjs'

const logisticsData = {
  estimatedTime: '3天后',
  name: '顺丰速运',
  awbNo: 'SF9876543210',
  status: 3,
  statusValue: '运输中',
  currentLocationInfo: {
    longitude: '118.7969',
    latitude: '32.0603'
  },
  logisticsInfo: [
    {
      longitude: '114.0579',
      latitude: '22.5431'
    },
    {
      longitude: '114.3055',
      latitude: '30.5928'
    },
    {
      longitude: '118.7969',
      latitude: '32.0603'
    },
    {
      longitude: '120.1551',
      latitude: '30.2741'
    },
    {
      longitude: '116.4074',
      latitude: '39.9042'
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
      content: '包裹到达广州转运中心，正在分拣',
      createTime: '2026-04-15 13:40:00',
      status: 3,
      statusValue: '运输中'
    },
    {
      id: 'log-3',
      content: '包裹到达武汉中转中心，等待下一站发车',
      createTime: '2026-04-16 09:25:00',
      status: 3,
      statusValue: '运输中'
    },
    {
      id: 'log-4',
      content: '包裹到达南京转运中心，即将发往北京',
      createTime: '2026-04-16 19:18:00',
      status: 3,
      statusValue: '运输中'
    },
    {
      id: 'log-5',
      content: '快递员正在北京派送，请保持电话畅通',
      createTime: '2026-04-17 08:20:00',
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
