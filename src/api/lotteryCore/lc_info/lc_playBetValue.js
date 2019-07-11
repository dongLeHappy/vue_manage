import request from '@/utils/request'
import qs from 'qs'

export function findParentPage(param) { // 查询(按钮)
    let data = {
        page: param.page,
        size: param.size,
        parentLotteryId: param.parentLotteryId,
        menuPlayRuleId: param.menuPlayRuleId,
        playRuleId: param.playRuleId,
        betValue: param.betValue,
        h5Flag: param.h5Flag,
    }
    return request({
        baseURL: '/api',
        url: '/cp4/cpconfig/baseBall/findPage',
        method: 'post',
        data: qs.stringify(data)
    })
}