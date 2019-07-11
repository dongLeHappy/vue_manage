import request from '@/utils/request';
import qs from 'qs';

export function findPage(param) { // 查询列表
  let data = {
    parentLotteryId: param.parentLotteryId,
    lotteryId: param.lotteryId,
    gameNo: param.gameNo,
    govPrizeTimeBegin: param.govPrizeTimeBegin,
    govPrizeTimeEnd: param.govPrizeTimeEnd,
    prizeStatus: param.prizeStatus,
    openingStatus: param.openingStatus,
    auditStatus: param.auditStatus,
    prizeable: param.prizeable,
    page: param.prizeable,
    size: param.size
  }
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/cp4/prize/prizeConfirm/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function getLotteryConfirmedTableList(data) { //  开奖确认提交列表查询接口   
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/5ca3062721d4990ddb61f67d/example_copy/getLotteryConfirmedTableList',
    method: 'get',
    params:data
  })
}
export function getSupplierDrawingDataAcquisition(data) { //  开奖确认提交（弹框获取供应商开奖数据的接口）
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/5ca3062721d4990ddb61f67d/example_copy/lc_lotteryConfirmed',
    method: 'get',
    params:data
  })
}
export function SetSupplierSubmitWinning(data) { //确认开奖提交确定方法
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/5ca3062721d4990ddb61f67d/example_copy/SetSupplierSubmitWinning',
    method: 'post',
    data:data
  })
}



