<template>
  <!-- 五选中一 /六选中一七选中一/八选中一九选中一/十选中一/特平中一/特平中二/特平中三/特平中四/特平中五 -->
  <div class="HongKongColour lc_tema">
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
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_1.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_1.odds" ></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_11.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_11.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_21.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_21.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_31.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_31.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_41.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_41.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_2.betValue}}</span>
          </span>
          <span class="spantwo">
            <!--   :class="inputTemaData.two.color" -->
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_2.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_12.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_12.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_22.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_22.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_32.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_32.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_42.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_42.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_3.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_3.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_13.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_13.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_23.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_23.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_33.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_33.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_43.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_43.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_4.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_4.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_14.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_14.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_24.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_24.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_34.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_34.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_44.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_44.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_5.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_15.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_15.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_25.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_25.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_35.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_35.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_45.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_45.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_6.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_16.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_16.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_26.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_26.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_36.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_36.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_46.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_46.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_7.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_7.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_17.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_17.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_27.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_27.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_37.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_37.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_47.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_47.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_8.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_8.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_18.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_18.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_28.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_28.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_38.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_38.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_48.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_48.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_9.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_9.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_19.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_19.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_29.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_29.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_39.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_39.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">{{inputTemaData.NO_49.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_49.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_10.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_10.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">{{inputTemaData.NO_20.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.NO_20.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_30.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.NO_30.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">{{inputTemaData.NO_40.betValue}}</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit"  v-model="inputTemaData.NO_40.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">-</span>
          <span class="spantwo">-</span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">{{inputTemaData.ODD.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.ODD.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.BIG.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.SUM_ODD.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SUM_ODD.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TAIL_BIG.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TAIL_BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">-</span>
          <span class="spantwo">-</span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">{{inputTemaData.EVEN.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.EVEN.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.SMALL.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SMALL.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.SUM_EVEN.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SUM_EVEN.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.TAIL_SMALL.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TAIL_SMALL.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">-</span>
          <span class="spantwo">-</span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">{{inputTemaData.RED.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.RED.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.BLUE.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.BLUE.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.GREEN.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GREEN.odds"></el-input>
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
  name: "lc_tema",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData: {
      get() {
        if(this.$store.state.lc_detail.inputTemaData&&this.$store.state.lc_detail.inputTemaData.GREEN){   
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
      data:{"NO_20":{"betType":"NO_20","betValue":"20","color":"","id":"20","new":false,"odds":""},
        "NO_21":{"betType":"NO_21","betValue":"21","color":"","id":"21","new":false,"odds":""},
        "ODD":{"betType":"ODD","betValue":"单","color":"","id":"52","new":false,"odds":""},
        "NO_22":{"betType":"NO_22","betValue":"22","color":"","id":"22","new":false,"odds":""},
        "NO_23":{"betType":"NO_23","betValue":"23","color":"","id":"23","new":false,"odds":""},
        "NO_13":{"betType":"NO_13","betValue":"13","color":"","id":"13","new":false,"odds":""},
        "NO_2":{"betType":"NO_2","betValue":"2","color":"","id":"2","new":false,"odds":""},
        "NO_14":{"betType":"NO_14","betValue":"14","color":"","id":"14","new":false,"odds":""},
        "NO_3":{"betType":"NO_3","betValue":"3","color":"","id":"3","new":false,"odds":""},
        "NO_15":{"betType":"NO_15","betValue":"15","color":"","id":"15","new":false,"odds":""},
        "NO_4":{"betType":"NO_4","betValue":"4","color":"","id":"4","new":false,"odds":""},
        "NO_16":{"betType":"NO_16","betValue":"16","color":"","id":"16","new":false,"odds":""},
        "NO_5":{"betType":"NO_5","betValue":"5","color":"","id":"5","new":false,"odds":""},
        "NO_17":{"betType":"NO_17","betValue":"17","color":"","id":"17","new":false,"odds":""},
        "NO_18":{"betType":"NO_18","betValue":"18","color":"","id":"18","new":false,"odds":""},
        "NO_19":{"betType":"NO_19","betValue":"19","color":"","id":"19","new":false,"odds":""},
        "NO_1":{"betType":"NO_1","betValue":"1","color":"","id":"1","new":false,"odds":""},
        "NO_6":{"betType":"NO_6","betValue":"6","color":"","id":"6","new":false,"odds":""},
        "SUM_EVEN":{"betType":"SUM_EVEN","betValue":"合双","color":"","id":"57","new":false,"odds":""},
        "NO_7":{"betType":"NO_7","betValue":"7","color":"","id":"7","new":false,"odds":""},
        "NO_8":{"betType":"NO_8","betValue":"8","color":"","id":"8","new":false,"odds":""},
        "NO_9":{"betType":"NO_9","betValue":"9","color":"","id":"9","new":false,"odds":""},
        "NO_10":{"betType":"NO_10","betValue":"10","color":"","id":"10","new":false,"odds":""},
        "NO_11":{"betType":"NO_11","betValue":"11","color":"","id":"11","new":false,"odds":""},
        "NO_12":{"betType":"NO_12","betValue":"12","color":"","id":"12","new":false,"odds":""},
        "NO_46":{"betType":"NO_46","betValue":"46","color":"","id":"46","new":false,"odds":""},
        "NO_47":{"betType":"NO_47","betValue":"47","color":"","id":"47","new":false,"odds":""},
        "NO_48":{"betType":"NO_48","betValue":"48","color":"","id":"48","new":false,"odds":""},
        "NO_49":{"betType":"NO_49","betValue":"49","color":"","id":"49","new":false,"odds":""},
        "TAIL_BIG":{"betType":"TAIL_BIG","betValue":"尾大","color":"","id":"54","new":false,"odds":""},
        "EVEN":{"betType":"EVEN","betValue":"双","color":"","id":"53","new":false,"odds":""},
        "BLUE":{"betType":"BLUE","betValue":"蓝波","color":"","id":"59","new":false,"odds":""},
        "NO_40":{"betType":"NO_40","betValue":"40","color":"","id":"40","new":false,"odds":""},
        "NO_41":{"betType":"NO_41","betValue":"41","color":"","id":"41","new":false,"odds":""},
        "NO_42":{"betType":"NO_42","betValue":"42","color":"","id":"42","new":false,"odds":""},
        "NO_43":{"betType":"NO_43","betValue":"43","color":"","id":"43","new":false,"odds":""},
        "NO_44":{"betType":"NO_44","betValue":"44","color":"","id":"44","new":false,"odds":""},
        "NO_45":{"betType":"NO_45","betValue":"45","color":"","id":"45","new":false,"odds":""},
        "NO_35":{"betType":"NO_35","betValue":"35","color":"","id":"35","new":false,"odds":""},
        "NO_36":{"betType":"NO_36","betValue":"36","color":"","id":"36","new":false,"odds":""},
        "SMALL":{"betType":"SMALL","betValue":"小","color":"","id":"51","new":false,"odds":""},
        "NO_37":{"betType":"NO_37","betValue":"37","color":"","id":"37","new":false,"odds":""},
        "NO_38":{"betType":"NO_38","betValue":"38","color":"","id":"38","new":false,"odds":""},
        "NO_39":{"betType":"NO_39","betValue":"39","color":"","id":"39","new":false,"odds":""},
        "SUM_ODD":{"betType":"SUM_ODD","betValue":"合单","color":"","id":"56","new":false,"odds":""},
        "BIG":{"betType":"BIG","betValue":"大","color":"","id":"50","new":false,"odds":""},
        "TAIL_SMALL":{"betType":"TAIL_SMALL","betValue":"尾小","color":"","id":"55","new":false,"odds":""},
        "NO_30":{"betType":"NO_30","betValue":"30","color":"","id":"30","new":false,"odds":""},
        "NO_31":{"betType":"NO_31","betValue":"31","color":"","id":"31","new":false,"odds":""},
        "GREEN":{"betType":"GREEN","betValue":"绿波","color":"","id":"60","new":false,"odds":""},
        "NO_32":{"betType":"NO_32","betValue":"32","color":"","id":"32","new":false,"odds":""},
        "NO_33":{"betType":"NO_33","betValue":"33","color":"","id":"33","new":false,"odds":""},
        "NO_34":{"betType":"NO_34","betValue":"34","color":"","id":"34","new":false,"odds":""},
        "RED":{"betType":"RED","betValue":"红波","color":"","id":"58","new":false,"odds":""},
        "NO_24":{"betType":"NO_24","betValue":"24","color":"","id":"24","new":false,"odds":""},
        "NO_25":{"betType":"NO_25","betValue":"25","color":"","id":"25","new":false,"odds":""},
        "NO_26":{"betType":"NO_26","betValue":"26","color":"","id":"26","new":false,"odds":""},
        "NO_27":{"betType":"NO_27","betValue":"27","color":"","id":"27","new":false,"odds":""},
        "NO_28":{"betType":"NO_28","betValue":"28","color":"","id":"28","new":false,"odds":""},
        "NO_29":{"betType":"NO_29","betValue":"29","color":"","id":"29","new":false,"odds":""}}
    };
  },
  methods: {
    // getTemaData() {
    //   // 左边玩法选中后请求
    //   let PrimaryColorKind =  this.$store.state.lc_detail.PrimaryColorKind;
    //   let getname1 =  this.$store.state.lc_detail.getname1;
    //   let getname =  this.$store.state.lc_detail.getname;
    //   let parent = {
    //     "play":PrimaryColorKind, // 玩法
    //     "pId":getname1,  // 父id
    //     "sId":getname // 子id
    //   }
    //   this.$store.dispatch('getDataOdds', parent).then(res => { // 获取右边的赔率列表数据      
    //     if(res.code == 0) {
    //     }else {
    //     this.$message.error(res.msg);
    //     }
    //   });
    // }
  },
  created() {},
  mounted() {
    //  this.$store.state.lc_detail.inputTemaData = null;
    //  this.getTemaData();
  }
};
</script>
<style lang="scss">
    .red {
      background-color: red !important;
    }
    .blue {
      background-color: blue !important;
    }
    .green {
      background-color: green !important;
    }

</style>


