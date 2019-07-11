<template>
  <!-- 七码 -->
  <div class="HongKongColour lc_qima">
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
          <span class="spanone">单0</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_ODD_0.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">单1</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_ODD_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">单2</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_ODD_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">单3</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_ODD_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">单4</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_ODD_4.odds"></el-input>
          </span>
        </p>
       
      </li>
      <li class="five-li">
         <p>
          <span class="spanone">单5</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_ODD_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">单6</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_ODD_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">单7</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_ODD_7.odds"></el-input>
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
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">双0</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_EVEN_0.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">双1</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_EVEN_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">双2</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_EVEN_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">双3</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_EVEN_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">双4</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_EVEN_4.odds"></el-input>
          </span>
        </p>
      
      </li>
      <li class="five-li">
          <p>
          <span class="spanone">双5</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_EVEN_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">双6</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_EVEN_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">双7</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_EVEN_7.odds"></el-input>
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
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">大0</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_BIG_0.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">大1</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_BIG_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">大2</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_BIG_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">大3</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_BIG_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">大4</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_BIG_4.odds"></el-input>
          </span>
        </p>
       
      </li>
      <li class="five-li">
         <p>
          <span class="spanone">大5</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_BIG_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">大6</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_BIG_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">大7</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_BIG_7.odds"></el-input>
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
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">小0</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_SMALL_0.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">小1</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_SMALL_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">小2</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_SMALL_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">小3</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_SMALL_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">小4</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_SMALL_4.odds"></el-input>
          </span>
        </p>
       
      </li>
      <li class="five-li">
         <p>
          <span class="spanone">小5</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_SMALL_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">小6</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_SMALL_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">小7</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.QIMA_SMALL_7.odds"></el-input>
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
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_qima",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
       
         if(this.$store.state.lc_detail.inputTemaData&&this.$store.state.lc_detail.inputTemaData.QIMA_SMALL_7){        
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
      data:{"QIMA_BIG_2":{"betType":"QIMA_BIG_2","betValue":"大2","color":"","id":"560","new":false,"odds":""},"QIMA_BIG_3":{"betType":"QIMA_BIG_3","betValue":"大3","color":"","id":"561","new":false,"odds":""},"QIMA_BIG_4":{"betType":"QIMA_BIG_4","betValue":"大4","color":"","id":"562","new":false,"odds":""},"QIMA_BIG_5":{"betType":"QIMA_BIG_5","betValue":"大5","color":"","id":"563","new":false,"odds":""},"QIMA_BIG_6":{"betType":"QIMA_BIG_6","betValue":"大6","color":"","id":"564","new":false,"odds":""},"QIMA_BIG_7":{"betType":"QIMA_BIG_7","betValue":"大7","color":"","id":"565","new":false,"odds":""},"QIMA_EVEN_4":{"betType":"QIMA_EVEN_4","betValue":"双4","color":"","id":"554","new":false,"odds":""},"QIMA_EVEN_5":{"betType":"QIMA_EVEN_5","betValue":"双5","color":"","id":"555","new":false,"odds":""},"QIMA_EVEN_2":{"betType":"QIMA_EVEN_2","betValue":"双2","color":"","id":"552","new":false,"odds":""},"QIMA_EVEN_3":{"betType":"QIMA_EVEN_3","betValue":"双3","color":"","id":"553","new":false,"odds":""},"QIMA_EVEN_6":{"betType":"QIMA_EVEN_6","betValue":"双6","color":"","id":"556","new":false,"odds":""},"QIMA_EVEN_7":{"betType":"QIMA_EVEN_7","betValue":"双7","color":"","id":"557","new":false,"odds":""},"QIMA_EVEN_0":{"betType":"QIMA_EVEN_0","betValue":"双0","color":"","id":"550","new":false,"odds":""},"QIMA_EVEN_1":{"betType":"QIMA_EVEN_1","betValue":"双1","color":"","id":"551","new":false,"odds":""},"QIMA_ODD_0":{"betType":"QIMA_ODD_0","betValue":"单0","color":"","id":"542","new":false,"odds":""},"QIMA_ODD_2":{"betType":"QIMA_ODD_2","betValue":"单2","color":"","id":"544","new":false,"odds":""},"QIMA_ODD_1":{"betType":"QIMA_ODD_1","betValue":"单1","color":"","id":"543","new":false,"odds":""},"QIMA_BIG_0":{"betType":"QIMA_BIG_0","betValue":"大0","color":"","id":"558","new":false,"odds":""},"QIMA_BIG_1":{"betType":"QIMA_BIG_1","betValue":"大1","color":"","id":"559","new":false,"odds":""},"QIMA_SMALL_0":{"betType":"QIMA_SMALL_0","betValue":"小0","color":"","id":"566","new":false,"odds":""},"QIMA_ODD_7":{"betType":"QIMA_ODD_7","betValue":"单7","color":"","id":"549","new":false,"odds":""},"QIMA_SMALL_2":{"betType":"QIMA_SMALL_2","betValue":"小2","color":"","id":"568","new":false,"odds":""},"QIMA_SMALL_1":{"betType":"QIMA_SMALL_1","betValue":"小1","color":"","id":"567","new":false,"odds":""},"QIMA_ODD_4":{"betType":"QIMA_ODD_4","betValue":"单4","color":"","id":"546","new":false,"odds":""},"QIMA_ODD_3":{"betType":"QIMA_ODD_3","betValue":"单3","color":"","id":"545","new":false,"odds":""},"QIMA_ODD_6":{"betType":"QIMA_ODD_6","betValue":"单6","color":"","id":"548","new":false,"odds":""},"QIMA_ODD_5":{"betType":"QIMA_ODD_5","betValue":"单5","color":"","id":"547","new":false,"odds":""},"QIMA_SMALL_7":{"betType":"QIMA_SMALL_7","betValue":"小7","color":"","id":"573","new":false,"odds":""},"QIMA_SMALL_4":{"betType":"QIMA_SMALL_4","betValue":"小4","color":"","id":"570","new":false,"odds":""},"QIMA_SMALL_3":{"betType":"QIMA_SMALL_3","betValue":"小3","color":"","id":"569","new":false,"odds":""},"QIMA_SMALL_6":{"betType":"QIMA_SMALL_6","betValue":"小6","color":"","id":"572","new":false,"odds":""},"QIMA_SMALL_5":{"betType":"QIMA_SMALL_5","betValue":"小5","color":"","id":"571","new":false,"odds":""}}
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

