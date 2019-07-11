<template>
  <div class="app-container check-vison">
    <div class="checkVison-head">
      <p><span>生肖</span><span>球号</span></p>
      <p><span>生肖</span><span>球号</span></p>
    </div>
    <div class="ball-box">
      <ul>
        <li v-for="(item,index) in wanfaData" :key="index">
            <span class="ball-title">{{ item.betValue }}</span>
            <p>
                <span class="ball-no" v-for="(ball,ballindex) in item.playBalls" :key="ballindex">{{ ball.ballValue }}</span>
            </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { zodiscList } from '@/api/lotteryCore/lc_info/lc_zodisc'
export default {
  name:'detail_shengxiao',
  computed: {
      ...mapState({
        wanfaData: state => state.lc_basic.wanfaData
      })
  }
}
</script>
<style lang="scss" scope>
  .check-vison{
    // border: 1px solid gainsboro;
    min-width: auto;
    padding: 0;
    .checkVison-head {
      width: 100%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      p{
        width: 50%;
        span{
          border: 1px solid gainsboro;
          width: 70%;
          display: inline-block;
          height: 30px;
          line-height: 30px;
          text-align: center;
        }
        span:first-child{
          width: 104px;
          margin-right: 10px;
        }
      }
    }
    .ball-box {
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 50%;
          display: flex;
          margin-bottom: 10px;
          border-bottom: 1px solid gainsboro;
          padding-bottom: 10px;
          .ball-title {
            width: 104px;
            border: 1px solid gainsboro;
            height: 30px;
            line-height: 30px;
            text-align: center;
          }
          p {
            margin-left: 10px;
            height: 30px;
            line-height: 30px;
            display: flex;
          }
          .ball-no {
            width: 43px;
            text-align: center;
            border: 1px solid gainsboro;
            background: #f5f7fa;
            margin-right: 10px;
          }
        }
      }
      
    }
    
  }

</style>
