import request from '@/utils/request'
import qs from 'qs'

export function findPage(data) { // 盈亏报表接口
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/cp4/report/orderReport/findOrderUser',
    method: 'post',
    data: qs.stringify(data)
  })
}
