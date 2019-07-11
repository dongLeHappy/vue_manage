import request from '@/utils/request';
import qs from 'qs';

export function lotteryTree() { // 自定义投注上限彩种树
    return request({
        baseURL: '/api',
        url: '/cp4/cpconfig/lottery/lotteryTree',
        method: 'post'
    })
}

export function findByLotteryId(data) { // 获取盘口数据
    return request({
        baseURL: '/api',
        url: '/cp4/agent/agentQuotaVer/findDetail',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function mergeQuota(data) { // 保存（按钮）
    return request({
        baseURL: '/api',
        url: '/cp4/agent/agentPlayQuota/mergeQuota',
        method: 'post',
        data: data
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
export function visonNamelist(data) { // 投注上限版本名称列表
    return request({
        baseURL: '/api',
        url: '/cp4/agent/agentQuotaVer/agentList',
        method: 'post',
        // data: qs.stringify(data)
    })
}