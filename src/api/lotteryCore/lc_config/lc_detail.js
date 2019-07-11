import request from '@/utils/request'

export function getMenuList(data) { // 游戏玩法管理接口
  return request({
    baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
    url: '/5c9f805b21d4990ddb61f672/betsdata',
    method: 'post',
    data:data
  })
}
export function getGameplayInfo(data) { // 游戏玩法管理接口
  return request({
    baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
    url: '/5c9f805b21d4990ddb61f672/menulist',
    method: 'post',
    data:data
  })
}
export function getBottomPourInfo(data) { // 游戏玩法管理接口
  return request({
    baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
    url: '/5c9f805b21d4990ddb61f672/betsdata',
    method: 'post',
    data:data
  })
}
export function getLimitAmount(data) { // 通用盘口金额限制配置接口
    return request({
        baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
        url: '/5c9f805b21d4990ddb61f672/amountData',
        method: 'post',
        data:data
    })
}
export function getDataPriceList(data) { //(通用与通用上限的) 赔率管理    左边玩法数据接口请求
  return request({
      baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
      url: '/5c9f805b21d4990ddb61f672/lotteryCore/lcConfig/playDataPricePanagement',
      method: 'post',
      data:data
  })
}
export function getDataOdds(data) { //(通用与通用上限的) 赔率管理 获取右边的赔率列表数据  接口请求
   if(data.pId == 'a'){
    data.pId = "香港彩"
   }
   if(data.pId == 'b'){
    data.pId = "时时彩"
   }
   if(data.pId == 'c'){
    data.pId = "11选5"
   }
   if(data.pId == 'd'){
    data.pId = "快乐10分"
   }
   if(data.pId == 'e'){
    data.pId = "PK10"
   }if(data.pId == 'f'){
    data.pId = "快3"
   }
   if(data.pId == 'g'){
    data.pId = "分分彩"
   }

   if(data.sId == 'ca'){
    data.sId = "通用赔率上限管理"
   }
   if(data.sId == 'ba'){
    data.sId = "通用赔率管理"
   }
   
  return request({
      baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
      url: '/5c9f805b21d4990ddb61f672/lotteryCore/lcConfig/general_class',
      method: 'post',
      data:data
  })
}
export function getPreserveData(data) { //(通用与通用上限的) 赔率管理  保存接口请求
  return request({
      baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
      url: '/5c9f805b21d4990ddb61f672/lotteryCore/lcConfig/getPreserveData',
      method: 'post',
      data:data
  })
}
export function postMonetaryList(data) { // 通用盘口金额限制配置接口 保存  接口请求
  return request({
      baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
      url: '/5c9f805b21d4990ddb61f672/lotteryCore/lcConfig/postMonetaryList',
      method: 'post',
      data:data
  })
}
export function postStateInfo(data) { // 启用与禁用 彩种配置中的接口请求
  return request({
      baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
      url: '/5c9f805b21d4990ddb61f672/lotteryCore/lcConfig/postStateInfo',
      method: 'post',
      data:data
  })
}