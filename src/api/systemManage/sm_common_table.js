import request from '@/utils/request'

export function getTable(param) { // 获取用户列表
  const data = {
   tableType: param.tableType
  }
  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5cc1a90a98ee9c0dcfe3f999/public/permissiontreeAndTable/commonTable',
    method: 'post',
    params: data
  })
}

