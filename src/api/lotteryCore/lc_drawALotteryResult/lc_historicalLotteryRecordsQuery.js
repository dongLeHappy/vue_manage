import request from '@/utils/request'
import qs from 'qs'

export function getHistoricalRecordsTableList(data) { // 历史开奖确认记录查询列表查询接口
  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5ca3062721d4990ddb61f67d/example_copy/getHistoricalRecordsTableList',
    method: 'get',
    params:data
  })
}
export function findPage(data) { // 开奖结果列表/历史结果查询--查询列表【条件查询】
  return request({
    baseURL:'/api', // 请求自己配的json
    url: '/cp4/prize/prizeConfirm/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function findSupplierPrizeNoList(data) { // 供应商【默认查询】
  return request({
    baseURL:'/api', // 请求自己配的json
    url: '/cp4/prize/prizeConfirm/findSupplierPrizeNoList',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function comfirmPrizeNo(data) { // 提交【按钮】
  return request({
    baseURL:'/api', // 请求自己配的json
    url: '/cp4/prize/prizeConfirm/comfirmPrizeNo',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function auditSuccess(data) { // 审核开奖结果【审核通过】
  return request({
    baseURL:'/api', // 请求自己配的json
    url: '/cp4/prize/prizeConfirm/auditSuccess',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function auditReject(data) { // 审核开奖通过 - 审核驳回【auditReject】
  return request({
    baseURL:'/api', // 请求自己配的json
    url: '/cp4/prize/prizeConfirm/auditReject',
    method: 'post',
    data: qs.stringify(data)
  })
}