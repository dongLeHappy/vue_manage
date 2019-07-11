import request from '@/utils/request'
import qs from 'qs'

export function findPage(data) { // 列表查询
  return request({
    baseURL: '/api',
    url: '/cp4/system/user/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function disable(data) { // 启用-禁用
  return request({
    baseURL: '/api',
    url: '/cp4/system/user/disable',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function persist(param) { // 新增用户
  const data = {
    username: param.username,
    passwd: param.passwd,
    confirmPasswd: param.confirmPasswd
  }
  return request({
    baseURL: '/api',
    url: '/cp4/system/user/persist',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function adminMergePasswd(param) { // 修改密码
  const data = {
    id: param.id,
    passwd: param.passwd,
    confirmPasswd: param.confirmPasswd
  }
  return request({
    baseURL: '/api',
    url: '/cp4/system/user/adminMergePasswd',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function detailUserInfo(param) { // 查看用户详情
  const data = {
    id: param.id
  }
  return request({
    baseURL: '/api',
    url: '/cp4/system/user/findUserDetail',
    method: 'post',
    data: qs.stringify(data),
  })
}

export function getTreeData(param) { // 获取权限树
  const data = {
    id: param.id || null
  }
  return request({
    baseURL: '/api',
    url: '/cp4/system/user/permissionTree',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function getPermission(param) { // 获取权限列表
  const data = {
    id: param.id || null,
    permissionId: param.permissionId || null
  }
  return request({
    baseURL: '/api',
    url: '/cp4/system/user/permission',
    method: 'post',
    data: qs.stringify(data)
  })
}




