import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search_keyword:''
  },
  getters:{
    defaultSearchKeyWord:function(state){
      console.log("store-getter",state.search_keyword);
      return state.search_keyword;
    }
  },
  mutations: {
    setSearchKeyWord(state,payload){
      console.log("store-mutation",payload);
      state.search_keyword=payload;
    }
  },
  actions: {
    actionSearchKeyWord(context,payload){
      console.log("store-action",payload);
      context.commit('setSearchKeyWord',payload);
    }

  }
})
