import Vuex from 'vuex'
import Vue from 'vue'
import slide from './slide'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    slide,
  }
})