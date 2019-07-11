<template>
    <!-- 自定义投注上限设置 -->
    <div class="app-container">
        <el-form>
            <ul class="heard-search">
                <li>
                    <span class="rem_tit">当前使用的投注上限版本名称：</span>
                    <span class="rem_con">
                        <el-input style="width:170px;" v-model="betlimit.visonName" :disabled="disableSearh" placeholder="请输入投注上限版本名称" maxlength="15" />
                    </span>
                </li>
                <li>
                    <span class="rem_tit">是否开启：</span>
                    <span class="rem_con">
                        <el-select v-model="betlimit.isOpen" :disabled="disableSearh" placeholder="全部" >
                            <el-option label="全部" value=" "></el-option>
                            <el-option 
                            v-for="item in disableArr" 
                            :key="item.value" 
                            :label="item.name" 
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </span>
                </li>
            </ul>
            <el-form-item class="operation-box">
                <el-button type="primary" class="terraceUser_button" size="mini" @click="search">
                    <svg-icon icon-class="chaxun" /> 
                    查询</el-button>
                <el-button type="primary" class="terraceUser_button" size="mini" @click="reset">
                    <svg-icon icon-class="zhongzhi" />
                    重置</el-button>
                <el-button type="primary" class="terraceUser_button" size="mini" @click="startOrStop(148)">
                    <svg-icon icon-class="qiyong1" />
                    启用</el-button>
                <el-button type="primary" class="terraceUser_button" size="mini" @click="checkUserDetail(780)">
                    <svg-icon icon-class="chakanxiangqing" />
                    查看上限详情</el-button>
            </el-form-item>
        </el-form>
        <!-- 数据表格 -->
        <div class="terraceUser_table">
            <el-table 
                :header-cell-style="tableHeaderColor" 
                :cell-style="rowcellClass" 
                :key="tableKey" 
                :data="allData" 
                highlight-current-row 
                @current-change="handleCurrentChange" 
                style="width: 100%;" 
                border 
                class="tableAuto216"
                :height="currentPageSize*25 + 34"
                v-loading="loading"
                ref="tableScroll"
            >
                <el-table-column label width="35">
                    <template slot-scope="scope">
                        <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
                    </template>
                </el-table-column>
                <el-table-column label="序号" type="index" align="center" width="80" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span> {{scope.$index+(page - 1) * size + 1}} </span>
                    </template>
                </el-table-column>
                <el-table-column label="当前使用的投注上限版本名称" align="center" prop="name" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span> {{ scope.row.name ? scope.row.name : '-' }} </span>
                    </template>
                </el-table-column>
                <el-table-column label="版本说明" align="center" prop="description" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span> {{ scope.row.description ? scope.row.description : '-' }} </span>
                    </template>
                </el-table-column>
                <el-table-column sortable label="是否开启" align="center" prop="disable" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span> {{ scope.row.disable == true ? "未开启" : '已开启' }} </span>
                    </template>
                </el-table-column>
                <el-table-column label="修改人" align="center" prop="lastModifiedBy" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span> {{ scope.row.lastModifiedBy  ? scope.row.lastModifiedBy : '-' }} </span>
                    </template>
                </el-table-column>
                <el-table-column label="修改时间" width="140" align="center" prop="lastModifiedDate" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span> {{ scope.row.lastModifiedDate  ? scope.row.lastModifiedDate : '-' }} </span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
      <!-- 分页    数据要是大于1000条时，把分页释放掉-->
        <!-- <div class="terraceUser_pagination">
            <el-pagination
                :page-sizes="[10, 20, 50, 100]"
                :current-page.sync="page"
                :page-size="size"
                background
                :total="allData_total"
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="handleSizeChange"
                @current-change="getList"
            >
            </el-pagination>
        </div> -->
        <!-- 启用/禁用 -->
        <el-dialog :visible.sync="startStopUsingDialog" title="启用" width="350px" :top="dialogMt" :close-on-click-modal="false">
            <p style="text-align:center;">
                是否确定启用当前使用的投注上限版本
                <span style="color:red;">"{{rowData.name}}"</span>？
            </p>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" size="mini" @click="okStartStopUsing()">确 定</el-button>
                <el-button size="mini" @click="startStopUsingDialog = false">取 消</el-button>
            </span>
        </el-dialog>
        <!-- 查看用户详情 -->
        <el-dialog :visible.sync="detailDialog" v-if="detailDialog" title="查看详情" width="1160px" :top="dialogMt" :close-on-click-modal="false">
            <div class="dialog-box user-checkDetail">
                <userDetail :visonName="visonName" :tableId="table_id" ></userDetail>  
            </div>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button type="primary" @click="confirmEdit" size="mini">确 定</el-button> this.table_id -->
                <el-button @click="detailDialog = false" size="mini">关 闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { mapState } from "vuex";
