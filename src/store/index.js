import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setState (state, data) {
      Object.keys(data).forEach(key => {
        if (key in state) {
          state[key] = data[key]
        }
      })
    }
  },
  actions: {
    getBaseData ({ state, commit }) {
      return Promise.resolve()
    }
  },
  modules: {
  }
})
