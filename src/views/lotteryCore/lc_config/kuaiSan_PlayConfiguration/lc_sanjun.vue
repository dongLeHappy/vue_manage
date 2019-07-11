<template>
  <!-- 快3的 三军 -->
  <div class="HongKongColour lc_sanjun">
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
          <span class="spanone">1</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SAN_JUN_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">2</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SAN_JUN_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">3</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SAN_JUN_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">4</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SAN_JUN_4.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">5</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SAN_JUN_5.odds"></el-input>
          </span>
        </p>
      </li>
       <li class="five-li">
        <p>
          <span class="spanone">6</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.SAN_JUN_6.odds"></el-input>
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
  name: "lc_sanjun",
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
        return this.$store.state.lc_detail.inputTemaData
   
      },
      set(item) {
        return item;
      }
    }
  },
  data() {
    return {
       data:{"SAN_JUN_4":{"betType":"SAN_JUN_4","betValue":"4","color":"","id":"3974","new":false,"odds":""},"SAN_JUN_3":{"betType":"SAN_JUN_3","betValue":"3","color":"","id":"3973","new":false,"odds":""},"SAN_JUN_6":{"betType":"SAN_JUN_6","betValue":"6","color":"","id":"3976","new":false,"odds":""},"SAN_JUN_5":{"betType":"SAN_JUN_5","betValue":"5","color":"","id":"3975","new":false,"odds":""},"SAN_JUN_2":{"betType":"SAN_JUN_2","betValue":"2","color":"","id":"3972","new":false,"odds":""},"SAN_JUN_1":{"betType":"SAN_JUN_1","betValue":"1","color":"","id":"3971","new":false,"odds":""}}
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

