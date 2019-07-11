import request from '@/utils/request'
import qs from 'qs'

export function findPage(data) { // 查询(条件查询按钮)
  return request({
    baseURL: '/api',
    url: '/cp4/operation/agentInfo/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function persistEntity(param) { // 新增(按钮)
  let data ={
    username: param.username,
    passwd: param.passwd,
    disable: param.disable,
    contact: param.contact,
    remark: param.remark
  };
  return request({
    baseURL: '/api',
    url: '/cp4/operation/agentInfo/persistEntity',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function mergeEntity(param) { // 修改(按钮)
  let data ={
    id: param.id,
    passwd: param.passwd,
    contact: param.contact,
    remark: param.remark,
    passwdAuth: param.passwdAuth
  };
  return request({
    baseURL: '/api',
    url: '/cp4/operation/agentInfo/mergeEntity',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function disable(param) { // 启用-禁用(按钮)
  let data ={
    id: param.id,
    disable: param.disable
  };
  return request({
    baseURL: '/api',
    url: '/cp4/operation/agentInfo/disable',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function findById(param) { // 查看完整信息(按钮)
  let data ={
    id: param.id
  };
  return request({
    baseURL: '/api',
    url: '/cp4/operation/agentInfo/findById',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function get(data) { // 查询OpenAPI权限
  return request({
    baseURL: '/api',
    url: '/cp4/operation/agentIPWhite/get',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function save(data) { // 保存OpenAPI权限
  return request({
    baseURL: '/api',
    url: '/cp4/operation/agentIPWhite/save',
    method: 'post',
    // data: qs.stringify(data)
    data
  })
}

















