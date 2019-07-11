import request from '@/utils/request'
import qs from 'qs'

// 自定义赔率设置
export function fetchTreeList() { // 获取树列表
    return request({
        baseURL: 'http://192.168.50.81:80/mock', 
        url: '/5cb43617ea866b0dc477bc41/agentPlatForm/gamemanage/userdefineodd/treelist',
        method: 'post'
    })
}

export function getOddData(param) { // 获取对应赔率数据
    let data = {
        lotteryType: param.lotteryType
    }
    return request({
        baseURL: 'http://192.168.50.81:80/mock', 
        url: '/5cb43617ea866b0dc477bc41/agentPlatForm/gamemanage/userdefineodd/odddata',
        method: 'post',
        params: data
    })
}

export function getWanFa(param) { // 获取玩法列表
    let data = {
        lotteryType: param.lotteryType
    }
    return request({
        baseURL: 'http://192.168.50.81:80/mock', 
        url: '/5cb43617ea866b0dc477bc41/agentPlatForm/gamemanage/userdefineodd/wanfalist',
        method: 'post',
        data: data
    })
}

export function getOddDetail(param) { // 获取玩法对应赔率信息
    let data = {
        "lotteryType": param.lotteryType,
        "wanfaType": param.wanfaType
    }
    return request({
        baseURL: 'http://192.168.50.81:80/mock', 
        url: '/5cb43617ea866b0dc477bc41/agentPlatForm/gamemanage/userdefineodd/wanfaoddlist',
        method: 'post',
        data: data
    }) 

}

export function getStartStatus(param) { // 获取启用状态
    let data = {
        "lotteryType": param.lotteryType,
        "wanfaType": param.wanfaType,
        "oddData": param.oddData
    }
    return request({
        baseURL: 'http://192.168.50.81:80/mock', 
        url: '/5cb43617ea866b0dc477bc41/agentPlatForm/gamemanage/userdefineodd/startodd',
        method: 'post',
        data: data
    })
} 

export function getSaveStatus(param) { // 获取保存状态
    let data = {
        "lotteryType": param.lotteryType,
        "wanfaType": param.wanfaType,
        "oddData": param.oddData
    }
    return request({
        baseURL: 'http://192.168.50.81:80/mock', 
        url: '/5cb43617ea866b0dc477bc41/agentPlatForm/gamemanage/userdefineodd/saveodd',
        method: 'post',
        data: data
    })
}
