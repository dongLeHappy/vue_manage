<template>
<div>
  <el-tree default-expand-all  
    :data="trees_checkbox_data" 
    @check="itmeCheckbox" 
    show-checkbox 
    :highlight-current="true"
    :props="defaultProps" 
    @node-click="handleNodeClick"
  >
  </el-tree>
</div>

</template>
<script>
import { mapState } from "vuex";
export default {
  name: 'sm_trees',
   computed: {
    ...mapState({
      trees_checkbox_data: state => state.sm_role.trees_checkbox_data,
      Details:state => state.sm_role.Details,
    }),
   },
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'permissionName'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      this.$store.dispatch("getListAccredit", {"rowRoleData": this.Details.rowRoleData,"type": 1,permissionId: data.permisssionId});
    },
    itmeCheckbox(data,val,res) {
      let permisssionId = data.permisssionId;
    }
  }
}
</script>