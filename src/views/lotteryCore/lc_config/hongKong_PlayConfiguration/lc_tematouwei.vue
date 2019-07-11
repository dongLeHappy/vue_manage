<template>
  <!-- 特码头尾 -->
  <div class="HongKongColour lc_tematouwei">
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
          <span class="spanone">{{inputTemaData.TEMA_TOU_0.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_TOU_0.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_TOU_1.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_TOU_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_TOU_2.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_TOU_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_TOU_3.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_TOU_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_TOU_4.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_TOU_4.odds"></el-input>
          </span>
        </p>       
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">{{inputTemaData.TEMA_WEI_0.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_WEI_0.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_WEI_1.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_WEI_1.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_WEI_2.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_WEI_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_WEI_3.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_WEI_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_WEI_4.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_WEI_4.odds"></el-input>
          </span>
        </p>
       
      </li>
      <li class="five-li">
         <p>
          <span class="spanone">{{inputTemaData.TEMA_WEI_5.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_WEI_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_WEI_6.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_WEI_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_WEI_7.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_WEI_7.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_WEI_8.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_WEI_8.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TEMA_WEI_9.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TEMA_WEI_9.odds"></el-input>
          </span>
        </p>
       
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_tematouwei",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
     inputTemaData:{
      get() {
        if(this.$store.state.lc_detail.inputTemaData&&this.$store.state.lc_detail.inputTemaData.TEMA_WEI_9){        
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
        "TEMA_TOU_2":{"betType":"TEMA_TOU_2","betValue":"2头","color":"","id":"63","new":false,"odds":""},
        "TEMA_TOU_1":{"betType":"TEMA_TOU_1","betValue":"1头","color":"","id":"62","new":false,"odds":""},
        "TEMA_TOU_0":{"betType":"TEMA_TOU_0","betValue":"0头","color":"","id":"61","new":false,"odds":""},
        "TEMA_TOU_4":{"betType":"TEMA_TOU_4","betValue":"4头","color":"","id":"65","new":false,"odds":""},
        "TEMA_TOU_3":{"betType":"TEMA_TOU_3","betValue":"3头","color":"","id":"64","new":false,"odds":""},
        "TEMA_WEI_1":{"betType":"TEMA_WEI_1","betValue":"1尾","color":"","id":"67","new":false,"odds":""},
        "TEMA_WEI_0":{"betType":"TEMA_WEI_0","betValue":"0尾","color":"","id":"66","new":false,"odds":""},
        "TEMA_WEI_3":{"betType":"TEMA_WEI_3","betValue":"3尾","color":"","id":"69","new":false,"odds":""},
        "TEMA_WEI_2":{"betType":"TEMA_WEI_2","betValue":"2尾","color":"","id":"68","new":false,"odds":""},
        "TEMA_WEI_5":{"betType":"TEMA_WEI_5","betValue":"5尾","color":"","id":"71","new":false,"odds":""},
        "TEMA_WEI_4":{"betType":"TEMA_WEI_4","betValue":"4尾","color":"","id":"70","new":false,"odds":""},
        "TEMA_WEI_7":{"betType":"TEMA_WEI_7","betValue":"6尾","color":"","id":"73","new":false,"odds":""},
        "TEMA_WEI_6":{"betType":"TEMA_WEI_6","betValue":"6尾","color":"","id":"72","new":false,"odds":""},
        "TEMA_WEI_9":{"betType":"TEMA_WEI_9","betValue":"9尾","color":"","id":"75","new":false,"odds":""},
        "TEMA_WEI_8":{"betType":"TEMA_WEI_8","betValue":"8尾","color":"","id":"74","new":false,"odds":""}
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

