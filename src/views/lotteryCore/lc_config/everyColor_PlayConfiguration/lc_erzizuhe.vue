<template>
  <!-- 时时彩的 二字组合 -->
  <div class="HongKongColour lc_erzizuhe">
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
         <p><span class="spanone">00</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_00'].odds"></el-input></span></p>
         <p><span class="spanone">01</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_01'].odds"></el-input></span> </p>
         <p><span class="spanone">02</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_02'].odds"></el-input></span></p>
         <p><span class="spanone">03</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_03'].odds"></el-input></span></p>
         <p><span class="spanone">04</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_04'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">05</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_05'].odds"></el-input></span></p>
         <p><span class="spanone">06</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_06'].odds"></el-input></span> </p>
         <p><span class="spanone">07</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_07'].odds"></el-input></span></p>
         <p><span class="spanone">08</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_08'].odds"></el-input></span></p>
         <p><span class="spanone">09</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_09'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
        
         <p><span class="spanone">11</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_11'].odds"></el-input></span> </p>
         <p><span class="spanone">12</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_12'].odds"></el-input></span></p>
         <p><span class="spanone">13</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_13'].odds"></el-input></span></p>
         <p><span class="spanone">14</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_14'].odds"></el-input></span></p>
         <p><span class="spanone">15</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_15'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">16</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_16'].odds"></el-input></span> </p>
         <p><span class="spanone">17</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_17'].odds"></el-input></span></p>
         <p><span class="spanone">18</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_18'].odds"></el-input></span></p>
         <p><span class="spanone">19</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_19'].odds"></el-input></span></p>
         <p><span class="spanone">22</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_22'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">23</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_23'].odds"></el-input></span></p>
         <p><span class="spanone">24</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_24'].odds"></el-input></span></p>
         <p><span class="spanone">25</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_25'].odds"></el-input></span></p>
         <p><span class="spanone">26</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_26'].odds"></el-input></span> </p>
         <p><span class="spanone">27</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_27'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         
         <p><span class="spanone">28</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_28'].odds"></el-input></span></p>
         <p><span class="spanone">29</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_29'].odds"></el-input></span></p>
         <p><span class="spanone">33</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_33'].odds"></el-input></span></p>
         <p><span class="spanone">34</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_34'].odds"></el-input></span></p>
         <p><span class="spanone">35</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_35'].odds"></el-input></span></p> 
      </li>
     
      <li class="five-li">
       
         <p><span class="spanone">36</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_36'].odds"></el-input></span> </p>
         <p><span class="spanone">37</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_37'].odds"></el-input></span></p>
         <p><span class="spanone">38</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_38'].odds"></el-input></span></p>
         <p><span class="spanone">39</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_39'].odds"></el-input></span></p>
         <p><span class="spanone">44</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_44'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">45</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_45'].odds"></el-input></span></p>
         <p><span class="spanone">46</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_46'].odds"></el-input></span> </p>
         <p><span class="spanone">47</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_47'].odds"></el-input></span></p>
         <p><span class="spanone">48</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_48'].odds"></el-input></span></p>
         <p><span class="spanone">49</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_49'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">55</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_55'].odds"></el-input></span></p>
         <p><span class="spanone">56</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_56'].odds"></el-input></span> </p>
         <p><span class="spanone">57</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_57'].odds"></el-input></span></p>
         <p><span class="spanone">58</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_58'].odds"></el-input></span></p>
         <p><span class="spanone">59</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_59'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
        
         <p><span class="spanone">66</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_66'].odds"></el-input></span> </p>
         <p><span class="spanone">67</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_67'].odds"></el-input></span></p>
         <p><span class="spanone">68</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_68'].odds"></el-input></span></p>
         <p><span class="spanone">69</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_69'].odds"></el-input></span></p>
         <p><span class="spanone">77</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_77'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">78</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_78'].odds"></el-input></span></p>
         <p><span class="spanone">79</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_79'].odds"></el-input></span></p>
         <p><span class="spanone">88</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_88'].odds"></el-input></span></p>
         <p><span class="spanone">89</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_89'].odds"></el-input></span></p>     
         <p><span class="spanone">99</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_99'].odds"></el-input></span></p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_erzizuhe",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
       if(this.$store.state.lc_detail.inputTemaData&&!this.$store.state.lc_detail.inputTemaData.NO_98){        
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
       data:{"NO_00":{"number":"00","odds":"31.5","color":""},"NO_01":{"number":"01","odds":"16.4","color":""},"NO_02":{"number":"02","odds":"16.4","color":""},"NO_03":{"number":"03","odds":"16.4","color":""},"NO_04":{"number":"04","odds":"16.4","color":""},"NO_05":{"number":"05","odds":"16.4","color":""},"NO_06":{"number":"06","odds":"16.4","color":""},"NO_07":{"number":"07","odds":"16.4","color":""},"NO_08":{"number":"08","odds":"16.4","color":""},"NO_09":{"number":"09","odds":"16.4","color":""},"NO_11":{"number":"11","odds":"31.5","color":""},"NO_12":{"number":"12","odds":"16.4","color":""},"NO_13":{"number":"13","odds":"16.4","color":""},"NO_14":{"number":"14","odds":"16.4","color":""},"NO_15":{"number":"15","odds":"16.4","color":""},"NO_16":{"number":"16","odds":"16.4","color":""},"NO_17":{"number":"17","odds":"16.4","color":""},"NO_18":{"number":"18","odds":"16.4","color":""},"NO_19":{"number":"19","odds":"16.4","color":""},"NO_22":{"number":"22","odds":"31.5","color":""},"NO_23":{"number":"23","odds":"16.4","color":""},"NO_24":{"number":"24","odds":"16.4","color":""},"NO_25":{"number":"25","odds":"16.4","color":""},"NO_26":{"number":"26","odds":"16.4","color":""},"NO_27":{"number":"27","odds":"16.4","color":""},"NO_28":{"number":"28","odds":"16.4","color":""},"NO_29":{"number":"29","odds":"16.4","color":""},"NO_33":{"number":"33","odds":"31.5","color":""},"NO_34":{"number":"34","odds":"16.4","color":""},"NO_35":{"number":"35","odds":"16.4","color":""},"NO_36":{"number":"36","odds":"16.4","color":""},"NO_37":{"number":"37","odds":"16.4","color":""},"NO_38":{"number":"38","odds":"16.4","color":""},"NO_39":{"number":"39","odds":"16.4","color":""},"NO_44":{"number":"44","odds":"31.5","color":""},"NO_45":{"number":"45","odds":"16.4","color":""},"NO_46":{"number":"46","odds":"16.4","color":""},"NO_47":{"number":"47","odds":"16.4","color":""},"NO_48":{"number":"48","odds":"16.4","color":""},"NO_49":{"number":"49","odds":"16.4","color":""},"NO_55":{"number":"55","odds":"31.5","color":""},"NO_56":{"number":"56","odds":"16.4","color":""},"NO_57":{"number":"57","odds":"16.4","color":""},"NO_58":{"number":"58","odds":"16.4","color":""},"NO_59":{"number":"59","odds":"16.4","color":""},"NO_66":{"number":"66","odds":"31.5","color":""},"NO_67":{"number":"67","odds":"16.4","color":""},"NO_68":{"number":"68","odds":"16.4","color":""},"NO_69":{"number":"69","odds":"16.4","color":""},"NO_77":{"number":"77","odds":"31.5","color":""},"NO_78":{"number":"78","odds":"16.4","color":""},"NO_79":{"number":"79","odds":"16.4","color":""},"NO_88":{"number":"88","odds":"31.5","color":""},"NO_89":{"number":"89","odds":"16.4","color":""},"NO_99":{"number":"99","odds":"31.5","color":""}}
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

