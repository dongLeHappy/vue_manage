<template>
  <div class="app-container every-percent">
    <!-- 搜索栏 -->
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">二级彩种赔率版本号：</span>
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
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="newAdd('新增',330)">
          <svg-icon icon-class="xinzeng1" />
          新增</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="newAdd('编辑说明',330)">
          <svg-icon icon-class="bianji" />
          编辑说明</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="editAndViewDetails('edit',843)">
          <svg-icon icon-class="bianji" />
          编辑赔率</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="editAndViewDetails('check',843)">
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
        ref="multipleTable"
        highlight-current-row
        :data="allData"
        v-loading="loading"
        :height="currentPageSize*25 + 34"
        @current-change="handleCurrentChange"
      >
        <el-table-column lable show-overflow-tooltip width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="everySeconTableId" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column  align="center" label="序号" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="code" align="center" label="赔率版本编号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="oddsVer" align="center" label="二级彩种赔率版本号" width="140" show-overflow-tooltip></el-table-column>
        <el-table-column prop="parentLotteryName" align="center" label="一级彩种名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="lotteryName" align="center" label="二级彩种名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="description" align="center" label="说明" show-overflow-tooltip></el-table-column>
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
        :page-size="pageSize"
        background
        :total="allDataCount"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="searchTableData"
      >
      </el-pagination>
    </div>
    <!-- 新增 -->
    <el-dialog :visible.sync="addeverySEcondtDialog" :title="add_percentVison.titleName" width="380px" :top="dialogMt" :close-on-click-modal="false">
      <!-- <div><span><span/></div> -->
      <div class="dialog-box">
        <p v-if="add_percentVison.titleName == '新增'">
            <span style="font-weight:bold;margin-left: 28px;">选择需要添加赔率版本的彩种</span>
        </p>
        <p v-if="add_percentVison.titleName != '新增'">
          <span class="dialog-label-item addPercent" style="width:130px;margin-left:-10px">
           二级彩种赔率版本号：
          </span>
          <el-input style="width: 200px;" :disabled="true" v-model="add_percentVison.secondPercentVisonNum" />
        </p>
        <p v-if="add_percentVison.titleName == '新增'">
          <span class="dialog-label-item addPercent">
            <span class="required ">*</span>一级彩种名称：
          </span>
          <el-select v-model="add_percentVison.firstLottery" @change="dialogSelectOption" value-key="name" placeholder="请选择">
            <el-option v-for="(item,index) in dialogFirst" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
        </p>
        <p v-if="add_percentVison.titleName != '新增'">
          <span class="dialog-label-item addPercent">
            一级彩种名称：
          </span>
          <el-input style="width: 200px;" :disabled="true" v-model="add_percentVison.firstLottery" />         
        </p>
        <p v-if="add_percentVison.titleName == '新增'">
          <span class="dialog-label-item visonstate">
            <span class="required">*</span>二级彩种名称：
          </span>
          <el-select style="width: 200px;" v-model="add_percentVison.secondLottery" :disabled="dialogDisableSecond" value-key="name" placeholder="请选择">
            <el-option v-for="(item,index) in dialogSecond" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
        </p>
         <p v-if="add_percentVison.titleName != '新增'">
          <span class="dialog-label-item addPercent">
           二级彩种名称：
          </span>
          <el-input style="width: 200px;" :disabled="true" v-model="add_percentVison.secondLottery" />         
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>版本说明：
          </span>
          <el-input style="width: 200px;" v-model="add_percentVison.visonMark" type="textarea"/>
        </p>
        <p v-if="add_percentVison.titleName == '新增'" style="color:red;">注：版本新增成功后，该版本默认取该二级彩种001版本配置的赔率</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmAddLotteryPercent(add_percentVison.titleName)" size="mini" :loading="buttonLoading">确 定</el-button>
        <el-button @click="addeverySEcondtDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑赔率各大彩种 -->
    <el-dialog :visible.sync="editPercentLotteryDialog" :title="edit_View_Details.titleName" width="1100px" :top="dialogMt" :close-on-click-modal="false">
      <div class="percent-head">       
        <span>二级彩种赔率版本号：{{edit_View_Details.oddsVer}}</span>
        <span>一级彩种名称：{{edit_View_Details.parentLotteryName}}</span>
        <span>二级彩种名称：{{edit_View_Details.lotteryName}}</span>
      </div>
      <div class="pencent-content">
        <PricePanagement :thisLottery="thisLottery" :getlotteryOddsVerId="edit_View_Details.lotteryOddsVerId"></PricePanagement>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editPercentLotteryDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>

