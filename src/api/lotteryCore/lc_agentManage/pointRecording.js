import request from '@/utils/request'

export function getPointTableData(res) { // 注单报表接口
  let data = {
    page:res.page,
    pageSize:res.pageSize
  }
  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5ca824c3ea866b0dc477bbd4/agentManage/pointRecording',
    method: 'get',
    params:data
  })
}
