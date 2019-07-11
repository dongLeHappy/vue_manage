<template>
  <div class="app-container percentVisonManage">
    <!--赔率大版本管理 ---搜索栏 -->
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">赔率版本名称：</span>
          <span class="rem_con">
            <el-input v-model="searchForm.visonName" :disabled="disabledALL" placeholder="请输入赔率版本名称" maxlength="15"></el-input>
          </span>
        </li>
        <li>
          <span class="rem_tit">平台赔率版本状态：</span>
          <span class="rem_con">
              <el-select v-model="searchForm.status" :disabled="disabledALL" value-key="name" placeholder="请选择">
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
    <!-- 数据表格 -->
    <div class="table-content" >
      <el-table
        style="width: 100%; "
        border
        class="tableAuto216"
        highlight-current-row
        :data="allData"
        ref="multipleTable"
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
            <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column sortable prop="name" align="center" label="赔率版本名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="description" align="center" label="版本说明" show-overflow-tooltip></el-table-column>
        <el-table-column sortable prop="disable" align="center" label="平台赔率版本状态"  show-overflow-tooltip>
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
        :page-size="pageSize"
        background
        :total="allDataCount"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="searchTableData"
      >
      </el-pagination>
    </div> -->
    <!--启用/禁用-->
    <el-dialog :visible.sync="enableOrUseDialog" :title="title_Name" width="350px" :top="dialogMt" :close-on-click-modal="false">
      <p style="text-align:center;">
        是否{{title_Name}}版本名称为
        <span style="color:red">"{{dataName}}"</span>的赔率？
      </p>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmOkOrStop">确定</el-button>
        <el-button @click="enableOrUseDialog = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog :visible.sync="addPercentDialog" title="新增" width="400px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item addPercent">
            <span class="required "></span>版本名称：
          </span>
          <el-input style="width: 200px;" :disabled="true" v-model="add_percent.visonName"/>
        </p>
        <p>
          <span class="dialog-label-item visonstate">
            <span class="required"></span>平台赔率版本状态：
          </span>
          <el-input style="width: 200px;" :disabled="true" v-model="add_percent.plamPercentVisonState" />
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>版本说明：
          </span>
          <el-input style="width: 200px;" v-model="add_percent.visonMark" type="textarea" maxlength="50"/>
        </p>
         <p style="color:red;text-align: center;">注：版本新增成功后，该版本默认取A版本配置的赔率</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAddUPercent" :loading="visonManageObj.confirmAdd" size="mini">确 定</el-button>
        <el-button @click="addPercentDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑 -->
    <el-dialog :visible.sync="editPercentTableDialog" :title="editNames" class="percentVisonManage-deitpercent" width="900px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box visonManage">
        <div style="height:30px;">
          <span>版本名称：{{this.dataName}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>版本说明：{{this.visonMark}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>状态：{{this.enable == true ? '禁用' : this.enable == false ? '启用' : '--'}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
        <el-table
          style="width: 100%; "
          border
          class="tableAuto296"
          highlight-current-row
          :data="editTableData"
          height="600"
          ref="tableScroll"
          @current-change="editTable"
        >
          <el-table-column  align="center" label="序号" show-overflow-tooltip>
            <template slot-scope="scope">
              <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="parentLotteryName" align="center" label="一级彩种名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="lotteryName" align="center" label="二级彩种名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="lotteryOddsVerId" align="center" label="选择二级彩种赔率版本号"   show-overflow-tooltip>
            <template slot-scope="scope">
              <el-select @blur="getCurrentPosition"  style="background:#00ffff" placeholder="请选择" v-if="editNames == '编辑'"  value-key="value" v-model="scope.row.lotteryOddsVerId" @change="verChange(scope.row,scope.row.lotteryOddsVerId,scope.$index)">
              <el-option v-for="(item,index) in scope.row.verList" :key="index" :label="item.oddsVer" :value="item.lotteryOddsVerId"></el-option>
            </el-select>
            <span v-if="editNames == '查看详情'">{{scope.row.lotteryOddsVerId}}</span>
          </template>
          </el-table-column>
          <el-table-column prop="description" align="center" label="赔率版本说明" show-overflow-tooltip>
            <template slot-scope="scope">
              {{scope.row.description}}
            </template>
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" v-show="editNames == '编辑'" :loading="visonManageObj.confirmEdit" @click="saveEditTable" size="mini">保存</el-button>
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
          <el-input style="width: 200px;" v-model="add_percentMark.visonMark" type="textarea" maxlength="50"/>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAddPercentMark" size="mini" :loading="visonManageObj.confirmScription">确 定</el-button>
        <el-button @click="addPercentMarkDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { lotteryDropdownList,findByCode } from '@/api/select'; // 所有的下拉框中的数据接口
import { findVerDetail,confirmAdd,persistList,confirmEditMark,getSelectVal, 
findPage,disable
} from "@/api/lotteryCore/lc_percentConfig/lc_percentVisonManage";
import { validtwoToFifty } from "@/utils/validate";
export default {
  data () {
    return {
      disabledALL:false, // 控制全局不可编辑
      loading:false, // Loading 加载
      add_percent:{
        visonName:"",
        plamPercentVisonState:"禁用",
        visonMark:""
      },
      add_percentMark:{
        visonName:"",
        visonMark:""
      },
      visonManageObj:{
        confirmAdd:false,
        confirmEdit:false,
        confirmScription:false,
      },
      tableRowData:"",
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
      editRow:'', 
      editNames:'',
      type:"",
    }
  },
  computed:{
    ...mapState({
      allData: state => state.lc_percentVison.allData,
      allDataCount: state => state.lc_percentVison.allDataCount,
      currentPageSize: state => state.lc_percentVison.currentPageSize,

    }),
    pageSize: {
      get(){
        return this.$store.state.lc_percentVison.pageSize;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.lc_percentVison.page;
      },
      set(item){
        return  item;
      }
    },
    searchForm: {
      get(){
        return this.$store.state.lc_percentVison.searchForm;
      },
      set(item){
        return  item;
      }
    },
    theStatus: {
      get(){
        return this.$store.state.lc_percentVison.theStatus;
      },
      set(item){
        return  item;
      }
    }
  },
  methods:{
    getCurrentPosition(e) {
      console.log(e)
    },
    verChange(row,id,index) { // 监听弹框表格 赔率下拉事件
    this.editRow =row;
     let verList = row.verList
      let tempVer = verList.filter(item => {
        return item.lotteryOddsVerId == id
      })
      this.editTableData[index].description=tempVer[0].description;
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
      this.$store.dispatch("getPercentVisonPage",parseInt(val));
      let data = {
        name: this.$store.state.lc_percentVison.searchForm.visonName,
        disable: this.$store.state.lc_percentVison.searchForm.status,
        page:this.page-1,
        size:this.pageSize
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
          this.$store.dispatch("getPercentConfigData",res.content)
          let currentPageSize = 2;
          if(res.content.content.length > 0) {
            currentPageSize = res.content.content.length;
          }else {
            currentPageSize = 2;
          }        
          this.$store.dispatch('getPercentVisonTableHeight', currentPageSize)    
          this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行            
        }else {
          this.$message.error(res.respMsg)
        }
        this.loading = false; // 接口返回数据时，loading禁用          
        this.disabledALL=false; // 控制全局不可编辑  
      }) 
    },
    resetTable() {  // 重置
      this.$store.state.lc_percentVison.searchForm ={
        visonName:"",
        status:""
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
        this.type = 0;
      }else{
        this.title_Name = '禁用';
        this.type = 1;
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
        disable:this.type
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
      if(this.add_percent.visonMark.length<1||this.add_percent.visonMark.length>50){
        this.$message.warning("请输入最小长度不低于2个最大长度不超过50个的字符");
        return;
      }
      // if(!validtwoToFifty(this.add_percent.visonMark)){
      //   this.$message.warning("请输入最小长度不低于2个最大长度不超过50个的字符");
      //   return;
      // }
      let data = {
        description:this.add_percent.visonMark,
      }
      
      this.visonManageObj.confirmAdd = true;
      confirmAdd(data).then(res => {
        let par = res.data;
        if(par.success == 1){
          this.$message.success('新增成功');
          this.addPercentDialog = false;
            this.searchTableData();
        }else{
          this.$message.error(par.respMsg);
        }
        this.visonManageObj.confirmAdd = false;
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
        oddsLargeVerId:this.percent_table_rowDataId
      }
      
      
      findVerDetail(data).then(res => {
        let par = res.data;
        if(par.success == 1){
          this.editTableData=par.content;
          let budata = par.content;
          if(this.editNames == "查看详情"){
            this.editTableData.forEach(element => {
              let setList =element.verList;
              setList.forEach(imte=>{
                if(imte.lotteryOddsVerId==element.lotteryOddsVerId){
                  element.lotteryOddsVerId = imte.oddsVer
                }
              })
            });
          }
          this.editPercentTableDialog = true;
        }
        this.visonManageObj.confirmEdit = false;
      }).catch(err => { 
          console.log(err)
      })
    },
    
    saveEditTable() {  // 保存编辑
      let sumOddsLargeVerId = []
      this.editTableData.forEach(itme=>{
        sumOddsLargeVerId.push(itme.lotteryOddsVerId)
      })
      let data = {
        lotteryOddsVerIds:sumOddsLargeVerId, // 二级彩种赔率版本号id列表
        oddsLargeVerId:this.percent_table_rowDataId,// 大版本id【OddsLargeVer.id】
      }
      
      this.visonManageObj.confirmEdit = true;
      persistList(data).then(res => {
        let par = res.data;
        if(par.success == 1){
          this.$message.success("保存成功");
          this.editPercentTableDialog = false;
           this.searchTableData(); // 刷新列表
        }else{
           this.$message.error(par.respMsg);
        }
        this.visonManageObj.confirmEdit = false;
      }).catch(err => {
          console.log(err)
      })
    },
    editTable(val) {
      this.editRow = val; // 编辑表格中选中一条数据
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
        // if(!validtwoToFifty(this.add_percentMark.visonMark)){
        //   this.$message.warning("请输入最小长度不低于2个最大长度不超过50个的字符");
        //   return;
        // }
        if(this.add_percentMark.visonMark.length<1||this.add_percent.visonMark.length>50){
        this.$message.warning("请输入最小长度不低于2个最大长度不超过50个的字符");
        return;
      }
        let data = {
          id:this.percent_table_rowDataId,
          description:this.add_percentMark.visonMark,
        }
        this.visonManageObj.confirmScription = true;
        confirmEditMark(data).then(res => {
          let par = res.data;
          if(par.success == 1){
            this.$message.success("修改成功");
            this.searchTableData() // 成功后刷新列表
            this.addPercentMarkDialog = false;
          }else{
            this.$message.error(par.respMsg);
          }
          this.visonManageObj.confirmScription = false;
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
      this.$store.dispatch('getPercentVisonPageSize', val);
      this.searchTableData();
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
     findByCode({code: "DISABLE"}).then(res => {  // 初始化下拉列表
     this.$store.state.lc_percentVison.theStatus = [{value:"",name:"全部"}]
      let resData = res.data;
      if(resData.success == 1) {
         let by_theStatus = resData.content['DISABLE']; // 初始化启用禁用
                by_theStatus.forEach(element => {
                  this.$store.state.lc_percentVison.theStatus.push(element);
                });  
      }
    })
  }
}
</script>
<style >
  .visonstate{
    width: 120px!important;
    margin-left: -2px!important;
  }
 .percentVisonManage-deitpercent .el-dialog__body .el-select .el-input{
    width: 140px !important;
  }
.el-select-dropdown .el-popper{
    z-index: 2000 !important;
  }
</style>
