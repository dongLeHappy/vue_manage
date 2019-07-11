<template>
  <!-- 在线人数设置 -->
  <div>
    <!--在线人数管理 ---搜索栏 -->
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">当前使用的在线人数版本名称：</span>
          <span class="rem_con">
            <el-input v-model="onlinePeople.name" :disabled="disabledALL" placeholder="请输入投注上限版本名称" maxlength="15"></el-input>
          </span>
        </li>
        <li>
          <span class="rem_tit">是否开启</span>
          <span class="rem_con">
              <el-select v-model="onlinePeople.disable" :disabled="disabledALL" value-key="name" placeholder="请选择">
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
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="editPercent('checkDetail',711)">
          <svg-icon icon-class="chakanxiangqing" />
          查看详情</el-button>
      </el-form-item>
    </el-form>
    <!--启用-->
    <el-dialog :visible.sync="enableOrUseDialog" title="启用" width="350px" :top="dialogMt">
      <p style="text-align:center;">
        是否确定启用当前使用的在线人数版本
        <span style="color:red">"{{onlinePeople.name}}"</span>？
      </p>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmOkOrStop">确定</el-button>
        <el-button @click="enableOrUseDialog = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 查看详情 -->
    <el-dialog :visible.sync="enableOrUseDialog" title="启用" width="350px" :top="dialogMt">
      <onlinePeopleDetail></onlinePeopleDetail>  
    </el-dialog>
  </div>
</template>
<script>
import onlinePeopleDetail from '../systemManage/ag_sm_userdefine_odd'
export default {
  components:{
    onlinePeopleDetail
  },
  data(){
    return{
      onlinePeople:{
        name:"",
        disable:""
      },
      disabledALL:true,
      theStatus:[],
      enableOrUseDialog:false,

    }
  },
  methods:{ 
    getList() { // 查询
      
    },
    resetTable() { // 重置
      this.onlinePeople = {
        name: "",
        disable: ""
      }
    },
    enableOrUse() { // 启用
      this.enableOrUseDialog = true;
    },
    confirmOkOrStop() { // 确认启用
      this.enableOrUseDialog = false;
    },
    editPercent() { // 查看详情

    }
  }  
}
</script>
