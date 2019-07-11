import request from '@/utils/request'
import qs from 'qs'

export function findAgentPage(param) { // 获取自定义赔率列表
    const data = {
        page: param.page,
        size: param.size,
        name: param.name || null,
        openable: param.openable || null
    }
    return request({
        baseURL: '/api', 
        url: '/cp4/cpconfig/oddsLargeVer/findAgentPage',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function disable(param) { // 启用
    const data = {
        id: param.id,
        disable: param.disable
    }
    return request({
        baseURL: '/api', 
        url: '/cp4/agent/agentOddVer/disable',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function findAgentList() { // 版本下拉列表
    return request({
        baseURL: '/api', 
        url: '/cp4/cpconfig/oddsLargeVer/findAgentList',
        method: 'post'
    })
}

export function tree(data) { // 彩种树
    return request({
        baseURL: '/api', 
        url: '/cp4/cpconfig/lotteryOddsVer/lotteryTree',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function findByLotteryId(param) { // 玩法列表
    const data = {
        lotteryId: param.lotteryId
    }
    return request({
        baseURL: '/api', 
        url: '/cp4/cpconfig/playRule/findByLotteryId',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function findPlayRuleList(param) { // 查看赔率详情
    const data = {
        lotteryOddsVerId: param.lotteryOddsVerId,
        playRuleId: param.playRuleId
    }
    return request({
        baseURL: '/api', 
        // /cp4/cpconfig/playOdds/findPlayRuleList
        url: '/cp4/cpconfig/playOdds/findPlayRuleList',
        method: 'post',
        data: qs.stringify(data)
    })
}