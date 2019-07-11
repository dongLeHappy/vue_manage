<template>
  <!-- 快3的 点数 -->
  <div class="HongKongColour lc_dianshu">                    
    <ul>
      <li class="five-li">
        <p style="padding-top:0px;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_4.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_4.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_5.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_6.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_7.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_7.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_8.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_8.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_9.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_9.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_10.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_10.odds" ></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_11.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_11.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_12.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_12.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_13.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_13.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_14.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_14.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_15.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_15.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_16.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_16.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TOTAL_17.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_17.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">-</span>
         <span class="spantwo">-</span>
        </p>
      </li>
       <li class="five-li">
        <p>
          <span class="spanone">{{inputTemaData.SAN_JUN_BIG.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SAN_JUN_BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.SAN_JUN_SMALL.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SAN_JUN_SMALL.odds"></el-input>
          </span>
        </p>
       <p>
          <span class="spanone">-</span>
         <span class="spantwo">-</span>
        </p>
        <p>
          <span class="spanone">-</span>
         <span class="spantwo">-</span>
        </p>
        <p>
          <span class="spanone">-</span>
         <span class="spantwo">-</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_dianshu",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
       if(this.$store.state.lc_detail.inputTemaData){        
        }else{
            this.$store.state.lc_detail.inputTemaData = this.data;
        }
        return this.$store.state.lc_detail.inputTemaData;
     
      },
      set(item) {
        return item;
      }
    }
  },
  data() {
    return {
       data:{"SAN_JUN_BIG":{"betType":"SAN_JUN_BIG","betValue":"总大","color":"","id":"3998","new":false,"odds":""},"TOTAL_14":{"betType":"TOTAL_14","betValue":"14点","color":"","id":"3994","new":false,"odds":""},"TOTAL_15":{"betType":"TOTAL_15","betValue":"15点","color":"","id":"3995","new":false,"odds":""},"TOTAL_4":{"betType":"TOTAL_4","betValue":"4点","color":"","id":"3984","new":false,"odds":""},"TOTAL_12":{"betType":"TOTAL_12","betValue":"12点","color":"","id":"3992","new":false,"odds":""},"TOTAL_5":{"betType":"TOTAL_5","betValue":"5点","color":"","id":"3985","new":false,"odds":""},"TOTAL_13":{"betType":"TOTAL_13","betValue":"13点","color":"","id":"3993","new":false,"odds":""},"TOTAL_6":{"betType":"TOTAL_6","betValue":"6点","color":"","id":"3986","new":false,"odds":""},"TOTAL_10":{"betType":"TOTAL_10","betValue":"10点","color":"","id":"3990","new":false,"odds":""},"TOTAL_7":{"betType":"TOTAL_7","betValue":"7点","color":"","id":"3987","new":false,"odds":""},"SAN_JUN_SMALL":{"betType":"SAN_JUN_SMALL","betValue":"总小","color":"","id":"3999","new":false,"odds":""},"TOTAL_11":{"betType":"TOTAL_11","betValue":"11点","color":"","id":"3991","new":false,"odds":""},"TOTAL_8":{"betType":"TOTAL_8","betValue":"8点","color":"","id":"3988","new":false,"odds":""},"TOTAL_9":{"betType":"TOTAL_9","betValue":"9点","color":"","id":"3989","new":false,"odds":""},"TOTAL_16":{"betType":"TOTAL_16","betValue":"16点","color":"","id":"3996","new":false,"odds":""},"TOTAL_17":{"betType":"TOTAL_17","betValue":"17点","color":"","id":"3997","new":false,"odds":""}}
    };
  },
  methods: {
  },
  created() {},
  mounted() {
  }
};
</script>
<style lang="scss">

</style>

