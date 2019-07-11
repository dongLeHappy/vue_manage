<template>
  <!--  综合测试-->
  <div class="app-container zonghe-test">
    <!-- 操作栏 -->
    <el-form>
      <div class="heard-search-box">
        <ul class="heard-search">
          <li>
            <span class="rem_tit">一级彩种名称：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.parentLotteryId" value-key="name" placeholder="请选择" @change="changefirstLotteryArr" :disabled="disabledALL">
                  <el-option v-for="(item,index) in firstLotteryArr" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">一级玩法名称：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.MenuPlayRule" value-key="name" @change="getSecondVal" :disabled="disabledSecond" placeholder="请选择">
                  <el-option v-for="(item,index) in secondLotteryArr" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">二级玩法名称：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.playRuleId" value-key="name" :disabled="disabledplayRuleId" placeholder="请选择">
                  <el-option v-for="(item,index) in secondWanfaArr" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">系统计算结果：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.actualStatus" value-key="name"  :disabled="disabledALL" placeholder="请选择">
                  <el-option v-for="(item,index) in actualStatusArr" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">测试结果：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.assertStatus" value-key="name"  :disabled="disabledALL" placeholder="请选择">
                  <el-option v-for="(item,index) in assertStatusArr" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">测试时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="searchEdition.testTime"
                type="datetimerange"
                range-separator="至"
                start-placeholder="起始时间"
                end-placeholder="结束时间"
                 :clearable="false"
                @change="getDatetestTime"
                :disabled="disabledALL"
              ></el-date-picker>
            </span>
          </li>
          <li>
            <span class="rem_tit">创建时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="searchEdition.creationTime"
                type="datetimerange"
                range-separator="至"
                start-placeholder="起始时间"
                end-placeholder="结束时间"
                 :clearable="false"
                @change="getDatecreationTime"
                :disabled="disabledALL"
              ></el-date-picker>
            </span>
          </li>
        </ul>
      </div>
    </el-form>
      <div class="toggle-box">
        <el-form>
          <el-form-item class="operation-box">
            <el-button type="primary" icon="el-icon-search" size="mini" :disabled="disabledALL" @click="getTableList">查询</el-button>
            <el-button type="primary" size="mini" icon="el-icon-lc-reset" :disabled="disabledALL" @click="reset">重置</el-button>
            <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" :disabled="disabledALL" @click="testButton('addNewTest',680)">新增测试</el-button>
            <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" :disabled="disabledALL" @click="testButton('upDataNewTest',680)">复制测试</el-button>
            <el-button type="primary" size="mini" icon="el-icon-circle-plus" :disabled="disabledALL" @click="batchAdd(580) ">批量新增</el-button>
            <el-button type="primary" icon="el-icon-info" size="mini" :disabled="disabledALL" @click="checkDetail('checkDetail',659)">查看详情</el-button>
            <el-button type="primary" size="mini" icon="el-icon-lc-reset" :disabled="disabledALL" @click="derive">导出</el-button>
            
          </el-form-item>
          <!-- <el-button class="show-toggle" type="primary" @click="showToggle" :icon="showToggleIcon"></el-button> -->
        </el-form>
      </div>
    <!-- 数据表格 -->
    <div class="table-data">
      <el-table
        background
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        class="tableAutoToggle"
        highlight-current-row
        :height="currentPageSize*25 + 50 + 15"
        @current-change="handleCurrentChange"
        border
        v-loading="loading"
      >
        <el-table-column width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column align="center" label="序号" width="50" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="code" align="center" label="测试编号" width="150" show-overflow-tooltip></el-table-column>
        <el-table-column prop="vername" align="center" width="120" label="基础信息版本编号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="prizeNo" align="center" label="预设开奖号码" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="parentLotteryName" align="center" label="一级彩种名称" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="betOnValueMenu" align="center" label="一级玩法名称" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="betOnValue" align="center" label="二级玩法名称" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="betType" align="center" label="下注值(号码)" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column prop="betAmount" align="center" label="下注金额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="odds" align="center" label="赔率" show-overflow-tooltip></el-table-column>
        <el-table-column prop="expectedStatus" align="center" label="预设结果" width="80" show-overflow-tooltip></el-table-column>
        <el-table-column prop="actualStatus" align="center" label="系统计算结果" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column prop="expectedSettleAmount" align="center" label="预设结算金额" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column prop="actualSettleAmount" align="center" label="系统计算结算金额" width="130" show-overflow-tooltip></el-table-column>
        <el-table-column prop="expectedWinLossAmount" align="center" label="预设输赢金额" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column prop="actualWinLossAmount" align="center" label="系统计算输赢金额" width="130" show-overflow-tooltip></el-table-column>
        <el-table-column prop="assertStatus" align="center" label="测试结果 " width="100">
          <template slot-scope="scope">
            {{ scope.row.assertStatus == 0 ?  '一致': '不一致' }}
          </template>
        </el-table-column>
        <el-table-column prop="testType" align="center" label="测试类型 " width="100" show-overflow-tooltip>
          <!-- <template slot-scope="scope">
            {{ scope.row.terminal == 0 ?  '中奖': '不中奖' }}
          </template> -->
        </el-table-column>
        <el-table-column prop="operateTime" align="center" width="120" label="测试时间 " show-overflow-tooltip></el-table-column>
        <el-table-column prop="createdBy" align="center" width="100" label="创建人 " show-overflow-tooltip></el-table-column>
        <el-table-column prop="createdDate" align="center" width="120" label="创建时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="lastModifiedBy" align="center" width="100" label="修改人 " show-overflow-tooltip></el-table-column>
        <el-table-column prop="lastModifiedDate" align="center" label="修改时间" width="120" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="terraceUser_pagination">
      <el-pagination
        :page-sizes="[25, 50, 100, 200]"
        :current-page.sync="page"
        :page-size="size"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getList"
      >
      </el-pagination>
    </div>
    <!-- 查看详情-->
    <el-dialog :visible.sync="checkDetailDialog" width="400px" :title="title_Name"  :top="dialogMt">
      <div class="dialog-box checkDetail">
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>测试期号:
          </span>
          <el-input :disabled="checkFormDisable"  v-model="checkForm.testTime" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>基础版本信息:
          </span>
          <el-input :disabled="checkFormDisable" v-model="checkForm.basicVisonName" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>一级彩种名称:
          </span>
          <el-select :disabled="checkFormDisable" v-model="checkForm.firstEnableState" value-key="name" placeholder="全部">
            <el-option v-for="item in firstSelect" :key="item.id" :label="item.name"
                       :value="item.name"></el-option>
          </el-select>

        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>二级彩种名称:
          </span>
          <el-select :disabled="checkFormDisable" v-model="checkForm.secondEnableState" value-key="name" placeholder="全部">
            <el-option v-for="item in secondSelect" :key="item.id" :label="item.name"
                       :value="item.name"></el-option>
          </el-select>
          <!--          <el-input :disabled="checkFormDisable" v-model="checkForm.secondEnableState" style="width: 200px;"/>-->
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>玩法:
          </span>
          <el-select :disabled="checkFormDisable" v-model="checkForm.playRule" value-key="name" placeholder="全部">
            <!-- <el-option value=""></el-option> -->
          </el-select>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>下注值:
          </span>
          <el-input :disabled="checkFormDisable" v-model="checkForm.betsValue" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>设定开奖号码:
          </span>
          <el-input :disabled="checkFormDisable" v-model="checkForm.configOpenNum" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>预期结果:
          </span>
          <el-select :disabled="checkFormDisable" v-model="checkForm.estimateResult" value-key="name" placeholder="全部">
            <el-option v-for="item in testRes" :key="item.id" :label="item.name"
                       :value="item.name"></el-option>
          </el-select>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red"></span>测试结果:
          </span>
          <el-input :disabled="checkFormDisable" v-model="checkForm.testResult" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item" style="line-height:16px;">
            <span style="color:red">*</span>测试结果与预计<br/>结果是否一致:
          </span>
          <el-select :disabled="checkFormDisable" v-model="checkForm.isEstimateResult" value-key="name" placeholder="全部">
            <el-option v-for="item in isDifferent" :key="item.id" :label="item.name"
                       :value="item.name"></el-option>
          </el-select>
          <!--          <el-input :disabled="checkFormDisable" v-model="checkForm.isEstimateResult" style="width: 200px;"/>-->
        </p>
        <p v-show="checkFormDisable == false ? false : true ">
          <span class="dialog-label-item">
            <span style="color:red"></span>测试时间:
          </span>
          <el-input :disabled="checkFormDisable" v-model="checkForm.testTime" style="width: 200px;"/>
        </p>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="checkDetailDialog = false">关闭</el-button>
      </div>
    </el-dialog>
    <!-- 新增测试 -与-->
    <el-dialog :visible.sync="newAddDialog" width="1100px" class="newAddDialogname" :title="testTitle.testTitleName"  :top="dialogMt">
      <div class="dialog-box newaddtest">
        <div class="first-part">
          <div class="first-part-select"> <span>选择玩法规则</span> </div>
          <div class="first-part-set">  
                <p class="rem-con-p">
                  <span class="rem_tit">基础版本信息：</span>
                  <span class="rem_con">
                    <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                      <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                    </el-select>
                  </span> 
                </p> 
                <p class="rem-con-p"> 
                  <ul>
                    <li>
                        <span class="rem_tit">一级彩种名称：</span>
                        <span class="rem_cona">
                          <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                            <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                          </el-select>
                        </span>
                    </li>
                     <li>
                        <span class="rem_tit">一级玩法名称：</span>
                        <span class="rem_cona">
                          <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                            <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                          </el-select>
                        </span>
                    </li>
                     <li>
                        <span class="rem_tit">二级玩法名称：</span>
                        <span class="rem_cona">
                          <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                            <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                          </el-select>
                        </span>
                    </li>
                  </ul> 
                </p> 
                <p class="rem-con-p">
                 <span class="rem_tit">下注值（号码）：</span>
                  <span class="rem_con_setpaddingright">
                    <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                      <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                    </el-select>
                  </span> 
                  <span class="rem_con_setpaddingright">
                    <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                      <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                    </el-select>
                  </span>
                  <span class="rem_con_setpaddingright">
                    <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                      <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                    </el-select>
                  </span>
                </p> 
                <el-radio-group v-model="radioodds">
                  <p class="rem-con-p">
                    <el-radio :label="3">系统赔率：</el-radio>
                    <span class="rem_con_setinput">
                      <el-input v-model="newAddRuleForm.percent" placeholder="请输入赔率" maxlength="15"></el-input>
                    </span>
                    <span class="rem_tit" style="width:70px !important;">赔率值：</span>
                    <span class="rem_con_setinput">
                      <el-input v-model="newAddRuleForm.percent" :disabled="true" placeholder="请输入赔率" maxlength="15"></el-input>
                    </span>
                  </p> 
                  <p class="rem-con-p">
                    <el-radio :label="1">人工赔率：</el-radio>
                    <span class="rem_con_setinput">
                      <el-input v-model="newAddRuleForm.percent" placeholder="请输入赔率" maxlength="15"></el-input>
                    </span>
                  </p> 
                </el-radio-group>             
                <p class="rem-con-p">
                  <span class="rem_tit">下注金额：</span>
                  <span class="rem_con_setinput">
                    <el-input v-model="newAddRuleForm.percent" placeholder="请输入赔率" maxlength="15"></el-input>
                  </span>
                </p> 
                <p class="rem-con-p">
                  <span class="rem_tit">预设开奖号码：</span>
                  <span class="rem_con_inputcon">
                    <el-input v-model="newAddRuleForm.percent" placeholder="请输入赔率" maxlength="15"></el-input>
                  </span>
                </p> 
          </div>
        </div>
        <div class="second-part">
          <div class="second-part-select"> <span>预设结果</span> </div>
          <div class="second-part-set">
              <p class="rem-con-p"> 
                  <ul>
                    <li>
                        <span class="rem_tit">结果：</span>
                        <span class="rem_cona">
                          <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                            <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                          </el-select>
                        </span>
                    </li>
                     <li>
                        <span class="rem_tit">结算金额：</span>
                        <span class="rem_cona">
                          <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                            <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                          </el-select>
                        </span>
                    </li>
                     <li>
                        <span class="rem_tit">输赢金额：</span>
                        <span class="rem_cona">
                          <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                            <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                          </el-select>
                        </span>
                    </li>
                   <span class="rombutton">
                       <el-button type="primary" size="mini">保存该测试案例</el-button>
                    </span>
                  </ul> 
                </p> 
          </div>
        </div>
        <div class="third-part">
          <div class="third-part-select"> <span>系统计算结果</span> </div>
          <div class="third-part-set">
              <p class="rem-con-p"> 
                  <ul>
                    <li>
                        <span class="rem_tit">结果：</span>
                        <span class="rem_cona">
                          <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                            <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                          </el-select>
                        </span>
                    </li>
                     <li>
                        <span class="rem_tit">结算金额：</span>
                        <span class="rem_cona">
                          <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                            <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                          </el-select>
                        </span>
                    </li>
                     <li>
                        <span class="rem_tit">输赢金额：</span>
                        <span class="rem_cona">
                          <el-select v-model="newAddRuleForm.basicVisonInfo" placeholder="请选择">
                            <el-option v-for="(item,index) in testRes" :key="index" :label="item.name" :value="item.value"></el-option>
                          </el-select>
                        </span>
                    </li>
                      <span class="rombutton">
                       <el-button type="primary" size="mini">系统试算</el-button>
                    </span>
                  </ul> 
                </p> 
          </div>
        </div>
         <div class="foots-part">
            <div> <span>测试结果：</span> </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="newAddDialog = false">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { lotteryDropdownList,findByCode,findByParentLotteryId,findByMenuPlayRuleId } from '@/api/select'; // 所有的下拉框中的数据接口
  import { findPage} from '@/api/lotteryCore/lc_testValueManage/lc_comprehensiveTest'; // 所有的下拉框中的数据接口
  export default {
    name: 'sendMsg',
    data(){
      return{
        disabledALL: false,
        loading: false, // Loading 加载
        disabledSecond:true,  //禁用一级玩法名称
        disabledplayRuleId:true,  //禁用二级玩法名称
        searchEdition: { // 查询条件
          parentLotteryId: '', // 一级彩种名称
          MenuPlayRule: '', // 一级玩法名称
          playRuleId: '', // 二级玩法名称
          actualStatus: '', // 系统计算结果
          assertStatus: '', // 测试结果
          testTime:[], // 测试时间
          creationTime:[], // 创建时间
        },
         firstLotteryArr:[  // 一级彩种下拉选择数据
          { value: "",name: "请选择"}
        ],
        secondLotteryArr: [{ value: "",name: "请选择"}], // 一级玩法名称-下拉选择数据
        secondWanfaArr: [{ value: "",name: "请选择"}], // 二级玩法名称 - 下拉选择数据
        actualStatusArr: [{ value: "",name: "请选择"}], // 系统计算结果 - 下拉选择数据
        assertStatusArr: [{ value: "",name: "请选择"}], // 测试结果结果 - 下拉选择数据
        rowData:"", // 当前行的数据
        table_id:"", // 当前行的id
        checkDetailDialog:false, // 查看详情弹框
        testTitle:{ // 新增测试与复制测试按钮
           testTitleName:"", // Tatle名字
        },
        radioodds:'', //  新增测试与复制测试弹框中选择玩法规则的 赔率监听





        testForm:{  // 搜索栏表单
          testTime:"",
          testOrEstimate:"",
          estimateResult:"",
          testResult:"",
          ruleEnable:"",
          basicVisonName:"",
          testOpenTime:"",
          betsValue:"",
          SecondEnableState:"",
          firstEnableState:""
        },
        searchEdition: { // 查询条件
          parentLotteryId: '', // 一级彩种名称
          MenuPlayRule: '', // 一级玩法名称
          playRuleId: '', // 二级玩法名称
          actualStatus: '', // 系统计算结果
          assertStatus: '', // 测试结果
          testTime:[], // 测试时间
          creationTime:[], // 创建时间
        },
        checkForm:{  // 查看详情表单
          estimateResult:"",
          isEstimateResult:"",
          testResult:"",
          openNum:"",
          betsValue:"",
          playRule:"",
          configOpenNum:"",
          secondEnableState:"",
          firstEnableState:"",
          basicVisonName:"",
          testTime:""
        },
        newAddRuleForm:{ // 新增测试 - 玩法规则
          testDateNum:"",
          basicVisonInfo:"",
          firstLottery:"",
          secondLottery:"",
          secondRule:"",
          betsValue:"",
          percent:"",
          betsMount:"",
        },
        newAddSecondLottery:[],
        newAddFirstLottery:[],
        newAddsecond:true,
        newAddRule:true,
        newAddDateNum:true,
        
        firstSelect: [
          {id: "1", name: "香港彩",isActive:true},
          {id: "2", name: "时时彩",isActive:false},
          {id: "3", name: "快三",isActive:false},
          {id: "4", name: "11选5",isActive:false},
          {id: "5", name: "PK10",isActive:false},
          {id: "6", name: "快乐十分",isActive:false},
        ],
        secondSelect: [
          {id: "1", name: "香港六合彩"},
          {id: "2", name: "重庆时时彩"},
          {id: "3", name: "江苏快三"},
          {id: "4", name: "广东11选5"},
          {id: "5", name: "北京赛车"},
          {id: "6", name: "天津快乐十分"},
        ],
        ruleEnable:[
          {id: 0, name: "请选择",value:"0"},
          {id: 1, name: "围骰",value:"1"},
          {id: 2, name: "正码",value:"2"},
          {id: 3, name: "第一球",value:"3"},
          {id: 4, name: "冠军",value:"4"},
        ],
        testRes:[
          {id:0,name:"请选择"},
          {id:1,name:"下注成功"},
          {id:2,name:"下注失败"},
        ],
        isDifferent:[
          {id:0,name:"全部"},
          {id:1,name:"是"},
          {id:2,name:"否"},
        ],       

        
        previewDialog:false,
        titleName:"",
        data_name:'',
       
        showOrHidden:false,
        checkFormDisable:false,
        title_Name:"",
        dialogMt:this.dialogMt, // 弹出框上边距
        dialogData:[],
        newAddDialog:false,  // 新增测试弹框
        backColor1:false,
        backColor2:false,
      }
    },
    computed:{
      ...mapState({
        tableData:state => state.lc_comprehensiveTest.allData,
        total:state => state.lc_comprehensiveTest.allData_total,
        currentPageSize: state => state.lc_comprehensiveTest.currentPageSize
      }),
      size: {
        get() {
          return this.$store.state.lc_comprehensiveTest.pageSize;
        },
        set(item) {
          return  item;
        }
      },
      page: {
        get() {
          return this.$store.state.lc_comprehensiveTest.page;
        },
        set(item) {
          return  item;
        }
      }
    },
    methods: {
      getTableList(){
        this.getList()
      },
      getList(val){ // 查询/获取表格数据     
        this.rowData=""; // 当前行的数据
        this.table_id=""; // 当前行的id
        if(!val){
          val = 1
        }        
        this.$store.dispatch("getValidatePage",parseInt(val));    
        let data = {
            "parentLotteryId":this.searchEdition.parentLotteryId,//一级彩种ID
            "MenuPlayRule":this.searchEdition.MenuPlayRule,//一级玩法ID
            "playRuleId":this.searchEdition.playRuleId,//一级彩种ID
            "actualStatus":this.searchEdition.actualStatus,//系统计算结果
            "assertStatus":this.searchEdition.assertStatus,// 测试结果
            "operateTimeBegin":this.searchEdition.testTime[0],//测试时间起
            "operateTimeEnd":this.searchEdition.testTime[1],//测试时间止
             "createdDateBegin":"",//创建时间起
            "createdDateEnd":"",//创建时间止
            // "createdDateBegin":this.searchEdition.creationTime[0],//创建时间起
            // "createdDateEnd":this.searchEdition.creationTime[1],//创建时间止
            "page":val-1,//第几页
            "size":this.size //每页显示几条
        }
        this.disabledALL = true;
        this.loading = true; // 请求接口时loading启用
        // this.disabledSecond = true; // 强制为正 
        // 查询接口
        findPage(data).then(resdata => {           
            let res = resdata.data;
            if(res.success == 1) {
              this.$store.dispatch("getValidateInfo",res.content) // 历史开奖记录查询列表【条件查询】
              let currentPageSize = 2;   
              if(res.content.content.length > 0) {
                currentPageSize = res.content.content.length;
              }else {
                currentPageSize = 2;
              }            
              // if(!this.formInline.kindA) { // 二级彩种名称是否可编辑
              //   this.disabledSecond = true;
              // }else{
              //   this.disabledSecond = false;
              // }
              this.$store.dispatch("getValidateTableHeight", currentPageSize); // 设置表格高度
            }else {
              this.$message.error(res.respMsg)
            }
            this.loading = false; // 接口返回数据时，loading禁用
            this.disabledALL=false; // 控制全局不可编辑
        }) 
      },
      handleCurrentChange(val){ // 表格行点击事件
        if(val){
          this.rowData = val;
          this.table_id = val.id;
        }
      },
      handleSizeChange(val){ // 分页
        this.$store.dispatch('getValidatePageSize', val);
        this.getList();
      },
      reset(){ // 重置
        this.disabledSecond=true,  //禁用二级彩种
        this.searchEdition= { // 查询条件
          parentLotteryId: '', // 一级彩种名称
          MenuPlayRule: '', // 一级玩法名称
          playRuleId: '', // 二级玩法名称
          actualStatus: '', // 系统计算结果
          assertStatus: '', // 测试结果
          testTime:[], // 测试时间
          creationTime:[], // 创建时间
        }
        // 创建时间初始化 默认展示三天
        let setstate = new Date().getTime()-24*60*60*1000*2; // 当前日期减去一天
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
        let edate =  this.dateForm(new Date()).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.searchEdition.creationTime = [state,edate] 
      },
      checkDetail(val,h){  // 查看详细 
        if(val == 'checkDetail'){
          this.title_Name = "查看详情";
          let indexId = this.table_id;
          if (!indexId) {
            this.$message.warning('请选择一条数据!');
            return false;
          }
          this.dialogHeight = h;
          this.judgeScree(this.dialogHeight);
          this.checkFormDisable = true;
          this.checkForm.configOpenNum = this.rowData.winNum;
          this.checkForm.estimateResult = this.rowData.estimateTestRes = 0 ? "中奖" : "不中奖";
          this.checkForm.isEstimateResult = this.rowData.isestimateTestRes = 0 ? "是" :"否";
          this.checkForm.testResult = this.rowData.testValue = 0 ? "中奖" : "不中奖";
          this.checkForm.openNum = this.rowData.testTime;
          this.checkForm.betsValue = this.rowData.betsValue ;
          this.checkForm.playRule = this.rowData.playRule;
          this.checkForm.secondEnableState = this.rowData.firstLottery;
          this.checkForm.firstEnableState = this.rowData.secondLottery;
          this.checkForm.basicVisonName = this.rowData.basicVisonName;
          this.checkForm.testTime = this.rowData.testTime;
        }
        this.checkDetailDialog = true;
      },
      testButton(val,h) { // 新增测试 与 复制测试弹框
        // <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" :disabled="disabledALL" @click="testButton('addNewTest',522)">新增测试</el-button>
        //     <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" :disabled="disabledALL" @click="testButton('upDataNewTest',522)">复制测试</el-button>
        //   testTitle:{ // 新增测试与复制测试按钮
        //    testTitleName:"", // Tatle名字
        // },
       
        this.dialogHeight = h;
        this.judgeScree(this.dialogHeight);
        if(val == "addNewTest"){ // 新增测试
          this.testTitle.testTitleName = "新增测试(测试案例编号暂未生成)"
        }else if(val == "upDataNewTest"){ // 复制测试
          this.testTitle.testTitleName = "复制测试(测试案例编号暂未生成)" 
        }
        this.newAddDialog = true;
        // // 初始化一级彩种接口调用数据 
        // this.$store.dispatch("getPrimaryColorKind", {}).then(res => {
        //   this.newAddFirstLottery.push(...res.data) 
        // })
      },
      batchAdd(){ //批量新增

      },
      derive(){ //导出
          // window.location.href = 'api/cp4/opening/openingTemp/template';
      },
      changefirstLotteryArr(val){ // 选中一级彩种名称 请求一级玩法名称
        this.secondLotteryArr=[{ value: "",name: "请选择"}]; // 一级玩法名称-下拉选择数据
        this.searchEdition.MenuPlayRule = "";// 一级玩法名称
        // disabledSecond:true,  //禁用一级玩法名称
        // disabledplayRuleId:true,  //禁用二级玩法名称   
        if(val == null || val == undefined || val == "" || val == 0){
          this.disabledSecond = true;// 禁用一级玩法名称
          this.disabledplayRuleId = true;// 禁用二级玩法名称         
          this.searchEdition.playRuleId = ""// 二级玩法名称
        }else{
          this.disabledSecond = false;
          findByParentLotteryId({parentLotteryId:val}).then(res => { // 初始化一级玩法名称列表
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.secondLotteryArr.push(element);
              });
            }
          }) 
        }
       
      },
      getSecondVal(val){ // 选中一级玩法名称 请求二级玩法名称
        this.secondWanfaArr=[{ value: "",name: "请选择"}]; // 二级玩法名称 - 下拉选择数据
         this.searchEdition.playRuleId = "";// 一级玩法名称
        if(val == null || val == undefined || val == "" || val == 0){
          this.disabledplayRuleId = true;// 禁用二级玩法名称   
        }else{
          this.disabledplayRuleId = false;// 禁用二级玩法名称 
          findByMenuPlayRuleId({menuPlayRuleId:val}).then(res => { // 初始化二级玩法名称列表
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.secondWanfaArr.push(element);
              });
            }
          })
        }
      },
       getDatetestTime(val){ // 获取时间控件方法
        if(val){
            this.searchEdition.testTime[0] = this.dateForm(this.searchEdition.testTime[0]);
            this.searchEdition.testTime[1] = this.dateForm(this.searchEdition.testTime[1]).split(' ')[0] + ' 23:59:59';
            if(this.searchEdition.testTime[0] == this.searchEdition.testTime[1]) {
              this.searchEdition.testTime[1] = this.searchEdition.testTime[1].split(' ')[0] + ' 23:59:59'
            }
          }else{        
            this.searchEdition.testTime = [] 
          }
       },  
      getDatecreationTime(val){ // 获取时间控件方法
        if(val){
          this.searchEdition.creationTime[0] = this.dateForm(this.searchEdition.creationTime[0]);
          this.searchEdition.creationTime[1] = this.dateForm(this.searchEdition.creationTime[1]).split(' ')[0] + ' 23:59:59';
          if(this.searchEdition.creationTime[0] == this.searchEdition.creationTime[1]) {
            this.searchEdition.creationTime[1] = this.searchEdition.creationTime[1].split(' ')[0] + ' 23:59:59'
          }
        }else{
          let setstate = new Date().getTime()-24*60*60*1000*2; // 当前日期减去一天
          let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
          let edate =  this.dateForm(new Date()).split(' ')[0] + ' 23:59:59';   // 结束时间
          this.searchEdition.creationTime = [state,edate] 
        }    
      },
      judgeScree(val) { // 判断屏幕大小进行操作
        let a = document.body.offsetHeight - val;
        this.dialogMt = a / 2 + 'px';
      },
      chooseYes() {
        // this.backColor1 = true;
        // this.backColor2 = false;
      },
      chooseNo() {
        // this.backColor1 = false;
        // this.backColor2 = true;
      },
    },
    created() {
      // if(this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)){
      //   if(this.$store.getters.currentView == this.$route.name) {
      //     // 更新已关闭的菜单 数组状态
      //     let newalreadyClose = [] // 定义一个空数组存 过滤左侧点击的数据
      //     this.$store.getters.alreadyClose.forEach(value => {
      //       if(value != this.$store.getters.currentView){
      //         newalreadyClose.push(value)
      //       }
      //     })
      //     this.$store.dispatch("updataTabClose",newalreadyClose)

      //     this.$store.state.lc_comprehensiveTest.allData = []
      //     this.$store.state.lc_comprehensiveTest.allData_total = 0;
      //     this.$store.state.lc_comprehensiveTest.page = 1;
      //     this.$store.state.lc_comprehensiveTest.pageSize = 10;
      //     this.$store.dispatch('getTestValueTableHeight', 2)
      //   }
      // }else {
      //   if(this.$store.state.lc_comprehensiveTest.allData.length > 0) {
      //     this.getList()
      //   }
      // }
    },
    mounted() {
      this.reset(); // 初始化数据     
      this.$nextTick(() => {
        this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
      })
      window.onresize = () =>{
        this.judgeScree(this.dialogHeight);
      };
            // 初始化下拉列表
      lotteryDropdownList({parentId:'0'}).then(res => { // 初始化一级彩种列表
        let resData = res.data;
        if(resData.success == 1) {
            let by = resData.content;
            by.forEach(element => {
              this.firstLotteryArr.push(element);
            });
        }
      })
        findByCode({code: "ORDER_WINLOSSSTATUS,TESTCASE_ASSERTSTATUS"}).then(res => {  // 初始化下拉列表
          let resData = res.data;
          if(resData.success == 1) {
            let by_actualStatusArr = resData.content['ORDER_WINLOSSSTATUS']; // 系统计算结果 - 下拉选择数据
            let by_assertStatusArr = resData.content['TESTCASE_ASSERTSTATUS'];// 测试结果结果 - 下拉选择数据
              by_actualStatusArr.forEach(element => {
                  this.actualStatusArr.push(element);
              });
              by_assertStatusArr.forEach(element => {
                  this.assertStatusArr.push(element);
              });  
          }
        })
    }
  }