import userDetail from './ag_userdefine_betlimit.1'
import { findByCode } from '../../../../api/select'
import { enableBetingHigher } from '@/api/agentPlatForm/gameManage/ag_userdefine_betlimit'
export default {
    components:{userDetail},
    data() {
        return {
            detailDialog:false, // 擦看用户详情弹框
            tableKey: 0,
            loading:false, // Loading 加载
            dialogHeight:0,
            dialogMt:this.dialogMt, // 弹出框上边距
            table_id:'',
            disableSearh: false, // 禁用搜索栏
            stateArr:[],
            rowData:"",
            visonName:"",
            startStopUsingDialog:false, // 启用弹框
        }
    },
    computed: {
        ...mapState({
            allData: state => state.ag_userdefine_betlimit.allData,
            allData_total: state => state.ag_userdefine_betlimit.allData_total,
            currentPageSize: state => state.ag_userdefine_betlimit.currentPageSize
        }),
        size: {
            get(){
                return this.$store.state.ag_userdefine_betlimit.size;
            },
            set(item){
                return  item;
            }
        },
        page: {
            get(){
                return this.$store.state.ag_userdefine_betlimit.page;
            },
            set(item){
                return  item;
            }
        },
        betlimit:{
            get(){
                return this.$store.state.ag_userdefine_betlimit.betlimit;
            },
            set(item){
                return  item;
            }
        },
        disableArr:{
            get(){
                return this.$store.state.ag_userdefine_betlimit.disableArr;
            },
            set(item){
                return  item;
            }
        }
    },
    
    methods: {
        reset(){ // 重置
            this.$store.state.ag_userdefine_betlimit.betlimit ={
                visonName : "",
                isOpen : ""
            }; 
        },
        search(){ // 查询列表 
            this.getList()
        },
        getList(val){ 
            if(!val) {
                val = 1;
            }
            this.disableSearh = true; // 禁用搜索栏
            this.loading = true; // loading加载
            this.table_id = "";
            this.$store.dispatch('getLimitPage',parseInt(val))
            let par = this.$store.state.ag_userdefine_betlimit.betlimit;
            let data = {  // 查询参数
                name:par.visonName || null,
                disable:par.isOpen || null,
                page:this.page-1,
                size:this.size,
            }
            this.$store.dispatch("getFindQutoPage",data).then(res=>{
                let currentPageSize = 2;
                if (res.success == 1) {
                    if(res.content.content.length > 0 ) {
                        currentPageSize = res.content.content.length;
                    }else {
                        currentPageSize = 2;
                    }
                }else{
                    this.$message.error(res.respMsg)
                }
                
                this.$store.dispatch('getLimitTableHeight', currentPageSize)
                this.$store.state.lc_playBetValue.disableControl = false;
                this.$refs.tableScroll.bodyWrapper.scrollTop = 0; 
                this.loading = false; // loading加载
                this.disableSearh = false;
            })
        },
        startOrStop(h){ // 启用
            this.dialogHeight = h;
            this.judgeScree(this.dialogHeight);
            if(!this.rowData) {
                this.$message.warning("请选择一条数据");
                return false;
            }
            if (this.rowData.disable == false) {
                this.$message.warning("该数据已被启用，不可操作");
                return false;
            }
            this.startStopUsingDialog = true;
        },
        okStartStopUsing() {// 确认启用
            enableBetingHigher({quotaLargeVerId:this.rowData.id}).then(res => {
                if(res.data.success == 1){
                    this.$message.success(res.data.respMsg);
                    this.getList()
                }else{
                    this.$message.error(res.data.respMsg)
                }
                this.startStopUsingDialog = false;
            })
        
        },
        checkUserDetail(h){ // 查看用户详情
            if(!this.table_id) {
                this.$message.warning('请选中一条数据');
                return false;
            }
            this.detailDialog = true;
            this.dialogHeight = h;
            this.judgeScree(this.dialogHeight);

        },
        handleCurrentChange(val){
            if(val != null) {
                this.table_id = val.id;
                this.rowData = val;
                this.visonName = val.name
            }
        },
        handleSizeChange(val){
            this.$store.dispatch('getLimitPageSize', val);
            this.getList();
        },
        tableHeaderColor() { // 修改row header的背景颜色与内边距
            return "background-color:rgb(247, 251, 254); padding: 4px 0;text-align:center;";
        },
        rowcellClass() { // 行的cell样式
            return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
        },
        judgeScree(val) { // 判断屏幕大小进行操作
            let a = document.body.offsetHeight - val;
            this.dialogMt = a / 2 + 'px';
            if(a < 0){
                 this.dialogMt = 0 + 'px';
            }
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
        })
        findByCode({code: 'ODDSLARGEVER_OPENABLE'}).then(res =>{
            let resData = res.data
            if(resData.success == 1) { 
                resData.content['ODDSLARGEVER_OPENABLE'].map(item => {
                    this.stateArr.push({name: item.name == '是'? '已开启' : '未开启', value: item.value})
                    // this.$store.state.ag_userdefine_betlimit.disableArr.push({name: item.name == '是'? '已开启' : '未开启', value: item.value})
                })
                this.$store.state.ag_userdefine_betlimit.disableArr = this.stateArr;
            }else {
                this.$message.error(resData.respMsg)
            }
        })
        window.onresize = () =>{
            this.judgeScree(this.dialogHeight);
        };
    },
    created() {
        if(this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)){
            if(this.$store.getters.currentView == this.$route.name) {
                // 更新已关闭的菜单 数组状态
                let newalreadyClose = [] // 定义一个空数组存 过滤左侧点击的数据
                this.$store.getters.alreadyClose.forEach(value => {
                    if(value != this.$store.getters.currentView){
                        newalreadyClose.push(value)
                    }
                })
                this.$store.dispatch("updataTabClose",newalreadyClose)

                this.$store.state.ag_userdefine_betlimit.allData = []
                this.$store.state.ag_userdefine_betlimit.allData_total = 0;
                this.$store.state.ag_userdefine_betlimit.page = 1;
                this.$store.state.ag_userdefine_betlimit.size = 10;
                this.$store.dispatch('getLcFirstTableHeight', 2)
            }
        }else {
            if(this.$store.state.lc_playBetValue.allData.length > 0) {
                this.getList()
            }
        }
    }

}
</script>
<style lang="scss" >

</style>


