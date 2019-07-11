<template>
  <!-- 注单报表 --> 
  <div class="app-container table-fold noteTheSingle">
    <!-- 通用搜索框 -->
    <el-form v-show="showSearchBox">
        <ul class="heard-search">
           <li>
            <span class="rem_tit sets">代理商老板账号：</span>
            <span class="rem_con">
              <el-select v-model="searchEdition.agentInfoIds" multiple collapse-tags placeholder="全部" :disabled="disableControl" @change="handleChange">
                <el-option v-for="(item,index) in agentInfoIdsArr" :key="index" :label="item.name" :value="item.value"></el-option>
              </el-select>
            </span>
          </li>   
          <li>
            <span class="rem_tit">游戏用户名称：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.username" :disabled="disabledALL"  placeholder="游戏用户名称" maxlength="25"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">注单号码：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.betNo" :disabled="disabledALL"  placeholder="请输入注单号码 " maxlength="30"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">注单结算状态：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.settleStatus" placeholder="请选择" :disabled="disabledALL">
                  <el-option v-for="item in SettlementStatus" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
           
          <li>
            <span class="rem_tit sets">终端设备：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.device" placeholder="请选择" :disabled="disabledALL">
                  <el-option v-for="(item,index) in deviceArr" :key="index+item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">开奖期号：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.gameNo" :disabled="disabledALL" placeholder="请输入开奖期号" maxlength="15"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit sets">一级彩种名称：</span>
            <span class="rem_con">
              <el-select v-model="searchEdition.parentLotteryId" @change="changeKindAData" placeholder="请选择"  :disabled="disabledALL">
                <el-option v-for="(item,index) in kindAData" :key="index" :label="item.name" :value="item.value"></el-option>
              </el-select>
            </span>
          </li>        
          <li>
            <span class="rem_tit">二级彩种名称：</span>
            <span class="rem_con">
              <el-select v-model="searchEdition.lotteryId" @change="changeKindBData" :disabled="searchEdition.disabledSecond" placeholder="请选择">
                <el-option label="请选择" value=""></el-option>
                <el-option v-for="item in kindBData" :key="item.value" :label="item.name" :value="item.value"></el-option>
              </el-select>
            </span>
          </li>
          <li>
            <span class="rem_tit sets">一级玩法名称：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.menuPlayRuleId" @change="getRuleVal" :disabled="searchEdition.disableWanfa" placeholder="请选择">
                  <el-option label="请选择" value=""></el-option>
                  <el-option v-for="(item,index) in playRuleIdArr" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit sets">二级玩法名称：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.playRuleId" :disabled="searchEdition.disableWanfb" placeholder="请选择">
                  <el-option label="请选择" value=""></el-option>
                  <el-option v-for="(item,index) in playRuleIdArrb" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">投注金额：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.amountMin" :disabled="disabledALL" placeholder="起始金额"  maxlength="13" @blur="handleBlur('touzhu_start')"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.amountMax" :disabled="disabledALL" placeholder="终止金额"  maxlength="13" @blur="handleBlur('touzhu_end')"></el-input>
            </span>
          </li>      
          <li>
            <span class="rem_tit">有效投注金额：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.effectiveAmountMin" :disabled="disabledALL" placeholder="起始金额"  maxlength="13" @blur="handleBlur('youxiao_start')"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.effectiveAmountMax" :disabled="disabledALL" placeholder="终止金额"  maxlength="13" @blur="handleBlur('youxiao_end')"></el-input>
            </span>
          </li>   
          <li>
            <span class="rem_tit">输赢金额：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.winlossAmountMin" :disabled="disabledALL" placeholder="起始金额"  maxlength="13" @blur="handleBlur('shuying_start')"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.winlossAmountMax" :disabled="disabledALL" placeholder="终止金额"  maxlength="13" @blur="handleBlur('shuying_end')"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">结算金额：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.settleAmountMin" :disabled="disabledALL" placeholder="起始金额"  maxlength="13" @blur="handleBlur('paicai_start')"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.settleAmountMax" :disabled="disabledALL" placeholder="终止金额"  maxlength="13" @blur="handleBlur('paicai_end')"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">赔率：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.oddsMin" :disabled="disabledALL" placeholder="起始赔率"  maxlength ="9"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.oddsMax" :disabled="disabledALL" placeholder="终止赔率"  maxlength ="9"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">计算中奖时间（结算时间）：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="searchEdition.ClearingTime"
                :disabled="searchEdition.enableBillTime"
                type="datetimerange"
                :clearable="false"
                ref="searchEdition_ClearingTime"
                range-separator="至"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('计算中奖时间')"
              ></el-date-picker>
            </span>
          </li> 
          <li>
            <span class="rem_tit">下注时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="searchEdition.BetOnTime"
                :disabled="searchEdition.enableBetsTime"
                type="datetimerange"
                :clearable="false"
                ref="searchEdition_BetOnTime"
                range-separator="至"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('下注时间')"
              ></el-date-picker>
            </span>
          </li> 
          <li>
            <span class="rem_tit sets">平台交易流水号【下注扣款】：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.betTradeNo" :disabled="disabledALL"  placeholder="请输入平台交易流水号" maxlength="30"></el-input>
            </span>
          </li>   
          <li>
            <span class="rem_tit sets">平台交易流水号【注单结算】：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.settleTradeNo" :disabled="disabledALL"  placeholder="请输入平台交易流水号" maxlength="30"></el-input>
            </span>
          </li>     
        </ul>
      <!-- </div> -->
    </el-form>
    <div class="toggle-box">
      <el-form>
        <el-form-item class="operation-box">
          <el-button type="primary" :disabled="disabledALL" size="mini" @click="search">
            <svg-icon icon-class="chaxun" /> 
            查询</el-button>
          <el-button type="primary" :disabled="disabledALL" size="mini" @click="reset">
            <svg-icon icon-class="zhongzhi" />
            重置</el-button>
          <el-button type="primary" :disabled="disabledALL" size="mini" @click="exportTable" :loading="updataButtonLoading">
            <svg-icon icon-class="daochu" />
            导出</el-button>
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="editAndViewDetails(740)">
          <svg-icon icon-class="chakanxiangqing" />
          查看详情</el-button>

        </el-form-item>
        <el-button class="show-toggle" type="primary" @click="showToggle" :icon="showToggleIcon"></el-button>
      </el-form>
    </div>
    <!-- 数据表格 -->
    <div class="table-data">
      <el-table
          background
            ref="multipleTable_notethesingle"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            class="tableAutoToggle"
            highlight-current-row
            :class="!showSearchBox?'tableAuto175':''"
            :height="currentPageSize*25 + 50"
            border
            @current-change="handleCurrentChange"
            v-loading="exportType == 'table' ? loading : excelLoading"
            :element-loading-text="exportType == 'table' ? '' : '数据正在导出中.....'"   
          >       
            <el-table-column lable show-overflow-tooltip width="35">
              <template slot-scope="scope">
                <el-radio :label="scope.row.betNo" v-model="rowDataID" class="hidTextRadio">&nbsp;</el-radio>
              </template>
            </el-table-column>
            <el-table-column label="序号" type="index" align="center" width="50" show-overflow-tooltip>
              <template slot-scope="scope">
                <span>{{scope.$index+(page - 1) * size + 1}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="betNo"  align="center" label="注单号码" width="150" show-overflow-tooltip>
              <template slot-scope="scope">
                <span>{{scope.row.betNo ? scope.row.betNo : '-'}}</span>
              </template>
            </el-table-column>
             <el-table-column label="平台交易流水号【下注扣款】" property="betTradeNo" align="center" width="180" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.betTradeNo ? scope.row.betTradeNo : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="平台交易流水号【注单结算】" property="settleTradeNo" align="center" width="180" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.settleTradeNo ? scope.row.settleTradeNo : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="settleStatus" align="center" label="注单结算状态" width="120" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.settleStatus ? scope.row.settleStatus : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="gameNo" align="center" label="开奖期号"  width="120" show-overflow-tooltip>
              <template slot-scope="scope">
                <span>{{scope.row.gameNo ? scope.row.gameNo : '-'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="parentLotteryName" align="center" width="120" label="一级彩种名称" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.parentLotteryName ? scope.row.parentLotteryName : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="lotteryName" align="center" width="120" label="二级彩种名称" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.lotteryName ? scope.row.lotteryName : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="menuplayRuleValue" align="center"  width="120" label="一级玩法名称" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.menuplayRuleValue ? scope.row.menuplayRuleValue : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="betOnValue" align="center"  width="120" label="二级玩法名称" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.betOnValue ? scope.row.betOnValue : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="betValue" align="center" label="下注选项" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.betValue ? scope.row.betValue : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="settleOdds" align="center" label="赔率" show-overflow-tooltip> 
              <template slot-scope="scope">
                {{ scope.row.settleOdds ? scope.row.settleOdds : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="amount" align="center" label="投注额" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.amount ? scope.row.amount : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="effectiveAmount" align="center" label="有效投注额" width="120" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.effectiveAmount ? scope.row.effectiveAmount : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="winLossAmount" align="center" label="输赢金额" width="120" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.winLossAmount ? scope.row.winLossAmount : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="settleAmount" align="center" label="结算金额" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.settleAmount ? scope.row.settleAmount : '-' }}
              </template>
            </el-table-column> 
             <el-table-column prop="agentInfoId" align="center" label="代理商老板账号" :formatter="formatter_agentInfoId_not"  width="120" show-overflow-tooltip>           
            </el-table-column>
            <el-table-column prop="gameUsername" align="center" label="游戏用户名称" width="150" show-overflow-tooltip> 
              <template slot-scope="scope">
                {{ scope.row.gameUsername ? scope.row.gameUsername : '-' }}
              </template>
            </el-table-column>
           
            <el-table-column prop="device" align="center" label="终端设备" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.device ?scope.row.device: '-' }}
              </template>
            </el-table-column>
             <el-table-column prop="ip" align="center" label="下注IP" width="150" show-overflow-tooltip> 
              <template slot-scope="scope">
                {{ scope.row.ip ? scope.row.ip : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="betTime" align="center" label="下注时间" width="150" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.betTime ? scope.row.betTime : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="settleTime"  align="center" label="计算中奖时间（结算时间）" width="180" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.settleTime ? scope.row.settleTime : '-' }}
              </template>
            </el-table-column>
            <!-- <el-table-column prop="settleTime"  align="center" label="结算时间" width="150" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.settleTime ? scope.row.settleTime : '-' }}
              </template>
            </el-table-column> -->
          </el-table>
    </div>
    <!-- 分页 -->
    <div class="terraceUser_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="size"
        :total="allData_total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getList"
       >
      </el-pagination>
    </div>
    <!-- 查看详情 -->
    <el-dialog :visible.sync="detailDialog" v-if="detailDialog" :title="showViewDetails"  width="1100px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box notethesingle-checkDetail">
        <div class="detail-head">
          <p>注单结算状态：{{rowDatas.settleStatus?rowDatas.settleStatus:"-"}}</p>
          <p>开奖期号：{{rowDatas.gameNo ? rowDatas.gameNo:"-"}}</p>
          <p>一级彩种名称：{{rowDatas.parentLotteryName?rowDatas.parentLotteryName:"-"}}</p>
          <p>二级彩种名称：{{rowDatas.lotteryName?rowDatas.lotteryName:"-"}}</p>
          <p>一级玩法名称：{{rowDatas.menuplayRuleValue?rowDatas.menuplayRuleValue:"-"}}</p>
          <p>二级玩法名称：{{rowDatas.betOnValue?rowDatas.betOnValue:"-"}}</p>
          <p>下注选项：{{rowDatas.betValue?rowDatas.betValue:"-"}}</p>
          <p>赔率：{{rowDatas.settleOdds?rowDatas.settleOdds:"-"}}</p>
          <p>投注额：{{rowDatas.amount?rowDatas.amount:"-"}}</p>
          <p>有效投注额：{{rowDatas.effectiveAmount?rowDatas.effectiveAmount:"-"}}</p>
          <p>输赢金额：{{rowDatas.winLossAmount?rowDatas.winLossAmount:"-"}}</p>
          <p>结算金额：{{rowDatas.settleAmount?rowDatas.settleAmount:"-"}}</p>
          <p>代理商老板账号：{{(rowDatas.agentInfoId_Name?rowDatas.agentInfoId_Name:"-")}}</p>
          <p>游戏用户名称：{{rowDatas.gameUsername?rowDatas.gameUsername:"-"}}</p>
          <p>终端设备：{{rowDatas.device?rowDatas.device:"-"}}</p>
          <p>下注IP：{{rowDatas.ip?rowDatas.ip:"-"}}</p>
          <p>下注时间：{{rowDatas.betTime?rowDatas.betTime:"-"}}</p>
          <p style="width: 30%;">计算中奖时间（结算时间）：{{rowDatas.settleTime?rowDatas.settleTime:"-"}}</p>
        </div>
        <div class="bettingStatus_sum">
           <p class="dialog-head">
            <el-radio-group v-model="radioViewFull" @change="getradioViewFull" :disabled="dialogLoading">
              <el-radio-button  label="1">当前注单所关联的<br/>平台交易流水号【下注扣款】：{{this.rowDatas.betTradeNo}}</el-radio-button>
              <el-radio-button   label="2">当前注单所关联的<br/>平台交易流水号【注单结算】：{{this.rowDatas.settleTradeNo?this.rowDatas.settleTradeNo:"-"}}</el-radio-button>
              <!-- <el-radio-button v-if="this.rowDatas.settleTradeNo"  label="2">当前注单所关联的<br/>平台交易流水号【注单结算】：{{this.rowDatas.settleTradeNo}}</el-radio-button>
              <el-radio-button v-else  label="2">平台交易流水号【注单结算】：-</el-radio-button> -->
            </el-radio-group>
            <span class="dialog-head-span" >注：以下展示当前平台交易流水号关联的所有注单信息</span>
          </p>
           <!-- 弹框表格 -->
        <div class="data-dialog-table">
          <el-table
            :header-cell-style="tableHeaderColor"
            :cell-style="rowcellClass"
            :key="22"
            :height="307"
            :data="allDataInfo"
            highlight-current-row
            style="width: 100%;"
            border
            class = "tableAuto216"
            v-loading="dialogLoading"
          >
            <el-table-column label="序号" type="index" align="center" width="60" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{scope.$index + 1}} </span>
              </template>
            </el-table-column>
            <el-table-column label="注单号码" property="betNo" align="center" width="110" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.betNo ? scope.row.betNo : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="平台交易流水号【下注扣款】" property="betTradeNo" align="center" width="180" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.betTradeNo ? scope.row.betTradeNo : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="平台交易流水号【注单结算】" property="settleTradeNo" align="center" width="180" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.settleTradeNo ? scope.row.settleTradeNo : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="注单结算状态" property="settleStatus" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.settleStatus ? scope.row.settleStatus : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="开奖期号" property="gameNo" align="center" show-overflow-tooltip>             
            </el-table-column>
             <el-table-column label="一级彩种名称" property="parentLotteryName" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.parentLotteryName ? scope.row.parentLotteryName : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="二级彩种名称" property="lotteryName" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.lotteryName ? scope.row.lotteryName : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="一级玩法名称" property="menuplayRuleValue" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.menuplayRuleValue ? scope.row.menuplayRuleValue : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="二级玩法名称" property="betOnValue" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                   <span> {{ scope.row.betOnValue ? scope.row.betOnValue : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="下注选项" property="betValue" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.betValue ? scope.row.betValue : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="赔率" property="settleOdds" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                   <span> {{ scope.row.settleOdds ? scope.row.settleOdds : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="投注额" property="amount" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                   <span> {{ scope.row.amount ? scope.row.amount : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="有效投注额" property="effectiveAmount" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.effectiveAmount ? scope.row.effectiveAmount : '-' }}</span>
              </template>
            </el-table-column>

              <el-table-column label="输赢金额" property="winLossAmount" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                   <span> {{ scope.row.winLossAmount ? scope.row.winLossAmount : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="结算金额" property="settleAmount" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.settleAmount ? scope.row.settleAmount : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="代理商老板账号" property="agentInfoId" :formatter="formatter_agentInfoId_not" align="center" width="140" show-overflow-tooltip>

            </el-table-column>
             <el-table-column label="游戏用户名称" property="gameUsername" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                 <span> {{ scope.row.gameUsername ? scope.row.gameUsername : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="终端设备" property="device" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.device ? scope.row.device : '-' }}</span>
              </template>
            </el-table-column>
              <el-table-column label="下注IP" property="ip" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.ip ? scope.row.ip : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="下注时间" property="betTime" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                 <span> {{ scope.row.betTime ? scope.row.betTime : '-' }}</span>
              </template>
            </el-table-column>
             <el-table-column label="计算中奖时间（结算时间）" property="settleTime" align="center" width="170" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.settleTime ? scope.row.settleTime : '-' }}</span>
              </template>
            </el-table-column>        
          </el-table>
        </div>
        <!-- 分页 -->
        <!-- <div class="admin_pagination">
          <el-pagination 
            :page-sizes="[10, 20, 50, 100]"
            :current-page.sync="viewDetails.page"
            :page-size="viewDetails.size"
            :total="allDataCount"
            background
            layout="total, prev, pager, next" 
            @current-change="getDialogTableList"
          >
          </el-pagination>
        </div> -->
      
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" @click="confirmEdit" size="mini">确 定</el-button> -->
        <el-button @click="detailDialog = false" size="mini">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import {serverTime } from '@/api/login'
import { agentInfoDropdownList,findByCode,lotteryDropdownList,findByParentLotteryId,findByMenuPlayRuleId } from '@/api/select'
import { findOrderPage,exportExcel,findDetail } from '@/api/lotteryCore/lc_reportManage/lc_zhudan';
import { validUserNameLen_zhudan_Number,validNinedata_odds,validNinedata_twelve,validNinedata_thirteen_negative,ToEmpty } from '@/utils/validate'
import Cookies from 'js-cookie'
// 导出接口
export default {
  data() {
    return {  
      exportType: 'table' , // 默认为表格导出
      excelLoading: false, // 导出Loading
      updataButtonLoading:false, // 下载按钮Loading
      disableControl:false, // 是否可编辑 
      disabledALL:false, // 查询接口时，loading 是否可编辑 
      loading: false, // Loading 加载
      agentInfoIdsArr: [], // 代理商老板id
      deviceArr: [{ value: "",name: "全部"}], // 终端设备下拉框
      drawALotteryStatu: [{ value: "",name: "全部"}], // 开奖状态下拉框
      SettlementStatus: [{ value: "",name: "全部"},{value: "0",name: "未结算"},{value: "3",name: "已结算"}], // 结算状态
      kindAData: [{ value: "",name: "请选择"}], // 一级彩种下拉选择数据
      showSearchBox: true, // 控制查询条件容器显示-隐藏
      showToggleIcon: 'el-icon-caret-top', 
      ServerTimes:"", // 服务器时间
      dialogMt:this.dialogMt, // 弹出框上边距
      rowDatas:"", // 当前行的所有数据
      rowDataID:"", // 当前行的ID
      detailDialog: false, // 查看详情弹框
      dialogLoading: false, // 查看详情弹框数据loading
      radioViewFull:"1", //  查看详情弹框的交易流水号【下注扣款】
      viewDetails:{ // 查看详情弹框数据     
        betNo: '', // 注单号码 
        betTradeNo: '', // 平台交易流水号【下注扣款】
        settleTradeNo: '', // 平台交易流水号【注单结算】
        agentInfoId: '', // 代理商老板账号
      },
      allDataInfo:[], // 查看详情中表格的数据
      showViewDetails:""
    };
  },
  computed:{
    ...mapState({
      tableData: state =>state.lc_zhudan.allData,
      allData_total: state => state.lc_zhudan.allData_total,
      currentPageSize:state => state.lc_zhudan.currentPageSize,
      playRuleIdArr:state => state.lc_zhudan.playRuleIdArr, // 一级玩法下拉数据
      playRuleIdArrb:state => state.lc_zhudan.playRuleIdArrb, // 二级玩法下拉数据
      kindBData:state => state.lc_zhudan.kindBData,
    }),
    size: {
      get(){
        return this.$store.state.lc_zhudan.size;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.lc_zhudan.page;
      },
      set(item){
        return  item;
      }
    },
     searchEdition: { // 查询条件
      get(){
        return this.$store.state.lc_zhudan.searchEdition;
      },
      set(item){
        return  item;
      }
    },
  },
  methods:{
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: rgb(247, 251, 254); padding: 4px 0;text-align:center;";
    }, 
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
    // getDialogTableList(val) { // 表格中的分页请求
    //   this.viewDetails.page = val;
    //   this.getOrderFindDetail(this.viewDetails);  
    // },
    getradioViewFull(val) { // 选中 条件按钮 查询列表数据
    this.dialogLoading = true;
      this.allDataInfo = [];
      if(val == "1"){ // 平台交易流水号【下注扣款】
        this.viewDetails={ // 查看详情弹框数据     
          // betNo: this.rowDatas.betNo, // 注单号码 
          betTradeNo:this.rowDatas.betTradeNo, // 平台交易流水号【下注扣款】
          agentInfoId:this.rowDatas.agentInfoId, // 代理商老板账号
          radioViewFull:"1" 
        }
         this.getOrderFindDetail(this.viewDetails);
      }else if(val == "2"){ // 平台交易流水号【注单结算】
         this.viewDetails={ // 查看详情弹框数据     
          // betNo: this.rowDatas.betNo, // 注单号码 
          settleTradeNo:this.rowDatas.settleTradeNo, // 平台交易流水号【注单结算】
          agentInfoId:this.rowDatas.agentInfoId, // 代理商老板账号
          radioViewFull:"2"
        } 
         if(this.rowDatas.settleTradeNo){
         this.getOrderFindDetail(this.viewDetails);
        }else{
          this.allDataInfo = [];
          this.dialogLoading = false;
        }
      }
       
    },
    handleBlur(type) {

    },
    search() {
      this.getList()
    },
    showToggle() { // 折叠查询条件容器
      this.showSearchBox = !this.showSearchBox;
      if(this.showSearchBox) {
        this.showToggleIcon = "el-icon-caret-top";
      }else {
        this.showToggleIcon = "el-icon-caret-bottom";
      }
    },
    changeKindAData(val) { // 选中一级彩种名称 请求二级彩种数据
      this.$store.state.lc_zhudan.kindBData  =[];
      this.$store.state.lc_zhudan.searchEdition.lotteryId = ''; // 清空二级彩种名称数据
      this.$store.state.lc_zhudan.searchEdition.menuPlayRuleId = ''; // 一级玩法Id
      this.$store.state.lc_zhudan.searchEdition.playRuleId = ''; // 二级玩法Id
      this.$store.state.lc_zhudan.searchEdition.disableWanfa = true; // 默认一级玩法下拉不可操作
      this.$store.state.lc_zhudan.searchEdition.disableWanfb = true; // 默认二级玩法下拉不可操作
      if(val == null || val == undefined || val == "" || val == 0){
        this.$store.state.lc_zhudan.searchEdition.disabledSecond = true;// 二级彩种名称是否可输入
      }else{
        // 二级彩种接口调用数据
        lotteryDropdownList({parentId: val}).then(res => { // 初始化一级彩种列表    
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.$store.state.lc_zhudan.kindBData.push(element);
              });
              this.$store.state.lc_zhudan.searchEdition.disabledSecond = false; // 二级彩种名称是否可输入
            }else {
              this.$message.error(resData.respMsg)
            }
        })
      } 
    },
    changeKindBData(val) {
      this.$store.state.lc_zhudan.playRuleIdArr  =[];
      this.$store.state.lc_zhudan.searchEdition.menuPlayRuleId = ''; // 一级玩法Id
      this.$store.state.lc_zhudan.searchEdition.playRuleId = ''; // 二级玩法Id
      this.$store.state.lc_zhudan.searchEdition.disableWanfb = true; // 默认二级玩法下拉不可操作
      if(val == null || val == undefined || val == "" || val == 0){
         this.$store.state.lc_zhudan.searchEdition.disableWanfa = true; // 默认一级玩法下拉不可操作
      }else{
        // 一级玩法
        findByParentLotteryId({parentLotteryId:this.$store.state.lc_zhudan.searchEdition.parentLotteryId}).then(res => { // 初始化一级玩法列表    
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.$store.state.lc_zhudan.playRuleIdArr.push(element);
              });
               this.$store.state.lc_zhudan.searchEdition.disableWanfa = false; // 一级彩种名称是否可输入
            }else {
              this.$message.error(resData.respMsg)
            }
        })       
      } 
    },
    getRuleVal(val){ // 获取一级玩法
      this.$store.state.lc_zhudan.playRuleIdArrb  = [];
      this.$store.state.lc_zhudan.searchEdition.playRuleId = ''; // 二级玩法Id
      if(val == null || val == undefined || val == "" || val == 0){
         this.$store.state.lc_zhudan.searchEdition.disableWanfb = true; // 默认一级玩法下拉不可操作
      }else{
        // 一级玩法
        findByMenuPlayRuleId({menuPlayRuleId:val}).then(res => { // 初始化一级玩法列表    
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.$store.state.lc_zhudan.playRuleIdArrb.push(element);
              });
               this.$store.state.lc_zhudan.searchEdition.disableWanfb = false; // 一级彩种名称是否可输入
            }else {
              this.$message.error(resData.respMsg)
            }
        })       
      } 
    },
    getList(val) { // 获取表格数据
      this.rowDatas = "";   
      this.rowDataID ="";
      if(!val) {
        val = 1;
      }
      this.$store.dispatch("getZhuDanPage",Number(val))   
      let data = this.$store.state.lc_zhudan.searchEdition;   
      if(data.BetOnTime.length == 0 && data.ClearingTime.length == 0 && data.ClearingTime.length == 0){
         // 下注时间默认显示7天
          let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
          let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
          let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
          this.$store.state.lc_zhudan.searchEdition.BetOnTime = [state,edate];  
          this.$store.state.lc_zhudan.searchEdition.enableBillTime = true; // 禁用结算时间   
      }
      this.$store.state.lc_zhudan.searchEdition.page = this.page - 1; // 当前页
      this.$store.state.lc_zhudan.searchEdition.size = this.size; // 当前每页条数
    
      this.$store.state.lc_zhudan.searchEdition.username = ToEmpty(data.username); // 游戏用户名称 去空
      this.$store.state.lc_zhudan.searchEdition.betNo = ToEmpty(data.betNo); // 注单号码 去空
      this.$store.state.lc_zhudan.searchEdition.gameNo = ToEmpty(data.gameNo);// 开奖期号 去空
      this.$store.state.lc_zhudan.searchEdition.betTradeNo = ToEmpty(data.betTradeNo); // 平台交易流水号【下注扣款】 去空
      this.$store.state.lc_zhudan.searchEdition.settleTradeNo = ToEmpty(data.settleTradeNo);//平台交易流水号【注单结算】 去空

      if(!validNinedata_odds(data.oddsMin)||!validNinedata_odds(data.oddsMax)){ // 起始赔率与截止赔率 校验长短
            this.$message.warning('赔率仅支持输入数字，数字区间为0-100000.00');
            return
      }
      if(data.oddsMin&&data.oddsMax){
        if(Number(data.oddsMin)>Number(data.oddsMax)){ // 起始赔率与截止赔率 校验大小
          this.$message.warning('赔率起始赔率小于等于终止赔率');
          return
        } 
      }      
      if(!validNinedata_twelve(data.amountMin)||!validNinedata_twelve(data.amountMax)){ // 起始投注金额与截止投注金额 校验长短
        this.$message.warning('投注金额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
      if(data.amountMin&&data.amountMax){
        if(Number(data.amountMin)>Number(data.amountMax)){ // 起始投注金额与截止投注金额  校验大小
          this.$message.warning('投注金额起始金额小于等于终止金额');
          return
        }
      }  
      if(!validNinedata_twelve(data.settleAmountMin)||!validNinedata_twelve(data.settleAmountMax)){ // 起始结算金额与截止结算金额 校验长短
        this.$message.warning('结算金额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
       if(data.settleAmountMin&&data.settleAmountMax){
        if(Number(data.settleAmountMin)>Number(data.settleAmountMax)){ // 起始结算金额与截止结算金额  校验大小
          this.$message.warning('结算金额起始金额小于等于终止金额');
          return
        }
       }
      if(!validNinedata_twelve(data.effectiveAmountMin)||!validNinedata_twelve(data.effectiveAmountMax)){ // 起始有效投注金额与截止有效投注金额 校验长短
        this.$message.warning('有效投注金额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
      if(data.effectiveAmountMin&&data.effectiveAmountMax){
        if(Number(data.effectiveAmountMin)>Number(data.effectiveAmountMax)){ // 起始有效投注金额与截止有效投注金额  校验大小
          this.$message.warning('有效投注金额起始金额小于等于终止金额');
          return
        }
      }  
      if(!validNinedata_thirteen_negative(data.winlossAmountMin)||!validNinedata_thirteen_negative(data.winlossAmountMax)){ // 起始输赢金额与截止输赢金额 校验长短
        this.$message.warning('输赢金额仅支持输入数字，金额的区间 是-100000000.00  - 100000000.00 （单位是元）');
        return
      }
      if(data.winlossAmountMin&&data.winlossAmountMax){
        if(Number(data.winlossAmountMin)>Number(data.winlossAmountMax)){ // 起始输赢金额与截止输赢金额  校验大小
          this.$message.warning('输赢金额起始金额小于等于终止金额');
          return
        }
      }  
      // 下注起始时间   区间不得超过三个月
      if(data.BetOnTime[0]&&data.BetOnTime[1]){
        let newSdate =  new Date(data.BetOnTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(data.BetOnTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      // 计算中奖时间（结算时间）   区间不得超过三个月
      if(data.ClearingTime[0]&&data.ClearingTime[1]){
        let newSdate =  new Date(data.ClearingTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(data.ClearingTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      this.loading = true; // 请求接口时loading启用
      this.disabledALL=true; // 控制全局不可编辑
      this.disableControl = true; // 代理商老板
      let param = this.$store.state.lc_zhudan.searchEdition;
      //  查询接口
      findOrderPage(param).then(resdata => {
          let res = resdata.data;
          if(res.success == 1) {
            this.$store.dispatch("getZhuDanInfo",res.content)
              let currentPageSize = 2;
              if(res.content.content.length > 0) {
                currentPageSize = res.content.content.length;
              }else {
                currentPageSize = 2;
              }        
              this.$store.dispatch('getZhuDanTableHeight', currentPageSize)  
              this.$refs.multipleTable_notethesingle.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行
          }else {
            this.$message.error(res.respMsg)
          }
          this.loading = false; // 接口返回数据时，loading禁用                    
          this.disabledALL=false; // 控制全局不可编辑 searchEdition.parentLotteryId
          if(!this.$store.state.lc_zhudan.searchEdition.parentLotteryId) { // 二级彩种名称是否可编辑
              this.$store.state.lc_zhudan.searchEdition.disabledSecond = true;
              this.$store.state.lc_zhudan.searchEdition.disableWanfa = true;
          }else{
              this.$store.state.lc_zhudan.searchEdition.disabledSecond = false;
          }
          if(!this.$store.state.lc_zhudan.searchEdition.lotteryId) { // 二级彩种名称是否可编辑
              this.$store.state.lc_zhudan.searchEdition.disableWanfa = true;
          }else{
              this.$store.state.lc_zhudan.searchEdition.disableWanfa = false;
          }
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
          if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑          
            this.disableControl = true;
          }else{
            this.disableControl = false;
          }
      }) 

    },
    exportTable(){  // 导出   
      let data = this.$store.state.lc_zhudan.searchEdition;   
      if(data.BetOnTime.length == 0 && data.ClearingTime.length == 0 && data.ClearingTime.length == 0){
         // 下注时间默认显示7天
          let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
          let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
          let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
          this.$store.state.lc_zhudan.searchEdition.BetOnTime = [state,edate];  
          this.$store.state.lc_zhudan.searchEdition.enableBillTime = true; // 禁用结算时间   
      }
      this.$store.state.lc_zhudan.searchEdition.page = this.page - 1; // 当前页
      this.$store.state.lc_zhudan.searchEdition.size = this.size; // 当前每页条数
    
      this.$store.state.lc_zhudan.searchEdition.username = ToEmpty(data.username); // 游戏用户名称 去空
      this.$store.state.lc_zhudan.searchEdition.betNo = ToEmpty(data.betNo); // 注单号码 去空
      this.$store.state.lc_zhudan.searchEdition.gameNo = ToEmpty(data.gameNo);// 开奖期号 去空
      this.$store.state.lc_zhudan.searchEdition.betTradeNo = ToEmpty(data.betTradeNo); // 平台交易流水号【下注扣款】 去空
      this.$store.state.lc_zhudan.searchEdition.settleTradeNo = ToEmpty(data.settleTradeNo);//平台交易流水号【注单结算】 去空

      if(!validNinedata_odds(data.oddsMin)||!validNinedata_odds(data.oddsMax)){ // 起始赔率与截止赔率 校验长短
            this.$message.warning('赔率仅支持输入数字，数字区间为0-100000.00');
            return
      }
      if(data.oddsMin&&data.oddsMax){
        if(Number(data.oddsMin)>Number(data.oddsMax)){ // 起始赔率与截止赔率 校验大小
          this.$message.warning('赔率起始赔率小于等于终止赔率');
          return
        } 
      }      
      if(!validNinedata_twelve(data.amountMin)||!validNinedata_twelve(data.amountMax)){ // 起始投注金额与截止投注金额 校验长短
        this.$message.warning('投注金额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
      if(data.amountMin&&data.amountMax){
        if(Number(data.amountMin)>Number(data.amountMax)){ // 起始投注金额与截止投注金额  校验大小
          this.$message.warning('投注金额起始金额小于等于终止金额');
          return
        }
      }  
      if(!validNinedata_twelve(data.settleAmountMin)||!validNinedata_twelve(data.settleAmountMax)){ // 起始结算金额与截止结算金额 校验长短
        this.$message.warning('结算金额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
       if(data.settleAmountMin&&data.settleAmountMax){
        if(Number(data.settleAmountMin)>Number(data.settleAmountMax)){ // 起始结算金额与截止结算金额  校验大小
          this.$message.warning('结算金额起始金额小于等于终止金额');
          return
        }
       }
      if(!validNinedata_twelve(data.effectiveAmountMin)||!validNinedata_twelve(data.effectiveAmountMax)){ // 起始有效投注金额与截止有效投注金额 校验长短
        this.$message.warning('有效投注金额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
      if(data.effectiveAmountMin&&data.effectiveAmountMax){
        if(Number(data.effectiveAmountMin)>Number(data.effectiveAmountMax)){ // 起始有效投注金额与截止有效投注金额  校验大小
          this.$message.warning('有效投注金额起始金额小于等于终止金额');
          return
        }
      }  
      if(!validNinedata_thirteen_negative(data.winlossAmountMin)||!validNinedata_thirteen_negative(data.winlossAmountMax)){ // 起始输赢金额与截止输赢金额 校验长短
        this.$message.warning('输赢金额仅支持输入数字，金额的区间 是-100000000.00  - 100000000.00 （单位是元）');
        return
      }
      if(data.winlossAmountMin&&data.winlossAmountMax){
        if(Number(data.winlossAmountMin)>Number(data.winlossAmountMax)){ // 起始输赢金额与截止输赢金额  校验大小
          this.$message.warning('输赢金额起始金额小于等于终止金额');
          return
        }
      }  
      // 下注起始时间   区间不得超过三个月
      if(data.BetOnTime[0]&&data.BetOnTime[1]){
        let newSdate =  new Date(data.BetOnTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(data.BetOnTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      // 计算中奖时间（结算时间）   区间不得超过三个月
      if(data.ClearingTime[0]&&data.ClearingTime[1]){
        let newSdate =  new Date(data.ClearingTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(data.ClearingTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      this.exportType = 'excel'
      this.excelLoading = true
      exportExcel(data).then(res => {      
        let resData = res.data
        if(resData.success == 1) {
          this.$message.success("导出成功（数据为查询条件最新数据）")
          window.location.href = '/api/cp4/common/file/taskDownload?model=ORDER&taskId='+resData.content;
        }else {
          this.$message.error(resData.respMsg)
        }
         this.excelLoading = false;
         this.exportType = 'table'
        // this.updataButtonLoading = false;
      })
    },
    reset(){  // 重置
      this.$store.state.lc_zhudan.searchEdition = {
         agentInfoIds: [""], // 代理商老板id列表
            username: '', // 游戏用户名称
            betNo: '', // 注单号码
            settleStatus: '', //注单结算状态
            device: '', // 终端设备
            gameNo: '', // 开奖期号
            parentLotteryId: '', // 一级彩种名称 
            lotteryId: '', // 二级彩种名称
            menuPlayRuleId: '', // 一级玩法Id
            playRuleId: '', // 二级玩法Id
            amountMin: '', // 起始 投注金额
            amountMax: '', // 截止 投注金额
            effectiveAmountMin: '', // 起始 有效投注金额
            effectiveAmountMax: '', // 截止 有效投注金额 
            winlossAmountMin: '', // 起始 输赢金额
            winlossAmountMax: '', // 截止 输赢金额
            settleAmountMin: '', // 起始 结算金额(下限)
            settleAmountMax: '', // 截止 结算金额(上限)
            oddsMin: '', // 起始 赔率
            oddsMax: '', // 截止 赔率
            ClearingTime: [], //计算中奖时间（结算时间）
            BetOnTime: [], //下注时间 
            betTradeNo:'', // 平台交易流水号【下注扣款】
            settleTradeNo:'', //平台交易流水号【注单结算】
            disabledSecond: true, // 默认二级彩种下拉不可操作
            disableWanfa: true, // 默认二级玩法下拉不可操作
            disableWanfb : true, // 默认二级玩法下拉不可操作
            enableBetsTime: false, // 禁用 下注时间
            enableBillTime: true, // 禁用 计算中奖时间（结算时间）
      }
      let userType = Cookies.get('userType');
      if(userType == '3'||userType == '4'){
        this.$store.state.lc_zhudan.searchEdition.agentInfoIds[0] = this.agentInfoIdsArr[0].value;
      }
      // 下注时间默认显示7天
      let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
      let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
      let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
      this.$store.state.lc_zhudan.searchEdition.BetOnTime = [state,edate];  

    },
    handleSizeChange(val){
      this.$store.dispatch('getZhuDanPageSize', val);
      this.getList();
    },
    getDate(type) { // 获取时间控件方法
      let searchEdition =this.$store.state.lc_zhudan.searchEdition;
      if(type == '下注时间') {
         if(searchEdition.BetOnTime != null) {
            this.$store.state.lc_zhudan.searchEdition.BetOnTime[0] = this.dateForm(searchEdition.BetOnTime[0],1);
            this.$store.state.lc_zhudan.searchEdition.BetOnTime[1] = this.dateForm(searchEdition.BetOnTime[1],1);        
            if(this.$store.state.lc_zhudan.searchEdition.BetOnTime[0] == this.$store.state.lc_zhudan.searchEdition.BetOnTime[1]) {
              this.$store.state.lc_zhudan.searchEdition.BetOnTime[1] = this.$store.state.lc_zhudan.searchEdition.BetOnTime[1].split(' ')[0] + ' 23:59:59'
            }
            if(this.$store.state.lc_zhudan.searchEdition.BetOnTime[1].split(' ')[1] == '00:00:00') {
              this.$store.state.lc_zhudan.searchEdition.BetOnTime[1] = this.$store.state.lc_zhudan.searchEdition.BetOnTime[1].split(' ')[0] + ' 23:59:59'
            } 
            this.$store.state.lc_zhudan.searchEdition.enableBillTime = true; // 禁用计算中奖时间（结算时间）     
          }else{
            this.$store.state.lc_zhudan.searchEdition.BetOnTime = [];   // 下注时间
            this.$store.state.lc_zhudan.searchEdition.ClearingTime=[]; // 计算中奖时间（结算时间）
            this.$store.state.lc_zhudan.searchEdition.enableBetsTime = false; // 启用下注时间
            this.$store.state.lc_zhudan.searchEdition.enableBillTime = false; // 启用计算中奖时间（结算时间）
         }
      }else if(type == '计算中奖时间') {
        if(searchEdition.ClearingTime != null) {
          this.$store.state.lc_zhudan.searchEdition.ClearingTime[0] = this.dateForm(searchEdition.ClearingTime[0],1);
          this.$store.state.lc_zhudan.searchEdition.ClearingTime[1] = this.dateForm(searchEdition.ClearingTime[1],1);        
          if(this.$store.state.lc_zhudan.searchEdition.ClearingTime[0] == this.$store.state.lc_zhudan.searchEdition.ClearingTime[1]) {
            this.$store.state.lc_zhudan.searchEdition.ClearingTime[1] = this.$store.state.lc_zhudan.searchEdition.ClearingTime[1].split(' ')[0] + ' 23:59:59'
          }
          if(this.$store.state.lc_zhudan.searchEdition.ClearingTime[1].split(' ')[1] == '00:00:00') {
            this.$store.state.lc_zhudan.searchEdition.ClearingTime[1] = this.$store.state.lc_zhudan.searchEdition.ClearingTime[1].split(' ')[0] + ' 23:59:59'
          }
          this.$store.state.lc_zhudan.searchEdition.enableBetsTime = true; // 禁用下注时间         
        }else{
          this.$store.state.lc_zhudan.searchEdition.ClearingTime=[];// 计算中奖时间（结算时间）
          this.$store.state.lc_zhudan.searchEdition.BetOnTime = [];  // 下注时间
          this.$store.state.lc_zhudan.searchEdition.enableBetsTime = false; // 启用下注时间
          this.$store.state.lc_zhudan.searchEdition.enableBillTime = false; // 启用结算时间
        }
      }
    },
    handleChange(val) { // 切换代理商多选   
        let i = val.length; 
        if(val[i-1] == ""&&val.length == 1){
          this.$store.state.lc_zhudan.searchEdition.agentInfoIds = [""]
        }
        if(val[i-1] == ""){
          this.$store.state.lc_zhudan.searchEdition.agentInfoIds = [""]
        }
        const index = val.indexOf("")
        if(index != -1){
          val.splice(index, 1) // 排除全选选项
        }        
    },
    getServerTime(){
      serverTime().then(res => {
          let resData = res.data
          let tempStr = ""
          if(resData.success == 1) {
            tempStr = resData.content.serverTime.split(' ')[0] + ' ' + resData.content.serverTime.split(' ')[1]
            tempStr = tempStr.substring(0,19);
            tempStr = tempStr.replace(/-/g,'/');
            let cd = new Date(tempStr).getTime();
            this.ServerTimes = new Date(cd);
            // 下注时间默认显示7天
            let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
            let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
            let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
            
            if(this.$store.state.lc_zhudan.searchEdition.BetOnTime.length == 0 &&this.$store.state.lc_zhudan.searchEdition.ClearingTime.length == 0){
                this.$store.state.lc_zhudan.searchEdition.BetOnTime = [state,edate]; 
                this.$store.state.lc_zhudan.searchEdition.enableBillTime = true;
            }
          }else {
            this.$message.error(resData.respMsg)
          }
      })
    },
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    handleCurrentChange(val) {
       if(val != null){
        this.rowDatas = val;   
        this.rowDataID = val.betNo
       }
    },
    editAndViewDetails(h){ // 查看详情
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      if(!this.rowDataID){
        this.$message.warning('请选择一条数据'); 
        return false;
      }
      this.allDataInfo = [];
      this.rowDatas.agentInfoId_Name = this.formatter_agentInfoId_not(this.rowDatas);
      this.radioViewFull = "1" // 默认交易流水号【下注扣款】
      this.viewDetails={ // 查看详情弹框数据     
          // betNo: this.rowDatas.betNo, // 注单号码 
          betTradeNo:this.rowDatas.betTradeNo, // 平台交易流水号【下注扣款】
          agentInfoId:this.rowDatas.agentInfoId, // 代理商老板账号
          radioViewFull:"1"     
        }    
      this.showViewDetails = "查看详情 （ 注单号码："+this.rowDatas.betNo+" ）",    
      this.detailDialog = true; // 查看详情弹框
      this.dialogLoading = true; // 查看详情弹框数据loading
      this.getOrderFindDetail(this.viewDetails);
    },
    getOrderFindDetail(val){
        findDetail(val).then(res => { // 一级彩种下拉
        let resData = res.data
        if(resData.success == 1) {
          // this.allDataCount = resData.content.totalElements;
          this.allDataInfo = resData.content;
        }else {
          this.$message.error(resData.respMsg)
        }
         this.dialogLoading = false; // 查看详情弹框数据loading
      })
    },
    formatter_agentInfoId_not(val){// 代理商老板id 转换为名字
      let itme = "-";
     
      this.agentInfoIdsArr.forEach(element => {
        if(Number(val.agentInfoId) == element.value){
          itme =  element.name;
        }
      });
      return itme
    },
  },
  created() {
    if(this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)){
    // 更新已关闭的菜单 数组状态
      let newalreadyClose = [] // 定义一个空数组存 过滤左侧点击的数据
      this.$store.getters.alreadyClose.forEach(value => {
        if(value != this.$store.getters.currentView){
          newalreadyClose.push(value)
        }
      })
      this.$store.dispatch("updataTabClose",newalreadyClose) 
      if(this.$store.getters.currentView == this.$route.name) { 
        this.$store.state.lc_zhudan.allData = []
        this.$store.state.lc_zhudan.allData_total = 0;
        this.$store.state.lc_zhudan.page = 1;
        this.$store.state.lc_zhudan.size = 10;
         this.$store.state.lc_zhudan.searchEdition={
           agentInfoIds: [""], // 代理商老板id列表
            username: '', // 游戏用户名称
            betNo: '', // 注单号码
            settleStatus: '', //注单结算状态
            device: '', // 终端设备
            gameNo: '', // 开奖期号
            parentLotteryId: '', // 一级彩种名称 
            lotteryId: '', // 二级彩种名称
            menuPlayRuleId: '', // 一级玩法Id
            playRuleId: '', // 二级玩法Id
            amountMin: '', // 起始 投注金额
            amountMax: '', // 截止 投注金额
            effectiveAmountMin: '', // 起始 有效投注金额
            effectiveAmountMax: '', // 截止 有效投注金额 
            winlossAmountMin: '', // 起始 输赢金额
            winlossAmountMax: '', // 截止 输赢金额
            settleAmountMin: '', // 起始 结算金额(下限)
            settleAmountMax: '', // 截止 结算金额(上限)
            oddsMin: '', // 起始 赔率
            oddsMax: '', // 截止 赔率
            ClearingTime: [], //计算中奖时间（结算时间）
            BetOnTime: [], //下注时间 
            betTradeNo:'', // 平台交易流水号【下注扣款】
            settleTradeNo:'', //平台交易流水号【注单结算】
            disabledSecond: true, // 默认二级彩种下拉不可操作
            disableWanfa: true, // 默认一级玩法下拉不可操作
            disableWanfb : true, // 默认二级玩法下拉不可操作
            enableBetsTime: false, // 禁用 下注时间
            enableBillTime: true, // 禁用 计算中奖时间（结算时间）
        },
        this.$store.dispatch('getZhuDanTableHeight', 2)
      }
    }else {
      if(this.$store.state.lc_zhudan.allData.length > 0) {
        this.getList()
       }
    }

  },
  mounted(){
    this.getServerTime()  
      agentInfoDropdownList().then(res => { // 初始化代理商老板账号
        let resData = res.data
        if(resData.success == 1) {
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
          if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
            this.agentInfoIdsArr = resData.content;
            this.$store.state.lc_zhudan.searchEdition.agentInfoIds[0] = resData.content[0].value;
             this.disableControl = true;
          }else{
            this.agentInfoIdsArr=[{ value: "",name: "全部"}] // 代理商老板账号下拉列表 
            let by_agentInfoIdsArr = resData.content;   
            by_agentInfoIdsArr.forEach(element => {
                this.agentInfoIdsArr.push(element);
            });
          }        
        }else {
          this.$message.error(resData.respMsg)
        }
      })

      findByCode({code: 'DEVICE,PLAYRULE_CATEGORY,OPENING_PRIZESTATUS,REPORT_CANCELABLE'}).then(res => { // 初始化终端设备,二级玩法
        let resData = res.data
        if(resData.success == 1) {
          let by_deviceArr = resData.content['DEVICE']; // 终端设备
          by_deviceArr.forEach(element => {
            this.deviceArr.push(element);
          }); 
          let by_drawALotteryStatu = resData.content['OPENING_PRIZESTATUS']; // 初始化 开奖状态;
           by_drawALotteryStatu.forEach(element => {
                this.drawALotteryStatu.push(element);
          });
       

        }else {
          this.$message.error(resData.respMsg)
        }
      })

      lotteryDropdownList({parentId: 0}).then(res => { // 一级彩种下拉
        let resData = res.data
        if(resData.success == 1) {
          let by_kindAData = resData.content
           by_kindAData.forEach(element => {
                this.kindAData.push(element);
          });
        }else {
          this.$message.error(resData.respMsg)
        }
      })

  }
};
</script>
<style lang="scss" scope>
@import '@/styles/tableFold.scss';
/* 正常视口下 表格高度*/
.noteTheSingle{
  .tableAutoToggle { 
    max-height: calc(100vh - 350px);
    overflow: auto;
  }
} 
.notethesingle-checkDetail .detail-head{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #F5F7FA;
  padding: 10px;

}
.notethesingle-checkDetail .detail-head p{
  width: 25%;
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
}
.notethesingle-checkDetail .bettingStatus .bettingStatus-content{
  width: 60%;
  margin: auto;
  height: 400px;
  padding-top: 15px;
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  padding-left: 14vW;
}
.notethesingle-checkDetail .bettingStatus .bettingStatus-content p{
  height: 30px;
  line-height: 30px;
}
.notethesingle-checkDetail .bettingStatus .bettingStatus-content p span{
  display: inline-block;
  width: 50px;
}
.notethesingle-checkDetail .bettingStatus .bettingStatus-content p span:first-child{
  font-weight: bold;
}
.notethesingle-checkDetail .bettingStatus .bettingStatus-content p span:nth-child(3){
  display: inline-block;
  width: 130px;
}
.notethesingle-checkDetail .bettingStatus .bettingStatus-content p span:last-child{
  display: inline-block;
  width: 130px;
}
.notethesingle-checkDetail .bettingStatus .bettingStatus-content p span:nth-child(2) em{
  border: 1px solid #606266;
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;

}
.notethesingle-checkDetail .bettingStatus .bettingStatus-content .detail-icon{
    width: 30px;
    height: 30px;
    margin-left: 44px;
}
.bettingStatus_sum .el-radio__input{
    display: none;   
  }
  .bettingStatus_sum .dialog-head{
    height: 50px;
    margin: 10px 0px 0px 0px;
    line-height: 0px;
    border: none;
    .el-radio-button__inner{
      text-align: left;
      padding: 7px 20px;
      border: 1px solid #dcdfe6;
      line-height: 15px;
      margin-left: 15px;
      border-radius: 4px;
      box-shadow: 0px 0 0 0 #409EFF;
      font-size: 12px;
    }
    .dialog-head-span{
      float: right;
      line-height: 39px;
      padding-right: 10px;
    }
  }

@media screen and (max-width: 1460px) { 
  .noteTheSingle {
    .tableAutoToggle { 
      max-height: calc(100vh - 390px)!important;
      overflow: auto;
    }
    .tableAuto175 {
      // 查询条件折叠时 表格高度
      max-height: calc(100vh - 175px) !important;
      overflow: auto;
    }
  }
}
</style>
