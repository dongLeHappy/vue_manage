<template>
  <div class="icon-group">
    <ul>
      <li v-for="(item,index) in iconGroup" :key="index">
        <svg-icon :icon-class="item.icon" class="this-icon"  @click="chooseIcon(item.icon)" /> 
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  prop:["icons"],
  data(){
    
    return{
      iconGroup:[
        {icon:"banner_1"},
        {icon:"baobiao_1"},
        {icon:"baobiao_2"},
        {icon:"baobiao_3"},
        {icon:"ceshi_1"},
        {icon:"ceshi_2"},
        {icon:"dailishang_1"},
        {icon:"dailishang_2"},
        {icon:"jiesuan_1"},
        {icon:"jiesuan_2"},
        {icon:"jiesuan_3"},
        {icon:"kaijiang_2"},
        {icon:"kaijiang_1"},
        {icon:"kaijiang_3"},
        {icon:"kaipan_1"},
        {icon:"kaipan_2"},
        {icon:"peizhi_1"},
        {icon:"peizhi-2"},
        // {icon:"shuju_1"},
        {icon:"shuju_2"},
        {icon:"xiaoxi_1"},
        {icon:"xiaoxi_2"},
        {icon:"xitongpeizhi_1"},
        {icon:"xitongpeizhi_2"},
        {icon:"xitongpeizhi_3"},
        {icon:"youxi_1"},
        {icon:"youxi_2"},
        {icon:"yunying_1"},
        {icon:"yunying_2"},
      ],
      icons:""
    }
  },
  methods:{
    chooseIcon(val) {
      this.icons = val;
      this.$store.dispatch("getIconName",val)
    }
  }
  
}
</script>
 <style lang="scss" scoped>
  .icon-group{
    ul{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      li{
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid gainsboro;
        background:#43586d;
        .this-icon{
          width: 15px;
          height: 15px;
        }
      }
    }
    
  }


</style>
