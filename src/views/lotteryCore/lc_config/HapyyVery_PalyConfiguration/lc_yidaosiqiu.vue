<template>
  <!-- 一到四球 -->
  <div class="HongKongColour lc_yidaosiqiu">
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
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_15.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:#33ccff">19</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_19.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:#33ccff">20</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_20.odds"></el-input>
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
      <li class="five-li">
        <p>
          <span class="spanone">尾大</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TAIL_BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">尾小</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TAIL_SMALL.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">合单</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SUM_ODD.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">合双</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SUM_EVEN.odds"></el-input>
          </span>
        </p>
       <p>
          <span class="spanone">-</span>
         <span class="spantwo">-</span>
        </p>
      </li>
        <li class="five-li">
        <p>
          <span class="spanone">东</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.EAST.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">南</span>
          <span class="spantwo"> 
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.SOUTH.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">西</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.WEST.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">北</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NORTH.odds"></el-input>
          </span>
        </p>
       <p>
          <span class="spanone">-</span>
         <span class="spantwo">-</span>
        </p>
      </li>
     <li class="five-li">
        <p>
          <span class="spanone">中</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.ZHONG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">发</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.FA.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">白</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.BAI.odds"></el-input>
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
          <span class="spanone">龙</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.DRAGON.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">虎</span>
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
  name: "lc_yidaosiqiu",
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
      data:{"WEST":{"betType":"WEST","betValue":"西","color":"","id":"1771","new":false,"odds":""},"ZHONG":{"betType":"ZHONG","betValue":"中","color":"","id":"1766","new":false,"odds":""},"NO_20":{"betType":"NO_20","betValue":"20","color":"","id":"1757","new":false,"odds":""},"ODD":{"betType":"ODD","betValue":"单","color":"","id":"1760","new":false,"odds":""},"NO_13":{"betType":"NO_13","betValue":"13","color":"","id":"1750","new":false,"odds":""},"NO_2":{"betType":"NO_2","betValue":"2","color":"","id":"1739","new":false,"odds":""},"NO_14":{"betType":"NO_14","betValue":"14","color":"","id":"1751","new":false,"odds":""},"NO_3":{"betType":"NO_3","betValue":"3","color":"","id":"1740","new":false,"odds":""},"SMALL":{"betType":"SMALL","betValue":"小","color":"","id":"1759","new":false,"odds":""},"NO_15":{"betType":"NO_15","betValue":"15","color":"","id":"1752","new":false,"odds":""},"NO_4":{"betType":"NO_4","betValue":"4","color":"","id":"1741","new":false,"odds":""},"NO_16":{"betType":"NO_16","betValue":"16","color":"","id":"1753","new":false,"odds":""},"NO_5":{"betType":"NO_5","betValue":"5","color":"","id":"1742","new":false,"odds":""},"NO_17":{"betType":"NO_17","betValue":"17","color":"","id":"1754","new":false,"odds":""},"NORTH":{"betType":"NORTH","betValue":"北","color":"","id":"1772","new":false,"odds":""},"NO_18":{"betType":"NO_18","betValue":"18","color":"","id":"1755","new":false,"odds":""},"NO_19":{"betType":"NO_19","betValue":"19","color":"","id":"1756","new":false,"odds":""},"NO_1":{"betType":"NO_1","betValue":"1","color":"","id":"1738","new":false,"odds":""},"SOUTH":{"betType":"SOUTH","betValue":"南","color":"","id":"1770","new":false,"odds":""},"NO_6":{"betType":"NO_6","betValue":"6","color":"","id":"1743","new":false,"odds":""},"EAST":{"betType":"EAST","betValue":"东","color":"","id":"1769","new":false,"odds":""},"SUM_EVEN":{"betType":"SUM_EVEN","betValue":"合双","color":"","id":"1765","new":false,"odds":""},"NO_7":{"betType":"NO_7","betValue":"7","color":"","id":"1744","new":false,"odds":""},"TIGER":{"betType":"TIGER","betValue":"虎","color":"","id":"1774","new":false,"odds":""},"NO_8":{"betType":"NO_8","betValue":"8","color":"","id":"1745","new":false,"odds":""},"NO_9":{"betType":"NO_9","betValue":"9","color":"","id":"1746","new":false,"odds":""},"SUM_ODD":{"betType":"SUM_ODD","betValue":"合单","color":"","id":"1764","new":false,"odds":""},"BIG":{"betType":"BIG","betValue":"大","color":"","id":"1758","new":false,"odds":""},"TAIL_SMALL":{"betType":"TAIL_SMALL","betValue":"尾小","color":"","id":"1763","new":false,"odds":""},"BAI":{"betType":"BAI","betValue":"白","color":"","id":"1768","new":false,"odds":""},"NO_10":{"betType":"NO_10","betValue":"10","color":"","id":"1747","new":false,"odds":""},"NO_11":{"betType":"NO_11","betValue":"11","color":"","id":"1748","new":false,"odds":""},"NO_12":{"betType":"NO_12","betValue":"12","color":"","id":"1749","new":false,"odds":""},"TAIL_BIG":{"betType":"TAIL_BIG","betValue":"尾大","color":"","id":"1762","new":false,"odds":""},"DRAGON":{"betType":"DRAGON","betValue":"龙","color":"","id":"1773","new":false,"odds":""},"EVEN":{"betType":"EVEN","betValue":"双","color":"","id":"1761","new":false,"odds":""},"FA":{"betType":"FA","betValue":"发","color":"","id":"1767","new":false,"odds":""}}
    };
  },
  methods: {
  //  getData() {
  //      // 左边玩法选中后请求
  //     let PrimaryColorKind =  this.$store.state.lc_detail.PrimaryColorKind;
  //     let getname1 =  this.$store.state.lc_detail.getname1;
  //     let getname =  this.$store.state.lc_detail.getname;
  //     let parent = {
  //       "play":PrimaryColorKind, // 玩法
  //       "pId":getname1,  // 父id
  //       "sId":getname // 子id
  //     }
  //     this.$store.dispatch('getDataOdds', parent).then(res => { // 获取右边的赔率列表数据
  //       if(res.code == 0) {
  //         //   let by =  res.data[0];
  //         //  this.inputTemaData = by;
  //       }else {
  //       this.$message.error(res.msg);
  //       }
  //     });
  //   }
  },
  created() {},
  mounted() {
    // this.$store.state.lc_detail.inputTemaData = null;  // 清空右边的数据
    // this.getData();
  }
};
</script>
<style lang="scss">

</style>

