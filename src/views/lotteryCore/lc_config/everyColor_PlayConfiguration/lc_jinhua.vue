<template>
  <!-- 时时彩的 金花 -->
  <div class="HongKongColour lc_jinhua">
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
          <span class="spanone">豹子</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.THREE_EQUAL.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">顺子</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.THREE_STRAIGHT.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">对子</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.THREE_PAIR.odds"></el-input>
          </span>
        </p>
       <p>
          <span class="spanone">半顺</span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.THREE_HALF_STRAIGHT.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone">杂六</span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.THREE_CHAOS.odds"></el-input></span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_jinhua",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
       if(this.$store.state.lc_detail.inputTemaData&&this.$store.state.lc_detail.inputTemaData.THREE_EQUAL){
       }else {
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
      data:{"THREE_CHAOS":{"betType":"THREE_CHAOS","betValue":"杂六","color":"","id":"1073","new":false,"odds":""},"THREE_STRAIGHT":{"betType":"THREE_STRAIGHT","betValue":"顺子","color":"","id":"1070","new":false,"odds":""},"THREE_EQUAL":{"betType":"THREE_EQUAL","betValue":"豹子","color":"","id":"1069","new":false,"odds":""},"THREE_HALF_STRAIGHT":{"betType":"THREE_HALF_STRAIGHT","betValue":"半顺","color":"","id":"1072","new":false,"odds":""},"THREE_PAIR":{"betType":"THREE_PAIR","betValue":"对子","color":"","id":"1071","new":false,"odds":""}}
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

