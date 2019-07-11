<template>
  <!-- 快3的 短牌 -->
  <div class="HongKongColour lc_duanpai">
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
          <span class="spanone">11</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.PAIR_1_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">22</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.PAIR_2_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">33</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.PAIR_3_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">44</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.PAIR_4_4.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">55</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.PAIR_5_5.odds"></el-input>
          </span>
        </p>
      </li>
       <li class="five-li">
        <p>
          <span class="spanone">66</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.PAIR_6_6.odds" ></el-input>
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
  name: "lc_duanpai",
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
       data:{"PAIR_4_4":{"betType":"PAIR_4_4","betValue":"44","color":"","id":"4018","new":false,"odds":""},"PAIR_5_5":{"betType":"PAIR_5_5","betValue":"55","color":"","id":"4019","new":false,"odds":""},"PAIR_2_2":{"betType":"PAIR_2_2","betValue":"22","color":"","id":"4016","new":false,"odds":""},"PAIR_3_3":{"betType":"PAIR_3_3","betValue":"33","color":"","id":"4017","new":false,"odds":""},"PAIR_1_1":{"betType":"PAIR_1_1","betValue":"11","color":"","id":"4015","new":false,"odds":""},"PAIR_6_6":{"betType":"PAIR_6_6","betValue":"66","color":"","id":"4020","new":false,"odds":""}}
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

