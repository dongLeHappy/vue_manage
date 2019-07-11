<template>
<!-- 中发白 -->
    <div class="zhongfabai-container">
        <p class="zhongfabai-head"><span>选项</span><span>球号</span></p>
        <ul class="zhongfabai-content">
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
import { zodiscList } from '@/api/lotteryCore/lc_info/lc_zodisc'
export default {
    name:'detail_zhongfabai',
    computed: {
        ...mapState({
        wanfaData: state => state.lc_basic.wanfaData
        })
    }
}
</script>
<style lang="scss" scoped>
    @import '@/styles/commonWanfa.scss';
    .bose-container{
        .ball-item{
            width: 13%;
        }
    }
    .attention{
        color: red;
        display: inline-block;
        width: 260px;
        margin-top: 7px;
    }
    .zhongfabai-container{
        .selectPos{
        position:relative;
        top:-12px;
    }
    .zhongfabai-head{
        display: flex;
        flex-direction: row;
        span{
            display: inline-block;
            height: 30px;
            line-height: 30px;
            margin-right: 10px;
             background: #ebeef5;
            text-align: center;
            border: 1px solid gainsboro;
        }
        >span:first-child{
            width: 20%;
        }
        span:last-child{
            width: 80%;
        }
    }
    .zhongfabai-content{
        display: flex;
        flex-direction: column;
        li{
            border-bottom: 1px solid gainsboro;
            // padding: 5px 0 5px 0;
            display: flex;
            flex-direction: row;
            height: 40px;
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
                width: 20%;
            }
            p{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                line-height: 30px;
                width: 80%;
                span{
                    display: inline-block;
                    height: 30px;
                    width: 13%;
                    line-height: 30px;
                    text-align: center;
                    background: #f5f7fa;
                    margin-left: 8px;
                    border: 1px solid gainsboro;
                }
            }
        }
    }
}
</style>


