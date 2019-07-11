import request from '@/utils/request'
import qs from 'qs'

export function findSettleOrderPage(data) { // 开盘管理接口
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/cp4/report/orderReport/findSettleOrderPage',
    method: 'post',
    data: qs.stringify(data)
  })
}
