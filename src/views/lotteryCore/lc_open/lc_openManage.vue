<template>
  <div class="app-container open-manage">
    <!--  开盘管理控制 -->
    <div class="manage-head">
      <el-form :model="manageSearch">
        <ul class="heard-search">
          <li>
            <span class="rem_tit">一级彩种名称：</span>
            <span class="rem_con">
                <el-select v-model="manageSearch.parentLotteryId" :disabled="disabledALL" value-key="name" @change="selectOption" placeholder="请选择">
                  <el-option v-for="(item,index) in kindAData" :key="item.name+index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">二级彩种名称：</span>
            <span class="rem_con">
                <el-select v-model="manageSearch.lotteryId" :disabled="manageSearch.disabledSecond" value-key="name" placeholder="请选择">
                  <el-option v-for="(item,index) in kindBData" :key="index" :label="item.name" :value="item.value"></el-option>
                  </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">开奖期号：</span>
            <span class="rem_con">
              <el-input v-model="manageSearch.gameNo" :disabled="disabledALL" placeholder="请输入开奖期号" maxlength="15"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">新增类型：</span>
            <span class="rem_con">
                <el-select v-model="manageSearch.addType" :disabled="disabledALL" value-key="name" placeholder="全部">
                  <el-option v-for="(item,index) in addTypeArr" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>      
          <li>
            <span class="rem_tit">盘口状态：</span>
            <span class="rem_con">
                <el-select v-model="manageSearch.openingStatus" :disabled="disabledALL" value-key="name" placeholder="全部">
                  <el-option v-for="item in pankouStatus" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">封盘类型：</span>
            <span class="rem_con">
                <el-select v-model="manageSearch.endType" :disabled="disabledALL" value-key="name" placeholder="全部">
                  <el-option v-for="(item,index) in endTypeArr" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">盘口结算状态：</span>
            <span class="rem_con">
                <el-select v-model="manageSearch.settleStatus" :disabled="disabledALL" value-key="name" placeholder="全部">
                  <el-option v-for="(item,index) in settleStatusArr" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>         
         <li>
            <span class="rem_tit">投注开始时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="manageSearch.BettingStartTime"
                type="datetimerange"
                :disabled="disabledALL"
                range-separator="至"
                ref="manageSearch_BettingStartTime"
                start-placeholder="开始日期"
                end-placeholder="结束日期" 
                :clearable="false"
                @change="getDateStart"
               :default-time="['00:00:00', '23:59:59']">
              </el-date-picker>
            </span>
        </li>
         <li>
            <span class="rem_tit">投注结束时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="manageSearch.BettingEndTime"
                type="datetimerange"
                :disabled="disabledALL"
                range-separator="至"
                ref="manageSearch_BettingEndTime"
                start-placeholder="开始日期"
                end-placeholder="结束日期" 
                :clearable="false"
                @change="getDateEnd"
               :default-time="['00:00:00', '23:59:59']">
              </el-date-picker>
            </span>
        </li>
        <li>
            <span class="rem_tit">官方开奖时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="manageSearch.socialOpenTime"
                type="datetimerange"
                :disabled="disabledALL"
                range-separator="至"
                ref="manageSearch_socialOpenTime"
                start-placeholder="开始日期"
                end-placeholder="结束日期" 
                :clearable="false"
                @change="getDate"
               :default-time="['00:00:00', '23:59:59']">
              </el-date-picker>
            </span>
        </li>
        </ul>
        <el-form-item class="operation-box">
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="getList">
            <svg-icon icon-class="chaxun" /> 
            查询</el-button>
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="reset">
            <svg-icon icon-class="zhongzhi" />
            重置</el-button>
          <!-- <el-button type="primary" size="mini" @click="updataOpeningStatus" :disabled="disabledALL">
            <svg-icon icon-class="shuaxin" />
            更新盘口状态</el-button> -->
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="addUser(580)">
            <svg-icon icon-class="xinzeng1" />
            新增</el-button>
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="batchAdd(580) ">
            <svg-icon icon-class="xinzeng1" />
            批量新增</el-button>
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="editInfo(529)">
            <svg-icon icon-class="bianji" />
            编辑信息</el-button>
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="removeList">
            <svg-icon icon-class="shanchu" />
            删除</el-button>
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="artificialEnable(383)">
            <svg-icon icon-class="jinyong1" />
            人工封盘</el-button>
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="Settlement(380)">
            <svg-icon icon-class="balance" />
            人工结算</el-button>
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="checkDetail(608)">
            <svg-icon icon-class="chakanxiangqing" />
            查看详情</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格-->
    <div class="table-content" >
      <el-table
        style="width: 100%; "
        border
        class="tableAuto296"
        highlight-current-row
        ref="multipleTable"
        :default-sort = "{prop: 'date', order: 'descending'}"
        :data="tableData"
        @sort-change='sortChange'
        :height="currentPageSize*25 + 60"
        @current-change="handleCurrentChange"
        v-loading="loading"
      >
        <el-table-column lable show-overflow-tooltip width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="user_table_rowDataId" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column prop="" align="center" label="序号" width="50" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="parentLotteryName" width="120" align="center" label="一级彩种名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="lotteryName" align="center" width="120" label="二级彩种名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="lotteryCode" align="center" label="二级彩种编号" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="gameNo" align="center" label="开奖期号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="playVersionCode" align="center" label="基础信息版本编号" width="120" show-overflow-tooltip></el-table-column>
       
        <el-table-column sortable='custom' prop="beginTime" align="center" label="投注开始时间" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              {{ scope.row.beginTime ? scope.row.beginTime : "-" }}
          </template>
        </el-table-column>
        <el-table-column sortable='custom' prop="endTime" align="center" label="投注结束时间" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              {{ scope.row.endTime ? scope.row.endTime : "-" }}
          </template>
        </el-table-column>
        <el-table-column sortable='custom' prop="govPrizeTime" align="center" label="官方开奖时间" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              {{ scope.row.govPrizeTime ? scope.row.govPrizeTime : "-" }}
          </template>
        </el-table-column>  
        <el-table-column prop="openingStatus" align="center" label="盘口状态" width="150" show-overflow-tooltip>
            <template slot-scope="scope">
            <span v-if="scope.row.openingStatus == 0">已就绪，暂未允许投注</span>
            <span v-if="scope.row.openingStatus == 1">已开盘，允许接受投注</span>
            <span v-if="scope.row.openingStatus == 2">已封盘，停止接受投注</span>
            <span v-if="scope.row.openingStatus == 3">已开奖，进入结算环节</span>
            <span v-if="scope.row.openingStatus == 4">已关盘，结算处理完成</span>
          </template>
        </el-table-column>
        <el-table-column prop="endType" align="center" label="封盘类型 " width="100" show-overflow-tooltip>
          <template slot-scope="scope">
              {{ scope.row.endType == 0 ?  '人工封盘': scope.row.endType == 1 ? "自动封盘" : "-" }}
          </template>
        </el-table-column>
        <el-table-column prop="settleStatus" align="center" width="100" label="盘口结算状态" show-overflow-tooltip>
         <template slot-scope="scope">
            <span v-if="scope.row.settleStatus == 0">未结算</span>
            <span v-if="scope.row.settleStatus == 1">结算中</span>
            <span v-if="scope.row.settleStatus == 2">未完全结算</span>
            <span v-if="scope.row.settleStatus == 3">已结算</span>
          </template>       
        </el-table-column>
        <el-table-column prop="settltTime" align="center" label="结算时间" width="150" show-overflow-tooltip>
           <template slot-scope="scope">
              {{ scope.row.settltTime ? scope.row.settltTime : "-" }}
          </template>
        </el-table-column>  
        <el-table-column prop="addType" align="center" label="新增类型" show-overflow-tooltip>
          <template slot-scope="scope">
             {{ scope.row.addType == 0 ?  '手动新增': scope.row.addType == 1 ? "批量导入" : "--" }}
          </template>
        </el-table-column>
        <el-table-column prop="remark" align="center" label="备注" show-overflow-tooltip>
         <template slot-scope="scope"> {{ scope.row.remark ? scope.row.remark : '-' }}</template>
        </el-table-column>
        <el-table-column prop="createdBy" align="center" label="创建人" show-overflow-tooltip></el-table-column>
        <el-table-column prop="createdDate" align="center" label="创建时间" width="150" show-overflow-tooltip></el-table-column>
        <el-table-column prop="lastModifiedBy" align="center" label="修改人" show-overflow-tooltip>
           <template slot-scope="scope">
              {{ scope.row.lastModifiedBy ? scope.row.lastModifiedBy : "-" }}
          </template>
        </el-table-column>
        <el-table-column prop="lastModifiedDate" align="center" label="修改时间" width="150" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
    <!--分页-->
    <div class="terraceUser_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="pageSize"
        background
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getTableData"
      >
      </el-pagination>
    </div>
    <!--新增-->
    <el-dialog :visible.sync="addUserDialog" title="新增"  width="380px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box info-addOrEdit">
        <p>        
          <span class="dialog-label-item">
            <span class="required">*</span>二级彩种名称:
          </span>
          <el-input class="secondName" disabled="disabled" v-model="addOpen.lotteryName" style="width: 200px;"/>
          <el-button  @click="showTree('add')">点击选择</el-button>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>开奖期号：
          </span>
          <el-input v-model="addOpen.openDate" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required"></span>基础信息版本编号：
          </span>
          <el-input v-model="addOpen.visonNum" disabled="disabled" style="width: 200px;"/>
        </p>       
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>投注开始时间：
          </span>
          <el-date-picker
            ref="addOpenStartBets"
            v-model="addOpen.startBets"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>投注结束时间：
          </span>
          <el-date-picker
            ref="addOpenEndBets"
            v-model="addOpen.endBets"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </p>
         <p>
          <span class="dialog-label-item">
            <span class="required">*</span>官方开奖时间：
          </span>
          <el-date-picker
            ref="addOpenSocialOpenDate"
            v-model="addOpen.socialOpenDate"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </p>
        <p style="padding: 6px 0px;">
          <span class="dialog-label-item">盘口状态：</span>
          <el-input :disabled="true" style="width: 200px;" placeholder="已就绪,等待开放下注"/>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmAdd" size="mini" :loading="openManageObj.confirmAdd">确 定</el-button>
        <el-button @click="addUserDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!--批量新增-->
    <el-dialog :visible.sync="batchAddDialog" title="批量新增" width="90vh" class="bingoList-batchAddDialog" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box">
        <el-steps :active="active" simple>
          <el-step title="上传" icon="el-icon-lc-uploada"></el-step>
          <el-step title="解析" icon="el-icon-lc-analysis"></el-step>
          <el-step title="导入" icon="el-icon-lc-introduction"></el-step>
        </el-steps>

      <div v-if="showUpload" style="height:45vh;padding-top: 1%;">
        <div class="bingoList-batchAddDialog-upload" style="margin-bottom: 1.5%;">
          <p class="bingoList-batchAddDialog-upload-title">基本信息</p>
          <div class="bingoList-batchAddDialog-upload-body">
          <p><span class="bordercss">1</span>&nbsp;&nbsp;<span> 下载模板：&nbsp;&nbsp; </span>
          <span class="bingoList-download"  @click="download"> &nbsp;点击下载</span>
          </p>
           <p><span style="display: inline-block;float: left;"><span class="bordercss">2</span>&nbsp;&nbsp;上传Excel：&nbsp;&nbsp;&nbsp;</span>
            <el-upload
              class="upload-demo"
              action="/api/cp4/opening/openingTemp/importAndSolve"
              :before-remove="beforeRemove"
               multiple
               ref="batchAddDialogUpload"
              :headers="myHeader"
              :limit="2"
              :on-success="filesuccessData"
              :on-error="fileErrorData"
              :on-change ="overlayFile"
              :auto-upload="false"
              :file-list="fileList">
              <el-button size="small" type="primary">选择文件</el-button>
            </el-upload>
          </p>
          </div>
        </div>
        <div class="bingoList-batchAddDialog-upload" >
          <p class="bingoList-batchAddDialog-upload-title">导入说明</p>
          <div class="bingoList-batchAddDialog-upload-body">
            <p><span class="bordercss">1</span>&nbsp;&nbsp;&nbsp;&nbsp;<span> 请先下载模板：&nbsp;&nbsp; </span><span class="bingoList-download" @click="download"> &nbsp;点击下载</span></p>
            <p><span class="bordercss">2</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>填写模板数据后将文件上传。</span></p>
            <p><span class="bordercss">3</span>&nbsp;&nbsp;&nbsp;&nbsp;<span> 序号字段只能是数字。</span></p>
          </div>
        </div>
      </div>
      <div v-if="showTable" style="height: 45vh;padding-top: 1%;">
        <div class="bingoList-upload-table">
          <el-table
            highlight-current-row
            style="width: 100%;"
            height="380"
            border
            :data="exportTableData"
            class="tableAuto216"
          >
              <el-table-column width="50" label="序号"  align ="center" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
                </template>
              </el-table-column>
              <el-table-column width="130" label="一级彩种" prop="parentLotteryName" align = "center" show-overflow-tooltip>
                 <template slot-scope="scope">
                  <span :style="scope.row.status==1?'color:red;':''">{{scope.row.parentLotteryName}}</span>
                </template>
              </el-table-column>
              <el-table-column width="100" label="二级彩种" prop="lotteryName" align = "center" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span :style="scope.row.status==1?'color:red;':''">{{scope.row.lotteryName}}</span>
                </template>
              </el-table-column>
              <el-table-column width="180" label="开奖期号" prop="gameNo" align = "center" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span :style="scope.row.status==1?'color:red;':''">{{scope.row.gameNo}}</span>
                </template>
              </el-table-column>
               <el-table-column width="180" label="基础版本信息号" prop="playVersionCode" align = "center" show-overflow-tooltip>
                 <template slot-scope="scope">
                  <span :style="scope.row.status==1?'color:red;':''">{{scope.row.playVersionCode}}</span>
                </template>
              </el-table-column>
              <el-table-column width="200" label="投注开始时间" prop="beginTime" align = "center" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span :style="scope.row.status==1?'color:red;':''">{{scope.row.beginTime}}</span>
                </template>
              </el-table-column>
              <el-table-column width="150" label="投注结束时间" prop="endTime" align = "center" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span :style="scope.row.status==1?'color:red;':''">{{scope.row.endTime}}</span>
                </template>
              </el-table-column>
               <el-table-column width="150" label="官方开奖时间" prop="govPrizeTime" align = "center" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span :style="scope.row.status==1?'color:red;':''">{{scope.row.govPrizeTime}}</span>
                </template>
              </el-table-column>
          </el-table>
            <!-- <p v-bind:class="exportTableDataCount.ineffectiveNum==0?bingoList-analysis-result-green:bingoList-analysis-result-red">解析结果：有效数据{{exportTableDataCount.effictiveNum}}条，无效数据{{exportTableDataCount.ineffectiveNum}}条。</p> -->
          <p class="bingoList-analysis-result" v-if="exportTableDataCount.ineffectiveNum > 0">解析结果：有效数据{{exportTableDataCount.effictiveNum}}条，无效数据{{exportTableDataCount.ineffectiveNum}}条。</p>
          <p class="bingoList-analysis-resulta" v-if="exportTableDataCount.ineffectiveNum == 0">解析结果：有效数据{{exportTableDataCount.effictiveNum}}条，无效数据{{exportTableDataCount.ineffectiveNum}}条。</p>
        </div>
      </div>
      <div v-if="showOK" style="height: 45vh;"> 
        <div class="to-channel-ok">
          导入成功
          <p style="text-align:center">导入结果：共计<span style="color:blue">{{exportTableDataCount.content}}</span>条数据</p>
        </div>
      </div>
      </div>
      <span slot="footer" class="dialog-footer">

        <el-button type="primary" size="mini" v-if="shOwdownload" @click.native="downloadButton">导 出</el-button>
        <el-button type="primary" @click.native="naxt" size="mini" :loading="buttonLoading">下一步</el-button>
        <el-button @click="batchAddDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!--编辑信息-->
    <el-dialog :visible.sync="editUserDialog" title="编辑信息" width="380px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box info-addOrEdit">
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>二级彩种名称：
          </span>
          <el-input v-model="edit.lotteryName" :disabled="true" style="width: 200px;"/>
        </p>
        <p> 
          <span class="dialog-label-item">
            <span class="required">*</span>开奖期号：
          </span>
          <el-input v-model="edit.openDate" style="width: 200px;"/>
        </p>

        <p>
          <span class="dialog-label-item">
            <span class="required"></span>基础信息版本编号:
          </span>
          <el-input v-model="edit.visonNum" :disabled="true" style="width: 200px;"/>
        </p>
       
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>投注开始时间：
          </span>
          <el-date-picker
            ref="editStartBets"
            v-model="edit.startBets"
            type="datetime"
            placeholder="选择日期">
          </el-date-picker>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>投注结束时间：
          </span>
          <el-date-picker
            ref="editEndBets"
            v-model="edit.endBets"
            type="datetime"
            placeholder="选择日期">
          </el-date-picker>
        </p>
         <p>
          <span class="dialog-label-item">
            <span class="required">*</span>官方开奖时间：
          </span>
          <el-date-picker
            ref="editSocialOpenDate"
            v-model="edit.socialOpenDate"
            type="datetime"
            placeholder="选择日期">
          </el-date-picker>
        </p>
        <p style="padding: 6px 0px;">
          <span class="dialog-label-item">盘口状态：</span>
          <el-input v-model="edit.status" :disabled="true" style="width: 200px;" placeholder="启用"/>
        </p>
        <p style="padding: 6px 0px;">
          <span class="dialog-label-item">备注：</span>
          <el-input  v-model="edit.mark" type="textarea" style="width: 200px;" />
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmEdit" size="mini" :loading="openManageObj.confirmEdit">确 定</el-button>
        <el-button @click="editUserDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!--人工封盘-->
    <el-dialog :visible.sync="openUserDialog" title="人工封盘" width="600px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item">
            <span class="required"></span>开奖期号：
          </span>
          <span>{{open.openDate}}</span>
          <span class="dialog-label-item">
            <span class="required"></span>一级彩种：
          </span>
          <span>{{open.first}}</span>
          <span class="dialog-label-item">
            <span class="required"></span>二级彩种：
          </span>
          <span>{{open.second}}</span>
        </p>
        <div class="explain" >
          <span>封盘说明</span>
          <div class="mark">
           <span><span style="color:red;width: 8px;">*</span>备注说明： </span>           
            <el-input type="textarea" v-model="closeMarks" style="width:450px;margin-left:80px;margin-top:-22px" maxlength="150" :rows="7"></el-input>
          </div>
        </div>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmDisable" size="mini" :loading="openManageObj.confirmClose">确认</el-button>
        <el-button @click="openUserDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!--彩种选择-->
    <el-dialog :visible.sync="diialogTreeInfo" title="彩种选择" width="380px" class="permissions_add_updata_dialog" :close-on-click-modal="false">
      <div class="dialog-box" style="height:415px; overflow: auto">
        <div class="tree_diialogTreeInfo_css" width="90%">
          <treedata :stata="11"></treedata>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="permissionsdata" size="mini">确 定</el-button>
        <el-button @click="diialogTreeInfo = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 查看详情 -->
    <el-dialog :visible.sync="detailDialog" title="查看详情"  :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box info-checkDetail">
        <div class="detail-head">
          <p>一级彩种名称：{{viewDetails.parentLotteryName}}</p>
          <p>二级彩种名称：{{viewDetails.lotteryName}}</p>
          <p>开奖期号：{{viewDetails.gameNo}}</p>
          <p>投注开始时间：{{viewDetails.beginTime}}</p>
          <p>投注结束时间：{{viewDetails.endTime}}</p>
          <p>官方开奖时间：{{viewDetails.govPrizeTime}}</p>
          <p>当前盘口状态：{{viewDetails.openingStatus}}</p>
        </div>
        <div class="bettingStatus">
          <div class="bettingStatus-content">
            <div v-for="(itme,index) in viewDetailsTheDownData" :key = "index">
              <p>
                <span>{{itme.changeStatus}}</span>
                <span :style="index ==viewDetailsTheDownData.length-1?'color:blue;':''"><em :style="index ==viewDetailsTheDownData.length-1?'border: 1px solid blue;':''"></em></span>
                <span :style="index ==viewDetailsTheDownData.length-1?'color:blue;':''">{{itme.createdDate}}</span>
                <span :style="index ==viewDetailsTheDownData.length-1?'color:blue;':''">{{itme.remark}}</span>
              </p> 
              <svg-icon v-if="index ==viewDetailsTheDownData.length-1 ? false: true"  class="detail-icon" icon-class="arrow-down"></svg-icon>
            </div>
            
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" @click="confirmEdit" size="mini">确 定</el-button> -->
        <el-button @click="detailDialog = false" size="mini">关 闭</el-button>
      </span>
    </el-dialog>
    <!--人工结算-->
    <el-dialog :visible.sync="balanceDialog" title="人工结算" width="400px" style="padding-top:300px" top="theConfirm" class="showlialog-zindex" :close-on-click-modal="false">
       <div style="text-align:center;height: 35px; background-color: rgba(242, 242, 242, 1);line-height: 35px;" >
         二级彩种名称：{{balanceData.lotteryName}}  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  期号：{{balanceData.gameNo}}
         </div>
        <p style="text-align:center;">
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;是否确定结算？
        </p>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" :loading ="openManageObj.clearingClose" @click="clearing" >确定</el-button>
          <el-button @click="balanceDialog = false">取 消</el-button>
        
        </div>
      </el-dialog>
   
  </div>
