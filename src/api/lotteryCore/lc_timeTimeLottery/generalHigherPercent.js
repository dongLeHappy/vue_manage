import request from '@/utils/request'
export function getTypeOrPercent() { // 游戏玩法管理接口
  return request({
    baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
    url: '/5c9f805b21d4990ddb61f672/lotteryCore/lcConfig/lc_config/timeTimeLottery/generalHigherPercent',
    method: 'get'

  })
}
