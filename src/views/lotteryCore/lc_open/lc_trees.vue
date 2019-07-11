<template>
  <div>
    <el-tree 
      default-expand-all 
      :data="trees_AssigningUsers_Data"  
      :props="defaultProps" 
      :highlight-current="true"
      node-key="id"
      @node-click="handleNodeClick"
    >
    
    </el-tree>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
 name: 'sm_trees',
 props:["stata","userId"],
 computed: {
    ...mapState({
       trees_AssigningUsers_Data: state => state.lc_openManage.trees_AssigningUsers_Data,
      // openManageTreeData:state => state.sm_role.openManageTreeData,
    }),
  },
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      if(this.stata == 11){
        if(data.parentId != "0"){
           this.$store.state.lc_openManage.openManageTreeData = data; // 点击节点后，把数据保存起来      
        }else{
         this.$store.state.lc_openManage.openManageTreeData= { id: "", name: ""}
        }
        
      }
      
    }
  },

}
</script>