<template>
  <!-- 尾数 -->
  <div class="HongKongColour lc_weishu">
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
          <span class="spanone">0尾</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.WEISHULIAN_0.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">1尾</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.WEISHULIAN_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">2尾</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.WEISHULIAN_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">3尾</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.WEISHULIAN_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">4尾</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.WEISHULIAN_4.odds"></el-input>
          </span>
        </p>
       
      </li>
      <li class="five-li">
         <p>
          <span class="spanone">5尾</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.WEISHULIAN_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">6尾</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.WEISHULIAN_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">7尾</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.WEISHULIAN_7.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">8尾</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.WEISHULIAN_8.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">9尾</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.WEISHULIAN_9.odds"></el-input>
          </span>
        </p>
       
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_weishu",
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
      data:{"WEISHULIAN_8":{"betType":"WEISHULIAN_8","betValue":"8尾","color":"","id":"606","new":false,"odds":""},"WEISHULIAN_9":{"betType":"WEISHULIAN_9","betValue":"9尾","color":"","id":"607","new":false,"odds":""},"WEISHULIAN_6":{"betType":"WEISHULIAN_6","betValue":"6尾","color":"","id":"604","new":false,"odds":""},"WEISHULIAN_7":{"betType":"WEISHULIAN_7","betValue":"7尾","color":"","id":"605","new":false,"odds":""},"WEISHULIAN_4":{"betType":"WEISHULIAN_4","betValue":"4尾","color":"","id":"602","new":false,"odds":""},"WEISHULIAN_5":{"betType":"WEISHULIAN_5","betValue":"5尾","color":"","id":"603","new":false,"odds":""},"WEISHULIAN_2":{"betType":"WEISHULIAN_2","betValue":"2尾","color":"","id":"600","new":false,"odds":""},"WEISHULIAN_3":{"betType":"WEISHULIAN_3","betValue":"3尾","color":"","id":"601","new":false,"odds":""},"WEISHULIAN_0":{"betType":"WEISHULIAN_0","betValue":"0尾","color":"","id":"598","new":false,"odds":""},"WEISHULIAN_1":{"betType":"WEISHULIAN_1","betValue":"1尾","color":"","id":"599","new":false,"odds":""}}
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

