<template>
  <!--龙虎 -->
  <div class="HongKongColour lc_longhuaaa">
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
          <span class="spanone">和</span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.TIE.odds"></el-input>
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
  name: "lc_longhuaaa",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
       if(this.$store.state.lc_detail.inputTemaData){
       
       }else {
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
      data:{"TIE":{"betType":"TIE","betValue":"和","color":"","id":"764","new":false,"odds":""},"DRAGON":{"betType":"DRAGON","betValue":"龙","color":"","id":"762","new":false,"odds":""},"TIGER":{"betType":"TIGER","betValue":"虎","color":"","id":"763","new":false,"odds":""}}
    }
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

