import request from '@/utils/request'
import qs from 'qs';

export function fetchList(param) { // 获取用户列表
  const data = {
    page: param.page,
    pageSize: param.pageSize,
    userName:param.userName,
    endTime:param.endTime,
    startTime:param.startTime
  }
  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5c8df9105579100de394dc6b/systemManager/admin/list',
    method: 'get',
    params: qs.stringfy(data)
  })
}

export function changePwd(param) { // 修改密码
  const data = {
    oldPassword:param.oldPassword,
    newPassword:param.newPassword,
    confirmPassword:param.confirmPassword
  }
  return request({
    url: '/system-manger/systemManager/admin/updatePassword',
    method: 'post',
    data: data
  })
}