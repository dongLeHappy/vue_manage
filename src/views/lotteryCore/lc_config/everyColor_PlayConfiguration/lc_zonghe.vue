<template>
  <!-- 时时彩的 总和 -->
  <div class="HongKongColour lc_zonghe">
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
       if(this.$store.state.lc_detail.inputTemaData&&this.$store.state.lc_detail.inputTemaData.TOTAL_EVEN){
            return this.$store.state.lc_detail.inputTemaData;
        }else{
          return  this.data;          
        }
      },
      set(item) {
        return item;
      }
    }
  },
  data() {
    return {
       data:{"TOTAL_ODD":{"betType":"TOTAL_ODD","betValue":"总单","color":"","id":"767","new":false,"odds":""},"TOTAL_BIG":{"betType":"TOTAL_BIG","betValue":"总大","color":"","id":"765","new":false,"odds":""},"TOTAL_SMALL":{"betType":"TOTAL_SMALL","betValue":"总小","color":"","id":"766","new":false,"odds":""},"TOTAL_EVEN":{"betType":"TOTAL_EVEN","betValue":"总双","color":"","id":"768","new":false,"odds":""}}
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

