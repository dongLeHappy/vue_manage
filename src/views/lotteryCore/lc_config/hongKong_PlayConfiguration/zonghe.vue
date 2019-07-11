<template>
  <!-- 总和 -->
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
          <span class="spanone">总单</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.ZHONGHE_ODD.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">总双</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.ZHONGHE_EVEN.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">总大</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.ZHONGHE_BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">总小</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.ZHONGHE_SMALL.odds"></el-input>
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
      data:{"ZHONGHE_BIG":{"betType":"ZHONGHE_BIG","betValue":"总大","color":"","id":"540","new":false,"odds":""},"ZHONGHE_SMALL":{"betType":"ZHONGHE_SMALL","betValue":"总小","color":"","id":"541","new":false,"odds":""},"ZHONGHE_EVEN":{"betType":"ZHONGHE_EVEN","betValue":"总双","color":"","id":"539","new":false,"odds":""},"ZHONGHE_ODD":{"betType":"ZHONGHE_ODD","betValue":"总单","color":"","id":"538","new":false,"odds":""}}
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

