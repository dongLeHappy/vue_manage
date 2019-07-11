<template>
<!-- 二级彩种 -->
  <div class="app-container">
    <!-- 通用搜索框 -->
    <div class="lc-searchbox">
      <el-form :model="searchEdition">
        <ul class="heard-search">
          <li>
            <span class="rem_tit">一级彩种名称：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.parentId" @change="selectOption" value-key="name" placeholder="请选择" :disabled="disableControl">
                  <el-option label="请选择" value=""></el-option>
                  <el-option v-for="item in firstLotterySelect" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">二级彩种名称：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.id" :disabled="searchEdition.disabledSecond"  placeholder="请选择">
                  <el-option v-for="item in secondLotterySelect" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">状态：</span>
            <span class="rem_con">
              <el-select v-model="searchEdition.disable" placeholder="启用" :disabled="disableControl">
                <el-option label="全部" value=""></el-option>
                <el-option v-for="item in disableArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
              </el-select>
            </span>
          </li>
          <li>
            <span class="rem_tit">彩种性质：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.category" value-key="name" placeholder="全部" @change="handleSelectChange" :disabled="disableControl">
                  <el-option label="全部" value=""></el-option>
                  <el-option v-for="item in lotteryCategoryArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">彩种类型：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.frequency" value-key="name"  placeholder="全部" :disabled="disableControl">
                  <el-option label="全部" value=""></el-option>
                  <el-option v-for="item in frequencyArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
        </ul>
        <el-form-item class="operation-box">
          <el-button type="primary" size="mini" @click.native.prevent="search" :disabled="disableControl">
            <svg-icon icon-class="chaxun" /> 
            查询
            </el-button>
          <el-button type="primary" size="mini" @click.native.prevent="reset" :disabled="disableControl">
            <svg-icon icon-class="zhongzhi" />
            重置
            </el-button>
          <el-button type="primary" size="mini" @click.native.prevent="configOrder('修改开奖频率')" :disabled="disableControl">
            <svg-icon icon-class="xiugai" />
            修改开奖频率
            </el-button>
          <el-button type="primary" size="mini" @click.native.prevent="configOrder('配置排序')" :disabled="disableControl">
            <svg-icon icon-class="dashujukeshihuaico-" />
            配置排序
            </el-button>
          <el-button type="primary" size="mini" @click.native.prevent="configOrder('配置热门排序')" :disabled="disableControl">
            <svg-icon icon-class="dashujukeshihuaico-" />
            配置热门排序
            </el-button>
          <el-button type="primary" size="mini" @click.native.prevent="startOrStop('start',148)" :disabled="disableControl">
            <svg-icon icon-class="qiyong1" />
            启用
            </el-button>
          <el-button type="primary" size="mini" @click.native.prevent="startOrStop('disabled',148)" :disabled="disableControl">
            <svg-icon icon-class="jinyong1" />
            禁用
            </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 多选表格 -->
    <el-table
      ref="tableScroll"
      :data="allData"
      tooltip-effect="dark"
      style="width: 100%;"
      border
      highlight-current-row
      class="tableAuto216"
      @current-change="handleCurrentChange"
      :height="currentPageSize*25 + 48"
      v-loading="loading"
      
    >
      <el-table-column width="35">
        <template slot-scope="scope">
          <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio"></el-radio>
        </template>
      </el-table-column>
      <el-table-column label="序号" align="center" width="50" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{scope.$index+(page - 1) * size + 1}} </span>
        </template>
      </el-table-column>
      <el-table-column sortable label="排序顺序" prop="orderSeq" width="100" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.orderSeq ? scope.row.orderSeq : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="一级彩种名称" prop="parentName" width="100" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.parentName ? scope.row.parentName : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="二级彩种名称" prop="name" width="100" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.name ? scope.row.name : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="二级彩种编号" prop="code" width="100" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.code ? scope.row.code : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="彩种性质" prop="category" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.category ? '私彩' :  scope.row.category == 0 ? '官彩' : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column sortable label="彩种类型" prop="frequency" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.frequency ? "高频彩" : scope.row.frequency == 0 ? '低频彩' : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="开奖频率" prop="description" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.description ? scope.row.description : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column sortable label="热门顺序" prop="hotSeq" align="center"  show-overflow-tooltip>
        <!-- :formatter="setHotSeq" -->
        <template slot-scope="scope">
          <span> {{ scope.row.hotSeq == 0 ? scope.row.hotSeq+'' : scope.row.hotSeq ? scope.row.hotSeq : '-'}} </span>
        </template>
      </el-table-column>
      <el-table-column sortable label="状态" prop="lcStatus" align="center"   show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.disable != null ? (scope.row.disable ? '禁用' : '启用') : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="创建人" prop="createdBy" align="center"  show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.createdBy ? scope.row.createdBy : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column sortable label="创建时间" prop="createdDate" align="center" width="150" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.createdDate ? scope.row.createdDate : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="修改人" prop="lastModifiedBy" align="center"  show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.lastModifiedBy ? scope.row.lastModifiedBy : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column sortable label="修改时间" prop="lastModifiedDate" align="center" width="150" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.lastModifiedDate ? scope.row.lastModifiedDate : '-' }} </span>
        </template>
      </el-table-column>
    </el-table>
  <!-- 分页 数据要是大于1000条时，把分页释放掉- -->
    <!-- <div class="terraceUser_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="size"
        background
        :total="allData_total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getList"
      >
      </el-pagination>
    </div> -->
    <!--启用/禁用-->
    <el-dialog :visible.sync="startOrStopDialog" :title="title_Name" width="350px" :top="dialogMt" :close-on-click-modal="false" >
      <p style="text-align:center;">
        是否{{title_Name}}二级彩种
        <span style="color:red">"{{okOrStop.name}}"</span>？
      </p>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okStartOrStop(title_Name)">确定</el-button>
        <el-button @click="startOrStopDialog = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 配置排序 -->
    <el-dialog v-if="table_row_data" :visible.sync="configOrderDialog" :title="title_Name" width="350px" top="35vh" :close-on-click-modal="false" >
      <p>
        <span class="dialog-label-item">
          一级彩种名称：
        </span>
        <el-input style="width: 160px;" :disabled="true" v-model="table_row_data.parentName"/>
      </p>
      <p>
        <span class="dialog-label-item">
          二级彩种名称：
        </span>
        <el-input style="width: 160px;" :disabled="true" v-model="table_row_data.name"/>
      </p>
      <p v-if="title_Name != '修改开奖频率'">
        <span v-if="title_Name == '配置排序'" class="dialog-label-item">
          <span class="required">*</span>排序
        </span>
        <span v-if="title_Name == '配置热门排序'" class="dialog-label-item">
          <span class="required"></span>热门排序
        </span>
        <el-input style="width: 160px;" v-model="configData.orderSeq"/>
      </p>
      <p v-if="title_Name == '修改开奖频率'">
        <span class="dialog-label-item input-remark-span">
          <span class="required">*</span>开奖频率：</span>
        <el-input style="width: 160px;" type="textarea" :autosize="{ minRows: 2}" v-model="configData.description" maxlength="20"/>
      </p>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click.native.prevent="okConfigOrder(title_Name)" :loading="confirmEditSort">确定</el-button>
        <el-button @click.native.prevent="configOrderDialog = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { valida0to100Num } from "@/utils/validate";
