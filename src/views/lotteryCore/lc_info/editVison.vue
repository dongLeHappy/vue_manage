<template>
<div>
  <ul class="lottery-items-box">
    <li class="lottery-item" v-for="item in wanfaType" :key="item.id" :class="item.playname == activeIndex ? 'lottery-item-active' : ''" 
    @click="handleLcTypeClick(item.playname,item.id)">{{ item.playname }}</li>
  </ul>
  <div class="lottery-item-detail-box">
      <!-- 生肖 -->
    <DetailShengxiao :class="shengxiaoShow ? 'showDetail' : 'hideDetail'"></DetailShengxiao>
    <!-- 五行 -->
    <DetailWuxing :class="wuxingShow ? 'showDetail' : 'hideDetail'"></DetailWuxing>
    <!-- 波色 -->
    <DetailBose :class="boseShow ? 'showDetail' : 'hideDetail'"></DetailBose>
    <!-- 方位 -->
    <DetailFangwei :class="fangweiShow ? 'showDetail' : 'hideDetail'"></DetailFangwei>
    <!-- 中发白 -->
    <DetailZhongfabai :class="zhongfabaiShow ? 'showDetail' : 'hideDetail'"></DetailZhongfabai>
  </div>
</div>
  
</template>
<script>
import { mapState } from "vuex";
import { findByPlayDetailId } from '@/api/lotteryCore/lc_info/lc_basic'
import DetailBose from './lotteryTypeDetail/detail_bose' // 引入对应子组件
import DetailFangwei from './lotteryTypeDetail/detail_fangwei'
import DetailWuxing from './lotteryTypeDetail/detail_wuxing'
import DetailZhongfabai from './lotteryTypeDetail/detail_zhongfabai'
import DetailShengxiao from './lotteryTypeDetail/detail_shengxiao'
export default {
  components: {
    DetailBose,
    DetailFangwei,
    DetailShengxiao,
    DetailWuxing,
    DetailZhongfabai,
  },
  computed: {
    ...mapState({
      lotteryData: state => state.lc_basic.lotteryData,
      wanfaType: state => state.lc_basic.wanfaType,
    })
  },
  data(){
    return{
      visonName: "",
      boseShow: false, // 控制子组件显示隐藏(切换玩儿法选项时改变该属性的值)
      wuxingShow: false,
      yuxiaxieShow: false,
      zhongfabaiShow: false,
      fangweiShow: false,
      shengxiaoShow: true, // 默认生肖组件显示
      activeIndex: '生肖（香港彩）', // 是否激活当前点击彩种选项
    }
  },
  created() {
    this.activeIndex = '生肖（香港彩）'
  },
  methods:{
    handleLcTypeClick(val,id) { // 切换彩种类型点击事件
      this.activeIndex = val
      let playDetailId = id
      this.$store.commit('SET_WANFA_DATA',[]);
      switch(val) { // 根据点击所选中的选项控制对应页面的显示隐藏
        case '生肖（香港彩）':
          // 根据选中的不同玩法拉取对应数据
          findByPlayDetailId({playDetailId: playDetailId}).then(res => {
            let resData = res.data
            if(resData.success == 1) {
              this.$store.commit('SET_WANFA_DATA', resData.content)
            }else {
              this.$message.error(resData.respMsg)
            }
          })
          this.shengxiaoShow = true;
          this.yuxiaxieShow = false;
          this.fangweiShow = false;
          this.boseShow = false;
          this.wuxingShow = false;
          this.zhongfabaiShow = false;
          break;   
        case '五行（香港彩）':
          // 根据选中的不同玩法拉取对应数据
          findByPlayDetailId({playDetailId: playDetailId}).then(res => {
            let resData = res.data
            if(resData.success == 1) {
              this.$store.commit('SET_WANFA_DATA', resData.content)
            }else {
              this.$message.error(resData.respMsg)
            }
          })
          this.wuxingShow = true;
          this.boseShow = false;
          this.yuxiaxieShow = false;
          this.zhongfabaiShow = false;
          this.fangweiShow = false;
          this.shengxiaoShow = false;
          break;
        case '波色（香港彩）':
          // 根据选中的不同玩法拉取对应数据
          findByPlayDetailId({playDetailId: playDetailId}).then(res => {
            let resData = res.data
            if(resData.success == 1) {
              this.$store.commit('SET_WANFA_DATA', resData.content)
            }else {
              this.$message.error(resData.respMsg)
            }
          })
          this.boseShow = true;
          this.wuxingShow = false;
          this.yuxiaxieShow = false;
          this.zhongfabaiShow = false;
          this.fangweiShow = false;
          this.shengxiaoShow = false;
          break;
        case '方位（快乐10分）':
          // 根据选中的不同玩法拉取对应数据
          findByPlayDetailId({playDetailId: playDetailId}).then(res => {
            let resData = res.data
            if(resData.success == 1) {
              this.$store.commit('SET_WANFA_DATA', resData.content)
            }else {
              this.$message.error(resData.respMsg)
            }
          })
          this.fangweiShow = true;
          this.yuxiaxieShow = false;
          this.boseShow = false;
          this.wuxingShow = false;
          this.zhongfabaiShow = false;
          this.shengxiaoShow = false;
          break;
        case '中发白（快乐10分）':
          // 根据选中的不同玩法拉取对应数据
          findByPlayDetailId({playDetailId: playDetailId}).then(res => {
            let resData = res.data
            if(resData.success == 1) {
              this.$store.commit('SET_WANFA_DATA', resData.content)
            }else {
              this.$message.error(resData.respMsg)
            }
          })
          this.zhongfabaiShow = true;
          this.boseShow = false;
          this.wuxingShow = false;
          this.yuxiaxieShow = false;
          this.fangweiShow = false;
          this.shengxiaoShow = false;
          break;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.lc-basic {
  .showDetail { // 控制子组件显示隐藏
    display: block;
  }
  .hideDetail {
    display: none;
  }
  .lottery-config-box {
    .lottery-info-title ul,
     .lottery-items-box ul {
        display: flex;
        align-items: center;
        li{
          list-style-type: none;
        }
     }
    .lottery-item-active { // 彩种选项选中应用样式
      background-color: #e0e0e0;
      color: #000;
    }
    .lottery-info-title {
      padding: 10px 0 20px 0;
      li {
        margin-right: 20px;
        span{
          width: 70px;
        }
      }
    }
    .lottery-items-box {  // 彩种选项容器
      padding-bottom: 10px;
      color: #797979;
      white-space: nowrap;
      // overflow-x: auto;

      &::-webkit-scrollbar { // 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸
        // width: 6px!important;
        height: 8px!important;
        background-color: #000;
        border-radius: 8px;
      }
      &::-webkit-scrollbar-thumb { // 定义滑块 内阴影+圆角
        background-color: #ccc;
        border-radius: 5px;
      }
      &::-webkit-scrollbar-track { // 定义滚动条轨道 内阴影+圆角
        -webkit-box-shadow: inset 0 0 2px #ccc;
        background-color: #fff;
      }

      .lottery-item {
        &:last-child {
          margin-right: 0;
        }
        cursor:pointer;
        border: 1px solid #d2d2d2;
        margin-right: 15px;
        padding: 0 15px;
        line-height: 29px;
        height: 29px;
        box-sizing: border-box;
        min-width: 120px;
        display: inline-block;
      }
    }
    .lottery-item-detail-box {
      border: 1px solid #d2d2d2;
      box-sizing: border-box;
      min-height: 300px;
      padding: 8px 8px 50px 8px;
      .showDetail {


      }

    }
  }
}
.add-newVison{
  p{
    float: left;
  }
}
</style>
