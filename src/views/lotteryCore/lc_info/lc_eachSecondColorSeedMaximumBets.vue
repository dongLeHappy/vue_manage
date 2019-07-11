<template>
  <div class="app-container each-percent">
    <!--各二级彩种投注上限版本管理 搜索栏 -->
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">二级彩种投注上限版本号：</span>
          <span class="rem_con">
            <el-input v-model="everyPercentSearch.secondPercentVison" :disabled="disabledALL" placeholder="" maxlength="15"></el-input>
          </span>
        </li>
        <li>
            <span class="rem_tit">一级彩种名称：</span>
            <span class="rem_con">
                <el-select v-model="everyPercentSearch.firstLevel" :disabled="disabledALL" @change="selectOption" value-key="name" placeholder="请选择">
                  <el-option v-for="(item,index) in kindAData" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">二级彩种名称：</span>
            <span class="rem_con">
                <el-select v-model="everyPercentSearch.secondLevel" :disabled="everyPercentSearch.disabledSecond" value-key="name" placeholder="请选择">
                  <el-option v-for="(item,index) in kindBData" :key="index" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="getList">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="resetTable">
            <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="newAdd('新增',350)">
          <svg-icon icon-class="xinzeng1" />
          新增</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="newAdd('编辑说明',350)">
          <svg-icon icon-class="bianji" />
          编辑说明</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="editAndViewDetails('edit',640)">
          <svg-icon icon-class="weibiaoti24" />
          设置上限</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="editAndViewDetails('check',640)">
          <svg-icon icon-class="chakanxiangqing" />
          查看详情</el-button>
      </el-form-item>
    </el-form>
    <!-- 数据表格 -->
    <div class="table-content" >
      <el-table
        style="width: 100%; "
        border
        class="tableAuto216"
        highlight-current-row
        ref="multipleTable"
        :data="allData"
        v-loading="loading"
        :height="currentPageSize*25 + 60"
        @current-change="handleCurrentChange"
      >
        <el-table-column lable show-overflow-tooltip width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="everySeconTableId" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column  align="center" label="序号" width="55" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * size + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="code" align="center" label="投注上限版本编号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="quotaVer" align="center" width="200" label="二级彩种投注上限版本号"  show-overflow-tooltip></el-table-column>
        <el-table-column prop="parentLotteryName" align="center" label="一级彩种名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="lotteryName" align="center" label="二级彩种名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="description" align="center" label="版本说明" show-overflow-tooltip></el-table-column>
        <el-table-column prop="createdBy" align="center" label="创建人" show-overflow-tooltip></el-table-column>
        <el-table-column prop="createdDate" align="center" label="创建时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="lastModifiedBy" align="center" label="修改人" show-overflow-tooltip></el-table-column>
        <el-table-column prop="lastModifiedDate" align="center" label="修改时间" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="terraceUser_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="size"
        background
        :total="allDataCount"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="searchTableData"
      >
      </el-pagination>
    </div>
    <!-- 新增 -->
    <el-dialog :visible.sync="addeverySEcondtDialog" :title="add_percentVison.titleName" width="420px" :top="dialogMt" :close-on-click-modal="false">
      <!-- <div><span><span/></div> -->
      <div class="dialog-box">
        <p v-if="add_percentVison.titleName == '新增'">
            <span style="font-weight:bold;margin-left: 28px;">选择需要添加投注上限版本的彩种</span>
        </p>
        <p v-if="add_percentVison.titleName != '新增'">
          <span class="dialog-label-item addPercent-each" style="width:145px;margin-left: -2px !important;">
           二级彩种投注上限版本号：
          </span>
          <el-input style="width: 200px;" :disabled="true" v-model="add_percentVison.secondPercentVisonNum" />
        </p>

        <p v-if="add_percentVison.titleName == '新增'">
          <span class="dialog-label-item addPercent-each">
            <span class="required ">*</span>一级彩种名称：
          </span>
          <el-select v-model="add_percentVison.firstLottery" @change="dialogSelectOption" style="width: 200px;" value-key="name" placeholder="请选择">
            <el-option v-for="(item,index) in dialogFirst" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
        </p>
        <p v-if="add_percentVison.titleName != '新增'">
          <span class="dialog-label-item addPercent-each">
            一级彩种名称：
          </span>
          <el-input style="width: 200px;" :disabled="true" v-model="add_percentVison.firstLottery" />         
        </p>

        <p v-if="add_percentVison.titleName == '新增'">
          <span class="dialog-label-item visonstate-each">
            <span class="required">*</span>二级彩种名称：
          </span>
          <el-select style="width: 200px;" v-model="add_percentVison.secondLottery" :disabled="dialogDisableSecond" value-key="name" placeholder="请选择">
            <el-option v-for="(item,index) in dialogSecond" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
        </p>
         <p v-if="add_percentVison.titleName != '新增'">
          <span class="dialog-label-item addPercent-each">
           二级彩种名称：
          </span>
          <el-input style="width: 200px;" :disabled="true" v-model="add_percentVison.secondLottery" />         
        </p>

        <p>
          <span class="dialog-label-item addPercent-each">
            <span class="required">*</span>版本说明：
          </span>
          <el-input style="width: 200px;" v-model="add_percentVison.visonMark" type="textarea"/>
        </p>
        <p v-if="add_percentVison.titleName == '新增'" style="color:red;">注：版本新增成功后，该版本默认取该二级彩种A版本配置的投注上限</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmAddLotteryPercent(add_percentVison.titleName)" size="mini" :loading="buttonLoading">确 定</el-button>
        <el-button @click="addeverySEcondtDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑设置上限 与查看详情 -->
    <el-dialog :visible.sync="editPercentLotteryDialog" :title="edit_View_Details.titleName" class="editPercentLottery-setheight" width="850px" :top="dialogMt" :close-on-click-modal="false">
      <div class="percent-head">       
        <span>二级彩种投注上限版本号：{{edit_View_Details.quotaVer}}</span>
        <span>一级彩种名称：{{edit_View_Details.parentLotteryName}}</span>
        <span>二级彩种名称：{{edit_View_Details.lotteryName}}</span>
      </div>
      <div class="pencent-content">
        <!-- <PricePanagement :thisLottery="thisLottery" :getlotteryOddsVerId="edit_View_Details.lotteryOddsVerId"></PricePanagement> -->
        <PankouLimit  @seteditPercentLotteryDialog="myEventChange" :thisLottery="edit_View_Details.titleName" :getlotteryOddsVerId="edit_View_Details.lotteryOddsVerId"></PankouLimit>
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="editPercentLotteryDialog = false" size="mini">取 消</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>
<script>

