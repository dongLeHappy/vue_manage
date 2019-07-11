<template>
  <!-- PK10的 第一到第五名 -->
  <div class="HongKongColour lc_yidaowuming">
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
            <span>1</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>2</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>3</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>4</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_4.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>5</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_5.odds"></el-input>
          </span>
        </p>
      </li>
       <li class="five-li">
        <p>
          <span class="spanone">
            <span>6</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>7</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_7.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>8</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_8.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>9</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_9.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span>10</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_10.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">{{inputTemaData.BIG.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.SMALL.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SMALL.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.ODD.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.ODD.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.EVEN.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.EVEN.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">-</span>
         <span class="spantwo">-</span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">{{inputTemaData.DRAGON.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.DRAGON.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TIGER.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TIGER.odds"></el-input>
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
  name: "lc_yidaowuming",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
        if(this.$store.state.lc_detail.inputTemaData&&this.$store.state.lc_detail.inputTemaData.TIGER){   
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
       data:{"BIG":{"betType":"BIG","betValue":"大","color":"","id":"3870","new":false,"odds":""},"NO_10":{"betType":"NO_10","betValue":"10","color":"","id":"3869","new":false,"odds":""},"ODD":{"betType":"ODD","betValue":"单","color":"","id":"3872","new":false,"odds":""},"NO_2":{"betType":"NO_2","betValue":"2","color":"","id":"3861","new":false,"odds":""},"NO_3":{"betType":"NO_3","betValue":"3","color":"","id":"3862","new":false,"odds":""},"SMALL":{"betType":"SMALL","betValue":"小","color":"","id":"3871","new":false,"odds":""},"NO_4":{"betType":"NO_4","betValue":"4","color":"","id":"3863","new":false,"odds":""},"NO_5":{"betType":"NO_5","betValue":"5","color":"","id":"3864","new":false,"odds":""},"NO_1":{"betType":"NO_1","betValue":"1","color":"","id":"3860","new":false,"odds":""},"DRAGON":{"betType":"DRAGON","betValue":"龙","color":"","id":"3874","new":false,"odds":""},"EVEN":{"betType":"EVEN","betValue":"双","color":"","id":"3873","new":false,"odds":""},"NO_6":{"betType":"NO_6","betValue":"6","color":"","id":"3865","new":false,"odds":""},"NO_7":{"betType":"NO_7","betValue":"7","color":"","id":"3866","new":false,"odds":""},"TIGER":{"betType":"TIGER","betValue":"虎","color":"","id":"3875","new":false,"odds":""},"NO_8":{"betType":"NO_8","betValue":"8","color":"","id":"3867","new":false,"odds":""},"NO_9":{"betType":"NO_9","betValue":"9","color":"","id":"3868","new":false,"odds":""}}
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
<style lang="scss">

</style>

