import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chars: null
  },
  getters: {
    CHARS: state => {
      return state.chars;
    },
  },
  mutations: {
    SET_CHAR: (state, payload) => {
      state.chars = payload;
    },
  },
  actions: {
    GET_CHAR (context) {
    fetch('https://swapi.dev/api/people')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.results);
      context.commit('SET_CHAR', data.results);
    });
  }
  },
})
