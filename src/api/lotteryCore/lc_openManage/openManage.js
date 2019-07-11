import request from '@/utils/request'
import qs from 'qs'

export function findPage(data) { // 开盘管理接口
    return request({
        baseURL: '/api', // 请求自己配的json
        url: '/cp4/opening/opening/findPage',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function lotteryTree() { // 彩种树查询接口
    return request({
        baseURL: '/api',
        url: '/cp4/cpconfig/lottery/lotteryTree',
        method: 'post',
    })
}
export function persist(data) { // 新增【确定按钮】
    return request({
        baseURL: '/api',
        url: '/cp4/opening/opening/persist',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function findById(data) { // 编辑信息【ID查询】
    return request({
        baseURL: '/api',
        url: '/cp4/opening/opening/findById',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function mergeEntity(data) { // 编辑信息【确定按钮】
    return request({
        baseURL: '/api',
        url: '/cp4/opening/opening/mergeEntity',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function mergeEndType(data) { // 人工封盘【确认按钮】
    return request({
        baseURL: '/api',
        url: '/cp4/opening/opening/mergeEndType',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function template() { // 批量新增【下载模板】
    return request({
        baseURL: '/api',
        url: '/cp4/opening/openingTemp/template',
        method: 'post',
        // data: qs.stringify(data)
    })
}
// export function importAndSolve(data) { // 批量新增【下一步--解析】
//     return request({
//         baseURL: '/api',
//         url: '/cp4/opening/openingTemp/importAndSolve',
//         method: 'post',
//         data:data
//     })
// }
export function downloadexport(data) { // 批量新增【导出】
    return request({
        baseURL: '/api',
        url: '/cp4/opening/openingTemp/export',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function download(data) { // 批量新增【下载】 
    return request({
        baseURL: '/api',
        url: '/cp4/opening/openingTemp/download',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function saveBatch(data) { // 批量新增【下一步--导入】 
    return request({
        baseURL: '/api',
        url: '/cp4/opening/opening/saveBatch',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function removeById(data) { // 删除开盘信息
    return request({
        baseURL: '/api',
        url: '/cp4/opening/opening/removeById',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function updateOpenStatus(data) { // 更新开盘信息
    return request({
        baseURL: '/api',
        url: '/cp4/opening/opening/updateOpenStatus',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function findList(data) { // 查看详情 【findListByOpeningId】注：后端需要根据创建时间升序排列
    return request({
        baseURL: '/api',
        url: '/cp4/opening/openingLog/findList',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function confirmPrizeManualSettle(data) { // 人工结算【confirmPrizeManualSettle】
    return request({
        baseURL: '/api',
        url: '/cp4/opening/opening/confirmPrizeManualSettle',
        method: 'post',
        data: qs.stringify(data)
    })
}
// export function updateOpenStatus(data) { // 更新开盘信息
//     return request({
//         baseURL: '/api',
//         url: '/cp4/opening/opening/updateOpenStatus',
//         method: 'post',
//         data: qs.stringify(data)
//     })
// }