<template>
  <!-- 五行 -->
  <div class="HongKongColour lc_wuxing">
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
          <span class="spanone">{{inputTemaData.JIN.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.JIN.odds" ></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.MU.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.MU.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.SHUI.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SHUI.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.HUO.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.HUO.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TU.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TU.odds"></el-input>
          </span>
        </p>
       
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_wuxing",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit,
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
        "TU":{"betType":"TU","betValue":"土","color":"","id":"80","new":false,"odds":""},
        "HUO":{"betType":"HUO","betValue":"火","color":"","id":"79","new":false,"odds":""},
        "MU":{"betType":"MU","betValue":"木","color":"","id":"77","new":false,"odds":""},
        "JIN":{"betType":"JIN","betValue":"金","color":"","id":"76","new":false,"odds":""},
        "SHUI":{"betType":"SHUI","betValue":"水","color":"","id":"78","new":false,"odds":""}
      }
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

