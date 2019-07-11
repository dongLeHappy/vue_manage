import request from '@/utils/request';
import qs from 'qs';

export function findPage(param) { // 查询列表(条件查询)
    const data = {
        agentInfoIds: param.agentInfoIds,
        username: param.username,
        agentUserId: param.agentUserId,
        id: param.gameUserId,
        lineable: param.online,
        device: param.device,
        disable: param.disable,
        agentDisable: param.agentDisable,
        lastLoginTimeBegin: param.dateTime[0] || "",
        lastLoginTimeEnd: param.dateTime [1] || "",
        page: param.page,
        size: param.size,
        createdTimeBegin:param.creationTime[0],
        createdTimeEnd:param.creationTime[1]
    }
     // 代理商老板id列表为全部时
     if(data.agentInfoIds[0] == ""){
        data.agentInfoIds = ""
      }
    return request({
        baseURL: '/api',
        url: '/cp4/user/gameUser/findPage',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function statistic(param) { // 统计(表格眉头)
    const data = {
        agentInfoIds: param.agentInfoIds,
        username: param.username,
        agentUserId: param.agentUserId,
        id: param.gameUserId,
        lineable: param.online,
        device: param.device,
        disable: param.disable,
        agentDisable: param.agentDisable,
        lastLoginTimeBegin: param.dateTime[0] || "",
        lastLoginTimeEnd: param.dateTime [1] || "",
        createdTimeBegin:param.creationTime[0],
        createdTimeEnd:param.creationTime[1]
    }
     // 代理商老板id列表为全部时
      if(data.agentInfoIds[0] == ""){
        data.agentInfoIds = ""
      }
    return request({
        baseURL: '/api', 
        url: '/cp4/user/gameUser/statistic',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function disable(data) { // 启用-禁用(按钮)
    return request({
        baseURL: '/api', 
        url: '/cp4/user/gameUser/disable',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function kickOut(param) { // 踢出(按钮)
    const data = {
        id: param.id
    }
    return request({
        baseURL: '/api', 
        url: '/cp4/user/gameUser/kickOut',
        method: 'post',
        data: qs.stringify(data)
    })
}