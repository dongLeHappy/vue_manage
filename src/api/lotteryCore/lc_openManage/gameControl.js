import request from '@/utils/request'
export function gameControlTabData(res) { // 开盘管理接口
    let data ={
        page:res.page,
        pageSize:res.pageSize
    }
    return request({
        baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
        url: '/5ca5f0e4ea866b0dc477bb7f/lotteryCore/lc_open/gameCtrol',
        method: 'get',
        params:data
    })
}
