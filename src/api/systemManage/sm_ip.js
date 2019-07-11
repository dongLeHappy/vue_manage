import request from '@/utils/request'
import qs from 'qs';

export function findPage(param) { // 查询（条件查询）
    const data = {
        id: param.id,
        address: param.address,
        category: param.category,
        page: param.page,
        size: param.size
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/ipInfo/findPage',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function persist(param) { // 新增(按钮)
    const data = {
        address: param.address,
        category: param.category,
        description: param.description || null
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/ipInfo/persist',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function merge(param) { // 修改(按钮)
    const data = {
        id: param.id,
        address: param.address,
        category: param.category,
        description: param.description
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/ipInfo/merge',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function remove(param) { // 删除(按钮)
    const data = {
        id: param.id
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/ipInfo/remove',
        method: 'post',
        data: qs.stringify(data)
    })
}