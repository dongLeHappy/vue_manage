<template>
  <!-- 五选中一 /六选中一七选中一/八选中一九选中一/十选中一/特平中一/特平中二/特平中三/特平中四/特平中五 -->
  <div class="HongKongColour lc_zhongyi">
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
            <span class="border_yuan" style="background-color:green">11</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_11.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">21</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_21.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">31</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_31.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">41</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_41.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
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
            <span class="border_yuan" style="background-color:red">12</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_12.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">22</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_22.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">32</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_32.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">42</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_42.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">3</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_3.odds"></el-input>
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
            <span class="border_yuan" style="background-color:red">23</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_23.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">33</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_33.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">43</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_43.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">4</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_4.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">14</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_14.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">24</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_24.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">34</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_34.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">44</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_44.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">5</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_5.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">15</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_15.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">25</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_25.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">35</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_35.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">45</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_45.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">6</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_6.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">16</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_16.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">26</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_26.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">36</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_36.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">46</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_46.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
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
            <span class="border_yuan" style="background-color:green">17</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_17.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">27</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_27.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">37</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_37.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">47</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_47.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
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
            <span class="border_yuan" style="background-color:red">18</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_18.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">28</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_28.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">38</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_38.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">48</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_48.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">9</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_9.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">19</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_19.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">29</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_29.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">39</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_39.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:green">49</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_49.odds"></el-input>
          </span>
        </p>
      </li>
      <li class="five-li">
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:blue">10</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_10.odds"></el-input>
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
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">30</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_30.odds"></el-input>
          </span>
        </p>
        <p>
          <span class="spanone">
            <span class="border_yuan" style="background-color:red">40</span>
          </span>
          <span class="spantwo">
            <el-input :disabled="HongKongTheEdit" v-model="inputTemaData.NO_40.odds"></el-input>
          </span>
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
  name: "lc_zhongyi",
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
        "NO_20":{"betType":"NO_20","betValue":"20","color":"","id":"148","new":false,"odds":""},
        "NO_21":{"betType":"NO_21","betValue":"21","color":"","id":"149","new":false,"odds":""},
        "NO_22":{"betType":"NO_22","betValue":"22","color":"","id":"150","new":false,"odds":""},
        "NO_23":{"betType":"NO_23","betValue":"23","color":"","id":"151","new":false,"odds":""},
        "NO_13":{"betType":"NO_13","betValue":"13","color":"","id":"141","new":false,"odds":""},
        "NO_2":{"betType":"NO_2","betValue":"2","color":"","id":"130","new":false,"odds":""},
        "NO_14":{"betType":"NO_14","betValue":"14","color":"","id":"142","new":false,"odds":""},
        "NO_3":{"betType":"NO_3","betValue":"3","color":"","id":"131","new":false,"odds":""},
        "NO_15":{"betType":"NO_15","betValue":"15","color":"","id":"143","new":false,"odds":""},
        "NO_4":{"betType":"NO_4","betValue":"4","color":"","id":"132","new":false,"odds":""},"NO_16":{"betType":"NO_16","betValue":"16","color":"","id":"144","new":false,"odds":""},"NO_5":{"betType":"NO_5","betValue":"5","color":"","id":"133","new":false,"odds":""},"NO_17":{"betType":"NO_17","betValue":"17","color":"","id":"145","new":false,"odds":""},"NO_18":{"betType":"NO_18","betValue":"18","color":"","id":"146","new":false,"odds":""},"NO_19":{"betType":"NO_19","betValue":"19","color":"","id":"147","new":false,"odds":""},"NO_1":{"betType":"NO_1","betValue":"1","color":"","id":"129","new":false,"odds":""},"NO_6":{"betType":"NO_6","betValue":"6","color":"","id":"134","new":false,"odds":""},"NO_7":{"betType":"NO_7","betValue":"7","color":"","id":"135","new":false,"odds":""},"NO_8":{"betType":"NO_8","betValue":"8","color":"","id":"136","new":false,"odds":""},"NO_9":{"betType":"NO_9","betValue":"9","color":"","id":"137","new":false,"odds":""},"NO_10":{"betType":"NO_10","betValue":"10","color":"","id":"138","new":false,"odds":""},"NO_11":{"betType":"NO_11","betValue":"11","color":"","id":"139","new":false,"odds":""},"NO_12":{"betType":"NO_12","betValue":"12","color":"","id":"140","new":false,"odds":""},"NO_46":{"betType":"NO_46","betValue":"46","color":"","id":"174","new":false,"odds":""},"NO_47":{"betType":"NO_47","betValue":"47","color":"","id":"175","new":false,"odds":""},"NO_48":{"betType":"NO_48","betValue":"48","color":"","id":"176","new":false,"odds":""},"NO_49":{"betType":"NO_49","betValue":"49","color":"","id":"177","new":false,"odds":""},"NO_40":{"betType":"NO_40","betValue":"40","color":"","id":"168","new":false,"odds":""},"NO_41":{"betType":"NO_41","betValue":"41","color":"","id":"169","new":false,"odds":""},"NO_42":{"betType":"NO_42","betValue":"42","color":"","id":"170","new":false,"odds":""},"NO_43":{"betType":"NO_43","betValue":"43","color":"","id":"171","new":false,"odds":""},"NO_44":{"betType":"NO_44","betValue":"44","color":"","id":"172","new":false,"odds":""},"NO_45":{"betType":"NO_45","betValue":"45","color":"","id":"173","new":false,"odds":""},"NO_35":{"betType":"NO_35","betValue":"35","color":"","id":"163","new":false,"odds":""},"NO_36":{"betType":"NO_36","betValue":"36","color":"","id":"164","new":false,"odds":""},"NO_37":{"betType":"NO_37","betValue":"37","color":"","id":"165","new":false,"odds":""},"NO_38":{"betType":"NO_38","betValue":"38","color":"","id":"166","new":false,"odds":""},"NO_39":{"betType":"NO_39","betValue":"39","color":"","id":"167","new":false,"odds":""},"NO_30":{"betType":"NO_30","betValue":"30","color":"","id":"158","new":false,"odds":""},"NO_31":{"betType":"NO_31","betValue":"31","color":"","id":"159","new":false,"odds":""},"NO_32":{"betType":"NO_32","betValue":"32","color":"","id":"160","new":false,"odds":""},"NO_33":{"betType":"NO_33","betValue":"33","color":"","id":"161","new":false,"odds":""},"NO_34":{"betType":"NO_34","betValue":"34","color":"","id":"162","new":false,"odds":""},"NO_24":{"betType":"NO_24","betValue":"24","color":"","id":"152","new":false,"odds":""},"NO_25":{"betType":"NO_25","betValue":"25","color":"","id":"153","new":false,"odds":""},"NO_26":{"betType":"NO_26","betValue":"26","color":"","id":"154","new":false,"odds":""},"NO_27":{"betType":"NO_27","betValue":"27","color":"","id":"155","new":false,"odds":""},"NO_28":{"betType":"NO_28","betValue":"28","color":"","id":"156","new":false,"odds":""},"NO_29":{"betType":"NO_29","betValue":"29","color":"","id":"157","new":false,"odds":""}}
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

