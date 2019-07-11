<template>
  <!-- PK10的 第五到第六名 -->
  <div class="HongKongColour lc_guanyahe">
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
          <span class="spanone">
            <span>3</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>4</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_4.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>5</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_5.odds"></el-input>
          </span>
        </p>
         <p>
          <span class="spanone">
            <span>6</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit " v-model="inputTemaData.GUAN_YA_HE_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>7</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_7.odds"></el-input>
          </span>
        </p>
      </li>
       <li class="five-li">
       
        <p>
          <span class="spanone">
            <span>8</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_8.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>9</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_9.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>10</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_10.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>11</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_11.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>12</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_12.odds"></el-input>
          </span>
        </p>
      </li>
       <li class="five-li">
        <p>
          <span class="spanone">
            <span>13</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_13.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>14</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_14.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>15</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_15.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>16</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_16.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>17</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_17.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">18</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_18.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">19</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_HE_19.odds"></el-input>
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
       <li class="five-li">
          <p>
          <span class="spanone">冠亚大</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">冠亚小</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_SMALL.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">冠亚单</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_ODD.odds"></el-input>
          </span>
        </p>
        <p>
         
          <span class="spanone">冠亚双</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_EVEN.odds"></el-input>
          </span>
        </p>
       <p>
          <span class="spanone">-</span>
         <span class="spantwo">-</span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">冠亚大双 </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_BIG_EVEN.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">冠亚大单</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_BIG_ODD.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">冠亚小双</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_SMALL_EVEN.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">冠亚小单</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GUAN_YA_SMALL_ODD.odds"></el-input>
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
  name: "lc_guanyahe",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
       if(this.$store.state.lc_detail.inputTemaData&&this.$store.state.lc_detail.inputTemaData.GUAN_YA_SMALL_ODD){        
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
        data:{"GUAN_YA_HE_15":{"betType":"GUAN_YA_HE_15","betValue":"15","color":"","id":"3958","new":false,"odds":""},"GUAN_YA_HE_14":{"betType":"GUAN_YA_HE_14","betValue":"14","color":"","id":"3957","new":false,"odds":""},"GUAN_YA_HE_13":{"betType":"GUAN_YA_HE_13","betValue":"13","color":"","id":"3956","new":false,"odds":""},"GUAN_YA_HE_12":{"betType":"GUAN_YA_HE_12","betValue":"12","color":"","id":"3955","new":false,"odds":""},"GUAN_YA_HE_19":{"betType":"GUAN_YA_HE_19","betValue":"19","color":"","id":"3962","new":false,"odds":""},"GUAN_YA_HE_18":{"betType":"GUAN_YA_HE_18","betValue":"18","color":"","id":"3961","new":false,"odds":""},"GUAN_YA_HE_17":{"betType":"GUAN_YA_HE_17","betValue":"17","color":"","id":"3960","new":false,"odds":""},"GUAN_YA_HE_16":{"betType":"GUAN_YA_HE_16","betValue":"16","color":"","id":"3959","new":false,"odds":""},"GUAN_YA_SMALL_ODD":{"betType":"GUAN_YA_SMALL_ODD","betValue":"冠亚小单","color":"","id":"3965","new":false,"odds":""},"GUAN_YA_HE_11":{"betType":"GUAN_YA_HE_11","betValue":"11","color":"","id":"3954","new":false,"odds":""},"GUAN_YA_HE_10":{"betType":"GUAN_YA_HE_10","betValue":"10","color":"","id":"3953","new":false,"odds":""},"GUAN_YA_BIG":{"betType":"GUAN_YA_BIG","betValue":"冠亚大","color":"","id":"3967","new":false,"odds":""},"GUAN_YA_EVEN":{"betType":"GUAN_YA_EVEN","betValue":"冠亚双","color":"","id":"3970","new":false,"odds":""},"GUAN_YA_BIG_ODD":{"betType":"GUAN_YA_BIG_ODD","betValue":"冠亚大单","color":"","id":"3963","new":false,"odds":""},"GUAN_YA_ODD":{"betType":"GUAN_YA_ODD","betValue":"冠亚单","color":"","id":"3969","new":false,"odds":""},"GUAN_YA_SMALL":{"betType":"GUAN_YA_SMALL","betValue":"冠亚小","color":"","id":"3968","new":false,"odds":""},"GUAN_YA_SMALL_EVEN":{"betType":"GUAN_YA_SMALL_EVEN","betValue":"冠亚小双","color":"","id":"3966","new":false,"odds":""},"GUAN_YA_BIG_EVEN":{"betType":"GUAN_YA_BIG_EVEN","betValue":"冠亚大双","color":"","id":"3964","new":false,"odds":""},"GUAN_YA_HE_4":{"betType":"GUAN_YA_HE_4","betValue":"4","color":"","id":"3947","new":false,"odds":""},"GUAN_YA_HE_3":{"betType":"GUAN_YA_HE_3","betValue":"3","color":"","id":"3946","new":false,"odds":""},"GUAN_YA_HE_6":{"betType":"GUAN_YA_HE_6","betValue":"6","color":"","id":"3949","new":false,"odds":""},"GUAN_YA_HE_5":{"betType":"GUAN_YA_HE_5","betValue":"5","color":"","id":"3948","new":false,"odds":""},"GUAN_YA_HE_8":{"betType":"GUAN_YA_HE_8","betValue":"8","color":"","id":"3951","new":false,"odds":""},"GUAN_YA_HE_7":{"betType":"GUAN_YA_HE_7","betValue":"7","color":"","id":"3950","new":false,"odds":""},"GUAN_YA_HE_9":{"betType":"GUAN_YA_HE_9","betValue":"9","color":"","id":"3952","new":false,"odds":""}}
    };
  },
  methods: {
   
  },
  created() {
  },
  mounted() {
   
  }
};
</script>
<style  scoped>
.spanone{
  width: 32%;
}
.spantwo {
    width: 65%;
}
</style>

