<template>
  <!-- 玩法下注值管理 -->
  <div class="app-container">
    <el-form >
      <ul class="heard-search">
        <li>
          <span class="rem_tit">一级彩种名称：</span>
          <span class="rem_con">
            <el-select v-model="searchEdition.parentLotteryId" placeholder="请选择" :disabled="disableControl" @change="selectFirstLottery">
              <el-option v-for="item in firstSelect" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </span>
        </li>
         <li>
          <span class="rem_tit">一级玩法名称：</span>
          <span class="rem_con">
            <el-select v-model="searchEdition.menuPlayRuleId" placeholder="请选择" :disabled="firstRuleDisabled" @change="selectFirstRule">
              <el-option v-for="item in firstRule" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </span>
        </li>
         <li>
          <span class="rem_tit">二级玩法名称：</span>
          <span class="rem_con">
            <el-select v-model="searchEdition.playRuleId" placeholder="请选择" :disabled="secondRuleDisabled">
              <el-option v-for="item in secondRule" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </span>
        </li>
         <li>
            <span class="rem_tit">下注值：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.betValue" :disabled="disableControl" placeholder="请输入下注值" maxlength="10"></el-input>
            </span>
          </li>
        <li>
          <span class="rem_tit">H5是否可用：</span>
          <span class="rem_con">
            <el-select v-model="searchEdition.h5Flag" placeholder="启用" :disabled="disableControl">
              <el-option
                v-for="item in hfiveAll"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select> 
          </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" @click.native.prevent="search" :disabled="disableControl">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" size="mini" @click.native.prevent="reset" :disabled="disableControl">
            <svg-icon icon-class="zhongzhi" />
          重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 多选表格 -->
    <el-table
      background
      ref="tableScroll"
      :data="allData"
      tooltip-effect="dark"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%;"
      border
      class="tableAuto216"
      :height="currentPageSize*25 + 34"
      v-loading="loading"
    >
      <el-table-column label width="35" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
        </template>
      </el-table-column>
      <el-table-column label="序号" type="index" align="center" width="50" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{scope.$index+(page - 1) * size + 1}} </span>
        </template>
      </el-table-column>
      <el-table-column label="一级彩种名称" prop="parentLotteryName"   show-overflow-tooltip align="center">
        <template slot-scope="scope">
          <span> {{ scope.row.parentLotteryName ? scope.row.parentLotteryName : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="一级玩法名称" prop="parentBetOnValue" show-overflow-tooltip align="center">
        <template slot-scope="scope">
          <span> {{ scope.row.parentBetOnValue ? scope.row.parentBetOnValue : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="二级玩法名称" prop="betOnValue" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.betOnValue ? scope.row.betOnValue : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="下注值" prop="betValue" align="center" width="100" show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.betValue ? scope.row.betValue :  '-' }}
        </template>
      </el-table-column>
      <el-table-column label="H5是否可用" prop="h5Flag" width="120" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.h5Flag ? scope.row.h5Flag : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="创建人" prop="createdBy" align="center" width="150" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.createdBy ? scope.row.createdBy : '-' }} </span>
        </template>
      </el-table-column>
       <el-table-column label="创建时间" prop="createdDate" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.createdDate ? scope.row.createdDate : '-' }} </span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="修改人" prop="lastModifiedBy" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.lastModifiedBy ? scope.row.lastModifiedBy : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="修改时间" prop="lastModifiedDate" align="center" width="150" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.lastModifiedDate ? scope.row.lastModifiedDate : '-' }} </span>
        </template>
      </el-table-column> -->
    </el-table>
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
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { valida0to100Num } from "@/utils/validate";
import { lotteryDropdownList,findByParentLotteryId,findByMenuPlayRuleId } from '@/api/select';
import { mergeForOrderSeq,disable } from "@/api/lotteryCore/lc_info/lc_playBetValue";
export default {
  name: "lc_playBetValue",
  data() {
    return {
      loading:false, // Loading 加载
      table_id: "", // 监听当前行ID
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
      firstSelect: [{ value: "",name: "请选择"}], // 一级彩种下拉列表数据
      firstRule:[], // 一级玩法名称
      secondRule:[], // 二级玩法名称
      hfiveAll: [{ value: "",name: "请选择"},{ value: "1",name: "是"},{ value: "2",name: "否"}],// 启用状态下拉列表数据
    };
  },
  computed: {
    ...mapState({
      allData: state => state.lc_playBetValue.allData,
      allData_total: state => state.lc_playBetValue.allData_total,
      currentPageSize: state => state.lc_playBetValue.currentPageSize
    }),
    size: {
      get(){
        return this.$store.state.lc_playBetValue.size;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.lc_playBetValue.page;
      },
      set(item){
        return  item;
      }
    },
    searchEdition:{ // 查询栏
      get(){
        return this.$store.state.lc_playBetValue.searchEdition;
      },
      set(item){
        return  item;
      }
    },
    disableControl:{ // 不可编辑所有
      get(){
        return this.$store.state.lc_playBetValue.disableControl;
      },
      set(item){
        return  item;
      }
    },
    firstRuleDisabled:{ // 一级玩法不可编辑
      get(){
        return this.$store.state.lc_playBetValue.firstRuleDisabled;
      },
      set(item){
        return  item;
      }
    },
    secondRuleDisabled:{ // 二级玩法不可编辑
      get(){
        return this.$store.state.lc_playBetValue.secondRuleDisabled;
      },
      set(item){
        return  item;
      }
    }, 
  },
  methods: {
    search() { // 查询
      this.getList();
    },
    reset() { // 重置
      this.$store.state.lc_playBetValue.searchEdition =  { //  查询栏
          parentLotteryId: "", // 一级彩种名称
          menuPlayRuleId: "", // 一级玩法名称
          playRuleId: "", // 二级玩法名称
          betValue: "", // 下注值
          h5Flag: "", // 是否启用
      }
      this.$store.state.lc_playBetValue.firstRuleDisabled = true;// 一级玩法不可编辑
      this.$store.state.lc_playBetValue.secondRuleDisabled = true;// 二级玩法不可编辑
      // this.$store.state.lc_playBetValue.disableControl = true;
    },
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    getList(val) { // 初始化表格数据
      if(!val) {
        val = 1;
      }
      this.loading = true;
      this.$store.state.lc_playBetValue.disableControl = true;
      this.table_id = "";
      this.$store.dispatch('getBetValuePage',parseInt(val))
      
      let data = {
        page: this.page -1,
        size: this.size,
        parentLotteryId: this.$store.state.lc_playBetValue.searchEdition.parentLotteryId || null, // 一级彩种ID
        menuPlayRuleId: this.$store.state.lc_playBetValue.searchEdition.menuPlayRuleId || null, // 一级玩法ID
        playRuleId: this.$store.state.lc_playBetValue.searchEdition.playRuleId || null, // 二级玩法ID
        betValue: this.$store.state.lc_playBetValue.searchEdition.betValue || null, // 下注值
        h5Flag: this.$store.state.lc_playBetValue.searchEdition.h5Flag || null, // 是否启用
      }

      this.$store.dispatch("getFindParentPage",data).then(res => {
        
        if(res.success == 1){
          let currentPageSize = 2;
          if(res.content.content.length > 0) {
            currentPageSize = res.content.content.length;
          }else {
            currentPageSize = 2;
          }
          this.$store.dispatch('getBetValueTableHeight', currentPageSize)
          this.$refs.tableScroll.bodyWrapper.scrollTop = 0;
        }else{
          this.$message.error(res.respMsg)
        }
        this.loading = false; // 接口返回数据时，loading禁用
        this.$store.state.lc_playBetValue.disableControl = false;
        
      });
    },
    handleSizeChange(val) { // 页码切换
      this.$store.dispatch('getBetValuePageSize', val);
      this.getList();
    },
    handleCurrentChange(val) { // 表格数据行切换
      console.log(val)
      if(val != null) {
        this.table_id = val.id;
      }
    },
    selectFirstLottery(e){ // 一级彩种选中事件,请求一级玩法 
      this.firstRule  =[{ value: "",name: "请选择"}];
      this.$store.state.lc_playBetValue.searchEdition.menuPlayRuleId = ""; // 一级玩法名称
      this.$store.state.lc_playBetValue.searchEdition.playRuleId = ""; // 二级玩法名称
      if(e == null || e == undefined || e == "" || e == 0){
        this.$store.state.lc_playBetValue.firstRuleDisabled = true;// 一级玩法不可编辑
        this.$store.state.lc_playBetValue.secondRuleDisabled = true;// 二级玩法不可编辑
      }else{
        //  // 二级彩种接口调用数据
        findByParentLotteryId({parentLotteryId: e}).then(res => { // 初始化一级彩种列表   
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.firstRule.push(element);
              });  
              this.$store.state.lc_playBetValue.firstRuleDisabled = false;// 一级玩法是否可输入
              this.$store.state.lc_playBetValue.secondRuleDisabled = true;// 二级玩法不可编辑
             // this.disabledSecond = false; // 二级彩种名称是否可输入
            }else {
              this.$message.error(resData.respMsg)
            }
        })        
      }     
    },
    selectFirstRule(e){ // 选中一级玩法，选择二级玩法
      this.secondRule  =[{ value: "",name: "请选择"}];
        this.$store.state.lc_playBetValue.searchEdition.playRuleId = ""; // 二级玩法名称
      if(e == null || e == undefined || e == "" || e == 0){
          this.$store.state.lc_playBetValue.secondRuleDisabled = true;// 二级玩法是否可输入
      }else{
      
        //  // 二级彩种接口调用数据
        findByMenuPlayRuleId({menuPlayRuleId: e}).then(res => { // 初始化一级彩种列表   
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.secondRule.push(element);
              });  
                this.$store.state.lc_playBetValue.secondRuleDisabled = false;// 二级玩法是否可输入
            }else {
              this.$message.error(resData.respMsg)
            }
        })        
      }
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

        this.$store.state.lc_playBetValue.allData = []
        this.$store.state.lc_playBetValue.allData_total = 0;
        this.$store.state.lc_playBetValue.page = 1;
        this.$store.state.lc_playBetValue.size = 10;
        this.$store.state.lc_playBetValue.firstRuleDisabled = true;// 一级玩法不可编辑
        this.$store.state.lc_playBetValue.secondRuleDisabled = true;// 二级玩法不可编辑
         this.$store.state.lc_playBetValue.searchEdition =  { //  查询栏
          parentLotteryId: "", // 一级彩种名称
          menuPlayRuleId: "", // 一级玩法名称
          playRuleId: "", // 二级玩法名称
          betValue: "", // 下注值
          h5Flag: "", // 是否启用
      }
        this.$store.dispatch('getBetValueTableHeight', 2)
      }
    }else {
      if(this.$store.state.lc_playBetValue.allData.length > 0) {
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
    lotteryDropdownList({parentId: 0}).then(res => { // 初始化一级彩种下拉列表
      let resData = res.data;
      if(resData.success == 1) {
         let by_firstSelect = resData.content;
           by_firstSelect.forEach(element => {
              this.firstSelect.push(element);
            });
      }else {
        this.$message.error(resData.respMsg)
      }
    })
  }
};
</script>
<style lang="scss" scope>
</style>


