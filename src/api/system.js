import request from '@/utils/request'

export function getSysAdmin(code) {
  const data = {
    code: code,
    token: 'token'
  }
  return request({
    url: '/system/demo',
    method: 'get',
    params: data
  }
  )
}