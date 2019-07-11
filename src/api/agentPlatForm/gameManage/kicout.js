import request from '@/utils/request'
export function confrimKicout(res) { // 确定踢出
  let data = {
    rowId:res.rowId
  }
  return request({
      baseURL: 'http://192.168.50.81:80/mock', 
      url: '/5cc12cda98ee9c0dcfe3f991/enableOrDisabled/confrimKicout',
      method: 'post',
      params: data
  })
}