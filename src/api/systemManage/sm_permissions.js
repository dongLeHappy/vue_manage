import request from '@/utils/request'
import qs from 'qs';

export function getPermissionTree() { // 获取权限树
    return request({
        baseURL: '/api',
        url: '/cp4/system/permission/tree',
        method: 'post'
    })
}

export function findList(param) { // 获取权限列表（点击节点、点击查询按钮）
    let data = {}
    if (param.id) {
        data = {
            id: param.id
        }
    } else {
        data = {
            name: param.name || null,
            owner: param.owner || null,
            createdDateBegin: param.createdDateBegin || null,
            createdDateEnd: param.createdDateEnd || null
        }

    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/permission/findList',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function remove(param) { // 删除按钮
    const data = {
        id: param.id
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/permission/remove',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function add(param) { // 新增按钮
    const data = {
        parentId: param.parentId,
        name: param.name,
        mainDataId: param.mainDataId,
        owner: param.owner,
        orderSeq: param.orderSeq,
        icon: param.icon,
        remark: param.remark
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/permission/persist',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function merge(param) { // 修改按钮
    const data = {
        id: param.id,
        parentId: param.parentId,
        name: param.name,
        mainDataId: param.mainDataId,
        owner: param.owner,
        orderSeq: param.orderSeq,
        icon: param.icon,
        remark: param.remark
    }
    return request({
        baseURL: '/api',
        url: '/cp4/system/permission/merge',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function parentTree(data) { // 父级权限树
    return request({
        baseURL: '/api',
        url: '/cp4/system/permission/parentTree',
        method: 'post',
        data: qs.stringify(data)
    })
}