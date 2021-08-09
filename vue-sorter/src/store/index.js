import Vue from 'vue';
import Vuex from 'vuex';
import axiosInstance from '@/api/index'
import { PEOPLE } from '@/api/routes';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: '',
    time: '',
  },
  mutations: {
    getPeople(state, data) {
      state.people = data;
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
    startTimer() {

    }
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
    }
  },
})
