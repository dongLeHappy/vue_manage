<template>
  <!-- 时时彩的 总和 -->
  <div class="HongKongColour lc_hapyy-zonghe">
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
          <span class="spanone">总大</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">总小</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_SMALL.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">总单</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_ODD.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">总双</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_EVEN.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">总尾大</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_WEI_BIG.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">     
        <p>
          <span class="spanone">总尾小</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TOTAL_WEI_SMALL.odds"></el-input>
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
  name: "lc_zonghe",
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
      data:{"TOTAL_WEI_SMALL":{"betType":"TOTAL_WEI_SMALL","betValue":"总尾小","color":"","id":"2031","new":false,"odds":""},"TOTAL_ODD":{"betType":"TOTAL_ODD","betValue":"总单","color":"","id":"2028","new":false,"odds":""},"TOTAL_BIG":{"betType":"TOTAL_BIG","betValue":"总大","color":"","id":"2026","new":false,"odds":""},"TOTAL_SMALL":{"betType":"TOTAL_SMALL","betValue":"总小","color":"","id":"2027","new":false,"odds":""},"TOTAL_WEI_BIG":{"betType":"TOTAL_WEI_BIG","betValue":"总尾大","color":"","id":"2030","new":false,"odds":""},"TOTAL_EVEN":{"betType":"TOTAL_EVEN","betValue":"总双","color":"","id":"2029","new":false,"odds":""}}
    };
  },
  methods: {
  },
  created() {},
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
.spanone {
    width: 35% !important;
}
.spantwo {
    width: 62% !important;
    .el-input {
    width: 100% !important;
    }
}
</style>

