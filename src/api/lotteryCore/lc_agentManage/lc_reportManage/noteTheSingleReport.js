import request from '@/utils/request'
import qs from 'qs'

export function findOrderPage(data) { // 获取注单报表
  return request({
    baseURL: '/api', 
    url: '/cp4/report/orderReport/findOrderPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function exportOrderList(data) { // 导出(按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/report/orderReport/export',
    method: 'post',
    data: qs.stringify(data)
  })
}
