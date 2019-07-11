<template>
  <!-- 一肖 -->
  <div class="HongKongColour lc_yixiao">
    <ul>
      <li class="five-li">
        <p>
          <span class="spanone a">类型</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p>
          <span class="spanone a">类型</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p>
          <span class="spanone a">类型</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p>
          <span class="spanone a">类型</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p>
          <span class="spanone a">类型</span>
          <span class="spantwo b">赔率</span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">鼠</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SHU.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">牛</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NIU.odds">1</el-input>
          </span>
        </p>
        <p>
          <span class="spanone">虎</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.HU.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">兔</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TU.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">龙</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.LONG.odds"></el-input>
          </span>
        </p>
       
      </li>
      <li class="five-li">
         <p>
          <span class="spanone">蛇</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SHE.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">马</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.MA.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">羊</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.YANG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">猴</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.HOU.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">鸡</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.JI.odds"></el-input>
          </span>
        </p>    
      </li>
       <li class="five-li">      
        <p>
          <span class="spanone">狗</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GOU.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">猪</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.ZHU.odds"></el-input>
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
  name: "lc_yixiao",
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
      data:{
        "SHE":{"betType":"SHE","betValue":"蛇","color":"","id":"110","new":false,"odds":""},
        "TU":{"betType":"TU","betValue":"免","color":"","id":"108","new":false,"odds":""},
        "SHU":{"betType":"SHU","betValue":"鼠","color":"","id":"105","new":false,"odds":""},
        "MA":{"betType":"MA","betValue":"马","color":"","id":"111","new":false,"odds":""},
        "ZHU":{"betType":"ZHU","betValue":"猪","color":"","id":"116","new":false,"odds":""},
        "YANG":{"betType":"YANG","betValue":"羊","color":"","id":"112","new":false,"odds":""},
        "NIU":{"betType":"NIU","betValue":"牛","color":"","id":"106","new":false,"odds":""},
        "GOU":{"betType":"GOU","betValue":"狗","color":"","id":"115","new":false,"odds":""},
        "HU":{"betType":"HU","betValue":"虎","color":"","id":"107","new":false,"odds":""},
        "JI":{"betType":"JI","betValue":"鸡","color":"","id":"114","new":false,"odds":""},
        "HOU":{"betType":"HOU","betValue":"猴","color":"","id":"113","new":false,"odds":""},
        "LONG":{"betType":"LONG","betValue":"龙","color":"","id":"109","new":false,"odds":""}
        }
     }
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



