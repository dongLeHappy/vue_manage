import request from '@/utils/request'
import qs from 'qs'

export function findOrderAgent(param) { // 盈亏报表（代理商）查询
    let data = {
     agentInfoIds:param.agentInfoIds, // 代理商老板id列表
     parentLotteryId: param.parentLotteryId, // 一级彩种编码
     lotteryId: param.lotteryId, // 二级彩种编码
     playRuleId: param.playRuleId, // 二级玩法Id
     gameNo: param.gameNo, // 开奖期号
     amountMin:param.betAmountBegin, // 起始  总投注额
     amountMax: param.betAmountEnd, // 截止  总投注额
     effectiveAmountMin: param.effictiveBegin, // 起始  有效投注金额
     effectiveAmountMax: param.effictiveEnd, // 截止  有效投注金额
     winlossAmountMin: param.winLossBegin , // 起始  输赢金额
     winlossAmountMax: param.winLossEnd, // 截止  输赢金额
     betMin: param.totalBetBegin, // 起止  总注单数
     betMax:param.totalBetEnd, // 截止  总注单数
     betUserMin:param.totalBetUserBegin, // 起始  总下注人数
     betUserMax:param.totalBetUserEnd, // 截止  总下注人数 
      betTimeBegin:param.BetOnTime[0]||"", // 下注时间(开始)
      betTimeEnd:param.BetOnTime[1]||"", // 下注时间(结束)
      prizeTimeBegin:param.TheLotteryTime[0]||"", // 开奖时间(开始)
      prizeTimeEnd:param.TheLotteryTime[1]||"", // 开奖时间(结束)
      settleTimeBegin:param.ClearingTime[0]||"", // 结算时间(开始)
      settleTimeEnd:param.ClearingTime[1]||"", // 结算时间(结束)
       //   page:param.page,
    //   size:param.size,
      
    };
    if(data.agentInfoIds[0]==""){
        data.agentInfoIds = ""
    }
    return request({
        baseURL: '/api',
        url: '/cp4/order/orderPer/agentReport',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function exportReportAgent(param) { // 导出
    let data = {
        agentInfoIds:param.agentInfoIds, // 代理商老板id列表
        parentLotteryId: param.parentLotteryId, // 一级彩种编码
        lotteryId: param.lotteryId, // 二级彩种编码
        playRuleId: param.playRuleId, // 二级玩法Id
        gameNo: param.gameNo, // 开奖期号
        amountMin:param.betAmountBegin, // 起始  总投注额
        amountMax: param.betAmountEnd, // 截止  总投注额
        effectiveAmountMin: param.effictiveBegin, // 起始  有效投注金额
        effectiveAmountMax: param.effictiveEnd, // 截止  有效投注金额
        winlossAmountMin: param.winLossBegin , // 起始  输赢金额
        winlossAmountMax: param.winLossEnd, // 截止  输赢金额
        betMin: param.totalBetBegin, // 起止  总注单数
        betMax:param.totalBetEnd, // 截止  总注单数
        betUserMin:param.totalBetUserBegin, // 起始  总下注人数
        betUserMax:param.totalBetUserEnd, // 截止  总下注人数 
        //  betTimeBegin:param.BetOnTime[0]||"", // 下注时间(开始)
        //  betTimeEnd:param.BetOnTime[1]||"", // 下注时间(结束)
         prizeTimeBegin:param.TheLotteryTime[0]||"", // 开奖时间(开始)
         prizeTimeEnd:param.TheLotteryTime[1]||"", // 开奖时间(结束)
         settleTimeBegin:param.ClearingTime[0]||"", // 结算时间(开始)
         settleTimeEnd:param.ClearingTime[1]||"", // 结算时间(结束)
      };
      if(data.agentInfoIds[0]==""){
          data.agentInfoIds = ""
      }
    return request({
        baseURL: '/api',
        url: '/cp4/order/orderPer/exportAgentReport',
        method: 'post',
        data: qs.stringify(data)
    })
}