<template>
  <div class="app-container send-message">
    <!--消息发送-->
    <el-form>
      <ul class="heard-search">
        <li>
            <span class="rem_tit">消息标题：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.content" placeholder="请输入消息标题" maxlength="15" :disabled="disableControl"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">状态：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.disable" value-key="name" placeholder="全部" :disabled="disableControl">
                  <el-option label="全部" value=""></el-option>
                  <el-option v-for="item in disableArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>

          <li>
            <span class="rem_tit">显示终端：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.device" value-key="name" placeholder="请选择" :disabled="disableControl">
                  <el-option label="请选择" value=""></el-option>
                  <el-option v-for="item in deviceType" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" @click="search" :disabled="disableControl">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" size="mini" @click="reset" :disabled="disableControl">
          <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" size="mini" @click="previewMessage" :disabled="disableControl">
          <svg-icon icon-class="yulan" />
          预览消息</el-button>
        <el-button type="primary" size="mini" @click="openOrClose('open')" :disabled="disableControl">
          <svg-icon icon-class="qiyong1" />
          启用</el-button>
        <el-button type="primary" size="mini" @click="openOrClose('close')" :disabled="disableControl">
          <svg-icon icon-class="jinyong1" />
          禁用</el-button>
        <el-button type="primary" size="mini" @click="addMessage(380)" :disabled="disableControl">
          <svg-icon icon-class="xiaoxi" />
          新增消息</el-button>
      </el-form-item>
    </el-form>
    <!-- 数据表格 -->
    <div class="table-data">
      <el-table
          background
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            highlight-current-row
            class="tableAuto216"
            :height="currentPageSize*25 + 34"
            @current-change="handleCurrentChange"
            border
            v-loading="loading"
          >
          <el-table-column width="35">
            <template slot-scope="scope">
                <el-radio :label="scope.row.id"  v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
              </template>
          </el-table-column>
          <el-table-column label="序号" type="index" align="center" width="50" show-overflow-tooltip>
            <template slot-scope="scope">
              <span>{{scope.$index+(page - 1) * size + 1}}</span>
            </template>
          </el-table-column>
          <el-table-column sortable prop="id" align="center" label="平台消息ID" :show-overflow-tooltip="true">
            <template slot-scope="scope">
                <span> {{scope.row.id ? scope.row.id : '--'}} </span>
            </template>
          </el-table-column>
          <el-table-column prop="title" align="center" label="消息标题" show-overflow-tooltip>
            <template slot-scope="scope">
                <span> {{scope.row.title ? scope.row.title : '--'}} </span>
            </template>
          </el-table-column>
          <el-table-column prop="content" align="center" label="滚动显示内容" width="120" show-overflow-tooltip>
            <template slot-scope="scope">
                <span> {{scope.row.content ? scope.row.content : '--'}} </span>
            </template>
          </el-table-column>
          <el-table-column sortable prop="disable" align="center" label="状态">
            <template slot-scope="scope">
                <span> {{ scope.row.disable ? '禁用' : scope.row.disable == false ? '启用' : '--' }} </span>
            </template>
          </el-table-column>
          <el-table-column sortable prop="device" align="center" label="显示终端" >
            <template slot-scope="scope">
                <span> {{scope.row.device == 0 ? 'PC' : scope.row.device == 1 ? 'H5' : '--'}} </span>
            </template>
          </el-table-column>
          <el-table-column prop="createdBy" align="center" label="创建人">
            <template slot-scope="scope">
                <span> {{scope.row.createdBy ? scope.row.createdBy : '--'}} </span>
            </template>
          </el-table-column>
          <el-table-column sortable prop="createdDate" align="center" label="创建时间" width="150" show-overflow-tooltip>
            <template slot-scope="scope">
                <span> {{scope.row.createdDate ? scope.row.createdDate : '--'}} </span>
            </template>
          </el-table-column>
          <el-table-column prop="lastModifiedBy" align="center" label="修改人">
            <template slot-scope="scope">
                <span> {{scope.row.lastModifiedBy ? scope.row.lastModifiedBy : '--'}} </span>
            </template>
          </el-table-column>
          <el-table-column sortable prop="lastModifiedDate" align="center" label="修改时间" width="150" show-overflow-tooltip>
            <template slot-scope="scope">
                <span> {{scope.row.lastModifiedDate ? scope.row.lastModifiedDate : '--'}} </span>
            </template>
          </el-table-column>
        </el-table>
    </div>
    <!-- 分页    数据要是大于1000条时，把分页释放掉-->
    <!-- <div class="terraceUser_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="size"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getList"
      >
      </el-pagination>
    </div> -->
    <!-- 启用/禁用 -->
    <el-dialog :visible.sync="startStopUsingDialog" :title="titleName" width="350px" top="35vh"
              :close-on-click-modal="false">
      <p style="text-align:center;">
        是否{{titleName}}消息
        <span style="color:red">"{{table_row_data ? table_row_data.title : ''}}"</span>？<br/>
        <!-- <span v-if="titleName == '启用' " style="color:red">* 启用后，本条消息将重新发送。</span> -->
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="confirmOkOrStop(titleName)">确 定</el-button>
        <el-button size="mini" @click="startStopUsingDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 预览消息 -->
    <el-dialog :visible.sync="previewDialog" title="预览消息" width="350px" top="35vh"
              :close-on-click-modal="false">
      <div class="dialog-box visonDialog previewMsg">
        <p>
          <span class="dialog-label-item terminal">
            <span style="color:red"></span>显示终端:
          </span>
          <span>{{ table_row_data.device == 0 ? 'PC' : table_row_data.device == 1 ? 'H5' : '--' }}</span>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red"></span>显示内容:
            <svg-icon icon-class="voice" />
          </span>
          <div class="wrap">
            <div class="box" ref="box" :style="{transform:'translateX(' + distance + 'px)'}">
              <div class="marquee" ref="marquee">{{table_row_data.content}}</div>
              <div>{{copyText}}</div>
            </div>
            <div class="node">{{table_row_data.content}}</div>
          </div>
        </p>
        <span slot="footer" style="margin-left:270px" class="dialog-footer">
          <el-button type="primary" size="mini" v-model="playing" @click="playMsg">播放</el-button>
        </span>
      </div>
    </el-dialog>
    <!-- 新增消息 -->
    <el-dialog :visible.sync="addMsgDialog" title="新增消息" width="350px" top="32vh"
              :close-on-click-modal="false">
      <div class="dialog-box visonDialog sendMsg">
        
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>消息标题:
          </span>
          <el-input v-model="addMsgData.title" style="width: 200px;"/>
        </p>
        <!-- <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>排序:
          </span>
          <el-input v-model="addMsgData.orderSeq" style="width: 200px;"/>
        </p> -->
        <p>
          <span class="dialog-label-item">
            <span style="color:red"></span>状态:
          </span>
          <el-input placeholder="禁用" :disabled="true" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>显示终端:
          </span>
          <el-select v-model="addMsgData.device" placeholder="请选择">
            <el-option v-for="item in deviceType" :key="item.id" :label="item.name" :value="item.value"></el-option>
          </el-select>
        </p>
        <p>
          <span class="dialog-label-item" style="margin-bottom:17px;">
            <span style="color:red">*</span>滚动显示内容:
          </span>
          <el-input v-model="addMsgData.content" type="textarea" style="width: 200px;"/>
        </p>
        <div slot="footer" class="dialog-footer" style="padding:5px;margin-left:180px" >
          <el-button type="primary" size="mini" @click="saveSend" :loading="saveAddNews">保存</el-button>
          <el-button type="primary" size="mini" @click="addMsgDialog = false">取消</el-button>
        </div>

      </div>
    </el-dialog>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import { validsevendata,validOneToFiveth } from "@/utils/validate";
