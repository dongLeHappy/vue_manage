import request from '@/utils/request'
import qs from 'qs'

export function findByLotteryId(data) { // 获取对应盘口列表（同步通用设置）
    return request({
        baseURL: '/api', 
        url: '/cp4/agent/agentPlayQuota/findByLotteryId',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function mergeQuota(data) { // 保存（按钮）
    return request({
        baseURL: '/api', 
        url: '/cp4/agent/agentPlayQuota/mergeQuota',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function mergeForCategory(data) { // 启用（按钮）
    return request({
        baseURL: '/api', 
        url: '/cp4/agent/agentCustom/mergeForCategory',
        method: 'post',
        data: qs.stringify(data)
    })
}



