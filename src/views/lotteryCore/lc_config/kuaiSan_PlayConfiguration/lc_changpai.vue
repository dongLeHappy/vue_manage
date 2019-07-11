<template>
  <!-- 快3的 长牌 -->
  <div class="HongKongColour lc_changpai">
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
          <span class="spanone">12</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SPEC_1_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">13</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.SPEC_1_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">14</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.SPEC_1_4.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">15</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.SPEC_1_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">16</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.SPEC_1_6.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">23</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.SPEC_2_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">24</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.SPEC_2_4.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">25</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.SPEC_2_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">26</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.SPEC_2_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">34</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.SPEC_3_4.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">35</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SPEC_3_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">36</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SPEC_3_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">45</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SPEC_4_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">46</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SPEC_4_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">56</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SPEC_5_6.odds"></el-input>
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_changpai",
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
       data:{"SPEC_5_6":{"betType":"SPEC_5_6","betValue":"56","color":"","id":"4014","new":false,"odds":""},"SPEC_4_5":{"betType":"SPEC_4_5","betValue":"45","color":"","id":"4012","new":false,"odds":""},"SPEC_3_6":{"betType":"SPEC_3_6","betValue":"36","color":"","id":"4011","new":false,"odds":""},"SPEC_4_6":{"betType":"SPEC_4_6","betValue":"46","color":"","id":"4013","new":false,"odds":""},"SPEC_3_4":{"betType":"SPEC_3_4","betValue":"34","color":"","id":"4009","new":false,"odds":""},"SPEC_2_5":{"betType":"SPEC_2_5","betValue":"25","color":"","id":"4007","new":false,"odds":""},"SPEC_1_6":{"betType":"SPEC_1_6","betValue":"16","color":"","id":"4004","new":false,"odds":""},"SPEC_3_5":{"betType":"SPEC_3_5","betValue":"35","color":"","id":"4010","new":false,"odds":""},"SPEC_2_6":{"betType":"SPEC_2_6","betValue":"26","color":"","id":"4008","new":false,"odds":""},"SPEC_2_3":{"betType":"SPEC_2_3","betValue":"23","color":"","id":"4005","new":false,"odds":""},"SPEC_1_4":{"betType":"SPEC_1_4","betValue":"14","color":"","id":"4002","new":false,"odds":""},"SPEC_2_4":{"betType":"SPEC_2_4","betValue":"24","color":"","id":"4006","new":false,"odds":""},"SPEC_1_5":{"betType":"SPEC_1_5","betValue":"15","color":"","id":"4003","new":false,"odds":""},"SPEC_1_2":{"betType":"SPEC_1_2","betValue":"12","color":"","id":"4000","new":false,"odds":""},"SPEC_1_3":{"betType":"SPEC_1_3","betValue":"13","color":"","id":"4001","new":false,"odds":""}}
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

