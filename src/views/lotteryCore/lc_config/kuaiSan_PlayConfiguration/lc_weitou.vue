<template>
  <!-- 快3的 围骰 -->
  <div class="HongKongColour lc_weitou">
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
          <span class="spanone">111</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.TRIPLE_1_1_1.odds" ></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">222</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.TRIPLE_2_2_2.odds" ></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">333</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.TRIPLE_3_3_3.odds" ></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">444</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.TRIPLE_4_4_4.odds" ></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">555</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.TRIPLE_5_5_5.odds" ></el-input>
          </span>
        </p>
      </li>
       <li class="five-li">
        <p>
          <span class="spanone">666</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.TRIPLE_6_6_6.odds" ></el-input>
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
 <li class="five-li">
        <p>
          <span class="spanone">全骰</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.TRIPLE_ALL.odds" ></el-input>
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
  name: "lc_weitou",
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
      data:{"TRIPLE_ALL":{"betType":"TRIPLE_ALL","betValue":"全骰","color":"","id":"3983","new":false,"odds":""},"TRIPLE_1_1_1":{"betType":"TRIPLE_1_1_1","betValue":"111","color":"","id":"3977","new":false,"odds":""},"TRIPLE_4_4_4":{"betType":"TRIPLE_4_4_4","betValue":"444","color":"","id":"3980","new":false,"odds":""},"TRIPLE_3_3_3":{"betType":"TRIPLE_3_3_3","betValue":"333","color":"","id":"3979","new":false,"odds":""},"TRIPLE_2_2_2":{"betType":"TRIPLE_2_2_2","betValue":"222","color":"","id":"3978","new":false,"odds":""},"TRIPLE_5_5_5":{"betType":"TRIPLE_5_5_5","betValue":"555","color":"","id":"3981","new":false,"odds":""},"TRIPLE_6_6_6":{"betType":"TRIPLE_6_6_6","betValue":"666","color":"","id":"3982","new":false,"odds":""}}
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

