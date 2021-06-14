import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'https://swapi.dev/api',
    favorites: []
  },
  getters: {
    GET_URL: state => {
      return state.baseUrl;
    },
    GET_FAVORITES: state => {
      return state.favorites;
    },
  },
  mutations: {
    SET_FAVORITES: (state, payload) => {
      state.favorites = payload;
    },
  },
  actions: {
    SET_FAVORITES (context, payload) {
      context.commit('SET_FAVORITES', payload)
    },
  },
})
