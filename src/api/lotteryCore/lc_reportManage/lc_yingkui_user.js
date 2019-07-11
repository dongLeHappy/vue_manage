import request from '@/utils/request'
import qs from 'qs'

export function findOrderUser(param) { // 盈亏报表（用户）查询
     let data = {
          agentInfoIds: param.agentInfoIds, // 代理商老板id列表
          username: param.gameUsername || "", // 游戏用户名称（全模糊）
          parentLotteryId: param.parentLotteryId|| "", // 一级彩种名称
          lotteryId: param.lotteryId|| "", // 二级彩种名称
          playRuleId: param.playRuleId || "", // 玩法Id
          gameNo: param.gameNo|| "", // 开奖期号
          betTimeBegin: param.BetOnTime[0], // 下注  起始时间【三种时间必选一种】
          betTimeEnd: param.BetOnTime[1], // 下注  截止时间【三种时间必选一种】
          prizeTimeBegin:param.TheLotteryTime[0] || "", // 开奖  起始时间【三种时间必选一种】
          prizeTimeEnd: param.TheLotteryTime[1] || "", // 开奖  截止时间【三种时间必选一种】
          settleTimeBegin: param.ClearingTime[0] || "", // 结算 起始时间【三种时间必选一种】
          settleTimeEnd: param.ClearingTime[1] || "", // 结算 截止时间【三种时间必选一种】
          amountMin: param.betAmountBegin || "", // 起始  总投注额
          amountMax: param.betAmountEnd|| "", // 截止  总投注额
          effectiveAmountMin: param.effectiveAmountBegin || "", // 起始  有效投注金额
          effectiveAmountMax: param.effectiveAmountEnd || "", // 截止  有效投注金额
          winlossAmountMin: param.winLossBegin || "", // 起始  输赢金额
          winlossAmountMax: param.winLossEnd || "", // 截止  输赢金额
          betMin: param.totalBetNumBegin || "", // 起始  总注单数
          betMax: param.totalBetNumEnd || "", // 截止  总注单数
          sortType:param.sortType || "", // asc升序 desc降序
          sortField:param.sortField || "", // 排序字段
          page: param.page - 1, // 当前页
          size: param.size, // 当前每页条数
      }
      if(data.sortField == "winlowssAmount"){
        data.sortField = "winLossAmount"
      }
      if(data.sortField == "betAmount"){
        data.sortField = "amount"
      }
     
      // 代理商老板id列表为全部时
      if(data.agentInfoIds[0]==""){
        data.agentInfoIds = ""
      }
    return request({
        baseURL: '/api',
        url: '/cp4/order/orderPer/userReport',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function exportReportUser(param) { // 导出
    let data = {
        agentInfoIds: param.agentInfoIds, // 代理商老板id列表
        username: param.gameUsername || "", // 游戏用户名称（全模糊）
        parentLotteryId: param.parentLotteryId|| "", // 一级彩种名称
        lotteryId: param.lotteryId|| "", // 二级彩种名称
        playRuleId: param.playRuleId || "", // 玩法Id
        gameNo: param.gameNo|| "", // 开奖期号
        betTimeBegin: param.BetOnTime[0], // 下注  起始时间【三种时间必选一种】
        betTimeEnd: param.BetOnTime[1], // 下注  截止时间【三种时间必选一种】
        prizeTimeBegin:param.TheLotteryTime[0] || "", // 开奖  起始时间【三种时间必选一种】
        prizeTimeEnd: param.TheLotteryTime[1] || "", // 开奖  截止时间【三种时间必选一种】
        settleTimeBegin: param.ClearingTime[0] || "", // 结算 起始时间【三种时间必选一种】
        settleTimeEnd: param.ClearingTime[1] || "", // 结算 截止时间【三种时间必选一种】
        amountMin: param.betAmountBegin || "", // 起始  总投注额
        amountMax: param.betAmountEnd|| "", // 截止  总投注额
        effectiveAmountMin: param.effectiveAmountBegin || "", // 起始  有效投注金额
        effectiveAmountMax: param.effectiveAmountEnd || "", // 截止  有效投注金额
        winlossAmountMin: param.winLossBegin || "", // 起始  输赢金额
        winlossAmountMax: param.winLossEnd || "", // 截止  输赢金额
        betMin: param.totalBetNumBegin || "", // 起始  总注单数
        betMax: param.totalBetNumEnd || "", // 截止  总注单数
        sortType:param.sortType || "", // asc升序 desc降序
        sortField:param.sortField || "", // 排序字段
        page: param.page - 1, // 当前页
        size: param.size, // 当前每页条数
    }
    if(data.sortField == "winlowssAmount"){
      data.sortField = "winLossAmount"
    }
    if(data.sortField == "betAmount"){
      data.sortField = "amount"
    }
    // 代理商老板id列表为全部时
    if(data.agentInfoIds[0]==""){
      data.agentInfoIds = ""
    }
    return request({
        baseURL: '/api',
        url: '/cp4/order/orderPer/exportUserReport',
        method: 'post',
        data: qs.stringify(data)
    })
}