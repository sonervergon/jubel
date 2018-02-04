import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.store({
  state: {
    loadedContent: [{}],
    user: null
  },
  mutations: {},
  actions: {},
  getters: {
    loadedContent (state) {
      return state.loadedContent
    }
  }
})
