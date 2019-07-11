import request from '@/utils/request'
import qs from 'qs';

export function findPage(data) { // 查询(按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/scheduler/timeTask/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function mergeRemark(data) { // 编辑说明(按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/scheduler/timeTask/mergeRemark',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function checkMaskLog(data) { // 查看执行日志(按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/scheduler/timeTaskLog/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