import { mergeForDisable,persistEntity,saveSendMsg } from '@/api/lotteryCore/lc_agentManage/clientManage'
import { findByCode } from '@/api/select'
export default {
  name: 'lc_clientManage',
  data(){
    return{
      saveAddNews:false, // 新增消息保存按钮Loading
      disableControl: false,
      table_id:null,
      table_row_data:"",
      startStopUsingDialog:false,
      previewDialog:false,
      titleName:"",
      copyText:'',
      width:200,
      distance:0,
      playing:false,
      start:'',
      addMsgDialog:false,
      dialogMt:this.dialogMt, // 弹出框上边距
      dialogHeight:0,
      loading:false, // Loading 加载
      // searchEdition:{
      //   content:"", // 消息标题
      //   disable:"", //状态
      //   device:"" // 显示终端
      // },
      deviceType :[], // 终端设备下拉数据
      disableArr:[], // 状态下拉数据
      addMsgData:{
        title: '',
        // orderSeq: '',
        device: '',
        content: ''
      }
    }
  },
  computed:{
    ...mapState({
      tableData:state => state.lc_clientManage.allData,
      total:state => state.lc_clientManage.allDataCount,
      currentPageSize:state =>state.lc_clientManage.currentPageSize
    }),
    size: {
      get(){
        return this.$store.state.lc_clientManage.pageSize;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.lc_clientManage.page;
      },
      set(item){
        return  item;
      }
    },
    searchEdition:{
      get(){
        return this.$store.state.lc_clientManage.searchEdition;
      },
      set(item){
        return  item;
      }
    }
  },
  methods: {
    search() {
      this.getList()
    },
    getList(val){ // 查询/获取表格数据
      this.loading = true; // 请求接口时loading启用
      this.disableControl = true;
      this.table_id = '';
      if(!val) {
        val = 1;
      }
      
      this.$store.dispatch('getSendMsgPage',parseInt(val))

      let data ={
        title: this.$store.state.lc_clientManage.searchEdition.content,
        disable: this.$store.state.lc_clientManage.searchEdition.disable,
        device: this.$store.state.lc_clientManage.searchEdition.device,
        page: this.page - 1,
        size: this.size
      };
       let that = this;
      this.$store.dispatch("getMsgTableData",data).then(res =>{
        let currentPageSize = 2;
        if(res.success == 1){
          if(res.content.content.length > 0) {
            currentPageSize = res.content.content.length;
          }else {
            currentPageSize = 2;
          }
        }else{
          this.$message.error(res.respMsg)
        }
        
        this.$store.dispatch('getSendMsgTableHeight', currentPageSize)
        this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行
        this.loading = false; 
        this.disableControl = false;
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")   
          that.loading = false; 
          that.disableControl = false;   
          that.$store.state.lc_clientManage.currentPageSize = 2;
          that.$store.state.lc_clientManage.allData = [];
          that.$store.state.lc_clientManage.allDataCount = 0;
      });
    },
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    reset() { // 重置
      this.$store.state.lc_clientManage.searchEdition = {
        content: '',
        disable:"",
        device:""
      }
    },
    previewMessage(){ // 预览消息
      if (!this.table_id) {
        this.$message.warning('请选择一条数据!');
        return false;
      }
      clearInterval(this.start) // 清除定时器
      this.playing = false;
      this.previewDialog = true;
    },
    playMsg(){ // 播放消息
      if(this.playing == false){
        this.start = setInterval(() => {
          this.move();
        },20)
        this.playing = true;
      }else{
        clearInterval(this.start)
        this.playing = false;
      }
    },
    addMessage(h){ // 新增消息
      if(this.previewDialog == false){
        clearInterval(this.start);
      }
      this.addMsgData.title = '';
      // this.addMsgData.orderSeq = '';
      this.addMsgData.device = '';
      this.addMsgData.content = '';
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.addMsgDialog = true;
    },
    saveSend(){ // 确认新增消息
      if(!validOneToFiveth(this.addMsgData.title)){
        this.$message.warning("消息标题仅支持2-15位中英文,数字");
        return false;
      }
      
      if(this.addMsgData.device == null || this.addMsgData.device == undefined || this.addMsgData.device == '') {
        this.$message.warning("请选择显示终端");
        return false;
      }
      if(!this.addMsgData.content) {
        this.$message.warning("消息内容不能为空");
        return false;
      }
      this.saveAddNews = true;
      persistEntity(this.addMsgData).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.addMsgDialog = false;
          this.getList();
        }else {
          this.$message.error(resData.respMsg)
        }
        this.saveAddNews = false;
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
    },
    openOrClose(val){ // 启用-禁用
      // mergeForDisable
      if (!this.table_id) {
        this.$message.warning('请选择一条数据!');
        return false;
      }
      if (val == "open") {
        this.titleName = "启用"
      }else{
        this.titleName = "禁用"
      }
      if(val == "open" && this.table_row_data.disable == false){
        this.$message.warning("该数据已被启用，不可操作");
        return false;
      }else if(val == "close" && this.table_row_data.disable == true){
        this.$message.warning("该数据已被禁用，不可操作");
        return false;
      }
      this.startStopUsingDialog = true;
    },
    confirmOkOrStop(val){ // 确认启用/禁用
      let data = {
        id: this.table_id,
        disable: !this.table_row_data.disable
      }

      mergeForDisable(data).then(res => {
        
        let resData = res.data;
        if(resData.success == 1) {
          
          this.$message.success(resData.respMsg)
          this.startStopUsingDialog = false;
          this.getList()
        }else {
          this.$message.error(resData.respMsg)
        }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });

     
    },
    move () {  // 滚动文字
      // 获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）
      this.copyText = this.table_row_data.content; // 文字副本填充
      //设置位移
      this.width = this.$refs.marquee.clientWidth + 16;
      this.distance = this.distance - 1;
      // 如果位移超过文字宽度，则回到起点
      if (this.distance <= -(this.width)) {
        this.distance = 1
      }
    },
    handleCurrentChange(val){ // 表格行点击事件
      if(val != null){
        this.table_row_data = val;
        this.table_id = val.id;
      }
    },
    handleSizeChange(val){ // 分页
      this.$store.dispatch('getSendMsgPageSize', val);
      this.getList();
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
        this.$store.state.lc_clientManage.allData = []
        this.$store.state.lc_clientManage.allData_total = 0;
        this.$store.state.lc_clientManage.page = 1;
        this.$store.state.lc_clientManage.size = 10;
        this.$store.state.lc_clientManage.searchEdition = {
          content: '',
          disable:"",
          device:""
        }
        this.$store.dispatch('getSendMsgTableHeight', 2)
      }
    }else {
      if(this.$store.state.lc_clientManage.allData.length > 0) {
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

    findByCode({code: 'DISABLE,DEVICE'}).then(res => { // 初始化状态下拉列表
      let resData = res.data;
      if(resData.success == 1) {
       let by_disableArr = resData.content['DISABLE']// 初始化状态下拉列表
       let by_deviceType = resData.content['DEVICE']// 初始化状态下拉列表
         by_disableArr.forEach(element => {
            this.disableArr.push(element);
          });
          by_deviceType.forEach(element => {
            this.deviceType.push(element);
          });
      }else {
        this.$message.error(resData.respMsg)
      }
    }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
  }
}
</script>
<style lang="scss">
.visonDialog{
  .terminal{
    margin-left:13px!important;
  }
}
.previewMsg p{
  margin-left: -20px;
}
.sendMsg .el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 200px;
}
.sendMsg p{
  margin-left: -20px;
}
.sendMsg .dialog-footer{
  margin: 10px 0 5px 0;
}
.wrap {
    overflow: hidden;
    position: relative;
    top: -35px;
    left: 110px;
    width: 55%;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    border: 1px solid gainsboro;
  }
  .box {
    width: 80000%;
  }
  .box div {
    float: left;
  }
  .marquee {
    margin: 0 16px 0 0;
  }
  .node {
    position: absolute;
    z-index: -999;
    top: -999999px;
  }
  // .visonDialog svg{
  //   position: relative;
  //   top:0px;
  //   height: 20px;
  //   width: 20px;
  // }
</style>
