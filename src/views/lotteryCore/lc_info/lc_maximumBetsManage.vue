<template>
  <div class="app-container percentVisonManage">
    <!--投注上限大版本管理 ---搜索栏 -->
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">投注上限版本名称：</span>
          <span class="rem_con">
            <el-input v-model="searchForm.name" :disabled="disabledALL" placeholder="请输入投注上限版本名称" maxlength="15"></el-input>
          </span>
        </li>
        <li>
          <span class="rem_tit">平台投注上限版本状态：</span>
          <span class="rem_con">
              <el-select v-model="searchForm.disable" :disabled="disabledALL" value-key="name" placeholder="请选择">
                <el-option v-for="(item,index) in theStatus" :key="index" :label="item.name" :value="item.value"></el-option>
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
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="enableOrUse('start',148)">
            <svg-icon icon-class="qiyong1" />
          启用</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="enableOrUse('stop',148)">
            <svg-icon icon-class="jinyong1" />
          禁用</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="newAdd(299)">
          <svg-icon icon-class="xinzeng1" />
          新增</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="editPercent('edit',711)">
          <svg-icon icon-class="bianji" />
          编辑</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="editMark(199)">
          <svg-icon icon-class="bianji" />
          编辑说明</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="editPercent('checkDetail',711)">
          <svg-icon icon-class="chakanxiangqing" />
          查看详情</el-button>
      </el-form-item>
    </el-form>
    <!-- 数据表格-->
    <div class="table-content" >
      <el-table
        style="width: 100%; "
        border
        class="tableAuto216"
        highlight-current-row
        ref="multipleTable"
        :data="allData"
        :height="currentPageSize*25 + 34"
        @current-change="handleCurrentChange"
         v-loading="loading"
      >
        <el-table-column width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="percent_table_rowDataId" class="hidTextRadio"></el-radio>
          </template>
        </el-table-column>
        <el-table-column  width="60" align="center" label="序号" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * size + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column sortable prop="name" align="center" label="投注上限版本名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="description" align="center" label="版本说明" show-overflow-tooltip></el-table-column>
        <el-table-column sortable prop="disable" align="center" label="平台投注上限版本状态"  show-overflow-tooltip>
          <template slot-scope="scope">
          <span> {{ scope.row.disable == false ? '启用' : '禁用' }} </span>
        </template>
        </el-table-column>
        <el-table-column prop="createdBy" align="center" label="创建人" show-overflow-tooltip></el-table-column>
        <el-table-column sortable prop="createdDate" align="center" label="创建时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="lastModifiedBy" align="center" label="修改人" show-overflow-tooltip></el-table-column>
        <el-table-column sortable prop="lastModifiedDate" align="center" label="修改时间" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
      <!-- 分页    数据要是大于1000条时，把分页释放掉-->
    <!-- <div class="terraceUser_pagination">
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
    </div> -->
    <!--启用/禁用-->
    <el-dialog :visible.sync="enableOrUseDialog" :title="title_Name" width="350px" :top="dialogMt">
      <p style="text-align:center;">
        是否{{title_Name}}版本名称为
        <span style="color:red">"{{dataName}}"</span>的投注上限？
      </p>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmOkOrStop">确定</el-button>
        <el-button @click="enableOrUseDialog = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog :visible.sync="addPercentDialog" title="新增" width="410px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item addPercent-item-span">
            <span class="required "></span>版本名称：
          </span>
          <el-input style="width:200px;" :disabled="true" v-model="add_percent.visonName"/>
        </p>
        <p>
          <span class="dialog-label-item visonstate-item-span">
            <span class="required"></span>平台投注上限版本状态：
          </span>
          <el-input style="width:200px;" :disabled="true" v-model="add_percent.plamPercentVisonState" />
        </p>
        <p>
          <span class="dialog-label-item addPercent-item-span">
            <span class="required">*</span>版本说明：
          </span>
          <el-input style="width:200px;" v-model="add_percent.visonMark" type="textarea"/>
        </p>
        <p style="color:red;text-align: center;">注：版本新增成功后，该版本默认取A版本配置的投注上限</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAddUPercent" size="mini" :loading="newAddloading">确 定</el-button>
        <el-button @click="addPercentDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑 -->
    <el-dialog :visible.sync="editPercentTableDialog" :title="editNames" class="percentVisonManage-deitpercent" width="900px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box">
        <div style="height:30px;">
          <span>版本名称：{{dataName}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <!-- editTableData.name editTableData.description -->
          <span>版本说明：{{visonMark}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>状态：{{enable == true ? '禁用' : this.enable == false ? '启用' : '--'}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
        <el-table
          style="width: 100%; "
          border
          class="tableAuto296"
          highlight-current-row
          :data="editTableData.detailVoList"
          height="600"
          @current-change="editTable"
        >
          <el-table-column  align="center" width="100" label="序号" show-overflow-tooltip>
            <template slot-scope="scope">
              <span>{{scope.$index+(page - 1) * size + 1}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="parentLotteryName" align="center" label="一级彩种名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="lotteryName" align="center" label="二级彩种名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="quotaVer" align="center" label="选择二级彩种投注上限版本号"   show-overflow-tooltip>
            <template slot-scope="scope">
              <el-select  style="background:#00ffff" placeholder="请选择" v-if="editNames == '编辑'"  value-key="value" v-model="scope.row.quotaVer" @change="verChange(scope.row,scope.row.quotaVer,scope.$index)">
              <el-option v-for="(item,index) in scope.row.detailList" :key="index" :label="item.quotaVer" :value="item.id"></el-option>
            </el-select>
            <span v-if="editNames == '查看详情'">{{scope.row.quotaVer}}</span>
          </template>
          </el-table-column>
          <el-table-column prop="description" align="center" label="投注上限版本说明" show-overflow-tooltip>
            <template slot-scope="scope">
              {{scope.row.description}}
            </template>
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" v-show="editNames == '编辑'" :loading="confirmEdit" @click="saveEditTable" size="mini">保存</el-button>
        <el-button @click="editPercentTableDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑说明 -->
    <el-dialog :visible.sync="addPercentMarkDialog" title="编辑说明" width="400px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item">
            <span class="required "></span>版本名称：
          </span>
          <el-input style="width: 200px;" :disabled="true" v-model="add_percentMark.visonName"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>版本说明：
          </span>
          <el-input style="width: 200px;" v-model="add_percentMark.visonMark" type="textarea" placeholder="通用上限"/>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAddPercentMark" size="mini" :loading="newAddloading">确 定</el-button>
        <el-button @click="addPercentMarkDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { lotteryDropdownList,findByCode } from '@/api/select'; // 所有的下拉框中的数据接口 

import {findPage,disable,persist,mergeDescription,findDetail,persistList} from "@/api/lotteryCore/lc_info/lc_maximumBetsManage";

export default {
  data () {
    return {
      disabledALL:false, // 控制全局不可编辑
      loading:false, // Loading 加载
      confirmEdit:false,
      newAddloading:false, //新增/确定按钮 Loading 加载
      add_percent:{
        visonName:"",
        plamPercentVisonState:"禁用",
        visonMark:""
      },
      add_percentMark:{
        visonName:"",
        visonMark:""
      },
      tableRowData:"", // 当前行数据
      dataName:"", // 版本号名称，用来启用与禁用时展示的
      title_Name:"",  // 启用禁用弹框标题
      percent_table_rowDataId:null,
      enableOrUseDialog:false,  // 启用/禁用弹框
      addPercentDialog: false,  // 新增弹框
      addPercentMarkDialog: false, // 编辑说明弹框
      editPercentTableDialog:false, // 编辑弹框
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
      editTableData:[],  // 编辑弹框表格数据
      visonMark:'',  // 版本说明
      enable:'',
      // editRow:'', 
      editNames:'',
      disableType:"",
    }
  },
  computed:{
    ...mapState({
      allData: state => state.lc_maximumBetsManage.allData,
      allDataCount: state => state.lc_maximumBetsManage.allData_total,
      currentPageSize: state => state.lc_maximumBetsManage.currentPageSize,
    }),
    size: {
      get(){
        return this.$store.state.lc_maximumBetsManage.size;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.lc_maximumBetsManage.page;
      },
      set(item){
        return  item;
      }
    },
    searchForm: {
      get(){
        return this.$store.state.lc_maximumBetsManage.searchForm;
      },
      set(item){
        return  item;
      }
    },
    theStatus: {
      get(){
        return this.$store.state.lc_maximumBetsManage.theStatus;
      },
      set(item){
        return  item;
      }
    }
  },
  methods:{
    verChange(row,id,index) { // 监听弹框表格 赔率下拉事件
      let detailList = row.detailList;
      let tempVer = {};
       detailList.forEach(element => {
        if(element.id ==id ){
          tempVer = element;
        }
      });
     this.editTableData.detailVoList[index].description = tempVer.description;
      this.editTableData.detailVoList[index].lotteryQuotaVerId = tempVer.id;
    },
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    getList(){
      this.searchTableData()
    },
    searchTableData(val){  // 查询列表
      this.tableRowData = "";
      this.percent_table_rowDataId = "";
      if(!val) {
        val = 1;
      } 
      this.loading = true; // 请求接口时loading启用
      this.disabledALL=true; // 控制全局不可编辑
      this.$store.dispatch("getMaximumBetsPage",parseInt(val));
      let data = {
        name: this.$store.state.lc_maximumBetsManage.searchForm.name,
        disable: this.$store.state.lc_maximumBetsManage.searchForm.disable,
        page:this.page-1,
        size:this.size
      }
      if(data.disable){
        if(data.disable==0){
          data.disable=false;
        }else if(data.disable == 1){
          data.disable=true;
        }
      }
      //  查询接口
      findPage(data).then(resdata => {
        let res = resdata.data;
        if(res.success == 1) {
          this.$store.dispatch("getMaximumBetsData",res.content)
          let currentPageSize = 2;
          if(res.content.content.length > 0) {
            currentPageSize = res.content.content.length;
          }else {
            currentPageSize = 2;
          }        
          this.$store.dispatch('getMaximumBetsTableHeight', currentPageSize)  
          this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行              
        }else {
          this.$message.error(res.respMsg)
        }
        this.loading = false; // 接口返回数据时，loading禁用          
        this.disabledALL=false; // 控制全局不可编辑  
      }) 
    },
    resetTable() {  // 重置
      this.$store.state.lc_maximumBetsManage.searchForm={
        name:"", 
        disable:""
      }
    },
    enableOrUse(val,h) { // 禁用/启用 弹框
      let indexId = this.percent_table_rowDataId;
      if (!indexId) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      if(val == 'start') {
        this.title_Name = '启用';
        this.disableType = 0;
      }else{
        this.title_Name = '禁用';
        this.disableType = 1;
      }
      if(val == 'start' && !this.tableRowData.disable){
        this.$message.warning("该数据已被启用，不可操作");
        return false;
      }else if(val == 'stop' && this.tableRowData.disable){
        this.$message.warning("该数据已被禁用，不可操作");
        return false;
      }
      this.enableOrUseDialog = true;
    },
    confirmOkOrStop(val) {  // 确认按钮--禁用启用    
      let data = {
        id:this.percent_table_rowDataId,
        disable:this.disableType
      }
       // 禁用与启用接口
        disable(data).then(resdata => {
        let res = resdata.data;
        if(res.success == 1) {
          this.$message.success(this.title_Name+"成功")
          this.searchTableData() // 成功后刷新列表数据 
          this.enableOrUseDialog = false;      
        }else {
          this.$message.error(res.respMsg)
        }
      }) 
    },
    newAdd(h) {  // 新增
      this.addPercentDialog = true;
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.add_percent={
        visonName:"",
        plamPercentVisonState:"禁用",
        visonMark:""
      }

    },
    okAddUPercent(h) {  // 确认新增
      if(this.add_percent.visonMark == "" || this.add_percent.visonMark == null){
        this.$message.warning('版本说明不能为空');
        return false;
      }
        let data = {
          description:this.add_percent.visonMark
        }
        this.newAddloading = true; // 防多次点击
        persist(data).then(res => {
          let par = res.data;
          if(par.success == 1){
            this.$message.success('新增成功');
            this.addPercentDialog = false;
             this.searchTableData();
          }else{
            this.$message.error(par.respMsg);
          }
          this.newAddloading = false; 
        }).catch(error => {
          console.log(error)
        })       
       
    },
    editPercent(val,h) {  // 编辑     
      let indexId = this.percent_table_rowDataId;
      if (!indexId) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      if(val == 'edit'){
        this.editNames = "编辑";
      }else{
        this.editNames = "查看详情";
      }  
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      // 获取编辑表格数据
      let data = {
        quotaLargeVerId:this.percent_table_rowDataId
      }
      findDetail(data).then(res => {
        let par = res.data;
        if(par.success == 1){
           this.editTableData=par.content;
          // let budata = par.content;
          // if(this.editNames == "查看详情"){
          //   // this.editTableData.forEach(element => {
          //   //   let setList =element.verList;
          //   //   setList.forEach(imte=>{
          //   //     if(imte.lotteryOddsVerId==element.lotteryOddsVerId){
          //   //       element.lotteryOddsVerId = imte.oddsVer
          //   //     }
          //   //   })
          //   // });
          // }
          this.editPercentTableDialog = true;
        }
      }).catch(err => { 
          console.log(err)
      })
    },
    saveEditTable() {  // 保存编辑
      let sumOddsLargeVerId = []
      let info = this.editTableData.detailVoList;
      info.forEach(itme=>{
        sumOddsLargeVerId.push(itme.lotteryQuotaVerId)
        console.log(itme);
      })
      let data = {
        lotteryQuotaVerIdList:sumOddsLargeVerId, // 二级彩种赔率版本号id列表
        quotaLargeVerId:this.percent_table_rowDataId,// 大版本id【OddsLargeVer.id】
      }
      this.confirmEdit = true;

      persistList(data).then(res => {
        let par = res.data;
        if(par.success == 1){
          this.$message.success("保存成功");
          this.editPercentTableDialog = false;
           this.searchTableData(); // 刷新列表
        }else{
           this.$message.error(par.respMsg);
        }
        this.confirmEdit = false;
      }).catch(err => {
          console.log(err)
      })
    },
    editTable(val) {
      // this.editRow = val; // 编辑表格中选中一条数据
    },
    editMark(h) {  // 编辑说明
      let indexId = this.percent_table_rowDataId;
      if (!indexId) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.addPercentMarkDialog = true;
      this.add_percentMark.visonName = this.tableRowData.name;
      this.add_percentMark.visonMark = this.tableRowData.description;
    },
    okAddPercentMark() {  // 确认编辑说明
      if(this.add_percentMark.visonMark == "" || this.add_percentMark.visonMark == null){
        this.$message.warning('版本说明不能为空');
        return false;
      }else{
        this.newAddloading = true; // 防多次点击
        let data = {
          id:this.percent_table_rowDataId,
          description:this.add_percentMark.visonMark,
        }
        mergeDescription(data).then(res => {
          let par = res.data;
          if(par.success == 1){
            this.$message.success("修改成功");
            this.searchTableData() // 成功后刷新列表
            this.addPercentMarkDialog = false;
          }else{
            this.$message.error(par.respMsg);
          }
          this.newAddloading = false; // 防多次点击
        }).catch(error => {
          console.log(error)
        })
     
      }
     
    },
    handleCurrentChange(val){  // 点击表格
      if(val != null){
        this.tableRowData = val;
        this.percent_table_rowDataId = val.id;
        this.dataName = val.name; // 版本名称
        this.visonMark = val.description; // 版本说明
        this.enable = val.disable
      }
    },
    handleSizeChange(val){
      this.$store.dispatch('getMaximumBetsSize', val);
      this.searchTableData();
    }
  },
  created() {
    findByCode({code: "DISABLE"}).then(res => {  // 初始化下拉列表
    this.$store.state.lc_maximumBetsManage.theStatus =[{value:"",name:"全部"}] 
      let resData = res.data;
      if(resData.success == 1) {
         let by_theStatus = resData.content['DISABLE']; // 初始化启用禁用
                by_theStatus.forEach(element => {
                  this.$store.state.lc_maximumBetsManage.theStatus.push(element);
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

        this.$store.state.lc_maximumBetsManage.allData = []
        this.$store.state.lc_maximumBetsManage.allData_total = 0;
        this.$store.state.lc_maximumBetsManage.page = 1;
        this.$store.state.lc_maximumBetsManage.size = 10;
        this.$store.state.lc_maximumBetsManage.theStatus =[{value:"",name:"全部"}] 
        this.$store.state.lc_maximumBetsManage.searchForm ={name:"", disable:""}, // 头部搜索栏
        this.$store.dispatch('getMaximumBetsTableHeight', 2)
      }
    }else {
      if(this.$store.state.lc_maximumBetsManage.allData.length > 0) {
        this.getList()
      }
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
    
  }
}
</script>
<style >
  .visonstate-item-span{
    width: 135px!important;
    margin-left: 0px!important;
  }
  .addPercent-item-span{
    width: 115px !important;
    margin-left: 18px !important;
  }
 .percentVisonManage-deitpercent .el-dialog__body .el-select .el-input{
    width: 140px !important;
  }
 .el-select-dropdown .el-popper{
    z-index: 2000 !important;
  }
</style>
