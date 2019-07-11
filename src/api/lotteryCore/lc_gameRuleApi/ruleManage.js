import request from '@/utils/request'
export function ruleManageData() { // 游戏玩法管理接口
  return request({
    baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
    url: '/5c9f805b21d4990ddb61f672/menulist',
    method: 'get'

  })
}

export function betsRuleManageData() { // 游戏玩法下注值管理接口
  return request({
    baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
    url: '/5c9f805b21d4990ddb61f672/betsdata',
    method: 'get'

  })
}

export function gameRuleListData() { // 通用赔率上限管理接口
    return request({
        baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
        url: '/5c9f805b21d4990ddb61f672/general',
        method: 'get'

    })
}

export function limitAmount() { // 通用盘口金额限制配置接口
    return request({
        baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
        url: '/5c9f805b21d4990ddb61f672/amountData',
        method: 'get'

    })
}