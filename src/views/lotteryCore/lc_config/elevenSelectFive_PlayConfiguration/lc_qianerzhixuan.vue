<template>
  <!-- 前二直选 -->
  <div class="HongKongColour lc_qianerzhixuan">
  <div  class="divheight">
    <p class="qiansanzhixuan-titie">第一球</p>
    <ul>
      <li class="five-li">
        <p style="padding-top:0px;"><span class="spanone a">号码</span> <span class="spantwo b">赔率</span> </p>
        <p style="padding-top:0px;"> <span class="spanone a">号码</span> <span class="spantwo b">赔率</span> </p>
        <p style="padding-top:0px;"><span class="spanone a">号码</span> <span class="spantwo b">赔率</span> </p>
         <p style="padding-top:0px;"><span class="spanone a">号码</span> <span class="spantwo b">赔率</span> </p>
          <p style="padding-top:0px;"><span class="spanone a">号码</span> <span class="spantwo b">赔率</span> </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">1</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_1.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">2</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_2.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">3</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_3.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">4</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_4.odds"></el-input></span>
        </p>
         <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">5</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_5.odds"></el-input></span>
        </p>
      </li>
       <li class="five-li">
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">6</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_6.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">7</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_7.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">8</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_8.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">9</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_9.odds"></el-input></span>
        </p>
         <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">10</span></span>
          <span class="spantwo"> <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_10.odds"></el-input> </span>
        </p>
      </li>
       <li class="five-li">
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">11</span> </span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_11.odds"></el-input></span>
        </p>
         <p> <span class="spanone">&nbsp;</span><span class="spantwo">&nbsp;&nbsp;</span></p>
         <p> <span class="spanone">&nbsp;</span><span class="spantwo">&nbsp;&nbsp;</span></p>
          <p> <span class="spanone">&nbsp;</span><span class="spantwo">&nbsp;&nbsp;</span></p>
         <p> <span class="spanone">&nbsp;</span><span class="spantwo">&nbsp;&nbsp;</span></p>
      </li>
    </ul>
</div>

 <div class="divheight">
    <p class="qiansanzhixuan-titie">第二球</p>
    <ul>
      <li class="five-li">
        <p style="padding-top:0px;"><span class="spanone a">号码</span> <span class="spantwo b">赔率</span> </p>
        <p style="padding-top:0px;"> <span class="spanone a">号码</span> <span class="spantwo b">赔率</span> </p>
        <p style="padding-top:0px;"><span class="spanone a">号码</span> <span class="spantwo b">赔率</span> </p>
         <p style="padding-top:0px;"><span class="spanone a">号码</span> <span class="spantwo b">赔率</span> </p>
          <p style="padding-top:0px;"><span class="spanone a">号码</span> <span class="spantwo b">赔率</span> </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">1</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_1.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">2</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_2.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">3</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_3.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">4</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_4.odds"></el-input></span>
        </p>
         <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">5</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_5.odds"></el-input></span>
        </p>
      </li>
       <li class="five-li">
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">6</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_6.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">7</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_7.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">8</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_8.odds"></el-input></span>
        </p>
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">9</span></span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_9.odds"></el-input></span>
        </p>
         <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">10</span></span>
          <span class="spantwo"> <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_10.odds"></el-input> </span>
        </p>
      </li>
       <li class="five-li">
        <p>
          <span class="spanone"><span class="border_yuan" style="background-color:red">11</span> </span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_11.odds"></el-input></span>
        </p>
         <p> <span class="spanone">&nbsp;</span><span class="spantwo">&nbsp;&nbsp;</span></p>
         <p> <span class="spanone">&nbsp;</span><span class="spantwo">&nbsp;&nbsp;</span></p>
          <p> <span class="spanone">&nbsp;</span><span class="spantwo">&nbsp;&nbsp;</span></p>
         <p> <span class="spanone">&nbsp;</span><span class="spantwo">&nbsp;&nbsp;</span></p>
      </li>
    </ul>
</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_qianerzhixuan",
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