import { mapState } from 'vuex'

// import {conFromEditMark,
// findPage,persistVerDetail,findByLotteryId,findPlayRuleList
// } from "@/api/lotteryCore/lc_percentConfig/lc_everySecondLotteryManage";

import {findPage,persistEntity,mergeDescription,findDetail} from "@/api/lotteryCore/lc_info/lc_eachSecondColorSeedMaximumBets";

 import PankouLimit from "../lc_config/lc_pankou_limit"; // 通用盘口金额限制配置 页面
import { lotteryDropdownList } from '@/api/select'; // 所有的下拉框中的数据接口
export default {
  data () {
    return {
      buttonLoading:false, // 按钮loading
      disabledALL:false, // 控制全局不可编辑
      loading:false, // Loading 加载
      add_percentVison:{ // 新增
        titleName:'',
        secondPercentVisonNum:'',
        firstLottery:'',
        secondLottery:'',
        visonMark:''
      },
      edit_View_Details:{ // 编辑彩种与详情
        titleName:"", // 标题名字
        quotaVer:"", // 二级彩种投注上限版本号
        parentLotteryName:"", //一级彩种名称
        lotteryName:"", // 二级彩种名称
        lotteryId:"", //二级彩种ID
        lotteryOddsVerId:"" // 唯一ID【lotteryOddsVerId】
      },
      dialogDisableSecond:true, // 弹框内禁用二级彩种
      everySeconTableId:"", // 唯一ID
      
      dialogFirst:[// 新增弹框内一级彩种下拉选择数据
        { value: "",name: "请选择"}],
      dialogSecond:[// 新增弹框内二级彩种下拉选择数据
        { value: "",name: "请选择"}
      ],
      addeverySEcondtDialog:false, // 新增弹框控制显示
      editPercentLotteryDialog:false,  // 编辑说明各大彩种弹框
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
      thisLottery:"",  // 当前选择的一级彩种名字
    }
  },
  components:{
    PankouLimit
  },
  computed:{
    ...mapState({
      allData: state => state.lc_eachSecondColorSeedMaximumBets.allData,
      allDataCount: state => state.lc_eachSecondColorSeedMaximumBets.allData_total,
      currentPageSize: state => state.lc_eachSecondColorSeedMaximumBets.currentPageSize,
      kindAData: state => state.lc_eachSecondColorSeedMaximumBets.kindAData,
      kindBData: state => state.lc_eachSecondColorSeedMaximumBets.kindBData,
    }),
    size: {
      get(){
        return this.$store.state.lc_eachSecondColorSeedMaximumBets.size;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.lc_eachSecondColorSeedMaximumBets.page;
      },
      set(item){
        return  item;
      }
    },
    everyPercentSearch: {
      get(){
        return this.$store.state.lc_eachSecondColorSeedMaximumBets.everyPercentSearch;
      },
      set(item){
        return  item;
      }
    },
  },
  methods:{
    getList(){
      this.searchTableData()
    },
    searchTableData(val) {   // 获取表格数据
      this.rowDatas = "";
      this.everySeconTableId = "";
      if(!val) {
        val = 1;
      }
      this.$store.dispatch("getEachSecondColorSeedPage",parseInt(val));
      this.loading = true; // 请求接口时loading启用
      this.disabledALL=true; // 控制全局不可编辑
      this.$store.state.lc_eachSecondColorSeedMaximumBets.everyPercentSearch.disabledSecond = true;
      let everyPercentSearch = this.$store.state.lc_eachSecondColorSeedMaximumBets.everyPercentSearch;
      let data = {
        quotaVer:everyPercentSearch.secondPercentVison,
        lotteryId: everyPercentSearch.secondLevel,
        parentLotteryId: everyPercentSearch.firstLevel,
        page:this.page-1,
        size:this.size
      }
      //  查询接口
      findPage(data).then(resdata => {
        let res = resdata.data;
        if(res.success == 1) {
          this.$store.dispatch("getEachSecondColorSeedTableData",res.content)
          let currentPageSize = 2;
          if(res.content.content.length > 0) {
            currentPageSize = res.content.content.length;
          }else {
            currentPageSize = 2;
          }      
          this.$store.dispatch('getEachSecondColorSeedTableHeight', currentPageSize)     
          this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行         
        }else {
          this.$message.error(res.respMsg)
        }
        this.loading = false; // 接口返回数据时，loading禁用           
        this.disabledALL=false; // 控制全局不可编辑  
        if(!this.$store.state.lc_eachSecondColorSeedMaximumBets.everyPercentSearch.firstLevel){
          this.$store.state.lc_eachSecondColorSeedMaximumBets.everyPercentSearch.disabledSecond = true
        }else{
          this.$store.state.lc_eachSecondColorSeedMaximumBets.everyPercentSearch.disabledSecond = false
        }
      }) 
    },
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    resetTable() {  // 重置
      this.$store.state.lc_eachSecondColorSeedMaximumBets.everyPercentSearch = {  // 头部搜索栏
        secondPercentVison:'',
        firstLevel:'',
        secondLevel:'',
        disabledSecond:true
      }
    },
    newAdd(val,h) { // 新增 / 编辑
      this.add_percentVison = { // 新增 --编辑说明
          secondPercentVisonNum:"", // 二级彩种投注上限版本号
          firstLottery:"",//一级彩种id
          secondLottery:"",//二级彩种ID
          visonMark:"" // 版本说明
        }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      if(val == '编辑说明'){
        let indexId = this.everySeconTableId;
        if (!indexId) {
          this.$message.warning('请选择一条数据');
          return false;
        }
        this.add_percentVison = { // 新增 --编辑说明
          secondPercentVisonNum:this.rowDatas.quotaVer, // 二级彩种投注上限版本号
          firstLottery:this.rowDatas.parentLotteryName,//一级彩种id
          secondLottery:this.rowDatas.lotteryName,//二级彩种ID
          visonMark:this.rowDatas.description // 版本说明
        }
      }
      this.addeverySEcondtDialog = true;
      this.dialogFirst = this.$store.state.lc_eachSecondColorSeedMaximumBets.kindAData; //获取一级彩种
      if(val == '新增'){
        this.add_percentVison.titleName = '新增'
        this.dialogSecond  =[{ value: "",name: "请选择"}];
        this.add_percentVison.secondLottery = "";
        this.dialogDisableSecond = true;    
      }else{
        this.add_percentVison.titleName = '编辑说明';
      }
    },  
    confirmAddLotteryPercent(val) { // 确认新增/编辑
     if(val == '新增'){
        if(!this.add_percentVison.firstLottery){
          this.$message.warning('一级彩种名称不能为空');
          return false;
        }
        if(!this.add_percentVison.secondLottery){
          this.$message.warning('二级彩种名称不能为空');
          return false;
        }
        if(!this.add_percentVison.visonMark){
          this.$message.warning('版本说明不能为空');
          return false;
        }
        this.buttonLoading = true; // loading开始
       let data = {
            lotteryId: this.add_percentVison.secondLottery, //二级彩种ID
            description: this.add_percentVison.visonMark, // 版本说明
          }
          persistEntity(data).then( res =>{
            let par = res.data;
            if(par.success == 1){
              this.$message.success('新增成功');
              this.searchTableData()
              this.addeverySEcondtDialog = false;
            }else{
              this.$message.error(par.respMsg);
            }
            this.buttonLoading = false; // loading结束
          })
     }else{
       if(!this.add_percentVison.visonMark){
          this.$message.warning('版本说明不能为空');
          return false;
        }
         this.buttonLoading = true; // loading开始
        let data = {
            id: this.everySeconTableId,  // 唯一ID
            description: this.add_percentVison.visonMark, //版本说明
          }         
          mergeDescription(data).then( res =>{
            let par = res.data;
            if(par.success == 1){
              this.$message.success('修改成功');
              this.searchTableData()
              this.addeverySEcondtDialog = false;
            }else{
              this.$message.error(par.respMsg);
            }
            this.buttonLoading = false; // loading结束
          })
     }
    },
    handleCurrentChange(val) {
       if(val != null){
          this.rowDatas = val;
          this.everySeconTableId = val.id
       }
    },
    handleSizeChange(val) {
      this.$store.dispatch('getEachSecondColorSeedSize', val);
      this.searchTableData();
    },
    selectOption(e){ //搜索条件 监听一级彩种，判断是否禁用二级彩种
      this.$store.state.lc_eachSecondColorSeedMaximumBets.kindBData  =[{ value: "",name: "请选择"}];
      this.$store.state.lc_eachSecondColorSeedMaximumBets.everyPercentSearch.secondLevel = "";
      if(e == null || e == undefined || e == ""){
        this.$store.state.lc_eachSecondColorSeedMaximumBets.everyPercentSearch.disabledSecond = true;      
      }else{
      //  // 二级彩种接口调用数据
        lotteryDropdownList({parentId: e}).then(res => { // 初始化一级彩种列表    
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.$store.state.lc_eachSecondColorSeedMaximumBets.kindBData.push(element);
              });
              this.$store.state.lc_eachSecondColorSeedMaximumBets.everyPercentSearch.disabledSecond = false; // 二级彩种名称是否可输入
            }else {
              this.$message.error(resData.respMsg)
            }
        }) 
      }

    },
    dialogSelectOption(e) {
      this.dialogSecond  =[{ value: "",name: "请选择"}];
      this.add_percentVison.secondLottery = "";
      if(e == null || e == undefined || e == ""){
        this.dialogDisableSecond = true;      
      }else{
      //  // 二级彩种接口调用数据
        lotteryDropdownList({parentId: e}).then(res => { // 初始化一级彩种列表    
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.dialogSecond.push(element);
              });
              this.dialogDisableSecond = false; // 二级彩种名称是否可输入
            }else {
              this.$message.error(resData.respMsg)
            }
        }) 
      } 
    },
    editAndViewDetails(val,h){ // 编辑赔率 与 查看详情
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      if(!this.everySeconTableId){
        this.$message.warning('请选择一条数据');
        return false;
      }
      this.edit_View_Details={ // 编辑投注上限与详情
        titleName:"", // 标题名字
        quotaVer:this.rowDatas.quotaVer, // 二级彩种投注上限版本号
        parentLotteryName:this.rowDatas.parentLotteryName, //一级彩种名称
        lotteryName:this.rowDatas.lotteryName, // 二级彩种名称
        lotteryId:this.rowDatas.lotteryId, //二级彩种ID
        lotteryOddsVerId:this.rowDatas.id, //唯一ID【lotteryOddsVerId】
      }; 
      if(this.rowDatas.parentLotteryName == "香港彩"){  // 点击香港彩 通用盘口限制配置 增加对应的眉头样式
         this.$store.commit('SET_PADDING_16',true)
      }else{
         this.$store.commit('SET_PADDING_16',false)
      }
       findDetail({id:this.everySeconTableId}).then(res => { // 玩法列表
        let resData = res.data; 
        if(resData.success == 1) {    
            this.$store.commit('SET_LIMITAMOUT_INFO',resData.content.detailList)
            this.editPercentLotteryDialog = true; // 设置上限弹框
            this.$store.state.lc_detail.allowEdit_pankoulimit = true; //盘口金额限制配置 input 不可编辑
            if(val == "edit"){
              this.edit_View_Details.titleName="编辑赔率"
            }else if(val == "check"){
              this.edit_View_Details.titleName="查看详情"
            }
        }else{
          this.$message.error(resData.respMsg)
        }  
      })

    },
    myEventChange(){
      this.editPercentLotteryDialog = false;
      this.searchTableData();
    }
  },
   created() {
         // 初始化下拉列表
      lotteryDropdownList({parentId:'0'}).then(res => { // 初始化一级彩种列表
      this.$store.state.lc_eachSecondColorSeedMaximumBets.kindAData =[ { value: "",name: "请选择"}];
        let resData = res.data;    
        if(resData.success == 1) {      
          let by = resData.content;
          by.forEach(element => {
            this.$store.state.lc_eachSecondColorSeedMaximumBets.kindAData.push(element);
          }); 
        
        }
      })
      
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
          this.$store.state.lc_eachSecondColorSeedMaximumBets.allData = []
          this.$store.state.lc_eachSecondColorSeedMaximumBets.allData_total = 0;
          this.$store.state.lc_eachSecondColorSeedMaximumBets.page = 1;
          this.$store.state.lc_eachSecondColorSeedMaximumBets.size = 10;
          this.$store.state.lc_eachSecondColorSeedMaximumBets.everyPercentSearch={ secondPercentVison:'', firstLevel:'',secondLevel:'', disabledSecond:true} // 头部搜索栏     
          this.$store.dispatch('getEachSecondColorSeedTableHeight', 2)
        }
      }else {
        if(this.$store.state.lc_eachSecondColorSeedMaximumBets.allData.length > 0) {         
         this.searchTableData()
        }
      }     
   
    },
  mounted() {
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
    
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/lotteryCore/lc_config/detail.scss';

.addPercent-each{
      margin-left: 53px !important;
}
.visonstate-each {
    margin-left: 53px!important;
}
.percent-head{
  border: 1px solid gainsboro;
  height: 40px;
  line-height: 40px;
  margin-bottom:10px;
}
.percent-head span{
  display: inline-block;
  width: 30%;
  margin: 0 10px 0 10px
}

.el-dialog__body .pencent-content{
  .el-input .el-input__inner{
    height: 20px;
  }
  li{
    p{
      line-height: 25px;
      .el-input{
        width: 120px;
        // .input__inner{
        //   height: 20px;
        // }
      }
      
    }
  }
} 

</style>