import { mapState } from 'vuex'
import {conFromEditMark,
findDetailPage,persistVerDetail,findByLotteryId,findPlayRuleList
} from "@/api/lotteryCore/lc_percentConfig/lc_everySecondLotteryManage";
import PricePanagement from "../lc_config/lc_PricePanagement";
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
        oddsVer:"", // 二级彩种赔率版本号
        parentLotteryName:"", //一级彩种名称
        lotteryName:"", // 二级彩种名称
        lotteryId:"", //二级彩种ID
        lotteryOddsVerId:"" // 唯一ID【lotteryOddsVerId】
      },
      dialogDisableSecond:true, // 弹框内禁用二级彩种
      everySeconTableId:"", // 唯一ID
      rowDatas:"", // 当前行
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
      // editOrCheck:"",  //编辑或者查看
    }
  },
  components:{
    PricePanagement
  },
  computed:{
    ...mapState({
      allData: state => state.lc_everySecondLottery.allData,
      allDataCount: state => state.lc_everySecondLottery.allDataCount,
      currentPageSize: state => state.lc_everySecondLottery.currentPageSize,
      kindAData: state => state.lc_everySecondLottery.kindAData,
      kindBData: state => state.lc_everySecondLottery.kindBData,
    }),
    pageSize: {
      get(){
        return this.$store.state.lc_everySecondLottery.pageSize;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.lc_everySecondLottery.page;
      },
      set(item){
        return  item;
      }
    },
    everyPercentSearch: {
      get(){
        return this.$store.state.lc_everySecondLottery.everyPercentSearch;
      },
      set(item){
        return  item;
      }
    }
  },
  methods:{
    //   rowcellClass() { // 行的cell样式
    //   return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    // },
    getList(){
      this.searchTableData()
    },
    searchTableData(val) {   // 获取表格数据
      this.rowDatas = "";
      this.everySeconTableId = "";
      if(!val) {
        val = 1;
      }
      
      this.$store.dispatch("getEverySecondPage",parseInt(val));
      this.loading = true; // 请求接口时loading启用
      this.disabledALL=true; // 控制全局不可编辑
      this.$store.state.lc_everySecondLottery.everyPercentSearch.disabledSecond = true;
      let everyPercentSearch = this.$store.state.lc_everySecondLottery.everyPercentSearch;
      let data = {
        oddsVer:everyPercentSearch.secondPercentVison,
        lotteryId: everyPercentSearch.secondLevel,
        parentLotteryId: everyPercentSearch.firstLevel,
        page:this.page-1,
        size:this.pageSize
      }
      //  查询接口
      findDetailPage(data).then(resdata => {
        let res = resdata.data;
        if(res.success == 1) {
          this.$store.dispatch("getEverySecondLotteryTableData",res.content)
          let currentPageSize = 2;
          if(res.content.content.length > 0) {
            currentPageSize = res.content.content.length;
          }else {
            currentPageSize = 2;
          }      
          this.$store.dispatch('getEverySecondTableHeight', currentPageSize)    
          this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行          
        }else {
          this.$message.error(res.respMsg)
        }
        this.loading = false; // 接口返回数据时，loading禁用           
        this.disabledALL=false; // 控制全局不可编辑  
        if(everyPercentSearch.firstLevel==""){
          this.$store.state.lc_everySecondLottery.everyPercentSearch.disabledSecond = true
        }else{
           this.$store.state.lc_everySecondLottery.everyPercentSearch.disabledSecond = false
        }
      }) 
    },
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
      if(a < 0){
        this.dialogMt = 0 + 'px';
      }
    },
    resetTable() {  // 重置
    this.$store.state.lc_everySecondLottery.everyPercentSearch = {
      secondPercentVison:'',
      firstLevel:'',
      secondLevel:'',
      disabledSecond:true
    }
     
    },
    newAdd(val,h) { // 新增 / 编辑
      this.add_percentVison = { // 新增 --编辑说明
        secondPercentVisonNum:"", // 二级彩种赔率版本号
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
          secondPercentVisonNum:this.rowDatas.oddsVer, // 二级彩种赔率版本号
          firstLottery:this.rowDatas.parentLotteryName,//一级彩种id
          secondLottery:this.rowDatas.lotteryName,//二级彩种ID
          visonMark:this.rowDatas.description // 版本说明
        }
      }
      this.addeverySEcondtDialog = true;
      this.dialogFirst = this.kindAData; //获取一级彩种
      if(val == '新增'){
        this.add_percentVison.titleName = '新增'
        this.dialogDisableSecond = true;  // 搜新增数据二级彩种置灰
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
            parentLotteryId:this.add_percentVison.firstLottery, //一级彩种id
            lotteryId: this.add_percentVison.secondLottery, //二级彩种ID
            description: this.add_percentVison.visonMark, // 版本说明
          }
          persistVerDetail(data).then( res =>{
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
        let data = {
            id: this.everySeconTableId,  // 唯一ID
            description: this.add_percentVison.visonMark, //版本说明
          }         
          conFromEditMark(data).then( res =>{
            let par = res.data;
            if(par.success == 1){
              this.$message.success('修改成功');
              this.searchTableData()
              this.addeverySEcondtDialog = false;
            }else{
              this.$message.error(par.respMsg);
            }
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
      this.$store.dispatch('getEverySecondPageSize', val);
      this.searchTableData();
    },
    selectOption(e){ //搜索条件 监听一级彩种，判断是否禁用二级彩种
    this.$store.state.lc_everySecondLottery.kindBData = [{ value: "",name: "请选择"}]
       this.$store.state.lc_everySecondLottery.everyPercentSearch.secondLevel = "";
      if(e == null || e == undefined || e == ""){
       this.$store.state.lc_everySecondLottery.everyPercentSearch.disabledSecond = true;      
      }else{
      //  // 二级彩种接口调用数据
        lotteryDropdownList({parentId: e}).then(res => { // 初始化一级彩种列表    
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.$store.state.lc_everySecondLottery.kindBData.push(element);
              });
              this.$store.state.lc_everySecondLottery.everyPercentSearch.disabledSecond = false; // 二级彩种名称是否可输入
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
      this.editPercentLotteryDialog = true;
      this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTable = true;// 赔率页面loading
      this.$store.state.ag_sm_userdefine_odd.loadingObj.Loadingplay = true;// 玩法loading
      this.edit_View_Details={ // 编辑赔率与详情
        titleName:"", // 标题名字
        oddsVer:this.rowDatas.oddsVer, // 二级彩种赔率版本号
        parentLotteryName:this.rowDatas.parentLotteryName, //一级彩种名称
        lotteryName:this.rowDatas.lotteryName, // 二级彩种名称
        lotteryId:this.rowDatas.lotteryId, //二级彩种ID
        lotteryOddsVerId:this.rowDatas.id, //唯一ID【lotteryOddsVerId】
      }; 
      this.$store.state.lc_detail.onKeyInput = val;
      if(val == "edit"){
        this.$store.state.lc_detail.onKeyInputData = ""; // 选择玩法时，清空一建输入
        this.edit_View_Details.titleName="编辑赔率"
      }else if(val == "check"){
        this.edit_View_Details.titleName="查看详情"
      }
      this.$store.state.lc_detail.PrimaryColorKind = "";
      // 根据二级彩种ID查询玩法列表
      findByLotteryId({lotteryId:this.edit_View_Details.lotteryId}).then(res => { // 玩法列表
        let resData = res.data;    
        if(resData.success == 1) {      
          let by = resData.content;        
          this.$store.state.lc_detail.pricePanagementInfo = by;
          this.$store.state.lc_detail.PrimaryColorKind = by[0].playRuleId; // id默认监听数据的第一个；
          this.$store.state.lc_detail.setPlayingMethod = by[0].betOnValue; // name默认展示数据的第一个；
          // 根据玩法的第一个 查询玩法赔率列表【findPlayRuleList】
        findPlayRuleList({lotteryOddsVerId:this.edit_View_Details.lotteryOddsVerId,playRuleId:by[0].playRuleId}).then(res => { // 玩法列表
          let resData = res.data;    
          if(resData.success == 1) {      
            let by = resData.content;
            this.$store.state.lc_detail.inputTemaData = by; // 默认展示玩法列表中第一个下标中的赔率
            this.thisLottery = this.edit_View_Details.parentLotteryName;//一级彩种名称
            this.$store.dispatch('seteditTheseRule',true);
         
          }else{
            this.$message.error(resData.respMsg)
          }
           this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTable = false;// 赔率页面loading
        })
        }else{
            this.$message.error(resData.respMsg)
        }
        this.$store.state.ag_sm_userdefine_odd.loadingObj.Loadingplay = false;// 玩法loading
      })   
    },
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
          this.$store.state.lc_everySecondLottery.allData = []
          this.$store.state.lc_everySecondLottery.allDataCount = 0;
          this.$store.state.lc_everySecondLottery.page = 1;
          this.$store.state.lc_everySecondLottery.pageSize = 10;
          this.$store.state.lc_everySecondLottery.everyPercentSearch = {secondPercentVison:'',firstLevel:'',secondLevel:'', disabledSecond:true }
          this.$store.dispatch('getEverySecondTableHeight', 2)
        }
      }else {
        if(this.$store.state.lc_everySecondLottery.allData.length > 0) {         
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
        // 初始化下拉列表
    lotteryDropdownList({parentId:'0'}).then(res => { // 初始化一级彩种列表
     this.$store.state.lc_everySecondLottery.kindAData = [{ value: "",name: "请选择"}]
      let resData = res.data;    
      if(resData.success == 1) {      
        let by = resData.content;
        by.forEach(element => {
         this.$store.state.lc_everySecondLottery.kindAData.push(element);
        }); 
       
      }
    })
  }
}
</script>
<style lang="scss">
@import '@/styles/lotteryCore/lc_config/detail.scss';

.percent-head{
  border: 1px solid gainsboro;
  height: 40px;
  line-height: 40px;
  margin-bottom:10px;
}
.percent-head span{
  display: inline-block;
  width: 300px;
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
