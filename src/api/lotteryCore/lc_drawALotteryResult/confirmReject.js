import request from '@/utils/request'
export function confirmRejects(res) { // 确认驳回审核
  let data = {
    rowId:res.rowId,
    rejectReson:res.rejectReson
  }
  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5cc12cda98ee9c0dcfe3f991/enableOrDisabled/confirmReject',
    method: 'get',
    params:data
  })
}