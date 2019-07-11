import request from '@/utils/request'
import qs from 'qs'

export function findPage(data) { // 查询列表
  return request({
    baseURL: '/api', 
    url: '/cp4/supply/supplierData/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function findSupplierPrizeNoList(param) { // 查看详情
  let data = {
    supplierInfoId: param.supplierInfoId,
    lotteryId: param.lotteryId,
    gameNo: param.gameNo
  }
  return request({
    baseURL: '/api', 
    url: '/cp4/supply/supplierData/findSupplierPrizeNoList',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function exportExcel(data) { // 导出接口
  return request({
    baseURL: '/api', 
    url: '/cp4/supply/supplierData/export',
    method: 'post',
    data: qs.stringify(data)
  })
}





















/*原有接口*/ 
export function getALotteryResultsQueryTableList(data) { // 供应商开奖结果列表查询接口
  let par = {
    page: data.page,
    size:data.size,
    parentLotteryId:data.parentLotteryId,
    lotteryId:data.lotteryId,
    gameNo:data.gameNo,
    expiredTimeBegin:data.expiredTimeBegin,
    expiredTimeEnd:data.expiredTimeEnd,
  }
  return request({
    baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
    url: '/5cd3ee65a2f90b0e1825e4f6/api/cpconfig/api/cp4/supply/supplierData/findPage',
    method: 'post',
    params:data
  })
}

export function getDataProviderInformation(data) { //查看供应商开奖数据查询接口
  let par = {
    supplierInfoId: data.supplierInfoId,
    lotteryId: data.lotteryId,
    gameNo: data.gameNo,
  }
  return request({
    baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
    url: '/5cd3ee65a2f90b0e1825e4f6/api/cpconfig/api/cp4/supply/supplierData/findSupplierPrizeNoList',
    method: 'post',
    params:par
  })
}
