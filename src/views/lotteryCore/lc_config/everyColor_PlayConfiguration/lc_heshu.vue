<template>
  <!-- 快3的 和数 -->
  <div class="HongKongColour lc_heshu">
      <template v-if='inputTemaData'>
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
          <span class="spanone">单</span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_1'].odds"></el-input></span>
        </p>
        <p>
          <span class="spanone">双</span>
          <span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_2'].odds" ></el-input></span>
        </p>
         <p>
          <span class="spanone">&nbsp;</span>
          <span class="spantwo">&nbsp;&nbsp;</span>
        </p>
         <p>
          <span class="spanone">&nbsp;</span>
          <span class="spantwo">&nbsp;&nbsp;</span>
        </p>
         <p>
          <span class="spanone">&nbsp;</span>
          <span class="spantwo">&nbsp;&nbsp;</span>
        </p>
      </li>    

    </ul>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_heshu",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
      //  if(this.$store.state.lc_detail.inputTemaData){
       
      //  }else {
      //     this.$store.state.lc_detail.inputTemaData = this.data;
      //  }
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
          "NO_1":{'number':'单','odds':""},
          "NO_2":{'number':'双','odds':""}}
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