</template>

<script>
import { mapState } from 'vuex'
import treedata from "./lc_trees";
import { validOpenDate } from '@/utils/validate'
import { lotteryDropdownList,findByCode } from '@/api/select';
import { findPage,lotteryTree,persist,findById,mergeEntity,mergeEndType,template,
importAndSolve,downloadexport,download,saveBatch,removeById,updateOpenStatus,findList,confirmPrizeManualSettle
} from '@/api/lotteryCore/lc_openManage/openManage';
import {serverTime } from '@/api/login'
import { getToken } from '@/utils/auth'
import { drive } from '@/utils/judge'
import { validFigure } from "@/utils/validate";
import { debounce } from '../../../utils';
  export default {
    name: "lc_openManage",
    components: {
      treedata,
    },
    data() {
      return {
        openManageObj:{ 
          confirmAdd:false, // 确认新增按钮loading
          confirmEdit:false, // 确认编辑按钮loading
          confirmClose:false, // 确认关盘按钮loading
         clearingClose:false, // 确认人工结算按钮loading
        },
        viewDetails:{
          parentLotteryName:"",//一级彩种名称
          lotteryName:"",//二级彩种名称
          gameNo:"",//开奖期号
          beginTime:"",//投注开间时间
          endTime:"",//投注结束时间
          govPrizeTime:"",//官方开间时间
          openingStatus:"",//当前盘口状态
          id:"" 
        },
        viewDetailsTheDownData:[], // 查看详情步骤数据
        ServerTimes:"", // 服务器时间
        buttonLoading:false, // 按钮loading
        disabledALL:false, // 控制全局不可编辑
        loading:false, // Loading 加载
        diialogTreeInfo:false,
        fileList: [],
        active:1, // 步骤数
        showUpload:true,  // 步骤1页面
        showTable:false,  // 步骤2页面
        showOK:false,  // 步骤3页面
        shOwdownload:false,  // 导出展示按钮
        addUserDialog: false,
        editUserDialog: false,
        openUserDialog:false,
        batchAddDialog:false,
        balanceDialog:false, //人工结算，
        user_table_rowDataId: null, // 默认监听一行数据的ID
        kindAData:[{ value: "",name: "请选择"}], // 一级彩种下拉选择数据
        settleStatusArr:[{ value: "",name: "全部"}], // 盘口结算状态
        addTypeArr:[{ value: "",name: "全部"}], // 新增类型
        endTypeArr:[{ value: "",name: "全部"}], // 封盘类型
        pankouStatus: [{ value: "",name: "全部"}], // 盘口状态
        addOpen:{
          socialOpenDate:'', //官方开奖时间：
          visonNum:'', // 基础信息版本编号：
          lotteryId:'', //二级彩种ID
          lotteryName:'', //二级彩种名称
          openDate:'', //开奖期号
          startBets:'', //投注开始时间
          endBets:'' //投注结束时间
        },
        artificial:[],
        open:{
          openDate:"",
          first:"",
          second:"",
          id:""
        },
        edit:{
          socialOpenDate:'', // 官方开奖时间
          visonNum:'', // 基础信息版本编号
          lotteryName:'', // 二级彩种名称
          openDate:'', // 开奖期号：
          startBets:'', // 投注开始时间
          endBets:'',  // 投注结束时间
          mark:'',  // 备注
          status:'', // 盘口状态
          id:"" // 开盘管理ID
        },
        theExcel:"", // 一行的数据
        closeMarks:"",  // 封盘备注说明
        dialogHeight:0,
        dialogMt:this.dialogMt, // 弹出框上边距
        exportTableData:[],  // 导出模块的表格数据
        exportTableList:[], // 解析成功后，后台返回的所有数据
        exportTableDataCount:{//d导入的有效数据条数
          effictiveNum:"", //有效数据
          ineffectiveNum:"", //无效数据
          content:"" // 返回总条数
        }, 
        theTips:"",
        agentBossAccounts:"",
        fileListbole:false, //批量新增解析判断，
        detailDialog:false, // 查看详情弹框
        detailData:{ // 查看详情头部数据
          parentName:"", // 一级彩种名称
          childName:"", // 二级彩种名称
          openDateNum:"", // 开奖期号
          betsStartTime:"", // 投注开始时间
          betsEndTime:"", // 投注结束时间
          socialOPenTime:"", // 官方开奖时间
          localStatus:"",// 当前盘口状态
        },
        balanceData:{
          lotteryName:"", //二级彩种名称
          gameNo:"", //开奖期号
        }
      }
    },
    computed:{
      ...mapState({
        tableData:state =>state.lc_openManage.allData,
        kindBData:state =>state.lc_openManage.kindBData,
        currentPageSize:state =>state.lc_openManage.currentPageSize
      }),
      total:{
        get(){
          return this.$store.state.lc_openManage.allData_total;
        },
        set(item){
          return  item;
        }
      },
      pageSize: {
        get(){
          return this.$store.state.lc_openManage.pageSize;
        },
        set(item){
          return  item;
        }
      },
      page: {
        get(){
          return this.$store.state.lc_openManage.page;
        },
        set(item){
          return  item;
        }
      },
      manageSearch: {
        get(){
          return this.$store.state.lc_openManage.manageSearch;
        },
        set(item){
          return  item;
        }
      },
      myHeader(){
        return {
            "authToken": getToken(),
            "channel": drive()
        }
      }
    },
    methods: {
      judgeScree(val) { // 判断屏幕大小进行操作
        let a = document.body.offsetHeight - val;
        this.dialogMt = a / 2 + 'px';
      },
      getDate(val){ //官方开奖时间---获取时间控件方法   
          if(val||this.$store.state.lc_openManage.manageSearch.socialOpenTime != null) {
              this.$store.state.lc_openManage.manageSearch.socialOpenTime[0] = this.dateForm(this.$store.state.lc_openManage.manageSearch.socialOpenTime[0],1);
              this.$store.state.lc_openManage.manageSearch.socialOpenTime[1] = this.dateForm(this.$store.state.lc_openManage.manageSearch.socialOpenTime[1],1);        
              if(this.$store.state.lc_openManage.manageSearch.socialOpenTime[0] == this.$store.state.lc_openManage.manageSearch.socialOpenTime[1]) {
                this.$store.state.lc_openManage.manageSearch.socialOpenTime[1] = this.$store.state.lc_openManage.manageSearch.socialOpenTime[1].split(' ')[0] + ' 23:59:59'
              }
              if(this.$store.state.lc_openManage.manageSearch.socialOpenTime[1].split(' ')[1] == '00:00:00') {
                this.$store.state.lc_openManage.manageSearch.socialOpenTime[1] = this.$store.state.lc_openManage.manageSearch.socialOpenTime[1].split(' ')[0] + ' 23:59:59'
              }         
          }else{
             
              this.$store.state.lc_openManage.manageSearch.socialOpenTime = [] 
          }
      },
      getDateStart(val){ //投注开始时间-- 获取时间控件方法   
          if(val||this.$store.state.lc_openManage.manageSearch.BettingStartTime != null) {
              this.$store.state.lc_openManage.manageSearch.BettingStartTime[0] = this.dateForm(this.$store.state.lc_openManage.manageSearch.BettingStartTime[0],1);
              this.$store.state.lc_openManage.manageSearch.BettingStartTime[1] = this.dateForm(this.$store.state.lc_openManage.manageSearch.BettingStartTime[1],1);        
              if(this.$store.state.lc_openManage.manageSearch.BettingStartTime[0] == this.$store.state.lc_openManage.manageSearch.BettingStartTime[1]) {
                this.$store.state.lc_openManage.manageSearch.BettingStartTime[1] = this.$store.state.lc_openManage.manageSearch.BettingStartTime[1].split(' ')[0] + ' 23:59:59'
              }
              if(this.$store.state.lc_openManage.manageSearch.BettingStartTime[1].split(' ')[1] == '00:00:00') {
                this.$store.state.lc_openManage.manageSearch.BettingStartTime[1] = this.$store.state.lc_openManage.manageSearch.BettingStartTime[1].split(' ')[0] + ' 23:59:59'
              }         
          }else{
              this.$store.state.lc_openManage.manageSearch.BettingStartTime = [] 
          }
      },
      getDateEnd(val){ //投注结束时间-- 获取时间控件方法   
          if(val||this.$store.state.lc_openManage.manageSearch.BettingEndTime != null) {
              this.$store.state.lc_openManage.manageSearch.BettingEndTime[0] = this.dateForm(this.$store.state.lc_openManage.manageSearch.BettingEndTime[0],1);
              this.$store.state.lc_openManage.manageSearch.BettingEndTime[1] = this.dateForm(this.$store.state.lc_openManage.manageSearch.BettingEndTime[1],1);        
              if(this.$store.state.lc_openManage.manageSearch.BettingEndTime[0] == this.$store.state.lc_openManage.manageSearch.BettingEndTime[1]) {
                this.$store.state.lc_openManage.manageSearch.BettingEndTime[1] = this.$store.state.lc_openManage.manageSearch.BettingEndTime[1].split(' ')[0] + ' 23:59:59'
              }
              if(this.$store.state.lc_openManage.manageSearch.BettingEndTime[1].split(' ')[1] == '00:00:00') {
                this.$store.state.lc_openManage.manageSearch.BettingEndTime[1] = this.$store.state.lc_openManage.manageSearch.BettingEndTime[1].split(' ')[0] + ' 23:59:59'
              }         
          }else{
              this.$store.state.lc_openManage.manageSearch.BettingEndTime = [] 
          }
      },
      getList(){
        this.getTableData()
      },
      getTableData(val) {  // 查询接口
          if(!val) {
            val = 1
          }        
          this.artificial = ""; // 一行的数据
          this.user_table_rowDataId = "";  
          this.$store.dispatch("getOpenPage", val); // 状态库中保存当前页
          // // 初始化页面数据时，生命周期created中有初始化请求数据，在this.$refs.formInline_dateTime还没有渲染出来时，开奖时间给个默认值
          if(!this.$store.state.lc_openManage.manageSearch.BettingStartTime){ // 投注起始时间
            this.$store.state.lc_openManage.manageSearch.BettingStartTime =[];
          }
          if(!this.$store.state.lc_openManage.manageSearch.BettingEndTime){ // 投注截止时间
            this.$store.state.lc_openManage.manageSearch.BettingEndTime =[];
          }
          let datainfp = this.$store.state.lc_openManage.manageSearch;
          if(datainfp.BettingStartTime.length == 0&&datainfp.BettingEndTime.length == 0 && datainfp.socialOpenTime.length == 0){
         // 下注时间默认显示7天
            let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*2; // 当前日期减去一天
            let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
            let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
            this.$store.state.lc_openManage.manageSearch.socialOpenTime = [state,edate];  
          }
          let data = {
            "parentLotteryId":this.$store.state.lc_openManage.manageSearch.parentLotteryId || "", // 一级彩种ID
            "lotteryId":this.$store.state.lc_openManage.manageSearch.lotteryId || "",//二级彩种ID
            "gameNo":this.$store.state.lc_openManage.manageSearch.gameNo || "",//开奖期号
            "addType":this.$store.state.lc_openManage.manageSearch.addType || "",//新增类型
            "openingStatus":this.$store.state.lc_openManage.manageSearch.openingStatus || "",//盘口状态
            "endType":this.$store.state.lc_openManage.manageSearch.endType || "",//封盘类型
            "settleStatus":this.$store.state.lc_openManage.manageSearch.settleStatus || "",//盘口结算状态
            "openTimeBegin":this.$store.state.lc_openManage.manageSearch.socialOpenTime[0],//开奖时间begin
            "openTimeEnd":this.$store.state.lc_openManage.manageSearch.socialOpenTime[1],//开奖时间end
            "beginTimeBegin":this.$store.state.lc_openManage.manageSearch.BettingStartTime[0]||"",//开始 投注起始时间
            "beginTimeEnd":this.$store.state.lc_openManage.manageSearch.BettingStartTime[1]||"",//截止 投注起始时间
            "endTimeBegin":this.$store.state.lc_openManage.manageSearch.BettingEndTime[0]||"",//开始 投注截止时间
            "endTimeEnd":this.$store.state.lc_openManage.manageSearch.BettingEndTime[1]||"",//截止 投注截止时间
            "page":this.page - 1,//页码，从0开始
            "size":this.pageSize, // 当前条数   
            "sortField":this.$store.state.lc_openManage.manageSearch.sortField, 
            "sortType":this.$store.state.lc_openManage.manageSearch.sortType,             
          };  
         

           // 官方开奖时间   区间不得超过三个月
          if(data.openTimeBegin&&data.openTimeEnd){
            let newSdate =  new Date(data.openTimeBegin).getTime(); // 开始时间的毫秒数
            let newEdate =  new Date(data.openTimeEnd).getTime(); // 结束时间的毫秒数
            let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
            if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
                this.$message.warning('开奖时间的起始日期和结束日期的区间不得超过三个月');
                return
            }
          }
          // 投注开始时间   区间不得超过三个月
          if(data.beginTimeBegin&&data.beginTimeEnd){
            let newSdate =  new Date(data.beginTimeBegin).getTime(); // 开始时间的毫秒数
            let newEdate =  new Date(data.beginTimeEnd).getTime(); // 结束时间的毫秒数
            let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
            if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
                this.$message.warning('投注开始时间的起始日期和结束日期的区间不得超过三个月');
                return
            }
          }

          // 投注结束时间   区间不得超过三个月
          if(data.endTimeBegin&&data.endTimeEnd){
            let newSdate =  new Date(data.endTimeBegin).getTime(); // 开始时间的毫秒数
            let newEdate =  new Date(data.endTimeEnd).getTime(); // 结束时间的毫秒数
            let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
            if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
                this.$message.warning('投注结束时间的起始日期和结束日期的区间不得超过三个月');
                return
            }
          }

          this.loading = true; // 请求接口时loading启用
          this.disabledALL=true; // 控制全局不可编辑
          this.$store.state.lc_openManage.manageSearch.disabledSecond = true; // 强制为正 
         //  查询接口
        findPage(data).then(resdata => {
            let res = resdata.data;
            if(res.success == 1) {
             this.$store.dispatch("getOpenManageTabData",res.content)
                let currentPageSize = 2;
                if(res.content.content.length > 0) {
                  currentPageSize = res.content.content.length;
                }else {
                  currentPageSize = 2;
                }        
                this.$store.dispatch('getOpenTableHeight', currentPageSize)       
                this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行 
            }else {
              this.$message.error(res.respMsg)
            }
            this.loading = false; // 接口返回数据时，loading禁用                    
            this.disabledALL=false; // 控制全局不可编辑
            if(this.$store.state.lc_openManage.manageSearch.parentLotteryId == "") { // 二级彩种名称是否可编辑
              this.$store.state.lc_openManage.manageSearch.disabledSecond = true;
            }else{
              this.$store.state.lc_openManage.manageSearch.disabledSecond = false;
            }
        }) 
      },   
      handleCurrentChange(val) {
        if(val != null){
          this.artificial = val; // 一行的数据
          this.user_table_rowDataId = val.id;         
        }
      },
      handleSizeChange(val) {
        this.$store.dispatch('getOpenPageSize', val);
        this.getTableData();
      },
      reset() { // 重置
       this.$store.state.lc_openManage.manageSearch={ // 查询条件
          disabledSecond:true, // 二级彩种名称是否可输入
          parentLotteryId: "", // 一级彩种ID
          lotteryId: "", // 二级彩种ID
          gameNo: "", // 开奖期号
          addType: "", // 新增类型
          openingStatus: "", // 盘口状态
          endType: "", // 封盘类型
          settleStatus: "", // 盘口结算状态
          socialOpenTime:[], // 开奖时间
          BettingStartTime:[], // 投注开始时间
          BettingEndTime:[], //投注结束时间
          sortType:"",//asc升序 desc降序
          sortField:""//排序字段govPrizeTime、beginTime、endTime
        }
        let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*2; // 当前日期减去一天
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
        let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.$store.state.lc_openManage.manageSearch.socialOpenTime = [state,edate] 
      },
      artificialEnable(h){  // 人工封盘
        let indexId = this.user_table_rowDataId;
        if (!indexId) {
          this.$message.warning('请选择一条数据');
          return false;
        }
       if(this.artificial.openingStatus == 0 || this.artificial.openingStatus == 1){
          this.dialogHeight = h;
          this.judgeScree(this.dialogHeight);
          this.openUserDialog = true;
          this.open = {
            openDate:this.artificial.gameNo,  // 开奖期号 
            first:this.artificial.parentLotteryName,  // 一级彩种
            second:this.artificial.lotteryName,  // 二级彩种
            id:this.artificial.id
          }
          this.closeMarks = "" // 进来页面后清空备注说明中的内容
        }else{
          this.$message.warning('请选择盘口状态为已就绪，暂未允许投注或已开盘，允许接受投注的数据进行操作');
          return false;
        }       
      },
      confirmDisable(){  // 确认封盘
        let data = {
          remark:this.closeMarks, // 人工封盘中的  备注
          id:this.open.id  // 开盘管理ID
        }
        if(!this.closeMarks){
            this.$message.warning('备注说明不能为空，请输入');
            return false;
        }    
        
        this.openManageObj.confirmClose = true;  
        mergeEndType(data).then(resdata => { // 人工封盘【确认按钮】    
            let res = resdata.data;
            if(res.success == 1) {
              this.$message.success('人工封盘成功')
              this.getTableData();
              this.openUserDialog = false;
            }else {
              this.$message.error(res.respMsg)
            }
            this.openManageObj.confirmClose = false; 
        })                       
      },
      filesuccessData(response, file, fileList){  // 文件上传成功时的钩子
        let resdata = response.content;     
        this.exportTableDataCount.effictiveNum = 0 ; 
        this.exportTableDataCount.ineffectiveNum = 0 ;
      
        if(response.success == 1){
            this.active = 2;   
            this.showUpload = false;  // 隐藏第一页
            this.showTable = true;  // 展示第二页
            this.shOwdownload = true;  // 导出按钮展示             
            this.exportTableList = resdata; // 解析成功后，后台返回的所有数据
            this.exportTableData = resdata.openingTemps; // 解析后的数据
            this.exportTableDataCount.effictiveNum = resdata.effictiveNum ; // 有效数据条数
            this.exportTableDataCount.ineffectiveNum = resdata.ineffectiveNum ; // 无效数据条数
            this.fileListbole = true;       
        } else{
            this.$message.error(response.respMsg+"  请重新选择文件")
            this.fileListbole = false;
            this.active = 1; 
            this.$refs.batchAddDialogUpload.clearFiles();  // 用来判断是不是上传成功，如果 不成功， upload组件的clearFiles调用方法 清空文件
        } 
        this.buttonLoading = false; // 按钮loading关闭       
      },
      fileErrorData(response, file, fileList){},
      batchAdd(h){ // 批量新增    
        this.dialogHeight = h;
        this.buttonLoading = false; // 按钮loading关闭
        this.judgeScree(this.dialogHeight);
        this.batchAddDialog = true;
        this.active = 1; // 打开弹框时，默认在步骤1
        this.showUpload = true;  // 展示第一页
        this.showTable = false;  // 隐藏第二页
        this.showOK = false;  // 隐藏第三页
        this.shOwdownload = false;  // 导出按钮展示
        this.fileList = [];
        this.exportTableData = []; // 清空解析页面表格的数据
        this.exportTableList = []; // 解析成功后，后台返回的所有数据
        this.exportTableDataCount={//d导入的有效数据条数
          effictiveNum:"", //有效数据
          ineffectiveNum:"", //无效数据
          content:"" // 返回总条数
        }
      },
      naxt(val,e,d){  // 下一步          
        if(this.active == 1){ // 第一页

          if(this.$refs.batchAddDialogUpload.uploadFiles.length>0){ 
            this.$refs.batchAddDialogUpload.submit(); 
            this.buttonLoading =true ; // 按钮loading打开
          }else{
            this.$message.warning('请选择文件');
            this.active = 1;
          }         
          return         
        }else if(this.active == 2){ // 第二页
            this.buttonLoading = false; // 按钮loading关闭
            this.exportTableDataCount.content = 0; // 清空返回总条数 数据         
            if(this.fileListbole&&this.exportTableDataCount.ineffectiveNum == 0){  // 成功上传文件后的布尔值             
            // 批量新增【下一步--导入】
             this.buttonLoading =true; // loading打开
             let batchNoData = this.exportTableList.batchNo; // 批次号
             saveBatch({batchNo:batchNoData}).then(response => { 
              const resData = response.data;
              if(resData.success == 1){
                this.exportTableDataCount.content = resData.content; // 返回总条数
                this.showUpload = false;  // 隐藏第一页
                this.showTable = false;  // 隐藏第二页
                this.showOK = true;  // 展示第三页
                this.shOwdownload = false;  // 导出按钮展示
                this.active = 3;
              }else{
                this.$message.error(resData.respMsg)
              }   
               this.buttonLoading =false; // loading关闭
            })
                
            }else {
              this.$message.warning('解析有无效数据，请导出修改后再上传');
              this.active = 2;   
            }
            return
        }else if(this.active == 3){ // 第三页
           
            this.batchAddDialog = false;
            return
        }
      },
      downloadButton(){  // 点击导出，下载模版   
        let batchNoData = this.exportTableList.batchNo; // 批次号
        // 批量新增【导出】
        downloadexport({batchNo:batchNoData}).then(response => {             
          const resData = response.data;
          
          if(resData.success == 1){
            //  批量新增【下载】 
            window.location.href = '/api/cp4/common/file/taskDownload?model=OPENING&taskId='+resData.content;
            this.batchAddDialog = false;
          }else{
            this.$message.warning(resData.respMsg)
          }    
        })  
      },
      download(){  // 点击下载模版   
         window.location.href = '/api/cp4/common/file/tempDownload?model=opening&fileName=lotteryGameTemp';
      },
      selectOption(e){
        this.$store.state.lc_openManage.kindBData  =[{ value: "",name: "请选择"}];
        if(e == null || e == undefined || e == "" || e == 0){
          this.$store.state.lc_openManage.manageSearch.disabledSecond = true;// 二级彩种名称是否可输入
          this.$store.state.lc_openManage.manageSearch.lotteryId = ''; // 二级彩种名称清空
        }else{
          this.$store.state.lc_openManage.manageSearch.disabledSecond = false;// 二级彩种名称是否可输入
          this.$store.state.lc_openManage.manageSearch.lotteryId = ''; // 二级彩种名称清空
          //  // 二级彩种接口调用数据
          lotteryDropdownList({parentId: e}).then(res => { // 初始化一级彩种列表    
              let resData = res.data;
              if(resData.success == 1) {
                let by = resData.content;
                by.forEach(element => {
                  this.$store.state.lc_openManage.kindBData.push(element);
                });  
                this.$store.state.lc_openManage.manageSearch.disabledSecond = false; // 二级彩种名称是否可输入
              }else {
                this.$message.error(resData.respMsg)
              }
          })        
        }     
      },
      overlayFile(files, fileList) {  // 覆盖文件
        if(this.$refs.batchAddDialogUpload&&this.$refs.batchAddDialogUpload.uploadFiles.length>1){
          this.$refs.batchAddDialogUpload.uploadFiles[0] = files;
          this.$refs.batchAddDialogUpload.uploadFiles.splice(1,1);
        }
      
      },
      beforeRemove(file, fileList) { // 删除文件时提示语展示
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      editInfo(h) { // 编辑信息
        let indexId = this.user_table_rowDataId;
        if (!indexId) {
          this.$message.warning('请选择一条数据');
          return false;
        }
        if(this.artificial.openingStatus != 0 || this.artificial.openingStatus != "0"){
           this.$message.warning('请选择已就绪，暂未允许投注的数据进行操作');
          return false; 
        }
          //  编辑信息接口--根据id查询数据 
        findById({id:this.artificial.id}).then(res => {
            let resData = res.data;
            if(resData.success == 1) {
              let artificial = resData.content; 
              this.edit = {
              socialOpenDate:artificial.govPrizeTime, // 官方开奖时间
              visonNum:artificial.playVersionCode, // 基础信息版本编号
              lotteryName:artificial.lotteryName, // 二级彩种名称
              openDate:artificial.gameNo, // 开奖期号：
              startBets:artificial.beginTime, // 投注开始时间
              endBets:artificial.endTime,  // 投注结束时间
              mark:artificial.remark,  // 备注
              status:"", // 盘口状态
              id:artificial.id, // 开盘管理ID
            }
            this.edit.status = artificial.openingStatus == 0 ?  '已就绪，暂未允许投注': artificial.openingStatus == 1 ? "已开盘，允许接受投注" : artificial.openingStatus == 2 ? "已封盘，停止接受投注" : artificial.openingStatus == 3 ? "已开奖，进入结算环节" :  "已关盘,结算处理完成"
            this.dialogHeight = h;
            this.judgeScree(this.dialogHeight);
            this.editUserDialog = true;
            }else {
              this.$message.error(resData.respMsg)
            }
        })  
      },
      confirmEdit(){  // 确认编辑           
        let data = {
          "id":this.edit.id, // 开盘管理ID
          "gameNo":this.edit.openDate, // 开奖期号
          "govPrizeTime":this.$refs.editSocialOpenDate.displayValue, //官方开奖时间  
          "beginTime":this.$refs.editStartBets.displayValue, // 投注开始时间
          "endTime":this.$refs.editEndBets.displayValue, //投注结束时间
          "remark":this.edit.mark, // 备注
        }
        if(!validOpenDate(this.edit.openDate)){
          this.$message.warning('请输入2-15个数字的开奖期号');
          return false;
        }else if(this.edit.openDate == ''){
          this.$message.warning('开奖期号不能为空，请输入');
          return false;
        }else if(this.edit.socialOpenDate == ''){
          this.$message.warning('官方开奖时间不能为空，请输入');
          return false;
        }else if(this.edit.startBets == ''){
          this.$message.warning('投注开始时间不能为空，请输入');
          return false;
        }else if(this.edit.endBets == ''){
          this.$message.warning('投注开始结束不能为空，请输入');
          return false;
        }else{ 
          
          this.openManageObj.confirmEdit = true;
          mergeEntity(data).then(response => {
          let resData = response.data
          if(resData.success == 1) {
            this.$message.success('修改成功')
            this.getTableData();
            this.editUserDialog = false;
          }else {
            this.$message.error(resData.respMsg)
          }
          this.openManageObj.confirmEdit = false;
        })        
        }
      },
      addUser(h) {  // 新增
        this.dialogHeight = h;
        this.judgeScree(this.dialogHeight);
          this.addOpen = { // 点击进来数据为清空状态
            socialOpenDate:'', //官方开奖时间：
            visonNum:"JCXX_001",// 基础信息版本编号：
            lotteryId:'', // 二级彩种名称ID
            lotteryName:'',// 二级彩种名称
            openDate:'',//开奖期号
            startBets:'',//投注开始时间
            endBets:'' //投注结束时间
          },
        this.addUserDialog = true;
      },
      confirmAdd(){  // 确认新增
        let govPrizeTime = this.$refs.addOpenSocialOpenDate.displayValue;//官方开奖时间
        let beginTime = this.$refs.addOpenStartBets.displayValue;// 投注开始时间
        let endTime = this.$refs.addOpenEndBets.displayValue;// 投注结束时间
        if(!this.addOpen.lotteryName){  // 二级彩种名称
            this.$message.warning("二级彩种不能为空，请选择");
            return false;
          }
          if(!this.addOpen.openDate){  // 开奖期号不能
            this.$message.warning("开奖期号不能为空，请输入");
            return false;
          }
          if(!govPrizeTime){  // 官方开奖时间
            this.$message.warning("官方开奖时间不能为空，请输入");
            return false;
          }
          if(!this.addOpen.lotteryName){  // 投注开始时间
            this.$message.warning("投注开始时间不能为空，请输入");
            return false;
          }
          if(!this.addOpen.lotteryName){  // 投注结束时间
            this.$message.warning("投注开始结束不能为空，请输入");
            return false;
          }
          if (!validFigure(this.addOpen.openDate)) {
          this.$message.warning("请输入2-15个数字的开奖期号");
          return false;
        }
     
        let data = {
          lotteryId:this.addOpen.lotteryId,  // 二级彩种Id--传到后台取lotteryId的ID,在前台页面取lotteryName显示Name
          gameNo:this.addOpen.openDate,  // 开奖期号
          govPrizeTime:govPrizeTime, //官方开奖时间
          beginTime:beginTime, // 投注开始时间
          endTime:endTime, // 投注结束时间
         }       
        // 新增【确定按钮】接口 
        this.openManageObj.confirmAdd = true;      
        persist(data).then(response => {         
          const resData = response.data
          if(resData.success == 1){
            this.$message.success('新增成功')
            this.getTableData();
            this.addUserDialog = false;
          }else{
            this.$message.warning(resData.respMsg)
          }    
          this.openManageObj.confirmAdd = false; 
        })
      },      
      permissionsdata() {  // 二级彩种树节点选中
        let data = this.$store.state.lc_openManage.openManageTreeData;
        this.addOpen.lotteryName = data.name;
        this.addOpen.lotteryId = data.id;
        this.diialogTreeInfo = false;
      },   
      showTree(){  // 显示树结构
     
        lotteryTree().then(res => { // 获取二级彩种树的数据
          let resData = res.data;
          if(resData.success == 1) {
            this.diialogTreeInfo = true;
            this.$store.state.lc_openManage.trees_AssigningUsers_Data = resData.content;
          }else {
            this.$message.error(resData.respMsg)
          }
        })
       
      },
      removeList(){
        let indexId = this.user_table_rowDataId;
        if (!indexId) {
          this.$message.warning('请选择一条数据');
          return false;
        }
        if(this.artificial.openingStatus != 0 || this.artificial.openingStatus != "0"){
           this.$message.warning('请选择已就绪，暂未允许投注的数据进行操作');
          return false; 
        }
        let data = {
             id:this.artificial.id //开盘管理记录Id
        }
       // 删除-接口
        removeById(data).then(response => {         
          const resData = response.data
          if(resData.success == 1){
            this.$message.success('删除成功')
            this.getTableData();
           // this.addUserDialog = false;
          }else{
            this.$message.warning(resData.respMsg)
          }    
        })
      },
      UpdateTheStatus(){ // 更新盘口状态
        let indexId = this.user_table_rowDataId;
        if (!indexId) {
          this.$message.warning('请选择一条数据');
          return false;
        }
        let data = {
             id:this.artificial.id //开盘管理记录Id
        }
        // 更新盘口状态-接口
        updateOpenStatus(data).then(response => {         
          const resData = response.data
          if(resData.success == 1){
            this.$message.success('更新成功')
            this.getTableData();
          }else{
            this.$message.warning(resData.respMsg)
          }    
        })

      },
      sortChange(column, prop, order){ // 排序列表
          if (column.order === 'descending') {
            this.$store.state.lc_openManage.manageSearch.sortField = column.prop
            this.$store.state.lc_openManage.manageSearch.sortType = 'desc'
          } else {
            this.$store.state.lc_openManage.manageSearch.sortField = column.prop
            this.$store.state.lc_openManage.manageSearch.sortType = 'asc'
          }
        this.getList();
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
              let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*2; // 当前日期减去一天
              let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
              let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
              if(this.$store.state.lc_openManage.manageSearch.socialOpenTime.length == 0){
                this.$store.state.lc_openManage.manageSearch.socialOpenTime = [state,edate];  
              }
            }else {
              this.$message.error(resData.respMsg)
            }
        })
      },
      checkDetail(h){ // 查看详情
        let indexId = this.user_table_rowDataId;
        if (!indexId) {
          this.$message.warning('请选择一条数据');
          return false;
        }
        this.dialogHeight = h;
        this.judgeScree(this.dialogHeight);
        this.viewDetails={
          parentLotteryName: this.artificial.parentLotteryName,//一级彩种名称
          lotteryName:this.artificial.lotteryName,//二级彩种名称
          gameNo:this.artificial.gameNo,//开奖期号
          beginTime:this.artificial.beginTime,//投注开间时间
          endTime:this.artificial.endTime,//投注结束时间
          govPrizeTime:this.artificial.govPrizeTime,//官方开间时间
          openingStatus:this.artificial.openingStatus,//当前盘口状态
          id:this.artificial.id 
        }
        let type = this.artificial.openingStatus;
        this.pankouStatus.forEach(element => {
          if(Number(element.value) == type){
            this.viewDetails.openingStatus =element.name
          }
        });
         // 查看详情步骤数据
        findList({openingId:this.artificial.id}).then(res => {
          let resData = res.data;    
          if(resData.success == 1) {
            this.viewDetailsTheDownData = resData.content;
             this.detailDialog = true;
              
          }
        })

      },
      Settlement(h){ // 人工结算
        let indexId = this.user_table_rowDataId;
        if (!indexId) {
          this.$message.warning('请选择一条数据');
          return false;
        }
      //  this.getServerTime();

      //  let settltTime = new Date(this.artificial.settltTime).getTime();  
      //  let nowtime = new Date(this.ServerTimes).getTime();
      //  let boer = (settltTime - nowtime ) >1000*60*10
      //  debugger
        // let nowtime = "2019-7-2 18:12:30";
        // let jieshu = "2019-07-2 17:30:00";
        //   now Date();



        // 1000*60*10
        // // // 加上判断弹框条件，条件为 #盘口状态是 ：已开奖，进入结算环节    #盘口结算状态 是结算中。 #当前服务器时间（GMT+8）  -  结算时间（最新的结算时间） 需要  大于等于10分钟
        // if(this.artificial.openingStatus != "3" && this.artificial.settleStatus != "1"){
        //   this.$message.warning('请选择盘口状态为“已开奖，进入结算环节”且盘口结算状态为“结算中”且当前服务时间（GMT+8） - 结算时间（最新的结算时间）需要大于等于10分钟的数据');
        //   return false;
        // }
        this.balanceData = {
          lotteryName:this.artificial.lotteryName, //二级彩种名称
          gameNo:this.artificial.gameNo, //开奖期号
        }
        this.dialogHeight = h;
        this.judgeScree(this.dialogHeight);
        this.balanceDialog = true;
      },
      clearing(){ // 人工结算确定
        this.openManageObj.clearingClose = true;
        confirmPrizeManualSettle({id:this.user_table_rowDataId}).then(res => { // 人工结算【confirmPrizeManualSettle】
          let resData = res.data;    
          if(resData.success == 1) {
            this.$message.success("结算成功");
            this.balanceDialog = false;
            this.getTableData(); // 结算成功后刷新列表
             this.openManageObj.clearingClose = false;
          }else{
            this.$message.error(resData.respMsg);
             this.openManageObj.clearingClose = false;
          }
        })      
      },
      updataOpeningStatus(){ // 更新盘口状态
        let indexId = this.user_table_rowDataId;
        if (!indexId) {
          this.$message.warning('请选择一条数据');
          return false;
        }
      updateOpenStatus({id:this.user_table_rowDataId}).then(res => { // 更新开盘信息
          let resData = res.data;    
          if(resData.success == 1) {
            this.$message.success("更新成功");
            this.getTableData(); // 结算成功后刷新列表
          }else{
            this.$message.error(resData.respMsg);
          }
        })
    
      }
    },
    created() {
      if(this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)){
        if(this.$store.getters.currentView == this.$route.name) {
          // 更新已关闭的菜单 数组状态
          let newalreadyClose = [] // 定义一个空数组存 过滤左侧点击的数据
          this.$store.getters.alreadyClose.forEach(value => {
            if(value != this.$store.getters.currentView){
              newalreadyClose.push(value)
            }
          })
          this.$store.dispatch("updataTabClose",newalreadyClose)

          this.$store.state.lc_openManage.allData = []
          this.$store.state.lc_openManage.allData_total = 0;
          this.$store.state.lc_openManage.page = 1;
          this.$store.state.lc_openManage.pageSize = 10;
          this.$store.state.lc_openManage.manageSearch={ // 查询条件
          disabledSecond:true, // 二级彩种名称是否可输入
          parentLotteryId: "", // 一级彩种ID
          lotteryId: "", // 二级彩种ID
          gameNo: "", // 开奖期号
          addType: "", // 新增类型
          openingStatus: "", // 盘口状态
          endType: "", // 封盘类型
          settleStatus: "", // 盘口结算状态
          socialOpenTime:[], // 开奖时间
          BettingStartTime:[], // 投注开始时间
          BettingEndTime:[], //投注结束时间
          sortType:"",//asc升序 desc降序
          sortField:""//排序字段govPrizeTime、beginTime、endTime
         }
          this.$store.dispatch('getOpenTableHeight', 2)
        }
     }else {
      if(this.$store.state.lc_openManage.allData.length > 0) {
        this.getTableData()
      }
    }
    this.getServerTime()
  },
  mounted() {
    this.$store.state.lc_openManage.manageSearch.disabledSecond = true;// 二级彩种名称是否可输入
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
     // 初始化下拉列表
    lotteryDropdownList({parentId: '0'}).then(res => { // 初始化一级彩种列表
      let resData = res.data;    
      if(resData.success == 1) {
        let by = resData.content;
        by.forEach(element => {
          this.kindAData.push(element);
        });     
      }
    })
    findByCode({code: "OPENING_ADDTYPE,OPENING_OPENINGSTATUS,OPENING_ENDTYPE,OPENING_SETTLESTATUS"}).then(res => {  // 初始化下拉列表
      let resData = res.data;
      if(resData.success == 1) {

          let by_addTypeArr = resData.content['OPENING_ADDTYPE']; // 初始化新增类型
          by_addTypeArr.forEach(element => {
            this.addTypeArr.push(element);
          });
          let by_pankouStatus = resData.content['OPENING_OPENINGSTATUS'];  // 初始化盘口状态
          by_pankouStatus.forEach(element => {
            this.pankouStatus.push(element);
          });
          let by_endTypeArr = resData.content['OPENING_ENDTYPE']; // 初始化封盘类型
          by_endTypeArr.forEach(element => {
            this.endTypeArr.push(element);
          });
          let by_settleStatusArr = resData.content['OPENING_SETTLESTATUS'];// 初始化盘口结算状态
          by_settleStatusArr.forEach(element => {
            this.settleStatusArr.push(element);
          });
      }
    })
  }
  }
