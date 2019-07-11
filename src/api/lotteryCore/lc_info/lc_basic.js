import request from '@/utils/request'
import qs from 'qs'

export function findPage(param) { // 查询列表
  let data = {
    page:param.page,
    size:param.size
  }
  return request({
    baseURL: '/api',
    url: '/cp4/cpconfig/playVersion/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function findByVersionId(param) { // 根据权限版本id拉取玩法
  let data = {
    playVersionId: param.playVersionId
  }
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/playDetail/findByVersionId',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function findByPlayDetailId(data) { // 根据玩法id拉取对应玩法数据
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/playConfig/findByPlayDetailId',
    method: 'post',
    data: qs.stringify(data)
  })
}