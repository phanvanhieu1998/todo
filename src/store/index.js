import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios,axios)

export default new Vuex.Store({
  state: {
    totalData:0,
    list_of_data:[],
    limit:10,
    page:1
  },
  getters:{
    list_paging: (state) => {
      let list =[]

     let ofset = (state.page-1) *state.limit
      
      list = state.list_of_data

      list = list.slice(ofset,state.limit *state.page)

      return list
      
    }
  },
  mutations: {
    set_list_of_data: (state, list_of_data) => state.list_of_data = list_of_data,
    set_page:(state, page) => state.page = page,
    set_totalData:(state, totalData) => state.totalData = totalData
  },

  actions: {
    loadData({ commit}){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.data)
      .then (list_of_data => {
        console.log(list_of_data)
        commit('set_list_of_data',list_of_data)
        commit('set_totalData',list_of_data.length)
      })
    }
  },
  modules: {
  }
})
