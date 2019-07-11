 import {
  getGameplayInfo,
  getBottomPourInfo,
  getLimitAmount,
  getDataPriceList,
  getDataOdds,
  getPreserveData,
  postMonetaryList,
  postStateInfo,
  getMenuList,
  getTableData
} from '@/api/lotteryCore/lc_config/lc_detail'

const defaultForm = {
  content: '', // 文章内容
}
const lc_detail = {
  state: {
    playManagementallData:[], // 游戏玩法管理列表数据
    bottomPourAllData:[],  // 游戏玩法下注值管理列表数据
    contentAllData:[],  // 用盘口金额限制配置
    isShowPadding16: false, // 是否增加 香港彩下 盘口通用配置 眉头 padding: 16px 样式
    allowEdit_pankoulimit:true,//盘口金额限制配置 input 不可编辑
    onKeyInputData:"",  // 一键输入input数据  
    onKeyInput:"",  // 一键输入
    thisLotteryName:"", // 获取当前点击的一级彩种名称
    postForma:Object.assign({}, defaultForm),
    pricePanagementInfo:[],  //(通用与通用上限的) 赔率管理左边玩法数据接口请求
    HongKongTheEdit:true, // input 不可编辑
    inputTemaData:null, // 赔率管理 右边数据展示
    PrimaryColorKind:"", //  默认监听  左边所有玩法的数据的第一个
    setPlayingMethod:"", //   默认显示  左边所有玩法的数据的第一个
    currentConfigId: '1', // 配置项id  默认为 选中 香港彩->游戏玩法管理
  },
  getters: {
      
  },
  mutations: {
    SET_GAMEPLAY_INFO: (state, data) => { // 初始化游戏玩法管理表格数据
      state.playManagementallData = data;
    },
    SET_BOTTOMPOUR_INFO: (state, data) => { // 初始化游戏玩法下注值表格数据
      state.bottomPourAllData = data
    },
    SET_LIMITAMOUT_INFO:(state, data) => { // 初始化盘口金额限制配置
      state.contentAllData = data; 
    },
    SET_PADDING_16:(state, data) => { // 设置是否应用padding:16 样式
      state.isShowPadding16 = data;
    },




    SET_DATAPRICE_LIST: (state, res) => {
      state.pricePanagementInfo =[];
      state.PrimaryColorKind ="";
      if(res ||res.data){
        state.pricePanagementInfo = res.data;
        state.PrimaryColorKind =res.data[0].name; // 默认第一个数据
      } 
    },
    SET_DATAODDS: (state, res) => {
      state.saveData ={};
      state.inputTemaData = null;
      if(res ||res.data){
        state.saveData = res.data[0];
       state.inputTemaData = res.data[0];
      } 
    },
    SET_EDIT: (state, res) => {
      state.HongKongTheEdit =res;
    
    },
    
  },
  actions:{
    getMenuListGroup({commit},data){
      return new Promise((resolve,reject) =>{
        getMenuList().then(res =>{
          resolve(res)
        }).catch(error =>{
          reject(error)
        })
      })
    },
    getDataPriceList({commit}, data) { //(通用与通用上限的) 赔率管理左边玩法数据接口请求
      return new Promise((resolve, reject) => {
        getDataPriceList(data).then(response => {
              const data = response.data.data
              commit('SET_DATAPRICE_LIST', data)
              resolve(data)
          }).catch(error => {
              reject(error)
          })
      })
    },
    getDataOdds({commit}, data) { //(通用与通用上限的) 赔率管理 获取右边的赔率列表数据  接口请求
      return new Promise((resolve, reject) => {
        getDataOdds(data).then(response => {
              const data = response.data.data
              commit('SET_DATAODDS', data)
              resolve(data)
          }).catch(error => {
              reject(error)
          })
      })
    },
    seteditTheseRule({commit},data) { //改变编辑状态
      commit('SET_EDIT', data)
    },
    getPreserveData({commit}, data) { //(通用与通用上限的) 赔率管理 保存  接口请求
      return new Promise((resolve, reject) => {
        getPreserveData(data).then(response => {
              resolve(response.data.data)
          }).catch(error => {
              reject(error)
          })
      })
    },
    postMonetaryList({commit}, data) { // 通用盘口金额限制配置接口 保存  接口请求
      return new Promise((resolve, reject) => {
        postMonetaryList(data).then(response => {
              resolve(response.data.data)
          }).catch(error => {
              reject(error)
          })
      })
    },
    postStateInfo({commit}, data) { // 启用与禁用 彩种配置中的接口请求
      return new Promise((resolve, reject) => {
        postStateInfo(data).then(response => {
              resolve(response.data.data)
          }).catch(error => {
              reject(error)
          })
      })
    },
  }
}

export default lc_detail;