</script>

<style lang="scss" >
.secondName.el-input{
  width:110px!important;
}
  .card{
    border: 1px solid gainsboro;
    padding: 5px;
    margin-top: 10px;
    p:first-child{
      width: 100%;
      border-bottom: 1px solid gainsboro;
    }
    p{
      width: 60%;
      margin: 0 auto;
      span{
        display: inline-block;
        border: 1px solid gainsboro;
        width: 20px;
        height: 20px;
        text-align: center;
        border-radius: 50%;
        line-height: 20px;
        margin: 0 5px 0 5px;
      }
      a{
        color:blue;
        margin: 0 15px 0 15px;
      }
    }
  }
  .bingoList-batchAddDialog-upload{
    border: solid 1px #ebeef5;
    height: 50%;
}
.bingoList-batchAddDialog-upload-title{
  border-bottom: solid 1px #ebeef5;
  height: 35px;
  line-height: 35px !important;
  text-align: center !important;
}
.bingoList-analysis-result{
  height: 35px;
  line-height: 35px !important;
  text-align: center !important;
  color: red;
}
.bingoList-analysis-resulta{
  height: 35px;
  line-height: 35px !important;
  text-align: center !important;
  color: #409eff;
}
.bingoList-batchAddDialog-upload-body{
    padding-left: 38%;
}
.upload-demo{
  width: 30%;
  float: left;
}
.to-channel-ok {
text-align: center;
padding-top: 22%;
}
.bingoList-download{
  color: blue;
  cursor:pointer;
}
.bingoList-upload-table{
  border: solid 1px #ebeef5;
  border-top: none;
  height: 100%;
}
.bingoList-upload-table .el-table__empty-block{
 height: 0px;
}
.bordercss{
    display: inline-block;
    border: 1px solid gainsboro;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 50%;
    line-height: 20px;
    margin: 0 5px 0 5px;
}
.explain{
   border: 1px solid gainsboro;
   padding: 10px;
    span{
      display: block;
      height: 30px;
      line-height: 30px;
      border: 1px solid gainsboro;
      text-align: center;
  }
  .mark{
    margin-top: 10px;
    border:1px solid gainsboro;
    padding: 10px;
    span{
      border:none;
      display:inline-block;
      width:70px;
      
    }
  }
}
.info-addOrEdit{
  .dialog-label-item{
    width:120px;
  }
  p{
    margin-left:-15px;
  }
  p:last-child{
    margin-top:-10px;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width:200px;
  }
}

