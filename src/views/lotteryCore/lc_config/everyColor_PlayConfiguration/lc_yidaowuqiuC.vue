<template>
  <!-- 一到五球 -->
  <div class="HongKongColour lc_yidaowuqiu">
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
            <span class="border_yuan" style="background-color:red">0</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_0.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">1</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">2</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">3</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">4</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_4.odds"></el-input>
          </span>
        </p>
      </li>
       <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">5</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">6</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">7</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_7.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">8</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_8.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">9</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_9.odds"></el-input>
          </span>
        </p>
      </li>

      <li class="five-li">
        <p>
          <span class="spanone">大</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">小</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SMALL.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">单</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.ODD.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">双</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.EVEN.odds"></el-input>
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
  name: "lc_yidaowuqiu",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
       
       if(this.$store.state.lc_detail.inputTemaData&&!this.$store.state.lc_detail.inputTemaData.NO_10&&this.$store.state.lc_detail.inputTemaData.EVEN){
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
       data:{"BIG":{"betType":"BIG","betValue":"大","color":"","id":"758","new":false,"odds":""},"ODD":{"betType":"ODD","betValue":"单","color":"","id":"760","new":false,"odds":""},"NO_2":{"betType":"NO_2","betValue":"2","color":"","id":"750","new":false,"odds":""},"NO_3":{"betType":"NO_3","betValue":"3","color":"","id":"751","new":false,"odds":""},"SMALL":{"betType":"SMALL","betValue":"小","color":"","id":"759","new":false,"odds":""},"NO_4":{"betType":"NO_4","betValue":"4","color":"","id":"752","new":false,"odds":""},"NO_5":{"betType":"NO_5","betValue":"5","color":"","id":"753","new":false,"odds":""},"NO_0":{"betType":"NO_0","betValue":"0","color":"","id":"748","new":false,"odds":""},"NO_1":{"betType":"NO_1","betValue":"1","color":"","id":"749","new":false,"odds":""},"EVEN":{"betType":"EVEN","betValue":"双","color":"","id":"761","new":false,"odds":""},"NO_6":{"betType":"NO_6","betValue":"6","color":"","id":"754","new":false,"odds":""},"NO_7":{"betType":"NO_7","betValue":"7","color":"","id":"755","new":false,"odds":""},"NO_8":{"betType":"NO_8","betValue":"8","color":"","id":"756","new":false,"odds":""},"NO_9":{"betType":"NO_9","betValue":"9","color":"","id":"757","new":false,"odds":""}}
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

