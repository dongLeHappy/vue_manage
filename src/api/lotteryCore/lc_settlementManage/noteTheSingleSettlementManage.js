import request from '@/utils/request'
import qs from 'qs'

export function findLotteryGameNoPage(data) { // 查询(按钮)
  return request({
    baseURL: '/api',
    url: '/cp4/report/settleReport/findLotteryGameNoPage',
    method: 'post',
    data: qs.stringify(data)
  })
}
