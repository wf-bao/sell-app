import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//接口
import { getShopSellerReq } from '@/api/shop';

export default new Vuex.Store({
  state: {
    //店铺数据
    shopData:{}
  },
  // mutations同步方法 用于修改数据
  mutations: {
    SET_SHOP_DATA(state,data){
      console.log(state.shopData,data)
      state.shopData=data
    }
  },
  //actions 里面是异步方法
  actions: {
    //获取店铺数据
    async get_shop_data({commit}){
      let res=await getShopSellerReq()
      //解构
      let {data}=res.data
      //调用mutations里的方法
      commit('SET_SHOP_DATA',data)
    }
  },
  modules: {
  }
})
