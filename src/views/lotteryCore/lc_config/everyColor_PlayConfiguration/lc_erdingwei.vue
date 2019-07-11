<template>
  <!-- 时时彩的 二定位 -->
  <div class="HongKongColour lc_erdingwei">
    <ul class = "setul">
      <li class="five-li a">
        <p style="padding-top:0px; border-top: solid 1px #dcdfe6;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;border-top: solid 1px #dcdfe6;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;border-top: solid 1px #dcdfe6;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;border-top: solid 1px #dcdfe6;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;border-top: solid 1px #dcdfe6;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
      </li>
    </ul>
  <ul class="sethight">  
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
         <p><span class="spanone">10</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_10'].odds"></el-input></span></p>
         <p><span class="spanone">11</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_11'].odds"></el-input></span> </p>
         <p><span class="spanone">12</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_12'].odds"></el-input></span></p>
         <p><span class="spanone">13</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_13'].odds"></el-input></span></p>
         <p><span class="spanone">14</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_14'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">15</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_15'].odds"></el-input></span></p>
         <p><span class="spanone">16</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_16'].odds"></el-input></span> </p>
         <p><span class="spanone">17</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_17'].odds"></el-input></span></p>
         <p><span class="spanone">18</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_18'].odds"></el-input></span></p>
         <p><span class="spanone">19</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_19'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">20</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_20'].odds"></el-input></span></p>
         <p><span class="spanone">21</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_21'].odds"></el-input></span> </p>
         <p><span class="spanone">22</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_22'].odds"></el-input></span></p>
         <p><span class="spanone">23</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_23'].odds"></el-input></span></p>
         <p><span class="spanone">24</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_24'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">25</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_25'].odds"></el-input></span></p>
         <p><span class="spanone">26</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_26'].odds"></el-input></span> </p>
         <p><span class="spanone">27</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_27'].odds"></el-input></span></p>
         <p><span class="spanone">28</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_28'].odds"></el-input></span></p>
         <p><span class="spanone">29</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_29'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">30</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_30'].odds"></el-input></span></p>
         <p><span class="spanone">31</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_31'].odds"></el-input></span> </p>
         <p><span class="spanone">32</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_32'].odds"></el-input></span></p>
         <p><span class="spanone">33</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_33'].odds"></el-input></span></p>
         <p><span class="spanone">34</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_34'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">35</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_35'].odds"></el-input></span></p>
         <p><span class="spanone">36</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_36'].odds"></el-input></span> </p>
         <p><span class="spanone">37</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_37'].odds"></el-input></span></p>
         <p><span class="spanone">38</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_38'].odds"></el-input></span></p>
         <p><span class="spanone">39</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_39'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">40</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_40'].odds"></el-input></span></p>
         <p><span class="spanone">41</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_41'].odds"></el-input></span> </p>
         <p><span class="spanone">42</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_42'].odds"></el-input></span></p>
         <p><span class="spanone">43</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_43'].odds"></el-input></span></p>
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
         <p><span class="spanone">50</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_50'].odds"></el-input></span></p>
         <p><span class="spanone">51</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_51'].odds"></el-input></span> </p>
         <p><span class="spanone">52</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_52'].odds"></el-input></span></p>
         <p><span class="spanone">53</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_53'].odds"></el-input></span></p>
         <p><span class="spanone">54</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_54'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">55</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_55'].odds"></el-input></span></p>
         <p><span class="spanone">56</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_56'].odds"></el-input></span> </p>
         <p><span class="spanone">57</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_57'].odds"></el-input></span></p>
         <p><span class="spanone">58</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_58'].odds"></el-input></span></p>
         <p><span class="spanone">59</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_59'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">60</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_60'].odds"></el-input></span></p>
         <p><span class="spanone">61</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_61'].odds"></el-input></span> </p>
         <p><span class="spanone">62</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_62'].odds"></el-input></span></p>
         <p><span class="spanone">63</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_63'].odds"></el-input></span></p>
         <p><span class="spanone">64</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_64'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">65</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_65'].odds"></el-input></span></p>
         <p><span class="spanone">66</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_66'].odds"></el-input></span> </p>
         <p><span class="spanone">67</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_67'].odds"></el-input></span></p>
         <p><span class="spanone">68</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_68'].odds"></el-input></span></p>
         <p><span class="spanone">69</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_69'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">70</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_70'].odds"></el-input></span></p>
         <p><span class="spanone">71</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_71'].odds"></el-input></span> </p>
         <p><span class="spanone">72</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_72'].odds"></el-input></span></p>
         <p><span class="spanone">73</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_73'].odds"></el-input></span></p>
         <p><span class="spanone">74</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_74'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">75</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_75'].odds"></el-input></span></p>
         <p><span class="spanone">76</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_76'].odds"></el-input></span> </p>
         <p><span class="spanone">77</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_77'].odds"></el-input></span></p>
         <p><span class="spanone">78</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_78'].odds"></el-input></span></p>
         <p><span class="spanone">79</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_79'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">80</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_80'].odds"></el-input></span></p>
         <p><span class="spanone">81</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_81'].odds"></el-input></span> </p>
         <p><span class="spanone">82</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_82'].odds"></el-input></span></p>
         <p><span class="spanone">83</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_83'].odds"></el-input></span></p>
         <p><span class="spanone">84</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_84'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">85</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_85'].odds"></el-input></span></p>
         <p><span class="spanone">86</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_86'].odds"></el-input></span> </p>
         <p><span class="spanone">87</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_87'].odds"></el-input></span></p>
         <p><span class="spanone">88</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_88'].odds"></el-input></span></p>
         <p><span class="spanone">89</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_89'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">90</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_90'].odds"></el-input></span></p>
        <p>  <span class="spanone">&nbsp;</span><span class="spantwo">&nbsp;&nbsp;</span></p>
         <!-- <p><span class="spanone">91</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_91'].odds"></el-input></span> </p> -->
         <p><span class="spanone">92</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_92'].odds"></el-input></span></p>
         <p><span class="spanone">93</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_93'].odds"></el-input></span></p>
         <p><span class="spanone">94</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_94'].odds"></el-input></span></p>
      </li>
     <li class="five-li">
         <p><span class="spanone">95</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_95'].odds"></el-input></span></p>
         <p><span class="spanone">96</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_96'].odds"></el-input></span> </p>
         <p><span class="spanone">97</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_97'].odds"></el-input></span></p>
         <p><span class="spanone">98</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_98'].odds"></el-input></span></p>
         <p><span class="spanone">99</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_99'].odds"></el-input></span></p>
      </li>
    </ul> 
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_erdingwei",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
       if(this.$store.state.lc_detail.inputTemaData){
        //   var arr = []
        // let obj =  this.$store.state.lc_detail.inputTemaData
        //   for (let i in obj) {         
        //       let o = {    
        //         "number":obj[i].number,
        //         "odds":obj[i].odds,
        //         "color":obj[i].color, 
        //         "id":obj[i]
        //       };   
        //       arr.push(o)
        //   }
        //  this.$store.state.lc_detail.inputTemaData = arr;
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
       data:{"NO_00":{"number":"00","odds":"98","color":""},"NO_01":{"number":"01","odds":"98","color":""},"NO_02":{"number":"02","odds":"98","color":""},"NO_03":{"number":"03","odds":"98","color":""},"NO_04":{"number":"04","odds":"98","color":""},"NO_05":{"number":"05","odds":"98","color":""},"NO_06":{"number":"06","odds":"98","color":""},"NO_07":{"number":"07","odds":"98","color":""},"NO_08":{"number":"08","odds":"98","color":""},"NO_09":{"number":"09","odds":"98","color":""},"NO_10":{"number":"10","odds":"98","color":""},"NO_11":{"number":"11","odds":"98","color":""},"NO_12":{"number":"12","odds":"98","color":""},"NO_13":{"number":"13","odds":"98","color":""},"NO_14":{"number":"14","odds":"98","color":""},"NO_15":{"number":"15","odds":"98","color":""},"NO_16":{"number":"16","odds":"98","color":""},"NO_17":{"number":"17","odds":"98","color":""},"NO_18":{"number":"18","odds":"98","color":""},"NO_19":{"number":"19","odds":"98","color":""},"NO_20":{"number":"20","odds":"98","color":""},"NO_21":{"number":"21","odds":"98","color":""},"NO_22":{"number":"22","odds":"98","color":""},"NO_23":{"number":"23","odds":"98","color":""},"NO_24":{"number":"24","odds":"98","color":""},"NO_25":{"number":"25","odds":"98","color":""},"NO_26":{"number":"26","odds":"98","color":""},"NO_27":{"number":"27","odds":"98","color":""},"NO_28":{"number":"28","odds":"98","color":""},"NO_29":{"number":"29","odds":"98","color":""},"NO_30":{"number":"30","odds":"98","color":""},"NO_31":{"number":"31","odds":"98","color":""},"NO_32":{"number":"32","odds":"98","color":""},"NO_33":{"number":"33","odds":"98","color":""},"NO_34":{"number":"34","odds":"98","color":""},"NO_35":{"number":"35","odds":"98","color":""},"NO_36":{"number":"36","odds":"98","color":""},"NO_37":{"number":"37","odds":"98","color":""},"NO_38":{"number":"38","odds":"98","color":""},"NO_39":{"number":"39","odds":"98","color":""},"NO_40":{"number":"40","odds":"98","color":""},"NO_41":{"number":"41","odds":"98","color":""},"NO_42":{"number":"42","odds":"98","color":""},"NO_43":{"number":"43","odds":"98","color":""},"NO_44":{"number":"44","odds":"98","color":""},"NO_45":{"number":"45","odds":"98","color":""},"NO_46":{"number":"46","odds":"98","color":""},"NO_47":{"number":"47","odds":"98","color":""},"NO_48":{"number":"48","odds":"98","color":""},"NO_49":{"number":"49","odds":"98","color":""},"NO_50":{"number":"50","odds":"98","color":""},"NO_51":{"number":"51","odds":"98","color":""},"NO_52":{"number":"52","odds":"98","color":""},"NO_53":{"number":"53","odds":"98","color":""},"NO_54":{"number":"54","odds":"98","color":""},"NO_55":{"number":"55","odds":"98","color":""},"NO_56":{"number":"56","odds":"98","color":""},"NO_57":{"number":"57","odds":"98","color":""},"NO_58":{"number":"58","odds":"98","color":""},"NO_59":{"number":"59","odds":"98","color":""},"NO_60":{"number":"60","odds":"98","color":""},"NO_61":{"number":"61","odds":"98","color":""},"NO_62":{"number":"62","odds":"98","color":""},"NO_63":{"number":"63","odds":"98","color":""},"NO_64":{"number":"64","odds":"98","color":""},"NO_65":{"number":"65","odds":"98","color":""},"NO_66":{"number":"66","odds":"98","color":""},"NO_67":{"number":"67","odds":"98","color":""},"NO_68":{"number":"68","odds":"98","color":""},"NO_69":{"number":"69","odds":"98","color":""},"NO_70":{"number":"70","odds":"98","color":""},"NO_71":{"number":"71","odds":"98","color":""},"NO_72":{"number":"72","odds":"98","color":""},"NO_73":{"number":"73","odds":"98","color":""},"NO_74":{"number":"74","odds":"98","color":""},"NO_75":{"number":"75","odds":"98","color":""},"NO_76":{"number":"76","odds":"98","color":""},"NO_77":{"number":"77","odds":"98","color":""},"NO_78":{"number":"78","odds":"98","color":""},"NO_79":{"number":"79","odds":"98","color":""},"NO_80":{"number":"80","odds":"98","color":""},"NO_81":{"number":"81","odds":"98","color":""},"NO_82":{"number":"82","odds":"98","color":""},"NO_83":{"number":"83","odds":"98","color":""},"NO_84":{"number":"84","odds":"98","color":""},"NO_85":{"number":"85","odds":"98","color":""},"NO_86":{"number":"86","odds":"98","color":""},"NO_87":{"number":"87","odds":"98","color":""},"NO_88":{"number":"88","odds":"98","color":""},"NO_89":{"number":"89","odds":"98","color":""},"NO_90":{"number":"90","odds":"98","color":""},"NO_92":{"number":"92","odds":"98","color":""},"NO_93":{"number":"93","odds":"98","color":""},"NO_94":{"number":"94","odds":"98","color":""},"NO_95":{"number":"95","odds":"98","color":""},"NO_96":{"number":"96","odds":"98","color":""},"NO_97":{"number":"97","odds":"98","color":""},"NO_98":{"number":"98","odds":"98","color":""},"NO_99":{"number":"99","odds":"98","color":""}}
    };
  },
  methods: {
    getData() {}
  },
  created() {},
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss">
// .lc_erdingwei {
  .setul{
    height: 27px;
     width:calc(100% - 17px);
  }
   .sethight{
   max-height: 490px;
    overflow: hidden;
    overflow-y: auto;
   }