.tree_diialogTreeInfo_css {
  width: 100%;
  height: 100%;
  float: left;
  overflow-y: auto;
  overflow-x: auto;
}

.info-checkDetail .detail-head{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #F5F7FA;
  padding: 10px;

}
.info-checkDetail .detail-head p{
  width: 33%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.info-checkDetail .bettingStatus .bettingStatus-content{
  width: 60%;
  margin: auto;
  height: 400px;
  padding-top: 15px;
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  padding-left: 14vW;
}
.info-checkDetail .bettingStatus .bettingStatus-content p{
  height: 30px;
  line-height: 30px;
}
.info-checkDetail .bettingStatus .bettingStatus-content p span{
  display: inline-block;
  width: 50px;
}
.info-checkDetail .bettingStatus .bettingStatus-content p span:first-child{
  font-weight: bold;
}
.info-checkDetail .bettingStatus .bettingStatus-content p span:nth-child(3){
  display: inline-block;
  width: 130px;
}
.info-checkDetail .bettingStatus .bettingStatus-content p span:last-child{
  display: inline-block;
  width: 130px;
}
.info-checkDetail .bettingStatus .bettingStatus-content p span:nth-child(2) em{
  border: 1px solid #606266;
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;

}
.info-checkDetail .bettingStatus .bettingStatus-content .detail-icon{
    width: 30px;
    height: 30px;
    margin-left: 44px;
}
.turnToMe{
  color: blue
}
</style>