import { lotteryDropdownList,findByCode } from '@/api/select';
import { mergeForOrderSeq,mergeForDescription,mergeForHotSeq,disable } from "@/api/lotteryCore/lc_info/lc_second";
export default {
  name: "lc_second",
  data() {
    return {
      confirmEditSort:false,
      disableControl: false,
      loading:false, // Loading 加载
      table_id: null,
      table_row_data: null,
      startOrStopdisable: '', // 启用禁用（修改弹窗）
      startOrStopDialog: false, // 启用-禁用弹窗
      configOrderDialog: false, // 公共配置排序 弹窗
      title_Name: '', // 弹窗类型
      parentId: '', // 一级彩种id
      configData:{
        orderSeq: '',
        description: ''
      },
      lotteryLevelArr:[], // 彩种类型下拉数据
      okOrStop: {},
      dialogHeight: 0,
      dialogMt: this.dialogMt, // 弹出框上边距
     
      disabledOpen: false,
      disabledRule: false,
    };
  },
  computed: {
    ...mapState({
      allData: state => state.lc_second.allData,
      allData_total: state => state.lc_second.allDataCount,
      currentPageSize: state => state.lc_second.currentPageSize,
      firstLotterySelect: state => state.lc_second.firstLotterySelect,
      secondLotterySelect: state => state.lc_second.secondLotterySelect,
      disableArr: state => state.lc_second.disableArr,
      lotteryCategoryArr: state => state.lc_second.lotteryCategoryArr,
      frequencyArr: state => state.lc_second.frequencyArr
    }),
    size: {
      get(){
        return this.$store.state.lc_second.size;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.lc_second.page;
      },
      set(item){
        return  item;
      }
    },
    searchEdition: {
      get(){
        return this.$store.state.lc_second.searchEdition;
      },
      set(item){
        return  item;
      }
    }
  },
  methods: {
    handleSelectChange(val) {

    },
    search() { 
      this.getList();
    },
    judgeScree(val) { 
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },  
    getList(val) { 
      if(!val) {
        val = 1;
      }
      this.loading = true;
      this.disableControl = true;
      this.table_id = null;
      this.$store.state.lc_second.searchEdition.disabledSecond = true;
      this.$store.dispatch("getLcSecondPage",parseInt(val));
      let searchEdition = this.$store.state.lc_second.searchEdition;
      let data = { 
        id: this.searchEdition.id || null,
        parentId: searchEdition.parentId || null,
        disable: searchEdition.disable || null,
        category: searchEdition.category || null,
        frequency: searchEdition.frequency || null,
        level:1,
        page: this.page - 1,
        size: this.size,
      };
      this.$store.dispatch("getLcSecondInfo", data).then(res => {
        let currentPageSize = 2;
        if(res.content.length > 0) {
          currentPageSize = res.content.length;
        }else {
          currentPageSize = 2;
        }
        this.$refs.tableScroll.bodyWrapper.scrollTop = 0; 
        this.$store.dispatch('getLcSecondTableHeight', currentPageSize)
        this.loading = false;
        this.disableControl = false;
         if(searchEdition.parentId =="") {
            this.$store.state.lc_second.searchEdition.disabledSecond = true;
         }else{
            this.$store.state.lc_second.searchEdition.disabledSecond = false;
         }
      });
    },
    reset() { 
      this.$store.state.lc_second.searchEdition ={
        id: '',
        parentId: "",
        disable: '0',
        category: '', // 彩种性质
        frequency: '', // 彩种类型
        level: '1',
        disabledSecond: true, // 是否启用二级弹出框
      }    
    },
    configOrder(type) { // 配置排序
      if(!this.table_id) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      if(type == '修改开奖频率') {
        this.title_Name = '修改开奖频率';
        this.configData.description = this.table_row_data.description;
      }else if(type == '配置排序') {
        this.title_Name = '配置排序'
        this.configData.orderSeq = this.table_row_data.orderSeq;
      }else if(type == '配置热门排序') {
        this.title_Name = '配置热门排序'
        this.configData.orderSeq = this.table_row_data.hotSeq;
      }
      this.configOrderDialog = true;
    },

    okConfigOrder(type) { // 确定配置排序
      let data = {},resData = {};
      if(type == '修改开奖频率') {
        if(!this.configData.description) {
          this.$message.warning('开奖频率不能为空')
          return false;
        }
        data = {
          id: this.table_row_data.id,
          description: this.configData.description
        }
        this.confirmEditSort = true;
        mergeForDescription(data).then(res => {
          resData = res.data;
          if(resData.success == 1) {
            this.$message.success('修改成功')
            this.configOrderDialog = false;
            this.getList();
          }else {
            this.$message.error(resData.respMsg)
          }
          this.confirmEditSort = false;
        })
      }else if(type == '配置排序') {
        if(!valida0to100Num(this.configData.orderSeq)) {
          this.$message.warning('排序值为1-200的正整数')
          return false;
        }
        data = {
          id: this.table_row_data.id, // 二级彩种id
          level: 1,
          orderSeq: this.configData.orderSeq,
          parentId: this.parentId // 父级彩种id
        }
        this.confirmEditSort = true;
        mergeForOrderSeq(data).then(res => {
          let resData = res.data;
          if(resData.success == 1) {
            this.$message.success('配置成功')
            this.configOrderDialog = false;
            this.getList();
          }else {
            this.$message.error(resData.respMsg)
          }
          this.confirmEditSort = false;
        })
      }else if(type == '配置热门排序') {
        // console.log(this.configData.orderSeq == "")
        console.log(this.configData.orderSeq == "")
        console.log(this.configData.orderSeq == undefined)
        if(this.configData.orderSeq == undefined || this.configData.orderSeq == ""){
        }else{
          if(!valida0to100Num(this.configData.orderSeq)) {
            this.$message.warning('排序值为1-200的正整数')
            return false;
          }
        }
        
        data = {
          id: this.table_row_data.id,
          hotSeq: this.configData.orderSeq         
        }
        this.confirmEditSort = true;
        mergeForHotSeq(data).then(res => {
          resData = res.data;
          if(resData.success == 1) {
            this.$message.success('配置成功')
            this.configOrderDialog = false;
            this.getList();
          }else {
            this.$message.error(resData.respMsg)
          }
          this.confirmEditSort = false;
        })
      }
    },
   
    startOrStop(type,h) { // 打开启用-禁用弹窗
      
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      if (!this.table_id) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      if(type == 'start') {
        this.title_Name = "启用";
        this.startOrStopdisable = 0;
      }else if(type == 'disabled') {
        this.title_Name = "禁用";
        this.startOrStopdisable = 1;
      }
      if(type == 'start' && this.okOrStop.disable == 0){
        this.$message.warning("该数据已被启用，不可操作");
        return false;
      }else if(type == 'disabled' && this.okOrStop.disable == 1){
        this.$message.warning("该数据已被禁用，不可操作");
        return false;
      }
      this.startOrStopDialog = true
    },
    okStartOrStop(val){  // 确定启用-禁用
      let data = {
        id: this.table_id,
        disable: this.startOrStopdisable
      }
      disable(data).then(res => {
        let resData = res.data
        if(resData.success) {
          this.$message.success(resData.respMsg)
          this.startOrStopDialog = false
          this.getList();
        }else {
          this.$message.error(resData.respMsg)
        }
      })
    },
    selectOption(e){
         this.$store.state.lc_second.secondLotterySelect = [{ value: "",name: "请选择"}];
        if(e == null || e == undefined || e == "" || e == 0){
          this.$store.state.lc_second.searchEdition.disabledSecond = true;// 二级彩种名称是否可输入
          this.$store.state.lc_second.searchEdition.id = ''; // 二级彩种名称清空
          
        }else{
         this.$store.state.lc_second.searchEdition.disabledSecond = false;// 二级彩种名称是否可输入
          this.$store.state.lc_second.searchEdition.id = ''; // 二级彩种名称清空
          //  // 二级彩种接口调用数据
          lotteryDropdownList({parentId: e}).then(res => { // 初始化一级彩种列表    
              let resData = res.data;
              if(resData.success == 1) {
                let by = resData.content;
                by.forEach(element => {
                  this.$store.state.lc_second.secondLotterySelect.push(element);
                });  
                this.$store.state.lc_second.searchEdition.disabledSecond = false; // 二级彩种名称是否可输入
              }else {
                this.$message.error(resData.respMsg)
              }
          })        
        }     
      },
    handleCurrentChange(val) { // 表格数据行切换
      if(val) {
        this.okOrStop = val;
        this.table_id = val.id;
        this.table_row_data = val;
        this.parentId = val.parentId
      }
    },
    handleSizeChange(val) { // 页码切换方法
      this.$store.dispatch('getLcSecondPageSize', val);
      this.getList();
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

        this.$store.state.lc_second.allData = []
        this.$store.state.lc_second.allDataCount = 0;
        this.$store.state.lc_second.page = 1;
        this.$store.state.lc_second.size = 10;
        this.$store.state.lc_second.searchEdition ={id: '', parentId: "", disable: '0', category: '',frequency: '',level: '1',disabledSecond: true,} // 是否启用二级弹出框    
        this.$store.dispatch('getLcSecondTableHeight', 2)
      }
    }else {
      if(this.$store.state.lc_second.allData.length > 0) {
        this.getList()
      }
    }
  },
  mounted(){
    this.$nextTick(() => {
      // this.getList();
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
    this.disabledRule = true;
    this.disabledOpen = true


    lotteryDropdownList({parentId: 0}).then(res => { // 初始化一级彩种下拉列表
      this.$store.state.lc_second.firstLotterySelect = [];
      let resData = res.data;
      if(resData.success == 1) {
        this.$store.state.lc_second.firstLotterySelect = resData.content;
      }else {
        this.$message.error(resData.respMsg)
      }
    })

    findByCode({code: 'LOTTERY_CATEGORY,LOTTERY_FREQUENCY,DISABLE'}).then(res => { // 初始化彩种性质、彩种性质、状态
      let resData = res.data;
      
      if(resData.success == 1) {
        this.$store.state.lc_second.lotteryCategoryArr = resData.content['LOTTERY_CATEGORY'];
        this.$store.state.lc_second.disableArr = resData.content['DISABLE'];
        this.$store.state.lc_second.frequencyArr = resData.content['LOTTERY_FREQUENCY'];
      }else {
        this.$message.error(resData.respMsg)
      }
    })
  }
};
</script>



