import request from '@/utils/request'
import qs from 'qs'

export function findPage(param) { // 交易记录查询
    let data ={
        agentInfoIds:param.agentInfoIds, // 代理商id列表
        gameUsername:param.gameUsername, // 游戏用户名称
        tradeType:param.tradeType, // 交易类型
        beginTime:param.dateTime[0], // 起始操作时间
        endTime:param.dateTime[1], // 截止操作时间
        tradeNo:param.tradeNo, // 平台交易流水号
        agentTradeNo:param.agentTradeNo, // 代理商交易流水号
        page:param.page, // 第几页
        size:param.size, // 每页显示几条
        amountMin:param.amountMin, //起始金额
        amountMax:param.amountMax, // 终止金额
    } 
    if(data.agentInfoIds[0]==""){
        data.agentInfoIds = ""
    }

    return request({
        baseURL: '/api',
        url: '/cp4/report/trade/findPage',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function statistic(param) { // 统计
    let data ={
        agentInfoIds:param.agentInfoIds, // 代理商id列表
        gameUsername:param.gameUsername, // 游戏用户名称
        tradeType:param.tradeType, // 交易类型
        beginTime:param.dateTime[0], // 起始操作时间
        endTime:param.dateTime[1], // 截止操作时间
        tradeNo:param.tradeNo, // 平台交易流水号
        agentTradeNo:param.agentTradeNo, // 代理商交易流水号
        page:param.page, // 第几页
        size:param.size, // 每页显示几条
        betNo:param.betNo, // 彩票平台注单号码
        amountMin:param.amountMin, //起始金额
        amountMax:param.amountMax, // 终止金额
    } 
    if(data.agentInfoIds[0]==""){
        data.agentInfoIds = ""
    }
    return request({
        baseURL: '/api',
        url: '/cp4/report/trade/statistic',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function exportTable(param) { // 导出
    let data ={
        agentInfoIds:param.agentInfoIds, // 代理商id列表
        gameUsername:param.gameUsername, // 游戏用户名称
        tradeType:param.tradeType, // 交易类型
        beginTime:param.dateTime[0], // 起始操作时间
        endTime:param.dateTime[1], // 截止操作时间
        tradeNo:param.tradeNo, // 平台交易流水号
        agentTradeNo:param.agentTradeNo, // 代理商交易流水号
        page:param.page, // 第几页
        size:param.size, // 每页显示几条
        betNo:param.betNo, // 彩票平台注单号码
        amountMin:param.amountMin, //起始金额
        amountMax:param.amountMax, // 终止金额
    } 
    if(data.agentInfoIds[0]==""){
        data.agentInfoIds = ""
    }
    return request({
        baseURL: '/api',
        url: '/cp4/report/trade/exportList',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function findDetail(param) { //  ※查看详情
    let data ={
        tradeNo:param.tradeNo, // 平台交易流水号
        tradeType:param.tradeType, // 交易类型
        agentInfoId:param.agentInfoId, // 游戏用户名称 
    } 
    return request({
        baseURL: '/api',
        url: '/cp4/report/trade/findDetail',
        method: 'post',
        data: qs.stringify(data)
    })
}