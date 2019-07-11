<template>
<!-- 波色 -->
    <div class="bose-container">
        <p class="bose-head"><span>波色</span><span>球号</span></p>
        <ul class="bose-content">
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
    name:'detail_bose',
    computed: {
    ...mapState({
      wanfaData: state => state.lc_basic.wanfaData
    })
  },
}
</script>
<style lang="scss" scoped>
.el-dialog .el-dialog__body .el-input{
    width: none;
    border: none;
}
.el-dialog .el-dialog__body .el-input{
    width: 100%!important;
    border: none!important;
}
.el-dialog .el-dialog__body .el-input .el-input__inner{
    height: 30px!important;
    // width: 100%!important;
}
.bose-head{
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
.bose-content{
    display: flex;
    flex-direction: column;
    li{
        border-bottom: 1px solid gainsboro;
        // padding: 5px 0 5px 0;
        display: flex;
        flex-direction: row;
        height: 70px;
        line-height: 70px;
        margin-top: 10px;
        span:first-child{
            display: inline-block;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid gainsboro;
        }
        .names{
            width: 19.5%;
            margin-top: 20px;
        }
        p{  
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            line-height: 30px;
            width: 80%;
            margin-left: 5px;
            span{
                display: inline-block;
                height: 30px;
                width: 10%;
                line-height: 30px;
                text-align: center;
                background: #f5f7fa;
                margin-left: 5px;
                border: none!important;
            }
        }
    }
}
    @import '@/styles/commonWanfa.scss';
    .bose-container{
        .ball-item{
            width: 13%;
        }
    }
</style>


