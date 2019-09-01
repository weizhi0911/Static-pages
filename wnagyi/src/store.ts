import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import axios from 'axios';
export default new Vuex.Store({
  state: {
    information: [],
    isTrueOk: 0,
  },
  mutations: {
    saveForm(state, res) {
      state.information = res.data.result;
    },
  },
  actions: {
    async add(context) {
      await axios.get(
        'https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/wangyishouye')
        .then((res) => {
          context.commit('saveForm', res);
        });
    },
  },
});
