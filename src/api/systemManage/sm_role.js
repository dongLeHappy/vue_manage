import request from '@/utils/request'
import qs from 'qs'

export function findPage(data) { // 查询(按钮)
    return request({
        baseURL: '/api',
        url: '/cp4/system/role/findPage',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function disable(param) { // 启用 - 禁用(按钮)
    const data = {
        id: param.id,
        disable: param.disable
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/role/disable',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function add(param) { // 新增(按钮)
    const data = {
        name: param.name,
        remark: param.remark
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/role/persist',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function treeAndList(param) { // 授权树
    const data = {
        id: param.id
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/role/treeAndList',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function permissionAuthList(param) { // 授权列表
    const data = {
        id: param.id,
        permissionId: param.permissionId
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/role/permissionAuthList',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function savePermission(data) { // 保存(按钮)
    return request({
        baseURL: '/api',
        url: '/cp4/system/role/savePermission',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function findRoleUser(param) { // 查询用户分配列表
    const data = {
        id: param.id
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/role/findRoleUser',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function saveRoleUser(data) { // 保存分配用户(按钮)

    return request({
        baseURL: '/api',
        url: '/cp4/system/role/saveRoleUser',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function permissionTree(param) { // 权限树(查看用户详情)
    const data = {
        id: param.id
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/role/permissionTree',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function permission(param) { // 据权限id查询用户权限列表。permissionId不传则默认查询全部列表；传则查询该权限以及对应的所有子级权限列表 
    const data = {
        id: param.id,
        permissionId: param.permissionId
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/role/permission',
        method: 'post',
        data: qs.stringify(data)
    })
}