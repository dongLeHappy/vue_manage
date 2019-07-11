<template>
  <!-- 半波 -->
  <div class="HongKongColour lc_banbo">
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
          <span class="spanone">{{inputTemaData.RED_ODD.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.RED_ODD.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.RED_EVEN.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.RED_EVEN.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.RED_BIG.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.RED_BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.RED_SMALL.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.RED_SMALL.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.GREEN_ODD.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GREEN_ODD.odds"></el-input>
          </span>
        </p>
        
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">{{inputTemaData.GREEN_EVEN.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GREEN_EVEN.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.GREEN_BIG.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GREEN_BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.GREEN_SMALL.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.GREEN_SMALL.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.BLUE_ODD.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.BLUE_ODD.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.BLUE_EVEN.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.BLUE_EVEN.odds"></el-input>
          </span>
        </p>
       
      </li>
      <li class="five-li">      
        <p>
          <span class="spanone">{{inputTemaData.BLUE_BIG.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.BLUE_BIG.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">{{inputTemaData.BLUE_SMALL.betValue}}</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.BLUE_SMALL.odds"></el-input>
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
  name: "lc_banbo",
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
        "BLUE_BIG":{"betType":"BLUE_BIG","betValue":"蓝大","color":"","id":"87","new":false,"odds":""},
        "BLUE_SMALL":{"betType":"BLUE_SMALL","betValue":"蓝小","color":"","id":"88","new":false,"odds":""},
        "BLUE_ODD":{"betType":"BLUE_ODD","betValue":"蓝单","color":"","id":"85","new":false,"odds":""},
        "GREEN_SMALL":{"betType":"GREEN_SMALL","betValue":"绿小","color":"","id":"92","new":false,"odds":""},
        "RED_BIG":{"betType":"RED_BIG","betValue":"红大","color":"","id":"83","new":false,"odds":""},
        "BLUE_EVEN":{"betType":"BLUE_EVEN","betValue":"蓝双","color":"","id":"86","new":false,"odds":""},
        "RED_ODD":{"betType":"RED_ODD","betValue":"红单","color":"","id":"81","new":false,"odds":""},
        "GREEN_EVEN":{"betType":"GREEN_EVEN","betValue":"绿双","color":"","id":"90","new":false,"odds":""},
        "GREEN_BIG":{"betType":"GREEN_BIG","betValue":"绿大","color":"","id":"91","new":false,"odds":""},
        "RED_EVEN":{"betType":"RED_EVEN","betValue":"红双","color":"","id":"82","new":false,"odds":""},
        "GREEN_ODD":{"betType":"GREEN_ODD","betValue":"绿单","color":"","id":"89","new":false,"odds":""},
        "RED_SMALL":{"betType":"RED_SMALL","betValue":"红小","color":"","id":"84","new":false,"odds":""}
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

