import request from '@/utils/request'
import qs from 'qs'

export function findPage(param) { // 查询(按钮)
    const data = {
        agentInfoIds: param.agentInfoIds,
        showDetail: param.showDetail,
        page: param.page,
        size: param.size,
        obtainTimeBegin:param.dateTime[0],
        obtainTimeEnd:param.dateTime[1]
    }
    if(data.agentInfoIds[0]==""){
        data.agentInfoIds = ""
    }
    return request({
        baseURL: '/api', 
        url: '/cp4/statistic/operationDetail/findPage',
        method: 'post',
        data: qs.stringify(data)
    })
}

