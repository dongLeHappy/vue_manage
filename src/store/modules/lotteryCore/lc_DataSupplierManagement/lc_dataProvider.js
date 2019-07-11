import {
    findPage,
} from '@/api/lotteryCore/lc_DataSupplierManagement/lc_dataProvider'
const lc_dataProvider = { //  数据供应商管理--信息管理
    state: {
        tableData: [], // 列表数据all
        datalist_total: 0, // 列表数据总条数
        page: 1, // 当前页
        pageSize: 1000, //当前条
        currentPageSize: 2, // 表格高度
        dialogData: [],
        formInline: { // 查询表格监听数据
            supplierName: "", // 供应商名称
            kindA: "", // 一级彩种
            kindB: "", // 二级彩种
            dateTime: [], // 服务到期时间
            disabledSecond: true, // 二级彩种不可编辑
        },
        firstLotterySelect: [], // 一级彩种下拉选择数据
        secondLotterySelect: [], // 二级彩种下拉选择数据
    },
    getters: {},
    mutations: {
        SET_RATAPROVIDER_TABLEINFO: (state, res) => {
            state.tableData = res.content;
            state.datalist_total = res.totalElements;
        },

        SET_DATAPROVIDERPAGE_DATA: (state, res) => {
            state.page = res;
        },
        SET_DATAPROVIDERPAGESIZE_DATA: (state, res) => {
            state.pageSize = res;
        },
        SET_DATAPROVIDERTABLEHEIGHT: (state, res) => {
            state.currentPageSize = res;
        }
    },
    actions: {
        getLcRataProviderTableList({ commit }, data) { //数据供应商管理列表查询接口
            return new Promise((resolve, reject) => {
                findPage(data).then(res => {
                    if (res.data.success == 1) {
                        let data = res.data;
                        commit('SET_RATAPROVIDER_TABLEINFO', data.content)
                        resolve(data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: res.data.respMsg, success: 2 }
                        commit('SET_RATAPROVIDER_TABLEINFO', data);
                        resolve(data)
                    }

                }).catch(err => {
                    reject(err)
                })
            })
        },
   
        // addProviderInfo({ commit }, data) { //数据供应商管理信息管理新增接口
        //     return new Promise((resolve, reject) => {
        //         addProviderInfo(data).then(res => {
        //             let par = res.data.data;
        //             //  commit("SET_ADDPROVIDER_INFO", res.data.data)
        //             resolve(par)
        //         }).catch(err => {
        //             reject(err)
        //         })
        //     })
        // },


        getDataproviderPage({ commit }, data) { //保存当前页到全局
            commit("SET_DATAPROVIDERPAGE_DATA", data)
        },
        getDataproviderPageSize({ commit }, data) { //保存当前条到全局
            commit("SET_DATAPROVIDERPAGESIZE_DATA", data)
        },
        getDataproviderTableHeight({ commit }, data) { //设置表格高度
            commit("SET_DATAPROVIDERTABLEHEIGHT", data)
        }
    }
}


export default lc_dataProvider