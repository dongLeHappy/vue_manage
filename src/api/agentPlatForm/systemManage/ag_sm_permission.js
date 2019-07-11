import request from '@/utils/request'
import qs from 'qs'

export function agentPermissionPage(param) { // 获取权限列表
  const data = {
    page: param.page,
    size: param.size,
    name: param.name
  }
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/cp4/system/permission/agentPermissionPage',
    method: 'post',
    data: qs.stringify(data)
  })
}