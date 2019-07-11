import request from '@/utils/request'
import qs from 'qs'

export function findPage(param) { // 工作人员登录日志  
    let data= {
        agentInfoIds:param.agentInfoIds,
        username: param.username ,
        page: param.page ,
        size: param.size ,
        loginTimeBegin: param.dateTime[0] ,
        loginTimeEnd: param.dateTime[1] ,
    }
    if(data.agentInfoIds[0]==""){
        data.agentInfoIds = ""
    }
    return request({
        baseURL: '/api',
        url: '/cp4/login/userLog/findPage',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function exportTable(param) { // 导出
    let data= {
        agentInfoIds:param.agentInfoIds,
        username: param.username ,
        loginTimeBegin: param.dateTime[0] ,
        loginTimeEnd: param.dateTime[1] ,
    }
    if(data.agentInfoIds[0]==""){
        data.agentInfoIds = ""
    }
    return request({
        baseURL: '/api',
        url: '/cp4/login/userLog/export',
        method: 'post',
        data: qs.stringify(data)
    })
}