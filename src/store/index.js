import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, info) {
      info.count++
    },
    addToCart(state, info) {
      state.cartList.push(info)
    }    
  },
  actions: {
    addCart(context, info) {
      return new Promise((resolve, reject) => {
        // 1.查看是否添加过
        const oldInfo = context.state.cartList.find(item => item.iid === info.iid)
    
        // 2.+1或者新添加
        if (oldInfo) {
          context.commit('addCounter', oldInfo)
          resolve('当前商品数量+1')
          reject('error message')
        } else {
          info.count = 1
          info.checked = true
          context.commit('addToCart', info)
          resolve('新商品')
        }        
      })
    }     
  },
  getters: {
    cartList(state) {
      return state.cartList
    },
    cartCount(state, getters) {
      return getters.cartList.length
    }     
  }
})

export default store
