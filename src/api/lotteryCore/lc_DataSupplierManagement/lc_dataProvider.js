import request from '@/utils/request'
import qs from 'qs' // 序列化对像

export function findPage(param) { // 查询(按钮)
  let data = {
    name: param.name,
    parentLotteryId: param.parentLotteryId,
    lotteryId: param.lotteryId,
    expiredTimeBegin: param.expiredTimeBegin,
    expiredTimeEnd: param.expiredTimeEnd,
    page: param.page,
    size: param.size
  }
  return request({
    baseURL: '/api', 
    url: '/cp4/supply/supplierInfo/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function persistEntity(param) { // 新增(按钮)
  let data = {
    name: param.name,
    url: param.url,
    username: param.username,
    passwd: param.passwd,
    contact: param.contact,
    expiredTime: param.expiredTime,
    remark: param.remark
  }
  return request({
    baseURL: '/api', 
    url: '/cp4/supply/supplierInfo/persistEntity',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function findById(param) { // 查询(编辑基础信息)
  let data = {
    id: param.id
  }
  return request({
    baseURL: '/api', 
    url: '/cp4/supply/supplierInfo/findById',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function mergeEntity(param) { // 保存(编辑基础信息)
  let data = {
    id: param.id,
    name: param.name,
    url: param.url,
    username: param.username,
    passwd: param.passwd,
    contact: param.contact,
    expiredTime: param.expiredTime,
    remark: param.remark
  }
  return request({
    baseURL: '/api', 
    url: '/cp4/supply/supplierInfo/mergeEntity',
    method: 'post',
    data: qs.stringify(data)
  })
}


export function findListBySupplierId(param) { // 查询(供应商配置彩种)
  let data = {
    supplierInfoId: param.supplierInfoId
  }
  return request({
    baseURL: '/api', 
    url: '/cp4/supply/supplierLottery/findListBySupplierId',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function findListByLevel(data) { // 一级彩种查询(配置彩种按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lottery/findListByLevel',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function findSupplierLottery(data) { // 二级彩种查询(配置彩种按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/supply/supplierLottery/findSupplierLottery',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function mergeLottery(data) { // 保存(配置彩种按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/supply/supplierLottery/mergeLottery',
    method: 'post',
    data: qs.stringify(data)
  })
}























/*原有接口 */

// export function getPrimaryColorKind() { // 一级彩种
//   return request({
//     baseURL: 'http://192.168.50.81:80/mock', 
//     url: '/5ca3062721d4990ddb61f67d/example_copy/Primarycolorkindlist',
//     method: 'get'
//   })
// }

// export function getSecondaryColorKind(data) { // 二级彩种
//   return request({
//     baseURL: 'http://192.168.50.81:80/mock', 
//     url: '/5ca3062721d4990ddb61f67d/example_copy/Thesecondarycolorkindlist',
//     method: 'post',
//     params:data  
//   })
// }
// export function getLcRataProviderTableList(data) { // 数据供应商管理表格数据列表查询接口
//   return request({
//     baseURL: 'http://192.168.50.81/mock/', 
//     url: '/5cd3ee65a2f90b0e1825e4f6/cp4/cpconfig/cp4/supply/supplierInfo/findPage',
//     method: 'post',
//     params:data
//   })
// }
// export function getLcRataProviderTableList(data) { // 数据供应商管理表格数据列表查询接口
//   return request({
//     baseURL: 'http://192.168.50.244:8080/', 
//     url: 'cp4/supply/supplierInfo/findPage',
//     method: 'post',
//     params:data
//   })
// }
// export function addProviderInfo(data) { //信息管理新增保存接口
//   let par = {
//     name: data.name,
//     url:data.url,
//     username: data.username,
//     passwd: data.passwd,
//     contact: data.contact,
//     expiredTime: data.expiredTime,
//     remark: data.remark,
//   }
//   return request({
//     baseURL: 'http://192.168.50.81/mock/', 
//     url: '/5cd3ee65a2f90b0e1825e4f6/cp4/cpconfig/cp4/supply/supplierInfo/persistEntity',
//     method: 'post',
//     params:par
//   })
// }
// export function saveEditFrom(parm) {  // 编辑保存
//   let data = {
//     id: parm.id,
//     name: parm.name,
//     url: parm.url,
//     username: parm.username,
//     passwd: parm.passwd,
//     contact: parm.contact,
//     expiredTime: parm.expiredTime,
//     remark: parm.remark,
//   }
//   return request({
//     baseURL: 'http://192.168.50.81/mock/', 
//     url: '5cd3ee65a2f90b0e1825e4f6/cp4/cpconfig/cp4/supply/supplierInfo/mergeEntity',
//     method: 'post',
//     params:data
//   })
// }

// export function getEditFromData(data) { // 获取编辑弹框表单数据
//   let par ={id: data.id,}
//   return request({
//     baseURL: 'http://192.168.50.81/mock/', 
//     url: '/5cd3ee65a2f90b0e1825e4f6/cp4/cpconfig/cp4/supply/supplierInfo/findById',
//     method: 'post',
//     params:par
//   })
// }
// export function getFirstLotterylist(data) { // 获取彩种配置 ---- 一级彩种
//   let par ={
//     level: data.level
//   }
//   return request({
//     baseURL: 'http://192.168.50.81/mock', 
//     url: '/5cd3ee65a2f90b0e1825e4f6/cp4/cpconfig/cp4/cpconfig/lottery/findListByLevel',
//     method: 'post',
//     params:par
//   })
// }
// export function getSecondLotterylist(data) { // 获取彩种配置 ---- 二级级彩种
//   let par ={
//     parentLotteryId:data.parentLotteryId,
//     supplierInfoId: data.supplierInfoId,
//   }
//   return request({
//     baseURL: 'http://192.168.50.81/mock/', 
//     url: '/5cd3ee65a2f90b0e1825e4f6/cp4/cpconfig/cp4/supply/supplierLottery/findSupplierLottery',
//     method: 'post',
//     params:par
//   })
// }
// export function saveLotteryConfig(data) { // 保存彩种配置
//   let par ={
//     supplierInfoId: data.supplierInfoId,
//     parentLotteryId: data.parentLotteryId,
//     lotteryIdList: data.lotteryIdList,
//   }
//   return request({
//     baseURL: 'http://192.168.50.81/mock/', 
//     url: '/5cd3ee65a2f90b0e1825e4f6/cp4/cpconfig/cp4/supply/supplierLottery/mergeLottery',
//     method: 'post',
//     params:par
//   })
// }

// export function saveLotteryConfig(data) { // 保存彩种配置
//   let par ={
//     supplierInfoId: data.supplierInfoId,
//     parentLotteryId: data.parentLotteryId,
//     lotteryIdList: data.lotteryIdList,
//   }
//   return request({
//     baseURL: 'http://192.168.50.244:8080/', 
//     url: 'cp4/supply/supplierLottery/mergeLottery',
//     method: 'post',
//     params:par
//   })
// }


// export function getProviderdialogTableData(data) { // 数据供应商管理信息管理查看完整信息弹框接口
//   let par = {supplierInfoId:data.supplierInfoId}
//   return request({
//     baseURL: 'http://192.168.50.81/mock', 
//     url: '/5cd3ee65a2f90b0e1825e4f6/cp4/cpconfig/cp4/supply/supplierLottery/findListBySupplierId',
//     method: 'post',
//     params:data
//   })
// }
