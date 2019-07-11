<template>
  <div>
    <div class="data-head">
      <div class="btnGroup" v-if="thisLottery == '编辑赔率'?true:false">
        <el-button type="primary" size="mini" @click="startEnable('edit')">
          <svg-icon icon-class="bianji" />
            启用编辑</el-button>
        <el-button type="primary" size="mini" @click="startEnable('save')">
            <svg-icon icon-class="baocun" />
            保存</el-button>
      </div>
    </div>
    <div class="people-data-list">
      <div class="people-data-head">
        <p>展示时间</p>
        <p>在线人数</p>
      </div>
      <div class="people-data-content">
        <ul>
          <li v-for="item,index in listArr" :key="index">
            <span>{{item.name}}</span>
            <span>
              <el-input placeholder="请输入内容" :disabled="isDisable"> </el-input>
              <em>至</em>
              <el-input placeholder="请输入内容" :disabled="isDisable" > </el-input>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["thisLottery"],
  data(){
    
    return{
      isDisable:true,
      listArr:[
        {name:"aaa",id:1},
        {name:"bbb",id:2},
        {name:"ccc",id:3},
        {name:"ddd",id:4},
        {name:"eee",id:5},
        {name:"fff",id:6},
        {name:"ggg",id:7},
        {name:"hhh",id:8},
        {name:"iii",id:9},
        {name:"jjj",id:10},
        {name:"kkk",id:11},
        {name:"lll",id:12},
        {name:"mmm",id:13},
        {name:"nnn",id:13},
      ],
    }
  },
  methods:{
    startEnable(val){
      if(val == 'edit'){
        this.isDisable = false;
      }
      if(val == 'save'){
        this.isDisable = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .data-head{
    height: 30px;
    .btnGroup{
      float: right;
    }
  }
  .people-data-list{
    padding-top: 10px;
    border: 1px solid #dcdfe6;
    .people-data-head{
      display: flex;
      flex-direction: row;
      width: 80%;
      margin: auto;
      p{
        width: 50%;
        text-align: center;
        background-color: #F5F7FA;
        border: 1px solid #dcdfe6;
        line-height: 30px;
        &:last-child{
          margin-left: 20px;
        }
      }
    }
    .people-data-content::-webkit-scrollbar {
      display: none;
    }
    .people-data-content{
      margin: 10px auto;
      max-height: 394px;
      width: 90%;
      overflow: auto;
      border: 1px solid #dcdfe6;
      ul{
        li{
          display: flex;
          flex-direction: row;
          &:first-child{
            span{
              border-top: none;
            }
          }
          span{
            display: inline-block;
            width: 50%;
            text-align: center;
            background-color: #F5F7FA;
            line-height: 30px;
            border: 1px solid #dcdfe6;
            border-bottom: none;
            // border-left: 
            &:first-child{
              border-right: none;
              border-left: none;
              // \bo
            }
            &:last-child{
              border-right: none;
            }
            input{
              border: none;
              outline: none;
              background-color: transparent;
              width: 100%;
              height: 30px;
              text-align: center;
            }
            em{
              font-style:normal
            }
          }
        }
      }
        
    }
  }
</style>