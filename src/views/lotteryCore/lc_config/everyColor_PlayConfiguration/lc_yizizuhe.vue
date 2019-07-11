<template>
  <!-- 时时彩的 一字组合 -->
  <div class="HongKongColour lc_yizizuhe">
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
      <!-- <li class="five-li">
         <p v-for="(itme,index) in inputTemaData" :key="index+'yz'">
          <span class="spanone">{{itme.number}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="itme.odds"></el-input>
          </span>
        </p>     
        
      </li> -->
      <li class="five-li">
         <p>
          <span class="spanone">1</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">2</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">3</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">4</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_4.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">5</span>
          <span class="spantwo"> <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_5.odds"></el-input></span>
        </p>
      </li>
      <li class="five-li">
         <p>
          <span class="spanone">6</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">7</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_7.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">8</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_8.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">9</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_9.odds"></el-input>
          </span>
        </p>
        <p>
         <span class="spanone">&nbsp;</span>
         <span class="spantwo">&nbsp;&nbsp;</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_yizizuhe",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
        if(this.$store.state.lc_detail.inputTemaData&&this.$store.state.lc_detail.inputTemaData.NO_9){
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
       data:{
          "NO_1":{"number":"1","odds":"","color":""},
          "NO_2":{"number":"2","odds":"","color":""},
          "NO_3":{"number":"3","odds":"","color":""},
          "NO_4":{"number":"4","odds":"","color":""},
          "NO_5":{"number":"5","odds":"","color":""},
          "NO_6":{"number":"6","odds":"","color":""},
          "NO_7":{"number":"7","odds":"","color":""},
          "NO_8":{"number":"8","odds":"","color":""},
          "NO_9":{"number":"9","odds":"","color":""}
       }
      
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

