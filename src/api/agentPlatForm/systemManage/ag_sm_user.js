import request from '@/utils/request'
import qs from 'qs'

export function findAgentUserPage(param) { // 查询(按钮)
    const data = {
        username: param.username,
        disable: param.disable,
        createdDateBegin: param.createdDateBegin,
        createdDateEnd: param.createdDateEnd,
        page: param.page,
        size: param.pageSize
    }
    return request({
        baseURL: '/api', 
        url: '/cp4/system/user/findAgentUserPage',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function persistAgentUser(data) { // 新增(按钮)
    return request({
        baseURL: '/api', 
        url: '/cp4/system/user/persistAgentUser',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function disable(param) { // 启用-禁用(按钮)
    const data = {
        id: param.id,
        disable: param.disable
    }
    return request({
        baseURL: '/api', 
        url: '/cp4/system/user/disable',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function mergePasswd(param) { // 修改密码(按钮)
    const data = {
        id: param.id,
        passwd: param.passwd,
        confirmPasswd: param.confirmPasswd
    }
    return request({
        baseURL: '/api', 
        url: '/cp4/system/user/adminMergePasswd',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function agentUserAuthList(param) { // 授权(按钮) - 查看用户详情(按钮)
    const data = {
        id: param.id,
        optType: param.optType
    }
    return request({
        baseURL: '/api', 
        url: '/cp4/system/user/agentUserAuthList',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function saveAgentUserPermission(data) { // 保存授权列表
    return request({
        baseURL: '/api', 
        url: '/cp4/system/user/saveAgentUserPermission',
        method: 'post',
        data: qs.stringify(data)
    })
}

















export function fetchDialogList(param) { // 获取弹窗表格数据
    const data = {
        userId: param.userId
    }
    return request({
        baseURL: '/api', 
        url: '/5cb15abbea866b0dc477bc2c/agentPlatForm/systemmanage/usermanange/dialoglist',
        method: 'get',
        params: data
    })
}


export function saveAccreditData(param) { // 授权保存
    const data = {
        accreditId: param.accreditId,
        accreditName:param.accreditName
    }
    return request({
        baseURL: '/api', 
        url: '/5cb15abbea866b0dc477bc2c/agentPlatForm/systemmanage/usermanange/saveAccredit',
        method: 'post',
        params: data
    })
}
