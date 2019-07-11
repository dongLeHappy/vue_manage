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
      trees_AssigningUsers_Data: state => state.sm_role.trees_AssigningUsers_Data,
      Details:state => state.sm_role.Details,
    }),
  },
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'permissionName',
        parentId:""
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      this.$store.state.sm_permissions.treeParentId = data.parentId;
      if(this.stata == 1) {
        this.$store.dispatch("getTableAssigningUsers", {"rowRoleData": this.Details.rowRoleData,"type": 2,id: data.id})
      }else if(this.stata == 2) {
        this.$store.dispatch("getDetailUserTable", {"userId": this.userId,"id": data.id})
      }else if(this.stata == 3) {
        this.$store.state.sm_role.permissionTreedata = data;
      }
    }
  }
}
</script>