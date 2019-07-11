import request from '@/utils/request'
import qs from 'qs'

export function findPage(param) { // 客户管理表格数据接口
    let data = {
        page: param.page,
        size: param.size,
        device: param.device || null,
        disable: param.disable || null,
        title: param.title || null
    }
    return request({
        baseURL: '/api',
        url: '/cp4/operation/information/findPage',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function mergeForDisable(param) { // 启用-禁用(按钮)
    let data = {
        id: param.id,
        disable: param.disable
    }
    return request({
        baseURL: '/api',
        url: '/cp4/operation/information/disable',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function persistEntity(param) { // 新增(按钮)
    let data = {
        title: param.title,
        orderSeq: param.orderSeq,
        device: param.device,
        content: param.content
    }
    return request({
        baseURL: '/api',
        url: '/cp4/operation/information/persistEntity',
        method: 'post',
        data: qs.stringify(data)
    })
}