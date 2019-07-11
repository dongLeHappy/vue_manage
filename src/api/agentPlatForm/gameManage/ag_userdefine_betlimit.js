import request from '@/utils/request'
import qs from 'qs'

// 自定义赔率设置
export function findQutoPage(res) { // 获取树列表
    let data = {
        name: res.name,
        disable: res.disable,
        page: res.page,
        size: res.size
    }
    return request({
        baseURL: '/api',
        url: '/cp4/agent/agentQuotaVer/findQuotaPage',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function enableBetingHigher(data) { // 投注上限设置启用
    return request({
        baseURL: '/api',
        url: '/cp4/agent/agentQuotaVer/enable',
        method: 'post',
        data: qs.stringify(data)
    })
}