//  .zhongyi-li-span{
//  background: rgba(242, 242, 242, 1);
//  }

//   .zhongyi-li-span,.zhongyi-li-spana {
//     height: 25px;
//     line-height: 25px;
//     p {
//       border: solid 1px #dcdfe6;
//       width: 20%;
//       float: left;
//        border-top: none;
//       border-left: none;
//       // padding-top: 3px;
//       &:last-child {
//         // border-right: none;
//       }
//     }
//     span {
//       display: inline-block;
//       text-align: center;
//       font-size: 12px;
//     }
//     // &:last-child {
//     //   p {
//     //      border-bottom:  solid 1px #dcdfe6;
//     //   }
//     // }
//   }
//   .spanone {
//     padding-top: 3px;
//     width:20%;
//     height: 100%;
//     border-right: solid 1px #dcdfe6;
//     .border_yuan {
//       border: solid 1px #dcdfe6;
//       border-radius: 50%;
//       width: 20px;
//       height: 20px;
//       line-height: 20px;
//       color: white;
//     }
//   }

//   .spantwo {
//     padding-top: 3px;
//     width:78%;
//     .el-input {
//       width: 95%;
//       height: 100%;
//       line-height: 100%;
//       input {
//         height: 22px;width: 16vh;
//         text-align:center;
//       }
//     }
//   }
//   .spanone.a {
//     padding-top: 0px;
// }
//  .spantwo.b {
//     padding-top: 0px;
//    }
//  }

// @media (min-width: 700px) and (max-width: 1600px) {
//   .lc_erdingwei {
  .sethight{
   max-height: 380px;
   }
//     .spantwo {
//       width: 13vh !important;
//       .el-input {
//         input{
//                 width: 14vh;
//             }
//       }
//     }
//   }
// }
</style>

