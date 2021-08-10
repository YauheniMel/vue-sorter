import Vue from 'vue';
import Vuex from 'vuex';
import axiosInstance from '@/api/index'
import { PEOPLE } from '@/api/routes';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: '',
    time: '',
    intervalId: ''
  },
  mutations: {
    getPeople(state, data) {
      state.people = data;
    },
    setTime(state, second) {
      state.time = second;
    }
  },
  actions: {
    fetchPeople({ commit }) {
      return axiosInstance.get(PEOPLE())
      .then(( response ) => {
        const data = response.data;
        commit('getPeople', data);
      })
      .catch((err) => {
        console.error(err);
      });
    },
    deletePeople({ commit }) {
      commit('getPeople', '');
    },
    timer({ commit, state }, command) {
      let second = 0;
      if(command === 'start') {
        state.intervalId = setInterval(() => {
          commit('setTime', second++);
        }, 1000);
      } else if(command === 'stop') {
        commit('setTime', '');

        clearInterval(state.intervalId);
      }
    },
  },
  getters: {
    preparePeople: (state) => (number) => {
      if(number) {

        let allPeople = state.people.map(item => item);

        let peopleSeletion = [];
        for(let i = 0; i < number; i++) {
          const index = i * (Math.round(Math.random() * 4));

          peopleSeletion.push(...allPeople.slice(index, index + 1))
          allPeople.splice(index, 1);
        }

        state.people = peopleSeletion;
      }
    },
  },
})
