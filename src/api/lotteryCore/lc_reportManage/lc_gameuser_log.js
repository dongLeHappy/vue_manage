import request from '@/utils/request'
import qs from 'qs'

export function findOrderPage(param) { // 游戏用户报表查询
    let data= {
        agentInfoIds:param.agentInfoIds,
        username: param.username ,
        gameUserId: param.gameUserCode ,
        page: param.page ,
        size: param.size ,
        loginTimeBegin: param.dateTime[0] ,
        loginTimeEnd: param.dateTime[1] ,
        device:param.device
    }
    if(data.agentInfoIds[0]==""){
        data.agentInfoIds = ""
    }
    return request({
        baseURL: '/api',
        url: '/cp4/login/gameUserLog/findPage',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function exportExcel(param) { // 导出
    let data= {
        agentInfoIds:param.agentInfoIds,
        username: param.username ,
        gameUserId: param.gameUserCode ,
        loginTimeBegin: param.dateTime[0] ,
        loginTimeEnd: param.dateTime[1] ,
        device:param.device
    }
    if(data.agentInfoIds[0]==""){
        data.agentInfoIds = ""
    }
    return request({
        baseURL: '/api',
        url: '/cp4/login/gameUserLog/export',
        method: 'post',
        data: qs.stringify(data)
    })
}