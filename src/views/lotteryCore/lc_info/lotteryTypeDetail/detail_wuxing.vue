<template>
    <!-- 五行 -->
    <div class="wuxing-container">
        <p class="wuxing-head"><span>五行</span><span>球号</span></p>
        <ul class="wuxing-content">
            <li v-for="(item,index) in wanfaData" :key="index">
                <span class="names">{{ item.betValue }}</span>
                <p>
                   <span v-for="(ball,ballindex) in item.playBalls" :key="ballindex">{{ ball.ballValue }}</span>
                </p>
            </li>
        </ul>

    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'detail_wuxing',
    computed: {
        ...mapState({
        wanfaData: state => state.lc_basic.wanfaData
        })
    }
}
</script>
<style lang="scss" scoped>

@import '@/styles/commonWanfa.scss';
    .wuxing-container{
        .ball-item{
            width: 13%;
        }
    }

  .attention{
    color: red;
    display: inline-block;
    width:260px;
    margin-top: 7px;
  }
.wuxing-container{
    .selectPos{
        position:relative;
        top:-12px;
    }
    .wuxing-head{
        display: flex;
        margin: 0!important;
        justify-content: space-between;
        span{
            display: inline-block;
            height: 30px;
            line-height: 30px;
            margin-right: 10px;
            // background: #ebeef5;
            text-align: center;
            border: 1px solid gainsboro;
        }
        >span:first-child{
            width: 164px;
        }
        span:last-child{
            width: 80%;
        }
    }
    .wuxing-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li{
            border-bottom: 1px solid gainsboro;
            display: flex;
            height: 70px;
            line-height: 70px;
            margin-top: 10px;
            span{
                display: inline-block;
                height: 30px;
                line-height: 30px;
                text-align: center;
                border: 1px solid gainsboro;
            }
            .names{
                width: 164px;
                margin-top: 20px;
            }
            p{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                line-height: 30px;
                width: 80%;
                margin-left: 10px;
                span{
                    display: inline-block;
                    height: 30px;
                    width: 19%;
                    line-height: 30px;
                    text-align: center;
                    background: #f5f7fa;
                    margin-right: 5px;
                    border: 1px solid gainsboro;
                }
            }
        }
    }
}
</style>




