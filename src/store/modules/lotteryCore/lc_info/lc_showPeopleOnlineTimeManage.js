import { findPage } from '@/api/lotteryCore/lc_info/lc_second'

const lc_showOnlinePeople = {
    state: {
        allData: [],
        allDataCount: 0,
        currentPageSize: 2,
        size: 1000,
        page: 1,
        showOnlinePeople: { // 查询条件
            secondPercentVison: "",
            firstLevel: "",
            secondLevel: "",
            disabledSecond: true,
        },
        kindAData: [],
        kindBData: [],
        firstLotterySelect: [], // 一级彩种下拉数据
        secondLotterySelect: [], // 二级彩种下拉选择数据
        disableArr: [], // 状态下拉数据
        lotteryCategoryArr: [], // 彩种性质下拉数据
        frequencyArr: [], // 彩种类型
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
}

export default lc_showOnlinePeople