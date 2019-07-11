import request from '@/utils/request'
import qs from 'qs'

export function getTableList(data) { // 查询(按钮)
    return request({
        baseURL: '/api',
        url: '/cp4/cpconfig/onlineLargeVer/findPage',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function onlinePeopleDisable(data) { // 启用(按钮)
    return request({
        baseURL: '/api',
        url: '/cp4/cpconfig/onlineLargeVer/disable',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function addPeople(data) { // 新增   
    return request({
        baseURL: '/api',
        url: '/cp4/cpconfig/onlineLargeVer/persist',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function editPeople(data) { // 编辑 
    return request({
        baseURL: '/api',
        url: '/cp4/cpconfig/onlineLargeVer/findDetail',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function saveEdit(data) { // 编辑保存 
    return request({
        baseURL: '/api',
        url: '/cp4/cpconfig/onlineLargeVer/mergeForDetail',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function mergeForDescription(data) { // 编辑说明
    return request({
        baseURL: '/api',
        url: '/cp4/cpconfig/onlineLargeVer/mergeForDescription',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function persistList(data) { // 保存二级彩种盘口金额关联表【persistList】
    return request({
        baseURL: '/api',
        url: '/cp4/cpconfig/quotaLargeVerLottery/persistList',
        method: 'post',
        data: qs.stringify(data)
    })
}