</script>
<style lang="scss">
@import '@/styles/tableFold.scss';
.zonghe-test{
  .tableAutoToggle { 
    max-height: calc(100vh - 330px);
    overflow: auto;
  }
} 
@media screen and (max-width: 1460px) { 
  .zonghe-test {
    .tableAutoToggle { 
      max-height: calc(100vh - 330px)!important;
      overflow: auto;
    }
    .tableAuto175 {
      // 查询条件折叠时 表格高度
      max-height: calc(100vh - 175px) !important;
      overflow: auto;
    }
  }
}
  .checkDetail{
    p{
      margin-left: -60px;
    }
    .dialog-label-item{
      width: 160px;
    }
    .el-input{
      width:200px!important;
    }
    .el-select{
      width:200px;
    }
    .el-input .el-input--suffix{
      width:200px;
    }
    .el-select .el-input .el-input__inner{
      width:200px;
    }
  }

.backColor{
  background-color: gainsboro;
}
 .newAddDialogname .el-dialog__body{
         padding: 3px !important;
}
.newaddtest{
  .first-part{
    margin: 7px;
    display: flex;
    flex-direction: row;
    padding: 5px 0 15px 0;
    height: auto;
    border: 1px solid gainsboro; 
    .first-part-select{
       float: left;     
       width: 18%;
       padding-top:9.5%;
      span{
        display: inline-block;
        width: 120px;
        margin-left: 13px;
        border: 1px solid gainsboro;
        text-align: center;
        line-height: 30px;
      } 
    }
    .first-part-set{
      height: 100%;
      float: left;
      width: 80%;
      .rem-con-p{
        width: 100%;
        height: 35px !important;
        line-height: 35px !important;
        display: flex;
        ul{
           width: 100%;
          li{
            float: left;
            width: 26%;
            text-align: right;
          }
        }
        .rem_tit{
          width: 105px !important;
          text-align: right;
        }
      .rem_con_setpaddingright{
        padding-right: 7px;
      }
      .el-select .el-input{
        width: 120px!important;
      }
      .rem_con_setinput{
        .el-input{
          width: 120px!important;
        }
      }
      .rem_con_inputcon{
         .el-input{
          width: 280px!important;
        }
      }
     
      label{
        line-height: 35px;
        width: 105px;
        text-align: right;
        
      }
      }
    }

  }
  .second-part{
    display: flex;
    flex-direction: row;
    border: 1px solid gainsboro;
    padding: 5px 0 5px 0;
    margin: 7px;
    .second-part-select{
       float: left;     
       width: 18%;
       height: 50px;
       line-height: 50px;
      span{
        display: inline-block;
        width: 120px;
        margin-left: 13px;
        border: 1px solid gainsboro;
        text-align: center;
        line-height: 30px;
      }
    }
    .second-part-set{
       height: 100%;
      float: left;
      width: 80%;
      .rem-con-p{
        width: 100%;
        height: 50px !important;
        line-height: 50px !important;
        display: flex;
        ul{
           width: 100%;
          li{
            float: left;
            width: 26%;
            text-align: right;
          }
        }
        .rem_tit{
          width: 105px !important;
          text-align: right;
        }
  
      .el-select .el-input{
        width: 120px!important;
      }
      label{
        line-height: 35px;
        width: 105px;
        text-align: right;
        
      }
    }

    }
  }
  .third-part{
    display: flex;
    flex-direction: row;
    border: 1px solid gainsboro;
    padding: 5px 0 5px 0;
    margin: 7px;
    .third-part-select{
       float: left;     
       width: 18%;
       height: 50px;
       line-height: 50px;
      span{
        display: inline-block;
        width: 120px;
        margin-left: 13px;
        border: 1px solid gainsboro;
        text-align: center;
        line-height: 30px;
      }
    }
 .third-part-set{
       height: 100%;
      float: left;
      width: 80%;
      .rem-con-p{
        width: 100%;
        height: 50px !important;
        line-height: 50px !important;
        display: flex;
        ul{
           width: 100%;
          li{
            float: left;
            width: 26%;
            text-align: right;
          }
        }
        .rem_tit{
          width: 105px !important;
          text-align: right;
        }
      // .rem_con_setpaddingright{
      //   padding-right: 7px;
      // }
      .el-select .el-input{
        width: 120px!important;
      }
      label{
        line-height: 35px;
        width: 105px;
        text-align: right;
        
      }
    }
  }  
}
  .foots-part{
        height: 100px;
        line-height: 100px;
        div{
          text-align: center;
        }
  }
  .rombutton{
    width: 185px;display: inline-block;text-align: right;
    button{
      width: 120px;
    }
  }
}
</style>
