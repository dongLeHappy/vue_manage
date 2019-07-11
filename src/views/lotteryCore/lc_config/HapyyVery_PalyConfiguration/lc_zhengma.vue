<template>
  <!-- 五到八球 -->
  <div class="HongKongColour lc_zhengma">
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
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">5</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_5.odds"></el-input>
          </span>
        </p>
      </li>
       <li class="five-li">
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
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">10</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_10.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">11</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_11.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">12</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_12.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">13</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_13.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">14</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_14.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">15</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_15.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">16</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_16.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">17</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_17.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">18</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_18.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">19</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_19.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">20</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_20.odds"></el-input>
          </span>
        </p>
      </li>

    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_zhengma",
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
          "NO_1":{'number':'1','odds':""},
          "NO_2":{'number':'2','odds':""},
          "NO_3":{'number':'3','odds':""},
          "NO_4":{'number':'4','odds':""},
          "NO_5":{'number':'5','odds':""},
          "NO_6":{'number':'6','odds':""},
          "NO_7":{'number':'7','odds':""},
          "NO_8":{'number':'8','odds':""},
          "NO_9":{'number':'9','odds':""},
          "NO_10":{'number':'10','odds':""},
          "NO_11":{'number':'11','odds':""},
          "NO_12":{'number':'4','odds':""},
          "NO_13":{'number':'5','odds':""},
          "NO_14":{'number':'6','odds':""},
          "NO_15":{'number':'7','odds':""},
          "NO_16":{'number':'8','odds':""},
          "NO_17":{'number':'9','odds':""},
          "NO_18":{'number':'10','odds':""},
          "NO_19":{'number':'11','odds':""},
          "NO_20":{'number':'11','odds':""},
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

