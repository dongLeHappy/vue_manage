import request from '@/utils/request'

export function zodiscList(param) { // 调用接口方法
  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5caab64eea866b0dc477bc1d/lotteryCore/lcbasic/checkVisonInfo',
    method: 'get'
  })
}


