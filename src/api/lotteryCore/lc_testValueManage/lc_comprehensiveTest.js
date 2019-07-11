import request from '@/utils/request'
import qs from 'qs'

export function findPage(data) { // 查询列表
    return request({
      baseURL: '/api',
      url: '/cp4/testcase/testcase/findPage',
      method: 'post',
      data: qs.stringify(data)
    })
}